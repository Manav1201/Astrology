import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
