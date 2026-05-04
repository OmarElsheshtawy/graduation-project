const pool = require('../config/db');

// ── GET /api/courses  (public) ────────────────────────────────────────────────
const getAllCourses = async (req, res, next) => {
  try {
    const { level, search, page = 1, limit = 12 } = req.query;
    const offset = (page - 1) * limit;
    const params = [];
    const where  = ['c.is_published = true'];

    if (level) {
      params.push(level);
      where.push(`c.level = $${params.length}`);
    }
    if (search) {
      params.push(`%${search}%`);
      where.push(`(c.title ILIKE $${params.length} OR c.description ILIKE $${params.length})`);
    }

    const whereClause = where.length ? `WHERE ${where.join(' AND ')}` : '';

    // Count for pagination
    const countRes = await pool.query(
      `SELECT COUNT(*) FROM courses c ${whereClause}`,
      params
    );

    params.push(limit, offset);
    const { rows } = await pool.query(
      `SELECT c.id, c.title, c.description, c.level, c.duration, c.price,
              c.thumbnail_url, c.created_at,
              u.id AS instructor_id, u.name AS instructor_name,
              COALESCE(AVG(NULL),0) AS rating,
              COUNT(DISTINCT e.student_id)::int AS students_count
       FROM courses c
       JOIN users u ON u.id = c.instructor_id
       LEFT JOIN enrollments e ON e.course_id = c.id
       ${whereClause}
       GROUP BY c.id, u.id
       ORDER BY c.created_at DESC
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    res.json({
      courses:    rows,
      pagination: {
        total:       parseInt(countRes.rows[0].count),
        page:        parseInt(page),
        limit:       parseInt(limit),
        totalPages:  Math.ceil(countRes.rows[0].count / limit),
      },
    });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/courses/:id  (public) ────────────────────────────────────────────
const getCourseById = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT c.*, u.name AS instructor_name,
              COUNT(DISTINCT e.student_id)::int AS students_count
       FROM courses c
       JOIN users u ON u.id = c.instructor_id
       LEFT JOIN enrollments e ON e.course_id = c.id
       WHERE c.id = $1
       GROUP BY c.id, u.name`,
      [req.params.id]
    );

    if (!rows.length) return res.status(404).json({ message: 'Course not found' });
    res.json({ course: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── POST /api/courses  (instructor / admin) ───────────────────────────────────
const createCourse = async (req, res, next) => {
  try {
    const { title, description, level, duration, price = 0, thumbnail_url, instructor_id } = req.body;

    if (!title || !level) {
      return res.status(400).json({ message: 'title and level are required' });
    }

    let instructorId = req.user.id;
    if (req.user.role === 'admin' && instructor_id != null) {
      const inst = await pool.query(
        "SELECT id FROM users WHERE id = $1 AND role = 'instructor'",
        [instructor_id]
      );
      if (!inst.rows.length) {
        return res.status(400).json({ message: 'instructor_id must reference an existing instructor account' });
      }
      instructorId = instructor_id;
    }

    const { rows } = await pool.query(
      `INSERT INTO courses
         (title, description, level, duration, price, instructor_id, thumbnail_url)
       VALUES ($1,$2,$3,$4,$5,$6,$7)
       RETURNING *`,
      [title, description, level, duration, price, instructorId, thumbnail_url]
    );

    res.status(201).json({ message: 'Course created', course: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── PUT /api/courses/:id  (owner instructor / admin) ─────────────────────────
const updateCourse = async (req, res, next) => {
  try {
    // Check ownership (admins bypass)
    const courseRes = await pool.query('SELECT instructor_id FROM courses WHERE id = $1', [req.params.id]);
    if (!courseRes.rows.length) return res.status(404).json({ message: 'Course not found' });

    if (req.user.role !== 'admin' && courseRes.rows[0].instructor_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorised to edit this course' });
    }

    const { title, description, level, duration, price, thumbnail_url, is_published } = req.body;

    const { rows } = await pool.query(
      `UPDATE courses SET
         title         = COALESCE($1, title),
         description   = COALESCE($2, description),
         level         = COALESCE($3, level),
         duration      = COALESCE($4, duration),
         price         = COALESCE($5, price),
         thumbnail_url = COALESCE($6, thumbnail_url),
         is_published  = COALESCE($7, is_published)
       WHERE id = $8
       RETURNING *`,
      [title, description, level, duration, price, thumbnail_url, is_published, req.params.id]
    );

    res.json({ message: 'Course updated', course: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── DELETE /api/courses/:id  (owner instructor / admin) ──────────────────────
const deleteCourse = async (req, res, next) => {
  try {
    const courseRes = await pool.query('SELECT instructor_id FROM courses WHERE id = $1', [req.params.id]);
    if (!courseRes.rows.length) return res.status(404).json({ message: 'Course not found' });

    if (req.user.role !== 'admin' && courseRes.rows[0].instructor_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorised to delete this course' });
    }

    await pool.query('DELETE FROM courses WHERE id = $1', [req.params.id]);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/courses/instructor/my-courses  (instructor = own; admin = all) ───
const getInstructorCourses = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      const { rows } = await pool.query(
        `SELECT c.*,
                u.name AS instructor_name,
                COUNT(DISTINCT e.student_id)::int AS students_count
         FROM courses c
         JOIN users u ON u.id = c.instructor_id
         LEFT JOIN enrollments e ON e.course_id = c.id
         GROUP BY c.id, u.name
         ORDER BY c.created_at DESC`
      );
      return res.json({ courses: rows });
    }

    const { rows } = await pool.query(
      `SELECT c.*,
              COUNT(DISTINCT e.student_id)::int AS students_count
       FROM courses c
       LEFT JOIN enrollments e ON e.course_id = c.id
       WHERE c.instructor_id = $1
       GROUP BY c.id
       ORDER BY c.created_at DESC`,
      [req.user.id]
    );
    res.json({ courses: rows });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/courses/:id/students  (instructor / admin) ──────────────────────
const getCourseStudents = async (req, res, next) => {
  try {
    const courseRes = await pool.query('SELECT instructor_id FROM courses WHERE id = $1', [req.params.id]);
    if (!courseRes.rows.length) return res.status(404).json({ message: 'Course not found' });

    if (req.user.role !== 'admin' && courseRes.rows[0].instructor_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorised' });
    }

    const { rows } = await pool.query(
      `SELECT u.id, u.name, u.email, u.avatar_url,
              e.enrolled_at,
              COALESCE(p.percent_complete, 0) AS progress
       FROM enrollments e
       JOIN users u ON u.id = e.student_id
       LEFT JOIN progress p ON p.student_id = e.student_id AND p.course_id = e.course_id
       WHERE e.course_id = $1
       ORDER BY e.enrolled_at DESC`,
      [req.params.id]
    );

    res.json({ students: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getInstructorCourses,
  getCourseStudents,
};
