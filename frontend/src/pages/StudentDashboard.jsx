import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';
import { COURSES, loadProgress } from '../data/courseData';
import { useTheme } from './ThemeContext';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { dark }  = useTheme();
  const bg        = dark ? '#111827' : 'white';
  const bgAlt     = dark ? '#1F2937' : '#F9FAFB';
  const cardBg    = dark ? '#1F2937' : 'white';
  const border    = dark ? '#374151' : '#F3F4F6';
  const borderFm  = dark ? '#374151' : '#E5E7EB';
  const text      = dark ? '#F9FAFB' : '#111827';
  const textMuted = dark ? '#9CA3AF' : '#6B7280';
  const textFaint = dark ? '#6B7280' : '#9CA3AF';
  const trackBg   = dark ? '#374151' : '#F3F4F6';
  const [enrolledCourses, setEnrolledCourses]   = useState([]);
  const [summary, setSummary]                   = useState({ courses_enrolled: 0, courses_completed: 0, hours_learned: 0, avg_progress: 0 });
  const [loading, setLoading]                   = useState(true);
  const [updatingId, setUpdatingId]             = useState(null);
  const [toast, setToast]                       = useState(null);

  // Derive active tab from URL so sidebar links work
  const activeTab = location.pathname.endsWith('/my-courses') ? 'enrolled'
    : location.pathname.endsWith('/progress')   ? 'learn'
    : 'learn'; // default

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // ── Local learn-system progress ──────────────────────────────────────────
  const learnProgress = COURSES.map(course => {
    const prog       = loadProgress(course.id);
    const total      = course.units.reduce((a, u) => a + u.lessons.length, 0);
    const completed  = prog.completedLessons?.length || 0;
    const percent    = total > 0 ? Math.round((completed / total) * 100) : 0;
    const nextUnit   = course.units.find(u => u.lessons.some(l => !prog.completedLessons?.includes(l.id)));
    const nextLesson = nextUnit?.lessons.find(l => !prog.completedLessons?.includes(l.id));
    return { ...course, completed, total, percent, xp: prog.xp || 0, nextLessonId: nextLesson?.id };
  }).filter(c => c.completed > 0 || c.xp > 0); // only show started courses

  const totalXP      = learnProgress.reduce((a, c) => a + c.xp, 0);
  const totalDone    = learnProgress.filter(c => c.percent === 100).length;
  const totalStarted = learnProgress.length;

  // ── API enrolled courses ──────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [enrollRes, summaryRes] = await Promise.all([
          api.get('/enrollments/my'),
          api.get('/enrollments/progress/summary'),
        ]);
        setEnrolledCourses(enrollRes.data.enrollments);
        setSummary(summaryRes.data.summary);
      } catch { /* not logged in or API error */ }
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  const handleProgressUpdate = async (courseId, current) => {
    const next = Math.min(100, current + 10);
    setUpdatingId(courseId);
    try {
      await api.put(`/enrollments/progress/${courseId}`, { percent_complete: next });
      setEnrolledCourses(prev => prev.map(c => c.id === courseId ? { ...c, progress: next } : c));
      showToast(next === 100 ? '🎉 Course completed!' : '✅ Progress updated!');
      const { data } = await api.get('/enrollments/progress/summary');
      setSummary(data.summary);
    } catch { showToast('Failed to update', true); }
    finally { setUpdatingId(null); }
  };

  const showToast = (msg, isError = false) => {
    setToast({ msg, isError });
    setTimeout(() => setToast(null), 3000);
  };

  const statCards = [
    { icon: '🎓', label: 'Courses Started',   value: totalStarted },
    { icon: '✅', label: 'Courses Completed', value: totalDone },
    { icon: '⚡', label: 'Total XP Earned',   value: totalXP },
    { icon: '📚', label: 'API Enrollments',   value: summary.courses_enrolled },
  ];

  return (
    <div style={{ minHeight: '100vh', background: bgAlt }}>

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, padding: '12px 20px', borderRadius: 12, fontWeight: 700, fontSize: '0.875rem', background: toast.isError ? '#991B1B' : '#065F46', color: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          {toast.msg}
        </div>
      )}

      {/* Welcome */}
      <div style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)', padding: '32px 32px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'white', margin: '0 0 6px' }}>
            Welcome back, {user.name?.split(' ')[0] || 'Student'}! 👋
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: '0 0 24px' }}>
            Keep up your streak and keep learning every day!
          </p>
          {/* Stat strip */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {statCards.map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '12px 18px', minWidth: 100, backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '1.2rem', marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 800, fontSize: '1.4rem', color: 'white', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '0 32px 32px', marginTop: -16, position: 'relative', zIndex: 1 }}>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, background: bg, borderRadius: 14, padding: 5, marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', width: 'fit-content', border: `1px solid ${border}` }}>
          {[
            ['learn',    '📈 My Progress',      '/student-dashboard/progress'],
            ['enrolled', '📋 My Courses',        '/student-dashboard/my-courses'],
          ].map(([key, label, path]) => (
            <button key={key} onClick={() => navigate(path)}
              style={{ padding: '8px 18px', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', background: activeTab === key ? '#2563EB' : 'transparent', color: activeTab === key ? 'white' : textMuted }}>
              {label}
            </button>
          ))}
        </div>

        {/* ── TAB 1: Progress ── */}
        {activeTab === 'learn' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: text, margin: 0 }}>Your Learning Progress</h2>
              <button onClick={() => navigate('/courses')}
                style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '8px 16px', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                + Start New Course
              </button>
            </div>

            {learnProgress.length === 0 ? (
              <div style={{ background: cardBg, borderRadius: 20, padding: '48px 32px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${border}` }}>
                <div style={{ fontSize: '3.5rem', marginBottom: 12 }}>🌱</div>
                <h3 style={{ fontFamily: 'var(--font-display,sans-serif)', color: text, marginBottom: 8 }}>Start Your Learning Journey!</h3>
                <p style={{ color: textMuted, fontSize: '0.9rem', marginBottom: 24, maxWidth: 320, margin: '0 auto 24px' }}>
                  Choose a course and complete your first lesson to see your progress here.
                </p>
                <button onClick={() => navigate('/courses')}
                  style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem' }}>
                  🚀 Browse Courses
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
                {learnProgress.map(course => (
                  <div key={course.id} style={{ background: cardBg, borderRadius: 18, padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${border}`, transition: 'all 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: course.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                        {course.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: text, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.title}</div>
                        <div style={{ fontSize: '0.7rem', color: course.color, fontWeight: 600 }}>{course.level}</div>
                      </div>
                      <div style={{ background: course.color + '15', color: course.color, fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: 8 }}>
                        ⚡{course.xp} XP
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: textFaint, marginBottom: 5 }}>
                        <span>{course.completed}/{course.total} lessons</span>
                        <span style={{ fontWeight: 700, color: course.percent === 100 ? '#22C55E' : course.color }}>{course.percent}%</span>
                      </div>
                      <div style={{ height: 8, background: trackBg, borderRadius: 10, overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: course.percent === 100 ? '#22C55E' : course.color, width: `${course.percent}%`, borderRadius: 10, transition: 'width 0.6s ease' }} />
                      </div>
                    </div>

                    {/* Action button */}
                    {course.percent === 100 ? (
                      <button onClick={() => navigate(`/learn/${course.id}`)}
                        style={{ width: '100%', padding: '10px', borderRadius: 10, background: '#DCFCE7', color: '#166534', border: '1px solid #A7F3D0', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                        🏆 Completed — Review
                      </button>
                    ) : (
                      <button onClick={() => navigate(course.nextLessonId ? `/learn/${course.id}/${course.nextLessonId}` : `/learn/${course.id}`)}
                        style={{ width: '100%', padding: '10px', borderRadius: 10, background: course.color, color: 'white', border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 3px 10px ${course.color}35` }}>
                        ▶ Continue Learning
                      </button>
                    )}
                  </div>
                ))}

                {/* Add more card */}
                <div onClick={() => navigate('/courses')}
                  style={{ background: bgAlt, borderRadius: 18, padding: '20px', border: `2px dashed ${borderFm}`, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 160, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = dark ? '#1E3A5F' : '#EFF6FF' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = borderFm; e.currentTarget.style.background = bgAlt }}>
                  <span style={{ fontSize: '1.8rem' }}>➕</span>
                  <span style={{ fontWeight: 700, color: textMuted, fontSize: '0.875rem' }}>Start New Course</span>
                </div>
              </div>
            )}

            {/* All courses quick-access */}
            {learnProgress.length > 0 && (
              <div style={{ marginTop: 32 }}>
                <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1rem', color: text, marginBottom: 12 }}>All Courses</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
                  {COURSES.map(course => {
                    const prog    = loadProgress(course.id);
                    const total   = course.units.reduce((a, u) => a + u.lessons.length, 0);
                    const done    = prog.completedLessons?.length || 0;
                    const pct     = total > 0 ? Math.round((done / total) * 100) : 0;
                    return (
                      <button key={course.id} onClick={() => navigate(`/learn/${course.id}`)}
                        style={{ background: cardBg, border: `1px solid ${pct > 0 ? course.color + '40' : borderFm}`, borderRadius: 12, padding: '12px 14px', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = course.color}
                        onMouseLeave={e => e.currentTarget.style.borderColor = pct > 0 ? course.color + '40' : borderFm}>
                        <div style={{ fontSize: '1.2rem', marginBottom: 5 }}>{course.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: '0.8rem', color: text, marginBottom: 2 }}>{course.title}</div>
                        <div style={{ fontSize: '0.68rem', color: textFaint }}>{pct > 0 ? `${pct}% done` : 'Not started'}</div>
                        {pct > 0 && <div style={{ marginTop: 6, height: 3, background: trackBg, borderRadius: 4 }}><div style={{ height: '100%', background: course.color, width: `${pct}%`, borderRadius: 4 }} /></div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: My Courses ── */}
        {activeTab === 'enrolled' && (() => {
          // Build the same course list as My Progress but include ALL courses (started + not started)
          const allCourses = COURSES.map(course => {
            const prog       = loadProgress(course.id);
            const total      = course.units.reduce((a, u) => a + u.lessons.length, 0);
            const completed  = prog.completedLessons?.length || 0;
            const percent    = total > 0 ? Math.round((completed / total) * 100) : 0;
            const nextUnit   = course.units.find(u => u.lessons.some(l => !prog.completedLessons?.includes(l.id)));
            const nextLesson = nextUnit?.lessons.find(l => !prog.completedLessons?.includes(l.id));
            return { ...course, completed, total, percent, xp: prog.xp || 0, nextLessonId: nextLesson?.id };
          });

          return (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2 style={{ fontFamily: 'var(--font-display,sans-serif)', fontSize: '1.1rem', color: text, margin: 0 }}>My Courses</h2>
                <button onClick={() => navigate('/courses')}
                  style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '8px 16px', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                  + Browse Courses
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
                {allCourses.map(course => (
                  <div key={course.id} style={{ background: cardBg, borderRadius: 18, padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${border}`, transition: 'all 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: course.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                        {course.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: 'var(--font-display,sans-serif)', fontWeight: 700, color: text, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{course.title}</div>
                        <div style={{ fontSize: '0.7rem', color: course.color, fontWeight: 600 }}>{course.level}</div>
                      </div>
                      {course.xp > 0 && (
                        <div style={{ background: course.color + '15', color: course.color, fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: 8, flexShrink: 0 }}>
                          ⚡{course.xp} XP
                        </div>
                      )}
                    </div>

                    {/* Progress bar */}
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: textFaint, marginBottom: 5 }}>
                        <span>{course.completed}/{course.total} lessons</span>
                        <span style={{ fontWeight: 700, color: course.percent === 100 ? '#22C55E' : course.percent > 0 ? course.color : textFaint }}>
                          {course.percent === 0 ? 'Not started' : `${course.percent}%`}
                        </span>
                      </div>
                      <div style={{ height: 8, background: trackBg, borderRadius: 10, overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: course.percent === 100 ? '#22C55E' : course.color, width: `${course.percent}%`, borderRadius: 10, transition: 'width 0.6s ease' }} />
                      </div>
                    </div>

                    {/* Action button */}
                    {course.percent === 100 ? (
                      <button onClick={() => navigate(`/learn/${course.id}`)}
                        style={{ width: '100%', padding: '10px', borderRadius: 10, background: '#DCFCE7', color: '#166534', border: '1px solid #A7F3D0', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                        🏆 Completed — Review
                      </button>
                    ) : course.percent > 0 ? (
                      <button onClick={() => navigate(course.nextLessonId ? `/learn/${course.id}/${course.nextLessonId}` : `/learn/${course.id}`)}
                        style={{ width: '100%', padding: '10px', borderRadius: 10, background: course.color, color: 'white', border: 'none', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 3px 10px ${course.color}35` }}>
                        ▶ Continue Learning
                      </button>
                    ) : (
                      <button onClick={() => navigate(`/learn/${course.id}`)}
                        style={{ width: '100%', padding: '10px', borderRadius: 10, background: bg, color: course.color, border: `2px solid ${course.color}`, fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'inherit' }}>
                        🚀 Start Course
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
