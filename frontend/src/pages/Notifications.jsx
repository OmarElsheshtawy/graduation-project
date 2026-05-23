import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from './ThemeContext'

// ── Notification data ──────────────────────────────────────────────────────
const INITIAL_NOTIFICATIONS = [
  { id: 1, type: 'achievement', icon: '🏆', title: 'Badge Earned!',          body: 'You earned the "First Step" badge!',              time: '2m ago',  read: false },
  { id: 2, type: 'lesson',      icon: '📚', title: 'Daily Reminder',          body: 'Keep your streak! Complete a lesson today.',      time: '1h ago',  read: false },
  { id: 3, type: 'community',   icon: '💬', title: 'New Reply',               body: 'Ahmed replied to your forum post.',               time: '2h ago',  read: false },
  { id: 4, type: 'course',      icon: '🎓', title: 'Course Update',           body: 'New lessons added to IELTS Preparation!',         time: '1d ago',  read: true  },
  { id: 5, type: 'system',      icon: '⚡', title: 'XP Milestone',            body: 'You reached 500 XP! Keep it up!',                 time: '2d ago',  read: true  },
  { id: 6, type: 'achievement', icon: '🔥', title: '3-Day Streak!',           body: 'Amazing! You have practiced 3 days in a row.',    time: '3d ago',  read: true  },
]

// ── useNotifications hook ──────────────────────────────────────────────────
export function useNotifications() {
  const [notifications, setNotifications] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lb_notifications') || 'null') || INITIAL_NOTIFICATIONS }
    catch { return INITIAL_NOTIFICATIONS }
  })

  const save = (items) => {
    setNotifications(items)
    localStorage.setItem('lb_notifications', JSON.stringify(items))
  }

  const markRead = useCallback((id) => {
    setNotifications(prev => {
      const next = prev.map(n => n.id === id ? { ...n, read: true } : n)
      localStorage.setItem('lb_notifications', JSON.stringify(next))
      return next
    })
  }, [])

  const markAllRead = useCallback(() => {
    setNotifications(prev => {
      const next = prev.map(n => ({ ...n, read: true }))
      localStorage.setItem('lb_notifications', JSON.stringify(next))
      return next
    })
  }, [])

  const addNotification = useCallback((notif) => {
    const newNotif = { id: Date.now(), time: 'Just now', read: false, ...notif }
    setNotifications(prev => {
      const next = [newNotif, ...prev].slice(0, 20) // keep max 20
      localStorage.setItem('lb_notifications', JSON.stringify(next))
      return next
    })
  }, [])

  const unreadCount = notifications.filter(n => !n.read).length

  return { notifications, unreadCount, markRead, markAllRead, addNotification }
}

// ── Toast notification ─────────────────────────────────────────────────────
export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500)
    return () => clearTimeout(timer)
  }, [])

  const colors = {
    success: { bg: '#065F46', icon: '✅' },
    error:   { bg: '#991B1B', icon: '❌' },
    info:    { bg: '#1D4ED8', icon: 'ℹ️' },
    warning: { bg: '#92400E', icon: '⚠️' },
  }
  const { bg, icon } = colors[type] || colors.success

  return (
    <div style={{ position: 'fixed', top: 90, right: 24, zIndex: 99999, background: bg, color: 'white', padding: '13px 18px', borderRadius: 12, fontWeight: 600, fontSize: '0.875rem', boxShadow: '0 8px 28px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: 10, maxWidth: 360, animation: 'slideInRight 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
      <span>{icon}</span>
      <span style={{ flex: 1 }}>{message}</span>
      <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 6, color: 'white', cursor: 'pointer', padding: '2px 7px', fontSize: '0.8rem', fontFamily: 'inherit' }}>✕</button>
      <style>{`@keyframes slideInRight { from{opacity:0;transform:translateX(30px)} to{opacity:1;transform:translateX(0)} }`}</style>
    </div>
  )
}

