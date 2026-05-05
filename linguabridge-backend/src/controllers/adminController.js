const bcrypt = require('bcryptjs');
const pool = require('../config/db');

const VALID_ROLES = ['student', 'instructor', 'admin'];

const listUsers = async (req, res, next) => {
  try {
    const { role, search, page = 1, limit = 20 } = req.query;
    const offset = (Math.max(1, parseInt(page, 10)) - 1) * Math.min(100, Math.max(1, parseInt(limit, 10)));
    const lim = Math.min(100, Math.max(1, parseInt(limit, 10)));
    const params = [];
    const where = [];

    if (role && VALID_ROLES.includes(role)) {
      params.push(role);
      where.push(`u.role = $${params.length}`);
    }
    if (search) {
      params.push(`%${search}%`);
      where.push(`(u.name ILIKE $${params.length} OR u.email ILIKE $${params.length})`);
    }

    const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';

    const countRes = await pool.query(
      `SELECT COUNT(*)::int AS c FROM users u ${whereSql}`,
      params
    );

    params.push(lim, offset);
    const { rows } = await pool.query(
      `SELECT u.id, u.name, u.email, u.role, u.is_verified, u.avatar_url, u.created_at
       FROM users u
       ${whereSql}
       ORDER BY u.created_at DESC
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    res.json({
      users: rows,
      pagination: {
        total: countRes.rows[0].c,
        page: parseInt(page, 10) || 1,
        limit: lim,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid user id' });

    const { name, role, password } = req.body;
    const updates = [];
    const values = [];
    let i = 1;

    if (name !== undefined) {
      const trimmed = String(name).trim();
      if (trimmed.length < 2) return res.status(400).json({ message: 'Name must be at least 2 characters' });
      updates.push(`name = $${i++}`);
      values.push(trimmed);
    }
    if (role !== undefined) {
      if (!VALID_ROLES.includes(role)) {
        return res.status(400).json({ message: `role must be one of: ${VALID_ROLES.join(', ')}` });
      }
      if (id === req.user.id && role !== 'admin') {
        return res.status(400).json({ message: 'You cannot remove your own admin role' });
      }
      updates.push(`role = $${i++}`);
      values.push(role);
    }
    if (password !== undefined) {
      if (String(password).length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters' });
      }
      updates.push(`password = $${i++}`);
      values.push(await bcrypt.hash(password, 12));
    }

    if (!updates.length) return res.status(400).json({ message: 'No valid fields to update' });

    values.push(id);
    const { rows } = await pool.query(
      `UPDATE users SET ${updates.join(', ')}, updated_at = NOW()
       WHERE id = $${i}
       RETURNING id, name, email, role, is_verified, avatar_url, created_at`,
      values
    );

    if (!rows.length) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated', user: rows[0] });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid user id' });
    if (id === req.user.id) return res.status(400).json({ message: 'You cannot delete your own account' });

    const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    if (!rowCount) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};

const platformStats = async (req, res, next) => {
  try {
    const [users, courses, enrollments, byRole] = await Promise.all([
      pool.query('SELECT COUNT(*)::int AS c FROM users'),
      pool.query('SELECT COUNT(*)::int AS c FROM courses'),
      pool.query('SELECT COUNT(*)::int AS c FROM enrollments'),
      pool.query(`SELECT role, COUNT(*)::int AS c FROM users GROUP BY role`),
    ]);

    res.json({
      usersTotal: users.rows[0].c,
      coursesTotal: courses.rows[0].c,
      enrollmentsTotal: enrollments.rows[0].c,
      usersByRole: byRole.rows.reduce((acc, r) => ({ ...acc, [r.role]: r.c }), {}),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { listUsers, updateUser, deleteUser, platformStats };
