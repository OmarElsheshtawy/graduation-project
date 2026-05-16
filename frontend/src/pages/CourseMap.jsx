import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCourseById, loadProgress, getTotalLessons, getCompletionPercent, isLessonUnlocked } from '../data/courseData'
import { useTheme } from './ThemeContext'

const getUid = () => {
  try { const u = JSON.parse(localStorage.getItem('user')); return u?._id || u?.id || 'guest' }
  catch { return 'guest' }
}

const TYPE_ICONS = { vocabulary: '📚', grammar: '📝', reading: '📖', writing: '✍️', speaking: '🗣️', listening: '🎧', dialogue: '💬', story: '📗' }

export default function CourseMap() {
  const { courseId } = useParams()
  const navigate     = useNavigate()
  const { dark }     = useTheme()
  const [progress, setProgress] = useState({ completedLessons: [], xp: 0 })

  // ── colour tokens ──────────────────────────────────────────
  const bg        = dark ? '#111827' : 'white'
  const bgAlt     = dark ? '#1F2937' : '#F9FAFB'
  const cardBg    = dark ? '#1F2937' : 'white'
  const border    = dark ? '#374151' : '#F3F4F6'
  const borderFm  = dark ? '#374151' : '#E5E7EB'
  const text      = dark ? '#F9FAFB' : '#111827'
  const textMuted = dark ? '#9CA3AF' : '#6B7280'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'
  const textBody  = dark ? '#D1D5DB' : '#374151'
  const trackBg   = dark ? '#374151' : '#F3F4F6'
  const unitNotStartedBg = dark ? '#374151' : '#E5E7EB'

  const course = getCourseById(courseId)

  useEffect(() => {
    if (!course) { navigate('/courses'); return }
    setProgress(loadProgress(courseId))
  }, [courseId])

  if (!course) return null

  const totalLessons   = getTotalLessons(courseId)
  const completedCount = progress.completedLessons?.length || 0
  const percent        = Math.round((completedCount / Math.max(totalLessons, 1)) * 100)

  const getNextLesson = () => {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        if (!progress.completedLessons?.includes(lesson.id)) return lesson.id
      }
    }
    return null
  }
  const nextLessonId = getNextLesson()

  return (
    <div style={{ minHeight: '100vh', background: bgAlt }}>

      {/* Sticky header */}
      <div style={{ background: bg, borderBottom: `1px solid ${borderFm}`, padding: '14px 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/courses')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: textMuted, fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 5, padding: '6px 0' }}>
            ← All Courses
          </button>
          <div style={{ height: 20, width: 1, background: borderFm }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
            <span style={{ fontSize: '1.4rem' }}>{course.icon}</span>
            <div>
              <div style={{ fontWeight: 700, color: text, fontSize: '0.95rem' }}>{course.title}</div>
              <div style={{ fontSize: '0.7rem', color: textFaint }}>{course.level}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: textFaint }}>{completedCount}/{totalLessons} lessons · {percent}%</div>
              <div style={{ fontWeight: 700, color: course.color, fontSize: '0.875rem' }}>⚡ {progress.xp || 0} XP</div>
            </div>
            <div style={{ width: 90, height: 8, background: trackBg, borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: course.color, width: `${percent}%`, borderRadius: 10, transition: 'width 0.6s ease' }} />
            </div>
          </div>
          {nextLessonId && (
            <button onClick={() => navigate(`/learn/${courseId}/${nextLessonId}`)}
              style={{ background: course.color, color: 'white', border: 'none', borderRadius: 10, padding: '9px 18px', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 3px 10px ${course.color}35`, whiteSpace: 'nowrap' }}>
              ▶ Continue
            </button>
          )}
        </div>
      </div>

      {/* Course Map */}
      <div className="container" style={{ padding: '36px 24px 60px', maxWidth: 780, margin: '0 auto' }}>

        {/* Course intro card */}
        <div style={{ background: `linear-gradient(135deg, ${course.color}15, ${course.color}05)`, borderRadius: 20, padding: '20px 24px', marginBottom: 32, border: `1px solid ${course.color}25` }}>
          <p style={{ color: textBody, fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{course.description}</p>
        </div>

        {/* Units + Lessons */}
        {course.units.map((unit, unitIdx) => {
          const unitLessons      = unit.lessons
          const completedInUnit  = unitLessons.filter(l => progress.completedLessons?.includes(l.id)).length
          const unitDone         = completedInUnit === unitLessons.length
          const unitStarted      = completedInUnit > 0

          return (
            <div key={unit.id} style={{ marginBottom: 36 }}>

              {/* Unit header */}
              <div style={{ background: unitDone ? course.color : unitStarted ? course.color + 'CC' : unitNotStartedBg, borderRadius: 16, padding: '14px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.5rem' }}>{unit.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: unitDone || unitStarted ? 'white' : textMuted, fontSize: '0.95rem' }}>
                    Unit {unitIdx + 1}: {unit.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: unitDone || unitStarted ? 'rgba(255,255,255,0.75)' : textFaint, marginTop: 2 }}>
                    {completedInUnit}/{unitLessons.length} lessons completed
                  </div>
                </div>
                {unitDone && <span style={{ fontSize: '1.2rem' }}>✅</span>}
                {!unitDone && unitStarted && (
                  <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '3px 10px', fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>
                    {Math.round((completedInUnit / unitLessons.length) * 100)}%
                  </div>
                )}
              </div>

              {/* Lessons tree */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, paddingLeft: 20 }}>
                {unitLessons.map((lesson, lessonIdx) => {
                  const unlocked = isLessonUnlocked(courseId, unitIdx, lessonIdx)
                  const done     = progress.completedLessons?.includes(lesson.id)
                  const isNext   = !done && unlocked
                  const icon     = TYPE_ICONS[lesson.type] || '📚'

                  const positions = ['center', 'right', 'center', 'left', 'center', 'right']
                  const pos       = positions[lessonIdx % positions.length]

                  return (
                    <div key={lesson.id} style={{ position: 'relative', width: '100%', display: 'flex', marginBottom: 10, justifyContent: pos === 'right' ? 'flex-end' : pos === 'left' ? 'flex-start' : 'center' }}>

                      {/* Connector line */}
                      {lessonIdx < unitLessons.length - 1 && (
                        <div style={{ position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)', width: 3, height: 24, background: done ? course.color + '50' : borderFm, borderRadius: 2, zIndex: 0 }} />
                      )}

                      {/* Lesson button */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 1 }}>
                        {pos === 'right' && (
                          <div style={{ textAlign: 'right', opacity: unlocked ? 1 : 0.4 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.78rem', color: done ? course.color : isNext ? text : textFaint }}>{lesson.title}</div>
                            <div style={{ fontSize: '0.65rem', color: textFaint, textTransform: 'capitalize' }}>{lesson.type} · {lesson.xp} XP</div>
                          </div>
                        )}

                        <button onClick={() => { if (unlocked) navigate(`/learn/${courseId}/${lesson.id}`) }}
                          style={{
                            width: 72, height: 72, borderRadius: '50%',
                            border: done ? `4px solid ${course.color}` : isNext ? `4px solid ${course.color}80` : `4px solid ${borderFm}`,
                            background: done ? course.color : isNext ? bg : bgAlt,
                            cursor: unlocked ? 'pointer' : 'not-allowed',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
                            boxShadow: done ? `0 4px 14px ${course.color}40` : isNext ? `0 4px 20px ${course.color}25` : 'none',
                            transition: 'all 0.25s', flexShrink: 0,
                            animation: isNext ? `lessonPulse_${courseId} 2s ease-in-out infinite` : 'none',
                          }}
                          onMouseEnter={e => { if (unlocked) e.currentTarget.style.transform = 'scale(1.08)' }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                          title={unlocked ? lesson.title : 'Complete previous lessons to unlock'}>
                          {done ? (
                            <span style={{ fontSize: '1.6rem' }}>⭐</span>
                          ) : (
                            <>
                              <span style={{ fontSize: '1.2rem', filter: unlocked ? 'none' : 'grayscale(1) opacity(0.35)' }}>{icon}</span>
                              {!unlocked && <span style={{ fontSize: '0.65rem' }}>🔒</span>}
                            </>
                          )}
                        </button>

                        {(pos === 'left' || pos === 'center') && (
                          <div style={{ textAlign: 'left', opacity: unlocked ? 1 : 0.4, minWidth: 140 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.78rem', color: done ? course.color : isNext ? text : textFaint }}>{lesson.title}</div>
                            <div style={{ fontSize: '0.65rem', color: textFaint, textTransform: 'capitalize' }}>{lesson.type} · {lesson.xp} XP</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Unit complete badge */}
              {unitDone && (
                <div style={{ textAlign: 'center', marginTop: 16 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: course.color + '15', border: `1px solid ${course.color}30`, borderRadius: 12, padding: '8px 16px', color: course.color, fontWeight: 700, fontSize: '0.78rem' }}>
                    🎉 Unit Complete! +{unitLessons.length * course.xpPerLesson} XP
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* Course complete */}
        {percent === 100 && (() => {
          const quizPassed = !!localStorage.getItem(`lb_quiz_pass_${getUid()}_${courseId}`)
          return (
            <div style={{ textAlign: 'center', padding: '40px 20px', background: cardBg, borderRadius: 20, border: `2px solid ${course.color}`, marginTop: 20 }}>
              <div style={{ fontSize: '4rem', marginBottom: 12 }}>{quizPassed ? '🏆' : '🎯'}</div>
              <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', color: text, marginBottom: 8 }}>
                {quizPassed ? 'Course Complete!' : 'All Lessons Done!'}
              </h2>
              <p style={{ color: textMuted, marginBottom: 20 }}>
                {quizPassed
                  ? <>You earned <strong style={{ color: course.color }}>{progress.xp} XP</strong>! Your certificate is ready.</>
                  : <>You've finished all lessons and earned <strong style={{ color: course.color }}>{progress.xp} XP</strong>.<br />Pass the final quiz to earn your certificate.</>
                }
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {quizPassed ? (
                  <button onClick={() => navigate('/certificates')}
                    style={{ background: course.color, color: 'white', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', boxShadow: `0 6px 20px ${course.color}35` }}>
                    🎓 View Certificate
                  </button>
                ) : (
                  <button onClick={() => navigate(`/course-quiz/${courseId}`)}
                    style={{ background: `linear-gradient(135deg,${course.color},${course.color}cc)`, color: 'white', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', boxShadow: `0 6px 20px ${course.color}35` }}>
                    📝 Take Final Quiz to Get Certified
                  </button>
                )}
                <button onClick={() => navigate('/courses')}
                  style={{ background: bg, color: textBody, border: `2px solid ${borderFm}`, borderRadius: 12, padding: '12px 24px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
                  Browse More Courses
                </button>
              </div>
            </div>
          )
        })()}
      </div>

      <style>{`
        @keyframes lessonPulse_${courseId} {
          0%, 100% { box-shadow: 0 4px 20px ${course.color}25; }
          50% { box-shadow: 0 4px 30px ${course.color}55; transform: scale(1.04); }
        }
      `}</style>
    </div>
  )
}
