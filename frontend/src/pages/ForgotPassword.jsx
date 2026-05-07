import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import api from '../services/api'

export default function ForgotPassword() {
  const [email, setEmail]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [sent, setSent]         = useState(false)
  const [devLink, setDevLink]   = useState('')
  const [error, setError]       = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const { data } = await api.post('/auth/forgot-password', { email })
      setSent(true)
      if (data.devResetUrl) setDevLink(data.devResetUrl)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#F0F7FF,#fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: 'white', borderRadius: 20, padding: 40, maxWidth: 440, width: '100%', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🔑</div>
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', color: '#111827', margin: '0 0 8px' }}>Forgot Password?</h1>
          <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>Enter your email and we'll send you a reset link.</p>
        </div>

        {sent ? (
          <div>
            <div style={{ background: '#DCFCE7', borderRadius: 12, padding: '16px 20px', textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>✅</div>
              <p style={{ color: '#166534', fontWeight: 600, margin: 0 }}>Reset link sent! Check your email.</p>
            </div>
            {devLink && (
              <div style={{ background: '#FEF3C7', borderRadius: 10, padding: 14, marginBottom: 16, fontSize: '0.8rem' }}>
                <strong>🛠 Dev mode — click to reset:</strong><br/>
                <a href={devLink} style={{ color: '#2563EB', wordBreak: 'break-all' }}>{devLink}</a>
              </div>
            )}
            <Link to="/" style={{ display: 'block', textAlign: 'center', color: '#2563EB', fontWeight: 600, marginTop: 12 }}>← Back to Sign In</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {error && <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '10px 14px', borderRadius: 10, fontSize: '0.875rem' }}>{error}</div>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontWeight: 600, fontSize: '0.875rem', color: '#374151' }}>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required
                style={{ padding: '12px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.925rem', fontFamily: 'inherit', outline: 'none' }}
                onFocus={e => e.target.style.borderColor = '#2563EB'}
                onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
            </div>
            <button type="submit" disabled={loading} className="btn btn-primary btn-full btn-lg">
              {loading ? '⏳ Sending...' : 'Send Reset Link'}
            </button>
            <Link to="/" style={{ textAlign: 'center', color: '#6B7280', fontSize: '0.875rem' }}>← Back to Sign In</Link>
          </form>
        )}
      </div>
    </div>
  )
}

export function ResetPassword() {
  const navigate = useNavigate()
  const [params]  = useSearchParams()
  const token     = params.get('token') || ''
  const [password,        setPassword]        = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)
  const [error,   setError]     = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) { setError('Passwords do not match'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters'); return }
    setLoading(true); setError('')
    try {
      await api.post('/auth/reset-password', { token, newPassword: password })
      setSuccess(true)
      setTimeout(() => navigate('/'), 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Reset failed. Link may have expired.')
    } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#F0F7FF,#fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: 'white', borderRadius: 20, padding: 40, maxWidth: 440, width: '100%', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🔒</div>
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', color: '#111827', margin: '0 0 8px' }}>Reset Password</h1>
          <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>Enter your new password below.</p>
        </div>

        {success ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#DCFCE7', borderRadius: 12, padding: '20px', marginBottom: 16 }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>🎉</div>
              <p style={{ color: '#166534', fontWeight: 600 }}>Password reset! Redirecting to login...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {error && <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '10px 14px', borderRadius: 10, fontSize: '0.875rem' }}>{error}</div>}
            {!token && <div style={{ background: '#FEF3C7', color: '#92400E', padding: '10px 14px', borderRadius: 10, fontSize: '0.875rem' }}>⚠️ No reset token found. Please use the link from your email.</div>}
            {[['New Password', password, setPassword], ['Confirm Password', confirmPassword, setConfirmPassword]].map(([label, val, setter]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem', color: '#374151' }}>{label}</label>
                <input type="password" value={val} onChange={e => setter(e.target.value)} placeholder="Min 8 characters" required
                  style={{ padding: '12px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.925rem', fontFamily: 'inherit', outline: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#2563EB'}
                  onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
              </div>
            ))}
            <button type="submit" disabled={loading || !token} className="btn btn-primary btn-full btn-lg">
              {loading ? '⏳ Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}