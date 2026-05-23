import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import api from '../services/api'

const CATEGORIES = {
  grammar:  { icon: '📝', label: 'Grammar Help',      color: '#2563EB' },
  vocab:    { icon: '📚', label: 'Vocabulary',        color: '#22C55E' },
  ielts:    { icon: '🎯', label: 'IELTS Prep',        color: '#8B5CF6' },
  speaking: { icon: '🗣️', label: 'Speaking Practice', color: '#F59E0B' },
  writing:  { icon: '✍️', label: 'Writing Feedback',  color: '#EF4444' },
  general:  { icon: '💬', label: 'General',           color: '#6B7280' },
}

export default function ForumPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { dark } = useTheme()

  const bg       = dark ? '#111827' : '#F9FAFB'
  const cardBg   = dark ? '#1F2937' : 'white'
  const border   = dark ? '#374151' : '#F3F4F6'
  const borderFm = dark ? '#374151' : '#E5E7EB'
  const text     = dark ? '#F9FAFB' : '#111827'
  const textMuted = dark ? '#9CA3AF' : '#6B7280'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'
  const textBody  = dark ? '#D1D5DB' : '#374151'

  const [post,        setPost]        = useState(null)
  const [replies,     setReplies]     = useState([])
  const [loading,     setLoading]     = useState(true)
  const [replyText,   setReplyText]   = useState('')
  const [submitting,  setSubmitting]  = useState(false)
  const [toast,       setToast]       = useState(null)

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  useEffect(() => { fetchPost() }, [id])

  const fetchPost = async () => {
    try {
      const { data } = await api.get(`/forums/${id}`)
      setPost(data.post)
      setReplies(data.replies)
    } catch {
      navigate('/forums')
    } finally {
      setLoading(false)
    }
  }

  const handleReply = async () => {
    if (!replyText.trim()) return
    if (!user) { showToast('Please sign in to reply', 'error'); return }
    setSubmitting(true)
    try {
      const { data } = await api.post(`/forums/${id}/replies`, { content: replyText })
      setReplies(prev => [...prev, {
        ...data.reply,
        author_name: user.name,
        author_avatar: user.avatar_url,
      }])
      setReplyText('')
      showToast('Reply posted!', 'success')
    } catch (err) {
      showToast(err.response?.data?.message || 'Failed to post reply', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleLike = async () => {
    try {
      const { data } = await api.patch(`/forums/${id}/like`)
      setPost(prev => ({ ...prev, likes: data.likes }))
    } catch {}
  }

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

  if (loading) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: textFaint }}>
      ⏳ Loading post...
    </div>
  )
  if (!post) return null

  const cat = CATEGORIES[post.category] || CATEGORIES.general

  return (
    <div style={{ minHeight: '100vh', background: bg, paddingBottom: 60 }}>
      {toast && (
        <div style={{ position: 'fixed', top: 90, right: 20, zIndex: 9999, background: toast.type === 'error' ? '#991B1B' : '#065F46', color: 'white', padding: '12px 20px', borderRadius: 12, fontWeight: 600, fontSize: '0.875rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          {toast.msg}
        </div>
      )}

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: '0.85rem', color: textMuted }}>
          <Link to="/forums" style={{ color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>← Community</Link>
          <span>/</span>
          <span style={{ background: cat.color + '18', color: cat.color, padding: '2px 8px', borderRadius: 6, fontWeight: 700, fontSize: '0.72rem' }}>
            {cat.icon} {cat.label}
          </span>
        </div>

        {/* Post card */}
        <div style={{ background: cardBg, borderRadius: 20, padding: '28px', border: `1px solid ${border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: 24 }}>
          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
              {post.author_name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: text, fontSize: '0.9rem' }}>{post.author_name}</div>
              <div style={{ fontSize: '0.75rem', color: textFaint }}>{formatDate(post.created_at)} · {post.views} views</div>
            </div>
            {post.is_pinned && (
              <span style={{ marginLeft: 'auto', background: '#FEF3C7', color: '#92400E', fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 8 }}>📌 Pinned</span>
            )}
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.5rem', fontWeight: 700, color: text, marginBottom: 16, lineHeight: 1.3 }}>
            {post.title}
          </h1>

          {/* Content */}
          <p style={{ color: textBody, fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 24, whiteSpace: 'pre-wrap' }}>
            {post.content}
          </p>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 16, borderTop: `1px solid ${borderFm}` }}>
            <button onClick={handleLike}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: `1px solid ${borderFm}`, borderRadius: 10, padding: '7px 14px', cursor: 'pointer', color: textMuted, fontFamily: 'inherit', fontSize: '0.85rem', fontWeight: 600, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#EF4444'; e.currentTarget.style.color = '#EF4444' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = borderFm; e.currentTarget.style.color = textMuted }}>
              ❤️ {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
            </button>
            <span style={{ color: textFaint, fontSize: '0.85rem' }}>💬 {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}</span>
          </div>
        </div>

        {/* Replies */}
        {replies.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: text, marginBottom: 16 }}>
              Replies ({replies.length})
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {replies.map((reply, i) => (
                <div key={reply.id || i} style={{ background: cardBg, borderRadius: 14, padding: '18px 20px', border: `1px solid ${border}`, display: 'flex', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#22C55E,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                    {reply.author_name?.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: '0.875rem', color: text }}>{reply.author_name}</span>
                      <span style={{ fontSize: '0.72rem', color: textFaint }}>{formatDate(reply.created_at)}</span>
                    </div>
                    <p style={{ color: textBody, fontSize: '0.875rem', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>{reply.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reply form */}
        <div style={{ background: cardBg, borderRadius: 16, padding: '20px', border: `1px solid ${border}` }}>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: text, marginBottom: 14 }}>
            {user ? 'Add Your Reply' : 'Sign in to reply'}
          </h3>
          {user ? (
            <>
              <textarea
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
                placeholder="Share your thoughts or answer..."
                rows={4}
                style={{ width: '100%', padding: '12px 14px', border: `1.5px solid ${borderFm}`, borderRadius: 12, fontSize: '0.875rem', fontFamily: 'inherit', outline: 'none', resize: 'vertical', background: bg, color: textBody, boxSizing: 'border-box', marginBottom: 12 }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleReply} disabled={submitting || !replyText.trim()}
                  style={{ padding: '10px 24px', background: replyText.trim() ? '#2563EB' : '#9CA3AF', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '0.875rem', cursor: replyText.trim() ? 'pointer' : 'not-allowed', fontFamily: 'inherit', transition: 'background 0.2s' }}>
                  {submitting ? 'Posting...' : 'Post Reply'}
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <Link to="/login" style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.9rem' }}>Sign in</Link>
              <span style={{ color: textMuted, fontSize: '0.9rem' }}> to join the discussion</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
