import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CATEGORIES = [
  { id: 'grammar',    icon: '📝', label: 'Grammar Help',      color: '#2563EB', desc: 'Ask grammar questions' },
  { id: 'vocab',      icon: '📚', label: 'Vocabulary',        color: '#22C55E', desc: 'Learn new words together' },
  { id: 'ielts',      icon: '🎯', label: 'IELTS Prep',        color: '#8B5CF6', desc: 'Exam tips and strategies' },
  { id: 'speaking',   icon: '🗣️', label: 'Speaking Practice', color: '#F59E0B', desc: 'Practice conversations' },
  { id: 'writing',    icon: '✍️', label: 'Writing Feedback',  color: '#EF4444', desc: 'Get essay feedback' },
  { id: 'general',    icon: '💬', label: 'General',           color: '#6B7280', desc: 'Off-topic discussions' },
]

const MOCK_POSTS = [
  { id: 1, category: 'grammar',  title: 'When do I use "which" vs "that" in relative clauses?',          author: 'Ahmed H.',  avatar: 'A', time: '2h ago',   replies: 12, likes: 24, solved: true,  preview: 'I always get confused between "which" and "that". Can someone explain with examples?' },
  { id: 2, category: 'ielts',    title: 'IELTS Writing Task 2 — how to reach Band 7?',                    author: 'Maria S.',  avatar: 'M', time: '4h ago',   replies: 18, likes: 41, solved: false, preview: 'I keep scoring 6.5 on writing. What specific things should I improve to reach 7?' },
  { id: 3, category: 'vocab',    title: 'Best way to remember phrasal verbs? Any tricks?',                author: 'Yuki T.',   avatar: 'Y', time: '6h ago',   replies: 9,  likes: 17, solved: false, preview: 'I learn phrasal verbs but forget them quickly. Any memory techniques that work?' },
  { id: 4, category: 'speaking', title: 'How to stop translating from my native language while speaking?', author: 'Lena M.',   avatar: 'L', time: '1d ago',   replies: 22, likes: 38, solved: true,  preview: 'I think in Arabic then translate to English. How do I start thinking directly in English?' },
  { id: 5, category: 'writing',  title: 'Please review my IELTS Task 1 essay on a bar chart',             author: 'Carlos R.', avatar: 'C', time: '1d ago',   replies: 5,  likes: 8,  solved: false, preview: 'The chart shows the percentage of people using social media in 2023. Overall...' },
  { id: 6, category: 'grammar',  title: 'Present Perfect vs Simple Past — still confused!',               author: 'Raj P.',    avatar: 'R', time: '2d ago',   replies: 31, likes: 52, solved: true,  preview: 'Even after studying, I still mix up these two tenses. Please help with clear rules.' },
]

const STUDY_GROUPS = [
  { id: 1, name: 'IELTS September 2025',   members: 24, icon: '🎓', level: 'B2–C1', nextSession: 'Tomorrow 7PM', open: true  },
  { id: 2, name: 'Beginner English Club',  members: 18, icon: '🌱', level: 'A1–A2', nextSession: 'Saturday 10AM', open: true  },
  { id: 3, name: 'Business English Pro',   members: 12, icon: '💼', level: 'B1+',   nextSession: 'Wednesday 6PM', open: false },
  { id: 4, name: 'Daily Speaking Practice',members: 31, icon: '🗣️', level: 'All',   nextSession: 'Daily 8PM',     open: true  },
]

