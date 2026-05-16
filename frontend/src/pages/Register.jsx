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

// ── Password strength ──────────────────────────────────────────────────────────

function getStrength(pw) {
  if (!pw) return 0
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[a-z]/.test(pw)) s++
  if (/\d/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  return s
}

const STRENGTH_CLASS = ['', 'weak', 'weak', 'fair', 'good', 'strong']
const STRENGTH_LABEL = ['', 'Weak', 'Weak', 'Fair', 'Good', 'Strong']
const STRENGTH_COLOR = ['', '#ef4444', '#ef4444', '#f59e0b', '#10b981', '#2563eb']

function PasswordStrength({ password }) {
  const s = getStrength(password)
  if (!password) return null
  return (
    <div>
      <div className="auth-pw-strength">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`auth-pw-strength-bar ${s >= i ? STRENGTH_CLASS[s] : ''}`} />
        ))}
      </div>
      <div className="auth-field-hint" style={{ color: STRENGTH_COLOR[s] }}>
        {STRENGTH_LABEL[s]}
      </div>
    </div>
  )
}

// ── Validation ─────────────────────────────────────────────────────────────────

const isGmail = (email) => /^[^\s@]+@gmail\.com$/i.test(email)

// ── Register page ──────────────────────────────────────────────────────────────

function Register() {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
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
        addToast('Signed up with Google!', 'success')
        const dest = data.user.role === 'student' ? '/placement-quiz' : defaultDashboardPath(data.user.role)
        setTimeout(() => navigate(dest), 800)
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
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) {
      e.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      e.name = 'Name must be at least 2 characters'
    }
    if (!formData.email) {
      e.email = 'Email is required'
    } else if (!isGmail(formData.email)) {
      e.email = 'Only Gmail addresses are accepted (e.g. you@gmail.com)'
    }
    if (!formData.password) {
      e.password = 'Password is required'
    } else if (formData.password.length < 8) {
      e.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      e.password = 'Must contain uppercase, lowercase, and a number'
    }
    if (!formData.confirmPassword) {
      e.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      e.confirmPassword = 'Passwords do not match'
    }
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    try {
      const { data } = await api.post('/auth/register', {
        name: formData.name.trim(),
        email: formData.email,
        password: formData.password,
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      addToast('Account created! Redirecting…', 'success')
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        'Registration failed. Please try again.'
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
          <h1 className="auth-page-title">Create your account</h1>
          <p className="auth-page-subtitle">Start your English learning journey today</p>
        </div>

        {/* Social sign-up */}
        <div className="auth-social-btns">
          <button type="button" className="auth-social-btn" onClick={() => loginWithGoogle()} disabled={isLoading}>
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <div className="auth-or-divider">or sign up with email</div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className="auth-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className={`auth-input${errors.name ? ' has-error' : ''}`}
            />
            {errors.name && (
              <div className="auth-field-error">
                <AlertCircle /> {errors.name}
              </div>
            )}
          </div>

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
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
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
            {errors.password ? (
              <div className="auth-field-error">
                <AlertCircle /> {errors.password}
              </div>
            ) : (
              <PasswordStrength password={formData.password} />
            )}
          </div>

          {/* Confirm Password */}
          <div className="auth-field">
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="auth-input-wrap">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                className={`auth-input has-toggle${errors.confirmPassword ? ' has-error' : ''}`}
              />
              <button
                type="button"
                className="auth-pw-toggle"
                onClick={() => setShowConfirm(v => !v)}
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? <EyeOff /> : <EyeOpen />}
              </button>
            </div>
            {errors.confirmPassword && (
              <div className="auth-field-error">
                <AlertCircle /> {errors.confirmPassword}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="auth-submit-btn"
            disabled={isLoading}
            style={{ marginTop: '0.375rem' }}
          >
            {isLoading ? (
              <><div className="auth-spinner" /> Creating account…</>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <p className="auth-terms">
          By creating an account you agree to our{' '}
          <Link to="/terms">Terms of Service</Link> and{' '}
          <Link to="/privacy">Privacy Policy</Link>
        </p>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
