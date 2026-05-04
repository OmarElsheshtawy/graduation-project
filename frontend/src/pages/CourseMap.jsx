import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { COURSES, loadProgress } from '../data/courseData'

const LESSON_TYPE_ICONS = { vocabulary: '📚', grammar: '📝', reading: '📖', writing: '✍️', speaking: '🗣️', listening: '🎧' }

export default function CourseMap() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [progress, setProgress] = useState({ completedLessons: [], xp: 0 })

  const course = COURSES.find(c => c.id === courseId)

  useEffect(() => {
    if (!course) { navigate('/courses'); return }
    setProgress(loadProgress(courseId))
  }, [courseId])

  if (!course) return null

  const allLessons = course.units.flatMap(u => u.lessons)
  const totalLessons = allLessons.length
  const completedCount = progress.completedLessons.length
  const percent = Math.round((completedCount / totalLessons) * 100)

  // Find the next unlocked lesson
  const getNextLesson = () => {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        if (!progress.completedLessons.includes(lesson.id)) return lesson.id
      }
    }
    return null
  }

  const isLessonUnlocked = (unitIdx, lessonIdx) => {
    if (unitIdx === 0 && lessonIdx === 0) return true
    // Check all previous lessons in previous units are done
    for (let ui = 0; ui < unitIdx; ui++) {
      for (const l of course.units[ui].lessons) {
        if (!progress.completedLessons.includes(l.id)) return false
      }
    }
    // Check previous lessons in current unit
    for (let li = 0; li < lessonIdx; li++) {
      if (!progress.completedLessons.includes(course.units[unitIdx].lessons[li].id)) return false
    }
    return true
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '16px 0', position: 'sticky', top: 72, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/courses')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: '0.875rem', fontFamily: 'inherit', padding: '6px 0' }}>
            ← Back to Courses
          </button>
          <div style={{ height: 20, width: 1, background: '#E5E7EB' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
            <span style={{ fontSize: '1.5rem' }}>{course.icon}</span>
            <div>
              <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>{course.title}</div>
              <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{course.level}</div>
            </div>
          </div>
          {/* XP bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{completedCount}/{totalLessons} lessons · {percent}%</div>
              <div style={{ fontWeight: 700, color: course.color, fontSize: '0.875rem' }}>⚡ {progress.xp} XP</div>
            </div>
            <div style={{ width: 100, height: 8, background: '#F3F4F6', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: course.color, width: `${percent}%`, borderRadius: 10 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Course Map */}
      <div className="container" style={{ padding: '40px 24px', maxWidth: 720, margin: '0 auto' }}>
        {course.units.map((unit, unitIdx) => {
          const unitLessons = unit.lessons
          const completedInUnit = unitLessons.filter(l => progress.completedLessons.includes(l.id)).length
          const unitDone = completedInUnit === unitLessons.length
          const unitStarted = completedInUnit > 0

          return (
            <div key={unit.id} style={{ marginBottom: 40 }}>
              {/* Unit header */}
              <div style={{ background: unitDone ? course.color : unitStarted ? course.color + 'CC' : '#E5E7EB', borderRadius: 16, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12, color: unitDone || unitStarted ? 'white' : '#9CA3AF' }}>
                <span style={{ fontSize: '1.6rem' }}>{unit.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Unit {unitIdx + 1}: {unit.title}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>{completedInUnit}/{unitLessons.length} lessons completed</div>
                </div>
                {unitDone && <span style={{ fontSize: '1.3rem' }}>✅</span>}
                {!unitDone && unitStarted && (
                  <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '4px 10px', fontSize: '0.72rem', fontWeight: 700 }}>
                    {Math.round((completedInUnit / unitLessons.length) * 100)}%
                  </div>
                )}
              </div>

              {/* Lessons - Duolingo tree style */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                {unitLessons.map((lesson, lessonIdx) => {
                  const unlocked = isLessonUnlocked(unitIdx, lessonIdx)
                  const done = progress.completedLessons.includes(lesson.id)
                  const isNext = !done && unlocked
                  const icon = LESSON_TYPE_ICONS[lesson.type] || '📚'

                  // Zigzag positions
                  const positions = ['center', 'right', 'center', 'left']
                  const pos = positions[lessonIdx % 4]
                  const marginLeft = pos === 'right' ? 80 : pos === 'left' ? 0 : 40

                  return (
                    <div key={lesson.id} style={{ position: 'relative', width: '100%', display: 'flex', marginBottom: 8, justifyContent: pos === 'right' ? 'flex-end' : pos === 'left' ? 'flex-start' : 'center', paddingLeft: pos === 'left' ? 0 : undefined, paddingRight: pos === 'right' ? 0 : undefined }}>
                      {/* Connector line */}
                      {lessonIdx < unitLessons.length - 1 && (
                        <div style={{ position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)', width: 3, height: 28, background: done ? course.color + '40' : '#E5E7EB', borderRadius: 2, zIndex: 0 }} />
                      )}

                      <button
                        onClick={() => { if (unlocked) navigate(`/learn/${courseId}/${lesson.id}`) }}
                        style={{
                          width: 80, height: 80,
                          borderRadius: '50%',
                          border: done ? `4px solid ${course.color}` : isNext ? `4px solid ${course.color}80` : '4px solid #E5E7EB',
                          background: done ? course.color : isNext ? 'white' : '#F9FAFB',
                          cursor: unlocked ? 'pointer' : 'not-allowed',
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                          gap: 2,
                          boxShadow: done ? `0 4px 14px ${course.color}40` : isNext ? `0 4px 20px ${course.color}30` : 'none',
                          transition: 'all 0.25s',
                          position: 'relative', zIndex: 1,
                          animation: isNext ? 'lbPulse 2s ease-in-out infinite' : 'none',
                        }}
                        onMouseEnter={e => { if (unlocked) { e.currentTarget.style.transform = 'scale(1.08)' } }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                      >
                        {done ? (
                          <span style={{ fontSize: '1.8rem' }}>⭐</span>
                        ) : (
                          <>
                            <span style={{ fontSize: '1.4rem', filter: unlocked ? 'none' : 'grayscale(1) opacity(0.4)' }}>{icon}</span>
                            {!unlocked && <span style={{ fontSize: '0.7rem' }}>🔒</span>}
                          </>
                        )}
                      </button>

                      {/* Lesson info tooltip on side */}
                      <div style={{ position: 'absolute', [pos === 'right' ? 'right' : 'left']: 94, top: '50%', transform: 'translateY(-50%)', background: 'white', borderRadius: 12, padding: '8px 12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', border: '1px solid #F3F4F6', whiteSpace: 'nowrap', pointerEvents: 'none', opacity: unlocked ? 1 : 0.5 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.78rem', color: done ? course.color : isNext ? '#111827' : '#9CA3AF' }}>{lesson.title}</div>
                        <div style={{ fontSize: '0.68rem', color: '#9CA3AF', textTransform: 'capitalize' }}>{lesson.type} · {lesson.xp} XP</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Unit complete badge */}
              {unitDone && (
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: course.color + '15', border: `1px solid ${course.color}30`, borderRadius: 12, padding: '8px 16px', color: course.color, fontWeight: 700, fontSize: '0.8rem' }}>
                    🎉 Unit Complete! You earned {unitLessons.length * course.xpPerLesson} XP
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* Course complete */}
        {percent === 100 && (
          <div style={{ textAlign: 'center', padding: '40px 20px', background: 'white', borderRadius: 20, border: `2px solid ${course.color}`, marginTop: 20 }}>
            <div style={{ fontSize: '4rem', marginBottom: 12 }}>🏆</div>
            <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', color: '#111827', marginBottom: 8 }}>Course Complete!</h2>
            <p style={{ color: '#6B7280', marginBottom: 20 }}>You earned <strong style={{ color: course.color }}>{progress.xp} XP</strong> total!</p>
            <button onClick={() => navigate('/certificates')} style={{ background: course.color, color: 'white', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem' }}>
              🎓 Get Your Certificate
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes lbPulse {
          0%, 100% { box-shadow: 0 4px 20px ${course.color}30; }
          50% { box-shadow: 0 4px 30px ${course.color}60; transform: scale(1.03); }
        }
      `}</style>
    </div>
  )
}
