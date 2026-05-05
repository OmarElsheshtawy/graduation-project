const pool = require('../config/db');

// ── GET /api/instructor/stats  (instructor = own; admin = platform-wide) ─────
const getInstructorStats = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      const { rows } = await pool.query(
        `SELECT
           COUNT(DISTINCT c.id)::int            AS total_courses,
           COUNT(DISTINCT e.student_id)::int    AS total_students,
           COALESCE(SUM(c.price * sub.cnt),0)   AS total_revenue
         FROM courses c
         LEFT JOIN enrollments e ON e.course_id = c.id
         LEFT JOIN (
           SELECT course_id, COUNT(*) AS cnt
           FROM enrollments
           GROUP BY course_id
         ) sub ON sub.course_id = c.id`
      );
      return res.json({ stats: rows[0] });
    }

    const { rows } = await pool.query(
      `SELECT
         COUNT(DISTINCT c.id)::int            AS total_courses,
         COUNT(DISTINCT e.student_id)::int    AS total_students,
         COALESCE(SUM(c.price * sub.cnt),0)   AS total_revenue
       FROM courses c
       LEFT JOIN enrollments e ON e.course_id = c.id
       LEFT JOIN (
         SELECT course_id, COUNT(*) AS cnt
         FROM enrollments
         GROUP BY course_id
       ) sub ON sub.course_id = c.id
       WHERE c.instructor_id = $1`,
      [req.user.id]
    );
    res.json({ stats: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/instructor/students  (instructor = own courses; admin = all) ───
const getInstructorStudents = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      const { rows } = await pool.query(
        `SELECT DISTINCT
           u.id, u.name, u.email, u.avatar_url, u.created_at,
           COUNT(DISTINCT e.course_id)::int          AS enrolled_courses,
           COALESCE(AVG(p.percent_complete),0)::int  AS avg_progress
         FROM users u
         JOIN enrollments e ON e.student_id = u.id
         LEFT JOIN progress p ON p.student_id = u.id AND p.course_id = e.course_id
         WHERE u.role = 'student'
         GROUP BY u.id
         ORDER BY u.name`
      );
      return res.json({ students: rows });
    }

    const { rows } = await pool.query(
      `SELECT DISTINCT
         u.id, u.name, u.email, u.avatar_url, u.created_at,
         COUNT(DISTINCT e.course_id)::int          AS enrolled_courses,
         COALESCE(AVG(p.percent_complete),0)::int  AS avg_progress
       FROM users u
       JOIN enrollments e ON e.student_id = u.id
       JOIN courses c     ON c.id = e.course_id AND c.instructor_id = $1
       LEFT JOIN progress p ON p.student_id = u.id AND p.course_id = c.id
       GROUP BY u.id
       ORDER BY u.name`,
      [req.user.id]
    );
    res.json({ students: rows });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/instructor/students/:studentId  (instructor / admin) ────────────
const getStudentDetail = async (req, res, next) => {
  try {
    const studentId = req.params.studentId;

    if (req.user.role !== 'admin') {
      const access = await pool.query(
        `SELECT 1 FROM enrollments e
         JOIN courses c ON c.id = e.course_id
         WHERE e.student_id = $1 AND c.instructor_id = $2
         LIMIT 1`,
        [studentId, req.user.id]
      );
      if (!access.rows.length) {
        return res.status(403).json({ message: 'Student not found in your courses' });
      }
    }

    const userRes = await pool.query(
      'SELECT id, name, email, avatar_url, created_at, role FROM users WHERE id = $1',
      [studentId]
    );
    if (!userRes.rows.length) return res.status(404).json({ message: 'User not found' });

    const progressSql =
      req.user.role === 'admin'
        ? `SELECT c.id AS course_id, c.title, p.percent_complete,
                  p.last_accessed_at, p.completed_at
           FROM enrollments e
           JOIN courses c ON c.id = e.course_id
           LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = e.course_id
           WHERE e.student_id = $1`
        : `SELECT c.id AS course_id, c.title, p.percent_complete,
                  p.last_accessed_at, p.completed_at
           FROM enrollments e
           JOIN courses c ON c.id = e.course_id AND c.instructor_id = $2
           LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = e.course_id
           WHERE e.student_id = $1`;

    const progressParams = req.user.role === 'admin' ? [studentId] : [studentId, req.user.id];
    const progressRes = await pool.query(progressSql, progressParams);

    res.json({
      student:  userRes.rows[0],
      progress: progressRes.rows,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getInstructorStats, getInstructorStudents, getStudentDetail };
