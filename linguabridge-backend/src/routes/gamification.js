// src/routes/gamification.js
const router = require('express').Router();
const pool   = require('../config/db');
const { protect, authorize } = require('../middleware/auth');

// ── GET /api/gamification/leaderboard ────────────────────────────────────────
router.get('/leaderboard', async (req, res, next) => {
  try {
    const { period = 'weekly', limit = 20 } = req.query;

    let dateFilter = '';
    if (period === 'weekly')  dateFilter = `AND p.last_accessed_at > NOW() - INTERVAL '7 days'`;
    if (period === 'monthly') dateFilter = `AND p.last_accessed_at > NOW() - INTERVAL '30 days'`;

    const { rows } = await pool.query(`
      SELECT
        u.id, u.name, u.avatar_url, u.level, u.xp, u.streak_days,
        COUNT(DISTINCT CASE WHEN p.completed_at IS NOT NULL THEN p.course_id END)::int AS courses_completed,
        RANK() OVER (ORDER BY u.xp DESC) AS rank
      FROM users u
      LEFT JOIN progress p ON p.student_id = u.id ${dateFilter}
      WHERE u.role = 'student'
      GROUP BY u.id
      ORDER BY u.xp DESC
      LIMIT $1
    `, [limit]);

    // Find current user rank
    const myRankRes = await pool.query(`
      SELECT rank FROM (
        SELECT id, RANK() OVER (ORDER BY xp DESC) AS rank
        FROM users WHERE role = 'student'
      ) r WHERE id = $1
    `, [req.user.id]);

    res.json({ leaderboard: rows, myRank: myRankRes.rows[0]?.rank || null });
  } catch (err) { next(err); }
});

// ── GET /api/gamification/badges ─────────────────────────────────────────────
router.get('/badges', protect, async (req, res, next) => {
  try {
    const { rows } = await pool.query(`
      SELECT b.*, ub.earned_at
      FROM badges b
      LEFT JOIN user_badges ub ON ub.badge_id = b.id AND ub.user_id = $1
      ORDER BY b.xp_required ASC
    `, [req.user.id]);
    res.json({ badges: rows });
  } catch (err) { next(err); }
});

// ── POST /api/gamification/add-xp ────────────────────────────────────────────
router.post('/add-xp', protect, async (req, res, next) => {
  try {
    const { xp = 0, reason = 'lesson' } = req.body;
    if (xp <= 0) return res.status(400).json({ message: 'XP must be positive' });

    const { rows } = await pool.query(
      `UPDATE users SET xp = xp + $1 WHERE id = $2 RETURNING xp, level`,
      [xp, req.user.id]
    );

    const newXP = rows[0].xp;
    const newLevel = xpToLevel(newXP);

    // Update level if changed
    if (newLevel !== rows[0].level) {
      await pool.query('UPDATE users SET level = $1 WHERE id = $2', [newLevel, req.user.id]);
    }

    // Check & award badges
    const newBadges = await checkAndAwardBadges(req.user.id, newXP);

    res.json({ xp: newXP, level: newLevel, newBadges });
  } catch (err) { next(err); }
});

// ── POST /api/gamification/update-streak ─────────────────────────────────────
router.post('/update-streak', protect, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT streak_days, last_activity_date FROM users WHERE id = $1',
      [req.user.id]
    );
    const user = rows[0];
    const today = new Date().toISOString().split('T')[0];
    const lastDate = user.last_activity_date ? user.last_activity_date.toISOString().split('T')[0] : null;

    let newStreak = user.streak_days || 0;
    if (lastDate === today) {
      return res.json({ streak: newStreak, message: 'Already updated today' });
    } else if (lastDate === getPreviousDay(today)) {
      newStreak += 1; // consecutive day
    } else {
      newStreak = 1; // streak broken
    }

    await pool.query(
      'UPDATE users SET streak_days = $1, last_activity_date = $2 WHERE id = $3',
      [newStreak, today, req.user.id]
    );

    // Check streak badges
    if (newStreak === 7 || newStreak === 30) {
      await checkAndAwardBadges(req.user.id, null, newStreak);
    }

    res.json({ streak: newStreak, message: `🔥 ${newStreak} day streak!` });
  } catch (err) { next(err); }
});

