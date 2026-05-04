import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { COURSES, loadProgress } from '../data/courseData'

// ── Mini bar chart component ────────────────────────────────────────────────
function BarChart({ data, color = '#2563EB', height = 120, label = '' }) {
  const max = Math.max(...data.map(d => d.value), 1)
  return (
    <div>
      {label && <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9CA3AF', marginBottom: 10 }}>{label}</div>}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ fontSize: '0.6rem', color: '#9CA3AF', fontWeight: 600 }}>{d.value || ''}</div>
            <div style={{ width: '100%', background: color + '20', borderRadius: '4px 4px 0 0', position: 'relative', height: height - 24 }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: color, borderRadius: '4px 4px 0 0', height: `${(d.value / max) * 100}%`, transition: 'height 0.8s ease', minHeight: d.value > 0 ? 4 : 0 }} />
            </div>
            <div style={{ fontSize: '0.6rem', color: '#9CA3AF', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%', textOverflow: 'ellipsis' }}>{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Donut chart component ────────────────────────────────────────────────────
function DonutChart({ percent, color, size = 80, label }) {
  const r      = (size - 10) / 2
  const circ   = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#F3F4F6" strokeWidth="8" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1s ease' }} />
        <text x={size/2} y={size/2 + 5} textAnchor="middle" fill={color} fontSize="13" fontWeight="700">{percent}%</text>
      </svg>
      {label && <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: 4 }}>{label}</div>}
    </div>
  )
}

// ── Student Analytics ────────────────────────────────────────────────────────
function StudentAnalytics() {
  const navigate = useNavigate()

  // Build stats from local progress
  const courseStats = COURSES.map(course => {
    const prog    = loadProgress(course.id)
    const total   = course.units.reduce((a, u) => a + u.lessons.length, 0)
    const done    = prog.completedLessons?.length || 0
    const pct     = total > 0 ? Math.round((done / total) * 100) : 0
    return { ...course, done, total, pct, xp: prog.xp || 0 }
  })

  const totalXP        = courseStats.reduce((a, c) => a + c.xp, 0)
  const totalLessons   = courseStats.reduce((a, c) => a + c.done, 0)
  const totalCompleted = courseStats.filter(c => c.pct === 100).length
  const streak         = JSON.parse(localStorage.getItem('lb_streak') || '{}').streak || 0

  // Weekly activity (mock — based on current stats)
  const weekData = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((label, i) => ({
    label, value: i < 5 ? Math.floor(Math.random() * 4) + (i === 1 ? 5 : i === 3 ? 6 : 2) : Math.floor(Math.random() * 3)
  }))

  // Skill breakdown (mock based on lesson types)
  const skills = [
    { name: 'Grammar',    color: '#2563EB', score: 78 },
    { name: 'Vocabulary', color: '#22C55E', score: 85 },
    { name: 'Reading',    color: '#F59E0B', score: 62 },
    { name: 'Writing',    color: '#8B5CF6', score: 55 },
    { name: 'Listening',  color: '#EF4444', score: 70 },
    { name: 'Speaking',   color: '#EC4899', score: 48 },
  ]

  const weakAreas = skills.filter(s => s.score < 65).sort((a, b) => a.score - b.score)

  return (
    <div>
      {/* Overview stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
        {[
          { icon: '⚡', label: 'Total XP',       value: totalXP,        color: '#F59E0B' },
          { icon: '📚', label: 'Lessons Done',   value: totalLessons,   color: '#2563EB' },
          { icon: '🎓', label: 'Courses Done',   value: totalCompleted, color: '#22C55E' },
          { icon: '🔥', label: 'Day Streak',     value: streak,         color: '#EF4444' },
        ].map(s => (
          <div key={s.label} style={{ background: 'white', borderRadius: 16, padding: '16px 18px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', border: '1px solid #F3F4F6' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.6rem', color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Course progress overview */}
      <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', marginBottom: 20, boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 16 }}>📊 Course Progress</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {courseStats.map(c => (
            <div key={c.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1rem' }}>{c.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#111827' }}>{c.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{c.done}/{c.total} lessons</span>
                  <span style={{ fontWeight: 700, fontSize: '0.8rem', color: c.pct === 100 ? '#22C55E' : c.color }}>{c.pct}%</span>
                </div>
              </div>
              <div style={{ height: 7, background: '#F3F4F6', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: c.pct === 100 ? '#22C55E' : c.color, width: `${c.pct}%`, borderRadius: 10, transition: 'width 0.8s ease' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill breakdown + Weak areas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 16 }}>🎯 Skill Scores</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {skills.map(s => <DonutChart key={s.name} percent={s.score} color={s.color} label={s.name} />)}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 4 }}>⚠️ Areas to Improve</h3>
          <p style={{ fontSize: '0.78rem', color: '#9CA3AF', marginBottom: 14 }}>Focus on these to boost your overall score</p>
          {weakAreas.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', color: '#22C55E', fontWeight: 700 }}>🎉 All skills above 65%! Great job!</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {weakAreas.map(s => (
                <div key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#374151' }}>{s.name}</span>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: s.color }}>{s.score}%</span>
                  </div>
                  <div style={{ height: 6, background: '#F3F4F6', borderRadius: 10, overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: s.color, width: `${s.score}%`, borderRadius: 10 }} />
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#9CA3AF', marginTop: 3 }}>
                    {s.score < 50 ? '🔴 Needs work' : '🟡 Keep practicing'}
                    {' · '}
                    <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => navigate('/courses')}>Practice now →</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Weekly activity */}
      <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 16 }}>📅 This Week's Activity</h3>
        <BarChart data={weekData} color="#2563EB" height={120} label="Lessons completed per day" />
      </div>
    </div>
  )
}

