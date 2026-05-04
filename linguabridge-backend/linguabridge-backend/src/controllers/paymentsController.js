const pool = require('../config/db');

const ensurePaymentTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id              SERIAL PRIMARY KEY,
      user_id         INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      plan            VARCHAR(20) NOT NULL DEFAULT 'free' CHECK (plan IN ('free','pro','team')),
      stripe_customer_id    TEXT,
      stripe_subscription_id TEXT,
      status          VARCHAR(20) DEFAULT 'active',
      current_period_end TIMESTAMPTZ,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS coupons (
      id          SERIAL PRIMARY KEY,
      code        VARCHAR(50) UNIQUE NOT NULL,
      discount    INTEGER NOT NULL CHECK (discount BETWEEN 1 AND 100),
      type        VARCHAR(10) DEFAULT 'percent',
      max_uses    INTEGER DEFAULT 100,
      used_count  INTEGER DEFAULT 0,
      expires_at  TIMESTAMPTZ,
      is_active   BOOLEAN DEFAULT true,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS payments (
      id              SERIAL PRIMARY KEY,
      user_id         INTEGER NOT NULL REFERENCES users(id),
      course_id       INTEGER REFERENCES courses(id),
      amount          NUMERIC(10,2) NOT NULL,
      currency        VARCHAR(3) DEFAULT 'USD',
      stripe_payment_id TEXT,
      coupon_code     VARCHAR(50),
      status          VARCHAR(20) DEFAULT 'completed',
      created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  // Seed demo coupons
  await pool.query(`
    INSERT INTO coupons (code, discount, max_uses) VALUES
      ('WELCOME20', 20, 1000),
      ('STUDENT50', 50, 500),
      ('IELTS30',   30, 200)
    ON CONFLICT (code) DO NOTHING
  `);
};

// ── GET /api/payments/plans ───────────────────────────────────────────────
const getPlans = async (req, res) => {
  res.json({
    plans: [
      { id: 'free',  name: 'Free',  price: 0,  period: 'forever', features: ['Access to free courses','Community forums','Basic progress tracking'] },
      { id: 'pro',   name: 'Pro',   price: 19, period: 'month',   features: ['All free features','Unlimited courses','Certificates','Priority support','Offline access','Advanced analytics'] },
      { id: 'team',  name: 'Team',  price: 49, period: 'month',   features: ['Everything in Pro','Up to 10 members','Team dashboard','Custom paths','Dedicated support'] },
    ],
  });
};

// ── GET /api/payments/my-subscription ────────────────────────────────────
const getMySubscription = async (req, res, next) => {
  try {
    await ensurePaymentTables();
    const { rows: [sub] } = await pool.query(
      'SELECT * FROM subscriptions WHERE user_id = $1', [req.user.id]
    );
    res.json({ subscription: sub || { plan: 'free', status: 'active' } });
  } catch (err) { next(err); }
};

// ── POST /api/payments/validate-coupon ───────────────────────────────────
const validateCoupon = async (req, res, next) => {
  try {
    await ensurePaymentTables();
    const { code } = req.body;
    if (!code) return res.status(400).json({ message: 'Coupon code required' });

    const { rows: [coupon] } = await pool.query(`
      SELECT * FROM coupons
      WHERE UPPER(code) = UPPER($1)
        AND is_active = true
        AND used_count < max_uses
        AND (expires_at IS NULL OR expires_at > NOW())
    `, [code]);

    if (!coupon) return res.status(404).json({ message: 'Invalid or expired coupon code' });

    res.json({ valid: true, discount: coupon.discount, type: coupon.type, code: coupon.code });
  } catch (err) { next(err); }
};

// ── POST /api/payments/subscribe ─────────────────────────────────────────
// In production: integrate with Stripe. This is a mock for demo purposes.
const subscribe = async (req, res, next) => {
  try {
    await ensurePaymentTables();
    const { plan, couponCode } = req.body;

    if (!['free','pro','team'].includes(plan)) {
      return res.status(400).json({ message: 'Invalid plan' });
    }

    const prices = { free: 0, pro: 19, team: 49 };
    let finalPrice = prices[plan];

    // Apply coupon
    if (couponCode && finalPrice > 0) {
      const { rows: [coupon] } = await pool.query(
        'SELECT * FROM coupons WHERE UPPER(code) = UPPER($1) AND is_active = true AND used_count < max_uses', [couponCode]
      );
      if (coupon) {
        finalPrice = Math.round(finalPrice * (1 - coupon.discount / 100) * 100) / 100;
        await pool.query('UPDATE coupons SET used_count = used_count + 1 WHERE id = $1', [coupon.id]);
      }
    }

    // Mock Stripe payment (in production: create Stripe PaymentIntent here)
    const mockStripeId = `pi_mock_${Date.now()}`;

    // Upsert subscription
    await pool.query(`
      INSERT INTO subscriptions (user_id, plan, stripe_subscription_id, current_period_end)
      VALUES ($1, $2, $3, NOW() + INTERVAL '1 month')
      ON CONFLICT (user_id) DO UPDATE SET
        plan = $2, stripe_subscription_id = $3,
        current_period_end = NOW() + INTERVAL '1 month',
        updated_at = NOW()
    `, [req.user.id, plan, mockStripeId]);

    // Log payment
    if (finalPrice > 0) {
      await pool.query(`
        INSERT INTO payments (user_id, amount, stripe_payment_id, coupon_code, status)
        VALUES ($1, $2, $3, $4, 'completed')
      `, [req.user.id, finalPrice, mockStripeId, couponCode || null]);
    }

    res.json({
      message: `Successfully subscribed to ${plan} plan!`,
      plan,
      amountCharged: finalPrice,
      // In production: return Stripe client_secret for frontend to confirm payment
    });
  } catch (err) { next(err); }
};

// ── POST /api/payments/cancel ─────────────────────────────────────────────
const cancelSubscription = async (req, res, next) => {
  try {
    await ensurePaymentTables();
    await pool.query(
      'UPDATE subscriptions SET plan = $1, status = $2 WHERE user_id = $3',
      ['free', 'cancelled', req.user.id]
    );
    res.json({ message: 'Subscription cancelled. You\'ve been moved to the free plan.' });
  } catch (err) { next(err); }
};

module.exports = { getPlans, getMySubscription, validateCoupon, subscribe, cancelSubscription };