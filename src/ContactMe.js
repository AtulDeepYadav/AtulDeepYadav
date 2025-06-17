import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_pgqtuwm";
const TEMPLATE_ID = "template_bx3n1kh";
const USER_ID = "kiW7kLCTBz2vStvSD"; // EmailJS public key

const ContactMe = ({ darkMode }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: "atuldeepyadav.ady@gmail.com"
      },
      USER_ID
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch(() => {
      setError("Something went wrong. Please try again later.");
    });
  };

  return (
    <div className={`container py-4 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h2 className="fw-bold mb-4 text-center">Contact Me</h2>
      {submitted ? (
        <div className="alert alert-success text-center" role="alert">
          Thank you for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form className="mx-auto" style={{ maxWidth: 500 }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name <span role="img" aria-label="person">👤</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email <span role="img" aria-label="email">📧</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message <span role="img" aria-label="speech balloon">💬</span>
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}
          <div className="d-grid">
            <button type="submit" className={`btn btn-${darkMode ? "info" : "primary"} fw-semibold`}>
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactMe;