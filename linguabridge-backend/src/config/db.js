const { Pool } = require('pg');
require('dotenv').config();

// Render provides a single DATABASE_URL; fall back to individual vars for local dev
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // required by Render's managed PostgreSQL
    })
  : new Pool({
      host:     process.env.DB_HOST     || 'localhost',
      port:     parseInt(process.env.DB_PORT, 10) || 5432,
      database: process.env.DB_NAME     || 'linguabridge',
      user:     process.env.DB_USER     || 'postgres',
      password: process.env.DB_PASSWORD,
    });

pool.on('connect', () => {
  console.log('✅ PostgreSQL connected');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL error:', err.message);
  process.exit(1);
});

module.exports = pool;
