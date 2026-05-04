import { useState, useEffect } from 'react';
import api from '../services/api';
import './Dashboard.css';

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Intermediate+', 'All Levels', 'Beginner+'];
const emptyForm = { title: '', description: '', level: 'Beginner', duration: '', price: 0 };

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({ total_courses: 0, total_students: 0, total_revenue: 0 });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formLoading, setFormLoading] = useState(false);
  const [toast, setToast] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [coursesRes, statsRes] = await Promise.all([
        api.get('/courses/instructor/my-courses'),
        api.get('/instructor/stats'),
      ]);
      setCourses(coursesRes.data.courses);
      setStats(statsRes.data.stats);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => { setEditingCourse(null); setForm(emptyForm); setShowModal(true); };
  const openEdit = (course) => {
    setEditingCourse(course);
    setForm({ title: course.title, description: course.description || '', level: course.level, duration: course.duration || '', price: course.price });
    setShowModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (editingCourse) { await api.put(`/courses/${editingCourse.id}`, form); showToast('✅ Course updated!'); }
      else { await api.post('/courses', form); showToast('✅ Course created!'); }
      setShowModal(false);
      fetchData();
    } catch (err) {
      showToast(err.response?.data?.message || 'Something went wrong', true);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      await api.delete(`/courses/${courseId}`);
      setDeleteConfirm(null);
      showToast('🗑️ Course deleted.');
      fetchData();
    } catch (err) {
      showToast('Delete failed', true);
    }
  };

  const handlePublishToggle = async (course) => {
    try {
      await api.put(`/courses/${course.id}`, { is_published: !course.is_published });
      showToast(course.is_published ? 'Course unpublished.' : '✅ Course published!');
      fetchData();
    } catch (err) { showToast('Failed to update', true); }
  };

  const showToast = (msg, isError = false) => { setToast({ msg, isError }); setTimeout(() => setToast(''), 3000); };

  if (loading) return <div style={{ textAlign: 'center', padding: '4rem', color: '#7f8c8d' }}>⏳ Loading...</div>;

  return (
    <div className="dashboard-page">
      {toast && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999, background: toast.isError ? '#FEE2E2' : '#D1FAE5', color: toast.isError ? '#DC2626' : '#065F46', padding: '1rem 1.5rem', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', fontWeight: 600 }}>
          {toast.msg}
        </div>
      )}

      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ color: '#2c3e50', margin: 0 }}>Welcome, {user.name?.split(' ')[0]}! 👋</h2>
        <p style={{ color: '#7f8c8d', marginTop: '4px' }}>Manage your courses and track student progress.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card"><h3>Total Courses</h3><p className="stat-value">{stats.total_courses}</p></div>
        <div className="stat-card"><h3>Total Students</h3><p className="stat-value">{stats.total_students}</p></div>
        <div className="stat-card"><h3>Total Revenue</h3><p className="stat-value">${parseFloat(stats.total_revenue || 0).toFixed(0)}</p></div>
      </div>

      <section className="dashboard-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>My Courses</h3>
          <button className="create-btn" onClick={openCreate}>+ Create New Course</button>
        </div>
        {courses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#7f8c8d' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
            <p>No courses yet.</p>
            <button className="create-btn" onClick={openCreate} style={{ marginTop: '1rem' }}>Create Your First Course</button>
          </div>
        ) : (
          <div className="courses-list">
            {courses.map(course => (
              <div key={course.id} className="course-list-item">
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <div className="course-meta">
                    <span>📚 {course.level}</span>
                    <span>👥 {course.students_count || 0} Students</span>
                    <span>💰 {parseFloat(course.price) === 0 ? 'Free' : `$${parseFloat(course.price).toFixed(0)}`}</span>
                    <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, background: course.is_published ? '#D1FAE5' : '#FEF3C7', color: course.is_published ? '#065F46' : '#92400E' }}>
                      {course.is_published ? '✓ Published' : '⏸ Draft'}
                    </span>
                  </div>
                </div>
                <div className="course-actions">
                  <button onClick={() => handlePublishToggle(course)} style={{ marginLeft: '8px', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', border: '1px solid', borderColor: course.is_published ? '#F59E0B' : '#10B981', color: course.is_published ? '#F59E0B' : '#10B981', background: 'white', fontSize: '0.85rem' }}>
                    {course.is_published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button className="edit-btn" onClick={() => openEdit(course)}>Edit</button>
                  <button onClick={() => setDeleteConfirm(course.id)} style={{ marginLeft: '8px', padding: '5px 10px', borderRadius: '4px', border: '1px solid #E74C3C', color: '#E74C3C', background: 'white', cursor: 'pointer' }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Create/Edit Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '540px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, color: '#2c3e50' }}>{editingCourse ? 'Edit Course' : 'Create New Course'}</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#7f8c8d' }}>✕</button>
            </div>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: '#2c3e50' }}>Course Title *</label>
                <input type="text" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Advanced Business English"
                  style={{ padding: '0.75rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: '#2c3e50' }}>Description</label>
                <textarea rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Describe what students will learn..."
                  style={{ padding: '0.75rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: '#2c3e50' }}>Level *</label>
                  <select value={form.level} onChange={e => setForm({ ...form, level: e.target.value })}
                    style={{ padding: '0.75rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem', background: 'white' }}>
                    {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, color: '#2c3e50' }}>Duration</label>
                  <input type="text" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 8 weeks"
                    style={{ padding: '0.75rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: '#2c3e50' }}>Price ($) — 0 for free</label>
                <input type="number" min="0" step="0.01" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })}
                  style={{ padding: '0.75rem', border: '1px solid #E8EDF2', borderRadius: '8px', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid #E8EDF2', background: 'white', cursor: 'pointer', fontWeight: 600 }}>Cancel</button>
                <button type="submit" disabled={formLoading} style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', background: '#3498db', color: 'white', cursor: 'pointer', fontWeight: 600, opacity: formLoading ? 0.7 : 1 }}>
                  {formLoading ? 'Saving...' : editingCourse ? 'Save Changes' : 'Create Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗑️</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Delete Course?</h3>
            <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>This will permanently delete the course and all enrollments.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => setDeleteConfirm(null)} style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid #E8EDF2', background: 'white', cursor: 'pointer', fontWeight: 600 }}>Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', background: '#E74C3C', color: 'white', cursor: 'pointer', fontWeight: 600 }}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorDashboard;