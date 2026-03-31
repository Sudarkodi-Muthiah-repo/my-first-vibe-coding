import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [user] = useState({
    name: 'John Learner',
    avatar: '👤',
    enrolledCourses: 5,
    hoursLearned: 24
  })

  const [progress] = useState([
    { course: 'Web Development', progress: 75 },
    { course: 'React Patterns', progress: 45 },
    { course: 'Python for Data Science', progress: 90 }
  ])

  const [achievements] = useState([
    { icon: '🏆', title: 'Fast Learner', description: 'Completed 5 courses in 30 days' },
    { icon: '⏰', title: 'Consistent', description: 'Learned every day for 15 days' },
    { icon: '📚', title: 'Bookworm', description: 'Read all course materials' }
  ])

  return (
    <main className="dashboard">
      {/* Dashboard Header */}
      <section className="dashboard-header">
        <div className="container">
          <div className="user-greeting">
            <div className="user-avatar">{user.avatar}</div>
            <div>
              <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
              <p>Continue your learning journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <h3>{user.enrolledCourses}</h3>
                <p>Enrolled Courses</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <h3>{user.hoursLearned}h</h3>
                <p>Hours Learned</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <h3>15</h3>
                <p>Day Streak</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <h3>3</h3>
                <p>Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section">
        <div className="container">
          <h2>Your Course Progress</h2>
          <div className="progress-list">
            {progress.map((item, index) => (
              <div key={index} className="progress-item">
                <div className="progress-header">
                  <h3>{item.course}</h3>
                  <span>{item.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2>Your Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations-section">
        <div className="container">
          <h2>Recommended for You</h2>
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <div className="rec-icon">🎓</div>
              <h3>Advanced JavaScript</h3>
              <p>Based on your progress in Web Development</p>
              <button className="btn btn-primary">Explore</button>
            </div>
            <div className="recommendation-card">
              <div className="rec-icon">🚀</div>
              <h3>Node.js Backend</h3>
              <p>Perfect next step after React mastery</p>
              <button className="btn btn-primary">Explore</button>
            </div>
            <div className="recommendation-card">
              <div className="rec-icon">📊</div>
              <h3>Data Visualization</h3>
              <p>Complement your Python data science skills</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div>
            <h3>Learning Land</h3>
            <p>Your personal learning hub.</p>
          </div>
          <div>
            <h3>Account</h3>
            <ul>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#certificates">Certificates</a></li>
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li><a href="#support">Support</a></li>
              <li><a href="#bugs">Report Bugs</a></li>
              <li><a href="#feedback">Feedback</a></li>
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

export default Dashboard
