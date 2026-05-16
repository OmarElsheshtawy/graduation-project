/**
 * One-time patch: make the password column nullable so Google OAuth
 * users can have an account without a password hash.
 *
 * Run with:  node src/config/patch_nullable_password.js
 */
require('dotenv').config();
const pool = require('./db');

(async () => {
  try {
    await pool.query(`ALTER TABLE users ALTER COLUMN password DROP NOT NULL`);
    console.log('✅ password column is now nullable');
  } catch (err) {
    if (err.message.includes('already nullable') || err.code === '42703') {
      console.log('ℹ️  Column was already nullable — nothing to do');
    } else {
      console.error('❌ Patch failed:', err.message);
      process.exit(1);
    }
  } finally {
    await pool.end();
  }
})();
