import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'
import { ROLES } from '../auth/rbac'

const ROLE_OPTIONS = [ROLES.STUDENT, ROLES.INSTRUCTOR, ROLES.ADMIN]

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [stats, setStats] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [savingId, setSavingId] = useState(null)

  const load = useCallback(async () => {
    setError('')
    try {
      const [s, u] = await Promise.all([api.get('/admin/stats'), api.get('/admin/users?limit=100')])
      setStats(s.data)
      setUsers(u.data.users || [])
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to load admin data')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const changeRole = async (id, role) => {
    setSavingId(id)
    setError('')
    try {
      await api.patch(`/admin/users/${id}`, { role })
      await load()
    } catch (e) {
      setError(e.response?.data?.message || 'Update failed')
    } finally {
      setSavingId(null)
    }
  }

  const removeUser = async (id) => {
    if (!window.confirm('Delete this user? Related data may be removed by database rules.')) return
    setSavingId(id)
    setError('')
    try {
      await api.delete(`/admin/users/${id}`)
      await load()
    } catch (e) {
      setError(e.response?.data?.message || 'Delete failed')
    } finally {
      setSavingId(null)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gray-50)' }}>
        <p style={{ color: 'var(--gray-500)' }}>Loading admin console…</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)' }}>
      <header style={{ background: 'linear-gradient(135deg, #111827 0%, #1E3A5F 100%)', color: 'white', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontSize: '0.75rem', opacity: 0.8, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>LinguaBridge</div>
          <h1 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700 }}>Admin console</h1>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/home" style={{ color: 'white', textDecoration: 'none', padding: '8px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>Public site</Link>
          <Link to="/student-dashboard" style={{ color: 'white', textDecoration: 'none', padding: '8px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>Student view</Link>
          <button type="button" onClick={handleLogout} style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', padding: '8px 14px', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
            Sign out
          </button>
        </div>
      </header>

      <div className="container" style={{ padding: '28px 20px 60px', maxWidth: 1100 }}>
        {error && (
          <div style={{ background: '#FEF2F2', color: '#B91C1C', padding: '12px 16px', borderRadius: 10, marginBottom: 20, fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        {stats && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
            {[
              ['Users', stats.usersTotal],
              ['Courses', stats.coursesTotal],
              ['Enrollments', stats.enrollmentsTotal],
              ['Students (role)', stats.usersByRole?.student ?? 0],
              ['Instructors', stats.usersByRole?.instructor ?? 0],
              ['Admins', stats.usersByRole?.admin ?? 0],
            ].map(([label, val]) => (
              <div key={label} style={{ background: 'var(--white)', borderRadius: 14, padding: '18px 16px', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--gray-900)', marginTop: 6 }}>{val}</div>
              </div>
            ))}
          </div>
        )}

        <h2 style={{ fontSize: '1.1rem', marginBottom: 14, color: 'var(--gray-900)' }}>Users</h2>
        <div style={{ background: 'var(--white)', borderRadius: 14, border: '1px solid var(--gray-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'var(--gray-50)', textAlign: 'left' }}>
                <th style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--gray-600)' }}>Name</th>
                <th style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--gray-600)' }}>Email</th>
                <th style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--gray-600)' }}>Role</th>
                <th style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--gray-600)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} style={{ borderTop: '1px solid var(--gray-100)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{u.name}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--gray-600)' }}>{u.email}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <select
                      value={u.role}
                      disabled={savingId === u.id}
                      onChange={e => changeRole(u.id, e.target.value)}
                      style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--gray-200)', fontFamily: 'inherit' }}
                    >
                      {ROLE_OPTIONS.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <button
                      type="button"
                      disabled={savingId === u.id}
                      onClick={() => removeUser(u.id)}
                      style={{ background: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA', padding: '6px 12px', borderRadius: 8, cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
