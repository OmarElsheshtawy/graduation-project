import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom'
import Chatbot from './Chatbot'
import { useAuth } from '../auth/AuthContext'
import { defaultDashboardPath, ROLES } from '../auth/rbac'
import { ThemeToggle } from '../pages/ThemeContext'

const NAV_LINKS = [
  { to: '/',            label: 'Home',        public: true  },
  { to: '/courses',     label: 'Courses',     public: false },
  { to: '/community',   label: 'Community',   public: false },
  { to: '/leaderboard', label: 'Leaderboard', public: false },
  { to: '/about',       label: 'About',       public: true  },
  { to: '/contact',     label: 'Contact',     public: true  },
]

export default function Layout() {
  const location  = useLocation()
  const navigate  = useNavigate()
  const [menuOpen, setMenuOpen]             = useState(false)
  const [dropdownOpen, setDropdownOpen]     = useState(false)
  const [searchVal, setSearchVal]           = useState('')
  const dropdownRef = useRef(null)

  const { user, logout } = useAuth()
  const isAuth = !!user || !!localStorage.getItem('token')

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchVal.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchVal.trim())}`)
      setSearchVal('')
    }
  }

  const dashLink = defaultDashboardPath(user?.role || ROLES.STUDENT)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <Link to="/" className="nav-logo">LinguaBridge</Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="nav-search">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input value={searchVal} onChange={e => setSearchVal(e.target.value)} placeholder="Search courses..." />
          </form>

          {/* Nav links */}
          <ul className="nav-links">
            {NAV_LINKS.map(l => {
              const isActive = l.to === '/' ? location.pathname === '/' : location.pathname === l.to || (l.to === '/courses' && location.pathname.startsWith('/learn'))
              const handleClick = (e) => {
                if (!l.public && !isAuth) {
                  e.preventDefault()
                  navigate('/login')
                }
              }
              return (
                <li key={l.to}>
                  <Link to={l.to} className={isActive ? 'active' : ''} onClick={handleClick}>
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <ThemeToggle />
            {isAuth ? (
              <div style={{ position: 'relative' }} ref={dropdownRef}>
                <div className="nav-avatar" onClick={() => setDropdownOpen(d => !d)}
                  title={user?.name}>
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                {dropdownOpen && (
                  <div className="nav-dropdown">
                    {/* User info */}
                    <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--gray-100)' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--gray-900)' }}>{user?.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginTop: 2 }}>{user?.email}</div>
                      <span className="badge badge-primary" style={{ marginTop: 6, display: 'inline-block' }}>{user?.role}</span>
                    </div>

                    <Link to={dashLink} className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                      </svg>
                      Dashboard
                    </Link>

                    {user?.role === ROLES.ADMIN && (
                      <Link to="/admin" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                        Admin console
                      </Link>
                    )}

                    <Link to="/courses" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                      My Courses
                    </Link>

                    <Link to="/profile" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      Profile
                    </Link>

                    {(user?.role === ROLES.STUDENT || user?.role === ROLES.ADMIN) && (
                      <>
                        <Link to="/certificates" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                          </svg>
                          Certificates
                        </Link>
                        <Link to="/leaderboard" className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <polyline points="18 20 18 10"/><polyline points="12 20 12 4"/><polyline points="6 20 6 14"/>
                          </svg>
                          Leaderboard
                        </Link>
                      </>
                    )}

                    <div className="nav-dropdown-divider"/>
                    <button onClick={handleLogout} className="nav-dropdown-item danger">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                      </svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login"    className="btn btn-secondary btn-sm">Sign In</Link>
                <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
              </>
            )}

            {/* Hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--white)', borderTop: '1px solid var(--gray-100)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 999 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.to} to={l.to}
                onClick={(e) => {
                  setMenuOpen(false)
                  if (!l.public && !isAuth) { e.preventDefault(); navigate('/login') }
                }}
                style={{ padding: '10px 12px', borderRadius: 8, color: location.pathname === l.to ? 'var(--primary)' : 'var(--gray-700)', fontWeight: 500, background: location.pathname === l.to ? 'var(--primary-light)' : 'transparent' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid var(--gray-100)', marginTop: 8, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {isAuth ? (
                <>
                  <Link to={dashLink} onClick={() => setMenuOpen(false)} className="btn btn-primary btn-sm">Dashboard</Link>
                  <button onClick={handleLogout} className="btn btn-secondary btn-sm">Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login"    onClick={() => setMenuOpen(false)} className="btn btn-secondary btn-sm">Sign In</Link>
                  <Link to="/register" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-sm">Get Started</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ── Page Content ── */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">LinguaBridge</div>
              <p className="footer-desc">Your trusted partner in English learning. Join thousands of learners worldwide.</p>
              <div className="social-links" style={{ marginTop: 20 }}>
                {['FB','TW','IG','LI'].map(s => <a key={s} href="#" className="social-link">{s}</a>)}
              </div>
            </div>
            <div>
              <div className="footer-heading">Platform</div>
              <ul className="footer-links">
                {[['Courses','/courses'],['Community','/community'],['Leaderboard','/leaderboard'],['Certificates','/certificates']].map(([l,h]) => (
                  <li key={l}><Link to={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-heading">Company</div>
              <ul className="footer-links">
                {[['About Us','/about'],['Contact','/contact'],['Blog','#'],['Careers','#']].map(([l,h]) => (
                  <li key={l}><Link to={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-heading">Support</div>
              <ul className="footer-links">
                {[['Help Center','#'],['FAQ','#'],['Privacy Policy','#'],['Terms of Service','#']].map(([l,h]) => (
                  <li key={l}><Link to={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 LinguaBridge. All rights reserved.</span>
            <span>Made with ❤️ for English learners worldwide</span>
          </div>
        </div>
      </footer>

      {/* ── Chatbot ── */}
      <Chatbot />
    </div>
  )
}
