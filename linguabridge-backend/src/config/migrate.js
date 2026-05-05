// src/config/migrate.js  — FULL VERSION with all new tables
require('dotenv').config();
const pool = require('./db');

const migrate = async () => {
  const client = await pool.connect();
  try {
    console.log('🚀 Running migrations...');
    await client.query('BEGIN');

    // ── 1. USERS (with auth + stripe columns) ────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id                    SERIAL PRIMARY KEY,
        name                  VARCHAR(100)        NOT NULL,
        email                 VARCHAR(255) UNIQUE NOT NULL,
        password              VARCHAR(255)        NOT NULL,
        role                  VARCHAR(20)         NOT NULL DEFAULT 'student'
                                CHECK (role IN ('student','instructor','admin')),
        avatar_url            TEXT,
        is_verified           BOOLEAN             NOT NULL DEFAULT false,
        verify_token          VARCHAR(255),
        verify_token_expires  TIMESTAMPTZ,
        reset_token           VARCHAR(255),
        reset_token_expires   TIMESTAMPTZ,
        google_id             VARCHAR(255),
        stripe_customer_id    VARCHAR(255),
        subscription_plan     VARCHAR(20)         DEFAULT 'free'
                                CHECK (subscription_plan IN ('free','pro','team')),
        subscription_ends_at  TIMESTAMPTZ,
        xp                    INTEGER             NOT NULL DEFAULT 0,
        level                 VARCHAR(10)         NOT NULL DEFAULT 'A1',
        streak_days           INTEGER             NOT NULL DEFAULT 0,
        last_activity_date    DATE,
        total_time_minutes    INTEGER             NOT NULL DEFAULT 0,
        created_at            TIMESTAMPTZ         NOT NULL DEFAULT NOW(),
        updated_at            TIMESTAMPTZ         NOT NULL DEFAULT NOW()
      );
    `);

    // ── 2. COURSES ────────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id            SERIAL PRIMARY KEY,
        title         VARCHAR(200)  NOT NULL,
        description   TEXT,
        level         VARCHAR(50)   NOT NULL,
        duration      VARCHAR(50),
        price         NUMERIC(10,2) NOT NULL DEFAULT 0,
        instructor_id INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        is_published  BOOLEAN       NOT NULL DEFAULT false,
        thumbnail_url TEXT,
        video_url     TEXT,
        category      VARCHAR(50)   DEFAULT 'general',
        tags          TEXT[],
        created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
        updated_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
      );
    `);

    // ── 3. ENROLLMENTS ────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id          SERIAL PRIMARY KEY,
        student_id  INTEGER NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
        course_id   INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
        enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (student_id, course_id)
      );
    `);

    // ── 4. PROGRESS ───────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS progress (
        id                SERIAL PRIMARY KEY,
        student_id        INTEGER NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
        course_id         INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
        percent_complete  INTEGER NOT NULL DEFAULT 0 CHECK (percent_complete BETWEEN 0 AND 100),
        last_accessed_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        completed_at      TIMESTAMPTZ,
        time_spent_minutes INTEGER NOT NULL DEFAULT 0,
        UNIQUE (student_id, course_id)
      );
    `);

    // ── 5. BADGES ─────────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS badges (
        id          SERIAL PRIMARY KEY,
        name        VARCHAR(100) NOT NULL,
        description TEXT,
        icon        VARCHAR(10),
        xp_required INTEGER      DEFAULT 0,
        condition   VARCHAR(50)
      );
    `);

    await client.query(`
      INSERT INTO badges (name, description, icon, xp_required, condition) VALUES
        ('First Step',    'Complete your first lesson',           '🌱', 0,    'first_lesson'),
        ('On Fire',       '7-day learning streak',                '🔥', 0,    'streak_7'),
        ('Unstoppable',   '30-day learning streak',               '⚡', 0,    'streak_30'),
        ('Quick Learner', 'Complete 10 lessons',                  '⚡', 200,  'lessons_10'),
        ('Scholar',       'Complete 50 lessons',                  '📚', 1000, 'lessons_50'),
        ('Champion',      'Reach top 10 on leaderboard',         '🏆', 0,    'top_10'),
        ('Diamond',       'Score 100%% on 5 quizzes',            '💎', 0,    'perfect_5'),
        ('Graduate',      'Complete a full course',               '🎓', 500,  'course_complete'),
        ('Polyglot',      'Complete 3 different courses',         '🌍', 2000, 'courses_3'),
        ('XP Master',     'Earn 5000 XP',                        '🌟', 5000, 'xp_5000')
      ON CONFLICT DO NOTHING;
    `);

    // ── 6. USER BADGES ────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS user_badges (
        id         SERIAL PRIMARY KEY,
        user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        badge_id   INTEGER NOT NULL REFERENCES badges(id),
        earned_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, badge_id)
      );
    `);

    // ── 7. DAILY CHALLENGES ───────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS daily_challenges (
        id           SERIAL PRIMARY KEY,
        date         DATE        NOT NULL UNIQUE,
        title        VARCHAR(200) NOT NULL,
        description  TEXT,
        xp_reward    INTEGER     NOT NULL DEFAULT 50,
        challenge_data JSONB
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS user_daily_completions (
        id           SERIAL PRIMARY KEY,
        user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        challenge_id INTEGER NOT NULL REFERENCES daily_challenges(id),
        completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        score        INTEGER,
        UNIQUE (user_id, challenge_id)
      );
    `);

    // ── 8. BOOKMARKS ──────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS bookmarks (
        id         SERIAL PRIMARY KEY,
        user_id    INTEGER NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
        course_id  INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, course_id)
      );
    `);

    // ── 9. FORUM POSTS ────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS forum_posts (
        id         SERIAL PRIMARY KEY,
        user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title      VARCHAR(300) NOT NULL,
        content    TEXT         NOT NULL,
        category   VARCHAR(50)  DEFAULT 'general',
        likes      INTEGER      NOT NULL DEFAULT 0,
        views      INTEGER      NOT NULL DEFAULT 0,
        is_pinned  BOOLEAN      NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS forum_replies (
        id         SERIAL PRIMARY KEY,
        post_id    INTEGER NOT NULL REFERENCES forum_posts(id) ON DELETE CASCADE,
        user_id    INTEGER NOT NULL REFERENCES users(id)       ON DELETE CASCADE,
        content    TEXT    NOT NULL,
        likes      INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    // ── 10. STUDY GROUPS ──────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS study_groups (
        id          SERIAL PRIMARY KEY,
        name        VARCHAR(200) NOT NULL,
        description TEXT,
        owner_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        level       VARCHAR(50),
        max_members INTEGER      DEFAULT 10,
        is_public   BOOLEAN      NOT NULL DEFAULT true,
        created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS study_group_members (
        id         SERIAL PRIMARY KEY,
        group_id   INTEGER NOT NULL REFERENCES study_groups(id) ON DELETE CASCADE,
        user_id    INTEGER NOT NULL REFERENCES users(id)        ON DELETE CASCADE,
        joined_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (group_id, user_id)
      );
    `);

    // ── 11. NOTIFICATIONS ─────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id         SERIAL PRIMARY KEY,
        user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title      VARCHAR(200) NOT NULL,
        message    TEXT,
        type       VARCHAR(50)  DEFAULT 'info',
        is_read    BOOLEAN      NOT NULL DEFAULT false,
        link       TEXT,
        created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
      );
    `);

    // ── 12. CONTACT MESSAGES ──────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id         SERIAL PRIMARY KEY,
        name       VARCHAR(100) NOT NULL,
        email      VARCHAR(255) NOT NULL,
        subject    VARCHAR(255),
        message    TEXT         NOT NULL,
        is_read    BOOLEAN      NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
      );
    `);

    // ── 13. STRIPE PAYMENTS ───────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id                 SERIAL PRIMARY KEY,
        user_id            INTEGER      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        stripe_payment_id  VARCHAR(255) NOT NULL,
        amount             NUMERIC(10,2) NOT NULL,
        currency           VARCHAR(10)  DEFAULT 'usd',
        plan               VARCHAR(50),
        status             VARCHAR(50)  DEFAULT 'pending',
        created_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW()
      );
    `);

    // ── 14. AUTO-UPDATE trigger ───────────────────────────────────────────────
    await client.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
      $$ language 'plpgsql';
    `);
    for (const t of ['users','courses','forum_posts']) {
      await client.query(`
        DROP TRIGGER IF EXISTS set_updated_at ON ${t};
        CREATE TRIGGER set_updated_at BEFORE UPDATE ON ${t}
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
      `);
    }

    await client.query('COMMIT');
    console.log('✅ All tables created successfully!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
  } finally { client.release(); pool.end(); }
};

migrate();