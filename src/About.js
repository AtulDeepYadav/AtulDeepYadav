import React from "react";

const timelineEvents = [
  {
    year: "1999",
    title: "Born",
    description: "Born in India. The journey begins!",
    image: null,
  },
  {
    year: "2000",
    title: "First Steps",
    description: "Started exploring the world, one step at a time.",
    image: null,
  },
  {
    year: "2020",
    title: "Sample Event With Image",
    description: "This is an example event with an image.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80",
  },
  // Add more events here as you update your life events
];

const About = ({ darkMode }) => (
  <main
    className={`container py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
    style={{ minHeight: "90vh" }}
  >
    <div className="row justify-content-center mb-5">
      <div className="col-lg-8">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`} style={{ borderRadius: "1.5rem" }}>
          <div className="card-body p-5">
            <h1 className="card-title fw-bold mb-4" style={{ fontSize: "2.5rem", letterSpacing: "-1px" }}>
              About Me
            </h1>
            <p className="card-text fs-5 mb-4">
              Hi, I'm <span className="text-info fw-semibold">Atul Deep Yadav</span>, an engineer-turned-MBA candidate at IIM Lucknow with 3+ years of experience at L&T, where I drove digital transformation in water infrastructure projects.
            </p>
            <p className="card-text fs-5 mb-4">
              I am passionate about solving real-world problems through a blend of technology, product thinking, and user empathy. My journey has taken me from engineering to management, and I thrive at the intersection of business and technology.
            </p>
            <p className="card-text fs-5 mb-4">
              I enjoy exploring robotics, AI, and building human-like bots as side projects. I believe in continuous learning and love collaborating with diverse teams to create meaningful impact.
            </p>
            <div className="mt-4">
              <a
                href="mailto:atuldeepyadav@gmail.com"
                className="btn btn-outline-info fw-semibold px-4"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/AtulDeepYadav/AtulDeepYadav/raw/main/ADY_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info fw-semibold px-4 ms-3"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Photo Gallery Section */}
    <div className="row justify-content-center mb-5">
      <div className="col-lg-8">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`} style={{ borderRadius: "1.5rem" }}>
          <div className="card-body p-4">
            <h2 className="fw-bold mb-4 text-center" style={{ letterSpacing: "-0.5px" }}>Gallery</h2>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {/* Replace src with your photo URLs or import statements */}
              <div style={{ width: 160, height: 160, borderRadius: "1rem", overflow: "hidden", background: "#eee" }}>
                {/* <img src="path/to/photo1.jpg" alt="Atul Deep Yadav" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
              </div>
              <div style={{ width: 160, height: 160, borderRadius: "1rem", overflow: "hidden", background: "#eee" }}>
                {/* <img src="path/to/photo2.jpg" alt="Atul Deep Yadav" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
              </div>
              <div style={{ width: 160, height: 160, borderRadius: "1rem", overflow: "hidden", background: "#eee" }}>
                {/* <img src="path/to/photo3.jpg" alt="Atul Deep Yadav" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
              </div>
            </div>
            <div className="text-center mt-3 text-muted" style={{ fontSize: "0.95rem" }}>
              {/* Add or update your photos above */}
              (Add your best photos here)
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Timeline Section */}
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`} style={{ borderRadius: "1.5rem" }}>
          <div className="card-body p-5">
            <h2 className="fw-bold mb-4 text-center" style={{ letterSpacing: "-0.5px" }}>My Timeline</h2>
            <div className="timeline position-relative" style={{ marginLeft: "1rem" }}>
              {/* Center the line between the dots */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "40px",
                  bottom: "40px",
                  width: "4px",
                  background: "linear-gradient(180deg, #00bfff 0%, #0a174e 100%)",
                  borderRadius: "2px",
                  zIndex: 0,
                }}
              />
              <ul className="list-unstyled mb-0" style={{ position: "relative", zIndex: 1, paddingLeft: 0, marginBottom: 0 }}>
                {[...timelineEvents].reverse().map((event, idx, arr) => (
                  <li key={idx} className="mb-5 d-flex align-items-start" style={{ position: "relative" }}>
                    <div style={{
                      width: 40,
                      minWidth: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#ffd180",
                      color: "#0a174e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      boxShadow: "0 2px 8px #ffd18044",
                      position: "relative",
                      zIndex: 2,
                      marginRight: "1.5rem",
                      left: "0px"
                    }}>
                      {event.year}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">{event.title}</h5>
                      <p className="mb-1">{event.description}</p>
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.title}
                          style={{
                            width: 120,
                            height: 120,
                            objectFit: "cover",
                            borderRadius: "0.75rem",
                            marginTop: "0.5rem"
                          }}
                        />
                      )}
                    </div>
                  </li>
                ))}
                {/* Add more <li> for future events */}
              </ul>
            </div>
            <div className="text-center text-muted mt-4" style={{ fontSize: "0.95rem" }}>
              (Update your timeline events in the code as your journey grows!)
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default About;