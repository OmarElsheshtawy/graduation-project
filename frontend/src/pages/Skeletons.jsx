// ── Skeleton loading components ────────────────────────────────────────────
// Usage: <SkeletonCard /> <SkeletonText lines={3} /> <SkeletonDashboard />

const pulse = {
  background: 'linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 50%, var(--gray-100) 75%)',
  backgroundSize: '200% 100%',
  animation: 'skeletonPulse 1.5s ease-in-out infinite',
  borderRadius: 8,
}

export function SkeletonBox({ w = '100%', h = 16, radius = 8, style = {} }) {
  return (
    <div style={{ ...pulse, width: w, height: h, borderRadius: radius, flexShrink: 0, ...style }} />
  )
}

export function SkeletonText({ lines = 3, lastShort = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[...Array(lines)].map((_, i) => (
        <SkeletonBox key={i} h={14} w={lastShort && i === lines - 1 ? '65%' : '100%'} />
      ))}
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--gray-100)' }}>
      <SkeletonBox h={180} radius={0} />
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <SkeletonBox w={70} h={20} radius={20} />
          <SkeletonBox w={50} h={20} radius={20} />
        </div>
        <SkeletonBox h={18} w="80%" />
        <SkeletonText lines={2} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
          <SkeletonBox w={60} h={22} />
          <SkeletonBox w={90} h={36} radius={10} />
        </div>
      </div>
    </div>
  )
}

export function SkeletonCoursesGrid({ count = 6 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
      {[...Array(count)].map((_, i) => <SkeletonCard key={i} />)}
    </div>
  )
}

export function SkeletonDashboard() {
  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ background: 'var(--white)', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SkeletonBox w={40} h={40} radius={10} />
            <SkeletonBox h={28} w="60%" />
            <SkeletonBox h={12} w="80%" />
          </div>
        ))}
      </div>
      {/* Content area */}
      <div style={{ background: 'var(--white)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <SkeletonBox h={22} w="30%" />
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--gray-50)' }}>
            <SkeletonBox w={48} h={48} radius={12} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
              <SkeletonBox h={14} w="70%" />
              <SkeletonBox h={10} w="45%" />
            </div>
            <SkeletonBox w={80} h={32} radius={8} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkeletonLesson() {
  return (
    <div style={{ padding: '32px 20px', maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <SkeletonBox h={10} w="100%" radius={10} />
      <SkeletonBox h={28} w="70%" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ background: 'var(--white)', borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <SkeletonBox h={18} w="60%" />
            <SkeletonBox h={12} w="40%" />
            <SkeletonBox h={12} w="90%" />
          </div>
        ))}
      </div>
      <SkeletonBox h={52} radius={14} />
    </div>
  )
}

export function SkeletonProfile() {
  return (
    <div style={{ padding: '40px 24px', maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ background: 'var(--white)', borderRadius: 16, padding: 24, display: 'flex', alignItems: 'center', gap: 20 }}>
        <SkeletonBox w={80} h={80} radius="50%" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SkeletonBox h={22} w="40%" />
          <SkeletonBox h={14} w="55%" />
          <SkeletonBox h={20} w={80} radius={20} />
        </div>
      </div>
      <div style={{ background: 'var(--white)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <SkeletonBox h={20} w="25%" />
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <SkeletonBox h={12} w="20%" />
            <SkeletonBox h={42} radius={10} />
          </div>
        ))}
        <SkeletonBox h={48} radius={12} />
      </div>
    </div>
  )
}

// Add CSS animation to index.css (call this once in main.jsx)
export function injectSkeletonCSS() {
  if (document.getElementById('skeleton-style')) return
  const style = document.createElement('style')
  style.id = 'skeleton-style'
  style.textContent = `
    @keyframes skeletonPulse {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `
  document.head.appendChild(style)
}