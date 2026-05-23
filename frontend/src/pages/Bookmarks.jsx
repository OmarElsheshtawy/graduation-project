import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import api from '../services/api'

export default function Bookmarks() {
  const navigate = useNavigate()
  const { dark }  = useTheme()
  const bgAlt     = dark ? '#111827' : '#F9FAFB'
  const cardBg    = dark ? '#1F2937' : 'white'
  const border    = dark ? '#374151' : '#F3F4F6'
  const text      = dark ? '#F9FAFB' : '#111827'
  const textMuted = dark ? '#9CA3AF' : '#6B7280'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'

  const [bookmarks, setBookmarks] = useState([])
  const [loading, setLoading]     = useState(true)
  const [toast, setToast]         = useState(null)

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  useEffect(() => {
    if (!user) { navigate('/login'); return }
    fetchBookmarks()
  }, [])

  const fetchBookmarks = async () => {
    try {
      const { data } = await api.get('/bookmarks')
      setBookmarks(data.bookmarks)
    } catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  const removeBookmark = async (courseId) => {
    try {
      await api.delete(`/bookmarks/${courseId}`)
      setBookmarks(prev => prev.filter(b => b.course_id !== courseId))
      setToast('Bookmark removed')
      setTimeout(() => setToast(null), 2500)
    } catch {
      setToast('Failed to remove bookmark')
      setTimeout(() => setToast(null), 2500)
    }
  }

  const LEVEL_COLORS = {
    Beginner:      '#22C55E',
    Intermediate:  '#F59E0B',
    Advanced:      '#EF4444',
    'All Levels':  '#6B7280',
  }

  return (
    <div style={{ minHeight: '100vh', background: bgAlt }}>
      {toast && (
        <div style={{ position: 'fixed', top: 90, right: 20, zIndex: 9999, background: '#065F46', color: 'white', padding: '12px 20px', borderRadius: 12, fontWeight: 600, fontSize: '0.875rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          {toast}
        </div>
      )}

      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-hero-title">🔖 My Bookmarks</h1>
          <p className="page-hero-desc">Your saved courses in one place</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: textFaint }}>⏳ Loading bookmarks...</div>
        ) : bookmarks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', background: cardBg, borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${border}` }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🔖</div>
            <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', marginBottom: 12, color: text }}>No Bookmarks Yet</h2>
            <p style={{ color: textMuted, marginBottom: 24 }}>Save courses to find them quickly later.</p>
            <button onClick={() => navigate('/courses')} className="btn btn-primary">Browse Courses</button>
          </div>
        ) : (
          <div>
            <p style={{ color: textMuted, marginBottom: 20, fontSize: '0.875rem' }}>{bookmarks.length} saved course{bookmarks.length !== 1 ? 's' : ''}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {bookmarks.map(b => {
                const levelColor = LEVEL_COLORS[b.level] || '#6B7280'
                return (
                  <div key={b.id} style={{ background: cardBg, borderRadius: 16, padding: '20px', border: `1px solid ${border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {/* Course icon */}
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${levelColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                      📚
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                        <span style={{ background: `${levelColor}18`, color: levelColor, fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: 6 }}>
                          {b.level}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, fontSize: '0.95rem', color: text, marginBottom: 4, lineHeight: 1.3 }}>{b.title}</h3>
                      <p style={{ color: textMuted, fontSize: '0.78rem', lineHeight: 1.5, marginBottom: 8, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {b.description}
                      </p>
                      <div style={{ display: 'flex', gap: 12, fontSize: '0.72rem', color: textFaint }}>
                        <span>⏱ {b.duration}</span>
                        <span>👨‍🏫 {b.instructor_name}</span>
                      </div>
                      <div style={{ fontSize: '0.68rem', color: textFaint, marginTop: 4 }}>
                        Saved {new Date(b.created_at).toLocaleDateString()}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => navigate(`/courses/${b.course_id}`)}
                        style={{ flex: 1, background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '9px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                        View Course →
                      </button>
                      <button onClick={() => removeBookmark(b.course_id)}
                        style={{ background: '#FEE2E2', color: '#991B1B', border: 'none', borderRadius: 10, padding: '9px 14px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
                        title="Remove bookmark">
                        🗑
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
