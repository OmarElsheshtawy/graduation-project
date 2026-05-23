import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function Certificates() {
  const navigate = useNavigate()
  const [enrollments, setEnrollments] = useState([])
  const [loading,     setLoading]     = useState(true)
  const [downloading, setDownloading] = useState(null)

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  useEffect(() => {
    if (!user) { navigate('/'); return }
    api.get('/enrollments/my')
      .then(({ data }) => setEnrollments(data.enrollments.filter(e => e.progress === 100)))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const handleDownloadPDF = async (cert) => {
    setDownloading(cert.id)
    try {
      const { default: jsPDF } = await import('jspdf')
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
      const W = 297, H = 210

      // Background gradient simulation
      doc.setFillColor(240, 247, 255)
      doc.rect(0, 0, W, H, 'F')

      // Gold border
      doc.setDrawColor(212, 175, 55)
      doc.setLineWidth(3)
      doc.rect(10, 10, W - 20, H - 20)
      doc.setLineWidth(1)
      doc.rect(14, 14, W - 28, H - 28)

      // Corner ornaments
      const corners = [[14,14],[W-14,14],[14,H-14],[W-14,H-14]]
      corners.forEach(([cx,cy]) => {
        doc.setFillColor(212,175,55)
        doc.circle(cx, cy, 3, 'F')
      })

      // Header
      doc.setFont('helvetica','bold')
      doc.setFontSize(11)
      doc.setTextColor(100,80,20)
      doc.text('LINGUABRIDGE ACADEMY', W/2, 35, { align: 'center' })

      doc.setFontSize(28)
      doc.setTextColor(37, 99, 235)
      doc.text('Certificate of Completion', W/2, 52, { align: 'center' })

      // Divider line
      doc.setDrawColor(212,175,55)
      doc.setLineWidth(0.8)
      doc.line(60, 58, W-60, 58)

      // Body text
      doc.setFont('helvetica','normal')
      doc.setFontSize(12)
      doc.setTextColor(80,80,80)
      doc.text('This is to certify that', W/2, 72, { align: 'center' })

      // Student name
      doc.setFont('helvetica','bolditalic')
      doc.setFontSize(32)
      doc.setTextColor(15,23,42)
      doc.text(user?.name || 'Student', W/2, 92, { align: 'center' })

      // Underline for name
      const nameWidth = doc.getTextWidth(user?.name || 'Student')
      doc.setDrawColor(37,99,235)
      doc.setLineWidth(0.5)
      doc.line(W/2 - nameWidth/2, 95, W/2 + nameWidth/2, 95)

      doc.setFont('helvetica','normal')
      doc.setFontSize(12)
      doc.setTextColor(80,80,80)
      doc.text('has successfully completed the course', W/2, 107, { align: 'center' })

      // Course name
      doc.setFont('helvetica','bold')
      doc.setFontSize(20)
      doc.setTextColor(37,99,235)
      doc.text(cert.title, W/2, 122, { align: 'center' })

      // Divider
      doc.setDrawColor(212,175,55)
      doc.setLineWidth(0.5)
      doc.line(80, 130, W-80, 130)

      // Footer info
      const year = new Date(cert.enrolled_at).getFullYear()
      const certId = `CERT-LB-${String(cert.id).padStart(6,'0')}`

      doc.setFont('helvetica','bold')
      doc.setFontSize(10)
      doc.setTextColor(40,40,40)

      // Instructor signature block
      doc.text(cert.instructor_name || 'Instructor', 80, 152, { align: 'center' })
      doc.setFont('helvetica','normal')
      doc.setTextColor(100,100,100)
      doc.text('Course Instructor', 80, 159, { align: 'center' })
      doc.setDrawColor(180,180,180)
      doc.line(50, 148, 110, 148)

      // Platform signature block
      doc.setFont('helvetica','bold')
      doc.setTextColor(40,40,40)
      doc.text('LinguaBridge', W/2, 152, { align: 'center' })
      doc.setFont('helvetica','normal')
      doc.setTextColor(100,100,100)
      doc.text('Learning Platform', W/2, 159, { align: 'center' })
      doc.line(W/2-30, 148, W/2+30, 148)

      // Year
      doc.setFont('helvetica','bold')
      doc.setTextColor(40,40,40)
      doc.text(String(year), W-80, 152, { align: 'center' })
      doc.setFont('helvetica','normal')
      doc.setTextColor(100,100,100)
      doc.text('Year Completed', W-80, 159, { align: 'center' })
      doc.line(W-110, 148, W-50, 148)

      // Certificate ID at bottom
      doc.setFontSize(8)
      doc.setTextColor(160,160,160)
      doc.text(certId, W/2, 185, { align: 'center' })

      doc.save(`${certId}.pdf`)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setDownloading(null)
    }
  }

  const certs = enrollments

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
                      <button onClick={() => handleDownloadPDF(cert)} disabled={downloading === cert.id} className="btn btn-primary" style={{ flex: 1 }}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        {downloading === cert.id ? 'Generating...' : 'Download PDF'}
                      </button>
                      <button className="btn btn-secondary" onClick={() => {
                        if (navigator.share) navigator.share({ title: `${cert.title} Certificate`, text: `I completed ${cert.title} on LinguaBridge!`, url: window.location.href })
                        else { navigator.clipboard.writeText(window.location.href); }
                      }}>
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
