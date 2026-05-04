import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { COURSE_CATALOG } from '../data/courseContent'

const LEVEL_COLORS = {
  'A1-A2':        { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0' },
  'A2-B1':        { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  'B1-B2':        { bg: '#F5F3FF', text: '#5B21B6', border: '#DDD6FE' },
  'C1-C2':        { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA' },
  'Intermediate+':{ bg: '#FFFBEB', text: '#92400E', border: '#FDE68A' },
  'All Levels':   { bg: '#FDF2F8', text: '#9D174D', border: '#FBCFE8' },
}

export default function LearnCourses() {
  const navigate  = useNavigate()
  const [progress, setProgress] = useState({})

  useEffect(() => {
    // Load saved progress from localStorage
    const saved = {}
    COURSE_CATALOG.forEach(c => {
      const p = localStorage.getItem(`course_progress_${c.id}`)
      if (p) saved[c.id] = JSON.parse(p)
    })
    setProgress(saved)
  }, [])

  const getCourseProgress = (courseId) => {
    const p = progress[courseId]
    if (!p) return { completed: 0, total: COURSE_CATALOG.find(c => c.id === courseId)?.totalLessons || 12, percent: 0 }
    const total = COURSE_CATALOG.find(c => c.id === courseId)?.totalLessons || 12
    const completed = Object.keys(p).length
    return { completed, total, percent: Math.round((completed / total) * 100) }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>📚</div>
            <h1 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: 'white', marginBottom: 12 }}>
              Learn English — Real Courses
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              Structured lessons, interactive exercises, and real progress tracking — like Duolingo, built for you.
            </p>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 32, flexWrap: 'wrap' }}>
            {[['📖', '6', 'Courses'], ['📝', '24', 'Units'], ['🎯', '72+', 'Lessons'], ['✅', '400+', 'Exercises']].map(([icon, val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{icon}</div>
                <div style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'white' }}>{val}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container" style={{ padding: '48px 24px' }}>
        <h2 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.4rem', fontWeight: 700, marginBottom: 28, color: '#1F2937' }}>
          Choose Your Course
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {COURSE_CATALOG.map(course => {
            const prog  = getCourseProgress(course.id)
            const lc    = LEVEL_COLORS[course.level] || LEVEL_COLORS['All Levels']
            const started = prog.completed > 0
            return (
              <div key={course.id}
                onClick={() => navigate(`/learn/${course.id}`)}
                style={{
                  background: 'white', borderRadius: 16, overflow: 'hidden',
                  border: '1px solid #E5E7EB', cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)' }}
              >
                {/* Top banner */}
                <div style={{ background: course.bgLight, padding: '24px 24px 16px', position: 'relative', borderBottom: `3px solid ${course.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '2.5rem' }}>{course.icon}</div>
                    <span style={{ background: lc.bg, color: lc.text, border: `1px solid ${lc.border}`, padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 700 }}>
                      {course.level}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.15rem', fontWeight: 700, color: '#1F2937', margin: '12px 0 4px' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#6B7280', margin: 0 }}>{course.subtitle}</p>
                </div>

                {/* Body */}
                <div style={{ padding: '16px 24px 20px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6, marginBottom: 16 }}>
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div style={{ display: 'flex', gap: 16, marginBottom: 16, fontSize: '0.78rem', color: '#9CA3AF' }}>
                    <span>📝 {course.totalLessons} lessons</span>
                    <span>⭐ {course.xpReward} XP</span>
                    <span>🎯 4 units</span>
                  </div>

                  {/* Progress */}
                  {started ? (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6B7280', marginBottom: 5 }}>
                        <span>{prog.completed}/{prog.total} lessons</span>
                        <span style={{ fontWeight: 700, color: course.color }}>{prog.percent}%</span>
                      </div>
                      <div style={{ height: 6, background: '#F3F4F6', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${prog.percent}%`, background: course.color, borderRadius: 99, transition: 'width 0.6s ease' }} />
                      </div>
                    </div>
                  ) : null}

                  {/* CTA Button */}
                  <button style={{
                    width: '100%', padding: '10px 0',
                    background: started ? course.color : 'white',
                    color: started ? 'white' : course.color,
                    border: `2px solid ${course.color}`,
                    borderRadius: 10, fontWeight: 700, fontSize: '0.9rem',
                    cursor: 'pointer', transition: 'all 0.2s',
                    fontFamily: 'inherit',
                  }}>
                    {prog.percent === 100 ? '🏆 Review Course' : started ? '▶ Continue Learning' : '🚀 Start Course'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
