import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { defaultDashboardPath } from '../auth/rbac'

/**
 * @param {string[]} [allow] — if set, only these roles (plus admin bypass for learning APIs is handled in rbac helpers; here admin passes only when included OR when passAdmin=true)
 * @param {boolean} [passAdmin=true] — if true, role admin always matches allow-gated routes (full UI access). Set false for routes that must be admin-only.
 */
export default function ProtectedRoute({ allow, requireAuth = true, passAdmin = true, redirectTo }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="container" style={{ padding: '3rem', textAlign: 'center', color: 'var(--gray-500)' }}>
        Loading…
      </div>
    )
  }

  if (requireAuth && !user) {
    return <Navigate to={redirectTo || '/'} replace state={{ from: location.pathname }} />
  }

  if (allow?.length && user) {
    const adminOk = passAdmin && user.role === 'admin'
    const allowed = adminOk || allow.includes(user.role)
    if (!allowed) {
      return <Navigate to={defaultDashboardPath(user.role)} replace />
    }
  }

  return <Outlet />
}
