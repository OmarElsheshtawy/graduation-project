import { useNavigate, useRouteError, Link } from 'react-router-dom'
import { Component } from 'react'

// ── 404 Not Found ──────────────────────────────────────────────────────────
export function NotFound() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#F0F7FF,#EEF2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: '7rem', lineHeight: 1, marginBottom: 8, userSelect: 'none' }}>🔍</div>
        <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '6rem', fontWeight: 800, color: '#2563EB', lineHeight: 1, marginBottom: 8, letterSpacing: -4 }}>404</div>
        <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 12 }}>Page Not Found</h2>
        <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 32, fontSize: '0.95rem' }}>
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you may have typed the wrong URL.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate(-1)}
            style={{ padding: '12px 24px', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
            ← Go Back
          </button>
          <button onClick={() => navigate('/home')}
            style={{ padding: '12px 24px', background: '#2563EB', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
            🏠 Go Home
          </button>
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[['Browse Courses','/courses'],['Community','/community'],['Contact Us','/contact']].map(([label,path]) => (
            <Link key={path} to={path} style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 500 Server Error ───────────────────────────────────────────────────────
export function ServerError() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#FFF1F2,#FEE2E2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: '7rem', lineHeight: 1, marginBottom: 8 }}>⚠️</div>
        <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '6rem', fontWeight: 800, color: '#EF4444', lineHeight: 1, marginBottom: 8, letterSpacing: -4 }}>500</div>
        <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 12 }}>Something Went Wrong</h2>
        <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 32, fontSize: '0.95rem' }}>
          We're sorry — our server encountered an error. Our team has been notified and is working on a fix. Please try again in a few minutes.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => window.location.reload()}
            style={{ padding: '12px 24px', background: '#EF4444', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
            🔄 Try Again
          </button>
          <button onClick={() => navigate('/home')}
            style={{ padding: '12px 24px', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
            🏠 Go Home
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Router Error (catches React Router errors) ─────────────────────────────
export function RouterError() {
  const error    = useRouteError()
  const navigate = useNavigate()
  const is404    = error?.status === 404
  return is404 ? <NotFound /> : <ServerError />
}

// ── Error Boundary (catches JS runtime errors) ─────────────────────────────
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#FFF7ED,#FEF3C7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{ fontSize: '5rem', marginBottom: 16 }}>💥</div>
          <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 12 }}>
            Oops! Something crashed
          </h2>
          <p style={{ color: '#6B7280', marginBottom: 16, lineHeight: 1.7 }}>
            An unexpected error occurred. Your progress is saved. Please refresh the page to continue.
          </p>
          {this.state.error && (
            <div style={{ background: '#1F2937', color: '#F9FAFB', borderRadius: 12, padding: '12px 16px', marginBottom: 24, textAlign: 'left', fontSize: '0.78rem', fontFamily: 'monospace', overflow: 'auto', maxHeight: 120 }}>
              {this.state.error.toString()}
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={() => window.location.reload()}
              style={{ padding: '12px 24px', background: '#F59E0B', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              🔄 Refresh Page
            </button>
            <button onClick={() => { this.setState({ hasError: false }); window.location.href = '/home' }}
              style={{ padding: '12px 24px', background: 'white', color: '#374151', border: '2px solid #E5E7EB', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              🏠 Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }
}

// ── Offline Page ───────────────────────────────────────────────────────────
export function OfflinePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <div style={{ fontSize: '5rem', marginBottom: 16 }}>📡</div>
        <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 12 }}>You're Offline</h2>
        <p style={{ color: '#6B7280', marginBottom: 24, lineHeight: 1.7 }}>
          No internet connection detected. Check your connection and try again. Your progress is saved locally.
        </p>
        <button onClick={() => window.location.reload()}
          style={{ padding: '12px 28px', background: '#2563EB', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem' }}>
          🔄 Try Again
        </button>
      </div>
    </div>
  )
}