// ── Toast manager hook ─────────────────────────────────────────────────────
export function useToast() {
  const [toasts, setToasts] = useState([])

  const show = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500)
  }, [])

  const ToastContainer = () => (
    <div style={{ position: 'fixed', top: 90, right: 24, zIndex: 99999, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {toasts.map((t, i) => (
        <Toast key={t.id} message={t.message} type={t.type} onClose={() => setToasts(prev => prev.filter(x => x.id !== t.id))} />
      ))}
    </div>
  )

  return { show, ToastContainer }
}

// ── Notifications Page (full view) ────────────────────────────────────────
export default function NotificationsPage() {
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications()
  const { dark } = useTheme()
  const bg      = dark ? '#111827' : '#F9FAFB'
  const cardBg  = dark ? '#1F2937' : 'white'
  const border  = dark ? '#374151' : '#F3F4F6'
  const text    = dark ? '#F9FAFB' : '#111827'
  const muted   = dark ? '#9CA3AF' : '#6B7280'
  const faint   = dark ? '#6B7280' : '#9CA3AF'
  const unreadBg = dark ? '#1E3A5F' : '#EFF6FF'

  const typeColors = { achievement: '#F59E0B', lesson: '#2563EB', community: '#22C55E', course: '#8B5CF6', system: '#EF4444' }

  return (
    <div style={{ minHeight: '100vh', background: bg, paddingBottom: 60 }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.75rem', fontWeight: 700, color: text, marginBottom: 4 }}>
              Notifications
            </h1>
            <p style={{ color: muted, fontSize: '0.875rem' }}>
              {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllRead}
              style={{ padding: '8px 18px', background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit' }}>
              Mark all read
            </button>
          )}
        </div>

        {/* List */}
        {notifications.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 24px', background: cardBg, borderRadius: 16, border: `1px solid ${border}` }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔔</div>
            <h3 style={{ color: text, fontFamily: 'var(--font-display,sans-serif)', marginBottom: 8 }}>No notifications yet</h3>
            <p style={{ color: muted, fontSize: '0.875rem' }}>You're all caught up. Check back later!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {notifications.map(notif => (
              <div key={notif.id} onClick={() => markRead(notif.id)}
                style={{ display: 'flex', gap: 14, padding: '16px 20px', background: notif.read ? cardBg : unreadBg, borderRadius: 14, border: `1px solid ${border}`, cursor: 'pointer', transition: 'all 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: (typeColors[notif.type] || '#6B7280') + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                  {notif.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: notif.read ? 500 : 700, color: text, fontSize: '0.9rem' }}>{notif.title}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                      <span style={{ fontSize: '0.75rem', color: faint }}>{notif.time}</span>
                      {!notif.read && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563EB' }} />}
                    </div>
                  </div>
                  <p style={{ color: muted, fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>{notif.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Notification Bell + Dropdown ───────────────────────────────────────────
export function NotificationBell() {
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { dark }   = useTheme()
  const dropBg     = dark ? '#1F2937' : 'white'
  const dropBorder = dark ? '#374151' : '#F3F4F6'
  const dropText   = dark ? '#F9FAFB' : '#111827'
  const dropMuted  = dark ? '#9CA3AF' : '#6B7280'
  const dropFaint  = dark ? '#6B7280' : '#9CA3AF'
  const unreadBg   = dark ? '#1E3A5F' : '#F0F7FF'
  const hoverBg    = dark ? '#374151' : '#F9FAFB'
  const badgeBorder = dark ? '#1F2937' : 'white'

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const typeColors = { achievement: '#F59E0B', lesson: '#2563EB', community: '#22C55E', course: '#8B5CF6', system: '#EF4444' }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 10, color: 'var(--gray-500,#6B7280)', display: 'flex', alignItems: 'center', transition: 'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-100,#F3F4F6)'}
        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {unreadCount > 0 && (
          <div style={{ position: 'absolute', top: 4, right: 4, width: 18, height: 18, background: '#EF4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'white', fontWeight: 800, border: `2px solid ${badgeBorder}` }}>
            {unreadCount > 9 ? '9+' : unreadCount}
          </div>
        )}
      </button>

      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: 340, background: dropBg, borderRadius: 16, boxShadow: '0 16px 48px rgba(0,0,0,0.15)', border: `1px solid ${dropBorder}`, overflow: 'hidden', zIndex: 1000, animation: 'fadeInDown 0.2s ease' }}>
          {/* Header */}
          <div style={{ padding: '14px 16px', borderBottom: `1px solid ${dropBorder}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: dropText, fontSize: '0.95rem' }}>
              Notifications {unreadCount > 0 && <span style={{ background: '#EF4444', color: 'white', fontSize: '0.6rem', padding: '2px 6px', borderRadius: 10, marginLeft: 6 }}>{unreadCount}</span>}
            </div>
            {unreadCount > 0 && (
              <button onClick={markAllRead} style={{ background: 'none', border: 'none', color: '#2563EB', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                Mark all read
              </button>
            )}
          </div>

          {/* Notifications list */}
          <div style={{ maxHeight: 380, overflowY: 'auto' }}>
            {notifications.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '32px 16px', color: dropFaint }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>🔔</div>
                <p style={{ fontSize: '0.85rem' }}>No notifications yet</p>
              </div>
            ) : notifications.map(notif => (
              <div key={notif.id} onClick={() => markRead(notif.id)}
                style={{ padding: '12px 16px', display: 'flex', gap: 12, cursor: 'pointer', background: notif.read ? dropBg : unreadBg, borderBottom: `1px solid ${dropBorder}`, transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = hoverBg}
                onMouseLeave={e => e.currentTarget.style.background = notif.read ? dropBg : unreadBg}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: (typeColors[notif.type] || '#6B7280') + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  {notif.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
                    <span style={{ fontWeight: notif.read ? 500 : 700, fontSize: '0.82rem', color: dropText }}>{notif.title}</span>
                    {!notif.read && <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB', flexShrink: 0, marginTop: 4 }} />}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: dropMuted, margin: '2px 0 4px', lineHeight: 1.4 }}>{notif.body}</p>
                  <span style={{ fontSize: '0.68rem', color: dropFaint }}>{notif.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ padding: '10px 16px', borderTop: `1px solid ${dropBorder}`, textAlign: 'center' }}>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#2563EB', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  )
}