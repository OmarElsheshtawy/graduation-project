import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { COURSE_CATALOG, COURSE_UNITS } from '../data/courseContent'
import { useTheme } from './ThemeContext'

export default function CourseUnits() {
  const { courseId } = useParams()
  const navigate     = useNavigate()
  const [progress, setProgress] = useState({})
  const { dark }  = useTheme()
  const bgAlt     = dark ? '#1F2937' : '#F8FAFC'
  const cardBg    = dark ? '#1F2937' : 'white'
  const border    = dark ? '#374151' : '#E5E7EB'
  const text      = dark ? '#F9FAFB' : '#1F2937'
  const textMuted = dark ? '#9CA3AF' : '#6B7280'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'
  const trackBg   = dark ? '#374151' : '#F3F4F6'

  const course = COURSE_CATALOG.find(c => c.id === courseId)
  const units  = COURSE_UNITS[courseId] || []

  useEffect(() => {
    const saved = localStorage.getItem(`course_progress_${courseId}`)
    if (saved) setProgress(JSON.parse(saved))
  }, [courseId])

  if (!course) return <div style={{ padding: 40, textAlign: 'center', color: text }}>Course not found.</div>

  const isLessonDone  = (lessonId) => !!progress[lessonId]
  const isUnitDone    = (unit) => unit.lessons.every(l => isLessonDone(l.id))
  const isUnitLocked  = (unitIndex) => {
    if (unitIndex === 0) return false
    return !isUnitDone(units[unitIndex - 1])
  }
  const getLessonStatus = (lesson, unitIndex) => {
    if (isLessonDone(lesson.id)) return 'done'
    if (isUnitLocked(unitIndex)) return 'locked'
    const unit = units[unitIndex]
    const firstIncomplete = unit.lessons.find(l => !isLessonDone(l.id))
    return firstIncomplete?.id === lesson.id ? 'current' : 'available'
  }

  const totalLessons   = units.reduce((a, u) => a + u.lessons.length, 0)
  const doneLessons    = Object.keys(progress).length
  const overallPercent = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0

  const typeIcons = { grammar: '📝', vocabulary: '📚', reading: '📖', listening: '🎧', speaking: '🗣️', writing: '✍️' }

  return (
    <div style={{ minHeight: '100vh', background: bgAlt }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${course.color} 0%, ${course.color}DD 100%)`, color: 'white', padding: '32px 0 40px' }}>
        <div className="container">
          <button onClick={() => navigate('/learn')}
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', padding: '7px 14px', borderRadius: 8, cursor: 'pointer', fontSize: '0.85rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
            ← Back to Courses
          </button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: '2rem' }}>{course.icon}</span>
                <h1 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: 'white', margin: 0 }}>
                  {course.title}
                </h1>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: '0 0 20px' }}>{course.description}</p>

              {/* Progress */}
              <div style={{ maxWidth: 400 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', marginBottom: 6 }}>
                  <span>{doneLessons}/{totalLessons} lessons completed</span>
                  <span style={{ fontWeight: 700 }}>{overallPercent}%</span>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.25)', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${overallPercent}%`, background: 'white', borderRadius: 99, transition: 'width 0.8s ease' }} />
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.15)', borderRadius: 16, padding: '20px 28px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 4 }}>⭐</div>
              <div style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'white' }}>{overallPercent === 100 ? course.xpReward : Math.round(overallPercent * course.xpReward / 100)}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)' }}>XP Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Units */}
      <div className="container" style={{ padding: '40px 24px' }}>
        {units.map((unit, unitIndex) => {
          const locked   = isUnitLocked(unitIndex)
          const unitDone = isUnitDone(unit)
          const unitLessons = unit.lessons.length
          const unitDone2   = unit.lessons.filter(l => isLessonDone(l.id)).length

          return (
            <div key={unit.id} style={{ marginBottom: 32 }}>
              {/* Unit Header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, padding: '14px 20px',
                background: locked ? trackBg : unitDone ? (dark ? `${course.color}22` : `${course.bgLight}`) : cardBg,
                borderRadius: 14, border: `1px solid ${locked ? border : unitDone ? course.color + '44' : border}`,
                opacity: locked ? 0.6 : 1,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: locked ? border : unitDone ? course.color : trackBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                  {locked ? '🔒' : unitDone ? '✅' : unit.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: textFaint }}>Unit {unit.unit}</span>
                    {unitDone && <span style={{ background: unitDone ? (dark ? `${course.color}22` : course.bgLight) : trackBg, color: course.color, padding: '2px 8px', borderRadius: 20, fontSize: '0.68rem', fontWeight: 700, border: `1px solid ${course.color}44` }}>COMPLETED</span>}
                    {locked && <span style={{ background: trackBg, color: textFaint, padding: '2px 8px', borderRadius: 20, fontSize: '0.68rem', fontWeight: 700 }}>LOCKED</span>}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1rem', fontWeight: 700, color: locked ? textFaint : text, margin: '2px 0 0' }}>
                    {unit.title}
                  </h3>
                </div>
                <div style={{ fontSize: '0.78rem', color: textFaint, flexShrink: 0 }}>
                  {unitDone2}/{unitLessons} done
                </div>
              </div>

              {/* Lessons */}
              {!locked && (
                <div style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {unit.lessons.map((lesson, lIndex) => {
                    const status = getLessonStatus(lesson, unitIndex)
                    const done   = status === 'done'
                    const current = status === 'current'

                    return (
                      <div key={lesson.id}
                        onClick={() => navigate(`/learn/${courseId}/${unit.id}/${lesson.id}`)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px',
                          background: current ? (dark ? `${course.color}22` : course.bgLight) : done ? (dark ? '#052e16' : '#F0FDF4') : cardBg,
                          border: `1px solid ${current ? course.color : done ? (dark ? '#166534' : '#BBF7D0') : border}`,
                          borderRadius: 12, cursor: 'pointer',
                          transition: 'all 0.2s',
                          boxShadow: current ? `0 4px 14px ${course.color}33` : 'none',
                        }}
                        onMouseEnter={e => { if (!done) { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.08)' }}}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = current ? `0 4px 14px ${course.color}33` : 'none' }}
                      >
                        {/* Status icon */}
                        <div style={{
                          width: 40, height: 40, borderRadius: '50%',
                          background: done ? '#10B981' : current ? course.color : trackBg,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.1rem', flexShrink: 0,
                          boxShadow: current ? `0 3px 10px ${course.color}55` : done ? '0 3px 10px #10B98133' : 'none',
                        }}>
                          {done ? '✓' : typeIcons[lesson.type] || '📝'}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: done ? '#065F46' : current ? '#1E40AF' : text }}>
                              {lIndex + 1}. {lesson.title}
                            </span>
                            {current && (
                              <span style={{ background: course.color, color: 'white', padding: '2px 8px', borderRadius: 20, fontSize: '0.65rem', fontWeight: 700 }}>
                                START HERE
                              </span>
                            )}
                          </div>
                          <div style={{ display: 'flex', gap: 10, marginTop: 3, fontSize: '0.73rem', color: textFaint }}>
                            <span style={{ textTransform: 'capitalize' }}>{typeIcons[lesson.type]} {lesson.type}</span>
                            <span>·</span>
                            <span>⭐ {lesson.xp} XP</span>
                            <span>·</span>
                            <span>📝 {lesson.exercises?.length || 0} exercises</span>
                          </div>
                        </div>

                        {done ? (
                          <div style={{ background: '#DCFCE7', color: '#16A34A', padding: '4px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>
                            ✓ Done
                          </div>
                        ) : (
                          <div style={{ color: current ? course.color : textFaint, fontSize: '1.1rem', flexShrink: 0 }}>›</div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

        {/* Completion Badge */}
        {overallPercent === 100 && (
          <div style={{ textAlign: 'center', padding: '40px 24px', background: cardBg, borderRadius: 20, border: `2px solid ${course.color}`, marginTop: 16 }}>
            <div style={{ fontSize: '4rem', marginBottom: 12 }}>🏆</div>
            <h2 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.6rem', color: text, marginBottom: 8 }}>
              Course Completed!
            </h2>
            <p style={{ color: textMuted, marginBottom: 20 }}>You've mastered {course.title}! Time to earn your certificate.</p>
            <button onClick={() => navigate('/certificates')} style={{ background: course.color, color: 'white', border: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>
              🎓 Get Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
