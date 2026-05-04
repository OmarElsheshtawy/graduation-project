import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const PLANS = [
  {
    id: 'free', name: 'Free', price: 0, period: 'forever', color: '#6B7280',
    features: [
      { text: 'Access to free courses',     ok: true  },
      { text: 'Community forums',           ok: true  },
      { text: 'Basic progress tracking',    ok: true  },
      { text: 'Leaderboard access',         ok: true  },
      { text: 'Chatbot assistant',          ok: true  },
      { text: 'All paid courses',           ok: false },
      { text: 'Certificates',               ok: false },
      { text: 'Priority support',           ok: false },
      { text: 'Offline downloads',          ok: false },
    ],
    cta: 'Current Plan',
  },
  {
    id: 'pro', name: 'Pro', price: 19, period: 'month', color: '#2563EB', popular: true,
    features: [
      { text: 'Everything in Free',         ok: true  },
      { text: 'All 6 courses unlocked',     ok: true  },
      { text: 'Certificate of completion',  ok: true  },
      { text: 'Priority instructor support',ok: true  },
      { text: 'Offline downloads',          ok: true  },
      { text: 'Advanced analytics',         ok: true  },
      { text: 'Ad-free experience',         ok: true  },
      { text: 'Team features',              ok: false },
      { text: 'API access',                 ok: false },
    ],
    cta: 'Start Pro — $19/mo',
  },
  {
    id: 'team', name: 'Team', price: 49, period: 'month', color: '#7C3AED',
    features: [
      { text: 'Everything in Pro',          ok: true  },
      { text: 'Up to 10 team members',      ok: true  },
      { text: 'Team progress dashboard',    ok: true  },
      { text: 'Custom learning paths',      ok: true  },
      { text: 'Dedicated account manager',  ok: true  },
      { text: 'API access',                 ok: true  },
      { text: 'White-label option',         ok: true  },
      { text: 'SLA support',                ok: true  },
      { text: 'Custom invoicing',           ok: true  },
    ],
    cta: 'Start Team — $49/mo',
  },
]

const FAQS = [
  { q: 'Can I cancel anytime?',                   a: 'Yes! Cancel anytime from your account settings. No contracts, no cancellation fees.' },
  { q: 'Is there a free trial?',                  a: 'Yes, all paid plans come with a 7-day free trial. No credit card required to start.' },
  { q: 'What payment methods do you accept?',     a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex) and PayPal.' },
  { q: 'Do certificates expire?',                 a: 'No, your certificates are valid for life once earned.' },
  { q: 'Can I switch plans?',                     a: 'Yes, you can upgrade or downgrade at any time. Changes take effect on the next billing date.' },
  { q: 'Is there a student discount?',            a: 'Yes! Use coupon code STUDENT for 20% off. Contact us for more student options.' },
]

