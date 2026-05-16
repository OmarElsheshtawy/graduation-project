import { useState, useEffect } from 'react'
import api from '../services/api'
import { useTheme } from './ThemeContext'

const BADGES = [
  { id: 1, icon: '🔥', name: 'On Fire', desc: '7-day streak' },
  { id: 2, icon: '⚡', name: 'Quick Learner', desc: '5 lessons/day' },
  { id: 3, icon: '🏆', name: 'Champion', desc: 'Top 10 rank' },
  { id: 4, icon: '📚', name: 'Bookworm', desc: '10 courses started' },
  { id: 5, icon: '💎', name: 'Diamond', desc: '100% on quiz' },
  { id: 6, icon: '🌍', name: 'Global', desc: '5 countries chatted' },
]

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([])
  const [myRank, setMyRank] = useState(null)
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState('weekly')

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  useEffect(() => {
    setLoading(true)
    api.get('/analytics/leaderboard')
      .then(({ data }) => {
        const ranked = data.leaderboard.map((u, i) => ({
          rank:    i + 1,
          name:    u.name,
          avatar:  u.name?.charAt(0).toUpperCase() || '?',
          xp:      u.xp,
          courses: u.enrolled_courses,
          streak:  0, // not stored in DB yet
        }))
        setLeaders(ranked)
        if (user) {
          const me = ranked.find(r => r.name === user.name)
          if (me) setMyRank({ rank: me.rank, xp: me.xp, streak: me.streak })
        }
      })
      .catch(() => setLeaders([]))
      .finally(() => setLoading(false))
  }, [period])

  const { dark } = useTheme()
  const rankColors = { 1: { bg: '#FEF3C7', color: '#B45309', medal: '🥇' }, 2: { bg: '#F1F5F9', color: '#475569', medal: '🥈' }, 3: { bg: '#FEE2E2', color: '#B91C1C', medal: '🥉' } }
  const podiumBg = dark
    ? 'linear-gradient(135deg, rgba(37,99,235,0.15), #1E3A5F)'
    : 'linear-gradient(135deg, var(--primary-light), #EEF2FF)'

  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: 12}}>🏆</div>
            <h1 className="page-hero-title">Leaderboard</h1>
            <p className="page-hero-desc">Compete with learners worldwide and climb the ranks!</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="leaderboard-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>

            {/* Main Leaderboard */}
            <div>
              {/* Period Toggle */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                {['weekly','monthly','alltime'].map(p => (
                  <button key={p} onClick={() => setPeriod(p)}
                    className={`btn btn-sm ${period === p ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ textTransform: 'capitalize' }}>
                    {p === 'alltime' ? 'All Time' : p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>

              {/* Top 3 Podium */}
              {!loading && leaders.length >= 3 && (
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 12, marginBottom: 32, background: podiumBg, borderRadius: 16, padding: '32px 24px' }}>
                  {[leaders[1], leaders[0], leaders[2]].map((l, i) => {
                    const heights = ['100px', '130px', '90px']
                    const ranks = [2, 1, 3]
                    const rank = ranks[i]
                    return (
                      <div key={l.rank} style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{rankColors[rank]?.medal}</div>
                        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.1rem', margin: '0 auto 8px' }}>
                          {l.avatar}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--gray-900)', marginBottom: 2 }}>{l.name.split(' ')[0]}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>{l.xp.toLocaleString()} XP</div>
                        <div style={{ height: heights[i], background: rank === 1 ? 'var(--primary)' : rank === 2 ? 'var(--gray-300)' : '#CD7C57', borderRadius: '8px 8px 0 0', marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>
                          #{rank}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Full List */}
              {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray-400)' }}>
                  <div className="spinner" style={{ width: 32, height: 32, borderColor: 'var(--gray-200)', borderTopColor: 'var(--primary)', margin: '0 auto 12px' }} />
                  Loading leaderboard...
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {leaders.map(leader => {
                    const isMe = user?.name === leader.name
                    const rc = rankColors[leader.rank]
                    return (
                      <div key={leader.rank} className="leaderboard-item" style={{ background: isMe ? 'var(--primary-light)' : undefined, border: isMe ? '2px solid var(--primary)' : undefined }}>
                        <div className={`leaderboard-rank ${leader.rank <= 3 ? `rank-${leader.rank}` : 'rank-other'}`}>
                          {leader.rank <= 3 ? rc.medal : `#${leader.rank}`}
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
                          {leader.avatar}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--gray-900)', display: 'flex', alignItems: 'center', gap: 6 }}>
                            {leader.name}
                            {isMe && <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>You</span>}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', display: 'flex', gap: 12, marginTop: 2 }}>
                            <span>🔥 {leader.streak} day streak</span>
                            <span>📚 {leader.courses} courses</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--primary)' }}>{leader.xp.toLocaleString()}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>XP</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* My Rank */}
              {myRank && (
                <div style={{ marginTop: 16, padding: 16, background: 'var(--primary)', borderRadius: 12, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Your ranking</div>
                  <div style={{ display: 'flex', gap: 24, fontSize: '0.875rem' }}>
                    <span>#{myRank.rank} overall</span>
                    <span>🔥 {myRank.streak} days</span>
                    <span>{myRank.xp.toLocaleString()} XP</span>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Badges */}
            <div>
              <div className="card" style={{ padding: 24, marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16 }}>🎖️ Achievement Badges</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {BADGES.map(badge => (
                    <div key={badge.id} style={{ textAlign: 'center', padding: '16px 8px', background: 'var(--gray-50)', borderRadius: 10, border: '1px solid var(--gray-100)' }}>
                      <div style={{ fontSize: '1.8rem', marginBottom: 6 }}>{badge.icon}</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: 2 }}>{badge.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>{badge.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16 }}>⚡ How to Earn XP</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[['Complete a lesson','+ 50 XP'],['Pass a quiz','+ 100 XP'],['Daily login streak','+ 25 XP/day'],['Complete a course','+ 500 XP'],['Help a classmate','+ 30 XP'],['Perfect quiz score','+ 200 XP']].map(([action, xp]) => (
                    <div key={action} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
                      <span style={{ color: 'var(--gray-600)' }}>{action}</span>
                      <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.8rem' }}>{xp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
