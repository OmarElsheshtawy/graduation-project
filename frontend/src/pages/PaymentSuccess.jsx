import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const navigate       = useNavigate()
  const isDemo         = searchParams.get('demo') === 'true'
  const plan           = searchParams.get('plan') || 'pro'
  const [count, setCount] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => {
        if (c <= 1) { clearInterval(timer); navigate('/student-dashboard'); }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#F0FFF4,#DCFCE7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: 'white', borderRadius: 24, padding: 48, maxWidth: 480, width: '100%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#22C55E,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px', boxShadow: '0 8px 24px rgba(34,197,94,0.3)' }}>
          ✅
        </div>
        <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.8rem', fontWeight: 700, color: '#111827', marginBottom: 8 }}>
          Payment Successful!
        </h1>
        <p style={{ color: '#6B7280', marginBottom: 24, lineHeight: 1.7 }}>
          Welcome to LinguaBridge <strong style={{ color: '#2563EB', textTransform: 'capitalize' }}>{plan}</strong>!
          {isDemo ? ' (Demo mode — no real charge made)' : ' Your account has been upgraded.'}
        </p>

        {/* What's unlocked */}
        <div style={{ background: '#F0FFF4', borderRadius: 14, padding: '16px 20px', marginBottom: 24, textAlign: 'left' }}>
          <div style={{ fontWeight: 700, color: '#166534', fontSize: '0.85rem', marginBottom: 10 }}>🎉 You now have access to:</div>
          {['All 6 English courses unlocked','Certificates of completion','Priority instructor support','Advanced analytics dashboard','Ad-free learning experience'].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.825rem', color: '#374151', marginBottom: 6 }}>
              <svg width="14" height="14" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              {item}
            </div>
          ))}
        </div>

        <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: 20 }}>
          Redirecting to dashboard in {count}s...
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/courses" style={{ flex: 1, padding: '12px', background: '#2563EB', color: 'white', borderRadius: 12, fontWeight: 700, textAlign: 'center', fontSize: '0.9rem', textDecoration: 'none' }}>
            🚀 Start Learning Now
          </Link>
          <Link to="/student-dashboard" style={{ flex: 1, padding: '12px', background: '#F3F4F6', color: '#374151', borderRadius: 12, fontWeight: 700, textAlign: 'center', fontSize: '0.9rem', textDecoration: 'none' }}>
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}