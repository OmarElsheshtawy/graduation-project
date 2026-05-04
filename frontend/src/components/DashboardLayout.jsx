import { useMemo, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { ROLES } from '../auth/rbac'

const STUDENT_LINKS = [
  { to: '/student-dashboard',            icon: '🏠', label: 'Dashboard' },
  { to: '/courses',                       icon: '🎮', label: 'Learn',      highlight: true },
  { to: '/student-dashboard/my-courses', icon: '📋', label: 'My Courses' },
  { to: '/student-dashboard/progress',   icon: '📈', label: 'Progress' },
  { to: '/leaderboard',                   icon: '🏆', label: 'Leaderboard' },
  { to: '/certificates',                  icon: '🎓', label: 'Certificates' },
  { to: '/chat',                          icon: '💬', label: 'Messages' },
  { to: '/quiz',                          icon: '🎯', label: 'Practice Quiz' },
]

const INSTRUCTOR_LINKS = [
  { to: '/instructor-dashboard',                 icon: '🏠', label: 'Dashboard' },
  { to: '/instructor-dashboard/manage-courses',  icon: '📚', label: 'My Courses' },
  { to: '/instructor-dashboard/students',        icon: '👥', label: 'Students' },
  { to: '/courses',                               icon: '🎮', label: 'Browse Courses' },
  { to: '/leaderboard',                           icon: '🏆', label: 'Leaderboard' },
  { to: '/chat',                                  icon: '💬', label: 'Messages' },
]

export default function DashboardLayout({ role }) {
  const [collapsed,   setCollapsed]   = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()
  const { user: authUser, logout } = useAuth()

  const links = useMemo(() => {
    const base = role === 'instructor' ? INSTRUCTOR_LINKS : STUDENT_LINKS
    if (authUser?.role === ROLES.ADMIN && role !== 'instructor') {
      return [{ to: '/admin', icon: '⚙️', label: 'Admin console' }, ...base]
    }
    return base
  }, [role, authUser?.role])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (to) =>
    location.pathname === to ||
    (to !== '/courses' && to !== '/leaderboard' && to !== '/chat' && to !== '/quiz' && to !== '/certificates' && location.pathname.startsWith(to + '/'))

  return (
    <div className="dashboard-wrap">

      {/* Mobile overlay */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 199 }} />
      )}

      {/* ── Sidebar ── */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>

        {/* Logo */}
        <div className="sidebar-logo">
          <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>L</div>
          {!collapsed && <span className="sidebar-logo-text">LinguaBridge</span>}
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {!collapsed && <div className="sidebar-section-label">Menu</div>}

          {links.map(link => (
            <Link key={link.to} to={link.to}
              className={`sidebar-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
              style={link.highlight && !isActive(link.to) ? {
                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                color: 'var(--primary)',
                border: '1px solid #BFDBFE',
                marginBottom: 4,
              } : {}}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{link.icon}</span>
              {!collapsed && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
                  {link.label}
                  {link.highlight && (
                    <span style={{ background: 'var(--primary)', color: 'white', fontSize: '0.55rem', fontWeight: 800, padding: '2px 5px', borderRadius: 4, letterSpacing: 0.5 }}>NEW</span>
                  )}
                </span>
              )}
            </Link>
          ))}

          {!collapsed && <div className="sidebar-section-label" style={{ marginTop: 12 }}>Account</div>}

          <Link to="/profile" className={`sidebar-link ${location.pathname === '/profile' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}>
            <span style={{ fontSize: '1rem', flexShrink: 0 }}>👤</span>
            {!collapsed && 'Profile'}
          </Link>

          <Link to="/home" className="sidebar-link" onClick={() => setMobileOpen(false)}>
            <span style={{ fontSize: '1rem', flexShrink: 0 }}>🌐</span>
            {!collapsed && 'Back to Site'}
          </Link>
        </nav>

        {/* User + Logout */}
        <div className="sidebar-footer">
          {!collapsed && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', marginBottom: 8, background: 'var(--gray-50)', borderRadius: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                {authUser?.name?.charAt(0)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.78rem', color: 'var(--gray-800)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{authUser?.name}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--gray-400)', textTransform: 'capitalize' }}>{authUser?.role}</div>
              </div>
            </div>
          )}
          <button onClick={handleLogout}
            className="sidebar-link"
            style={{ width: '100%', background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', textAlign: 'left' }}>
            <span style={{ fontSize: '1rem', flexShrink: 0 }}>🚪</span>
            {!collapsed && 'Sign Out'}
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="dashboard-main">

        {/* Topbar */}
        <div className="dashboard-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Toggle sidebar */}
            <button
              onClick={() => { setCollapsed(c => !c); setMobileOpen(m => !m) }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 7, borderRadius: 8, color: 'var(--gray-500)', display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: 'var(--gray-800)', fontWeight: 700 }}>
              {role === 'instructor' ? '👨‍🏫 Instructor Portal' : authUser?.role === ROLES.ADMIN ? '🎓 Student portal (admin)' : '🎓 Student Portal'}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Students (and admins) get quick access to structured lessons; instructors browse catalog in sidebar */}
            {role !== 'instructor' && (
              <Link to="/courses"
                style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--primary)', color: 'white', borderRadius: 9, padding: '7px 14px', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', transition: 'all 0.2s' }}>
                🎮 Learn
              </Link>
            )}

            {/* Messages */}
            <Link to="/chat"
              style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 7, borderRadius: 8, color: 'var(--gray-500)', display: 'flex' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span style={{ position: 'absolute', top: 4, right: 4, width: 8, height: 8, background: 'var(--danger)', borderRadius: '50%', border: '2px solid white' }} />
            </Link>

            <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--gray-600)' }}>
              Hi, {authUser?.name?.split(' ')[0]}! 👋
            </span>

            <Link to="/profile">
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                {authUser?.name?.charAt(0)}
              </div>
            </Link>
          </div>
        </div>

        {/* Page content */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