export default function Forums() {
  const navigate = useNavigate()
  const [activeTab,   setActiveTab]   = useState('forum')
  const [activecat,   setActiveCat]   = useState('all')
  const [showNewPost, setShowNewPost] = useState(false)
  const [newPost,     setNewPost]     = useState({ title: '', category: 'grammar', content: '' })
  const [posts,       setPosts]       = useState(MOCK_POSTS)
  const [search,      setSearch]      = useState('')
  const [toast,       setToast]       = useState(null)

  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const filteredPosts = posts.filter(p =>
    (activecat === 'all' || p.category === activecat) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.preview.toLowerCase().includes(search.toLowerCase()))
  )

  const handleSubmitPost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return
    const post = {
      id: Date.now(), category: newPost.category,
      title: newPost.title, author: user?.name || 'You',
      avatar: user?.name?.charAt(0) || 'Y', time: 'Just now',
      replies: 0, likes: 0, solved: false, preview: newPost.content,
    }
    setPosts(prev => [post, ...prev])
    setNewPost({ title: '', category: 'grammar', content: '' })
    setShowNewPost(false)
    setToast('✅ Post published successfully!')
    setTimeout(() => setToast(null), 3000)
  }

  const toggleLike = (postId) => {
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p))
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {toast && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, background: '#065F46', color: 'white', padding: '12px 20px', borderRadius: 12, fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          {toast}
        </div>
      )}

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#1E3A5F,#2563EB)', padding: '40px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'white', marginBottom: 8 }}>💬 Community</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>Ask questions, share knowledge, and practice with fellow learners</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[['👥','10,000+','Members'],['💬','500+','Daily Posts'],['✅','85%','Questions Answered']].map(([icon,val,label]) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{icon}</span>
                <div><div style={{ color: 'white', fontWeight: 800, lineHeight: 1 }}>{val}</div><div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.68rem' }}>{label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '0 24px', marginTop: -20, position: 'relative', zIndex: 1 }}>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, background: 'white', borderRadius: 14, padding: 5, marginBottom: 24, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', width: 'fit-content' }}>
          {[['forum','💬 Forum'],['groups','👥 Study Groups'],['events','📅 Events']].map(([key,label]) => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ padding: '9px 20px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit', background: activeTab === key ? '#2563EB' : 'transparent', color: activeTab === key ? 'white' : '#6B7280', transition: 'all 0.2s' }}>
              {label}
            </button>
          ))}
        </div>

        {/* ── FORUM TAB ── */}
        {activeTab === 'forum' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, alignItems: 'start' }}>
            <div>
              {/* Search + New post */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'white', borderRadius: 12, padding: '10px 14px', border: '1.5px solid #E5E7EB', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <svg width="16" height="16" fill="none" stroke="#9CA3AF" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts..." style={{ border: 'none', outline: 'none', fontSize: '0.875rem', fontFamily: 'inherit', flex: 1, color: '#374151' }} />
                </div>
                <button onClick={() => setShowNewPost(true)}
                  style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 12, padding: '10px 18px', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
                  + New Post
                </button>
              </div>

              {/* Category filters */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                <button onClick={() => setActiveCat('all')}
                  style={{ padding: '5px 12px', borderRadius: 20, border: 'none', background: activecat === 'all' ? '#111827' : '#F3F4F6', color: activecat === 'all' ? 'white' : '#6B7280', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                  All Posts
                </button>
                {CATEGORIES.map(c => (
                  <button key={c.id} onClick={() => setActiveCat(c.id)}
                    style={{ padding: '5px 12px', borderRadius: 20, border: 'none', background: activecat === c.id ? c.color : '#F3F4F6', color: activecat === c.id ? 'white' : '#6B7280', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
                    {c.icon} {c.label}
                  </button>
                ))}
              </div>

              {/* Posts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {filteredPosts.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: 16, color: '#9CA3AF' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🔍</div>
                    <p>No posts found. Be the first to post!</p>
                  </div>
                ) : filteredPosts.map(post => {
                  const cat = CATEGORIES.find(c => c.id === post.category)
                  return (
                    <div key={post.id} style={{ background: 'white', borderRadius: 16, padding: '16px 18px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', transition: 'all 0.2s', cursor: 'pointer' }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{post.avatar}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                            <span style={{ background: cat?.color + '18', color: cat?.color, fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 6 }}>{cat?.icon} {cat?.label}</span>
                            {post.solved && <span style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 6 }}>✓ Solved</span>}
                          </div>
                          <h3 style={{ fontWeight: 700, color: '#111827', fontSize: '0.9rem', margin: '0 0 5px', lineHeight: 1.4 }}>{post.title}</h3>
                          <p style={{ color: '#6B7280', fontSize: '0.8rem', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.preview}</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10, fontSize: '0.72rem', color: '#9CA3AF' }}>
                            <span>{post.author} · {post.time}</span>
                            <button onClick={(e) => { e.stopPropagation(); toggleLike(post.id) }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontFamily: 'inherit', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: 3 }}>
                              ❤️ {post.likes}
                            </button>
                            <span>💬 {post.replies} replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'white', borderRadius: 16, padding: '16px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '0.9rem', color: '#111827', marginBottom: 12 }}>📂 Categories</h3>
                {CATEGORIES.map(c => (
                  <button key={c.id} onClick={() => setActiveCat(c.id)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 10, border: 'none', background: activecat === c.id ? c.color + '18' : 'transparent', cursor: 'pointer', fontFamily: 'inherit', marginBottom: 2 }}>
                    <span style={{ fontSize: '1rem' }}>{c.icon}</span>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.8rem', color: activecat === c.id ? c.color : '#374151' }}>{c.label}</div>
                      <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>{c.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
              <div style={{ background: 'linear-gradient(135deg,#1E3A5F,#2563EB)', borderRadius: 16, padding: '16px 18px', color: 'white' }}>
                <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '0.9rem', marginBottom: 8 }}>🏆 Top Contributors</h3>
                {[['Ahmed H.','A',342],['Maria S.','M',287],['Yuki T.','Y',194]].map(([name,av,pts]) => (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem' }}>{av}</div>
                    <span style={{ flex: 1, fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>{name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>⭐ {pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STUDY GROUPS TAB ── */}
        {activeTab === 'groups' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: '#111827', margin: 0 }}>Study Groups</h2>
              <button style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '9px 18px', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                + Create Group
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
              {STUDY_GROUPS.map(g => (
                <div key={g.id} style={{ background: 'white', borderRadius: 16, padding: '18px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{g.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.9rem' }}>{g.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{g.level}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: '0.78rem', color: '#6B7280', marginBottom: 14 }}>
                    <span>👥 {g.members} members</span>
                    <span>📅 {g.nextSession}</span>
                  </div>
                  <button style={{ width: '100%', padding: '9px', borderRadius: 10, background: g.open ? '#2563EB' : '#F3F4F6', color: g.open ? 'white' : '#9CA3AF', border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: g.open ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
                    {g.open ? 'Join Group' : '🔒 Full'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EVENTS TAB ── */}
        {activeTab === 'events' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
              {[
                { title: 'Weekly Conversation Club',   date: 'Every Saturday',          time: '10:00 AM GMT', participants: 150, icon: '🗣️', type: 'Speaking'  },
                { title: 'Grammar Workshop',           date: 'Every Wednesday',          time: '7:00 PM GMT',  participants: 200, icon: '📝', type: 'Grammar'   },
                { title: 'IELTS Q&A Session',          date: 'First Monday of Month',    time: '6:00 PM GMT',  participants: 300, icon: '🎓', type: 'IELTS'     },
                { title: 'Business English Meetup',    date: 'Every Thursday',           time: '8:00 PM GMT',  participants: 80,  icon: '💼', type: 'Business'  },
                { title: 'Reading Book Club',          date: 'Every Sunday',             time: '5:00 PM GMT',  participants: 60,  icon: '📖', type: 'Reading'   },
                { title: 'Vocabulary Challenge',       date: 'Every Tuesday',            time: '7:30 PM GMT',  participants: 120, icon: '🧩', type: 'Vocab'     },
              ].map((event, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 16, padding: '18px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{event.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.9rem' }}>{event.title}</div>
                      <span style={{ background: '#DBEAFE', color: '#1D4ED8', fontSize: '0.65rem', fontWeight: 700, padding: '2px 7px', borderRadius: 6 }}>{event.type}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem', color: '#6B7280', marginBottom: 14 }}>
                    <span>📅 {event.date}</span>
                    <span>🕐 {event.time}</span>
                    <span>👥 {event.participants} participants</span>
                  </div>
                  <button style={{ width: '100%', padding: '9px', borderRadius: 10, background: '#2563EB', color: 'white', border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Join Event
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ paddingBottom: 40 }} />
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: 28, width: '100%', maxWidth: 520, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.2rem', color: '#111827', margin: 0 }}>Create New Post</h2>
              <button onClick={() => setShowNewPost(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', color: '#9CA3AF' }}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#374151', display: 'block', marginBottom: 5 }}>Category</label>
                <select value={newPost.category} onChange={e => setNewPost(p => ({ ...p, category: e.target.value }))}
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none', background: 'white' }}>
                  {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#374151', display: 'block', marginBottom: 5 }}>Question Title</label>
                <input value={newPost.title} onChange={e => setNewPost(p => ({ ...p, title: e.target.value }))}
                  placeholder="What's your question?"
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontWeight: 600, fontSize: '0.85rem', color: '#374151', display: 'block', marginBottom: 5 }}>Details</label>
                <textarea value={newPost.content} onChange={e => setNewPost(p => ({ ...p, content: e.target.value }))}
                  placeholder="Explain your question in detail..." rows={4}
                  style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10, fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => setShowNewPost(false)}
                  style={{ flex: 1, padding: '11px', borderRadius: 10, background: 'white', color: '#6B7280', border: '1.5px solid #E5E7EB', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                  Cancel
                </button>
                <button onClick={handleSubmitPost}
                  style={{ flex: 1, padding: '11px', borderRadius: 10, background: '#2563EB', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' }}>
                  Publish Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}