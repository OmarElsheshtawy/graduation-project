import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStreak, useXP, useDailyChallenge } from '../hooks/useGameFeatures'
import { COURSES, loadProgress } from '../data/courseData'

const BADGES = [
  { id: 'first_lesson',  icon: '🌟', name: 'First Step',      desc: 'Complete your first lesson',        check: (stats) => stats.totalLessons >= 1 },
  { id: 'streak_3',      icon: '🔥', name: 'On Fire',         desc: '3-day learning streak',             check: (stats) => stats.streak >= 3 },
  { id: 'streak_7',      icon: '💪', name: 'Week Warrior',    desc: '7-day streak',                      check: (stats) => stats.streak >= 7 },
  { id: 'streak_30',     icon: '⚡', name: 'Lightning',       desc: '30-day streak',                     check: (stats) => stats.streak >= 30 },
  { id: 'xp_100',        icon: '📈', name: 'XP Collector',    desc: 'Earn 100 XP',                       check: (stats) => stats.totalXP >= 100 },
  { id: 'xp_500',        icon: '💰', name: 'XP Rich',         desc: 'Earn 500 XP',                       check: (stats) => stats.totalXP >= 500 },
  { id: 'xp_1000',       icon: '💎', name: 'Diamond',         desc: 'Earn 1000 XP',                      check: (stats) => stats.totalXP >= 1000 },
  { id: 'course_done',   icon: '🎓', name: 'Graduate',        desc: 'Complete a full course',            check: (stats) => stats.coursesCompleted >= 1 },
  { id: 'three_courses', icon: '🏫', name: 'Scholar',         desc: 'Complete 3 courses',                check: (stats) => stats.coursesCompleted >= 3 },
  { id: 'all_courses',   icon: '🏆', name: 'Champion',        desc: 'Complete all 6 courses',            check: (stats) => stats.coursesCompleted >= 6 },
  { id: 'lessons_10',    icon: '📚', name: 'Bookworm',        desc: 'Complete 10 lessons',               check: (stats) => stats.totalLessons >= 10 },
  { id: 'lessons_50',    icon: '🧠', name: 'Knowledge Seeker',desc: 'Complete 50 lessons',               check: (stats) => stats.totalLessons >= 50 },
  { id: 'perfect_quiz',  icon: '🎯', name: 'Sharpshooter',   desc: 'Score 100% on any quiz',            check: (stats) => stats.perfectQuiz },
  { id: 'level_5',       icon: '⚔️', name: 'Veteran',        desc: 'Reach level 5',                     check: (stats) => stats.level >= 5 },
  { id: 'level_10',      icon: '👑', name: 'Grandmaster',    desc: 'Reach level 10',                    check: (stats) => stats.level >= 10 },
  { id: 'early_bird',    icon: '🌅', name: 'Early Bird',     desc: 'Practice before 8 AM',              check: (stats) => stats.earlyBird },
]

