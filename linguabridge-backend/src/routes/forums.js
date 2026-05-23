// src/routes/forums.js
const router = require('express').Router();
const pool   = require('../config/db');
const { protect } = require('../middleware/auth');

// ── GET /api/forums — list all posts ─────────────────────────────────────────
router.get('/', async (req, res, next) => {
  try {
    const { category, search, page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;
    const params = [];
    const where  = [];

    if (category && category !== 'all') {
      params.push(category);
      where.push(`p.category = $${params.length}`);
    }
    if (search) {
      params.push(`%${search}%`);
      where.push(`(p.title ILIKE $${params.length} OR p.content ILIKE $${params.length})`);
    }

    const whereClause = where.length ? `WHERE ${where.join(' AND ')}` : '';

    const countRes = await pool.query(
      `SELECT COUNT(*) FROM forum_posts p ${whereClause}`, params
    );

    params.push(limit, offset);
    const { rows } = await pool.query(
      `SELECT p.id, p.title, p.content, p.category, p.likes, p.views, p.is_pinned,
              p.created_at, p.updated_at,
              u.name AS author_name, u.avatar_url AS author_avatar,
              COUNT(DISTINCT r.id)::int AS reply_count
       FROM forum_posts p
       JOIN users u ON u.id = p.user_id
       LEFT JOIN forum_replies r ON r.post_id = p.id
       ${whereClause}
       GROUP BY p.id, u.name, u.avatar_url
       ORDER BY p.is_pinned DESC, p.created_at DESC
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    res.json({
      posts: rows,
      pagination: {
        total:      parseInt(countRes.rows[0].count),
        page:       parseInt(page),
        limit:      parseInt(limit),
        totalPages: Math.ceil(countRes.rows[0].count / limit),
      },
    });
  } catch (err) { next(err); }
});

// ── POST /api/forums — create a post (auth required) ─────────────────────────
router.post('/', protect, async (req, res, next) => {
  try {
    const { title, content, category = 'general' } = req.body;
    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({ message: 'title and content are required' });
    }

    const VALID_CATS = ['grammar','vocab','ielts','speaking','writing','general'];
    const safeCategory = VALID_CATS.includes(category) ? category : 'general';

    const { rows } = await pool.query(
      `INSERT INTO forum_posts (user_id, title, content, category)
       VALUES ($1, $2, $3, $4)
       RETURNING id, title, content, category, likes, views, is_pinned, created_at`,
      [req.user.id, title.trim(), content.trim(), safeCategory]
    );

    res.status(201).json({ message: 'Post created', post: rows[0] });
  } catch (err) { next(err); }
});

// ── GET /api/forums/:id — single post with replies ───────────────────────────
router.get('/:id', async (req, res, next) => {
  try {
    // Increment view count
    await pool.query('UPDATE forum_posts SET views = views + 1 WHERE id = $1', [req.params.id]);

    const postRes = await pool.query(
      `SELECT p.*, u.name AS author_name, u.avatar_url AS author_avatar,
              COUNT(DISTINCT r.id)::int AS reply_count
       FROM forum_posts p
       JOIN users u ON u.id = p.user_id
       LEFT JOIN forum_replies r ON r.post_id = p.id
       WHERE p.id = $1
       GROUP BY p.id, u.name, u.avatar_url`,
      [req.params.id]
    );

    if (!postRes.rows.length) return res.status(404).json({ message: 'Post not found' });

    const repliesRes = await pool.query(
      `SELECT r.id, r.content, r.likes, r.created_at,
              u.name AS author_name, u.avatar_url AS author_avatar
       FROM forum_replies r
       JOIN users u ON u.id = r.user_id
       WHERE r.post_id = $1
       ORDER BY r.created_at ASC`,
      [req.params.id]
    );

    res.json({ post: postRes.rows[0], replies: repliesRes.rows });
  } catch (err) { next(err); }
});

// ── POST /api/forums/:id/replies — add a reply (auth required) ───────────────
router.post('/:id/replies', protect, async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content?.trim()) return res.status(400).json({ message: 'content is required' });

    const post = await pool.query('SELECT id FROM forum_posts WHERE id = $1', [req.params.id]);
    if (!post.rows.length) return res.status(404).json({ message: 'Post not found' });

    const { rows } = await pool.query(
      `INSERT INTO forum_replies (post_id, user_id, content)
       VALUES ($1, $2, $3)
       RETURNING id, content, likes, created_at`,
      [req.params.id, req.user.id, content.trim()]
    );

    res.status(201).json({ message: 'Reply added', reply: rows[0] });
  } catch (err) { next(err); }
});

// ── PATCH /api/forums/:id/like — like a post ─────────────────────────────────
router.patch('/:id/like', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'UPDATE forum_posts SET likes = likes + 1 WHERE id = $1 RETURNING likes',
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ message: 'Post not found' });
    res.json({ likes: rows[0].likes });
  } catch (err) { next(err); }
});

// ── DELETE /api/forums/:id — delete own post (auth required) ─────────────────
router.delete('/:id', protect, async (req, res, next) => {
  try {
    const post = await pool.query('SELECT user_id FROM forum_posts WHERE id = $1', [req.params.id]);
    if (!post.rows.length) return res.status(404).json({ message: 'Post not found' });
    if (post.rows[0].user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorised' });
    }
    await pool.query('DELETE FROM forum_posts WHERE id = $1', [req.params.id]);
    res.json({ message: 'Post deleted' });
  } catch (err) { next(err); }
});

module.exports = router;
