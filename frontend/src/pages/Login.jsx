import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'
import { defaultDashboardPath } from '../auth/rbac'
import './Auth.css'

// ── Icon components ────────────────────────────────────────────────────────────

const EyeOpen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const AlertCircle = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

// ── Toast ──────────────────────────────────────────────────────────────────────

function Toast({ toasts }) {
  if (!toasts.length) return null
  return (
    <div className="auth-toast-wrap">
      {toasts.map(t => (
        <div key={t.id} className={`auth-toast ${t.type}`}>
          {t.type === 'success' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <AlertCircle />
          )}
          {t.message}
        </div>
      ))}
    </div>
  )
}

// ── Validation ─────────────────────────────────────────────────────────────────

const isGmail = (email) => /^[^\s@]+@gmail\.com$/i.test(email)

// ── Login page ─────────────────────────────────────────────────────────────────

function Login() {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [toasts, setToasts] = useState([])


  const addToast = (message, type = 'error') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000)
  }

  // ── OAuth helpers ──────────────────────────────────────────────────────────

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      setIsLoading(true)
      try {
        const { data } = await api.post('/auth/google', { access_token })
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        setUser(data.user)
        addToast('Signed in with Google!', 'success')
        const gUid = data.user._id || data.user.id || ''
        const gDest = data.user.role === 'student' && !localStorage.getItem(`lb_placement_done_${gUid}`)
          ? '/placement-quiz'
          : defaultDashboardPath(data.user.role)
        setTimeout(() => navigate(gDest), 800)
      } catch (err) {
        addToast(err.response?.data?.message || 'Google sign-in failed', 'error')
      } finally {
        setIsLoading(false)
      }
    },
    onError: () => addToast('Google sign-in was cancelled or failed', 'error'),
  })

  // ── Form ───────────────────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!formData.email) {
      e.email = 'Email is required'
    } else if (!isGmail(formData.email)) {
      e.email = 'Only Gmail addresses are accepted (e.g. you@gmail.com)'
    }
    if (!formData.password) {
      e.password = 'Password is required'
    } else if (formData.password.length < 8) {
      e.password = 'Password must be at least 8 characters'
    }
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    try {
      const { data } = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      if (formData.rememberMe) localStorage.setItem('rememberMe', 'true')
      setUser(data.user)
      addToast('Signed in successfully!', 'success')
      const uid = data.user._id || data.user.id || ''
      const dest = data.user.role === 'student' && !localStorage.getItem(`lb_placement_done_${uid}`)
        ? '/placement-quiz'
        : defaultDashboardPath(data.user.role)
      setTimeout(() => navigate(dest), 800)
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        'Sign in failed. Please try again.'
      addToast(msg, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="lb-auth-page">
      <Toast toasts={toasts} />

      <div className="auth-card">
        {/* Brand */}
        <div className="auth-brand">
          <div className="auth-brand-logo">
            <div className="auth-brand-icon">L</div>
            <span className="auth-brand-name">LinguaBridge</span>
          </div>
          <h1 className="auth-page-title">Welcome back</h1>
          <p className="auth-page-subtitle">Sign in to continue your learning journey</p>
        </div>

        {/* Social sign-in */}
        <div className="auth-social-btns">
          <button type="button" className="auth-social-btn" onClick={() => loginWithGoogle()} disabled={isLoading}>
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <div className="auth-or-divider">or continue with email</div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="auth-field">
            <label htmlFor="email">Gmail address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@gmail.com"
              className={`auth-input${errors.email ? ' has-error' : ''}`}
            />
            {errors.email && (
              <div className="auth-field-error">
                <AlertCircle /> {errors.email}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <div className="auth-input-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`auth-input has-toggle${errors.password ? ' has-error' : ''}`}
              />
              <button
                type="button"
                className="auth-pw-toggle"
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff /> : <EyeOpen />}
              </button>
            </div>
            {errors.password && (
              <div className="auth-field-error">
                <AlertCircle /> {errors.password}
              </div>
            )}
          </div>

          {/* Remember me + Forgot password */}
          <div className="auth-form-row">
            <label className="auth-checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="auth-link">Forgot password?</Link>
          </div>

          {/* Submit */}
          <button type="submit" className="auth-submit-btn" disabled={isLoading}>
            {isLoading ? (
              <><div className="auth-spinner" /> Signing in…</>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register">Sign up free</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
