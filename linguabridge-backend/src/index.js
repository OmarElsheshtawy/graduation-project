require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 5001;

// ── Middleware ─────────────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ─────────────────────────────────────────────────────────────────
app.use('/api/auth',        require('./routes/auth'));
app.use('/api/auth',        require('./routes/oauth'));
app.use('/api/courses',     require('./routes/courses'));
app.use('/api/enrollments', require('./routes/enrollments'));
app.use('/api/instructor',  require('./routes/instructor'));
app.use('/api/analytics',   require('./routes/analytics'));
app.use('/api/admin',       require('./routes/admin'));
app.use('/api/contact',     require('./routes/contact'));
app.use('/api/chat',        require('./routes/chat'));

// ── Health check ───────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'LinguaBridge API', timestamp: new Date().toISOString() });
});

// ── 404 ────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
});

// ── Error Handler ──────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  if (err.code === '23505') return res.status(409).json({ message: 'Already exists.' });
  if (err.code === '23503') return res.status(400).json({ message: 'Referenced record not found.' });
  res.status(err.statusCode || 500).json({ message: err.message || 'Internal server error' });
});

// ── Start (only when running locally, not on Vercel serverless) ───────────
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 LinguaBridge API running on http://localhost:${PORT}`);
  });
}

module.exports = app;