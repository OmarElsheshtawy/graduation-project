// src/routes/bookmarks.js
const router = require('express').Router();
const pool   = require('../config/db');
const { protect } = require('../middleware/auth');

// All bookmark routes require authentication
router.use(protect);

// GET /api/bookmarks — list user's bookmarked courses
router.get('/', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT b.id, b.course_id, b.created_at,
              c.title, c.description, c.level, c.duration, c.thumbnail_url,
              u.name AS instructor_name
       FROM bookmarks b
       JOIN courses c ON c.id = b.course_id
       JOIN users u   ON u.id = c.instructor_id
       WHERE b.user_id = $1
       ORDER BY b.created_at DESC`,
      [req.user.id]
    );
    res.json({ bookmarks: rows });
  } catch (err) { next(err); }
});

// POST /api/bookmarks/:courseId — add bookmark
router.post('/:courseId', async (req, res, next) => {
  try {
    const courseId = parseInt(req.params.courseId);

    // Check course exists
    const course = await pool.query('SELECT id FROM courses WHERE id = $1', [courseId]);
    if (!course.rows.length) return res.status(404).json({ message: 'Course not found' });

    // Upsert (ignore if already bookmarked)
    await pool.query(
      `INSERT INTO bookmarks (user_id, course_id)
       VALUES ($1, $2)
       ON CONFLICT DO NOTHING`,
      [req.user.id, courseId]
    );

    res.status(201).json({ message: 'Bookmarked successfully' });
  } catch (err) { next(err); }
});

// DELETE /api/bookmarks/:courseId — remove bookmark
router.delete('/:courseId', async (req, res, next) => {
  try {
    await pool.query(
      'DELETE FROM bookmarks WHERE user_id = $1 AND course_id = $2',
      [req.user.id, parseInt(req.params.courseId)]
    );
    res.json({ message: 'Bookmark removed' });
  } catch (err) { next(err); }
});

// GET /api/bookmarks/check/:courseId — check if bookmarked
router.get('/check/:courseId', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id FROM bookmarks WHERE user_id = $1 AND course_id = $2',
      [req.user.id, parseInt(req.params.courseId)]
    );
    res.json({ bookmarked: rows.length > 0 });
  } catch (err) { next(err); }
});

module.exports = router;
