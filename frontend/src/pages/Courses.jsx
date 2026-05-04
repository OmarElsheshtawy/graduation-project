import { useState, useEffect } from 'react'
import api from '../services/api'
import '../App.css'

function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [enrollingId, setEnrollingId] = useState(null)
  const [enrolledIds, setEnrolledIds] = useState(new Set())
  const [search, setSearch] = useState('')
  const [levelFilter, setLevelFilter] = useState('')
  const [toast, setToast] = useState('')

  const user = JSON.parse(localStorage.getItem('user') || 'null')
  const isStudent = user?.role === 'student'

  useEffect(() => { fetchCourses() }, [search, levelFilter])
  useEffect(() => { if (isStudent) fetchMyEnrollments() }, [])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const params = {}
      if (search) params.search = search
      if (levelFilter) params.level = levelFilter
      const { data } = await api.get('/courses', { params })
      setCourses(data.courses)
    } catch (err) {
      setError('Failed to load courses. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const fetchMyEnrollments = async () => {
    try {
      const { data } = await api.get('/enrollments/my')
      setEnrolledIds(new Set(data.enrollments.map(e => e.id)))
    } catch (err) {}
  }

  const handleEnroll = async (courseId) => {
    if (!user) { window.location.href = '/'; return }
    setEnrollingId(courseId)
    try {
      await api.post(`/enrollments/${courseId}`)
      setEnrolledIds(prev => new Set([...prev, courseId]))
      showToast('Successfully enrolled! 🎉')
    } catch (err) {
      showToast(err.response?.data?.message || 'Enrollment failed', true)
    } finally {
      setEnrollingId(null)
    }
  }

  const showToast = (msg, isError = false) => {
    setToast({ msg, isError })
    setTimeout(() => setToast(''), 3000)
  }

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Intermediate+', 'All Levels', 'Beginner+']

  return (
    <div className="page-container">
      {toast && (
        <div style={{ position: 'fixed', top: '80px', right: '20px', zIndex: 9999, background: toast.isError ? '#FEE2E2' : '#D1FAE5', color: toast.isError ? '#DC2626' : '#065F46', padding: '1rem 1.5rem', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', fontWeight: 600 }}>
          {toast.msg}
        </div>
      )}

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Courses</h1>
          <p className="page-subtitle">Choose the perfect course for your English learning journey</p>
        </div>
      </section>

      <div style={{ background: '#fff', borderBottom: '1px solid #E8EDF2', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input type="text" placeholder="🔍 Search courses..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: '200px', padding: '0.75rem 1rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem' }} />
          <select value={levelFilter} onChange={e => setLevelFilter(e.target.value)}
            style={{ padding: '0.75rem 1rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem', background: 'white', cursor: 'pointer' }}>
            <option value="">All Levels</option>
            {levels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          {(search || levelFilter) && (
            <button onClick={() => { setSearch(''); setLevelFilter('') }} className="btn-secondary">Clear</button>
          )}
        </div>
      </div>

      <section className="courses-section">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#5A6C7D' }}>⏳ Loading courses...</div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#DC2626' }}>
              <p>{error}</p>
              <button onClick={fetchCourses} className="btn-primary" style={{ marginTop: '1rem' }}>Try Again</button>
            </div>
          ) : courses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#5A6C7D' }}>📚 No courses found.</div>
          ) : (
            <div className="courses-grid">
              {courses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <span className="course-level">{course.level}</span>
                    <div className="course-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                      <span>4.8</span>
                    </div>
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-info">
                    <div className="info-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A6C7D" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A6C7D" strokeWidth="2"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"/></svg>
                      <span>{course.students_count || 0} students</span>
                    </div>
                    <div className="info-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A6C7D" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span>{course.instructor_name}</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <div className="course-price">{parseFloat(course.price) === 0 ? 'Free' : `$${parseFloat(course.price).toFixed(0)}`}</div>
                    {isStudent ? (
                      enrolledIds.has(course.id) ? (
                        <button className="btn-secondary" disabled style={{ opacity: 0.7 }}>✓ Enrolled</button>
                      ) : (
                        <button className="btn-primary" onClick={() => handleEnroll(course.id)} disabled={enrollingId === course.id}>
                          {enrollingId === course.id ? 'Enrolling...' : 'Enroll Now'}
                        </button>
                      )
                    ) : (
                      <button className="btn-primary" onClick={() => !user && (window.location.href = '/')}>
                        {user ? 'Enroll Now' : 'Sign In to Enroll'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Courses