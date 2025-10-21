import React from 'react';
import '../style/project.css'; // Ensure this path is correct

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2
          className="section-titlee text-center fw-bold mb-4"
          style={{ fontSize: '2.5rem' }}
        >
          Featured Projects
        </h2>
        <p
          className="text-center text-muted mb-5"
          style={{ fontSize: '1.1rem' }}
        >
          Key projects including a Hospital Booking System, Attendance
          Management System, Accounting Software, Nim Technology Website, and
          UI-focused mini projects.
        </p>

        <div className="row g-4">
          {/* Hospital Appointment Management System */}
          <div className="col-md-6">
            <div
              className="card h-100 shadow-sm"
              style={{ backgroundColor: '#E3F2FD' }} // Light Blue
            >
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Hospital Appointment Management System
                </h5>
                <p className="card-text">
                  A full-stack hospital appointment booking system built using
                  React.js and Django, offering features like registration,
                  doctor management, and appointment tracking.
                </p>
                <ul className="mb-3">
                  <li>User registration, login, and appointment booking</li>
                  <li>Doctor profile management and viewing</li>
                  <li>Admin dashboard with doctor/patient control</li>
                  <li>RESTful APIs via Django REST Framework</li>
                  <li>MySQL database with full CRUD operations</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{' '}
                  <span className="tech-badge react">React.js</span>{' '}
                  <span className="tech-badge django">Django</span>{' '}
                  <span className="tech-badge rest-api">REST API</span>{' '}
                  <span className="tech-badge mysql">MySQL</span>{' '}
                  <span className="tech-badge axios">Axios</span>
                </p>
              </div>
            </div>
          </div>

          {/* Attendance Management System */}
          <div className="col-md-6">
            <div
              className="card h-100 shadow-sm"
              style={{ backgroundColor: '#E8F5E9' }} // Light Green
            >
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Attendance Management System
                </h5>
                <p className="card-text">
                  A web-based attendance system that tracks daily presence,
                  absence, and working hours with secure authentication and role
                  management.
                </p>
                <ul className="mb-3">
                  <li>Employee and admin login system</li>
                  <li>Daily attendance record with timestamp</li>
                  <li>Leave management and summary reports</li>
                  <li>Data stored securely with REST API integration</li>
                  <li>Dashboard with attendance visualization</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{' '}
                  <span className="tech-badge react">React.js</span>{' '}
                  <span className="tech-badge django">Django</span>{' '}
                  <span className="tech-badge rest-api">REST API</span>{' '}
                  <span className="tech-badge mysql">MySQL</span>
                </p>
              </div>
            </div>
          </div>

          {/* Accounting Software – Nim Technology */}
          <div className="col-md-6">
            <div
              className="card h-100 shadow-sm"
              style={{ backgroundColor: '#FFF8E1' }} // Light Yellow
            >
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Accounting Software – Nim Technology
                </h5>
                <p className="card-text">
                  A modern accounting platform for small businesses to manage
                  billing, expenses, and profit tracking — developed for Nim
                  Technology.
                </p>
                <ul className="mb-3">
                  <li>Invoice and billing management</li>
                  <li>Automated expense and profit calculation</li>
                  <li>Secure user authentication system</li>
                  <li>Interactive dashboard with charts and analytics</li>
                  <li>Integration with RESTful APIs and MySQL database</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{' '}
                  <span className="tech-badge react">React.js</span>{' '}
                     <span className="tech-badge bootstrap">Bootstrap</span>{' '}
                  <span className="tech-badge rest-api">REST API</span>{' '}
                  <span className="tech-badge mysql">MySQL</span>
                </p>
              </div>
            </div>
          </div>

          {/* Nim Technology Website */}
          <div className="col-md-6">
            <div
              className="card h-100 shadow-sm"
              style={{ backgroundColor: '#F3E5F5' }} // Light Purple
            >
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Nim Technology Website
                </h5>
                <p className="card-text">
                  A responsive corporate website developed for Nim Technology,
                  showcasing services like web development, digital marketing,
                  and IT consulting using a modern React.js frontend.
                </p>
                <ul className="mb-3">
                  <li>Responsive React-based design with reusable components</li>
                  <li>Service showcase and client testimonial sections</li>
                  <li>Contact form with EmailJS integration</li>
                  <li>Deployed on GitHub Pages for smooth accessibility</li>
                  <li>Optimized UI/UX for all devices</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{' '}
                  <span className="tech-badge react">React.js</span>{' '}
                  <span className="tech-badge bootstrap">Bootstrap</span>{' '}
                  <span className="tech-badge css">CSS</span>{' '}
                  <span className="tech-badge emailjs">EmailJS</span>
                </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Projects;
