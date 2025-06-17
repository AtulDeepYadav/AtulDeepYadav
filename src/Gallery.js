import React from "react";
import galleryImages from "./Gallery.json";

const Gallery = ({ darkMode }) => (
  <main
    className={`container py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
    style={{ minHeight: "90vh" }}
  >
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className={`card shadow border-0 ${darkMode ? "bg-secondary text-white" : ""}`} style={{ borderRadius: "1.5rem" }}>
          <div className="card-body p-5">
            <h2 className="fw-bold mb-4 text-center" style={{ letterSpacing: "-0.5px" }}>Gallery</h2>
            <div className="row g-4 justify-content-center">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center">
                  <div
                    style={{
                      width: 220,
                      height: 220,
                      borderRadius: "1rem",
                      overflow: "hidden",
                      background: "#eee",
                      boxShadow: "0 2px 8px #0a174e22",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery ${idx + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="text-center" style={{ fontSize: "1rem", color: darkMode ? "#ffd180" : "#0a174e" }}>
                    {img.desc}
                  </div>
                </div>
              ))}
            </div>
            {galleryImages.length === 0 && (
              <div className="text-center text-muted mt-4" style={{ fontSize: "0.95rem" }}>
                (Add your best photos and descriptions in <code>Gallery.json</code>)
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Gallery;