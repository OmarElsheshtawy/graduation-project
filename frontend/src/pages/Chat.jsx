import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CONTACTS = [
  { id: 1, name: 'Dr. Emily Chen',    role: 'Instructor', avatar: 'E', online: true,  lastMsg: 'Great progress on your last quiz!',  time: '2m' },
  { id: 2, name: 'Ahmed Hassan',      role: 'Student',    avatar: 'A', online: true,  lastMsg: 'Can you help me with the homework?',  time: '15m' },
  { id: 3, name: 'Sarah Martinez',    role: 'Student',    avatar: 'S', online: false, lastMsg: 'Thanks for the grammar tips!',        time: '1h' },
  { id: 4, name: 'Michael Rodriguez', role: 'Instructor', avatar: 'M', online: true,  lastMsg: 'Your essay was excellent this week.', time: '3h' },
  { id: 5, name: 'Yuki Tanaka',       role: 'Student',    avatar: 'Y', online: false, lastMsg: 'See you at the conversation club!',   time: '1d' },
]

const INIT_MESSAGES = {
  1: [
    { id: 1, from: 1, text: "Hello! How are your studies going?", time: "10:00 AM" },
    { id: 2, from: 'me', text: "Really well! I just finished the grammar module.", time: "10:02 AM" },
    { id: 3, from: 1, text: "Great progress on your last quiz! You scored 92% 🎉", time: "10:03 AM" },
    { id: 4, from: 'me', text: "Thank you! I studied really hard for it.", time: "10:05 AM" },
  ],
  2: [
    { id: 1, from: 2, text: "Hi! Can you help me with the homework?", time: "9:45 AM" },
    { id: 2, from: 'me', text: "Sure! Which part are you stuck on?", time: "9:47 AM" },
    { id: 3, from: 2, text: "The conditional tenses exercise.", time: "9:48 AM" },
  ],
}

export default function Chat() {
  const navigate = useNavigate()
  const [activeContact, setActiveContact] = useState(CONTACTS[0])
  const [messages, setMessages] = useState(INIT_MESSAGES)
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const messagesEndRef = useRef(null)

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  useEffect(() => {
    if (!user) { navigate('/'); return }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, activeContact])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMsg = { id: Date.now(), from: 'me', text: input.trim(), time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
    setMessages(prev => ({ ...prev, [activeContact.id]: [...(prev[activeContact.id] || []), newMsg] }))
    setInput('')

    // Simulate reply after 1.5s
    const replies = ['That\'s a great question! Let me explain...', 'I understand, here\'s what you should do...', 'Great progress! Keep it up 💪', 'Let me help you with that.', 'Excellent point! You\'re really improving.']
    setTimeout(() => {
      const reply = { id: Date.now() + 1, from: activeContact.id, text: replies[Math.floor(Math.random() * replies.length)], time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
      setMessages(prev => ({ ...prev, [activeContact.id]: [...(prev[activeContact.id] || []), reply] }))
    }, 1500)
  }

  const filteredContacts = CONTACTS.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  const activeMessages = messages[activeContact.id] || []

  return (
    <div style={{ padding: '24px 24px', maxWidth: 1280, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 20, color: 'var(--gray-900)' }}>Messages</h1>

      <div className="chat-wrap">
        {/* Sidebar */}
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" fill="none" stroke="var(--gray-400)" strokeWidth="2" viewBox="0 0 24 24" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search conversations..."
                style={{ width: '100%', padding: '8px 12px 8px 36px', border: '1px solid var(--gray-200)', borderRadius: 8, fontSize: '0.85rem', fontFamily: 'var(--font-body)', outline: 'none' }} />
            </div>
          </div>
          <div className="chat-contacts">
            {filteredContacts.map(contact => (
              <div key={contact.id} className={`chat-contact ${activeContact.id === contact.id ? 'active' : ''}`} onClick={() => setActiveContact(contact)}>
                <div style={{ position: 'relative' }}>
                  <div className="chat-contact-avatar">{contact.avatar}</div>
                  {contact.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, background: 'var(--success)', border: '2px solid white', borderRadius: '50%' }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <span className="chat-contact-name">{contact.name}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>{contact.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="badge badge-gray" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>{contact.role}</span>
                    <span className="chat-contact-preview" style={{ flex: 1 }}>{contact.lastMsg}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat */}
        <div className="chat-main">
          {/* Header */}
          <div className="chat-header">
            <div style={{ position: 'relative' }}>
              <div className="chat-contact-avatar">{activeContact.avatar}</div>
              {activeContact.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, background: 'var(--success)', border: '2px solid white', borderRadius: '50%' }} />}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--gray-900)' }}>{activeContact.name}</div>
              <div style={{ fontSize: '0.78rem', color: activeContact.online ? 'var(--success)' : 'var(--gray-400)', fontWeight: 500 }}>
                {activeContact.online ? '● Online' : '○ Offline'} · {activeContact.role}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {activeMessages.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'var(--gray-400)', margin: 'auto', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>💬</div>
                <p>No messages yet. Say hello!</p>
              </div>
            ) : (
              activeMessages.map(msg => {
                const isOwn = msg.from === 'me'
                return (
                  <div key={msg.id} className={`chat-msg ${isOwn ? 'own' : ''}`}>
                    {!isOwn && (
                      <div className="chat-contact-avatar" style={{ width: 32, height: 32, fontSize: '0.8rem', flexShrink: 0, alignSelf: 'flex-end' }}>
                        {activeContact.avatar}
                      </div>
                    )}
                    <div>
                      <div className="chat-msg-bubble">{msg.text}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', marginTop: 4, textAlign: isOwn ? 'right' : 'left' }}>{msg.time}</div>
                    </div>
                  </div>
                )
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="chat-input-area">
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--gray-400)', fontSize: '1.2rem' }}>😊</button>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message ${activeContact.name}...`} className="chat-input" />
            <button type="submit" className="btn btn-primary btn-sm" disabled={!input.trim()}
              style={{ borderRadius: '50%', width: 38, height: 38, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
