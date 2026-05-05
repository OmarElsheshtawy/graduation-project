const pool = require('../config/db');

const ensureForumTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS forum_posts (
      id         SERIAL PRIMARY KEY,
      user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      title      VARCHAR(255) NOT NULL,
      body       TEXT NOT NULL,
      category   VARCHAR(50) DEFAULT 'general',
      likes      INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS forum_replies (
      id       SERIAL PRIMARY KEY,
      post_id  INTEGER NOT NULL REFERENCES forum_posts(id) ON DELETE CASCADE,
      user_id  INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      body     TEXT NOT NULL,
      likes    INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS study_groups (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(100) NOT NULL,
      description TEXT,
      creator_id  INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      level       VARCHAR(50),
      max_members INTEGER DEFAULT 20,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS study_group_members (
      id         SERIAL PRIMARY KEY,
      group_id   INTEGER NOT NULL REFERENCES study_groups(id) ON DELETE CASCADE,
      user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      joined_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE(group_id, user_id)
    );
  `);
};

// ── Forum Posts ───────────────────────────────────────────────────────────
const getPosts = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { category = '', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;
    const where  = category ? `WHERE fp.category = '${category}'` : '';

    const { rows } = await pool.query(`
      SELECT fp.*, u.name AS author_name, u.avatar_url,
             COUNT(fr.id)::int AS reply_count
      FROM forum_posts fp
      JOIN users u ON u.id = fp.user_id
      LEFT JOIN forum_replies fr ON fr.post_id = fp.id
      ${where}
      GROUP BY fp.id, u.name, u.avatar_url
      ORDER BY fp.created_at DESC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

    res.json({ posts: rows });
  } catch (err) { next(err); }
};

const createPost = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { title, body, category = 'general' } = req.body;
    if (!title || !body) return res.status(400).json({ message: 'Title and body required' });

    const { rows: [post] } = await pool.query(
      'INSERT INTO forum_posts (user_id, title, body, category) VALUES ($1,$2,$3,$4) RETURNING *',
      [req.user.id, title.trim(), body.trim(), category]
    );
    res.status(201).json({ post });
  } catch (err) { next(err); }
};

const getPostWithReplies = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { rows: [post] } = await pool.query(`
      SELECT fp.*, u.name AS author_name FROM forum_posts fp
      JOIN users u ON u.id = fp.user_id WHERE fp.id = $1
    `, [req.params.id]);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const { rows: replies } = await pool.query(`
      SELECT fr.*, u.name AS author_name FROM forum_replies fr
      JOIN users u ON u.id = fr.user_id WHERE fr.post_id = $1 ORDER BY fr.created_at ASC
    `, [req.params.id]);

    res.json({ post, replies });
  } catch (err) { next(err); }
};

const replyToPost = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { body } = req.body;
    if (!body) return res.status(400).json({ message: 'Reply body required' });

    const { rows: [reply] } = await pool.query(
      'INSERT INTO forum_replies (post_id, user_id, body) VALUES ($1,$2,$3) RETURNING *',
      [req.params.id, req.user.id, body.trim()]
    );
    res.status(201).json({ reply });
  } catch (err) { next(err); }
};

const likePost = async (req, res, next) => {
  try {
    await pool.query('UPDATE forum_posts SET likes = likes + 1 WHERE id = $1', [req.params.id]);
    res.json({ message: 'Liked' });
  } catch (err) { next(err); }
};

// ── Study Groups ──────────────────────────────────────────────────────────
const getGroups = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { rows } = await pool.query(`
      SELECT sg.*, u.name AS creator_name,
             COUNT(sgm.user_id)::int AS member_count
      FROM study_groups sg
      JOIN users u ON u.id = sg.creator_id
      LEFT JOIN study_group_members sgm ON sgm.group_id = sg.id
      GROUP BY sg.id, u.name
      ORDER BY member_count DESC
    `);
    res.json({ groups: rows });
  } catch (err) { next(err); }
};

const createGroup = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { name, description, level, max_members = 20 } = req.body;
    if (!name) return res.status(400).json({ message: 'Group name required' });

    const { rows: [group] } = await pool.query(
      'INSERT INTO study_groups (name, description, creator_id, level, max_members) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [name.trim(), description, req.user.id, level, max_members]
    );

    // Auto-join creator
    await pool.query('INSERT INTO study_group_members (group_id, user_id) VALUES ($1,$2)', [group.id, req.user.id]);

    res.status(201).json({ group });
  } catch (err) { next(err); }
};

const joinGroup = async (req, res, next) => {
  try {
    await ensureForumTables();
    const { rows: [group] } = await pool.query('SELECT * FROM study_groups WHERE id = $1', [req.params.id]);
    if (!group) return res.status(404).json({ message: 'Group not found' });

    const { rows: [count] } = await pool.query(
      'SELECT COUNT(*) FROM study_group_members WHERE group_id = $1', [req.params.id]
    );
    if (parseInt(count.count) >= group.max_members) {
      return res.status(400).json({ message: 'Group is full' });
    }

    await pool.query('INSERT INTO study_group_members (group_id, user_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [req.params.id, req.user.id]);
    res.json({ message: 'Joined group!' });
  } catch (err) { next(err); }
};

const leaveGroup = async (req, res, next) => {
  try {
    await pool.query('DELETE FROM study_group_members WHERE group_id = $1 AND user_id = $2', [req.params.id, req.user.id]);
    res.json({ message: 'Left group' });
  } catch (err) { next(err); }
};

module.exports = { getPosts, createPost, getPostWithReplies, replyToPost, likePost, getGroups, createGroup, joinGroup, leaveGroup };