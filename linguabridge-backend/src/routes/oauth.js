require('dotenv').config();
const router  = require('express').Router();
const pool    = require('../config/db');
const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcryptjs');
const crypto  = require('crypto');

const generateToken = (user) =>
  jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

// Shared: find user by email, or create a new student account
async function findOrCreate(email, name) {
  const { rows } = await pool.query(
    'SELECT id, name, email, role FROM users WHERE email = $1',
    [email.toLowerCase()]
  );
  if (rows.length) return rows[0];

  const randomPwd = await bcrypt.hash(crypto.randomBytes(32).toString('hex'), 12);
  const { rows: created } = await pool.query(
    `INSERT INTO users (name, email, password, role)
     VALUES ($1,$2,$3,'student') RETURNING id, name, email, role`,
    [(name || email.split('@')[0]).trim(), email.toLowerCase(), randomPwd]
  );
  return created[0];
}

// ── POST /api/auth/google ─────────────────────────────────────────────────────
// Receives the Google access_token from the frontend popup,
// fetches user info from Google's API, then finds-or-creates a local account.
router.post('/google', async (req, res, next) => {
  try {
    const { access_token } = req.body;
    if (!access_token) return res.status(400).json({ message: 'access_token is required' });

    const googleRes = await fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${encodeURIComponent(access_token)}`
    );
    if (!googleRes.ok) return res.status(401).json({ message: 'Invalid Google token' });

    const { email, name } = await googleRes.json();
    if (!email) return res.status(401).json({ message: 'Could not retrieve email from Google' });

    const user  = await findOrCreate(email, name);
    const token = generateToken(user);

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { next(err); }
});

// ── POST /api/auth/apple ──────────────────────────────────────────────────────
// Receives Apple's id_token (and optional user object on first sign-in),
// verifies it via apple-signin-auth, then finds-or-creates a local account.
router.post('/apple', async (req, res, next) => {
  try {
    const { id_token, user: appleUser } = req.body;
    if (!id_token) return res.status(400).json({ message: 'id_token is required' });

    if (!process.env.APPLE_CLIENT_ID) {
      return res.status(503).json({ message: 'Apple Sign In is not configured on this server' });
    }

    const appleSignin = require('apple-signin-auth');
    const payload = await appleSignin.verifyIdToken(id_token, {
      audience: process.env.APPLE_CLIENT_ID,
      ignoreExpiration: false,
    });

    const email = payload.email;
    if (!email) return res.status(401).json({ message: 'Could not retrieve email from Apple' });

    const name = appleUser?.name
      ? `${appleUser.name.firstName || ''} ${appleUser.name.lastName || ''}`.trim()
      : email.split('@')[0];

    const user  = await findOrCreate(email, name);
    const token = generateToken(user);

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { next(err); }
});

module.exports = router;
