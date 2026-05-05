const pool = require('../config/db');

// ── POST /api/enrollments/:courseId  (student) ────────────────────────────────
const enrollInCourse = async (req, res, next) => {
  try {
    if (req.user.role === 'instructor') {
      return res.status(403).json({ message: 'Instructors cannot enroll as students' });
    }

    const { courseId } = req.params;

    // Verify course exists and is published
    const courseRes = await pool.query(
      'SELECT id, title FROM courses WHERE id = $1 AND is_published = true',
      [courseId]
    );
    if (!courseRes.rows.length) {
      return res.status(404).json({ message: 'Course not found or not yet published' });
    }

    // Enroll (UNIQUE constraint will reject duplicates)
    await pool.query(
      'INSERT INTO enrollments (student_id, course_id) VALUES ($1, $2)',
      [req.user.id, courseId]
    );

    // Create a progress record at 0%
    await pool.query(
      `INSERT INTO progress (student_id, course_id, percent_complete)
       VALUES ($1, $2, 0)
       ON CONFLICT (student_id, course_id) DO NOTHING`,
      [req.user.id, courseId]
    );

    res.status(201).json({ message: `Enrolled in "${courseRes.rows[0].title}"` });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ message: 'Already enrolled in this course' });
    }
    next(err);
  }
};

// ── DELETE /api/enrollments/:courseId  (student) ──────────────────────────────
const unenrollFromCourse = async (req, res, next) => {
  try {
    const result = await pool.query(
      'DELETE FROM enrollments WHERE student_id = $1 AND course_id = $2 RETURNING id',
      [req.user.id, req.params.courseId]
    );
    if (!result.rows.length) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    res.json({ message: 'Unenrolled successfully' });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/enrollments/my  (student) ────────────────────────────────────────
const getMyEnrollments = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT c.id, c.title, c.description, c.level, c.duration,
              c.thumbnail_url, u.name AS instructor_name,
              e.enrolled_at,
              COALESCE(p.percent_complete, 0)   AS progress,
              p.last_accessed_at,
              p.completed_at
       FROM enrollments e
       JOIN courses c ON c.id = e.course_id
       JOIN users   u ON u.id = c.instructor_id
       LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = e.course_id
       WHERE e.student_id = $1
       ORDER BY e.enrolled_at DESC`,
      [req.user.id]
    );
    res.json({ enrollments: rows });
  } catch (err) {
    next(err);
  }
};

// ── PUT /api/progress/:courseId  (student) ────────────────────────────────────
const updateProgress = async (req, res, next) => {
  try {
    const { percent_complete } = req.body;
    const { courseId } = req.params;

    if (percent_complete === undefined || percent_complete < 0 || percent_complete > 100) {
      return res.status(400).json({ message: 'percent_complete must be between 0 and 100' });
    }

    // Must be enrolled
    const enrolled = await pool.query(
      'SELECT id FROM enrollments WHERE student_id = $1 AND course_id = $2',
      [req.user.id, courseId]
    );
    if (!enrolled.rows.length) {
      return res.status(403).json({ message: 'Not enrolled in this course' });
    }

    const completedAt = percent_complete === 100 ? 'NOW()' : 'NULL';

    const { rows } = await pool.query(
      `INSERT INTO progress (student_id, course_id, percent_complete, last_accessed_at, completed_at)
       VALUES ($1, $2, $3, NOW(), ${completedAt})
       ON CONFLICT (student_id, course_id) DO UPDATE
         SET percent_complete  = EXCLUDED.percent_complete,
             last_accessed_at  = NOW(),
             completed_at      = CASE
               WHEN EXCLUDED.percent_complete = 100 THEN NOW()
               ELSE NULL
             END
       RETURNING *`,
      [req.user.id, courseId, percent_complete]
    );

    res.json({ message: 'Progress updated', progress: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/progress/my  (student) ───────────────────────────────────────────
const getMyProgress = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT p.*, c.title AS course_title, c.level, c.thumbnail_url
       FROM progress p
       JOIN courses c ON c.id = p.course_id
       WHERE p.student_id = $1
       ORDER BY p.last_accessed_at DESC`,
      [req.user.id]
    );
    res.json({ progress: rows });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/progress/summary  (student) ──────────────────────────────────────
const getProgressSummary = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT
         COUNT(e.id)::int                                AS courses_enrolled,
         COUNT(p.completed_at)::int                      AS courses_completed,
         COALESCE(ROUND(AVG(p.percent_complete)),0)::int AS avg_progress
       FROM enrollments e
       LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = e.course_id
       WHERE e.student_id = $1`,
      [req.user.id]
    );

    // Rough "hours learned" estimate: avg_progress% × 2h per course
    const summary = rows[0];
    summary.hours_learned = parseFloat(
      ((summary.avg_progress / 100) * summary.courses_enrolled * 2).toFixed(1)
    );

    res.json({ summary });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  enrollInCourse,
  unenrollFromCourse,
  getMyEnrollments,
  updateProgress,
  getMyProgress,
  getProgressSummary,
};
