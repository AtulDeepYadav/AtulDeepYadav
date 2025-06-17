import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./Projects.json"; // <-- Use Projects.json for data

const arrowButtonStyle = {
  zIndex: 2,
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "rgba(10,23,78,0.18)",
  border: "none",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px #0a174e22",
  transition: "background 0.18s, box-shadow 0.18s",
  cursor: "pointer",
};

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      style={{ ...arrowButtonStyle, left: 8 }}
      onClick={onClick}
      aria-label="Previous"
    >
      <span
        className="carousel-control-prev-icon"
        style={{
          filter: "invert(0.5) drop-shadow(0 1px 2px #0a174e44)",
          width: 24,
          height: 24,
        }}
      />
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      style={{ ...arrowButtonStyle, right: 8 }}
      onClick={onClick}
      aria-label="Next"
    >
      <span
        className="carousel-control-next-icon"
        style={{
          filter: "invert(0.5) drop-shadow(0 1px 2px #0a174e44)",
          width: 24,
          height: 24,
        }}
      />
    </button>
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const ProjectSlider = ({ darkMode }) => (
  <div
    id="projectsCarousel"
    style={{ width: "100%", position: "relative" }}
  >
    <Slider {...sliderSettings}>
      {projects.map((project, idx) => (
        <div key={idx}>
          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <div
                className={`card shadow border-0 mb-4 ${darkMode ? "bg-secondary text-white" : ""}`}
                style={{ width: "300px" }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "1rem 1rem 0 0"
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text fs-6">{project.intro}</p>
                  {/* Removed View Project button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default ProjectSlider;