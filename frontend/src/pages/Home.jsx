import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

const TESTIMONIALS = [
  { name: 'Sarah Martinez', country: 'Mexico',  role: 'Software Engineer', text: 'LinguaBridge transformed my English completely. Within 3 months I was confidently presenting to international clients. The structured courses made all the difference.', rating: 5, initial: 'S' },
  { name: 'Ahmed Hassan',   country: 'Egypt',   role: 'University Student', text: 'I passed my IELTS with a 7.5 band score thanks to the preparation course. The practice exercises are incredibly accurate and the feedback is top notch.', rating: 5, initial: 'A' },
  { name: 'Yuki Tanaka',    country: 'Japan',   role: 'Marketing Manager',  text: 'The Business English course opened doors I never thought possible. Got promoted after demonstrating my new communication skills.', rating: 5, initial: 'Y' },
  { name: 'Maria Silva',    country: 'Brazil',  role: 'Entrepreneur',       text: 'Best investment I ever made for my career. The conversational practice gave me the confidence to pitch my startup to English-speaking investors.', rating: 5, initial: 'M' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Create Your Account', desc: 'Sign up for free and set your English level and learning goals.', icon: '👤' },
  { step: '02', title: 'Choose Your Course',  desc: 'Browse 6 complete courses from beginner to advanced levels.', icon: '📚' },
  { step: '03', title: 'Learn & Practice',    desc: 'Follow structured lessons with interactive exercises and instant feedback.', icon: '🎯' },
  { step: '04', title: 'Earn Certificates',   desc: 'Complete courses and earn certificates to showcase your achievements.', icon: '🏆' },
]

const PRICING = [
  {
    name: 'Free', price: 0, period: 'forever', featured: false,
    features: ['Access to free courses', 'Community forums', 'Basic progress tracking', 'Mobile access'],
    cta: 'Get Started Free', link: '/register',
  },
  {
    name: 'Pro', price: 19, period: 'month', featured: true,
    features: ['All free features', 'Unlimited course access', 'Certificate of completion', 'Priority instructor support', 'Offline downloads', 'Advanced analytics'],
    cta: 'Start Pro Trial', link: '/register',
  },
  {
    name: 'Team', price: 49, period: 'month', featured: false,
    features: ['Everything in Pro', 'Up to 10 members', 'Team progress dashboard', 'Custom learning paths', 'Dedicated support', 'API access'],
    cta: 'Contact Sales', link: '/contact',
  },
]

// ── Animated stat counter ──────────────────────────────────────────────────
function AnimatedStat({ end, suffix = '', label }) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const inc   = end / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += inc
      if (cur >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(cur))
    }, 1800 / steps)
    return () => clearInterval(timer)
  }, [started, end])

  return (
    <div ref={ref} className="hero-stat-item">
      <h3>{count.toLocaleString()}{suffix}</h3>
      <p>{label}</p>
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [email,      setEmail]      = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    api.get('/courses?limit=4')
      .then(({ data }) => setFeaturedCourses(data.courses || []))
      .catch(() => {})
  }, [])

  const STATIC_COURSES = [
    { id:'beginner',     title:'Beginner English',     level:'A1–A2', price:'Free',  dur:'8 weeks',  icon:'🌱' },
    { id:'intermediate', title:'Intermediate English', level:'B1–B2', price:'$49',   dur:'10 weeks', icon:'📘' },
    { id:'ielts',        title:'IELTS Preparation',    level:'B2–C1', price:'$99',   dur:'8 weeks',  icon:'🎓' },
    { id:'business',     title:'Business English',     level:'B1+',   price:'$69',   dur:'6 weeks',  icon:'💼' },
  ]

  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-up">
              <h1 className="hero-title">
                Master English with <span className="highlight">Confidence</span> & Community
              </h1>
              <p className="hero-desc">
                Join over 10,000 learners from 50+ countries. Structured courses, live practice sessions, and a supportive community to take your English to the next level.
              </p>
              <div className="hero-actions">
                {/* ✅ Goes to /courses (CoursesHub) */}
                <button onClick={() => navigate('/courses')} className="btn btn-primary btn-xl">
                  Start Learning Free
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button onClick={() => navigate('/courses')} className="btn btn-secondary btn-xl">
                  Browse Courses
                </button>
              </div>
              <div className="hero-stats">
                <AnimatedStat end={10000} suffix="+" label="Active Learners" />
                <AnimatedStat end={500}   suffix="+" label="Expert Teachers" />
                <AnimatedStat end={50}    suffix="+" label="Countries" />
                <AnimatedStat end={95}    suffix="%" label="Success Rate" />
              </div>
            </div>

            {/* Hero visual card */}
            <div className="hero-visual animate-fade-up animate-delay-2">
              <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
                <div className="card" style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>S</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--gray-900)', fontSize: '0.9rem' }}>Sarah is learning</div>
                      <div style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>Advanced English · 68% complete</div>
                    </div>
                  </div>
                  <div className="progress-bar-wrap" style={{ marginBottom: 8 }}>
                    <div className="progress-bar-fill" style={{ width: '68%' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--gray-400)' }}>
                    <span>68% Complete</span><span>🔥 14 day streak</span>
                  </div>
                </div>

                <div className="card animate-delay-3 animate-fade-up" style={{ position: 'absolute', top: -18, right: -18, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--shadow-lg)' }}>
                  <span style={{ fontSize: '1.2rem' }}>🏆</span>
                  <div><div style={{ fontWeight: 700, fontSize: '0.78rem', color: 'var(--gray-900)' }}>Certificate Earned!</div><div style={{ fontSize: '0.68rem', color: 'var(--gray-400)' }}>Beginner English</div></div>
                </div>

                <div className="card animate-delay-4 animate-fade-up" style={{ position: 'absolute', bottom: -18, left: -18, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--shadow-lg)' }}>
                  <span style={{ fontSize: '1.2rem' }}>👥</span>
                  <div><div style={{ fontWeight: 700, fontSize: '0.78rem', color: 'var(--gray-900)' }}>+128 joined today</div><div style={{ fontSize: '0.68rem', color: 'var(--gray-400)' }}>Global Community</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Simple Process</span>
            <h2 className="section-title">How LinguaBridge Works</h2>
            <p className="section-desc">Get started in minutes and begin your English learning journey today.</p>
          </div>
          <div className="grid-4">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={i} className="step-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="step-number">{item.step}</div>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', fontWeight: 600, marginBottom: 8, color: 'var(--gray-900)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Courses ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Popular Courses</span>
            <h2 className="section-title">Start Learning Today</h2>
            <p className="section-desc">Expert-designed courses for every level, from complete beginners to advanced professionals.</p>
          </div>
          <div className="grid-auto">
            {STATIC_COURSES.map((course, i) => (
              <div key={course.id} className="course-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => navigate(`/learn/${course.id}`)}>
                <div className="course-card-thumb">
                  <span className="course-card-thumb-icon">{course.icon}</span>
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <span className="badge badge-primary">{course.level}</span>
                  </div>
                </div>
                <div className="course-card-body">
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-instructor">by LinguaBridge Team</p>
                  <div className="course-card-stats">
                    <div className="course-card-rating">⭐ 4.8</div>
                    <span>·</span>
                    <span>{course.dur}</span>
                  </div>
                  <div className="course-card-footer">
                    <span className={`course-card-price ${course.price === 'Free' ? 'free' : ''}`}>{course.price}</span>
                    <button className="btn btn-primary btn-sm" onClick={e => { e.stopPropagation(); navigate(`/learn/${course.id}`) }}>
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            {/* ✅ Goes to CoursesHub */}
            <button onClick={() => navigate('/courses')} className="btn btn-secondary btn-lg">
              View All 9 Courses →
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Success Stories</span>
            <h2 className="section-title">What Our Learners Say</h2>
            <p className="section-desc">Join thousands of satisfied learners who transformed their English.</p>
          </div>
          <div className="grid-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <span key={j} style={{ color: '#F59E0B' }}>★</span>)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role} · {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Pricing Plans</span>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-desc">Start free, upgrade when you're ready. No hidden fees, cancel anytime.</p>
          </div>
          <div className="grid-3" style={{ maxWidth: 960, margin: '0 auto' }}>
            {PRICING.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="pricing-popular">Most Popular</div>}
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: 1 }}>{plan.name}</div>
                <div className="pricing-price">${plan.price}<span>/{plan.period}</span></div>
                <ul className="pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j} className="pricing-feature">
                      <svg width="16" height="16" fill="none" stroke="var(--success)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate(plan.link)} className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} btn-full`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Newsletter ── */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: 580, margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', display: 'block', marginBottom: 10 }}>Stay Updated</span>
            <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: 'white', marginBottom: 14 }}>
              Get Weekly English Tips & Updates
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, lineHeight: 1.7 }}>
              Free English tips, course announcements, and exclusive discounts every week.
            </p>
            {subscribed ? (
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '18px 28px', color: 'white', fontWeight: 600 }}>
                🎉 You're subscribed! Check your email for a welcome message.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true) }}
                style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" required
                  style={{ flex: 1, minWidth: 200, padding: '13px 18px', borderRadius: 10, border: 'none', fontSize: '0.925rem', fontFamily: 'inherit', outline: 'none' }} />
                <button type="submit" className="btn btn-accent btn-lg" style={{ flexShrink: 0 }}>Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
