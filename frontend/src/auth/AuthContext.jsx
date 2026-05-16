import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

function readStoredUser() {
  try {
    const raw = localStorage.getItem('user')
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  // Only restore a session if the user explicitly chose "Remember me".
  // Without it, clear any leftover token/user so the app always starts fresh.
  const [user, setUser] = useState(() => {
    if (!localStorage.getItem('rememberMe')) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return null
    }
    return readStoredUser()
  })
  const [loading, setLoading] = useState(!!localStorage.getItem('token'))

  const refreshUser = useCallback(async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setUser(null)
      setLoading(false)
      return null
    }
    try {
      const { data } = await api.get('/auth/me')
      const u = data.user
      setUser(u)
      localStorage.setItem('user', JSON.stringify(u))
      return u
    } catch {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUser(null)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refreshUser()
  }, [refreshUser])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('rememberMe')
    setUser(null)
    setLoading(false)
  }, [])

  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      refreshUser,
      logout,
      isAuthenticated: !!user,
    }),
    [user, loading, refreshUser, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
