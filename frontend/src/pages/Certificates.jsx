import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function Certificates() {
  const navigate = useNavigate()
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(true)
  const [printing, setPrinting] = useState(null)

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  useEffect(() => {
    if (!user) { navigate('/'); return }
    api.get('/enrollments/my')
      .then(({ data }) => setEnrollments(data.enrollments.filter(e => e.progress === 100)))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const handlePrint = (cert) => {
    setPrinting(cert)
    setTimeout(() => {
      window.print()
      setPrinting(null)
    }, 300)
  }

  // Mock completed courses if none from API
  const MOCK_CERTS = [
    { id: 1, title: 'Beginner English', instructor_name: 'Dr. Emily Chen', progress: 100, enrolled_at: '2024-12-01' },
  ]

  const certs = enrollments.length > 0 ? enrollments : MOCK_CERTS

  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🏆</div>
            <h1 className="page-hero-title">My Certificates</h1>
            <p className="page-hero-desc">Your achievements and completed courses</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--gray-400)' }}>
              <div className="spinner" style={{ width: 36, height: 36, borderColor: 'var(--gray-200)', borderTopColor: 'var(--primary)', margin: '0 auto 16px' }} />
              Loading certificates...
            </div>
          ) : certs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 2rem', maxWidth: 480, margin: '0 auto' }}>
              <div style={{ fontSize: '4rem', marginBottom: 16 }}>📜</div>
              <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 12 }}>No Certificates Yet</h2>
              <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Complete a course to earn your first certificate!</p>
              <button onClick={() => navigate('/courses')} className="btn btn-primary">Browse Courses</button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <span className="badge badge-success" style={{ padding: '6px 16px', fontSize: '0.875rem' }}>
                  🏆 {certs.length} {certs.length === 1 ? 'Certificate' : 'Certificates'} Earned
                </span>
              </div>
              <div className="grid-2">
                {certs.map((cert, i) => (
                  <div key={i}>
                    {/* Certificate Preview */}
                    <div className="certificate" style={{ marginBottom: 16 }}>
                      {/* Decorative corners */}
                      {['top:12px;left:12px', 'top:12px;right:12px', 'bottom:12px;left:12px', 'bottom:12px;right:12px'].map((pos, j) => (
                        <div key={j} style={{ position: 'absolute', [pos.split(';')[0].split(':')[0]]: pos.split(';')[0].split(':')[1], [pos.split(';')[1].split(':')[0]]: pos.split(';')[1].split(':')[1], width: 24, height: 24, border: '2px solid var(--primary)', opacity: 0.3, borderRadius: 3 }} />
                      ))}

                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🏆</div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 8 }}>Certificate of Completion</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: 16 }}>This is to certify that</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: 4, fontStyle: 'italic' }}>
                          {user?.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: 16 }}>has successfully completed</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 16 }}>
                          {cert.title}
                        </div>
                        <div style={{ width: 80, height: 2, background: 'linear-gradient(90deg, var(--primary), var(--accent))', margin: '0 auto 16px', borderRadius: 2 }} />
                        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.75rem', color: 'var(--gray-500)' }}>
                          <div>
                            <div style={{ fontWeight: 700, color: 'var(--gray-700)', marginBottom: 4 }}>{cert.instructor_name}</div>
                            <div>Instructor</div>
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: 'var(--gray-700)', marginBottom: 4 }}>LinguaBridge</div>
                            <div>Platform</div>
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: 'var(--gray-700)', marginBottom: 4 }}>
                              {new Date(cert.enrolled_at).getFullYear()}
                            </div>
                            <div>Year</div>
                          </div>
                        </div>
                        <div style={{ marginTop: 16, fontSize: '0.7rem', color: 'var(--gray-300)', letterSpacing: 1 }}>
                          CERT-LB-{String(cert.id).padStart(6, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: 12 }}>
                      <button onClick={() => handlePrint(cert)} className="btn btn-primary" style={{ flex: 1 }}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                        Download PDF
                      </button>
                      <button className="btn btn-secondary">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        Share
                      </button>
                    </div>
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
