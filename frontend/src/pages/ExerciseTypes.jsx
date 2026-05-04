import { useState, useRef } from 'react'

// ── Drag & Drop Sentence Builder ───────────────────────────────────────────
export function DragDrop({ exercise, onAnswer }) {
  const [sentence,  setSentence]  = useState([])
  const [available, setAvailable] = useState(() => [...exercise.words].sort(() => Math.random() - 0.5))
  const [confirmed, setConfirmed] = useState(false)
  const [dragging,  setDragging]  = useState(null)

  const addWord = (word, idx) => {
    if (confirmed) return
    setSentence(s => [...s, word])
    setAvailable(a => a.filter((_, i) => i !== idx))
  }
  const removeWord = (word, idx) => {
    if (confirmed) return
    setAvailable(a => [...a, word])
    setSentence(s => s.filter((_, i) => i !== idx))
  }

  const checkAnswer = () => {
    const correct = sentence.join(' ').toLowerCase() === exercise.answer.toLowerCase()
    setConfirmed(true)
    onAnswer(correct)
  }

  const isCorrect = sentence.join(' ').toLowerCase() === exercise.answer.toLowerCase()

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.15rem', color: '#111827', marginBottom: 8, lineHeight: 1.5 }}>{exercise.question}</h3>
      {exercise.hint && <p style={{ color: '#9CA3AF', fontSize: '0.78rem', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 5 }}>💡 {exercise.hint}</p>}

      {/* Drop zone */}
      <div style={{ minHeight: 56, border: `2px dashed ${confirmed ? (isCorrect ? '#22C55E' : '#EF4444') : '#D1D5DB'}`, borderRadius: 14, padding: '10px 14px', marginBottom: 16, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', background: confirmed ? (isCorrect ? '#F0FFF4' : '#FFF5F5') : '#FAFAFA', transition: 'all 0.2s' }}>
        {sentence.length === 0 && <span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Drag or tap words here to build your sentence...</span>}
        {sentence.map((word, i) => (
          <button key={i} onClick={() => removeWord(word, i)} disabled={confirmed}
            style={{ padding: '7px 14px', background: confirmed ? (isCorrect ? '#22C55E' : '#EF4444') : '#2563EB', color: 'white', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', cursor: confirmed ? 'default' : 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
            {word}
          </button>
        ))}
      </div>

      {/* Word bank */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20, padding: '14px', background: '#F9FAFB', borderRadius: 12, minHeight: 52 }}>
        {available.map((word, i) => (
          <button key={i} onClick={() => addWord(word, i)} disabled={confirmed}
            style={{ padding: '8px 14px', background: 'white', color: '#374151', border: '1.5px solid #E5E7EB', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
            onMouseEnter={e => { if (!confirmed) { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.color = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-2px)' }}}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151'; e.currentTarget.style.transform = 'none' }}>
            {word}
          </button>
        ))}
      </div>

      {!confirmed ? (
        <button onClick={checkAnswer} disabled={sentence.length === 0}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: sentence.length > 0 ? '#2563EB' : '#E5E7EB', color: sentence.length > 0 ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: sentence.length > 0 ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          ✓ Check Answer
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.3rem' }}>{isCorrect ? '🎉' : '💡'}</span>
          {isCorrect ? 'Perfect sentence!' : `Correct order: "${exercise.answer}"`}
        </div>
      )}
    </div>
  )
}

// ── Image-Based Question ───────────────────────────────────────────────────
export function ImageQuestion({ exercise, onAnswer }) {
  const [selected,  setSelected]  = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const EMOJI_MAP = {
    kitchen: '🍳', bedroom: '🛏️', bathroom: '🚿', office: '💼',
    airport: '✈️', restaurant: '🍽️', hospital: '🏥', school: '🏫',
    park: '🌳', beach: '🏖️', mountain: '⛰️', city: '🏙️',
    dog: '🐕', cat: '🐈', bird: '🦅', fish: '🐠',
    apple: '🍎', banana: '🍌', orange: '🍊', grape: '🍇',
    car: '🚗', bus: '🚌', train: '🚂', plane: '✈️',
    happy: '😊', sad: '😢', angry: '😠', surprised: '😮',
    doctor: '👨‍⚕️', teacher: '👨‍🏫', chef: '👨‍🍳', engineer: '👨‍💻',
    morning: '🌅', afternoon: '☀️', evening: '🌆', night: '🌙',
    hot: '🔥', cold: '❄️', rainy: '🌧️', sunny: '☀️',
  }

  const getEmoji = (label) => {
    const lower = label.toLowerCase()
    for (const [key, emoji] of Object.entries(EMOJI_MAP)) {
      if (lower.includes(key)) return emoji
    }
    return '🖼️'
  }

  const isCorrect = selected === exercise.answer

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.15rem', color: '#111827', marginBottom: 20, lineHeight: 1.5 }}>{exercise.question}</h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 20 }}>
        {exercise.options.map((opt, i) => {
          let border = '2px solid #E5E7EB', bg = 'white', color = '#374151'
          if (confirmed) {
            if (i === exercise.answer)           { border = '2px solid #22C55E'; bg = '#DCFCE7'; color = '#166534' }
            else if (i === selected)             { border = '2px solid #EF4444'; bg = '#FEE2E2'; color = '#991B1B' }
          } else if (selected === i) { border = '2px solid #2563EB'; bg = '#EFF6FF'; color = '#1D4ED8' }

          return (
            <button key={i} onClick={() => { if (!confirmed) setSelected(i) }}
              style={{ padding: '20px 12px', border, borderRadius: 14, background: bg, color, cursor: confirmed ? 'default' : 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
              onMouseEnter={e => { if (!confirmed && selected !== i) e.currentTarget.style.borderColor = '#93C5FD' }}
              onMouseLeave={e => { if (!confirmed && selected !== i) e.currentTarget.style.borderColor = '#E5E7EB' }}>
              <span style={{ fontSize: '2.5rem' }}>{getEmoji(typeof opt === 'string' ? opt : opt.label || '')}</span>
              <span style={{ fontWeight: 600, fontSize: '0.875rem', textAlign: 'center' }}>{typeof opt === 'string' ? opt : opt.label}</span>
              {confirmed && i === exercise.answer && <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>✓ Correct</span>}
            </button>
          )
        })}
      </div>

      {!confirmed ? (
        <button onClick={() => { if (selected !== null) { setConfirmed(true); onAnswer(isCorrect) } }} disabled={selected === null}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: selected !== null ? '#2563EB' : '#E5E7EB', color: selected !== null ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: selected !== null ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          ✓ Check Answer
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{isCorrect ? '🎉' : '💡'}</span>
          {isCorrect ? 'Correct! Great job!' : `The answer is: "${typeof exercise.options[exercise.answer] === 'string' ? exercise.options[exercise.answer] : exercise.options[exercise.answer]?.label}"`}
        </div>
      )}
    </div>
  )
}

// ── Audio Transcript Exercise ──────────────────────────────────────────────
export function AudioTranscript({ exercise, onAnswer }) {
  const [playing,   setPlaying]   = useState(false)
  const [playCount, setPlayCount] = useState(0)
  const [input,     setInput]     = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const timerRef = useRef(null)

  const handlePlay = () => {
    if (playing) return
    setPlaying(true)
    setPlayCount(c => c + 1)
    // Simulate audio playing
    timerRef.current = setTimeout(() => setPlaying(false), (exercise.text?.split(' ').length || 10) * 400)
  }

  const checkAnswer = () => {
    const userWords   = input.trim().toLowerCase().replace(/[.,!?]/g, '')
    const correctWords = exercise.answer.toLowerCase().replace(/[.,!?]/g, '')
    // Allow 80% match
    const uArr = userWords.split(' ')
    const cArr = correctWords.split(' ')
    const matches = uArr.filter(w => cArr.includes(w)).length
    const correct = matches / cArr.length >= 0.75
    setConfirmed(true)
    onAnswer(correct)
  }

  const isCorrect = input.trim().toLowerCase().replace(/[.,!?]/g, '') === exercise.answer.toLowerCase().replace(/[.,!?]/g, '')

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.15rem', color: '#111827', marginBottom: 8, lineHeight: 1.5 }}>{exercise.question}</h3>
      <p style={{ color: '#9CA3AF', fontSize: '0.78rem', marginBottom: 18 }}>🎧 Press play to hear the audio, then type what you hear.</p>

      {/* Audio player simulation */}
      <div style={{ background: 'linear-gradient(135deg,#1E3A5F,#2563EB)', borderRadius: 16, padding: '20px 24px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={handlePlay} disabled={playing}
          style={{ width: 52, height: 52, borderRadius: '50%', background: playing ? 'rgba(255,255,255,0.2)' : 'white', border: 'none', cursor: playing ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0, transition: 'all 0.2s' }}>
          {playing ? '⏸' : '▶️'}
        </button>

        {/* Waveform simulation */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 3 }}>
          {[...Array(24)].map((_, i) => (
            <div key={i} style={{ width: 3, borderRadius: 2, background: 'rgba(255,255,255,0.6)', height: playing ? `${Math.random() * 28 + 8}px` : '8px', transition: 'height 0.15s ease', animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>

        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
          {playCount > 0 ? `Played ${playCount}x` : 'Press ▶️ to listen'}
        </div>
      </div>

      {/* Show transcript after playing */}
      {playCount > 0 && (
        <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 12, padding: '12px 16px', marginBottom: 16, fontSize: '0.875rem', color: '#0C4A6E' }}>
          <span style={{ fontWeight: 700 }}>📝 Transcript: </span>
          <span style={{ fontStyle: 'italic' }}>{confirmed ? exercise.text : '— Type what you hear below —'}</span>
        </div>
      )}

      <textarea value={input} onChange={e => setInput(e.target.value)} disabled={confirmed || playCount === 0}
        placeholder={playCount === 0 ? 'Press ▶️ to listen first...' : 'Type what you heard...'}
        rows={3} style={{ width: '100%', padding: '12px 14px', border: `1.5px solid ${confirmed ? (isCorrect ? '#22C55E' : '#EF4444') : '#E5E7EB'}`, borderRadius: 12, fontSize: '0.9rem', fontFamily: 'inherit', outline: 'none', resize: 'none', background: playCount === 0 ? '#F9FAFB' : 'white', marginBottom: 14, color: '#374151' }} />

      {!confirmed ? (
        <button onClick={checkAnswer} disabled={!input.trim() || playCount === 0}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: input.trim() && playCount > 0 ? '#2563EB' : '#E5E7EB', color: input.trim() && playCount > 0 ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: input.trim() && playCount > 0 ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          ✓ Check My Answer
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: isCorrect ? '#DCFCE7' : '#FEE2E2', color: isCorrect ? '#166534' : '#991B1B', fontWeight: 600, fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: isCorrect ? 0 : 6 }}>
            <span>{isCorrect ? '🎉' : '💡'}</span>
            {isCorrect ? 'Perfect! Your listening is excellent!' : 'Close! The correct text was:'}
          </div>
          {!isCorrect && <div style={{ fontStyle: 'italic', fontWeight: 400, marginTop: 4 }}>"{exercise.answer}"</div>}
        </div>
      )}
    </div>
  )
}

// ── Real-Life Dialogue ─────────────────────────────────────────────────────
export function DialogueExercise({ exercise, onAnswer }) {
  const [step,       setStep]       = useState(0)
  const [selected,   setSelected]   = useState({})
  const [completed,  setCompleted]  = useState(false)
  const [score,      setScore]      = useState(0)

  const dialogue = exercise.dialogue || []
  const gaps     = dialogue.filter(line => line.isGap)

  const handleSelect = (gapIdx, optionIdx) => {
    if (completed) return
    setSelected(prev => ({ ...prev, [gapIdx]: optionIdx }))
  }

  const checkAll = () => {
    let correct = 0
    gaps.forEach((gap, i) => {
      if (selected[i] === gap.answer) correct++
    })
    setScore(correct)
    setCompleted(true)
    onAnswer(correct === gaps.length)
  }

  let gapCounter = -1

  return (
    <div>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.15rem', color: '#111827', marginBottom: 6, lineHeight: 1.5 }}>{exercise.question}</h3>
      <p style={{ color: '#9CA3AF', fontSize: '0.78rem', marginBottom: 20 }}>💬 Complete the dialogue by choosing the correct responses.</p>

      {/* Dialogue bubbles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, background: '#F9FAFB', borderRadius: 16, padding: '16px' }}>
        {dialogue.map((line, lineIdx) => {
          const isA = line.speaker === 'A'
          if (line.isGap) {
            gapCounter++
            const thisGap = gapCounter
            const chosen  = selected[thisGap]
            return (
              <div key={lineIdx} style={{ display: 'flex', flexDirection: isA ? 'row' : 'row-reverse', gap: 8, alignItems: 'flex-end' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: isA ? '#2563EB' : '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{line.speaker}</div>
                <div style={{ maxWidth: '75%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {line.options.map((opt, optIdx) => {
                      let bg = 'white', border = '1.5px solid #E5E7EB', color = '#374151'
                      if (completed) {
                        if (optIdx === line.answer)               { bg = '#DCFCE7'; border = '1.5px solid #22C55E'; color = '#166534' }
                        else if (optIdx === chosen && optIdx !== line.answer) { bg = '#FEE2E2'; border = '1.5px solid #EF4444'; color = '#991B1B' }
                      } else if (chosen === optIdx) { bg = '#EFF6FF'; border = '1.5px solid #2563EB'; color = '#1D4ED8' }

                      return (
                        <button key={optIdx} onClick={() => handleSelect(thisGap, optIdx)}
                          style={{ padding: '8px 14px', borderRadius: 12, border, background: bg, color, fontWeight: chosen === optIdx ? 700 : 400, fontSize: '0.85rem', cursor: completed ? 'default' : 'pointer', fontFamily: 'inherit', textAlign: isA ? 'left' : 'right', transition: 'all 0.15s' }}>
                          {String.fromCharCode(65 + optIdx)}. {opt}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          }

          return (
            <div key={lineIdx} style={{ display: 'flex', flexDirection: isA ? 'row' : 'row-reverse', gap: 8, alignItems: 'flex-end' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: isA ? '#2563EB' : '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{line.speaker}</div>
              <div style={{ padding: '10px 14px', borderRadius: isA ? '16px 16px 16px 4px' : '16px 16px 4px 16px', background: isA ? '#2563EB' : '#7C3AED', color: 'white', fontSize: '0.875rem', lineHeight: 1.5, maxWidth: '75%', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                {line.text}
              </div>
            </div>
          )
        })}
      </div>

      {!completed ? (
        <button onClick={checkAll} disabled={Object.keys(selected).length < gaps.length}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: Object.keys(selected).length >= gaps.length ? '#2563EB' : '#E5E7EB', color: Object.keys(selected).length >= gaps.length ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: Object.keys(selected).length >= gaps.length ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          ✓ Check Dialogue ({Object.keys(selected).length}/{gaps.length} answered)
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: score === gaps.length ? '#DCFCE7' : '#FEF3C7', color: score === gaps.length ? '#166534' : '#92400E', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{score === gaps.length ? '🎉' : '💡'}</span>
          {score}/{gaps.length} correct — {score === gaps.length ? 'Perfect dialogue!' : 'Review the highlighted answers above.'}
        </div>
      )}
    </div>
  )
}

// ── Story Reading Exercise ─────────────────────────────────────────────────
export function StoryExercise({ exercise, onAnswer }) {
  const [phase,     setPhase]     = useState('read') // read | questions
  const [answers,   setAnswers]   = useState({})
  const [confirmed, setConfirmed] = useState(false)

  const questions = exercise.questions || []
  const allAnswered = questions.every((_, i) => answers[i] !== undefined)

  const checkAnswers = () => {
    const correct = questions.filter((q, i) => answers[i] === q.answer).length
    setConfirmed(true)
    onAnswer(correct === questions.length)
  }

  if (phase === 'read') {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ fontSize: '1.5rem' }}>📖</span>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', margin: 0 }}>{exercise.title}</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.72rem', margin: 0 }}>Read the story, then answer questions</p>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: '20px 22px', border: '2px solid #DBEAFE', marginBottom: 20, lineHeight: 2, fontSize: '0.9rem', color: '#374151', maxHeight: 320, overflowY: 'auto' }}
          dangerouslySetInnerHTML={{ __html: exercise.story.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#1D4ED8">$1</strong>').replace(/\n/g, '<br/>') }} />

        <button onClick={() => setPhase('questions')}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: '#2563EB', color: 'white', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
          Answer Questions →
        </button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setPhase('read')} style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', marginBottom: 16, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
        ← Re-read story
      </button>
      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', marginBottom: 18 }}>Comprehension Questions</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 20 }}>
        {questions.map((q, qIdx) => (
          <div key={qIdx} style={{ background: '#F9FAFB', borderRadius: 14, padding: '14px 16px' }}>
            <p style={{ fontWeight: 700, color: '#111827', fontSize: '0.9rem', marginBottom: 10 }}>Q{qIdx+1}: {q.question}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {q.options.map((opt, optIdx) => {
                let bg = 'white', border = '1.5px solid #E5E7EB', color = '#374151'
                if (confirmed) {
                  if (optIdx === q.answer)                           { bg = '#DCFCE7'; border = '1.5px solid #22C55E'; color = '#166534' }
                  else if (optIdx === answers[qIdx] && optIdx !== q.answer) { bg = '#FEE2E2'; border = '1.5px solid #EF4444'; color = '#991B1B' }
                } else if (answers[qIdx] === optIdx) { bg = '#EFF6FF'; border = '1.5px solid #2563EB'; color = '#1D4ED8' }

                return (
                  <button key={optIdx} onClick={() => { if (!confirmed) setAnswers(a => ({ ...a, [qIdx]: optIdx })) }}
                    style={{ padding: '9px 13px', border, borderRadius: 9, background: bg, color, fontWeight: answers[qIdx] === optIdx ? 700 : 400, fontSize: '0.85rem', cursor: confirmed ? 'default' : 'pointer', fontFamily: 'inherit', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', border: `1.5px solid ${border.split(' ')[2]}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>
                      {confirmed && optIdx === q.answer ? '✓' : String.fromCharCode(65 + optIdx)}
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {!confirmed ? (
        <button onClick={checkAnswers} disabled={!allAnswered}
          style={{ width: '100%', padding: 14, borderRadius: 12, background: allAnswered ? '#2563EB' : '#E5E7EB', color: allAnswered ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: allAnswered ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
          ✓ Submit Answers ({Object.keys(answers).length}/{questions.length})
        </button>
      ) : (
        <div style={{ padding: '12px 16px', borderRadius: 12, background: '#DCFCE7', color: '#166534', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          🎉 {questions.filter((q, i) => answers[i] === q.answer).length}/{questions.length} correct!
        </div>
      )}
    </div>
  )
}