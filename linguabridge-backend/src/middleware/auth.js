const jwt  = require('jsonwebtoken');
const pool = require('../config/db');

/**
 * Verifies the JWT in the Authorization header.
 * Attaches req.user = { id, name, email, role } on success.
 */
const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorised — no token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch fresh user (handles revoked / deleted accounts)
    const { rows } = await pool.query(
      'SELECT id, name, email, role FROM users WHERE id = $1',
      [decoded.id]
    );

    if (!rows.length) {
      return res.status(401).json({ message: 'User no longer exists' });
    }

    req.user = rows[0];
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

/**
 * Role-based access. Admins bypass the role list (full platform access on APIs).
 * Instructors never match `student`-only routes unless explicitly listed.
 * Must run AFTER protect.
 */
const authorize = (...roles) => (req, res, next) => {
  if (req.user.role === 'admin') return next();
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({
      message: `Access denied — requires role: ${roles.join(' or ')}`,
    });
  }
  next();
};

/** Strict admin-only (e.g. user management). Must run AFTER protect. */
const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

module.exports = { protect, authorize, adminOnly };
