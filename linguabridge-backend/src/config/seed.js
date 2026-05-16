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
        ('Admin User',         'admin@gmail.com',      $1,  'admin'),
        ('Dr. Emily Chen',     'emily@gmail.com',      $2,  'instructor'),
        ('Sarah Johnson',      'sarah@gmail.com',      $3,  'student'),
        ('Ahmed Hassan',       'ahmed@gmail.com',      $4,  'student'),
        ('Yuki Tanaka',        'yuki@gmail.com',       $5,  'student'),
        ('Maria Silva',        'maria@gmail.com',      $6,  'student'),
        ('Omar Abdullah',      'omar@gmail.com',       $7,  'student'),
        ('Emma Wilson',        'emma@gmail.com',       $8,  'student'),
        ('Lucas Oliveira',     'lucas@gmail.com',      $9,  'student'),
        ('Fatima Al-Rashid',   'fatima@gmail.com',     $10, 'student')
      RETURNING id, name, role;
    `, [
      hash('Admin123!'),
      hash('Emily123!'),
      hash('Sarah123!'),
      hash('Ahmed123!'),
      hash('Yuki123!'),
      hash('Maria123!'),
      hash('Omar123!'),
      hash('Emma123!'),
      hash('Lucas123!'),
      hash('Fatima123!'),
    ]);
    console.log('👤 Users:', usersResult.rows.map(u => `${u.name} (${u.role})`).join(', '));

    const emilyId  = usersResult.rows[1].id;
    const sarahId  = usersResult.rows[2].id;
    const ahmedId  = usersResult.rows[3].id;
    const yukiId   = usersResult.rows[4].id;
    const mariaId  = usersResult.rows[5].id;
    const omarId   = usersResult.rows[6].id;
    const emmaId   = usersResult.rows[7].id;
    const lucasId  = usersResult.rows[8].id;
    const fatimaId = usersResult.rows[9].id;

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
    `, [emilyId, emilyId]);
    console.log('📚 Courses:', coursesResult.rows.map(c => c.title).join(', '));

    const [c1, c2, c3, c4, c5, c6] = coursesResult.rows.map(c => c.id);

    // ── Enrollments ───────────────────────────────────────────────────────────
    const enroll = (sid, cid) =>
      client.query(`INSERT INTO enrollments (student_id, course_id) VALUES ($1,$2)`, [sid, cid]);

    // Sarah → Beginner, Intermediate, Advanced
    await enroll(sarahId,  c1); await enroll(sarahId,  c2); await enroll(sarahId,  c3);
    // Ahmed → Beginner, Business English
    await enroll(ahmedId,  c1); await enroll(ahmedId,  c4);
    // Yuki → Beginner, IELTS
    await enroll(yukiId,   c1); await enroll(yukiId,   c5);
    // Maria → Beginner, Conversational
    await enroll(mariaId,  c1); await enroll(mariaId,  c6);
    // Omar → Intermediate, Business English, IELTS
    await enroll(omarId,   c2); await enroll(omarId,   c4); await enroll(omarId, c5);
    // Emma → Beginner, Intermediate
    await enroll(emmaId,   c1); await enroll(emmaId,   c2);
    // Lucas → Advanced, IELTS
    await enroll(lucasId,  c3); await enroll(lucasId,  c5);
    // Fatima → Beginner, Business English, Conversational
    await enroll(fatimaId, c1); await enroll(fatimaId, c4); await enroll(fatimaId, c6);

    // ── Progress ──────────────────────────────────────────────────────────────
    const prog = (sid, cid, pct) =>
      client.query(`INSERT INTO progress (student_id, course_id, percent_complete) VALUES ($1,$2,$3)`, [sid, cid, pct]);

    // Sarah
    await prog(sarahId,  c1, 60); await prog(sarahId,  c2, 30); await prog(sarahId,  c3,  0);
    // Ahmed
    await prog(ahmedId,  c1, 80); await prog(ahmedId,  c4, 15);
    // Yuki
    await prog(yukiId,   c1, 45); await prog(yukiId,   c5, 10);
    // Maria
    await prog(mariaId,  c1, 100); await prog(mariaId, c6, 55);
    // Omar
    await prog(omarId,   c2, 70); await prog(omarId,   c4, 40); await prog(omarId,  c5, 20);
    // Emma
    await prog(emmaId,   c1, 100); await prog(emmaId,  c2, 65);
    // Lucas
    await prog(lucasId,  c3, 35); await prog(lucasId,  c5, 80);
    // Fatima
    await prog(fatimaId, c1, 90); await prog(fatimaId, c4, 25); await prog(fatimaId, c6, 50);

    // ── Contact messages ──────────────────────────────────────────────────────
    await client.query(`
      INSERT INTO contact_messages (name, email, subject, message) VALUES
        ('Ahmed Hassan',  'ahmed@gmail.com',  'Course question',
         'When does the IELTS course next cohort start?'),
        ('Maria Silva',   'maria@example.com',       'Technical issue',
         'I cannot access my course videos after enrolling.');
    `);

    await client.query('COMMIT');
    console.log('✅ Database seeded successfully!');
    console.log('');
    console.log('📋 Demo login credentials:');
    console.log('   Admin      → admin@gmail.com   / Admin123!');
    console.log('   Instructor → emily@gmail.com   / Emily123!');
    console.log('   Student    → sarah@gmail.com   / Sarah123!');
    console.log('   Student    → ahmed@gmail.com   / Ahmed123!');
    console.log('   Student    → yuki@gmail.com    / Yuki123!');
    console.log('   Student    → maria@gmail.com   / Maria123!');
    console.log('   Student    → omar@gmail.com    / Omar123!');
    console.log('   Student    → emma@gmail.com    / Emma123!');
    console.log('   Student    → lucas@gmail.com   / Lucas123!');
    console.log('   Student    → fatima@gmail.com  / Fatima123!');
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