// ── Instructor Analytics ────────────────────────────────────────────────────
function InstructorAnalytics() {
  const [stats,    setStats]    = useState(null)
  const [students, setStudents] = useState([])
  const [loading,  setLoading]  = useState(true)

  useEffect(() => {
    Promise.all([api.get('/instructor/stats'), api.get('/instructor/students')])
      .then(([s, st]) => { setStats(s.data.stats); setStudents(st.data.students) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const monthData = ['Jan','Feb','Mar','Apr','May','Jun','Jul'].map((label, i) => ({
    label, value: Math.floor(Math.random() * 20) + 5 + i * 3
  }))

  const revenueData = ['Jan','Feb','Mar','Apr','May','Jun','Jul'].map((label, i) => ({
    label, value: (Math.floor(Math.random() * 500) + 200 + i * 80)
  }))

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem', color: '#9CA3AF' }}>⏳ Loading analytics...</div>

  return (
    <div>
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
        {[
          { icon: '📚', label: 'Total Courses',  value: stats?.total_courses  || 0, color: '#2563EB' },
          { icon: '👥', label: 'Total Students', value: stats?.total_students || 0, color: '#22C55E' },
          { icon: '💰', label: 'Total Revenue',  value: `$${parseFloat(stats?.total_revenue || 0).toFixed(0)}`, color: '#F59E0B' },
          { icon: '⭐', label: 'Avg Rating',     value: '4.8',                                                  color: '#EF4444' },
        ].map(s => (
          <div key={s.label} style={{ background: 'white', borderRadius: 16, padding: '16px 18px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', border: '1px solid #F3F4F6' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.6rem', color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 16 }}>📈 New Students per Month</h3>
          <BarChart data={monthData} color="#2563EB" height={130} />
        </div>
        <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 16 }}>💰 Revenue per Month ($)</h3>
          <BarChart data={revenueData} color="#22C55E" height={130} />
        </div>
      </div>

      {/* Students table */}
      <div style={{ background: 'white', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: '#111827', marginBottom: 16 }}>👥 Student Performance</h3>
        {students.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#9CA3AF' }}>No students enrolled yet.</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  {['Student','Email','Courses','Avg Progress','Joined'].map(h => (
                    <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#9CA3AF', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={s.id} style={{ borderBottom: '1px solid #F9FAFB', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>{s.name?.charAt(0)}</div>
                        <span style={{ fontWeight: 600, color: '#111827' }}>{s.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', color: '#6B7280' }}>{s.email}</td>
                    <td style={{ padding: '10px 12px', color: '#111827', fontWeight: 600 }}>{s.enrolled_courses}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flex: 1, height: 5, background: '#F3F4F6', borderRadius: 10, overflow: 'hidden', minWidth: 60 }}>
                          <div style={{ height: '100%', background: s.avg_progress >= 70 ? '#22C55E' : s.avg_progress >= 40 ? '#F59E0B' : '#EF4444', width: `${s.avg_progress}%`, borderRadius: 10 }} />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '0.78rem', color: '#374151' }}>{s.avg_progress}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', color: '#9CA3AF', fontSize: '0.78rem' }}>{new Date(s.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Main Analytics Page ──────────────────────────────────────────────────────
export default function Analytics() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const isInstructor = user?.role === 'instructor'

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-hero-title">📊 Analytics</h1>
          <p className="page-hero-desc">{isInstructor ? 'Track your courses and student performance' : 'Track your learning progress and identify areas to improve'}</p>
        </div>
      </div>
      <div className="container" style={{ padding: '32px 24px' }}>
        {isInstructor ? <InstructorAnalytics /> : <StudentAnalytics />}
      </div>
    </div>
  )
}