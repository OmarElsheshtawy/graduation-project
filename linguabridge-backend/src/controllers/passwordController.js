const pool   = require('../config/db');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// ── POST /api/auth/forgot-password ────────────────────────────────────────
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const { rows } = await pool.query('SELECT id, name FROM users WHERE email = $1', [email.toLowerCase()]);

    // Always return success (don't reveal if email exists)
    if (!rows.length) {
      return res.json({ message: 'If that email exists, a reset link has been sent.' });
    }

    const user  = rows[0];
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 3600000); // 1 hour

    // Store reset token (add columns if not exist)
    await pool.query(`
      ALTER TABLE users
        ADD COLUMN IF NOT EXISTS reset_token      TEXT,
        ADD COLUMN IF NOT EXISTS reset_token_expires TIMESTAMPTZ
    `);
    await pool.query(
      'UPDATE users SET reset_token = $1, reset_token_expires = $2 WHERE id = $3',
      [token, expires, user.id]
    );

    // In production: send email. For now return token in response (dev mode)
    const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:5173'}/reset-password?token=${token}`;

    console.log(`\n🔑 Password reset link for ${email}:\n${resetUrl}\n`);

    res.json({
      message: 'If that email exists, a reset link has been sent.',
      // Remove next line in production:
      devResetUrl: process.env.NODE_ENV === 'development' ? resetUrl : undefined,
    });
  } catch (err) { next(err); }
};

// ── POST /api/auth/reset-password ─────────────────────────────────────────
const resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) return res.status(400).json({ message: 'Token and newPassword required' });
    if (newPassword.length < 8)  return res.status(400).json({ message: 'Password must be at least 8 characters' });

    const { rows } = await pool.query(
      'SELECT id FROM users WHERE reset_token = $1 AND reset_token_expires > NOW()',
      [token]
    );
    if (!rows.length) return res.status(400).json({ message: 'Invalid or expired reset token' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query(
      'UPDATE users SET password = $1, reset_token = NULL, reset_token_expires = NULL WHERE id = $2',
      [hashed, rows[0].id]
    );

    res.json({ message: 'Password reset successfully! You can now log in.' });
  } catch (err) { next(err); }
};

// ── POST /api/auth/verify-email ───────────────────────────────────────────
const sendVerification = async (req, res, next) => {
  try {
    await pool.query(`
      ALTER TABLE users
        ADD COLUMN IF NOT EXISTS email_verified     BOOLEAN DEFAULT false,
        ADD COLUMN IF NOT EXISTS verify_token       TEXT,
        ADD COLUMN IF NOT EXISTS verify_token_expires TIMESTAMPTZ
    `);

    const token   = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 86400000); // 24h

    await pool.query(
      'UPDATE users SET verify_token = $1, verify_token_expires = $2 WHERE id = $3',
      [token, expires, req.user.id]
    );

    const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    console.log(`\n✉️  Email verification link:\n${verifyUrl}\n`);

    res.json({ message: 'Verification email sent!', devVerifyUrl: process.env.NODE_ENV === 'development' ? verifyUrl : undefined });
  } catch (err) { next(err); }
};

const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.body;
    const { rows } = await pool.query(
      'SELECT id FROM users WHERE verify_token = $1 AND verify_token_expires > NOW()',
      [token]
    );
    if (!rows.length) return res.status(400).json({ message: 'Invalid or expired verification token' });

    await pool.query(
      'UPDATE users SET email_verified = true, verify_token = NULL, verify_token_expires = NULL WHERE id = $1',
      [rows[0].id]
    );
    res.json({ message: 'Email verified successfully!' });
  } catch (err) { next(err); }
};

module.exports = { forgotPassword, resetPassword, sendVerification, verifyEmail };