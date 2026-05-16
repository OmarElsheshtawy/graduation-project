import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import '../App.css'
import { useTheme } from './ThemeContext'

function Profile() {
  const navigate = useNavigate()
  const { dark }  = useTheme()
  const bg        = dark ? '#111827' : 'white'
  const cardBg    = dark ? '#1F2937' : 'white'
  const borderFm  = dark ? '#374151' : '#E8EDF2'
  const text      = dark ? '#F9FAFB' : '#2C3E50'
  const textMuted = dark ? '#9CA3AF' : '#5A6C7D'
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('profile')
  const [profileForm, setProfileForm] = useState({ name: '', avatar_url: '' })
  const [profileLoading, setProfileLoading] = useState(false)
  const [profileMsg, setProfileMsg] = useState({ text: '', error: false })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordMsg, setPasswordMsg] = useState({ text: '', error: false })

  useEffect(() => {
    api.get('/auth/me')
      .then(({ data }) => { setUser(data.user); setProfileForm({ name: data.user.name, avatar_url: data.user.avatar_url || '' }) })
      .catch(() => navigate('/'))
      .finally(() => setLoading(false))
  }, [])

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    setProfileLoading(true)
    try {
      const { data } = await api.put('/auth/me', profileForm)
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
      setProfileMsg({ text: '✅ Profile updated!', error: false })
    } catch (err) {
      setProfileMsg({ text: err.response?.data?.message || 'Failed to update', error: true })
    } finally {
      setProfileLoading(false)
      setTimeout(() => setProfileMsg({ text: '', error: false }), 3000)
    }
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    if (passwordForm.newPassword !== passwordForm.confirmPassword) { setPasswordMsg({ text: 'Passwords do not match', error: true }); return }
    if (passwordForm.newPassword.length < 8) { setPasswordMsg({ text: 'Min 8 characters', error: true }); return }
    setPasswordLoading(true)
    try {
      await api.put('/auth/change-password', { currentPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword })
      setPasswordMsg({ text: '✅ Password changed!', error: false })
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } catch (err) {
      setPasswordMsg({ text: err.response?.data?.message || 'Failed', error: true })
    } finally {
      setPasswordLoading(false)
      setTimeout(() => setPasswordMsg({ text: '', error: false }), 3000)
    }
  }

  if (loading) return <div style={{ textAlign: 'center', padding: '6rem' }}>⏳ Loading...</div>

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">My Profile</h1>
          <p className="page-subtitle">Manage your account settings</p>
        </div>
      </section>
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>

          {/* Profile Card */}
          <div style={{ background: cardBg, borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', border: `1px solid ${borderFm}` }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white', fontWeight: 700 }}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style={{ margin: 0, color: text }}>{user?.name}</h2>
              <p style={{ margin: '4px 0', color: textMuted }}>{user?.email}</p>
              <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'capitalize', background: user?.role === 'instructor' ? '#EDE9FE' : '#E0F2FE', color: user?.role === 'instructor' ? '#6D28D9' : '#0369A1', marginTop: '4px' }}>
                {user?.role}
              </span>
            </div>
            <div style={{ marginLeft: 'auto', color: textMuted, fontSize: '0.85rem' }}>
              Member since {new Date(user?.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: `2px solid ${borderFm}` }}>
            {[['profile', '👤 Edit Profile'], ['password', '🔒 Change Password']].map(([tab, label]) => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '0.75rem 1.5rem', background: 'none', border: 'none', borderBottom: activeTab === tab ? '3px solid #4A90E2' : '3px solid transparent', color: activeTab === tab ? '#4A90E2' : textMuted, fontWeight: 600, cursor: 'pointer', fontSize: '1rem', marginBottom: '-2px' }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ background: cardBg, borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: `1px solid ${borderFm}` }}>
            {activeTab === 'profile' ? (
              <>
                <h3 style={{ marginTop: 0, color: text }}>Edit Profile</h3>
                {profileMsg.text && <div style={{ background: profileMsg.error ? '#FEE2E2' : '#D1FAE5', color: profileMsg.error ? '#DC2626' : '#065F46', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1rem', fontWeight: 600 }}>{profileMsg.text}</div>}
                <form onSubmit={handleProfileSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" value={profileForm.name} onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" value={user?.email} disabled style={{ background: dark ? '#374151' : '#F8FAFC', color: textMuted, cursor: 'not-allowed' }} />
                    <small className="form-hint">Email cannot be changed</small>
                  </div>
                  <div className="form-group">
                    <label>Avatar URL (optional)</label>
                    <input type="url" value={profileForm.avatar_url} onChange={e => setProfileForm({ ...profileForm, avatar_url: e.target.value })} placeholder="https://example.com/photo.jpg" />
                  </div>
                  <button type="submit" className="btn-primary btn-large" disabled={profileLoading}>{profileLoading ? 'Saving...' : 'Save Changes'}</button>
                </form>
              </>
            ) : (
              <>
                <h3 style={{ marginTop: 0, color: text }}>Change Password</h3>
                {passwordMsg.text && <div style={{ background: passwordMsg.error ? '#FEE2E2' : '#D1FAE5', color: passwordMsg.error ? '#DC2626' : '#065F46', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1rem', fontWeight: 600 }}>{passwordMsg.text}</div>}
                <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[['currentPassword', 'Current Password'], ['newPassword', 'New Password'], ['confirmPassword', 'Confirm New Password']].map(([key, label]) => (
                    <div key={key} className="form-group">
                      <label>{label}</label>
                      <input type="password" value={passwordForm[key]} onChange={e => setPasswordForm({ ...passwordForm, [key]: e.target.value })} required />
                    </div>
                  ))}
                  <button type="submit" className="btn-primary btn-large" disabled={passwordLoading}>{passwordLoading ? 'Changing...' : 'Change Password'}</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile