import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'
import { defaultDashboardPath } from '../auth/rbac'
import '../App.css'

function Auth() {
  const navigate = useNavigate()
  const { setUser } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', role: 'student' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
    if (errors.general) setErrors({ ...errors, general: '' })
  }

  const validateLogin = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateRegister = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
      newErrors.password = 'Password must contain uppercase, lowercase, and number'
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = isLogin ? validateLogin() : validateRegister()
    if (!isValid) return
    setIsLoading(true)
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register'
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password, role: formData.role }
      const { data } = await api.post(endpoint, payload)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      setUser(data.user)
      navigate(defaultDashboardPath(data.user.role))
    } catch (err) {
      setErrors({ general: err.response?.data?.message || 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const switchMode = (toLogin) => {
    setIsLogin(toLogin)
    setFormData({ name: '', email: '', password: '', confirmPassword: '', role: 'student' })
    setErrors({})
  }

  return (
    <div className="auth-landing">
      <div className="auth-landing-container">
        <div className="auth-landing-content">
          <div className="auth-branding">
            <div className="auth-logo"><h1>LinguaBridge</h1></div>
            <h2 className="auth-welcome">{isLogin ? 'Welcome Back!' : 'Join LinguaBridge Today'}</h2>
            <p className="auth-subtitle">
              {isLogin ? 'Sign in to continue your English learning journey' : 'Start your English learning journey and join thousands of learners worldwide'}
            </p>
          </div>

          <div className="auth-form-container">
            <div className="auth-tabs">
              <button type="button" className={`auth-tab ${isLogin ? 'active' : ''}`} onClick={() => switchMode(true)}>Sign In</button>
              <button type="button" className={`auth-tab ${!isLogin ? 'active' : ''}`} onClick={() => switchMode(false)}>Sign Up</button>
            </div>

            {errors.general && (
              <div style={{ background: '#FEE2E2', color: '#DC2626', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {errors.general}
              </div>
            )}

            <form className="auth-form" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className={errors.name ? 'error' : ''} />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className={errors.email ? 'error' : ''} />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange}
                    placeholder={isLogin ? 'Enter your password' : 'Create a password (min 8 characters)'} className={errors.password ? 'error' : ''} />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword
                      ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
                {!isLogin && <small className="form-hint">Must contain uppercase, lowercase, and number</small>}
              </div>

              {!isLogin && (
                <>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="password-input-wrapper">
                      <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword"
                        value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" className={errors.confirmPassword ? 'error' : ''} />
                      <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword
                          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                          : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        }
                      </button>
                    </div>
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">I am a</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange}
                      style={{ padding: '0.75rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit', background: 'var(--white)', color: 'var(--gray-900)', cursor: 'pointer' }}>
                      <option value="student">Student</option>
                      <option value="instructor">Instructor</option>
                    </select>
                  </div>
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                    </label>
                  </div>
                </>
              )}

              {isLogin && (
                <div className="form-options">
                  <label className="checkbox-label"><input type="checkbox" /><span>Remember me</span></label>
                  <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                </div>
              )}

              <button type="submit" className="btn-primary btn-large btn-full" disabled={isLoading}>
                {isLoading ? (isLogin ? 'Signing in...' : 'Creating Account...') : (isLogin ? 'Sign In' : 'Create Account')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth