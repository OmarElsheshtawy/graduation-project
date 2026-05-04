import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { COURSES, loadProgress, getTotalLessons, getCompletionPercent } from '../data/courseData'

const LEVEL_FILTERS = ['All', 'A1–A2', 'A2–B1', 'A2–B2', 'B1–B2', 'B1–C1', 'B2–C1', 'B2–C2', 'C1–C2']
const SKILL_FILTERS = ['All', 'Grammar', 'Vocabulary', 'Speaking', 'Writing', 'Listening', 'Reading']

export default function CoursesHub() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [progresses,   setProgresses]   = useState({})
  const [levelFilter,  setLevelFilter]  = useState('All')
  const [search,       setSearch]       = useState(searchParams.get('search') || '')
  const [sortBy,       setSortBy]       = useState('default')

  useEffect(() => {
    const p = {}
    COURSES.forEach(c => { p[c.id] = loadProgress(c.id) })
    setProgresses(p)
  }, [])

  const filtered = COURSES
    .filter(c => {
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                          c.description.toLowerCase().includes(search.toLowerCase()) ||
                          c.level.toLowerCase().includes(search.toLowerCase())
      const matchLevel  = levelFilter === 'All' || c.level === levelFilter
      return matchSearch && matchLevel
    })
    .sort((a, b) => {
      if (sortBy === 'progress') {
        return getCompletionPercent(b.id) - getCompletionPercent(a.id)
      }
      if (sortBy === 'xp') {
        return (progresses[b.id]?.xp || 0) - (progresses[a.id]?.xp || 0)
      }
      return 0
    })

  const totalXP       = Object.values(progresses).reduce((a, p) => a + (p.xp || 0), 0)
  const startedCount  = COURSES.filter(c => (progresses[c.id]?.completedLessons?.length || 0) > 0).length
  const completedCount = COURSES.filter(c => getCompletionPercent(c.id) === 100).length

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)', padding: '56px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 30, padding: '5px 14px', marginBottom: 16, fontSize: '0.78rem', color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>
                ✨ Structured like Duolingo — for serious English learners
              </div>
              <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: 'white', marginBottom: 10, letterSpacing: -1 }}>
                Learn English the Right Way
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: 520, marginBottom: 24 }}>
                9 complete courses · 180+ interactive lessons · Grammar, vocabulary, reading, writing, speaking & listening
              </p>
              {/* Quick stats */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[['📚','9','Courses'],['🎯','180+','Lessons'],['🧠','700+','Exercises'],['⚡',totalXP,'Your XP']].map(([icon,val,label]) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '10px 16px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                    <div style={{ fontSize: '1.1rem' }}>{icon}</div>
                    <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.1rem', color: 'white', lineHeight: 1.1 }}>{val}</div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* My progress summary */}
            {startedCount > 0 && (
              <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: '18px 22px', backdropFilter: 'blur(10px)', minWidth: 200 }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>My Progress</div>
                {[['📖', `${startedCount} started`, ''],['🏆', `${completedCount} completed`, ''],['⚡', `${totalXP} XP total`, '']].map(([icon,val]) => (
                  <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span>{icon}</span>
                    <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '14px 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="container" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F9FAFB', border: '1.5px solid #E5E7EB', borderRadius: 10, padding: '9px 14px', flex: 1, minWidth: 200 }}>
            <svg width="15" height="15" fill="none" stroke="#9CA3AF" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..."
              style={{ border: 'none', outline: 'none', background: 'none', fontSize: '0.875rem', fontFamily: 'inherit', color: '#374151', flex: 1 }} />
            {search && <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '1rem' }}>✕</button>}
          </div>
          {/* Level filter */}
          <select value={levelFilter} onChange={e => setLevelFilter(e.target.value)}
            style={{ padding: '9px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.875rem', fontFamily: 'inherit', background: 'white', color: '#374151', cursor: 'pointer', outline: 'none' }}>
            <option value="All">All Levels</option>
            {['A1–A2','A2–B1','A2–B2','B1–B2','B1–C1','B2–C1','B2–C2','C1–C2'].map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          {/* Sort */}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            style={{ padding: '9px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.875rem', fontFamily: 'inherit', background: 'white', color: '#374151', cursor: 'pointer', outline: 'none' }}>
            <option value="default">Default Order</option>
            <option value="progress">By Progress</option>
            <option value="xp">By XP Earned</option>
          </select>
          {(search || levelFilter !== 'All') && (
            <button onClick={() => { setSearch(''); setLevelFilter('All') }}
              style={{ padding: '9px 14px', background: '#FEE2E2', color: '#991B1B', border: 'none', borderRadius: 10, fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
              Clear ✕
            </button>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container" style={{ padding: '36px 24px 60px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#9CA3AF' }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
            <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', color: '#374151', marginBottom: 8 }}>No courses found</h3>
            <p>Try a different search or filter.</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', margin: 0 }}>
                {filtered.length === COURSES.length ? `All ${COURSES.length} Courses` : `${filtered.length} of ${COURSES.length} Courses`}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
              {filtered.map(course => {
                const total   = getTotalLessons(course.id)
                const prog    = progresses[course.id] || { completedLessons: [], xp: 0 }
                const percent = getCompletionPercent(course.id)
                const started = prog.completedLessons?.length > 0

                return (
                  <div key={course.id} onClick={() => navigate(`/learn/${course.id}`)}
                    style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: `2px solid ${started ? course.color + '30' : '#F3F4F6'}`, cursor: 'pointer', transition: 'all 0.25s', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = course.color }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = started ? course.color + '30' : '#F3F4F6' }}>

                    {/* Color bar */}
                    <div style={{ height: 5, background: `linear-gradient(90deg, ${course.color}, ${course.color}99)` }} />

                    <div style={{ padding: '20px 20px 18px' }}>
                      {/* Header */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 50, height: 50, borderRadius: 14, background: course.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                          {course.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3, flexWrap: 'wrap' }}>
                            <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: '#111827', fontSize: '0.95rem', margin: 0 }}>{course.title}</h3>
                            {percent === 100 && <span style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.6rem', fontWeight: 800, padding: '2px 7px', borderRadius: 6 }}>✓ DONE</span>}
                            {started && percent < 100 && <span style={{ background: '#DBEAFE', color: '#1D4ED8', fontSize: '0.6rem', fontWeight: 800, padding: '2px 7px', borderRadius: 6 }}>IN PROGRESS</span>}
                          </div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: course.color }}>{course.level}</div>
                        </div>
                        {prog.xp > 0 && (
                          <div style={{ background: course.color + '15', color: course.color, fontSize: '0.7rem', fontWeight: 800, padding: '3px 8px', borderRadius: 8, flexShrink: 0 }}>
                            ⚡{prog.xp}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.6, marginBottom: 14, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {course.description}
                      </p>

                      {/* Units preview */}
                      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 14 }}>
                        {course.units.map(u => (
                          <span key={u.id} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 6, padding: '2px 8px', fontSize: '0.68rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: 3 }}>
                            {u.icon} {u.title}
                          </span>
                        ))}
                      </div>

                      {/* Progress */}
                      {started ? (
                        <div style={{ marginBottom: 14 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#9CA3AF', marginBottom: 5 }}>
                            <span>{prog.completedLessons.length}/{total} lessons</span>
                            <span style={{ fontWeight: 800, color: percent === 100 ? '#22C55E' : course.color }}>{percent}%</span>
                          </div>
                          <div style={{ height: 6, background: '#F3F4F6', borderRadius: 10, overflow: 'hidden' }}>
                            <div style={{ height: '100%', background: percent === 100 ? '#22C55E' : course.color, width: `${percent}%`, borderRadius: 10, transition: 'width 0.6s ease' }} />
                          </div>
                        </div>
                      ) : (
                        <div style={{ marginBottom: 14, fontSize: '0.72rem', color: '#9CA3AF' }}>
                          {total} lessons · {course.units.length} units · {course.xpPerLesson} XP/lesson
                        </div>
                      )}

                      {/* CTA Button */}
                      <button style={{ width: '100%', padding: '10px', borderRadius: 12, background: started ? course.color : 'white', color: started ? 'white' : course.color, border: `2px solid ${course.color}`, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}>
                        {percent === 100 ? '🔄 Review' : started ? '▶ Continue' : '🚀 Start'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}