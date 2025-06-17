import React, { useState } from "react";
import projects from "./Projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Projects = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">Projects</h2>
      <div className="row g-4 justify-content-center">
        {projects.map((project, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex flex-column">
            <div
              className={`card shadow border-0 w-100 ${darkMode ? "bg-secondary text-white" : ""}`}
              style={{ cursor: "pointer", borderRadius: "1rem" }}
              onClick={() => handleOpenModal(project)}
              aria-label={`Open details for ${project.title}`}
            >
              <img
                src={Array.isArray(project.images) ? project.images[0] : project.image}
                alt={project.title}
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "1rem 1rem 0 0",
                }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text">{project.shortDescription}</p>
                <Button
                  variant={darkMode ? "info" : "primary"}
                  className="mt-2"
                  onClick={e => {
                    e.stopPropagation();
                    handleOpenModal(project);
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        contentClassName={darkMode ? "bg-dark text-white" : ""}
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* 1. Photo image slider */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <Slider {...sliderSettings}>
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="d-flex justify-content-center">
                      <img
                        src={img}
                        alt={`${selectedProject.title} ${idx + 1}`}
                        style={{
                          width: "100%",
                          maxHeight: "350px",
                          objectFit: "contain",
                          borderRadius: "1rem",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: "100%",
                    maxHeight: "350px",
                    objectFit: "contain",
                    borderRadius: "1rem",
                    margin: "0 auto",
                  }}
                />
              )}
              <div className="mt-4">
                {/* 2. Project title */}
                <h4 className="fw-bold">{selectedProject.title}</h4>
                {/* 3. Project Description in short and in detail */}
                <p>
                  <strong>Short Description:</strong> {selectedProject.shortDescription}
                </p>
                <p>
                  <strong>Detailed Description:</strong> {selectedProject.detailedDescription}
                </p>
                {/* 4. Technologies used */}
                {selectedProject.technologies && (
                  <p>
                    <strong>Technologies Used:</strong> {selectedProject.technologies}
                  </p>
                )}
                {/* 5. My Contribution and key responsibilities */}
                {selectedProject.contribution && (
                  <p>
                    <strong>My Contribution & Key Responsibilities:</strong> {selectedProject.contribution}
                  </p>
                )}
                {/* 6. Challenges faced */}
                {selectedProject.challenges && (
                  <p>
                    <strong>Challenges Faced:</strong> {selectedProject.challenges}
                  </p>
                )}
                {/* 7. Impact or Final result */}
                {selectedProject.impact && (
                  <p>
                    <strong>Impact / Final Result:</strong> {selectedProject.impact}
                  </p>
                )}
                {/* Project Link */}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info fw-semibold mt-2"
                  >
                    View Project
                  </a>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant={darkMode ? "secondary" : "light"} onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Projects;