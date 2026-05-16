import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { defaultDashboardPath } from '../auth/rbac'
import { useTheme } from './ThemeContext'

// ── Animated counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2000 }) {
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const inc = end / steps
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= end) { setVal(end); clearInterval(t) }
      else setVal(Math.floor(cur))
    }, duration / steps)
    return () => clearInterval(t)
  }, [started, end, duration])

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const COURSES = [
  { id: 'beginner',    icon: '🌱', title: 'Beginner English',          level: 'A1–A2',         price: 'Free', weeks: 8,  color: '#22C55E', students: 3200 },
  { id: 'elementary', icon: '🌿', title: 'Elementary English',        level: 'A2–B1',         price: '$29',  weeks: 8,  color: '#10B981', students: 2100 },
  { id: 'intermediate',icon:'📘', title: 'Intermediate English',      level: 'B1–B2',         price: '$49',  weeks: 10, color: '#3B82F6', students: 2800 },
  { id: 'advanced',   icon: '🔥', title: 'Advanced English',          level: 'C1–C2',         price: '$79',  weeks: 12, color: '#DC2626', students: 1900 },
  { id: 'academic',   icon: '🎓', title: 'Academic English',          level: 'B2–C1',         price: '$69',  weeks: 10, color: '#6366F1', students: 1400 },
  { id: 'american',   icon: '🇺🇸', title: 'American English',         level: 'B1–C1',         price: '$59',  weeks: 8,  color: '#EF4444', students: 1700 },
  { id: 'travel',     icon: '✈️', title: 'Travel English',            level: 'A2–B2',         price: '$39',  weeks: 6,  color: '#F59E0B', students: 1600 },
  { id: 'kids',       icon: '🎨', title: 'Kids English',              level: 'A1 (Ages 6–12)',price: '$19',  weeks: 8,  color: '#EC4899', students: 980  },
  { id: 'freelancer', icon: '💼', title: 'English for Freelancers',   level: 'B1–C1',         price: '$59',  weeks: 10, color: '#8B5CF6', students: 1250 },
  { id: 'toefl',      icon: '📝', title: 'TOEFL Preparation',         level: 'B2–C1',         price: '$79',  weeks: 12, color: '#0EA5E9', students: 2300 },
]

const FEATURES = [
  { icon: '🎯', title: 'Structured Learning Paths', desc: 'Follow expertly designed curricula that take you from zero to fluency step by step.', color: '#EFF6FF', accent: '#2563EB' },
  { icon: '⚡', title: 'Interactive Exercises', desc: 'Practice with real-time feedback through quizzes, fill-in-the-blanks, and speaking drills.', color: '#FEF3C7', accent: '#D97706' },
  { icon: '🏆', title: 'Earn Certificates', desc: 'Complete courses and receive official certificates to showcase on your CV and LinkedIn.', color: '#F0FDF4', accent: '#16A34A' },
  { icon: '📊', title: 'Track Your Progress', desc: 'Detailed analytics show your streaks, XP, skill scores, and weekly learning activity.', color: '#F5F3FF', accent: '#7C3AED' },
  { icon: '🌍', title: 'Global Community', desc: 'Join learners from 50+ countries in forums, study groups, and speaking practice events.', color: '#FFF1F2', accent: '#E11D48' },
  { icon: '📱', title: 'Learn Anywhere', desc: 'Access all your courses on any device. Your progress syncs seamlessly across platforms.', color: '#ECFEFF', accent: '#0891B2' },
]

const TESTIMONIALS = [
  { name: 'Abdallah Gamal',   country: '🇪🇬 Egypt',   role: 'University Student',  text: 'Passed my IELTS with a 7.5 band score! The preparation course is incredibly accurate. Best investment in my education.', rating: 5, init: 'A', color: '#2563EB' },
  { name: 'Mohammed Elsebahy',  country: '🇪🇬 Egypt',      role: 'Marketing Executive', text: 'LinguaBridge transformed my confidence. I went from struggling to present in English to leading international meetings.', rating: 5, init: 'M', color: '#7C3AED' },
  { name: 'Ahmed Mohammed',    country: '🇪🇬 Egypt',   role: 'Software Engineer',   text: 'The structured courses are perfect. I got promoted after demonstrating my new professional English communication skills.', rating: 5, init: 'A', color: '#EC4899' },
  { name: 'Abdelrahman Said',    country: '🇪🇬 Egypt',  role: 'Entrepreneur',        text: 'I pitched my startup to English-speaking investors thanks to the Business English course. Highly recommended!', rating: 5, init: 'A', color: '#F59E0B' },
]

