import React, { useState } from "react";
import blogs from "./Blogs.json";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const getUnique = (arr, key) => [...new Set(arr.map(item => item[key]))];

const Blogs = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const categories = ["All", ...getUnique(blogs, "category")];
  const years = ["All", ...getUnique(blogs, blog => new Date(blog.date).getFullYear())];

  const filteredBlogs = blogs.filter(blog => {
    const matchCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchYear = selectedYear === "All" || new Date(blog.date).getFullYear().toString() === selectedYear.toString();
    return matchCategory && matchYear;
  });

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <div className={`container py-4 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h2 className="fw-bold mb-4 text-center">Blogs</h2>
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
          >
            {years.map((year, idx) => (
              <option key={idx} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row g-4">
        {filteredBlogs.length === 0 ? (
          <div className="text-center">No blogs found for selected filters.</div>
        ) : (
          filteredBlogs.map((blog, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className={`card shadow border-0 w-100 ${darkMode ? "bg-secondary text-white" : ""}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "1rem 1rem 0 0"
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="card-text">{blog.summary}</p>
                  <div className="mb-2">
                    <span className="badge bg-info text-dark me-2">{blog.category}</span>
                    <span className="text-muted small">{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <Button
                    variant={darkMode ? "info" : "primary"}
                    className="mt-auto fw-semibold"
                    onClick={() => handleOpenModal(blog)}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Blog Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        contentClassName={darkMode ? "bg-dark text-white" : ""}
      >
        {selectedBlog && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="img-fluid mb-3"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: "1rem"
                }}
              />
              <div className="mb-2">
                <span className="badge bg-info text-dark me-2">{selectedBlog.category}</span>
                <span className="text-muted small">{new Date(selectedBlog.date).toLocaleDateString()}</span>
              </div>
              <p className="mt-3">{selectedBlog.summary}</p>
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

export default Blogs;