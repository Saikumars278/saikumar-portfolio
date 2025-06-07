import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold text-primary"
          style={{ fontSize: '25.5px' }}
          href="#home"
        >
          Saikumar S
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map(
              (section) => (
                <li className="nav-item" key={section}>
                  <a className="nav-link" href={`#${section}`}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
