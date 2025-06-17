import React, { useState } from "react";
import './App.css';
import Header from './Header';
import Body from './Body';
import About from './About';
import Gallery from './Gallery';
import Projects from './Projects';
import ContactMe from './ContactMe'; // <-- Import ContactMe
import Footer from "./Footer";
import Blogs from './Blogs'; // Import Blogs

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("home");

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{ minHeight: "100vh" }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setPage={setPage} />
      {page === "about" ? (
        <About darkMode={darkMode} />
      ) : page === "gallery" ? (
        <Gallery darkMode={darkMode} />
      ) : page === "projects" ? (
        <Projects darkMode={darkMode} />
      ) : page === "blogs" ? (
        <Blogs darkMode={darkMode} />
      ) : page === "contact" ? (
        <ContactMe darkMode={darkMode} />
      ) : (
        <Body darkMode={darkMode} setPage={setPage} />
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
