import { useState } from 'react'
import './Courses.css'

function Courses() {
  const [courses] = useState([
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Chen',
      level: 'Beginner',
      students: 15420,
      rating: 4.8,
      price: 'Free',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      instructor: 'John Smith',
      level: 'Advanced',
      students: 8945,
      rating: 4.9,
      price: '$49.99',
      image: '⚛️'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      instructor: 'Emma Johnson',
      level: 'Intermediate',
      students: 22100,
      rating: 4.7,
      price: '$39.99',
      image: '🐍'
    },
    {
      id: 4,
      title: 'UI/UX Design Mastery',
      instructor: 'Michael Brown',
      level: 'Beginner',
      students: 12300,
      rating: 4.8,
      price: '$44.99',
      image: '🎨'
    },
    {
      id: 5,
      title: 'Cloud Computing with AWS',
      instructor: 'Lisa Anderson',
      level: 'Intermediate',
      students: 9800,
      rating: 4.6,
      price: '$59.99',
      image: '☁️'
    },
    {
      id: 6,
      title: 'Mobile App Development',
      instructor: 'David Wilson',
      level: 'Advanced',
      students: 11200,
      rating: 4.9,
      price: '$54.99',
      image: '📱'
    }
  ])

  return (
    <main className="courses-page">
      {/* Header */}
      <section className="courses-header">
        <div className="container">
          <h1>Explore Our Courses</h1>
          <p>Choose from hundreds of courses and start learning today</p>
        </div>
      </section>

      {/* Filters */}
      <section className="courses-filters">
        <div className="container">
          <div className="filter-group">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Beginner</button>
            <button className="filter-btn">Intermediate</button>
            <button className="filter-btn">Advanced</button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">{course.image}</div>
                <h3>{course.title}</h3>
                <p className="instructor">by {course.instructor}</p>
                <div className="course-meta">
                  <span className="level">{course.level}</span>
                  <span className="rating">⭐ {course.rating}</span>
                </div>
                <p className="students">{course.students.toLocaleString()} students</p>
                <div className="course-footer">
                  <span className="price">{course.price}</span>
                  <button className="btn btn-primary">Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div>
            <h3>Learning Land</h3>
            <p>Invest in yourself with quality online courses.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
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

export default Courses
