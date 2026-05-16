import '../App.css'

function About() {
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About LinguaBridge</h1>
          <p className="page-subtitle">Empowering English learners worldwide since 2020</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At LinguaBridge, we believe that learning English should be accessible, engaging, and effective for everyone. 
              Our mission is to provide high-quality English education through innovative technology and a supportive 
              community that helps learners achieve their language goals.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, LinguaBridge started as a small initiative to help friends and family learn English. 
              What began as a passion project has grown into a global platform serving over 10,000 learners 
              from more than 50 countries. We've built a community where learners support each other and 
              grow together.
            </p>
          </div>

          <div className="about-section">
            <h2>What Makes Us Different</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Personalized Learning</h3>
                <p>Our AI-powered system adapts to your learning style and pace, ensuring you get the most out of every lesson.</p>
              </div>
              <div className="feature-card">
                <h3>Expert Instructors</h3>
                <p>Learn from certified teachers with years of experience and a passion for helping students succeed.</p>
              </div>
              <div className="feature-card">
                <h3>Community First</h3>
                <p>Join a vibrant community where learners help each other, share experiences, and celebrate achievements together.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar"></div>
                <h3>Dr. Emily Chen</h3>
                <p className="member-role">Instructor</p>
                <p>Ph.D. in Linguistics, 15+ years in language education</p>
              </div>
              <div className="team-member">
                <div className="member-avatar"></div>
                <h3>Omar Abdulaziz</h3>
                <p className="member-role">Head of Curriculum</p>
                <p>M.A. in TESOL, curriculum design specialist</p>
              </div>
              <div className="team-member">
                <div className="member-avatar"></div>
                <h3>Ahmed Osama</h3>
                <p className="member-role">Community Manager</p>
                <p>Expert in building engaging learning communities</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Excellence</h3>
                <p>We strive for the highest quality in everything we do, from course content to student support.</p>
              </div>
              <div className="value-item">
                <h3>Accessibility</h3>
                <p>We believe quality education should be available to everyone, regardless of location or background.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We continuously improve our platform with the latest technology and teaching methods.</p>
              </div>
              <div className="value-item">
                <h3>Community</h3>
                <p>We foster a supportive environment where learners can grow and succeed together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

