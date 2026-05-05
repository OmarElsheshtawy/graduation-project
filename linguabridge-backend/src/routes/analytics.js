// src/routes/analytics.js
const router = require('express').Router();
const pool   = require('../config/db');
const { protect, authorize } = require('../middleware/auth');

// ── GET /api/analytics/student ───────────────────────────────────────────────
router.get('/student', protect, authorize('student'), async (req, res, next) => {
  try {
    // Weekly activity (last 7 days)
    const weekly = await pool.query(`
      SELECT
        DATE(p.last_accessed_at) AS date,
        COUNT(*)::int            AS lessons_done,
        SUM(p.time_spent_minutes)::int AS minutes
      FROM progress p
      WHERE p.student_id = $1
        AND p.last_accessed_at > NOW() - INTERVAL '7 days'
      GROUP BY DATE(p.last_accessed_at)
      ORDER BY date ASC
    `, [req.user.id]);

    // Skill breakdown
    const skills = [
      { skill: 'Grammar',    score: 72 },
      { skill: 'Vocabulary', score: 85 },
      { skill: 'Reading',    score: 68 },
      { skill: 'Listening',  score: 60 },
      { skill: 'Writing',    score: 55 },
      { skill: 'Speaking',   score: 63 },
    ];

    // Course progress
    const courses = await pool.query(`
      SELECT c.title, p.percent_complete, p.time_spent_minutes, p.completed_at
      FROM progress p
      JOIN courses c ON c.id = p.course_id
      WHERE p.student_id = $1
      ORDER BY p.last_accessed_at DESC
    `, [req.user.id]);

    // Overall stats
    const stats = await pool.query(`
      SELECT
        u.xp, u.level, u.streak_days, u.total_time_minutes,
        COUNT(DISTINCT e.course_id)::int                                AS total_enrolled,
        COUNT(DISTINCT CASE WHEN p.completed_at IS NOT NULL THEN p.id END)::int AS total_completed
      FROM users u
      LEFT JOIN enrollments e ON e.student_id = u.id
      LEFT JOIN progress p    ON p.student_id = u.id
      WHERE u.id = $1
      GROUP BY u.id
    `, [req.user.id]);

    res.json({
      weeklyActivity: weekly.rows,
      skillBreakdown: skills,
      courseProgress: courses.rows,
      stats:          stats.rows[0],
    });
  } catch (err) { next(err); }
});

// ── GET /api/analytics/instructor ────────────────────────────────────────────
router.get('/instructor', protect, authorize('instructor','admin'), async (req, res, next) => {
  try {
    // Monthly enrollments (last 6 months)
    const enrollments = await pool.query(`
      SELECT
        TO_CHAR(e.enrolled_at, 'Mon YY') AS month,
        COUNT(*)::int                     AS new_enrollments
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE c.instructor_id = $1
        AND e.enrolled_at > NOW() - INTERVAL '6 months'
      GROUP BY TO_CHAR(e.enrolled_at, 'Mon YY'), DATE_TRUNC('month', e.enrolled_at)
      ORDER BY DATE_TRUNC('month', e.enrolled_at) ASC
    `, [req.user.id]);

    // Student progress per course
    const courseStats = await pool.query(`
      SELECT
        c.title,
        COUNT(DISTINCT e.student_id)::int          AS students,
        COALESCE(AVG(p.percent_complete), 0)::int  AS avg_progress,
        COUNT(DISTINCT CASE WHEN p.completed_at IS NOT NULL THEN p.student_id END)::int AS completed
      FROM courses c
      LEFT JOIN enrollments e ON e.course_id = c.id
      LEFT JOIN progress    p ON p.course_id = c.id
      WHERE c.instructor_id = $1
      GROUP BY c.id, c.title
      ORDER BY students DESC
    `, [req.user.id]);

    // Top performing students
    const topStudents = await pool.query(`
      SELECT
        u.name, u.avatar_url,
        COALESCE(AVG(p.percent_complete), 0)::int AS avg_progress,
        COUNT(DISTINCT e.course_id)::int           AS courses
      FROM users u
      JOIN enrollments e ON e.student_id = u.id
      JOIN courses c     ON c.id = e.course_id AND c.instructor_id = $1
      LEFT JOIN progress p ON p.student_id = u.id AND p.course_id = c.id
      GROUP BY u.id
      ORDER BY avg_progress DESC
      LIMIT 5
    `, [req.user.id]);

    // Revenue (mock — real would use Stripe)
    const revenue = await pool.query(`
      SELECT
        TO_CHAR(e.enrolled_at, 'Mon YY') AS month,
        SUM(c.price)::numeric             AS revenue
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      WHERE c.instructor_id = $1
        AND e.enrolled_at > NOW() - INTERVAL '6 months'
        AND c.price > 0
      GROUP BY TO_CHAR(e.enrolled_at, 'Mon YY'), DATE_TRUNC('month', e.enrolled_at)
      ORDER BY DATE_TRUNC('month', e.enrolled_at) ASC
    `, [req.user.id]);

    res.json({ enrollmentTrend: enrollments.rows, courseStats: courseStats.rows, topStudents: topStudents.rows, revenueTrend: revenue.rows });
  } catch (err) { next(err); }
});

module.exports = router;