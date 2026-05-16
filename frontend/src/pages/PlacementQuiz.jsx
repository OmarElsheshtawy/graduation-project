import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PLACEMENT_QUIZ, getPlacementResult } from '../data/quizData'
import { useTheme } from './ThemeContext'

const getUid = () => {
  try { const u = JSON.parse(localStorage.getItem('user')); return u?._id || u?.id || 'guest' }
  catch { return 'guest' }
}

const PHASES = { intro: 'intro', quiz: 'quiz', result: 'result' }

export default function PlacementQuiz() {
  const navigate = useNavigate()
  const [phase, setPhase]       = useState(PHASES.intro)
  const [current, setCurrent]   = useState(0)
  const [answers, setAnswers]   = useState({})   // { questionId: selectedIndex }
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [result, setResult]     = useState(null)

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

  const questions = PLACEMENT_QUIZ.questions
  const q         = questions[current]
  const total     = questions.length

  // Skip if already done for this user
  useEffect(() => {
    if (localStorage.getItem(`lb_placement_done_${getUid()}`)) navigate('/courses', { replace: true })
  }, [])

  const handleSelect = (idx) => {
    if (revealed) return
    setSelected(idx)
  }

  const handleConfirm = () => {
    if (selected === null) return
    setAnswers(prev => ({ ...prev, [q.id]: selected }))
    setRevealed(true)
  }

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent(i => i + 1)
      setSelected(null)
      setRevealed(false)
    } else {
      // Calculate score
      const score = questions.reduce((acc, qq) => {
        return acc + (answers[qq.id] === qq.answer || (qq.id === q.id && selected === qq.answer) ? 1 : 0)
      }, 0)
      const res = getPlacementResult(score, total)
      setResult({ ...res, score, total })
      // Persist (user-specific keys)
      const uid = getUid()
      localStorage.setItem(`lb_placement_done_${uid}`, 'true')
      localStorage.setItem(`lb_placement_result_${uid}`, JSON.stringify({ ...res, score, total }))
      setPhase(PHASES.result)
    }
  }

  const progressPct = Math.round(((current + (revealed ? 1 : 0)) / total) * 100)

  // ── Intro ────────────────────────────────────────────────────────────────────
  if (phase === PHASES.intro) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0F172A,#1E3A5F,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ background: cardBg, borderRadius: 24, padding: '48px 40px', maxWidth: 540, width: '100%', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
          <div style={{ fontSize: '4rem', marginBottom: 20 }}>🎯</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: text, marginBottom: 12 }}>
            Find Your English Level
          </h1>
          <p style={{ color: textMuted, lineHeight: 1.7, marginBottom: 28, fontSize: '0.95rem' }}>
            Answer <strong>20 quick questions</strong> — we'll assess your grammar, vocabulary, and comprehension to recommend the perfect starting course for you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32, textAlign: 'left' }}>
            {[
              { icon: '⏱️', text: 'No time limit — take your time' },
              { icon: '📊', text: 'Progressive difficulty from basic to advanced' },
              { icon: '🎓', text: 'Get a personalised course recommendation' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: bgAlt, borderRadius: 10, padding: '12px 16px' }}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.875rem', color: textBody }}>{item.text}</span>
              </div>
            ))}
          </div>

          <button onClick={() => setPhase(PHASES.quiz)}
            style={{ width: '100%', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white', border: 'none', borderRadius: 14, padding: '16px', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}>
            Start Assessment →
          </button>
          <button onClick={() => { localStorage.setItem(`lb_placement_done_${getUid()}`, 'true'); navigate('/courses') }}
            style={{ marginTop: 12, background: 'none', border: 'none', color: '#9CA3AF', fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'inherit' }}>
            Skip — I know my level
          </button>
        </div>
      </div>
    )
  }

  // ── Result ───────────────────────────────────────────────────────────────────
  if (phase === PHASES.result && result) {
    const pct = Math.round((result.score / result.total) * 100)
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0F172A,#1E3A5F,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ background: cardBg, borderRadius: 24, padding: '48px 40px', maxWidth: 560, width: '100%', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
          <div style={{ fontSize: '4rem', marginBottom: 16 }}>{result.icon}</div>
          <div style={{ display: 'inline-block', background: result.color + '18', border: `2px solid ${result.color}`, borderRadius: 100, padding: '6px 20px', color: result.color, fontWeight: 700, fontSize: '0.85rem', marginBottom: 16 }}>
            Your Level: {result.level}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: text, marginBottom: 10 }}>
            Assessment Complete!
          </h2>
          <p style={{ color: textMuted, marginBottom: 28, lineHeight: 1.6, fontSize: '0.9rem' }}>
            You answered <strong>{result.score}</strong> out of <strong>{result.total}</strong> questions correctly ({pct}%).
            <br />{result.desc}
          </p>

          {/* Score ring */}
          <div style={{ margin: '0 auto 28px', width: 120, height: 120, position: 'relative' }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#F3F4F6" strokeWidth="10" />
              <circle cx="60" cy="60" r="50" fill="none" stroke={result.color} strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - pct / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 1s ease' }} />
              <text x="60" y="65" textAnchor="middle" fill={result.color} fontSize="22" fontWeight="800">{pct}%</text>
            </svg>
          </div>

          <div style={{ background: bgAlt, borderRadius: 16, padding: '18px 20px', marginBottom: 28, textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: text, fontSize: '0.9rem', marginBottom: 6 }}>🎓 Recommended Course</div>
            <div style={{ color: result.color, fontWeight: 700, fontSize: '1.05rem' }}>{result.level} English</div>
            <div style={{ color: textMuted, fontSize: '0.82rem', marginTop: 4 }}>{result.desc}</div>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => navigate(`/learn/${result.courseId}`)}
              style={{ flex: 1, background: `linear-gradient(135deg,${result.color},${result.color}cc)`, color: 'white', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
              Start Recommended Course →
            </button>
            <button onClick={() => navigate('/courses')}
              style={{ flex: 1, background: bg, color: textBody, border: `1.5px solid ${borderFm}`, borderRadius: 12, padding: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Quiz ─────────────────────────────────────────────────────────────────────
  const LEVEL_COLORS = { beginner: '#22C55E', elementary: '#10B981', intermediate: '#3B82F6', advanced: '#7C3AED' }
  const levelColor = LEVEL_COLORS[q.level] || '#2563EB'

  return (
    <div style={{ minHeight: '100vh', background: bgAlt, display: 'flex', flexDirection: 'column' }}>

      {/* Progress bar */}
      <div style={{ height: 5, background: trackBg }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg,#2563EB,#7C3AED)', width: `${progressPct}%`, transition: 'width 0.4s ease' }} />
      </div>

      {/* Top bar */}
      <div style={{ background: bg, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: text, fontSize: '0.95rem' }}>🎯 Level Assessment</div>
        <div style={{ display: 'flex', align: 'center', gap: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: levelColor + '15', color: levelColor, borderRadius: 8, padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'capitalize' }}>
            {q.level}
          </span>
          <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontWeight: 600 }}>{current + 1} / {total}</span>
        </div>
      </div>

      {/* Question */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px' }}>
        <div style={{ maxWidth: 620, width: '100%' }}>

          {/* Question card */}
          <div style={{ background: cardBg, borderRadius: 20, padding: '32px', marginBottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: `1px solid ${border}` }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: levelColor, marginBottom: 14 }}>
              Question {current + 1}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: text, lineHeight: 1.5, margin: 0 }}>
              {q.question}
            </h2>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {q.options.map((opt, i) => {
              const isSelected = selected === i
              const isCorrect  = i === q.answer
              let optBg = cardBg, optBorder = `1.5px solid ${borderFm}`, optColor = textBody

              if (revealed) {
                if (isCorrect) { optBg = '#F0FDF4'; optBorder = `2px solid #22C55E`; optColor = '#15803D' }
                else if (isSelected && !isCorrect) { optBg = '#FEF2F2'; optBorder = `2px solid #EF4444`; optColor = '#B91C1C' }
              } else if (isSelected) {
                optBg = '#EFF6FF'; optBorder = `2px solid #2563EB`; optColor = '#1D4ED8'
              }

              return (
                <button key={i} onClick={() => handleSelect(i)}
                  style={{ background: optBg, border: optBorder, borderRadius: 14, padding: '16px 20px', textAlign: 'left', cursor: revealed ? 'default' : 'pointer', fontFamily: 'inherit', color: optColor, fontWeight: isSelected || (revealed && isCorrect) ? 700 : 500, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s', boxShadow: isSelected && !revealed ? '0 4px 12px rgba(37,99,235,0.12)' : 'none' }}
                  onMouseEnter={e => { if (!revealed && !isSelected) e.currentTarget.style.borderColor = '#93C5FD' }}
                  onMouseLeave={e => { if (!revealed && !isSelected) e.currentTarget.style.borderColor = borderFm }}>
                  <span style={{ width: 32, height: 32, borderRadius: '50%', background: revealed && isCorrect ? '#22C55E' : revealed && isSelected && !isCorrect ? '#EF4444' : isSelected ? '#2563EB' : dark ? '#374151' : '#F3F4F6', color: (revealed && isCorrect) || (isSelected && !revealed) || (revealed && isSelected && !isCorrect) ? 'white' : textFaint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0, transition: 'all 0.2s' }}>
                    {revealed && isCorrect ? '✓' : revealed && isSelected && !isCorrect ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>

          {/* Action */}
          {!revealed ? (
            <button onClick={handleConfirm} disabled={selected === null}
              style={{ width: '100%', background: selected !== null ? 'linear-gradient(135deg,#2563EB,#7C3AED)' : (dark ? '#374151' : '#E5E7EB'), color: selected !== null ? 'white' : textFaint, border: 'none', borderRadius: 14, padding: '16px', fontWeight: 700, fontSize: '1rem', cursor: selected !== null ? 'pointer' : 'not-allowed', fontFamily: 'inherit', transition: 'all 0.2s', boxShadow: selected !== null ? '0 6px 20px rgba(37,99,235,0.3)' : 'none' }}>
              Confirm Answer
            </button>
          ) : (
            <div>
              <div style={{ background: selected === q.answer ? '#F0FDF4' : '#FEF2F2', border: `1px solid ${selected === q.answer ? '#BBF7D0' : '#FECACA'}`, borderRadius: 12, padding: '12px 16px', marginBottom: 14, color: selected === q.answer ? '#15803D' : '#B91C1C', fontWeight: 600, fontSize: '0.875rem' }}>
                {selected === q.answer ? '✅ Correct!' : `❌ The correct answer is: ${q.options[q.answer]}`}
              </div>
              <button onClick={handleNext}
                style={{ width: '100%', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', color: 'white', border: 'none', borderRadius: 14, padding: '16px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 6px 20px rgba(37,99,235,0.3)' }}>
                {current < total - 1 ? 'Next Question →' : 'See My Results 🎯'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
