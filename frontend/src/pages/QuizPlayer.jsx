import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'

const QUIZZES = {
  default: {
    title: 'English Grammar Quiz',
    questions: [
      { id: 1, question: 'Which sentence is grammatically correct?', options: ['She don\'t like coffee.','She doesn\'t like coffee.','She not like coffee.','She isn\'t like coffee.'], answer: 1 },
      { id: 2, question: 'Choose the correct article: "___ apple a day keeps the doctor away."', options: ['A','An','The','No article'], answer: 1 },
      { id: 3, question: 'What is the past tense of "run"?', options: ['Runned','Ran','Run','Runed'], answer: 1 },
      { id: 4, question: 'Which word is a conjunction?', options: ['Quickly','Beautiful','Because','Running'], answer: 2 },
      { id: 5, question: 'Complete: "If I ___ you, I would study harder."', options: ['am','was','were','be'], answer: 2 },
    ]
  }
}

export default function QuizPlayer() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [phase, setPhase] = useState('intro') // intro | quiz | result
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showFeedback, setShowFeedback] = useState(false)

  const quiz = QUIZZES.default
  const question = quiz.questions[currentQ]
  const score = answers.filter(a => a.correct).length
  const percent = Math.round((score / quiz.questions.length) * 100)

  const handleSelect = (idx) => {
    if (showFeedback) return
    setSelected(idx)
  }

  const handleNext = () => {
    if (selected === null) return
    if (!showFeedback) {
      setShowFeedback(true)
      return
    }
    const correct = selected === question.answer
    setAnswers(prev => [...prev, { question: currentQ, selected, correct }])
    setShowFeedback(false)
    setSelected(null)
    if (currentQ + 1 < quiz.questions.length) {
      setCurrentQ(prev => prev + 1)
    } else {
      setPhase('result')
      // Update progress if enrolled
      if (courseId) {
        api.put(`/enrollments/progress/${courseId}`, { percent_complete: Math.min(100, percent) }).catch(() => {})
      }
    }
  }

  const handleRestart = () => {
    setPhase('intro')
    setCurrentQ(0)
    setSelected(null)
    setAnswers([])
    setShowFeedback(false)
  }

  // INTRO
  if (phase === 'intro') return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="card" style={{ maxWidth: 540, width: '100%', padding: 40, textAlign: 'center' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🎯</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: 12, color: 'var(--gray-900)' }}>{quiz.title}</h1>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32, lineHeight: 1.7 }}>
          Test your English grammar knowledge with {quiz.questions.length} questions. Take your time and choose carefully!
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 32 }}>
          {[['❓', `${quiz.questions.length}`, 'Questions'],['⏱', '~5', 'Minutes'],['🎯', '70%', 'To Pass']].map(([icon, val, label]) => (
            <div key={label} style={{ background: 'var(--gray-50)', borderRadius: 10, padding: '12px 8px' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: 4 }}>{icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--gray-900)' }}>{val}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>{label}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setPhase('quiz')} className="btn btn-primary btn-lg btn-full">Start Quiz →</button>
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm" style={{ marginTop: 12, width: '100%' }}>← Back to Course</button>
      </div>
    </div>
  )

  // QUIZ
  if (phase === 'quiz') {
    const isCorrect = showFeedback && selected === question.answer
    const isWrong   = showFeedback && selected !== question.answer

    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '2rem', paddingTop: '4rem' }}>
        <div style={{ maxWidth: 640, width: '100%' }}>
          {/* Progress */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: 8 }}>
              <span>Question {currentQ + 1} of {quiz.questions.length}</span>
              <span>{score} correct so far</span>
            </div>
            <div className="progress-bar-wrap">
              <div className="progress-bar-fill" style={{ width: `${((currentQ) / quiz.questions.length) * 100}%` }} />
            </div>
          </div>

          {/* Question Card */}
          <div className="card" style={{ padding: 32 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--primary)', marginBottom: 12 }}>
              Grammar • Question {currentQ + 1}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--gray-900)', marginBottom: 28, lineHeight: 1.5 }}>
              {question.question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {question.options.map((opt, idx) => {
                let bg = 'white', border = 'var(--gray-200)', color = 'var(--gray-700)'
                if (selected === idx && !showFeedback) { bg = 'var(--primary-light)'; border = 'var(--primary)'; color = 'var(--primary)' }
                if (showFeedback && idx === question.answer) { bg = 'var(--success-light)'; border = 'var(--success)'; color = 'var(--success)' }
                if (showFeedback && selected === idx && idx !== question.answer) { bg = 'var(--danger-light)'; border = 'var(--danger)'; color = 'var(--danger)' }

                return (
                  <button key={idx} onClick={() => handleSelect(idx)}
                    style={{ padding: '14px 18px', border: `2px solid ${border}`, borderRadius: 10, background: bg, color, fontWeight: selected === idx || (showFeedback && idx === question.answer) ? 600 : 400, fontSize: '0.9rem', fontFamily: 'var(--font-body)', textAlign: 'left', cursor: showFeedback ? 'default' : 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 700, flexShrink: 0 }}>
                      {showFeedback && idx === question.answer ? '✓' : showFeedback && selected === idx && idx !== question.answer ? '✗' : String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`alert ${isCorrect ? 'alert-success' : 'alert-error'}`} style={{ marginBottom: 20 }}>
                <span>{isCorrect ? '🎉' : '💡'}</span>
                <span>{isCorrect ? 'Correct! Well done!' : `The correct answer is: "${question.options[question.answer]}"`}</span>
              </div>
            )}

            <button onClick={handleNext} className="btn btn-primary btn-full btn-lg" disabled={selected === null}>
              {!showFeedback ? 'Check Answer' : currentQ + 1 < quiz.questions.length ? 'Next Question →' : 'See Results →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // RESULT
  const passed = percent >= 70
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="card" style={{ maxWidth: 540, width: '100%', padding: 40, textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: 12 }}>{passed ? '🎉' : '💪'}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: 8, color: 'var(--gray-900)' }}>
          {passed ? 'Quiz Passed!' : 'Keep Practicing!'}
        </h2>
        <p style={{ color: 'var(--gray-500)', marginBottom: 28 }}>
          {passed ? 'Excellent work! You demonstrated strong grammar knowledge.' : 'You\'re getting there! Review the material and try again.'}
        </p>

        {/* Score Circle */}
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: passed ? 'var(--success-light)' : 'var(--danger-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', border: `4px solid ${passed ? 'var(--success)' : 'var(--danger)'}` }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: passed ? 'var(--success)' : 'var(--danger)', lineHeight: 1 }}>{percent}%</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>{score}/{quiz.questions.length}</span>
        </div>

        {/* Answer Review */}
        <div style={{ textAlign: 'left', marginBottom: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 12, color: 'var(--gray-800)' }}>Answer Summary</h3>
          {quiz.questions.map((q, i) => {
            const ans = answers[i]
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--gray-100)', fontSize: '0.85rem' }}>
                <span style={{ fontSize: '1rem' }}>{ans?.correct ? '✅' : '❌'}</span>
                <span style={{ flex: 1, color: 'var(--gray-700)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Q{i+1}: {q.question.substring(0, 45)}...</span>
              </div>
            )
          })}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={handleRestart} className="btn btn-secondary" style={{ flex: 1 }}>Retry Quiz</button>
          <button onClick={() => navigate(courseId ? `/courses/${courseId}` : '/courses')} className="btn btn-primary" style={{ flex: 1 }}>
            {passed ? '🏆 View Course' : 'Back to Course'}
          </button>
        </div>
      </div>
    </div>
  )
}