// ── GET /api/gamification/daily-challenge ────────────────────────────────────
router.get('/daily-challenge', protect, async (req, res, next) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    let { rows } = await pool.query(
      'SELECT * FROM daily_challenges WHERE date = $1', [today]
    );

    // Auto-generate today's challenge if none exists
    if (!rows.length) {
      const challenges = [
        { title: 'Grammar Blitz', description: 'Complete 5 grammar exercises correctly in a row!', xp_reward: 75, challenge_data: { type: 'grammar', target: 5 } },
        { title: 'Vocabulary Master', description: 'Learn and use 10 new vocabulary words today!', xp_reward: 60, challenge_data: { type: 'vocabulary', target: 10 } },
        { title: 'Reading Champion', description: 'Read and understand 3 English passages today!', xp_reward: 80, challenge_data: { type: 'reading', target: 3 } },
        { title: 'Streak Keeper', description: 'Complete at least 2 lessons today to maintain your streak!', xp_reward: 50, challenge_data: { type: 'lessons', target: 2 } },
        { title: 'Perfect Score', description: 'Get 100%% on any quiz today!', xp_reward: 100, challenge_data: { type: 'perfect_quiz', target: 1 } },
      ];
      const challenge = challenges[new Date().getDay() % challenges.length];
      const res2 = await pool.query(
        `INSERT INTO daily_challenges (date, title, description, xp_reward, challenge_data)
         VALUES ($1,$2,$3,$4,$5) RETURNING *`,
        [today, challenge.title, challenge.description, challenge.xp_reward, JSON.stringify(challenge.challenge_data)]
      );
      rows = res2.rows;
    }

    const challenge = rows[0];

    // Check if user already completed it
    const completed = await pool.query(
      'SELECT id, score FROM user_daily_completions WHERE user_id = $1 AND challenge_id = $2',
      [req.user.id, challenge.id]
    );

    res.json({ challenge, completed: completed.rows[0] || null });
  } catch (err) { next(err); }
});

// ── POST /api/gamification/complete-daily ────────────────────────────────────
router.post('/complete-daily', protect, async (req, res, next) => {
  try {
    const { challengeId, score } = req.body;

    const exists = await pool.query(
      'SELECT id FROM user_daily_completions WHERE user_id = $1 AND challenge_id = $2',
      [req.user.id, challengeId]
    );
    if (exists.rows.length) return res.status(409).json({ message: 'Already completed today' });

    const challenge = await pool.query('SELECT xp_reward FROM daily_challenges WHERE id = $1', [challengeId]);
    if (!challenge.rows.length) return res.status(404).json({ message: 'Challenge not found' });

    await pool.query(
      'INSERT INTO user_daily_completions (user_id, challenge_id, score) VALUES ($1,$2,$3)',
      [req.user.id, challengeId, score || 100]
    );

    const xpReward = challenge.rows[0].xp_reward;
    await pool.query('UPDATE users SET xp = xp + $1 WHERE id = $2', [xpReward, req.user.id]);

    res.json({ message: `🎉 Daily challenge complete! +${xpReward} XP`, xpEarned: xpReward });
  } catch (err) { next(err); }
});

// ── GET /api/gamification/my-stats ───────────────────────────────────────────
router.get('/my-stats', protect, async (req, res, next) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        u.xp, u.level, u.streak_days, u.total_time_minutes,
        COUNT(DISTINCT e.course_id)::int                                    AS courses_enrolled,
        COUNT(DISTINCT CASE WHEN p.completed_at IS NOT NULL THEN p.course_id END)::int AS courses_completed,
        COALESCE(AVG(p.percent_complete), 0)::int                           AS avg_progress,
        COUNT(DISTINCT ub.badge_id)::int                                    AS badges_earned
      FROM users u
      LEFT JOIN enrollments e  ON e.student_id  = u.id
      LEFT JOIN progress p     ON p.student_id  = u.id
      LEFT JOIN user_badges ub ON ub.user_id    = u.id
      WHERE u.id = $1
      GROUP BY u.id
    `, [req.user.id]);

    res.json({ stats: rows[0] });
  } catch (err) { next(err); }
});

// ── helpers ───────────────────────────────────────────────────────────────────
function xpToLevel(xp) {
  if (xp >= 10000) return 'C2';
  if (xp >= 6000)  return 'C1';
  if (xp >= 3000)  return 'B2';
  if (xp >= 1500)  return 'B1';
  if (xp >= 500)   return 'A2';
  return 'A1';
}

function getPreviousDay(dateStr) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

async function checkAndAwardBadges(userId, xp, streak) {
  const newBadges = [];
  try {
    const allBadges = await pool.query('SELECT * FROM badges');
    const userBadges = await pool.query('SELECT badge_id FROM user_badges WHERE user_id = $1', [userId]);
    const earned = new Set(userBadges.rows.map(b => b.badge_id));

    for (const badge of allBadges.rows) {
      if (earned.has(badge.id)) continue;
      let shouldAward = false;
      if (xp !== null && badge.condition === 'xp_5000' && xp >= 5000) shouldAward = true;
      if (streak === 7  && badge.condition === 'streak_7')  shouldAward = true;
      if (streak === 30 && badge.condition === 'streak_30') shouldAward = true;
      if (xp !== null && badge.xp_required > 0 && xp >= badge.xp_required) shouldAward = true;
      if (shouldAward) {
        await pool.query('INSERT INTO user_badges (user_id, badge_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [userId, badge.id]);
        newBadges.push(badge);
      }
    }
  } catch {}
  return newBadges;
}

module.exports = router;