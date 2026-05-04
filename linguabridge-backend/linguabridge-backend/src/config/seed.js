/**
 * Run with:  npm run db:seed
 *
 * Populates the database with demo users, courses, enrollments and progress.
 * ⚠️  Clears existing rows first — development use only.
 */

require('dotenv').config();
const bcrypt = require('bcryptjs');
const pool   = require('./db');

const seed = async () => {
  const client = await pool.connect();
  try {
    console.log('🌱 Seeding database...');
    await client.query('BEGIN');

    // Clear in reverse FK order
    await client.query('DELETE FROM progress');
    await client.query('DELETE FROM enrollments');
    await client.query('DELETE FROM contact_messages');
    await client.query('DELETE FROM courses');
    await client.query('DELETE FROM users');
    await client.query('ALTER SEQUENCE users_id_seq   RESTART WITH 1');
    await client.query('ALTER SEQUENCE courses_id_seq RESTART WITH 1');

    // ── Users ─────────────────────────────────────────────────────────────────
    const hash = (pw) => bcrypt.hashSync(pw, 10);

    const usersResult = await client.query(`
      INSERT INTO users (name, email, password, role) VALUES
        ('Admin User',         'admin@linguabridge.com',      $1, 'admin'),
        ('Dr. Emily Chen',     'emily@linguabridge.com',      $2, 'instructor'),
        ('Michael Rodriguez',  'michael@linguabridge.com',    $3, 'instructor'),
        ('Sarah Johnson',      'sarah@linguabridge.com',      $4, 'student'),
        ('Ahmed Hassan',       'ahmed@linguabridge.com',      $5, 'student'),
        ('Yuki Tanaka',        'yuki@linguabridge.com',       $6, 'student')
      RETURNING id, name, role;
    `, [
      hash('Admin123!'),
      hash('Emily123!'),
      hash('Michael123!'),
      hash('Sarah123!'),
      hash('Ahmed123!'),
      hash('Yuki123!'),
    ]);
    console.log('👤 Users:', usersResult.rows.map(u => `${u.name} (${u.role})`).join(', '));

    const emilyId   = usersResult.rows[1].id;
    const michaelId = usersResult.rows[2].id;
    const sarahId   = usersResult.rows[3].id;
    const ahmedId   = usersResult.rows[4].id;
    const yukiId    = usersResult.rows[5].id;

    // ── Courses ───────────────────────────────────────────────────────────────
    const coursesResult = await client.query(`
      INSERT INTO courses
        (title, description, level, duration, price, instructor_id, is_published) VALUES
        ('Beginner English',
         'Perfect for absolute beginners. Learn basic vocabulary, grammar, and conversational skills.',
         'Beginner', '8 weeks', 0.00, $1, true),
        ('Intermediate English',
         'Build on your foundation with more complex grammar, expanded vocabulary, and fluency practice.',
         'Intermediate', '10 weeks', 49.00, $1, true),
        ('Advanced English',
         'Master advanced grammar, idiomatic expressions, and professional communication skills.',
         'Advanced', '12 weeks', 79.00, $1, true),
        ('Business English',
         'Learn professional communication, business writing, and presentation skills for the workplace.',
         'Intermediate+', '6 weeks', 69.00, $2, true),
        ('IELTS Preparation',
         'Comprehensive preparation for the IELTS exam with practice tests and expert guidance.',
         'All Levels', '8 weeks', 99.00, $2, true),
        ('Conversational English',
         'Focus on speaking and listening skills through interactive conversations and real-world scenarios.',
         'Beginner+', '6 weeks', 39.00, $1, true)
      RETURNING id, title;
    `, [emilyId, michaelId]);
    console.log('📚 Courses:', coursesResult.rows.map(c => c.title).join(', '));

    const [c1, c2, c3, c4, c5] = coursesResult.rows.map(c => c.id);

    // ── Enrollments ───────────────────────────────────────────────────────────
    // Sarah enrolled in c1, c2, c3
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [sarahId, c1]);
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [sarahId, c2]);
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [sarahId, c3]);
    // Ahmed enrolled in c1, c4
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [ahmedId, c1]);
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [ahmedId, c4]);
    // Yuki enrolled in c1, c5
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [yukiId, c1]);
    await client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [yukiId, c5]);

    // ── Progress ──────────────────────────────────────────────────────────────
    await client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [sarahId, c1, 60]);
    await client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [sarahId, c2, 30]);
    await client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [sarahId, c3, 0]);
    await client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [ahmedId, c1, 80]);
    await client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [ahmedId, c4, 15]);
    await client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [yukiId, c1, 45]);

    // ── Contact messages ──────────────────────────────────────────────────────
    await client.query(`
      INSERT INTO contact_messages (name, email, subject, message) VALUES
        ('Ahmed Hassan',  'ahmed@linguabridge.com',  'Course question',
         'When does the IELTS course next cohort start?'),
        ('Maria Silva',   'maria@example.com',       'Technical issue',
         'I cannot access my course videos after enrolling.');
    `);

    await client.query('COMMIT');
    console.log('✅ Database seeded successfully!');
    console.log('');
    console.log('📋 Demo login credentials:');
    console.log('   Instructor → emily@linguabridge.com   / Emily123!');
    console.log('   Student    → sarah@linguabridge.com   / Sarah123!');
    console.log('   Admin      → admin@linguabridge.com   / Admin123!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  } finally {
    client.release();
    pool.end();
  }
};

seed();