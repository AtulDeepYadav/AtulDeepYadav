import React from "react";

// Make sure to include Bootstrap Icons in your index.html or install via npm and import in your project
// Example for index.html: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

const Footer = ({ darkMode }) => (
  <footer className={`py-3 mt-auto ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
    <div className="container text-center">
      <div>
        &copy; {new Date().getFullYear()} <span className="fw-bold">Atul Deep Yadav</span>
      </div>
      <div className="my-2 d-flex justify-content-center gap-3 flex-wrap">
        <a
          href="mailto:atuldeepyadav@gmail.com"
          className={`fs-4 ${darkMode ? "text-info" : "text-primary"}`}
          title="Email"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a
          href="https://github.com/AtulDeepYadav"
          className={`fs-4 ${darkMode ? "text-info" : "text-dark"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/atuldeepyadav/"
          className={`fs-4 ${darkMode ? "text-info" : "text-primary"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/atuldeepyadav"
          className={`fs-4 ${darkMode ? "text-info" : "text-primary"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="X (Twitter)"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://facebook.com/atuldeepyadav"
          className={`fs-4 ${darkMode ? "text-info" : "text-primary"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://instagram.com/atuldeepyadav"
          className={`fs-4 ${darkMode ? "text-info" : "text-danger"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@atuldeepyadav"
          className={`fs-4 ${darkMode ? "text-info" : "text-danger"}`}
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
        >
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <div style={{ fontSize: "0.95rem" }} className="mt-1">
        <span className="me-1">⚙️</span>
        <span>
          Just a guy blending tech, thoughts, and tenacity
        </span>
        <span className="ms-1" role="img" aria-label="heart">💡</span>
      </div>
    </div>
  </footer>
);

export default Footer;