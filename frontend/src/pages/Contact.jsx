import { useState } from 'react'
import api from '../services/api'
import '../App.css'
import { useTheme } from './ThemeContext'

function Contact() {
  const { dark } = useTheme()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); setError('') }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await api.post('/contact', formData)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We'd love to hear from you.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Have questions? We're here to help!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div><h3>Address</h3><p>12 El Estad Street, Tanta City, Egypt</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div><h3>Email</h3><p>linguabridge@gmail.com</p></div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              {success ? (
                <div style={{ background: dark ? 'rgba(16,185,129,0.12)' : '#D1FAE5', border: `1px solid ${dark ? 'rgba(16,185,129,0.3)' : '#A7F3D0'}`, borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: dark ? '#6EE7B7' : '#065F46', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: dark ? '#34D399' : '#047857' }}>We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSuccess(false)} className="btn-primary" style={{ marginTop: '1.5rem' }}>Send Another</button>
                </div>
              ) : (
                <>
                  {error && <div style={{ background: dark ? 'rgba(239,68,68,0.12)' : '#FEE2E2', color: dark ? '#FCA5A5' : '#DC2626', border: `1px solid ${dark ? 'rgba(239,68,68,0.3)' : 'transparent'}`, padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1rem' }}>{error}</div>}
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group"><label>Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required /></div>
                    <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
                    <div className="form-group"><label>Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} required /></div>
                    <div className="form-group"><label>Message</label><textarea name="message" rows="6" value={formData.message} onChange={handleChange} required /></div>
                    <button type="submit" className="btn-primary btn-large" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send Message'}</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact