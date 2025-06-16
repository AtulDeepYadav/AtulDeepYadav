import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">MyLogo</a>
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
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Me</a>
            </li>
            <li className="nav-item d-flex align-items-center ms-3">
              <button
                className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
                onClick={handleToggle}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;