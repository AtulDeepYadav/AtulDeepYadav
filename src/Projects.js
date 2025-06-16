import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    image: "https://via.placeholder.com/300x300?text=Project+1",
    title: "Project One",
    intro: "A brief introduction to Project One. This project does amazing things.",
    link: "https://github.com/yourusername/project-one"
  },
  {
    image: "https://via.placeholder.com/300x300?text=Project+2",
    title: "Project Two",
    intro: "A brief introduction to Project Two. This project is even more amazing.",
    link: "https://github.com/yourusername/project-two"
  },
  {
    image: "https://via.placeholder.com/300x300?text=Project+3",
    title: "Project Three",
    intro: "A brief introduction to Project Three. This project is the best.",
    link: "https://github.com/yourusername/project-three"
  },
  {
    image: "https://via.placeholder.com/300x300?text=Project+4",
    title: "Project Four",
    intro: "A brief introduction to Project Four. This project is awesome.",
    link: "https://github.com/yourusername/project-four"
  }
];

// Helper to chunk projects for multi-item carousel
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const Projects = ({ darkMode }) => {
  // Show 3 slides per view on desktop, 2 on tablet, 1 on mobile
  const slidesPerView = 3;
  const projectChunks = chunkArray(projects, slidesPerView);

  return (
    <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {projectChunks.map((chunk, idx) => (
          <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
            <div className="row justify-content-center">
              {chunk.map((project, j) => (
                <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center" key={j}>
                  <div className={`card mb-3 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ width: "300px" }}>
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                      style={{ width: "300px", height: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.intro}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Projects;