const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const pool    = require('../config/db');

// Strip HTML tags to prevent XSS being stored in the DB
const sanitize = (str) => typeof str === 'string' ? str.replace(/<[^>]*>/g, '').trim() : str;

// ── Helper ────────────────────────────────────────────────────────────────────
const generateToken = (user) =>
  jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

// ── POST /api/auth/register ───────────────────────────────────────────────────
const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, password, role = 'student' } = req.body;

    // Only allow student/instructor self-registration (not admin)
    const safeRole = ['student', 'instructor'].includes(role) ? role : 'student';

    // Check duplicate email
    const exists = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (exists.rows.length) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const { rows } = await pool.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, role, created_at`,
      [sanitize(name), email.toLowerCase(), hashedPassword, safeRole]
    );

    const user  = rows[0];
    const token = generateToken(user);

    res.status(201).json({
      message: 'Registration successful',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

// ── POST /api/auth/login ──────────────────────────────────────────────────────
const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const { rows } = await pool.query(
      'SELECT id, name, email, password, role FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (!rows.length) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
const getMe = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email, role, avatar_url, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    if (!rows.length) return res.status(404).json({ message: 'User not found' });
    res.json({ user: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── PUT /api/auth/me ──────────────────────────────────────────────────────────
const updateMe = async (req, res, next) => {
  try {
    const { name, avatar_url } = req.body;

    const { rows } = await pool.query(
      `UPDATE users
       SET name = COALESCE($1, name),
           avatar_url = COALESCE($2, avatar_url)
       WHERE id = $3
       RETURNING id, name, email, role, avatar_url`,
      [sanitize(name) || null, avatar_url || null, req.user.id]
    );

    res.json({ message: 'Profile updated', user: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── PUT /api/auth/change-password ─────────────────────────────────────────────
const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Both currentPassword and newPassword are required' });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters' });
    }

    const { rows } = await pool.query('SELECT password FROM users WHERE id = $1', [req.user.id]);
    const isMatch  = await bcrypt.compare(currentPassword, rows[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, req.user.id]);

    res.json({ message: 'Password changed successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login, getMe, updateMe, changePassword };
