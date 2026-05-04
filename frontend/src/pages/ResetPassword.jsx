import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import api from '../services/api'

export default function ResetPassword() {
  const [searchParams]              = useSearchParams()
  const navigate                    = useNavigate()
  const token                       = searchParams.get('token') || ''
  const [newPassword, setNewPassword] = useState('')
  const [confirm,     setConfirm]     = useState('')
  const [loading,     setLoading]     = useState(false)
  const [success,     setSuccess]     = useState(false)
  const [error,       setError]       = useState('')
  const [showPw,      setShowPw]      = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault(); setError('')
    if (newPassword.length < 8) return setError('Password must be at least 8 characters')
    if (newPassword !== confirm)  return setError('Passwords do not match')
    setLoading(true)
    try {
      await api.post('/auth/reset-password', { token, newPassword })
      setSuccess(true)
      setTimeout(() => navigate('/'), 3000)
    } catch (err) {
      setError(err.response?.data?.message || 'Reset failed. The link may have expired.')
    } finally { setLoading(false) }
  }

  if (!token) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: 32 }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>⚠️</div>
        <h2>Invalid Reset Link</h2>
        <p style={{ color: '#6B7280', marginBottom: 20 }}>This password reset link is invalid or missing.</p>
        <Link to="/forgot-password" style={{ color: '#2563EB', fontWeight: 700 }}>Request a new one →</Link>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#F0F7FF,#fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: 'white', borderRadius: 20, padding: 40, width: '100%', maxWidth: 420, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
        {success ? (
          <>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
            <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 8 }}>Password Reset!</h1>
            <p style={{ color: '#6B7280', marginBottom: 20 }}>Your password has been changed successfully. Redirecting to login...</p>
            <div style={{ height: 4, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: '#22C55E', animation: 'progressFill 3s linear forwards', borderRadius: 4 }} />
            </div>
            <style>{`@keyframes progressFill { from{width:0} to{width:100%} }`}</style>
          </>
        ) : (
          <>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🔒</div>
            <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#111827', marginBottom: 8 }}>Set New Password</h1>
            <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: 28 }}>Choose a strong password for your account.</p>

            {error && <div style={{ background: '#FEE2E2', color: '#991B1B', padding: '10px 14px', borderRadius: 10, marginBottom: 16, fontSize: '0.875rem', fontWeight: 500 }}>{error}</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['New Password', newPassword, setNewPassword], ['Confirm Password', confirm, setConfirm]].map(([label, val, setter], i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontWeight: 600, fontSize: '0.875rem', color: '#374151' }}>{label}</label>
                  <div style={{ position: 'relative' }}>
                    <input type={showPw ? 'text' : 'password'} value={val} onChange={e => setter(e.target.value)} required
                      placeholder={i === 0 ? 'Min 8 characters' : 'Repeat your password'}
                      style={{ width: '100%', padding: '12px 42px 12px 16px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none' }}
                      onFocus={e => e.target.style.borderColor = '#2563EB'}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
                    {i === 0 && <button type="button" onClick={() => setShowPw(s => !s)}
                      style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '1rem' }}>
                      {showPw ? '🙈' : '👁'}
                    </button>}
                  </div>
                </div>
              ))}
              <button type="submit" disabled={loading}
                style={{ padding: '13px', background: '#2563EB', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: '0.95rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'inherit', marginTop: 4 }}>
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}