const STEPS = [
  { n: '01', icon: '👤', title: 'Create Free Account', desc: 'Sign up in 30 seconds with your Gmail. No credit card required.' },
  { n: '02', icon: '🎯', title: 'Pick Your Level',     desc: 'Take a quick placement quiz and we\'ll recommend the perfect starting course.' },
  { n: '03', icon: '📚', title: 'Start Learning',      desc: 'Follow structured lessons with interactive exercises and instant AI feedback.' },
  { n: '04', icon: '🏆', title: 'Get Certified',       desc: 'Complete courses, earn XP, climb the leaderboard, and receive official certificates.' },
]

export default function Home() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { dark } = useTheme()
  const goIfAuth = (dest) => user ? navigate(dest) : navigate('/login')
  const [activeCourse, setActiveCourse] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  // ── Colour tokens that flip with dark mode ──────────────────────────────
  const bg          = dark ? '#111827' : 'white'
  const bgAlt       = dark ? '#1F2937' : '#F9FAFB'
  const cardBg      = dark ? '#1F2937' : 'white'
  const border      = dark ? '#374151' : '#F3F4F6'
  const text        = dark ? '#F9FAFB' : '#111827'
  const textMuted   = dark ? '#9CA3AF' : '#6B7280'
  const textFaint   = dark ? '#6B7280' : '#9CA3AF'
  const textBody    = dark ? '#D1D5DB' : '#374151'
  const stepBgs     = dark
    ? ['#1E3A5F', '#2D1B69', '#4A0D1F', '#3D2A00']
    : ['#EFF6FF', '#F5F3FF', '#FFF1F2', '#FEF3C7']
  const inputBorder = dark ? '#374151' : '#E5E7EB'
  const inputBg     = dark ? '#1F2937' : 'white'
  const badgeBg     = dark ? '#1F2937' : 'white'
  const waveFill    = dark ? '#111827' : 'white'

  // Badge backgrounds for section labels
  const blueBadgeBg   = dark ? '#1E3A5F' : '#EFF6FF'
  const yellowBadgeBg = dark ? '#3D2A00' : '#FEF3C7'
  const greenBadgeBg  = dark ? '#052e16' : '#F0FDF4'
  const redBadgeBg    = dark ? '#4A0D1F' : '#FFF1F2'

  // Auto-rotate featured course
  useEffect(() => {
    const t = setInterval(() => setActiveCourse(i => (i + 1) % COURSES.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #1D4ED8 100%)',
        minHeight: '92vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: 80,
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>
          <div className="home-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

            {/* Left — copy */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80', display: 'inline-block', boxShadow: '0 0 8px #4ADE80' }} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: 0.5 }}>10,000+ active learners worldwide</span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: 24,
              }}>
                Speak English with<br />
                <span style={{ background: 'linear-gradient(90deg, #60A5FA, #A78BFA, #F472B6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Real Confidence
                </span>
              </h1>

              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: 36, maxWidth: 500 }}>
                Structured courses, interactive lessons, and a global community — everything you need to master English and open new doors in your career and life.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                <button onClick={() => goIfAuth(defaultDashboardPath(user?.role))}
                  style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white', border: 'none', borderRadius: 12, padding: '15px 32px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 30px rgba(37,99,235,0.4)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  Start Learning Free
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button onClick={() => goIfAuth('/courses')}
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '15px 28px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}>
                  Browse Courses
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  { end: 10000, suf: '+', label: 'Active Learners' },
                  { end: 6,     suf: '',  label: 'Expert Courses'  },
                  { end: 95,    suf: '%', label: 'Success Rate'    },
                  { end: 50,    suf: '+', label: 'Countries'       },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>
                      <Counter end={s.end} suffix={s.suf} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating UI mockup */}
            <div className="home-hero-right" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Main card */}
              <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24, padding: 28, width: '100%', maxWidth: 400 }}>
                {/* Course switcher */}
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>All Courses</div>
                {/* Scrollable list — all 10 courses */}
                <div style={{ maxHeight: 340, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {COURSES.map((c, i) => (
                    <div key={c.id} onClick={() => setActiveCourse(i)}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 14px', borderRadius: 12, marginBottom: 4, cursor: 'pointer', background: activeCourse === i ? 'rgba(255,255,255,0.1)' : 'transparent', border: activeCourse === i ? `1px solid ${c.color}40` : '1px solid transparent', transition: 'all 0.3s' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 9, background: `${c.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{c.icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.title}</div>
                        <div style={{ fontSize: '0.67rem', color: 'rgba(255,255,255,0.45)' }}>{c.level} · {c.students.toLocaleString()} students</div>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '0.78rem', color: c.price === 'Free' ? '#4ADE80' : '#60A5FA', flexShrink: 0 }}>{c.price}</div>
                    </div>
                  ))}
                </div>
                <button onClick={() => goIfAuth('/courses')}
                  style={{ width: '100%', marginTop: 10, padding: '11px', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem' }}>
                  View All Courses →
                </button>
              </div>

              {/* Floating badge — top right */}
              <div style={{ position: 'absolute', top: -20, right: -16, background: badgeBg, borderRadius: 14, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 30px rgba(0,0,0,0.25)', whiteSpace: 'nowrap' }}>
                <span style={{ fontSize: '1.2rem' }}>🏆</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.75rem', color: text }}>Certificate Earned!</div>
                  <div style={{ fontSize: '0.65rem', color: textFaint }}>Ahmed · IELTS Prep</div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div style={{ position: 'absolute', bottom: -20, left: -16, background: badgeBg, borderRadius: 14, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 30px rgba(0,0,0,0.25)', whiteSpace: 'nowrap' }}>
                <div style={{ display: 'flex' }}>
                  {['🇪🇬','🇧🇷','🇯🇵','🇲🇽'].map((f,i) => <span key={i} style={{ fontSize: '1rem', marginLeft: i > 0 ? -4 : 0 }}>{f}</span>)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.75rem', color: text }}>Global Community</div>
                  <div style={{ fontSize: '0.65rem', color: textFaint }}>50+ countries learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" fill={waveFill} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section style={{ padding: '96px 0', background: bgAlt }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ display: 'inline-block', background: blueBadgeBg, color: '#2563EB', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 16 }}>Why LinguaBridge</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: text, marginBottom: 16 }}>
              Everything You Need to Succeed
            </h2>
            <p style={{ color: textMuted, fontSize: '1.05rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              We've built the complete English learning toolkit — from beginner basics to professional fluency.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{ background: cardBg, borderRadius: 20, padding: 28, border: `1px solid ${hoveredFeature === i ? f.accent + '40' : border}`, boxShadow: hoveredFeature === i ? `0 12px 40px ${f.accent}18` : '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.3s', cursor: 'default', transform: hoveredFeature === i ? 'translateY(-4px)' : 'none' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: dark ? f.accent + '25' : f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 18 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: text, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: textMuted, fontSize: '0.875rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ COURSES ══════════════════════ */}
      <section style={{ padding: '96px 0', background: bg }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', background: yellowBadgeBg, color: '#D97706', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 16 }}>Our Courses</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: text, marginBottom: 16 }}>
              Find Your Perfect Course
            </h2>
            <p style={{ color: textMuted, fontSize: '1.05rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Six expert-designed courses covering every level and goal — from conversational basics to IELTS mastery.
            </p>
          </div>

          <div className="home-courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {COURSES.slice(0, 3).map((c) => (
              <div key={c.id}
                onClick={() => goIfAuth(`/course/${c.id}`)}
                style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${border}`, cursor: 'pointer', transition: 'all 0.3s', background: cardBg, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 48px ${c.color}20`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = c.color + '40' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = border }}>
                {/* Thumbnail */}
                <div style={{ height: 160, background: `linear-gradient(135deg, ${c.color}22, ${c.color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', position: 'relative' }}>
                  {c.icon}
                  <div style={{ position: 'absolute', top: 14, left: 14, background: cardBg, borderRadius: 8, padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700, color: c.color }}>
                    {c.level}
                  </div>
                  {c.price === 'Free' && (
                    <div style={{ position: 'absolute', top: 14, right: 14, background: '#DCFCE7', borderRadius: 8, padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700, color: '#16A34A' }}>
                      FREE
                    </div>
                  )}
                </div>
                {/* Body */}
                <div style={{ padding: '20px 22px 22px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: text, marginBottom: 8 }}>{c.title}</h3>
                  <div style={{ display: 'flex', gap: 16, fontSize: '0.78rem', color: textFaint, marginBottom: 16 }}>
                    <span>⏱ {c.weeks} weeks</span>
                    <span>👥 {c.students.toLocaleString()} students</span>
                    <span>⭐ 4.8</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: c.price === 'Free' ? '#16A34A' : text }}>
                      {c.price}
                    </span>
                    <button
                      style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)`, color: 'white', border: 'none', borderRadius: 10, padding: '9px 20px', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'inherit' }}
                      onClick={e => { e.stopPropagation(); goIfAuth(`/course/${c.id}`) }}>
                      Start Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button onClick={() => goIfAuth('/courses')}
              style={{ background: bg, color: '#2563EB', border: '2px solid #2563EB', borderRadius: 12, padding: '14px 36px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = bg; e.currentTarget.style.color = '#2563EB' }}>
              Explore All Courses →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section style={{ padding: '96px 0', background: dark ? '#111827' : 'linear-gradient(180deg, #F9FAFB 0%, #EFF6FF 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ display: 'inline-block', background: greenBadgeBg, color: '#16A34A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 16 }}>Simple Process</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: text, marginBottom: 16 }}>
              Start in 4 Easy Steps
            </h2>
            <p style={{ color: textMuted, fontSize: '1.05rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              From zero to fluent — we've made the path clear, structured, and achievable for everyone.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 0, position: 'relative' }}>
            {/* Connector line */}
            <div style={{ position: 'absolute', top: 48, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg,#2563EB,#7C3AED,#EC4899,#F59E0B)', borderRadius: 2, zIndex: 0, display: 'block' }} />

            {STEPS.map((s, i) => {
              const colors = ['#2563EB','#7C3AED','#EC4899','#F59E0B']
              return (
                <div key={i} style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: stepBgs[i], border: `3px solid ${colors[i]}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '2rem', boxShadow: `0 8px 24px ${colors[i]}30` }}>
                    {s.icon}
                  </div>
                  <div style={{ display: 'inline-block', background: colors[i], color: 'white', fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, padding: '3px 10px', borderRadius: 100, marginBottom: 12, letterSpacing: 1 }}>STEP {s.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: text, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.855rem', color: textMuted, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <button onClick={() => goIfAuth(defaultDashboardPath(user?.role))}
              style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white', border: 'none', borderRadius: 12, padding: '15px 40px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 30px rgba(37,99,235,0.3)' }}>
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS BAND ══════════════════════ */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(135deg,#1E3A5F,#2563EB,#7C3AED)' }}>
        <div className="container">
          <div className="home-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {[
              { end: 10000, suf: '+', label: 'Learners Enrolled',    icon: '👥' },
              { end: 6,     suf: '',  label: 'Expert Courses',       icon: '📚' },
              { end: 50,    suf: '+', label: 'Countries Represented',icon: '🌍' },
              { end: 4800,  suf: '+', label: 'Certificates Issued',  icon: '🏆' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '20px 10px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800, color: 'white', lineHeight: 1 }}>
                  <Counter end={s.end} suffix={s.suf} />
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section style={{ padding: '96px 0', background: bg }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', background: redBadgeBg, color: '#E11D48', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 16 }}>Success Stories</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, color: text, marginBottom: 16 }}>
              Real Results, Real People
            </h2>
            <p style={{ color: textMuted, fontSize: '1.05rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Join thousands of learners who transformed their English — and their lives — with LinguaBridge.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: bgAlt, borderRadius: 20, padding: 28, border: `1px solid ${border}`, position: 'relative', overflow: 'hidden' }}>
                {/* Quote mark */}
                <div style={{ position: 'absolute', top: 14, right: 20, fontFamily: 'Georgia, serif', fontSize: '5rem', color: t.color + '18', lineHeight: 1, pointerEvents: 'none', fontWeight: 700 }}>"</div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} style={{ color: '#F59E0B', fontSize: '1rem' }}>★</span>)}
                </div>
                <p style={{ color: textBody, fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 22, position: 'relative', zIndex: 1 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg,${t.color},${t.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>{t.init}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: text, fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: textFaint }}>{t.role} · {t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section style={{ padding: '80px 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(124,58,237,0.2) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🚀</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: 'white', marginBottom: 18, lineHeight: 1.2 }}>
              Ready to Start Your<br />English Journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', marginBottom: 40, lineHeight: 1.7 }}>
              Join 10,000+ learners today. Your first course is completely free — no credit card required.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => goIfAuth(defaultDashboardPath(user?.role))}
                style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white', border: 'none', borderRadius: 12, padding: '16px 40px', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 30px rgba(37,99,235,0.4)' }}>
                Get Started — It's Free
              </button>
              <button onClick={() => goIfAuth('/courses')}
                style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '16px 32px', fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ NEWSLETTER ══════════════════════ */}
      <section style={{ padding: '64px 0', background: bgAlt, borderTop: `1px solid ${border}` }}>
        <div className="container">
          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: text, marginBottom: 10 }}>
              📬 Get Weekly English Tips
            </h3>
            <p style={{ color: textMuted, fontSize: '0.9rem', marginBottom: 24, lineHeight: 1.6 }}>
              Free tips, course news, and exclusive offers — straight to your inbox every week.
            </p>
            {subscribed ? (
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '16px 24px', color: '#16A34A', fontWeight: 600, fontSize: '0.9rem' }}>
                🎉 You're subscribed! Welcome to the LinguaBridge community.
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true) }}
                style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@gmail.com" required
                  style={{ flex: 1, minWidth: 200, padding: '13px 18px', borderRadius: 10, border: `1.5px solid ${inputBorder}`, background: inputBg, color: text, fontSize: '0.9rem', fontFamily: 'inherit', outline: 'none' }} />
                <button type="submit"
                  style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '13px 24px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', flexShrink: 0 }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
