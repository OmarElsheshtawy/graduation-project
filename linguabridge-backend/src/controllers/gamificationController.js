const pool = require('../config/db');

// ── DB setup ──────────────────────────────────────────────────────────────
const ensureGamificationTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS user_xp (
      id          SERIAL PRIMARY KEY,
      user_id     INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      total_xp    INTEGER NOT NULL DEFAULT 0,
      level       INTEGER NOT NULL DEFAULT 1,
      streak_days INTEGER NOT NULL DEFAULT 0,
      last_activity_date DATE,
      updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS badges (
      id          SERIAL PRIMARY KEY,
      key         VARCHAR(50) UNIQUE NOT NULL,
      name        VARCHAR(100) NOT NULL,
      description TEXT,
      icon        VARCHAR(10),
      xp_reward   INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS user_badges (
      id         SERIAL PRIMARY KEY,
      user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      badge_key  VARCHAR(50) NOT NULL,
      earned_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(user_id, badge_key)
    );

    CREATE TABLE IF NOT EXISTS daily_challenges (
      id           SERIAL PRIMARY KEY,
      challenge_date DATE UNIQUE NOT NULL DEFAULT CURRENT_DATE,
      question     TEXT NOT NULL,
      options      JSONB NOT NULL,
      answer       INTEGER NOT NULL,
      explanation  TEXT,
      xp_reward    INTEGER NOT NULL DEFAULT 50
    );

    CREATE TABLE IF NOT EXISTS daily_challenge_completions (
      id           SERIAL PRIMARY KEY,
      user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      challenge_id INTEGER NOT NULL REFERENCES daily_challenges(id) ON DELETE CASCADE,
      correct      BOOLEAN NOT NULL,
      completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(user_id, challenge_id)
    );
  `);

  // Seed badges
  await pool.query(`
    INSERT INTO badges (key, name, description, icon, xp_reward) VALUES
      ('first_lesson',   'First Step',      'Complete your first lesson',            '🌱', 50),
      ('streak_7',       'Week Warrior',    'Maintain a 7-day streak',               '🔥', 200),
      ('streak_30',      'Monthly Master',  'Maintain a 30-day streak',              '🏆', 1000),
      ('xp_100',         'XP Rookie',       'Earn 100 XP',                           '⚡', 25),
      ('xp_500',         'XP Pro',          'Earn 500 XP',                           '💎', 100),
      ('xp_1000',        'XP Master',       'Earn 1000 XP',                          '👑', 250),
      ('course_done',    'Course Complete', 'Complete your first course',            '🎓', 300),
      ('daily_3',        'Daily Player',    'Complete 3 daily challenges',           '🎯', 100),
      ('perfect_quiz',   'Perfectionist',   'Score 100% on a quiz',                  '💯', 150),
      ('early_bird',     'Early Bird',      'Study before 8 AM',                     '🌅', 50)
    ON CONFLICT (key) DO NOTHING;
  `);

  // Seed today's daily challenge if none exists
  await pool.query(`
    INSERT INTO daily_challenges (challenge_date, question, options, answer, explanation, xp_reward)
    VALUES (
      CURRENT_DATE,
      'Choose the correct sentence:',
      '["She don''t like coffee.", "She doesn''t like coffee.", "She not like coffee.", "She isn''t like coffee."]',
      1,
      'With he/she/it we use "doesn''t" (not "don''t") in negative sentences.',
      50
    ) ON CONFLICT (challenge_date) DO NOTHING;
  `);
};

// ── GET /api/gamification/me ──────────────────────────────────────────────
const getMyStats = async (req, res, next) => {
  try {
    await ensureGamificationTables();

    // Upsert user_xp row
    await pool.query(`
      INSERT INTO user_xp (user_id) VALUES ($1)
      ON CONFLICT (user_id) DO NOTHING
    `, [req.user.id]);

    const { rows: [stats] } = await pool.query(
      'SELECT * FROM user_xp WHERE user_id = $1', [req.user.id]
    );

    const { rows: badges } = await pool.query(`
      SELECT b.key, b.name, b.description, b.icon, ub.earned_at
      FROM user_badges ub JOIN badges b ON b.key = ub.badge_key
      WHERE ub.user_id = $1 ORDER BY ub.earned_at DESC
    `, [req.user.id]);

    const { rows: allBadges } = await pool.query('SELECT * FROM badges ORDER BY xp_reward');

    // Calculate level: every 500 XP = 1 level
    const level = Math.floor(stats.total_xp / 500) + 1;
    const xpToNextLevel = (level * 500) - stats.total_xp;

    res.json({ stats: { ...stats, level, xpToNextLevel }, badges, allBadges });
  } catch (err) { next(err); }
};

// ── POST /api/gamification/add-xp ─────────────────────────────────────────
const addXP = async (req, res, next) => {
  try {
    await ensureGamificationTables();
    const { amount = 0, reason = 'activity' } = req.body;

    await pool.query(`
      INSERT INTO user_xp (user_id, total_xp, last_activity_date)
      VALUES ($1, $2, CURRENT_DATE)
      ON CONFLICT (user_id) DO UPDATE SET
        total_xp = user_xp.total_xp + $2,
        last_activity_date = CURRENT_DATE,
        updated_at = NOW()
    `, [req.user.id, amount]);

    // Update streak
    const { rows: [xpRow] } = await pool.query('SELECT * FROM user_xp WHERE user_id = $1', [req.user.id]);
    const lastDate = xpRow.last_activity_date;
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    const lastDateStr = lastDate ? new Date(lastDate).toDateString() : null;

    let newStreak = xpRow.streak_days;
    if (lastDateStr === yesterday.toDateString()) {
      newStreak += 1;
    } else if (lastDateStr !== new Date().toDateString()) {
      newStreak = 1;
    }

    await pool.query('UPDATE user_xp SET streak_days = $1 WHERE user_id = $2', [newStreak, req.user.id]);

    // Check & award badges
    const newXP    = xpRow.total_xp + amount;
    const awarded  = [];

    const badgeChecks = [
      { key: 'xp_100',   condition: newXP >= 100 },
      { key: 'xp_500',   condition: newXP >= 500 },
      { key: 'xp_1000',  condition: newXP >= 1000 },
      { key: 'streak_7', condition: newStreak >= 7 },
      { key: 'streak_30',condition: newStreak >= 30 },
    ];

    for (const check of badgeChecks) {
      if (check.condition) {
        const result = await pool.query(`
          INSERT INTO user_badges (user_id, badge_key) VALUES ($1, $2)
          ON CONFLICT DO NOTHING RETURNING badge_key
        `, [req.user.id, check.key]);
        if (result.rows.length) awarded.push(check.key);
      }
    }

    res.json({ xpAdded: amount, newTotal: newXP, streak: newStreak, newBadges: awarded });
  } catch (err) { next(err); }
};

// ── GET /api/gamification/leaderboard ─────────────────────────────────────
const getLeaderboard = async (req, res, next) => {
  try {
    await ensureGamificationTables();
    const { period = 'alltime' } = req.query;

    const { rows } = await pool.query(`
      SELECT u.id, u.name, u.avatar_url, ux.total_xp, ux.streak_days, ux.level,
             COUNT(ub.id)::int AS badge_count,
             ROW_NUMBER() OVER (ORDER BY ux.total_xp DESC) AS rank
      FROM user_xp ux
      JOIN users u ON u.id = ux.user_id
      LEFT JOIN user_badges ub ON ub.user_id = ux.user_id
      GROUP BY u.id, ux.total_xp, ux.streak_days, ux.level
      ORDER BY ux.total_xp DESC
      LIMIT 50
    `);

    // My rank
    let myRank = null;
    if (req.user) {
      const myRow = rows.find(r => r.id === req.user.id);
      if (myRow) myRank = myRow;
    }

    res.json({ leaderboard: rows, myRank });
  } catch (err) { next(err); }
};

// ── GET /api/gamification/daily-challenge ────────────────────────────────
const getDailyChallenge = async (req, res, next) => {
  try {
    await ensureGamificationTables();

    const { rows: [challenge] } = await pool.query(
      'SELECT * FROM daily_challenges WHERE challenge_date = CURRENT_DATE'
    );

    if (!challenge) return res.status(404).json({ message: 'No challenge today' });

    // Check if user already completed it
    const { rows: [completion] } = await pool.query(
      'SELECT * FROM daily_challenge_completions WHERE user_id = $1 AND challenge_id = $2',
      [req.user.id, challenge.id]
    );

    res.json({ challenge: { ...challenge, options: JSON.parse(challenge.options) }, completed: !!completion, correctAnswered: completion?.correct });
  } catch (err) { next(err); }
};

// ── POST /api/gamification/daily-challenge/submit ────────────────────────
const submitDailyChallenge = async (req, res, next) => {
  try {
    const { challengeId, answer } = req.body;
    const { rows: [challenge] } = await pool.query('SELECT * FROM daily_challenges WHERE id = $1', [challengeId]);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });

    const correct = answer === challenge.answer;

    await pool.query(`
      INSERT INTO daily_challenge_completions (user_id, challenge_id, correct)
      VALUES ($1, $2, $3) ON CONFLICT DO NOTHING
    `, [req.user.id, challengeId, correct]);

    if (correct) {
      await pool.query(`
        INSERT INTO user_xp (user_id, total_xp) VALUES ($1, $2)
        ON CONFLICT (user_id) DO UPDATE SET total_xp = user_xp.total_xp + $2, updated_at = NOW()
      `, [req.user.id, challenge.xp_reward]);
    }

    // Check daily_3 badge
    const { rows: [count] } = await pool.query(
      'SELECT COUNT(*) FROM daily_challenge_completions WHERE user_id = $1 AND correct = true',
      [req.user.id]
    );
    if (parseInt(count.count) >= 3) {
      await pool.query(`
        INSERT INTO user_badges (user_id, badge_key) VALUES ($1, 'daily_3') ON CONFLICT DO NOTHING
      `, [req.user.id]);
    }

    res.json({ correct, xpEarned: correct ? challenge.xp_reward : 0, explanation: challenge.explanation });
  } catch (err) { next(err); }
};

module.exports = { getMyStats, addXP, getLeaderboard, getDailyChallenge, submitDailyChallenge };