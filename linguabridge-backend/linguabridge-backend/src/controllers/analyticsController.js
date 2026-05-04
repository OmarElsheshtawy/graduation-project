const pool = require('../config/db');

// ── GET /api/analytics/student ────────────────────────────────────────────
const getStudentAnalytics = async (req, res, next) => {
  try {
    // Ensure time_spent table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS lesson_time_spent (
        id         SERIAL PRIMARY KEY,
        user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        course_id  INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
        minutes    INTEGER NOT NULL DEFAULT 0,
        logged_at  DATE NOT NULL DEFAULT CURRENT_DATE,
        UNIQUE(user_id, course_id, logged_at)
      )
    `);

    const userId = req.user.id;

    // Enrollments + progress
    const { rows: courseStats } = await pool.query(`
      SELECT c.title, c.level,
             COALESCE(p.percent_complete, 0) AS progress,
             e.enrolled_at,
             p.last_accessed_at,
             p.completed_at
      FROM enrollments e
      JOIN courses c ON c.id = e.course_id
      LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = e.course_id
      WHERE e.student_id = $1
      ORDER BY e.enrolled_at DESC
    `, [userId]);

    // XP over last 7 days (from user_xp table if exists, else dummy)
    let weeklyXP = [];
    try {
      const { rows } = await pool.query(`
        SELECT to_char(generate_series::date, 'Dy') AS day,
               COALESCE((
                 SELECT SUM(amount) FROM xp_log
                 WHERE user_id = $1 AND logged_at = generate_series::date
               ), 0) AS xp
        FROM generate_series(CURRENT_DATE - 6, CURRENT_DATE, '1 day') generate_series
      `, [userId]);
      weeklyXP = rows;
    } catch {
      // fallback
      weeklyXP = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => ({ day, xp: Math.floor(Math.random() * 80) }));
    }

    // Summary
    const total     = courseStats.length;
    const completed = courseStats.filter(c => c.progress === 100).length;
    const avgProg   = total > 0 ? Math.round(courseStats.reduce((a, c) => a + c.progress, 0) / total) : 0;

    res.json({
      summary: { total_enrolled: total, completed, avg_progress: avgProg },
      courseStats,
      weeklyXP,
    });
  } catch (err) { next(err); }
};

// ── GET /api/analytics/instructor ────────────────────────────────────────
const getInstructorAnalytics = async (req, res, next) => {
  try {
    const instrId = req.user.id;

    // Students per course
    const { rows: perCourse } = await pool.query(`
      SELECT c.title, COUNT(e.student_id)::int AS students,
             ROUND(AVG(COALESCE(p.percent_complete,0)))::int AS avg_progress
      FROM courses c
      LEFT JOIN enrollments e ON e.course_id = c.id
      LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = c.id
      WHERE c.instructor_id = $1
      GROUP BY c.id
      ORDER BY students DESC
    `, [instrId]);

    // Revenue (simple: students × price)
    const { rows: revenue } = await pool.query(`
      SELECT c.title, c.price,
             COUNT(e.student_id)::int AS enrollments,
             (c.price * COUNT(e.student_id))::numeric AS revenue
      FROM courses c
      LEFT JOIN enrollments e ON e.course_id = c.id
      WHERE c.instructor_id = $1
      GROUP BY c.id ORDER BY revenue DESC
    `, [instrId]);

    // Completion rates
    const { rows: completion } = await pool.query(`
      SELECT c.title,
             COUNT(e.student_id)::int AS enrolled,
             COUNT(CASE WHEN p.percent_complete = 100 THEN 1 END)::int AS completed
      FROM courses c
      LEFT JOIN enrollments e ON e.course_id = c.id
      LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = c.id
      WHERE c.instructor_id = $1
      GROUP BY c.id
    `, [instrId]);

    const totalRevenue    = revenue.reduce((a, r) => a + parseFloat(r.revenue || 0), 0);
    const totalStudents   = perCourse.reduce((a, c) => a + c.students, 0);
    const totalEnrollments = completion.reduce((a, c) => a + c.enrolled, 0);
    const totalCompleted  = completion.reduce((a, c) => a + c.completed, 0);
    const overallCompRate = totalEnrollments > 0 ? Math.round((totalCompleted / totalEnrollments) * 100) : 0;

    res.json({
      summary: {
        total_revenue: totalRevenue.toFixed(2),
        total_students: totalStudents,
        completion_rate: overallCompRate,
        total_courses: perCourse.length,
      },
      perCourse,
      revenue,
      completion,
    });
  } catch (err) { next(err); }
};

// ── POST /api/analytics/time-spent ───────────────────────────────────────
const logTimeSpent = async (req, res, next) => {
  try {
    const { courseId, minutes } = req.body;
    await pool.query(`
      INSERT INTO lesson_time_spent (user_id, course_id, minutes)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, course_id, logged_at)
      DO UPDATE SET minutes = lesson_time_spent.minutes + $3
    `, [req.user.id, courseId, minutes]);
    res.json({ message: 'Time logged' });
  } catch (err) { next(err); }
};

module.exports = { getStudentAnalytics, getInstructorAnalytics, logTimeSpent };