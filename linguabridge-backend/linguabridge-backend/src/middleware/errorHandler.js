/**
 * Central error handler — add as the last app.use() in index.js
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ${err.stack || err.message}`);

  // Postgres unique-violation
  if (err.code === '23505') {
    return res.status(409).json({ message: 'A record with that value already exists.' });
  }

  // Postgres foreign-key violation
  if (err.code === '23503') {
    return res.status(400).json({ message: 'Referenced record does not exist.' });
  }

  const status  = err.statusCode || err.status || 500;
  const message = err.message    || 'Internal server error';

  res.status(status).json({ message });
};

/**
 * 404 handler — add before errorHandler
 */
const notFound = (req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
};

module.exports = { errorHandler, notFound };
