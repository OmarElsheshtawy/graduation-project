import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)
  const [enrolled, setEnrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [toast, setToast] = useState(null)

  const user = JSON.parse(localStorage.getItem('user') || 'null')
  const isStudent = user?.role === 'student'

  const SYLLABUS = [
    { week: 'Week 1–2', title: 'Foundation & Core Vocabulary', lessons: ['Introduction to key concepts', 'Core vocabulary building', 'Pronunciation fundamentals', 'Basic sentence structures'] },
    { week: 'Week 3–4', title: 'Grammar Essentials', lessons: ['Present & past tenses', 'Question formation', 'Articles and prepositions', 'Common grammar mistakes'] },
    { week: 'Week 5–6', title: 'Speaking & Listening', lessons: ['Conversational practice', 'Listening comprehension', 'Accent & intonation', 'Real-world dialogues'] },
    { week: 'Week 7–8', title: 'Writing & Review', lessons: ['Essay & email writing', 'Formal vs informal tone', 'Editing techniques', 'Final assessment & review'] },
  ]

  const REVIEWS = [
    { name: 'Ahmed Hassan', rating: 5, date: '2 weeks ago', text: 'Excellent course! The structured approach made it easy to follow and the instructor explains everything clearly.' },
    { name: 'Maria Silva', rating: 5, date: '1 month ago', text: 'This course exceeded my expectations. I improved so much in just 8 weeks. Highly recommended!' },
    { name: 'Yuki Tanaka', rating: 4, date: '1 month ago', text: 'Very good content and well organized. Would love more speaking practice exercises but overall fantastic.' },
  ]

  useEffect(() => {
    fetchCourse()
    if (isStudent) checkEnrollment()
  }, [id])

  const fetchCourse = async () => {
    try {
      const { data } = await api.get(`/courses/${id}`)
      setCourse(data.course)
    } catch {
      navigate('/courses')
    } finally {
      setLoading(false)
    }
  }

  const checkEnrollment = async () => {
    try {
      const { data } = await api.get('/enrollments/my')
      setEnrolled(data.enrollments.some(e => e.id === parseInt(id)))
    } catch {}
  }

  const handleEnroll = async () => {
    if (!user) { navigate('/'); return }
    setEnrolling(true)
    try {
      await api.post(`/enrollments/${id}`)
      setEnrolled(true)
      showToast('🎉 Successfully enrolled!', 'success')
    } catch (err) {
      showToast(err.response?.data?.message || 'Enrollment failed', 'error')
    } finally {
      setEnrolling(false)
    }
  }

  const showToast = (msg, type) => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', flexDirection: 'column', gap: 16, color: 'var(--gray-400)' }}>
      <div className="spinner" style={{ width: 36, height: 36, borderColor: 'var(--gray-200)', borderTopColor: 'var(--primary)' }} />
      <p>Loading course...</p>
    </div>
  )

  if (!course) return null

  return (
    <div>
      {toast && (
        <div className={`toast toast-${toast.type}`}>{toast.msg}</div>
      )}

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, var(--gray-900) 0%, #1E3A5F 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                <span className="badge badge-primary">{course.level}</span>
                {parseFloat(course.price) === 0 && <span className="badge badge-success">Free</span>}
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'white', marginBottom: 16, lineHeight: 1.2 }}>
                {course.title}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 24, maxWidth: 600 }}>
                {course.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#F59E0B', fontWeight: 700 }}>⭐ 4.8</span>
                  <span>({course.students_count || 0} students)</span>
                </div>
                <span>⏱ {course.duration}</span>
                <span>👨‍🏫 {course.instructor_name}</span>
                <span>🌍 English</span>
              </div>
            </div>

            {/* Enroll Card */}
            <div className="card" style={{ padding: 28, position: 'sticky', top: 88 }}>
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--primary-light), #EEF2FF)', borderRadius: 12, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                📖
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--success)' }}>
                  Free
                </span>
              </div>

              {enrolled ? (
                <button onClick={() => navigate('/student-dashboard')} className="btn btn-primary btn-full btn-lg">
                  Go to Dashboard →
                </button>
              ) : isStudent ? (
                <button onClick={handleEnroll} disabled={enrolling} className="btn btn-primary btn-full btn-lg">
                  {enrolling ? <><div className="spinner" /> Enrolling...</> : 'Enroll Now'}
                </button>
              ) : (
                <button onClick={() => navigate('/')} className="btn btn-primary btn-full btn-lg">
                  Sign In to Enroll
                </button>
              )}

              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['✅', 'Full lifetime access'],['📱', 'Access on mobile & desktop'],['🏆', 'Certificate of completion'],['💬', 'Community discussion access']].map(([icon, text]) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: 760 }}>
          {/* Tabs */}
          <div className="tabs" style={{ marginBottom: 32 }}>
            {[['overview','Overview'],['syllabus','Syllabus'],['reviews','Reviews']].map(([key, label]) => (
              <button key={key} className={`tab ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)}>{label}</button>
            ))}
          </div>

          {/* Overview */}
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 16 }}>What You'll Learn</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
                {['Build strong grammar foundations','Improve speaking fluency','Expand vocabulary naturally','Master pronunciation','Write professional emails','Understand native speakers','Handle business conversations','Prepare for English exams'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--gray-700)' }}>
                    <svg width="16" height="16" fill="none" stroke="var(--success)" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 16 }}>Requirements</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
                {['No prior experience needed — we start from scratch','Willingness to practice 30 minutes per day','A device with internet connection'].map(r => (
                  <li key={r} style={{ display: 'flex', gap: 10, fontSize: '0.875rem', color: 'var(--gray-600)', listStyle: 'none' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>•</span>{r}
                  </li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 16 }}>About the Instructor</h2>
              <div className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0 }}>
                    {course.instructor_name?.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 4 }}>{course.instructor_name}</h3>
                    <p style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: 12 }}>Certified English Instructor</p>
                    <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                      An experienced English educator with a passion for helping learners achieve their language goals. Specializes in communicative language teaching and has helped over 1,000 students reach fluency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Syllabus */}
          {activeTab === 'syllabus' && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 20 }}>Course Curriculum</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {SYLLABUS.map((section, i) => (
                  <div key={i} className="card" style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: 'var(--primary)', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{section.week}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--gray-900)' }}>{section.title}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 44 }}>
                      {section.lessons.map((lesson, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                          {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          {activeTab === 'reviews' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32, padding: 24, background: 'var(--gray-50)', borderRadius: 12 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, color: 'var(--gray-900)', lineHeight: 1 }}>4.8</div>
                  <div style={{ color: '#F59E0B', fontSize: '1.1rem', margin: '6px 0' }}>★★★★★</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>Course Rating</div>
                </div>
                <div style={{ flex: 1 }}>
                  {[5,4,3,2,1].map(star => (
                    <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <div style={{ flex: 1, height: 8, background: 'var(--gray-200)', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: '#F59E0B', width: star === 5 ? '80%' : star === 4 ? '15%' : '5%', borderRadius: 4 }} />
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)', width: 20 }}>{star}★</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {REVIEWS.map((review, i) => (
                  <div key={i} className="card" style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                        {review.name.charAt(0)}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--gray-900)' }}>{review.name}</span>
                          <span style={{ fontSize: '0.78rem', color: 'var(--gray-400)' }}>{review.date}</span>
                        </div>
                        <div style={{ color: '#F59E0B', fontSize: '0.85rem', margin: '4px 0' }}>{'★'.repeat(review.rating)}</div>
                      </div>
                    </div>
                    <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.6 }}>{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
