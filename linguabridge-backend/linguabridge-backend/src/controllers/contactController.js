const pool = require('../config/db');

// ── POST /api/contact  (public) ───────────────────────────────────────────────
const sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'name, email, and message are required' });
    }

    await pool.query(
      `INSERT INTO contact_messages (name, email, subject, message)
       VALUES ($1, $2, $3, $4)`,
      [name.trim(), email.toLowerCase(), subject?.trim(), message.trim()]
    );

    res.status(201).json({ message: 'Your message has been received. We will get back to you soon!' });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/contact  (admin) ─────────────────────────────────────────────────
const getMessages = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM contact_messages ORDER BY created_at DESC'
    );
    res.json({ messages: rows });
  } catch (err) {
    next(err);
  }
};

// ── PATCH /api/contact/:id/read  (admin) ──────────────────────────────────────
const markAsRead = async (req, res, next) => {
  try {
    await pool.query(
      'UPDATE contact_messages SET is_read = true WHERE id = $1',
      [req.params.id]
    );
    res.json({ message: 'Marked as read' });
  } catch (err) {
    next(err);
  }
};

module.exports = { sendMessage, getMessages, markAsRead };
