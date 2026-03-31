import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const features = [
    {
      icon: '📚',
      title: 'Diverse Courses',
      description: 'Learn from hundreds of expert-led courses across all topics'
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Customize your learning path based on your goals and pace'
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Connect with learners, get help, and share your progress'
    },
    {
      icon: '🏆',
      title: 'Certificates',
      description: 'Earn recognized certificates upon course completion'
    }
  ]

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Learning Land</h1>
          <p>Unlock Your Potential with World-Class Online Learning</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Learning Land?</h2>
          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="card feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Your Learning Journey Today</h2>
          <p>Join thousands of students already learning on Learning Land</p>
          <Link to="/courses" className="btn btn-primary">Get Started</Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div>
            <h3>Learning Land</h3>
            <p>Empowering learners worldwide through quality education.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Learning Land. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default Home