export default function Pricing() {
  const navigate  = useNavigate()
  const [billing, setBilling]       = useState('monthly') // monthly | yearly
  const [coupon,  setCoupon]        = useState('')
  const [couponResult, setCouponResult] = useState(null)
  const [checkingCoupon, setCheckingCoupon] = useState(false)
  const [loading, setLoading]       = useState(null)
  const [openFaq, setOpenFaq]       = useState(null)
  const [toast,   setToast]         = useState(null)

  const user      = JSON.parse(localStorage.getItem('user') || 'null')
  const isLoggedIn = !!localStorage.getItem('token')

  const yearlyDiscount = 0.2 // 20% off yearly
  const getPrice = (plan) => {
    if (plan.price === 0) return 0
    let price = billing === 'yearly' ? plan.price * (1 - yearlyDiscount) : plan.price
    if (couponResult?.type === 'percent') price = price * (1 - couponResult.discount / 100)
    return Math.round(price)
  }

  const handleCheckout = async (planId) => {
    if (!isLoggedIn) { navigate('/'); return }
    if (planId === 'free') return

    setLoading(planId)
    try {
      const { data } = await api.post('/payments/create-checkout', { plan: planId })
      if (data.url) window.location.href = data.url
    } catch (err) {
      showToast(err.response?.data?.message || 'Checkout failed. Please try again.', true)
    } finally { setLoading(null) }
  }

  const handleApplyCoupon = async () => {
    if (!coupon.trim()) return
    setCheckingCoupon(true)
    try {
      const { data } = await api.post('/payments/apply-coupon', { code: coupon })
      setCouponResult(data)
      showToast(`✅ Coupon applied: ${data.desc}`)
    } catch {
      setCouponResult(null)
      showToast('❌ Invalid coupon code', true)
    } finally { setCheckingCoupon(false) }
  }

  const showToast = (msg, isError = false) => {
    setToast({ msg, isError })
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {toast && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 20px', borderRadius: 12, fontWeight: 700, fontSize: '0.875rem', background: toast.isError ? '#991B1B' : '#065F46', color: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          {toast.msg}
        </div>
      )}

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#1E3A5F,#2563EB)', padding: '60px 0 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 30, padding: '6px 16px', marginBottom: 16, fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
            💳 Simple, transparent pricing
          </div>
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 700, color: 'white', marginBottom: 12 }}>
            Invest in Your English Journey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 28px' }}>
            Start free, upgrade when you're ready. No hidden fees. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: 4, gap: 2 }}>
            {['monthly', 'yearly'].map(b => (
              <button key={b} onClick={() => setBilling(b)}
                style={{ padding: '8px 20px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit', background: billing === b ? 'white' : 'transparent', color: billing === b ? '#1D4ED8' : 'rgba(255,255,255,0.8)', transition: 'all 0.2s' }}>
                {b.charAt(0).toUpperCase() + b.slice(1)}
                {b === 'yearly' && <span style={{ background: '#22C55E', color: 'white', fontSize: '0.6rem', padding: '1px 5px', borderRadius: 4, marginLeft: 5, fontWeight: 800 }}>-20%</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '0 24px', marginTop: -30 }}>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 40, maxWidth: 1000, margin: '0 auto 40px' }}>
          {PLANS.map(plan => (
            <div key={plan.id} style={{ background: 'white', borderRadius: 24, border: `2px solid ${plan.popular ? plan.color : '#F3F4F6'}`, boxShadow: plan.popular ? `0 8px 32px ${plan.color}25` : '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden', position: 'relative', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>

              {plan.popular && (
                <div style={{ background: plan.color, color: 'white', textAlign: 'center', padding: '6px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>
                  ⭐ Most Popular
                </div>
              )}

              <div style={{ padding: '24px 24px 20px' }}>
                {/* Plan name & price */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, fontSize: '1.1rem', color: '#111827' }}>{plan.name}</span>
                    {plan.id === 'pro' && <span style={{ background: '#DBEAFE', color: '#1D4ED8', fontSize: '0.65rem', fontWeight: 800, padding: '2px 7px', borderRadius: 6 }}>POPULAR</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '2.5rem', fontWeight: 800, color: plan.id === 'free' ? '#22C55E' : plan.color, lineHeight: 1 }}>
                      ${getPrice(plan)}
                    </span>
                    {plan.price > 0 && <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>/{plan.period}</span>}
                  </div>
                  {billing === 'yearly' && plan.price > 0 && (
                    <div style={{ fontSize: '0.72rem', color: '#22C55E', fontWeight: 600, marginTop: 3 }}>
                      Save ${Math.round(plan.price * 12 * yearlyDiscount)}/year
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.84rem', color: f.ok ? '#374151' : '#C4B5FD', opacity: f.ok ? 1 : 0.5 }}>
                      <svg width="16" height="16" fill="none" stroke={f.ok ? '#22C55E' : '#D1D5DB'} strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                        {f.ok ? <polyline points="20 6 9 17 4 12"/> : <line x1="18" y1="6" x2="6" y2="18"/>}
                      </svg>
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button onClick={() => handleCheckout(plan.id)}
                  disabled={loading === plan.id || plan.id === 'free'}
                  style={{ width: '100%', padding: '13px', borderRadius: 12, border: plan.id === 'free' ? `2px solid #E5E7EB` : 'none', background: plan.id === 'free' ? 'white' : plan.color, color: plan.id === 'free' ? '#6B7280' : 'white', fontWeight: 700, fontSize: '0.9rem', cursor: plan.id === 'free' ? 'default' : 'pointer', fontFamily: 'inherit', boxShadow: plan.id !== 'free' ? `0 4px 14px ${plan.color}40` : 'none', opacity: loading === plan.id ? 0.7 : 1, transition: 'all 0.2s' }}>
                  {loading === plan.id ? '⏳ Redirecting...' : plan.id === 'free' ? '✓ Free Forever' : plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon code */}
        <div style={{ background: 'white', borderRadius: 20, padding: '24px', maxWidth: 480, margin: '0 auto 40px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 6 }}>🎟️ Have a Coupon Code?</h3>
          <p style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: 14 }}>Try: LEARN50 · WELCOME · STUDENT</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <input value={coupon} onChange={e => setCoupon(e.target.value.toUpperCase())}
              placeholder="Enter coupon code"
              style={{ flex: 1, padding: '10px 14px', border: `1.5px solid ${couponResult ? '#22C55E' : '#E5E7EB'}`, borderRadius: 10, fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none', textTransform: 'uppercase', letterSpacing: 1 }} />
            <button onClick={handleApplyCoupon} disabled={checkingCoupon || !coupon.trim()}
              style={{ padding: '10px 18px', background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', opacity: checkingCoupon ? 0.7 : 1 }}>
              {checkingCoupon ? '...' : 'Apply'}
            </button>
          </div>
          {couponResult && (
            <div style={{ marginTop: 10, padding: '8px 14px', background: '#DCFCE7', borderRadius: 8, fontSize: '0.8rem', color: '#166534', fontWeight: 600 }}>
              ✅ {couponResult.desc} — {couponResult.discount}% off applied!
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', marginBottom: 48 }}>
          {[['🔒','Secure Payments','SSL encrypted'],['↩️','7-Day Refund','No questions asked'],['❌','Cancel Anytime','No contracts'],['🌍','10,000+ Learners','Trust us']].map(([icon,title,desc]) => (
            <div key={title} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#111827' }}>{title}</div>
              <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 680, margin: '0 auto 60px' }}>
          <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.4rem', color: '#111827', textAlign: 'center', marginBottom: 24 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 14, overflow: 'hidden', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.9rem', color: '#111827', textAlign: 'left' }}>
                  {faq.q}
                  <span style={{ fontSize: '1.1rem', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: '#9CA3AF', flexShrink: 0, marginLeft: 8 }}>▾</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 18px 14px', fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.7, borderTop: '1px solid #F9FAFB' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}