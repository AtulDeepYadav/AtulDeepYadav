import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ darkMode, setDarkMode, setPage }) => {
  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}>
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={e => {
            e.preventDefault();
            setPage("home");
          }}
        >
          ADY
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={e => {
                  e.preventDefault();
                  setPage("about");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={e => {
                  e.preventDefault();
                  setPage("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#blogs"
                onClick={e => {
                  e.preventDefault();
                  setPage("blogs");
                }}
              >
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  setPage("contact");
                }}
              >
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/AtulDeepYadav/AtulDeepYadav/raw/main/ADY_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#gallery"
                onClick={e => {
                  e.preventDefault();
                  setPage("gallery");
                }}
              >
                Gallery
              </a>
            </li>
          </ul>
          <button
            className={`btn btn-sm ms-3 ${darkMode ? "btn-light" : "btn-dark"}`}
            onClick={handleToggle}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;