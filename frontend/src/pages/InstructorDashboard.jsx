import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';
import { COURSES } from '../data/courseData';
import { useTheme } from './ThemeContext';
import './Dashboard.css';

// ── Helpers ────────────────────────────────────────────────────────────────────
const fmtPrice = (p) => parseFloat(p) === 0 ? 'Free' : `$${parseFloat(p).toFixed(0)}`;

// ── Stat card ──────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value, color = '#2563EB' }) {
  const { dark } = useTheme()
  const cardBg  = dark ? '#1F2937' : 'white'
  const text    = dark ? '#F9FAFB' : '#111827'
  const textFaint = dark ? '#6B7280' : '#9CA3AF'
  return (
    <div style={{ background: cardBg, borderRadius: 16, padding: '20px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.6rem', color: text, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '0.75rem', color: textFaint, marginTop: 4 }}>{label}</div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function InstructorDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dark }    = useTheme()
  const bg          = dark ? '#111827' : 'white'
  const bgAlt       = dark ? '#1F2937' : '#F9FAFB'
  const cardBg      = dark ? '#1F2937' : 'white'
  const borderFm    = dark ? '#374151' : '#E5E7EB'
  const border      = dark ? '#374151' : '#F3F4F6'
  const text        = dark ? '#F9FAFB' : '#111827'
  const textMuted   = dark ? '#9CA3AF' : '#6B7280'
  const textFaint   = dark ? '#6B7280' : '#9CA3AF'
  const textBody    = dark ? '#D1D5DB' : '#374151'
  const trackBg     = dark ? '#374151' : '#F3F4F6'
  const tableHeadBg = dark ? '#111827' : '#F9FAFB'

  const [stats,    setStats]    = useState({ total_courses: 0, total_students: 0, total_revenue: 0 });
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [toast,    setToast]    = useState(null);

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Derive active view from URL
  const view = location.pathname.endsWith('/manage-courses') ? 'courses'
    : location.pathname.endsWith('/students')        ? 'students'
    : 'overview';

  useEffect(() => {
    api.get('/instructor/stats')
      .then(r => setStats(r.data.stats))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (view !== 'students') return;
    setLoadingStudents(true);
    api.get('/instructor/students')
      .then(r => setStudents(r.data.students || []))
      .catch(() => setStudents([]))
      .finally(() => setLoadingStudents(false));
  }, [view]);

  const showToast = (msg, isError = false) => {
    setToast({ msg, isError });
    setTimeout(() => setToast(null), 3000);
  };

  // Total lessons across all courseData courses
  const totalLessons = COURSES.reduce((a, c) => a + c.units.reduce((b, u) => b + u.lessons.length, 0), 0);

  // ── OVERVIEW ─────────────────────────────────────────────────────────────────
  const Overview = () => (
    <div>
      {/* Welcome banner */}
      <div style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)', borderRadius: 20, padding: '28px 32px', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(255,255,255,0.07) 0%, transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'white', margin: '0 0 6px' }}>
            Welcome back, {user.name?.split(' ')[0] || 'Instructor'}! 👋
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
            Manage your courses and track student progress.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
        <StatCard icon="📚" label="Courses Available"  value={COURSES.length}           color="#2563EB" />
        <StatCard icon="🎯" label="Total Lessons"      value={totalLessons}              color="#8B5CF6" />
        <StatCard icon="👥" label="Students Enrolled"  value={stats.total_students || 0} color="#10B981" />
        <StatCard icon="💰" label="Total Revenue"      value={`$${parseFloat(stats.total_revenue || 0).toFixed(0)}`} color="#F59E0B" />
      </div>

      {/* Quick course overview */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: text, margin: 0 }}>Course Overview</h2>
          <button onClick={() => navigate('/instructor-dashboard/manage-courses')}
            style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '8px 16px', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
            Manage Courses →
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
          {COURSES.map(course => {
            const lessonCount = course.units.reduce((a, u) => a + u.lessons.length, 0);
            return (
              <div key={course.id} style={{ background: cardBg, borderRadius: 16, padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${course.color}20`, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: course.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                  {course.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: text, fontSize: '0.88rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.title}</div>
                  <div style={{ fontSize: '0.72rem', color: textFaint, marginTop: 2 }}>{course.units.length} units · {lessonCount} lessons</div>
                </div>
                <span style={{ background: course.color + '15', color: course.color, fontSize: '0.68rem', fontWeight: 700, padding: '3px 8px', borderRadius: 6, flexShrink: 0 }}>{course.level}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ── MY COURSES ────────────────────────────────────────────────────────────────
  const MyCourses = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.2rem', color: text, margin: '0 0 4px' }}>My Courses</h2>
          <p style={{ color: textFaint, fontSize: '0.82rem', margin: 0 }}>{COURSES.length} courses · {totalLessons} total lessons</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
        {COURSES.map(course => {
          const lessonCount = course.units.reduce((a, u) => a + u.lessons.length, 0);
          return (
            <div key={course.id} style={{ background: cardBg, borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${course.color}20`, transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'}>

              {/* Color header */}
              <div style={{ background: `linear-gradient(135deg, ${course.color}dd, ${course.color})`, padding: '20px 20px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>
                  {course.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: 'white', fontSize: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>{course.level}</div>
                </div>
                <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: 8, flexShrink: 0, backdropFilter: 'blur(4px)' }}>
                  ✓ Published
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '16px 20px 20px' }}>
                <p style={{ fontSize: '0.82rem', color: textMuted, margin: '0 0 16px', lineHeight: 1.6 }}>
                  {course.description}
                </p>

                {/* Unit / lesson breakdown */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={{ background: trackBg, color: textMuted, fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>
                    📦 {course.units.length} units
                  </span>
                  <span style={{ background: trackBg, color: textMuted, fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: 6 }}>
                    🎯 {lessonCount} lessons
                  </span>
                  {course.units.map(u => (
                    <span key={u.id} style={{ background: course.color + '12', color: course.color, fontSize: '0.68rem', fontWeight: 600, padding: '3px 8px', borderRadius: 5 }}>
                      {u.icon} {u.title}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={() => navigate(`/learn/${course.id}`)}
                    style={{ flex: 1, padding: '9px 0', borderRadius: 10, background: course.color, color: 'white', border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 3px 10px ${course.color}35` }}>
                    📖 Preview Course
                  </button>
                  <button onClick={() => navigate('/courses')}
                    style={{ padding: '9px 14px', borderRadius: 10, background: bg, color: textMuted, border: `1px solid ${borderFm}`, fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                    🔗 View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ── STUDENTS ──────────────────────────────────────────────────────────────────
  const Students = () => (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.2rem', color: text, margin: '0 0 4px' }}>Students</h2>
        <p style={{ color: textFaint, fontSize: '0.82rem', margin: 0 }}>
          {students.length > 0 ? `${students.length} student${students.length !== 1 ? 's' : ''} enrolled in your courses` : 'All students enrolled in your courses'}
        </p>
      </div>

      {loadingStudents ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: textFaint, fontSize: '1rem' }}>⏳ Loading students…</div>
      ) : students.length === 0 ? (
        <div style={{ background: cardBg, borderRadius: 20, padding: '48px 32px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: 12 }}>👥</div>
          <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', color: text, marginBottom: 8 }}>No Students Yet</h3>
          <p style={{ color: textMuted, fontSize: '0.9rem', maxWidth: 320, margin: '0 auto' }}>
            Students will appear here once they enroll in your courses.
          </p>
        </div>
      ) : (
        <div style={{ background: cardBg, borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden', border: `1px solid ${borderFm}` }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr', gap: 0, padding: '12px 24px', background: tableHeadBg, borderBottom: `1px solid ${borderFm}` }}>
            {['Student', 'Courses', 'Avg. Progress', 'Joined'].map(h => (
              <div key={h} style={{ fontSize: '0.72rem', fontWeight: 700, color: textFaint, textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</div>
            ))}
          </div>
          {/* Rows */}
          {students.map((s, i) => (
            <div key={s.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr', gap: 0, padding: '14px 24px', borderBottom: i < students.length - 1 ? `1px solid ${border}` : 'none', alignItems: 'center' }}>
              {/* Name + email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                  {s.name?.charAt(0).toUpperCase() || '?'}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: text, fontSize: '0.875rem' }}>{s.name}</div>
                  <div style={{ fontSize: '0.7rem', color: textFaint }}>{s.email}</div>
                </div>
              </div>
              {/* Enrolled courses count */}
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: textBody }}>
                {s.enrolled_courses} course{s.enrolled_courses !== 1 ? 's' : ''}
              </div>
              {/* Avg progress bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 6, background: trackBg, borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: s.avg_progress === 100 ? '#22C55E' : '#2563EB', width: `${s.avg_progress || 0}%`, borderRadius: 6, transition: 'width 0.4s' }} />
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: s.avg_progress === 100 ? '#22C55E' : '#2563EB', flexShrink: 0, minWidth: 30 }}>
                  {s.avg_progress || 0}%
                </span>
              </div>
              {/* Joined date */}
              <div style={{ fontSize: '0.75rem', color: textFaint }}>
                {s.created_at ? new Date(s.created_at).toLocaleDateString() : '—'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: bgAlt, padding: '28px 32px' }}>
      {toast && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 20px', borderRadius: 12, fontWeight: 700, fontSize: '0.875rem', background: toast.isError ? '#991B1B' : '#065F46', color: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          {toast.msg}
        </div>
      )}

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: 4, background: bg, borderRadius: 14, padding: 5, marginBottom: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${border}`, width: 'fit-content' }}>
        {[
          ['overview', '🏠 Overview',    '/instructor-dashboard'],
          ['courses',  '📚 My Courses',  '/instructor-dashboard/manage-courses'],
          ['students', '👥 Students',    '/instructor-dashboard/students'],
        ].map(([key, label, path]) => (
          <button key={key} onClick={() => navigate(path)}
            style={{ padding: '8px 18px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', background: view === key ? '#2563EB' : 'transparent', color: view === key ? 'white' : textMuted }}>
            {label}
          </button>
        ))}
      </div>

      {view === 'overview'  && <Overview />}
      {view === 'courses'   && <MyCourses />}
      {view === 'students'  && <Students />}
    </div>
  );
}
