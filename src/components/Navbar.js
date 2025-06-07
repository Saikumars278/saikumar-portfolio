import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure bootstrap JS is imported

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navCollapse = document.getElementById('navbarNav');
      if (!navCollapse) return;

      // Only run on small screens
      if (window.innerWidth < 768 && navCollapse.classList.contains('show')) {
        // Get Bootstrap Collapse instance
        const bsCollapse = window.bootstrap?.Collapse.getInstance(navCollapse);

        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          // Fallback: create instance and hide
          const newCollapse = new window.bootstrap.Collapse(navCollapse, {
            toggle: false,
          });
          newCollapse.hide();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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
