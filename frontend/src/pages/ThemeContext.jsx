import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('lb_theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('lb_theme', dark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    // Swap CSS variables for dark mode
    if (dark) {
      document.documentElement.style.setProperty('--white',    '#1F2937')
      document.documentElement.style.setProperty('--gray-50',  '#111827')
      document.documentElement.style.setProperty('--gray-100', '#1F2937')
      document.documentElement.style.setProperty('--gray-200', '#374151')
      document.documentElement.style.setProperty('--gray-300', '#4B5563')
      document.documentElement.style.setProperty('--gray-400', '#6B7280')
      document.documentElement.style.setProperty('--gray-500', '#9CA3AF')
      document.documentElement.style.setProperty('--gray-600', '#D1D5DB')
      document.documentElement.style.setProperty('--gray-700', '#E5E7EB')
      document.documentElement.style.setProperty('--gray-800', '#F3F4F6')
      document.documentElement.style.setProperty('--gray-900', '#F9FAFB')
      document.documentElement.style.setProperty('--black',    '#FFFFFF')
      document.body.style.background = '#111827'
      document.body.style.color      = '#F9FAFB'
    } else {
      document.documentElement.style.setProperty('--white',    '#FFFFFF')
      document.documentElement.style.setProperty('--gray-50',  '#F9FAFB')
      document.documentElement.style.setProperty('--gray-100', '#F3F4F6')
      document.documentElement.style.setProperty('--gray-200', '#E5E7EB')
      document.documentElement.style.setProperty('--gray-300', '#D1D5DB')
      document.documentElement.style.setProperty('--gray-400', '#9CA3AF')
      document.documentElement.style.setProperty('--gray-500', '#6B7280')
      document.documentElement.style.setProperty('--gray-600', '#4B5563')
      document.documentElement.style.setProperty('--gray-700', '#374151')
      document.documentElement.style.setProperty('--gray-800', '#1F2937')
      document.documentElement.style.setProperty('--gray-900', '#111827')
      document.documentElement.style.setProperty('--black',    '#0A0A0A')
      document.body.style.background = '#FFFFFF'
      document.body.style.color      = '#1F2937'
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// ── Theme Toggle Button ───────────────────────────────────────────────────
export function ThemeToggle({ size = 36 }) {
  const { dark, toggle } = useTheme()
  return (
    <button onClick={toggle} title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{ width: size, height: size, borderRadius: '50%', border: '1.5px solid var(--gray-200)', background: 'var(--gray-100)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.45, transition: 'all 0.2s', flexShrink: 0 }}>
      {dark ? '☀️' : '🌙'}
    </button>
  )
}