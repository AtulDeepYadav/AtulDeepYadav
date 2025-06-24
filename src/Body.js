import React from "react";
import Projectslider from "./ProjectSlider";
import blogs from "./Blogs.json";
import galleryImages from "./Gallery.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = ({ darkMode, setPage }) => {
  // Slider settings for gallery (show 2 or 3 images at once if possible)
  const gallerySliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <main
      className={`container-fluid py-5 body-main ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
      style={{ minHeight: "90vh" }}
    >
      <section id="home" className="mb-5 text-center">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead mx-auto" style={{ maxWidth: 600 }}>
          Hi, I'm <span className="text-info fw-semibold">Atul Deep Yadav</span>, a passionate product-focused engineer. Explore my work, resume, and blogs below!
        </p>
      </section>

      <section id="about" className="mb-5">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h2 className="card-title fw-bold">About Me</h2>
                <p className="card-text fs-5">
                  I’m an engineer-turned-MBA candidate at IIM Lucknow with 3+ years at L&T, driving digital transformation in water infrastructure projects. 
                  I’m passionate about solving real-world problems through a blend of technology, product thinking, and user empathy. 
                  I’m also exploring robotics, AI, and building human-like bots as side projects.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src="https://via.placeholder.com/220?text=Your+Photo"
                  alt="Atul Deep Yadav"
                  className="img-fluid rounded"
                  style={{
                    width: 220,
                    height: 220,
                    objectFit: "cover",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-5">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`}>
          <div className="card-body">
            <h2 className="fw-bold mb-4">Projects</h2>
            <Projectslider darkMode={darkMode} />
            <div className="d-flex justify-content-center mt-3">
              <button
                className={`btn btn-${darkMode ? "info" : "primary"} fw-semibold mt-3`}
                onClick={() => setPage("projects")}
              >
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="blogs" className="mb-5">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`}>
          <div className="card-body">
            <h2 className="card-title fw-bold">Blogs</h2>
            <ul className="fs-5 mt-3">
              {blogs.slice(0, 3).map((blog, idx) => (
                <li key={idx}>
                  <a
                    href="#blogs"
                    className="link-info"
                    onClick={e => {
                      e.preventDefault();
                      setPage("blogs");
                    }}
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section similar to Projects */}
      <section id="gallery" className="mb-5 ">
        <div className={`card shadow border-0 py-2 ${darkMode ? "bg-secondary text-white" : ""}`}>
          <div className="card-body">
            <h2 className="fw-bold mb-3">Gallery</h2>
            <Slider {...gallerySliderSettings}>
              {galleryImages.map((img, idx) => (
                <div key={idx} className="px-3">
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{
                      width: "100%",
                      height: 320,
                      borderRadius: "1rem",
                      overflow: "hidden",
                      background: darkMode ? "#23272b" : "#f8f9fa",
                      boxShadow: darkMode
                        ? "0 2px 8px #00000033"
                        : "0 2px 8px #0a174e22",
                      margin: "0 auto",
                      border: darkMode ? "1px solid #343a40" : "1px solid #e3e3e3"
                    }}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        borderRadius: "1rem 1rem 0 0",
                        borderBottom: darkMode ? "1px solid #343a40" : "1px solid #e3e3e3"
                      }}
                    />
                    <div
                      className="text-center mt-3 px-2"
                      style={{
                        fontSize: "1.1rem",
                        color: darkMode ? "#ffd180" : "#0a174e",
                        fontWeight: 500
                      }}
                    >
                      {img.desc}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
