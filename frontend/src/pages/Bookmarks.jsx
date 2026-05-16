import { useNavigate } from 'react-router-dom'
import { useBookmarks } from '../hooks/useGameFeatures'
import { COURSES } from '../data/courseData'
import { useTheme } from './ThemeContext'

export default function Bookmarks() {
  const navigate = useNavigate()
  const { bookmarks, toggle } = useBookmarks()
  const { dark }  = useTheme()
  const bgAlt     = dark ? '#1F2937' : '#F9FAFB'
  const cardBg    = dark ? '#1F2937' : 'white'
  const border    = dark ? '#374151' : '#F3F4F6'
  const text      = dark ? '#F9FAFB' : '#111827'
  const textMuted = dark ? '#9CA3AF' : '#6B7280'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'

  const lessonBookmarks = bookmarks.filter(b => b.type === 'lesson')
  const courseBookmarks = bookmarks.filter(b => b.type === 'course')

  const getCourse = (courseId) => COURSES.find(c => c.id === courseId)

  return (
    <div style={{ minHeight: '100vh', background: bgAlt }}>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-hero-title">🔖 My Bookmarks</h1>
          <p className="page-hero-desc">Your saved lessons and courses in one place</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>
        {bookmarks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', background: cardBg, borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${border}` }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🔖</div>
            <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', marginBottom: 12, color: text }}>No Bookmarks Yet</h2>
            <p style={{ color: textMuted, marginBottom: 24 }}>Save lessons and courses to find them quickly later.</p>
            <button onClick={() => navigate('/courses')} className="btn btn-primary">Browse Courses</button>
          </div>
        ) : (
          <div>
            {lessonBookmarks.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.2rem', color: text, marginBottom: 16 }}>📚 Saved Lessons</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
                  {lessonBookmarks.map(b => {
                    const course = getCourse(b.courseId)
                    return (
                      <div key={b.id} style={{ background: cardBg, borderRadius: 16, padding: '16px 18px', border: `1px solid ${border}`, boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: (course?.color || '#2563EB') + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                          {course?.icon || '📚'}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: text, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</div>
                          <div style={{ fontSize: '0.72rem', color: textFaint }}>{course?.title} · {b.type}</div>
                          <div style={{ fontSize: '0.68rem', color: textFaint, marginTop: 2 }}>Saved {new Date(b.savedAt).toLocaleDateString()}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <button onClick={() => navigate(`/learn/${b.courseId}/${b.id}`)}
                            style={{ background: course?.color || '#2563EB', color: 'white', border: 'none', borderRadius: 8, padding: '5px 10px', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                            Go →
                          </button>
                          <button onClick={() => toggle(b)}
                            style={{ background: '#FEE2E2', color: '#991B1B', border: 'none', borderRadius: 8, padding: '5px 10px', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                            Remove
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {courseBookmarks.length > 0 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.2rem', color: text, marginBottom: 16 }}>🎓 Saved Courses</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
                  {courseBookmarks.map(b => {
                    const course = getCourse(b.id)
                    return (
                      <div key={b.id} style={{ background: cardBg, borderRadius: 16, padding: '16px 18px', border: `2px solid ${course?.color || '#2563EB'}20`, boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: (course?.color || '#2563EB') + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                          {course?.icon || '📚'}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: text }}>{course?.title || b.title}</div>
                          <div style={{ fontSize: '0.72rem', color: textFaint }}>{course?.level}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <button onClick={() => navigate(`/learn/${b.id}`)}
                            style={{ background: course?.color || '#2563EB', color: 'white', border: 'none', borderRadius: 8, padding: '5px 10px', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                            Open →
                          </button>
                          <button onClick={() => toggle(b)}
                            style={{ background: '#FEE2E2', color: '#991B1B', border: 'none', borderRadius: 8, padding: '5px 10px', fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                            Remove
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
