import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { COURSE_QUIZZES } from '../data/quizData'
import { getCourseById } from '../data/courseData'
import api from '../services/api'
import { useTheme } from './ThemeContext'

const getUid = () => {
  try { const u = JSON.parse(localStorage.getItem('user')); return u?._id || u?.id || 'guest' }
  catch { return 'guest' }
}

const PHASES = { intro: 'intro', quiz: 'quiz', result: 'result' }

export default function CourseQuiz() {
  const { courseId } = useParams()
  const navigate     = useNavigate()

  const course = getCourseById(courseId)
  const quiz   = COURSE_QUIZZES[courseId]

  const { dark }  = useTheme()
  const bg        = dark ? '#111827' : 'white'
  const bgAlt     = dark ? '#1F2937' : '#F9FAFB'
  const cardBg    = dark ? '#1F2937' : 'white'
  const borderFm  = dark ? '#374151' : '#E5E7EB'
  const border    = dark ? '#374151' : '#F3F4F6'
  const text      = dark ? '#F9FAFB' : '#111827'
  const textMuted = dark ? '#9CA3AF' : '#6B7280'
  const textBody  = dark ? '#D1D5DB' : '#374151'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'
  const trackBg   = dark ? '#374151' : '#E5E7EB'

  const [phase, setPhase]       = useState(PHASES.intro)
  const [current, setCurrent]   = useState(0)
  const [answers, setAnswers]   = useState({})
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [result, setResult]     = useState(null)
  const [saving, setSaving]     = useState(false)

  useEffect(() => {
    if (!course || !quiz) navigate('/courses', { replace: true })
  }, [])

  if (!course || !quiz) return null

  const questions = quiz.questions
  const q         = questions[current]
  const total     = questions.length
  const progressPct = Math.round(((current + (revealed ? 1 : 0)) / total) * 100)

  const handleSelect = (idx) => { if (!revealed) setSelected(idx) }

  const handleConfirm = () => {
    if (selected === null) return
    setAnswers(prev => ({ ...prev, [q.id]: selected }))
    setRevealed(true)
  }

  const handleNext = async () => {
    const finalAnswers = { ...answers, [q.id]: selected }

    if (current < total - 1) {
      setCurrent(i => i + 1)
      setSelected(null)
      setRevealed(false)
    } else {
      // Calculate score
      const score = questions.reduce((acc, qq) => acc + (finalAnswers[qq.id] === qq.answer ? 1 : 0), 0)
      const pct   = Math.round((score / total) * 100)
      const passed = pct >= quiz.passMark

      if (passed) {
        setSaving(true)
        try {
          // Update DB enrollment progress to 100% (unlocks certificate)
          await api.put(`/enrollments/progress/${courseId}`, { percent_complete: 100 })
          // Mark quiz as passed in localStorage (user-specific key)
          localStorage.setItem(`lb_quiz_pass_${getUid()}_${courseId}`, JSON.stringify({ score, pct, date: new Date().toISOString() }))
        } catch (e) {
          console.warn('Could not save quiz result to server:', e.message)
          // Still mark locally so user gets certificate
          localStorage.setItem(`lb_quiz_pass_${getUid()}_${courseId}`, JSON.stringify({ score, pct, date: new Date().toISOString() }))
        } finally {
          setSaving(false)
        }
      }

      setResult({ score, total, pct, passed })
      setPhase(PHASES.result)
    }
  }

  // ── Intro ────────────────────────────────────────────────────────────────────
  if (phase === PHASES.intro) {
    return (
      <div style={{ minHeight: '100vh', background: bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ background: cardBg, borderRadius: 24, padding: '48px 40px', maxWidth: 540, width: '100%', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: course.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px' }}>
            {course.icon}
          </div>
          <div style={{ display: 'inline-block', background: course.color + '15', border: `1.5px solid ${course.color}40`, borderRadius: 100, padding: '5px 16px', color: course.color, fontWeight: 700, fontSize: '0.75rem', marginBottom: 16 }}>
            Certification Quiz
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: text, marginBottom: 10 }}>
            {quiz.title}
          </h1>
          <p style={{ color: textMuted, lineHeight: 1.7, marginBottom: 28, fontSize: '0.9rem' }}>
            This is your final exam for <strong>{course.title}</strong>. Pass to earn your official certificate!
          </p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 28, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: `${total} Questions`, icon: '📝' },
              { label: `Pass mark: ${quiz.passMark}%`, icon: '🎯' },
              { label: 'No time limit', icon: '⏱️' },
              { label: 'Retakes allowed', icon: '🔁' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: bgAlt, borderRadius: 10, padding: '8px 14px', fontSize: '0.8rem', color: textBody, fontWeight: 500 }}>
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>

          <button onClick={() => setPhase(PHASES.quiz)}
            style={{ width: '100%', background: `linear-gradient(135deg,${course.color},${course.color}cc)`, color: 'white', border: 'none', borderRadius: 14, padding: '16px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 8px 24px ${course.color}35`, marginBottom: 10 }}>
            Start Quiz →
          </button>
          <button onClick={() => navigate(`/learn/${courseId}`)}
            style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'inherit' }}>
            ← Back to course
          </button>
        </div>
      </div>
    )
  }

  // ── Result ───────────────────────────────────────────────────────────────────
  if (phase === PHASES.result && result) {
    return (
      <div style={{ minHeight: '100vh', background: bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ background: cardBg, borderRadius: 24, padding: '48px 40px', maxWidth: 560, width: '100%', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '4rem', marginBottom: 16 }}>
            {result.passed ? '🏆' : '😔'}
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: text, marginBottom: 8 }}>
            {result.passed ? 'Congratulations!' : 'Not Quite There Yet'}
          </h2>

          <p style={{ color: textMuted, marginBottom: 28, lineHeight: 1.6 }}>
            You scored <strong>{result.score}</strong> out of <strong>{result.total}</strong> — <strong style={{ color: result.passed ? '#16A34A' : '#DC2626' }}>{result.pct}%</strong>
            {result.passed
              ? ` — above the ${quiz.passMark}% pass mark. Your certificate is ready!`
              : ` — below the ${quiz.passMark}% pass mark. Review the course and try again.`}
          </p>

          {/* Score ring */}
          <div style={{ margin: '0 auto 28px', width: 130, height: 130 }}>
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle cx="65" cy="65" r="55" fill="none" stroke="#F3F4F6" strokeWidth="10" />
              <circle cx="65" cy="65" r="55" fill="none"
                stroke={result.passed ? '#22C55E' : '#EF4444'} strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 55}`}
                strokeDashoffset={`${2 * Math.PI * 55 * (1 - result.pct / 100)}`}
                strokeLinecap="round" transform="rotate(-90 65 65)"
                style={{ transition: 'stroke-dashoffset 1s ease' }} />
              <text x="65" y="72" textAnchor="middle" fill={result.passed ? '#16A34A' : '#DC2626'} fontSize="24" fontWeight="800">{result.pct}%</text>
            </svg>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 28 }}>
            {[
              { label: 'Correct', val: result.score, color: '#22C55E' },
              { label: 'Wrong',   val: result.total - result.score, color: '#EF4444' },
              { label: 'Pass mark', val: `${quiz.passMark}%`, color: '#6B7280' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, background: bgAlt, borderRadius: 12, padding: '14px 8px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: s.color }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: textFaint, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {saving && (
            <div style={{ marginBottom: 16, color: textMuted, fontSize: '0.85rem' }}>Saving your result…</div>
          )}

          {result.passed ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button onClick={() => navigate('/certificates')}
                style={{ background: 'linear-gradient(135deg,#22C55E,#16A34A)', color: 'white', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem', boxShadow: '0 6px 20px rgba(34,197,94,0.3)' }}>
                🎓 View My Certificate
              </button>
              <button onClick={() => navigate('/courses')}
                style={{ background: bg, color: textBody, border: `1.5px solid ${borderFm}`, borderRadius: 12, padding: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
                Browse More Courses
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button onClick={() => { setPhase(PHASES.intro); setCurrent(0); setAnswers({}); setSelected(null); setRevealed(false); setResult(null) }}
                style={{ background: `linear-gradient(135deg,${course.color},${course.color}cc)`, color: 'white', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem' }}>
                🔁 Retry Quiz
              </button>
              <button onClick={() => navigate(`/learn/${courseId}`)}
                style={{ background: bg, color: textBody, border: `1.5px solid ${borderFm}`, borderRadius: 12, padding: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
                ← Review Course Lessons
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Quiz ─────────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: bgAlt, display: 'flex', flexDirection: 'column' }}>

      {/* Progress bar */}
      <div style={{ height: 5, background: trackBg }}>
        <div style={{ height: '100%', background: `linear-gradient(90deg,${course.color},${course.color}99)`, width: `${progressPct}%`, transition: 'width 0.4s ease' }} />
      </div>

      {/* Top bar */}
      <div style={{ background: bg, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.2rem' }}>{course.icon}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: text, fontSize: '0.9rem' }}>{course.title} — Final Quiz</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: textFaint, fontSize: '0.82rem', fontWeight: 600 }}>{current + 1} / {total}</span>
          <span style={{ background: course.color + '15', color: course.color, borderRadius: 8, padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700 }}>Pass: {quiz.passMark}%</span>
        </div>
      </div>

      {/* Question */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px' }}>
        <div style={{ maxWidth: 640, width: '100%' }}>

          <div style={{ background: cardBg, borderRadius: 20, padding: '32px', marginBottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: `1px solid ${border}` }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: course.color, marginBottom: 14 }}>
              Question {current + 1} of {total}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: text, lineHeight: 1.55, margin: 0 }}>
              {q.question}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {q.options.map((opt, i) => {
              const isSelected = selected === i
              const isCorrect  = i === q.answer
              let optBg = cardBg, optBorder = `1.5px solid ${borderFm}`, optColor = textBody

              if (revealed) {
                if (isCorrect)                 { optBg = '#F0FDF4'; optBorder = '2px solid #22C55E'; optColor = '#15803D' }
                else if (isSelected)           { optBg = '#FEF2F2'; optBorder = '2px solid #EF4444'; optColor = '#B91C1C' }
              } else if (isSelected) {
                optBg = course.color + '12'; optBorder = `2px solid ${course.color}`; optColor = text
              }

              return (
                <button key={i} onClick={() => handleSelect(i)}
                  style={{ background: optBg, border: optBorder, borderRadius: 14, padding: '15px 20px', textAlign: 'left', cursor: revealed ? 'default' : 'pointer', fontFamily: 'inherit', color: optColor, fontWeight: isSelected || (revealed && isCorrect) ? 700 : 500, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s' }}
                  onMouseEnter={e => { if (!revealed && !isSelected) e.currentTarget.style.borderColor = course.color + '60' }}
                  onMouseLeave={e => { if (!revealed && !isSelected) e.currentTarget.style.borderColor = borderFm }}>
                  <span style={{ width: 32, height: 32, borderRadius: '50%', background: revealed && isCorrect ? '#22C55E' : revealed && isSelected ? '#EF4444' : isSelected ? course.color : dark ? '#374151' : '#F3F4F6', color: revealed || isSelected ? 'white' : textMuted, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0, transition: 'all 0.2s' }}>
                    {revealed && isCorrect ? '✓' : revealed && isSelected ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>

          {!revealed ? (
            <button onClick={handleConfirm} disabled={selected === null}
              style={{ width: '100%', background: selected !== null ? `linear-gradient(135deg,${course.color},${course.color}99)` : trackBg, color: selected !== null ? 'white' : textFaint, border: 'none', borderRadius: 14, padding: '16px', fontWeight: 700, fontSize: '1rem', cursor: selected !== null ? 'pointer' : 'not-allowed', fontFamily: 'inherit', transition: 'all 0.2s', boxShadow: selected !== null ? `0 6px 20px ${course.color}35` : 'none' }}>
              Confirm Answer
            </button>
          ) : (
            <div>
              <div style={{ background: selected === q.answer ? '#F0FDF4' : '#FEF2F2', border: `1px solid ${selected === q.answer ? '#BBF7D0' : '#FECACA'}`, borderRadius: 12, padding: '12px 16px', marginBottom: 14, color: selected === q.answer ? '#15803D' : '#B91C1C', fontWeight: 600, fontSize: '0.875rem' }}>
                {selected === q.answer ? '✅ Correct!' : `❌ Correct answer: ${q.options[q.answer]}`}
              </div>
              <button onClick={handleNext}
                style={{ width: '100%', background: `linear-gradient(135deg,${course.color},${course.color}cc)`, color: 'white', border: 'none', borderRadius: 14, padding: '16px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 6px 20px ${course.color}35` }}>
                {current < total - 1 ? 'Next Question →' : '🏁 See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
