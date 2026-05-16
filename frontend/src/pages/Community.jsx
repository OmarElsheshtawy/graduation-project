import '../App.css'

function Community() {
  const testimonials = [
    {
      name: 'Omar Hassan',
      country: 'Egypt',
      text: 'LinguaBridge has transformed my English skills. The community is incredibly supportive and the teachers are amazing!',
      rating: 4
    },
    {
      name: 'Mohanad Hantera',
      country: 'Egypt',
      text: 'I passed my IELTS exam thanks to the comprehensive preparation course. Highly recommended!',
      rating: 5
    },
    {
      name: 'Jimmy',
      country: 'Egypt',
      text: 'The conversational practice sessions helped me gain confidence in speaking English at work.',
      rating: 4
    },
    {
      name: 'Moataz Eltokhy',
      country: 'Egypt',
      text: 'Best investment I made for my career. The business English course opened many opportunities.',
      rating: 5
    }
  ]

  const events = [
    {
      title: 'Weekly Conversation Club',
      date: 'Every Saturday',
      time: '10:00 AM GMT',
      participants: 150
    },
    {
      title: 'Grammar Workshop',
      date: 'Every Wednesday',
      time: '7:00 PM GMT',
      participants: 200
    },
    {
      title: 'IELTS Q&A Session',
      date: 'First Monday of Month',
      time: '6:00 PM GMT',
      participants: 300
    }
  ]

  return (
    <div className="page-container">
      <div className="background-image" style={{ backgroundImage: "url('/images/community(1).jpeg')" }}>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-title">Our Community</h1>
            <p className="page-subtitle">Join thousands of learners from around the world</p>
          </div>
        </section>

       <section className="community-page-section">
         <div className="container">
           <div className="community-stats">
             <div className="stat-card">
               <h3>10,000+</h3>
               <p>Active Members</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Countries Represented</p>
              </div>
              <div className="stat-card">
                <h3>500+</h3>
                <p>Daily Conversations</p>
              </div>
              <div className="stat-card">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar"></div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial-location">{testimonial.country}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <div className="event-detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/>
                    </svg>
                    <span>{event.participants} participants</span>
                  </div>
                </div>
                <button className="btn-primary">Join Event</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community