export default function Gamification() {
  const navigate = useNavigate()
  const { streak, todayDone } = useStreak()
  const { totalXP, level, title, getProgress, getLevelInfo, LEVELS } = useXP()
  const { challenge, state: challengeState } = useDailyChallenge()
  const [activeTab, setActiveTab] = useState('overview')

  // Calculate stats
  const stats = (() => {
    let totalLessons = 0, coursesCompleted = 0
    COURSES.forEach(c => {
      const prog  = loadProgress(c.id)
      const total = c.units.reduce((a, u) => a + u.lessons.length, 0)
      totalLessons    += prog.completedLessons?.length || 0
      if ((prog.completedLessons?.length || 0) === total && total > 0) coursesCompleted++
    })
    const perfectQuiz = !!localStorage.getItem('lb_perfect_quiz')
    const earlyBird   = (() => { const h = new Date().getHours(); return h < 8 && todayDone })()
    return { streak, totalXP, totalLessons, coursesCompleted, level, perfectQuiz, earlyBird }
  })()

  const earnedBadges  = BADGES.filter(b => b.check(stats))
  const lockedBadges  = BADGES.filter(b => !b.check(stats))
  const lvlProgress   = getProgress()
  const currentLvlInfo = getLevelInfo(level)
  const nextLvlInfo    = getLevelInfo(level + 1)

  const LEADERBOARD = [
    { rank: 1, name: 'Ahmed Hassan',   xp: 4850, streak: 32, avatar: 'A', country: '🇪🇬' },
    { rank: 2, name: 'Sarah Martinez', xp: 4200, streak: 28, avatar: 'S', country: '🇲🇽' },
    { rank: 3, name: 'Yuki Tanaka',    xp: 3900, streak: 21, avatar: 'Y', country: '🇯🇵' },
    { rank: 4, name: 'Maria Silva',    xp: 3400, streak: 15, avatar: 'M', country: '🇧🇷' },
    { rank: 5, name: 'Lena Müller',    xp: 3100, streak: 12, avatar: 'L', country: '🇩🇪' },
    { rank: 6, name: 'Carlos Ruiz',    xp: 2850, streak: 9,  avatar: 'C', country: '🇪🇸' },
    { rank: 7, name: 'Emma Thompson',  xp: 2600, streak: 7,  avatar: 'E', country: '🇬🇧' },
    { rank: 8, name: 'Raj Patel',      xp: 2300, streak: 5,  avatar: 'R', country: '🇮🇳' },
  ]
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#1E3A5F,#2563EB)', padding: '40px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            {/* Level badge */}
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 20, padding: '20px 24px', backdropFilter: 'blur(10px)', textAlign: 'center', minWidth: 140 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 4 }}>{currentLvlInfo?.icon}</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Level {level}</div>
              <div style={{ color: 'white', fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, fontSize: '1rem', marginTop: 2 }}>{title}</div>
            </div>

            {/* XP progress */}
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: 4 }}>Total XP</div>
              <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '2.8rem', fontWeight: 800, color: 'white', lineHeight: 1, marginBottom: 12 }}>
                ⚡ {totalXP.toLocaleString()}
              </div>
              {nextLvlInfo && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                    <span>Level {level}: {currentLvlInfo?.title}</span>
                    <span>Level {level + 1}: {nextLvlInfo?.title} ({lvlProgress.xpToNext} XP to go)</span>
                  </div>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.2)', borderRadius: 10, overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg,#60A5FA,#A78BFA)', width: `${lvlProgress.percent}%`, borderRadius: 10, transition: 'width 1s ease' }} />
                  </div>
                </>
              )}
            </div>

            {/* Quick stats */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { icon: '🔥', val: streak, label: 'Day Streak' },
                { icon: '🏅', val: earnedBadges.length, label: 'Badges' },
                { icon: '📚', val: stats.totalLessons, label: 'Lessons' },
                { icon: '🎓', val: stats.coursesCompleted, label: 'Completed' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 14, padding: '12px 16px', textAlign: 'center', minWidth: 70 }}>
                  <div style={{ fontSize: '1.3rem' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.3rem', color: 'white', lineHeight: 1.1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px' }}>

        {/* Daily Challenge */}
        <div style={{ background: challengeState.completed ? 'linear-gradient(135deg,#065F46,#047857)' : 'linear-gradient(135deg,#1E3A5F,#2563EB)', borderRadius: 20, padding: '20px 24px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', color: 'white' }}>
          <div style={{ fontSize: '2.5rem' }}>{challengeState.completed ? '✅' : '🎯'}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
              Daily Challenge {challengeState.completed ? '— COMPLETED!' : '— Today'}
            </div>
            <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>{challenge.title}</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>{challenge.desc}</div>
            {!challengeState.completed && (
              <div style={{ marginTop: 10 }}>
                <div style={{ height: 5, background: 'rgba(255,255,255,0.2)', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: 'white', width: `${Math.round(((challengeState.progress || 0) / challenge.target) * 100)}%`, borderRadius: 10 }} />
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>
                  {challengeState.progress || 0}/{challenge.target} · Reward: ⚡{challenge.xp} XP
                </div>
              </div>
            )}
          </div>
          {!challengeState.completed && (
            <button onClick={() => navigate('/courses')}
              style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 12, padding: '10px 20px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem', backdropFilter: 'blur(4px)' }}>
              Start Now →
            </button>
          )}
        </div>

        {/* Streak calendar */}
        <div style={{ background: 'white', borderRadius: 20, padding: '20px 24px', marginBottom: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: '#111827', margin: 0 }}>🔥 Streak — {streak} days</h3>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{todayDone ? '✅ Practiced today!' : '⏰ Practice today to keep your streak!'}</span>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[...Array(7)].map((_, i) => {
              const dayOffset = 6 - i
              const date      = new Date(Date.now() - dayOffset * 86400000)
              const dayName   = date.toLocaleDateString('en', { weekday: 'short' })
              const isToday   = dayOffset === 0
              const done      = isToday ? todayDone : dayOffset < streak
              return (
                <div key={i} style={{ flex: 1, textAlign: 'center', minWidth: 36 }}>
                  <div style={{ fontSize: '0.65rem', color: '#9CA3AF', marginBottom: 6, fontWeight: 600 }}>{dayName}</div>
                  <div style={{ width: '100%', aspectRatio: '1', borderRadius: 10, background: done ? 'linear-gradient(135deg,#F59E0B,#EF4444)' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', border: isToday ? '2px solid #2563EB' : 'none' }}>
                    {done ? '🔥' : ''}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, background: 'white', borderRadius: 14, padding: 5, marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', width: 'fit-content' }}>
          {[['badges','🏅 Badges'],['leaderboard','🏆 Leaderboard'],['levels','📈 Levels']].map(([key,label]) => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ padding: '8px 18px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', background: activeTab === key ? '#2563EB' : 'transparent', color: activeTab === key ? 'white' : '#6B7280' }}>
              {label}
            </button>
          ))}
        </div>

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', color: '#111827', marginBottom: 6 }}>Earned Badges ({earnedBadges.length}/{BADGES.length})</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: 20 }}>Complete challenges and reach milestones to unlock all badges!</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12, marginBottom: 28 }}>
              {earnedBadges.map(badge => (
                <div key={badge.id} style={{ background: 'white', borderRadius: 16, padding: '16px 12px', textAlign: 'center', border: '2px solid #FDE68A', boxShadow: '0 4px 12px rgba(245,158,11,0.15)' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{badge.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#111827', marginBottom: 4 }}>{badge.name}</div>
                  <div style={{ fontSize: '0.68rem', color: '#9CA3AF', lineHeight: 1.4 }}>{badge.desc}</div>
                </div>
              ))}
            </div>
            {lockedBadges.length > 0 && (
              <>
                <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', color: '#9CA3AF', marginBottom: 16 }}>Locked ({lockedBadges.length})</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
                  {lockedBadges.map(badge => (
                    <div key={badge.id} style={{ background: '#F9FAFB', borderRadius: 16, padding: '16px 12px', textAlign: 'center', border: '1px solid #E5E7EB', opacity: 0.6 }}>
                      <div style={{ fontSize: '2.2rem', marginBottom: 8, filter: 'grayscale(1)' }}>{badge.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#6B7280', marginBottom: 4 }}>{badge.name}</div>
                      <div style={{ fontSize: '0.68rem', color: '#9CA3AF', lineHeight: 1.4 }}>{badge.desc}</div>
                      <div style={{ fontSize: '0.65rem', marginTop: 6, color: '#C9A227', fontWeight: 700 }}>🔒 Locked</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 12, marginBottom: 32, background: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', borderRadius: 20, padding: '28px 20px' }}>
              {[LEADERBOARD[1], LEADERBOARD[0], LEADERBOARD[2]].map((l, i) => {
                const heights = [110, 140, 95]
                const ranks   = [2, 1, 3]
                const rank    = ranks[i]
                const medals  = ['🥈','🥇','🥉']
                return (
                  <div key={l.rank} style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{medals[i]}</div>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', margin: '0 auto 8px' }}>{l.avatar}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#111827' }}>{l.name.split(' ')[0]}</div>
                    <div style={{ fontSize: '0.72rem', color: '#2563EB', fontWeight: 700 }}>⚡{l.xp.toLocaleString()}</div>
                    <div style={{ height: heights[i], background: rank === 1 ? '#2563EB' : rank === 2 ? '#94A3B8' : '#CD7C57', borderRadius: '8px 8px 0 0', marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, fontSize: '1.2rem' }}>#{rank}</div>
                  </div>
                )
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LEADERBOARD.map(l => (
                <div key={l.rank} style={{ background: 'white', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: l.rank <= 3 ? ['#FEF3C7','#F3F4F6','#FEE2E2'][l.rank-1] : '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: l.rank <= 3 ? ['#B45309','#475569','#B91C1C'][l.rank-1] : '#9CA3AF', flexShrink: 0 }}>#{l.rank}</div>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>{l.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827' }}>{l.name} {l.country}</div>
                    <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>🔥 {l.streak} day streak</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: '#2563EB' }}>{l.xp.toLocaleString()}</div>
                    <div style={{ fontSize: '0.68rem', color: '#9CA3AF' }}>XP</div>
                  </div>
                </div>
              ))}
              {/* My rank */}
              <div style={{ background: '#EFF6FF', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, border: '2px solid #2563EB' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: '#1D4ED8' }}>#14</div>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#1E40AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>{user?.name?.charAt(0) || 'Y'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#1D4ED8' }}>{user?.name || 'You'} <span style={{ background: '#2563EB', color: 'white', fontSize: '0.6rem', padding: '2px 6px', borderRadius: 4, fontWeight: 800 }}>YOU</span></div>
                  <div style={{ fontSize: '0.72rem', color: '#93C5FD' }}>🔥 {streak} day streak</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: '#2563EB' }}>{totalXP}</div>
                  <div style={{ fontSize: '0.68rem', color: '#93C5FD' }}>XP</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Levels Tab */}
        {activeTab === 'levels' && (
          <div>
            <p style={{ color: '#6B7280', marginBottom: 20, fontSize: '0.875rem' }}>Earn XP by completing lessons to level up and unlock new titles!</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LEVELS.map(lvl => {
                const isCurrentLevel = lvl.level === level
                const isUnlocked     = totalXP >= lvl.xp
                return (
                  <div key={lvl.level} style={{ background: 'white', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, border: isCurrentLevel ? '2px solid #2563EB' : '1px solid #F3F4F6', boxShadow: isCurrentLevel ? '0 4px 14px rgba(37,99,235,0.15)' : 'none' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: isUnlocked ? 'linear-gradient(135deg,#2563EB,#7C3AED)' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0, filter: isUnlocked ? 'none' : 'grayscale(1)', opacity: isUnlocked ? 1 : 0.5 }}>
                      {lvl.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: isUnlocked ? '#111827' : '#9CA3AF', fontSize: '0.95rem' }}>Level {lvl.level}: {lvl.title}</span>
                        {isCurrentLevel && <span style={{ background: '#2563EB', color: 'white', fontSize: '0.6rem', fontWeight: 800, padding: '2px 7px', borderRadius: 6 }}>CURRENT</span>}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: 2 }}>Requires {lvl.xp.toLocaleString()} XP</div>
                    </div>
                    {isUnlocked ? (
                      <span style={{ color: '#22C55E', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                    ) : (
                      <span style={{ color: '#9CA3AF', fontSize: '0.8rem', fontWeight: 600 }}>{(lvl.xp - totalXP).toLocaleString()} XP needed</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}