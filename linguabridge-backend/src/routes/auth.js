// src/routes/auth.js  — FULL VERSION with forgot-password & email verify
const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const crypto  = require('crypto');
const { body, validationResult } = require('express-validator');
const pool    = require('../config/db');
const { protect } = require('../middleware/auth');

// ── helpers ──────────────────────────────────────────────────────────────────
const generateToken = (user) =>
  jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

const isGmail = (email) => /^[^\s@]+@gmail\.com$/i.test(email);

const sendEmail = async (to, subject, html) => {
  // Using nodemailer — install with: npm install nodemailer
  try {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransporter({
      host:   process.env.EMAIL_HOST   || 'smtp.gmail.com',
      port:   process.env.EMAIL_PORT   || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({ from: `"LinguaBridge" <${process.env.EMAIL_USER}>`, to, subject, html });
    return true;
  } catch (err) {
    console.error('Email error:', err.message);
    return false;
  }
};

// ── POST /api/auth/register ───────────────────────────────────────────────────
router.post('/register', [
  body('name').trim().notEmpty().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    const { name, email, password, role = 'student' } = req.body;

    if (!isGmail(email)) return res.status(422).json({ message: 'Only Gmail addresses (@gmail.com) are accepted.' });

    const safeRole = ['student', 'instructor'].includes(role) ? role : 'student';

    const exists = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (exists.rows.length) return res.status(409).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 12);

    const { rows } = await pool.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1,$2,$3,$4) RETURNING id, name, email, role`,
      [name.trim(), email, hashed, safeRole]
    );

    const user  = rows[0];
    const token = generateToken(user);

    res.status(201).json({ message: 'Registration successful', token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { next(err); }
});

// ── POST /api/auth/login ──────────────────────────────────────────────────────
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    const { email, password } = req.body;

    if (!isGmail(email)) return res.status(422).json({ message: 'Only Gmail addresses (@gmail.com) are accepted.' });

    const { rows } = await pool.query(
      'SELECT id, name, email, password, role, is_verified, avatar_url FROM users WHERE email = $1',
      [email]
    );
    if (!rows.length) return res.status(401).json({ message: 'Invalid email or password' });

    const user = rows[0];
    // Google OAuth accounts have no password — they must sign in via Google
    if (!user.password) return res.status(401).json({ message: 'This account uses Google Sign-In. Please use the "Continue with Google" button.' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

    const token = generateToken(user);
    res.json({ message: 'Login successful', token, user: { id: user.id, name: user.name, email: user.email, role: user.role, is_verified: user.is_verified, avatar_url: user.avatar_url } });
  } catch (err) { next(err); }
});

// ── GET /api/auth/verify-email?token=xxx ─────────────────────────────────────
router.get('/verify-email', async (req, res, next) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).json({ message: 'Token is required' });

    const { rows } = await pool.query(
      `SELECT id FROM users WHERE verify_token = $1 AND verify_token_expires > NOW()`,
      [token]
    );
    if (!rows.length) return res.status(400).json({ message: 'Invalid or expired verification link' });

    await pool.query(
      `UPDATE users SET is_verified = true, verify_token = NULL, verify_token_expires = NULL WHERE id = $1`,
      [rows[0].id]
    );
    res.json({ message: 'Email verified successfully! You can now log in.' });
  } catch (err) { next(err); }
});

// ── POST /api/auth/forgot-password ───────────────────────────────────────────
router.post('/forgot-password', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const { rows } = await pool.query('SELECT id, name FROM users WHERE email = $1', [email.toLowerCase()]);

    // Always return success (don't reveal if email exists)
    if (!rows.length) return res.json({ message: 'If that email exists, a reset link has been sent.' });

    const resetToken  = crypto.randomBytes(32).toString('hex');
    const resetExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1h

    await pool.query(
      `UPDATE users SET reset_token = $1, reset_token_expires = $2 WHERE id = $3`,
      [resetToken, resetExpiry, rows[0].id]
    );

    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    sendEmail(email, 'Reset your LinguaBridge password', `
      <div style="font-family:sans-serif;max-width:500px;margin:0 auto">
        <h2 style="color:#2563EB">Password Reset Request 🔐</h2>
        <p>Hi ${rows[0].name}, click below to reset your password.</p>
        <a href="${resetUrl}" style="display:inline-block;background:#2563EB;color:white;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;margin:16px 0">
          Reset Password
        </a>
        <p style="color:#6B7280;font-size:0.875rem">Link expires in 1 hour. If you didn't request this, ignore this email.</p>
      </div>
    `);

    res.json({ message: 'If that email exists, a reset link has been sent.' });
  } catch (err) { next(err); }
});

// ── POST /api/auth/reset-password ────────────────────────────────────────────
router.post('/reset-password', async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) return res.status(400).json({ message: 'Token and newPassword are required' });
    if (newPassword.length < 8) return res.status(400).json({ message: 'Password must be at least 8 characters' });

    const { rows } = await pool.query(
      `SELECT id FROM users WHERE reset_token = $1 AND reset_token_expires > NOW()`,
      [token]
    );
    if (!rows.length) return res.status(400).json({ message: 'Invalid or expired reset link' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query(
      `UPDATE users SET password = $1, reset_token = NULL, reset_token_expires = NULL WHERE id = $2`,
      [hashed, rows[0].id]
    );
    res.json({ message: 'Password reset successfully! You can now log in.' });
  } catch (err) { next(err); }
});

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
router.get('/me', protect, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email, role, avatar_url, is_verified, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    if (!rows.length) return res.status(404).json({ message: 'User not found' });
    res.json({ user: rows[0] });
  } catch (err) { next(err); }
});

// ── PUT /api/auth/me ──────────────────────────────────────────────────────────
router.put('/me', protect, async (req, res, next) => {
  try {
    const { name, avatar_url } = req.body;
    const { rows } = await pool.query(
      `UPDATE users SET name = COALESCE($1,name), avatar_url = COALESCE($2,avatar_url) WHERE id = $3 RETURNING id,name,email,role,avatar_url`,
      [name?.trim() || null, avatar_url || null, req.user.id]
    );
    res.json({ message: 'Profile updated', user: rows[0] });
  } catch (err) { next(err); }
});

// ── PUT /api/auth/change-password ─────────────────────────────────────────────
router.put('/change-password', protect, async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) return res.status(400).json({ message: 'Both passwords are required' });
    if (newPassword.length < 8) return res.status(400).json({ message: 'New password must be at least 8 characters' });

    const { rows } = await pool.query('SELECT password FROM users WHERE id = $1', [req.user.id]);
    const isMatch  = await bcrypt.compare(currentPassword, rows[0].password);
    if (!isMatch) return res.status(401).json({ message: 'Current password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, req.user.id]);
    res.json({ message: 'Password changed successfully' });
  } catch (err) { next(err); }
});

module.exports = router;