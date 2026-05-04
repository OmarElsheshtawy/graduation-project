/**
 * Payments Routes — Stripe Integration
 * POST /api/payments/create-checkout  → create Stripe checkout session
 * POST /api/payments/webhook          → handle Stripe webhooks
 * GET  /api/payments/my-subscription  → get user subscription
 * POST /api/payments/cancel           → cancel subscription
 */
const router = require('express').Router();
const pool   = require('../config/db');
const { protect } = require('../middleware/auth');

// In production install: npm install stripe
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const PLANS = {
  pro:  { name: 'Pro',  price: 1900, priceId: process.env.STRIPE_PRO_PRICE_ID  || 'price_pro'  },
  team: { name: 'Team', price: 4900, priceId: process.env.STRIPE_TEAM_PRICE_ID || 'price_team' },
};

// ── Create checkout session ───────────────────────────────────────────────
router.post('/create-checkout', protect, async (req, res, next) => {
  try {
    const { plan } = req.body;
    if (!PLANS[plan]) return res.status(400).json({ message: 'Invalid plan' });

    // ── PRODUCTION (uncomment when Stripe is installed) ──────────────────
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   mode: 'subscription',
    //   customer_email: req.user.email,
    //   line_items: [{ price: PLANS[plan].priceId, quantity: 1 }],
    //   success_url: `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url:  `${process.env.CLIENT_URL}/pricing`,
    //   metadata: { userId: req.user.id, plan },
    // });
    // return res.json({ url: session.url });

    // ── DEMO MODE (no Stripe key needed) ─────────────────────────────────
    const demoUrl = `${process.env.CLIENT_URL || 'http://localhost:5173'}/payment/success?demo=true&plan=${plan}`;
    res.json({ url: demoUrl, demo: true });

  } catch (err) { next(err); }
});

// ── Webhook (Stripe calls this) ───────────────────────────────────────────
router.post('/webhook', async (req, res) => {
  // In production verify webhook signature:
  // const sig   = req.headers['stripe-signature'];
  // const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

  const event = req.body;
  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId  = session.metadata?.userId;
      const plan    = session.metadata?.plan;
      if (userId && plan) {
        await pool.query(
          `UPDATE users SET subscription_plan = $1, subscription_status = 'active',
           subscription_start = NOW(), stripe_customer_id = $2 WHERE id = $3`,
          [plan, session.customer, userId]
        );
      }
    }
    if (event.type === 'customer.subscription.deleted') {
      const customerId = event.data.object.customer;
      await pool.query(
        `UPDATE users SET subscription_plan = 'free', subscription_status = 'cancelled' WHERE stripe_customer_id = $1`,
        [customerId]
      );
    }
    res.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(400).json({ error: err.message });
  }
});

// ── Get subscription ──────────────────────────────────────────────────────
router.get('/my-subscription', protect, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT subscription_plan, subscription_status, subscription_start FROM users WHERE id = $1',
      [req.user.id]
    );
    res.json({ subscription: rows[0] || { subscription_plan: 'free', subscription_status: 'active' } });
  } catch (err) { next(err); }
});

// ── Cancel subscription ────────────────────────────────────────────────────
router.post('/cancel', protect, async (req, res, next) => {
  try {
    // In production: await stripe.subscriptions.del(subscriptionId);
    await pool.query(
      `UPDATE users SET subscription_plan = 'free', subscription_status = 'cancelled' WHERE id = $1`,
      [req.user.id]
    );
    res.json({ message: 'Subscription cancelled successfully' });
  } catch (err) { next(err); }
});

// ── Apply coupon ──────────────────────────────────────────────────────────
router.post('/apply-coupon', protect, async (req, res, next) => {
  try {
    const { code } = req.body;
    const COUPONS  = {
      'LEARN50':  { discount: 50, type: 'percent', desc: '50% off first month' },
      'WELCOME':  { discount: 30, type: 'percent', desc: '30% off'             },
      'STUDENT':  { discount: 20, type: 'percent', desc: '20% student discount' },
    };
    const coupon = COUPONS[code?.toUpperCase()];
    if (!coupon) return res.status(404).json({ message: 'Invalid coupon code' });
    res.json({ valid: true, ...coupon });
  } catch (err) { next(err); }
});

module.exports = router;