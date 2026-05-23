// src/routes/reviews.js
const router = require('express').Router();
const pool   = require('../config/db');
const { protect } = require('../middleware/auth');

// GET /api/reviews/:courseId — all reviews for a course (public)
router.get('/:courseId', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT r.id, r.rating, r.comment, r.created_at,
              u.name AS reviewer_name, u.avatar_url AS reviewer_avatar
       FROM course_reviews r
       JOIN users u ON u.id = r.user_id
       WHERE r.course_id = $1
       ORDER BY r.created_at DESC`,
      [req.params.courseId]
    );

    const avg = rows.length
      ? (rows.reduce((s, r) => s + r.rating, 0) / rows.length).toFixed(1)
      : null;

    res.json({ reviews: rows, avgRating: avg, totalReviews: rows.length });
  } catch (err) { next(err); }
});

// POST /api/reviews/:courseId — submit a review (enrolled students only)
router.post('/:courseId', protect, async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    const courseId = parseInt(req.params.courseId);

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Must be enrolled in the course
    const enrolled = await pool.query(
      'SELECT id FROM enrollments WHERE student_id = $1 AND course_id = $2',
      [req.user.id, courseId]
    );
    if (!enrolled.rows.length) {
      return res.status(403).json({ message: 'You must be enrolled to leave a review' });
    }

    const { rows } = await pool.query(
      `INSERT INTO course_reviews (course_id, user_id, rating, comment)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (course_id, user_id) DO UPDATE
         SET rating = EXCLUDED.rating, comment = EXCLUDED.comment
       RETURNING id, rating, comment, created_at`,
      [courseId, req.user.id, rating, comment?.trim() || null]
    );

    res.status(201).json({ message: 'Review submitted', review: rows[0] });
  } catch (err) { next(err); }
});

// DELETE /api/reviews/:courseId — delete own review
router.delete('/:courseId', protect, async (req, res, next) => {
  try {
    await pool.query(
      'DELETE FROM course_reviews WHERE course_id = $1 AND user_id = $2',
      [parseInt(req.params.courseId), req.user.id]
    );
    res.json({ message: 'Review deleted' });
  } catch (err) { next(err); }
});

module.exports = router;
