import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { COURSES, loadProgress, saveProgress, getCourseById } from '../data/courseData'

// ── Exercise: Multiple Choice ──────────────────────────────────────────────
function MultipleChoice({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const isCorrect = selected === exercise.answer

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.15rem', color: '#111827', marginBottom: 20, lineHeight: 1.5 }}>
        {exercise.question}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {exercise.options.map((opt, i) => {
          let bg = 'white', border = '#E5E7EB', color = '#374151'
          if (confirmed) {
            if (i === exercise.answer) { bg = '#DCFCE7'; border = '#22C55E'; color = '#166534' }
            else if (i === selected) { bg = '#FEE2E2'; border = '#EF4444'; color = '#991B1B' }
          } else if (selected === i) { bg = '#EFF6FF'; border = '#2563EB'; color = '#1D4ED8' }
          return (
            <button key={i} onClick={() => { if (!confirmed) setSelected(i) }}
              style={{ padding: '13px 18px', border: `2px solid ${border}`, borderRadius: 12, background: bg, color, fontWeight: selected === i || (confirmed && i === exercise.answer) ? 600 : 400, fontSize: '0.9rem', fontFamily: 'inherit', textAlign: 'left', cursor: confirmed ? 'default' : 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', border: `2px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>
                {confirmed && i === exercise.answer ? '✓' : confirmed && i === selected && i !== exercise.answer ? '✗' : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
      {!confirmed ? (
        <button onClick={() => { if (selected !== null) { setConfirmed(true); onAnswer(isCorrect) } }} disabled={selected === null}
          style={{ width: '100%', padding: 13, borderRadius: 12, background: selected !== null ? '#2563EB' : '#E5E7EB', color: selected !== null ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: selected !== null ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          Check Answer
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.3rem' }}>{isCorrect ? '🎉' : '💡'}</span>
          {isCorrect ? 'Correct! Great job!' : `Correct answer: "${exercise.options[exercise.answer]}"`}
        </div>
      )}
    </div>
  )
}

// ── Exercise: Fill Blank ───────────────────────────────────────────────────
function FillBlank({ exercise, onAnswer }) {
  const [input, setInput] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const inputRef = useRef(null)
  useEffect(() => { inputRef.current?.focus() }, [])

  // Accept multiple correct answers separated by /
  const correctAnswers = exercise.answer.split(' / ').map(a => a.trim().toLowerCase())
  const isCorrect = correctAnswers.some(a => input.trim().toLowerCase() === a)

  const check = () => { if (input.trim()) { setConfirmed(true); onAnswer(isCorrect) } }

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.15rem', color: '#111827', marginBottom: 8, lineHeight: 1.5 }}>{exercise.question}</h3>
      {exercise.hint && <p style={{ color: '#9CA3AF', fontSize: '0.8rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>💡 {exercise.hint}</p>}
      <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && !confirmed) check() }}
        disabled={confirmed} placeholder="Type your answer..."
        style={{ width: '100%', padding: '13px 16px', border: `2px solid ${confirmed ? (isCorrect ? '#22C55E' : '#EF4444') : '#E5E7EB'}`, borderRadius: 12, fontSize: '1rem', fontFamily: 'inherit', outline: 'none', background: confirmed ? (isCorrect ? '#DCFCE7' : '#FEE2E2') : 'white', marginBottom: 12, transition: 'all 0.2s' }} />
      {!confirmed ? (
        <button onClick={check} disabled={!input.trim()}
          style={{ width: '100%', padding: 13, borderRadius: 12, background: input.trim() ? '#2563EB' : '#E5E7EB', color: input.trim() ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: input.trim() ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          Check Answer
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{isCorrect ? '🎉' : '💡'}</span>
          {isCorrect ? 'Perfect! ✓' : `Correct answer: "${exercise.answer}"`}
        </div>
      )}
    </div>
  )
}

// ── Exercise: Match ────────────────────────────────────────────────────────
function MatchExercise({ exercise, onAnswer }) {
  const [leftSel, setLeftSel] = useState(null)
  const [matched, setMatched]  = useState({})
  const [wrongPair, setWrongPair] = useState(null)
  const [done, setDone]        = useState(false)
  const pairs = exercise.pairs
  const [shuffledRight] = useState(() => [...pairs.map(p => p[1])].sort(() => Math.random() - 0.5))

  const handleLeft  = (i)   => { if (done) return; setLeftSel(i) }
  const handleRight = (val) => {
    if (done || leftSel === null) return
    const correct = pairs[leftSel][1] === val
    if (correct) {
      const nm = { ...matched, [leftSel]: val }
      setMatched(nm); setLeftSel(null)
      if (Object.keys(nm).length === pairs.length) { setDone(true); onAnswer(true) }
    } else {
      setWrongPair(val)
      setTimeout(() => { setWrongPair(null); setLeftSel(null) }, 800)
    }
  }
  const isRightMatched = v => Object.values(matched).includes(v)

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', marginBottom: 20 }}>{exercise.question}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {pairs.map((pair, i) => (
            <button key={i} onClick={() => handleLeft(i)} disabled={matched[i] !== undefined}
              style={{ padding: '11px 14px', border: `2px solid ${matched[i] ? '#22C55E' : leftSel === i ? '#2563EB' : '#E5E7EB'}`, borderRadius: 10, background: matched[i] ? '#DCFCE7' : leftSel === i ? '#EFF6FF' : 'white', color: matched[i] ? '#166534' : leftSel === i ? '#1D4ED8' : '#374151', fontWeight: 600, fontSize: '0.875rem', cursor: matched[i] ? 'default' : 'pointer', fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.2s' }}>
              {matched[i] ? '✓ ' : ''}{pair[0]}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {shuffledRight.map((val, i) => (
            <button key={i} onClick={() => handleRight(val)} disabled={isRightMatched(val)}
              style={{ padding: '11px 14px', border: `2px solid ${isRightMatched(val) ? '#22C55E' : wrongPair === val ? '#EF4444' : '#E5E7EB'}`, borderRadius: 10, background: isRightMatched(val) ? '#DCFCE7' : wrongPair === val ? '#FEE2E2' : 'white', color: isRightMatched(val) ? '#166534' : wrongPair === val ? '#991B1B' : '#374151', fontWeight: 600, fontSize: '0.875rem', cursor: isRightMatched(val) ? 'default' : leftSel !== null ? 'pointer' : 'not-allowed', fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.2s' }}>
              {val}
            </button>
          ))}
        </div>
      </div>
      {done && <div style={{ marginTop: 14, padding: '12px 16px', borderRadius: 12, background: '#DCFCE7', color: '#166534', fontWeight: 600, fontSize: '0.9rem' }}>🎉 All matched correctly!</div>}
    </div>
  )
}

// ── Exercise: Reorder ──────────────────────────────────────────────────────
function ReorderExercise({ exercise, onAnswer }) {
  const [available, setAvailable] = useState(() => [...exercise.words].sort(() => Math.random() - 0.5))
  const [sentence, setSentence]   = useState([])
  const [confirmed, setConfirmed] = useState(false)

  const addWord    = (w, i) => { if (confirmed) return; setSentence(s => [...s, w]); setAvailable(a => a.filter((_, j) => j !== i)) }
  const removeWord = (w, i) => { if (confirmed) return; setAvailable(a => [...a, w]); setSentence(s => s.filter((_, j) => j !== i)) }

  const isCorrect = sentence.join(' ').toLowerCase() === exercise.answer.toLowerCase()
  const check = () => { setConfirmed(true); onAnswer(isCorrect) }

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', marginBottom: 16 }}>{exercise.question}</h3>
      <div style={{ minHeight: 52, border: `2px dashed ${confirmed ? (isCorrect ? '#22C55E' : '#EF4444') : '#D1D5DB'}`, borderRadius: 12, padding: '10px 14px', marginBottom: 14, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', background: confirmed ? (isCorrect ? '#DCFCE7' : '#FEE2E2') : '#FAFAFA' }}>
        {sentence.length === 0 && <span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Tap words to build your sentence...</span>}
        {sentence.map((w, i) => (
          <button key={i} onClick={() => removeWord(w, i)} disabled={confirmed}
            style={{ padding: '7px 14px', background: '#2563EB', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', cursor: confirmed ? 'default' : 'pointer', fontFamily: 'inherit' }}>
            {w}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {available.map((w, i) => (
          <button key={i} onClick={() => addWord(w, i)} disabled={confirmed}
            style={{ padding: '8px 14px', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.color = '#1D4ED8' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151' }}>
            {w}
          </button>
        ))}
      </div>
      {!confirmed ? (
        <button onClick={check} disabled={sentence.length === 0}
          style={{ width: '100%', padding: 13, borderRadius: 12, background: sentence.length > 0 ? '#2563EB' : '#E5E7EB', color: sentence.length > 0 ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: sentence.length > 0 ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          Check Answer
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{isCorrect ? '🎉' : '💡'}</span>
          {isCorrect ? 'Correct!' : `Correct: "${exercise.answer}"`}
        </div>
      )}
    </div>
  )
}

// ── Exercise: Translate ────────────────────────────────────────────────────
function TranslateExercise({ exercise, onAnswer }) {
  return <FillBlank exercise={exercise} onAnswer={onAnswer} />
}

// ── Exercise: Drag-Drop (word sorting) ────────────────────────────────────
function DragDrop({ exercise, onAnswer }) {
  const [slots, setSlots]     = useState(Array(exercise.words.length).fill(null))
  const [bank, setBank]       = useState(() => exercise.words.map((w, i) => ({ word: w, id: i })).sort(() => Math.random() - 0.5))
  const [dragging, setDragging] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const isCorrect = slots.every((s, i) => s?.word === exercise.answer.split(' ')[i])

  const handleDragStart = (item, source) => setDragging({ ...item, source })
  const handleDropSlot  = (slotIdx) => {
    if (!dragging || confirmed) return
    const newSlots = [...slots]
    const newBank  = [...bank]
    if (dragging.source === 'bank') {
      if (newSlots[slotIdx]) newBank.push(newSlots[slotIdx])
      newSlots[slotIdx] = dragging
      setBank(newBank.filter(b => b.id !== dragging.id))
    } else {
      const fromSlot = dragging.slotIdx
      const displaced = newSlots[slotIdx]
      newSlots[slotIdx] = dragging
      newSlots[fromSlot] = displaced
    }
    setSlots(newSlots)
    setDragging(null)
  }
  const handleDropBank = () => {
    if (!dragging || dragging.source !== 'slot' || confirmed) return
    const newSlots = [...slots]
    newSlots[dragging.slotIdx] = null
    setSlots(newSlots)
    setBank(b => [...b, dragging])
    setDragging(null)
  }
  const handleCheck = () => { setConfirmed(true); onAnswer(isCorrect) }

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', marginBottom: 8, lineHeight: 1.5 }}>{exercise.question}</h3>
      <p style={{ color: '#9CA3AF', fontSize: '0.78rem', marginBottom: 16 }}>🖱️ Drag and drop the words into the correct order</p>

      {/* Slots */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, minHeight: 52, padding: '8px 12px', background: '#F9FAFB', borderRadius: 12, border: `2px dashed ${confirmed ? (isCorrect ? '#22C55E' : '#EF4444') : '#D1D5DB'}` }}
        onDragOver={e => e.preventDefault()} onDrop={e => e.target === e.currentTarget && handleDropBank()}>
        {slots.map((slot, i) => (
          <div key={i}
            onDragOver={e => e.preventDefault()} onDrop={() => handleDropSlot(i)}
            style={{ minWidth: 80, height: 40, border: `2px dashed ${slot ? '#2563EB' : '#D1D5DB'}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: slot ? '#EFF6FF' : 'white' }}>
            {slot && (
              <div draggable={!confirmed} onDragStart={() => handleDragStart({ ...slot, slotIdx: i }, 'slot')}
                style={{ padding: '6px 12px', background: '#2563EB', color: 'white', borderRadius: 6, fontWeight: 600, fontSize: '0.875rem', cursor: 'grab' }}>
                {slot.word}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Word bank */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '10px 12px', background: 'white', borderRadius: 12, border: '1px solid #E5E7EB', marginBottom: 14 }}
        onDragOver={e => e.preventDefault()} onDrop={handleDropBank}>
        {bank.map(item => (
          <div key={item.id} draggable={!confirmed} onDragStart={() => handleDragStart(item, 'bank')}
            style={{ padding: '7px 14px', background: '#F3F4F6', color: '#374151', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', cursor: 'grab', border: '1px solid #E5E7EB' }}>
            {item.word}
          </div>
        ))}
        {bank.length === 0 && <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>All words placed!</span>}
      </div>

      {!confirmed ? (
        <button onClick={handleCheck} disabled={slots.some(s => !s)}
          style={{ width: '100%', padding: 13, borderRadius: 12, background: !slots.some(s => !s) ? '#2563EB' : '#E5E7EB', color: !slots.some(s => !s) ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: !slots.some(s => !s) ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          Check Order
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{isCorrect ? '🎉' : '💡'}</span>
          {isCorrect ? 'Perfect order!' : `Correct: "${exercise.answer}"`}
        </div>
      )}
    </div>
  )
}

// ── Lesson type icons ──────────────────────────────────────────────────────
const TYPE_ICONS = { vocabulary: '📚', grammar: '📝', reading: '📖', writing: '✍️', speaking: '🗣️', listening: '🎧', dialogue: '💬', story: '📗' }

// ── Main Lesson Player ─────────────────────────────────────────────────────
export default function LessonPlayer() {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()

  const course    = getCourseById(courseId)
  const allLessons = course?.units.flatMap(u => u.lessons) || []
  const lesson     = allLessons.find(l => l.id === lessonId)

  const [phase,        setPhase]        = useState('intro')
  const [exIdx,        setExIdx]        = useState(0)
  const [hearts,       setHearts]       = useState(3)
  const [xpEarned,     setXpEarned]     = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [waitingNext,  setWaitingNext]  = useState(false)
  const [lastCorrect,  setLastCorrect]  = useState(null)

  useEffect(() => { if (!course || !lesson) navigate('/courses') }, [])
  if (!course || !lesson) return null

  const exercises  = lesson.content.exercises || []
  const totalEx    = exercises.length
  const progress   = Math.round((exIdx / Math.max(totalEx, 1)) * 100)

  const handleAnswer = (correct) => {
    setLastCorrect(correct)
    if (correct) {
      setCorrectCount(c => c + 1)
      setXpEarned(x => x + Math.round(lesson.xp / Math.max(totalEx, 1)))
    } else {
      setHearts(h => Math.max(0, h - 1))
    }
    setWaitingNext(true)
  }

  const handleNext = () => {
    setWaitingNext(false); setLastCorrect(null)
    if (exIdx + 1 >= totalEx || hearts === 0) {
      const prog = loadProgress(courseId)
      if (!prog.completedLessons.includes(lessonId)) {
        prog.completedLessons.push(lessonId)
        prog.xp = (prog.xp || 0) + lesson.xp
        saveProgress(courseId, prog)
        // Record daily activity for streak
        const streakData = JSON.parse(localStorage.getItem('lb_streak') || '{"streak":0,"lastDate":null}')
        const today = new Date().toDateString()
        if (streakData.lastDate !== today) {
          const yesterday = new Date(Date.now() - 86400000).toDateString()
          const newStreak = streakData.lastDate === yesterday ? streakData.streak + 1 : 1
          localStorage.setItem('lb_streak', JSON.stringify({ streak: newStreak, lastDate: today }))
        }
      }
      setPhase('complete')
    } else {
      setExIdx(i => i + 1)
    }
  }

  const lessonIdx  = allLessons.findIndex(l => l.id === lessonId)
  const nextLesson = allLessons[lessonIdx + 1]
  const accuracy   = totalEx > 0 ? Math.round((correctCount / totalEx) * 100) : 100

  // ── INTRO ──────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    const { vocabulary, explanation, text, dialogue, phrases, sampleAnswer, writingPrompt } = lesson.content

    return (
      <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14, position: 'sticky', top: 0, zIndex: 10 }}>
          <button onClick={() => navigate(`/learn/${courseId}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 6 }}>✕ Exit</button>
          <div style={{ height: 20, width: 1, background: '#E5E7EB' }} />
          <span style={{ fontSize: '1.2rem' }}>{TYPE_ICONS[lesson.type] || '📚'}</span>
          <span style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem', flex: 1 }}>{lesson.title}</span>
          <span style={{ background: course.color + '18', color: course.color, padding: '4px 10px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 700 }}>⚡ +{lesson.xp} XP</span>
        </div>

        <div style={{ flex: 1, padding: '28px 20px', maxWidth: 720, margin: '0 auto', width: '100%' }}>
          <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: 24, lineHeight: 1.7 }}>{lesson.content.intro}</p>

          {/* Vocabulary cards */}
          {vocabulary && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 24 }}>
              {vocabulary.map((v, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 14, padding: 16, border: '1px solid #E5E7EB', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.05rem', fontWeight: 700, color: course.color, marginBottom: 4 }}>{v.word}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginBottom: 8 }}>{v.translation}</div>
                  <div style={{ fontSize: '0.82rem', color: '#4B5563', fontStyle: 'italic', lineHeight: 1.5 }}>"{v.example}"</div>
                </div>
              ))}
            </div>
          )}

          {/* Grammar explanation */}
          {explanation && (
            <div style={{ background: 'white', borderRadius: 16, padding: 22, border: '1px solid #E5E7EB', marginBottom: 20, lineHeight: 1.85, fontSize: '0.9rem', color: '#374151' }}
              dangerouslySetInnerHTML={{ __html: explanation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br/>') }} />
          )}

          {/* Dialogue */}
          {dialogue && (
            <div style={{ background: 'white', borderRadius: 16, padding: 22, border: `2px solid ${course.color}30`, marginBottom: 20 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: course.color, marginBottom: 12 }}>💬 Dialogue</div>
              <div style={{ lineHeight: 2, fontSize: '0.9rem', color: '#374151' }}
                dangerouslySetInnerHTML={{ __html: dialogue.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827">$1</strong>').replace(/\n/g, '<br/>') }} />
            </div>
          )}

          {/* Story text */}
          {text && (
            <div style={{ background: 'white', borderRadius: 16, padding: 22, border: `2px solid ${course.color}25`, marginBottom: 20 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: course.color, marginBottom: 12 }}>📖 Reading</div>
              <div style={{ lineHeight: 2, fontSize: '0.9rem', color: '#374151' }}
                dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111827">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/\n/g, '<br/>') }} />
            </div>
          )}

          {/* Writing sample */}
          {sampleAnswer && (
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontWeight: 700, color: '#111827', marginBottom: 10, fontSize: '0.9rem' }}>📝 Sample Answer</h4>
              <div style={{ background: '#F0FDF4', border: '1px solid #A7F3D0', borderRadius: 12, padding: '14px 18px', fontSize: '0.875rem', color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {sampleAnswer}
              </div>
            </div>
          )}

          {/* Speaking phrases */}
          {phrases && (
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontWeight: 700, color: '#111827', marginBottom: 10, fontSize: '0.9rem' }}>🗣️ Key Phrases</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {phrases.map((p, i) => (
                  <div key={i} style={{ background: course.color + '10', borderLeft: `3px solid ${course.color}`, borderRadius: '0 10px 10px 0', padding: '10px 14px', fontSize: '0.875rem', color: '#374151' }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Examples */}
          {lesson.content.examples && (
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontWeight: 700, color: '#111827', marginBottom: 10, fontSize: '0.9rem' }}>📌 Examples</h4>
              {lesson.content.examples.map((ex, i) => (
                <div key={i} style={{ padding: '9px 14px', background: course.color + '0D', borderLeft: `3px solid ${course.color}`, borderRadius: '0 10px 10px 0', marginBottom: 8, fontSize: '0.875rem', color: '#374151', fontStyle: 'italic' }}>
                  {ex}
                </div>
              ))}
            </div>
          )}

          <button onClick={() => setPhase('exercises')}
            style={{ width: '100%', padding: 16, background: course.color, color: 'white', border: 'none', borderRadius: 14, fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 4px 14px ${course.color}40` }}>
            {totalEx > 0 ? 'Start Practice Exercises →' : 'Mark Complete ✓'}
          </button>

          {totalEx === 0 && (
            <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.8rem', marginTop: 12 }}>This lesson is reading/study only — no exercises</p>
          )}
        </div>
      </div>
    )
  }

  // ── EXERCISES ──────────────────────────────────────────────────────────
  if (phase === 'exercises') {
    const exercise = exercises[exIdx]

    return (
      <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', flexDirection: 'column' }}>
        {/* Progress bar */}
        <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', padding: '12px 20px', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, maxWidth: 720, margin: '0 auto' }}>
            <button onClick={() => navigate(`/learn/${courseId}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontFamily: 'inherit', padding: 4 }}>✕</button>
            <div style={{ flex: 1, height: 10, background: '#F3F4F6', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: course.color, width: `${progress}%`, borderRadius: 10, transition: 'width 0.4s ease' }} />
            </div>
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(3)].map((_, i) => <span key={i} style={{ fontSize: '1rem', opacity: i < hearts ? 1 : 0.2 }}>❤️</span>)}
            </div>
            <span style={{ color: course.color, fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>⚡{xpEarned}</span>
          </div>
        </div>

        {hearts === 0 ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <div style={{ textAlign: 'center', maxWidth: 360 }}>
              <div style={{ fontSize: '4rem', marginBottom: 12 }}>💔</div>
              <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', color: '#111827', marginBottom: 8 }}>Out of hearts!</h2>
              <p style={{ color: '#6B7280', marginBottom: 24 }}>Review the material and try again — you've got this!</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button onClick={() => { setPhase('intro'); setExIdx(0); setHearts(3); setXpEarned(0); setCorrectCount(0) }}
                  style={{ padding: '12px 24px', borderRadius: 12, background: course.color, color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                  🔄 Try Again
                </button>
                <button onClick={() => navigate(`/learn/${courseId}`)}
                  style={{ padding: '12px 24px', borderRadius: 12, background: 'white', color: '#6B7280', border: '2px solid #E5E7EB', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                  ← Back
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ flex: 1, padding: '28px 20px', maxWidth: 680, margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#9CA3AF', marginBottom: 18 }}>
              Question {exIdx + 1} of {totalEx}
            </div>

            {exercise.type === 'multiple_choice' && <MultipleChoice  key={exIdx} exercise={exercise} onAnswer={handleAnswer} />}
            {exercise.type === 'fill_blank'       && <FillBlank       key={exIdx} exercise={exercise} onAnswer={handleAnswer} />}
            {exercise.type === 'match'            && <MatchExercise   key={exIdx} exercise={exercise} onAnswer={handleAnswer} />}
            {exercise.type === 'reorder'          && <ReorderExercise key={exIdx} exercise={exercise} onAnswer={handleAnswer} />}
            {exercise.type === 'translate'        && <TranslateExercise key={exIdx} exercise={exercise} onAnswer={handleAnswer} />}
            {exercise.type === 'drag_drop'        && <DragDrop         key={exIdx} exercise={exercise} onAnswer={handleAnswer} />}

            {waitingNext && (
              <button onClick={handleNext}
                style={{ width: '100%', padding: 14, borderRadius: 12, background: lastCorrect ? '#22C55E' : course.color, color: 'white', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', marginTop: 16, boxShadow: `0 4px 14px ${lastCorrect ? '#22C55E' : course.color}40` }}>
                {exIdx + 1 >= totalEx ? 'Finish Lesson 🎉' : 'Continue →'}
              </button>
            )}
          </div>
        )}
      </div>
    )
  }

  // ── COMPLETE ───────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: course.color + '08', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: 'white', borderRadius: 24, padding: 40, maxWidth: 440, width: '100%', textAlign: 'center', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', border: `2px solid ${course.color}20` }}>
        <div style={{ fontSize: '4rem', marginBottom: 12 }}>
          {accuracy >= 80 ? '🌟' : accuracy >= 60 ? '⭐' : '💪'}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.8rem', color: '#111827', marginBottom: 6 }}>Lesson Complete!</h2>
        <p style={{ color: '#6B7280', marginBottom: 28 }}>
          {accuracy >= 80 ? 'Outstanding work! Keep it up!' : accuracy >= 60 ? 'Good effort! Practice makes perfect!' : 'Keep practicing — you\'re improving!'}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 28 }}>
          {[['⚡', `+${lesson.xp}`, 'XP Earned'], ['🎯', `${accuracy}%`, 'Accuracy'], ['❤️', `${hearts}/3`, 'Hearts Left']].map(([icon, val, label]) => (
            <div key={label} style={{ background: '#F9FAFB', borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: '1.3rem' }}>{icon}</div>
              <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.3rem', color: course.color, lineHeight: 1.1 }}>{val}</div>
              <div style={{ fontSize: '0.65rem', color: '#9CA3AF', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {nextLesson && (
            <button onClick={() => navigate(`/learn/${courseId}/${nextLesson.id}`)}
              style={{ padding: 14, borderRadius: 12, background: course.color, color: 'white', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 4px 14px ${course.color}40` }}>
              Next Lesson: {nextLesson.title} →
            </button>
          )}
          <button onClick={() => navigate(`/learn/${courseId}`)}
            style={{ padding: 14, borderRadius: 12, background: 'white', color: '#6B7280', border: '2px solid #E5E7EB', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit' }}>
            Back to Course Map
          </button>
          {accuracy < 70 && (
            <button onClick={() => { setPhase('intro'); setExIdx(0); setHearts(3); setXpEarned(0); setCorrectCount(0) }}
              style={{ padding: 14, borderRadius: 12, background: '#FEF3C7', color: '#92400E', border: '2px solid #FDE68A', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit' }}>
              🔄 Retry for Better Score
            </button>
          )}
        </div>
      </div>
    </div>
  )
}