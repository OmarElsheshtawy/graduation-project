/**
 * Password Reset Flow (no external email service needed — token-based)
 * POST /api/auth/forgot-password  → generates reset token
 * POST /api/auth/reset-password   → uses token to set new password
 */
const router   = require('express').Router();
const bcrypt   = require('bcryptjs');
const crypto   = require('crypto');
const pool     = require('../config/db');
const { protect } = require('../middleware/auth');

// ── Add reset_tokens table (run once) ────────────────────────────────────────
// ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token VARCHAR(255);
// ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_token_expiry TIMESTAMPTZ;

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const { rows } = await pool.query('SELECT id FROM users WHERE email = $1', [email.toLowerCase()]);
    // Always return success to prevent email enumeration
    if (!rows.length) {
      return res.json({ message: 'If that email exists, a reset link has been sent.' });
    }

    const token   = crypto.randomBytes(32).toString('hex');
    const expiry  = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await pool.query(
      'UPDATE users SET reset_token = $1, reset_token_expiry = $2 WHERE id = $3',
      [token, expiry, rows[0].id]
    );

    // In production: send email with reset link
    // For now: return the token directly (dev mode)
    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    console.log(`🔑 Reset link for ${email}: ${resetLink}`);

    res.json({
      message: 'If that email exists, a reset link has been sent.',
      // Remove this in production:
      dev_reset_link: resetLink,
      dev_token: token,
    });
  } catch (err) { next(err); }
});

// POST /api/auth/reset-password
router.post('/reset-password', async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) return res.status(400).json({ message: 'Token and newPassword are required' });
    if (newPassword.length < 8) return res.status(400).json({ message: 'Password must be at least 8 characters' });

    const { rows } = await pool.query(
      'SELECT id FROM users WHERE reset_token = $1 AND reset_token_expiry > NOW()',
      [token]
    );
    if (!rows.length) return res.status(400).json({ message: 'Invalid or expired reset token' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query(
      'UPDATE users SET password = $1, reset_token = NULL, reset_token_expiry = NULL WHERE id = $2',
      [hashed, rows[0].id]
    );

    res.json({ message: 'Password reset successfully. You can now log in.' });
  } catch (err) { next(err); }
});

// PUT /api/auth/change-password (authenticated)
router.put('/change-password', protect, async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) return res.status(400).json({ message: 'Both fields required' });
    if (newPassword.length < 8) return res.status(400).json({ message: 'Min 8 characters' });

    const { rows } = await pool.query('SELECT password FROM users WHERE id = $1', [req.user.id]);
    const match    = await bcrypt.compare(currentPassword, rows[0].password);
    if (!match) return res.status(401).json({ message: 'Current password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashed, req.user.id]);
    res.json({ message: 'Password changed successfully' });
  } catch (err) { next(err); }
});

module.exports = router;