import React from "react";
import Projects from "./Projects";

const Body = ({ darkMode }) => {
  return (
    <main className={`body-main ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ minHeight: "90vh", padding: "2rem" }}>
      <section id="home" className="mb-5">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a passionate developer. Explore my work, resume, and blogs below!
        </p>
      </section>
      <section id="about" className="mb-5">
        <h2>About Me</h2>
        <p>
          [Brief introduction about yourself, your skills, and your interests.]
        </p>
      </section>
      <section id="projects" className="mb-5">
        <h2>Projects</h2>
        <Projects darkMode={darkMode} />
      </section>
      <section id="resume" className="mb-5">
        <h2>Resume</h2>
        <a href="[Your Resume Link]" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Resume
        </a>
      </section>
      <section id="blogs" className="mb-5">
        <h2>Blogs</h2>
        <ul>
          <li><a href="[Blog Link 1]" target="_blank" rel="noopener noreferrer">Blog Post 1</a></li>
          <li><a href="[Blog Link 2]" target="_blank" rel="noopener noreferrer">Blog Post 2</a></li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
      </section>
    </main>
  );
};

export default Body;