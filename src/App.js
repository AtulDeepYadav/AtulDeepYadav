import React, { useState } from "react";
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{ minHeight: "100vh" }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body darkMode={darkMode} />
    </div>
  );
}

export default App;
