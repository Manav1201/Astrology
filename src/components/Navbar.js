import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  // 🌙 Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">

        {/* 🔮 Logo */}
        <Link to="/" className="text-3xl font-bold text-gray-900 dark:text-yellow-400">
          🔮 AstroSphere
        </Link>

        {/* 🌟 Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 dark:text-white font-medium text-lg items-center">
          <li><Link to="/" className="hover:text-yellow-500">🏠 Home</Link></li>
          <li><Link to="/services" className="hover:text-yellow-500">✨ Services</Link></li>
          <li><Link to="/horoscope" className="hover:text-yellow-500">🌙 Horoscope</Link></li>
          <li><Link to="/calendar" className="hover:text-yellow-500">📅 Calendar</Link></li>
          <li><Link to="/blog" className="hover:text-yellow-500">📰 Blog</Link></li>
        </ul>

        {/* 🔮 Match Kundli Button & Dark Mode Toggle */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Match Kundli */}
          <Link to="/kundli-match">
            <button className="px-5 py-2 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-md hover:scale-105 transition">
              🔮 Match Kundli
            </button>
          </Link>

          {/* 👤 Login */}
          <Link to="/login">
            <button className="px-5 py-2 bg-blue-500 text-white font-bold text-lg rounded-full shadow-md flex items-center hover:scale-105 transition">
              <FaUser className="mr-2" /> Login
            </button>
          </Link>

          {/* 🌙 Dark Mode Toggle */}
          <button
            className="text-2xl text-gray-800 dark:text-white transition"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* 📱 Mobile Menu Button */}
          <button className="lg:hidden text-gray-800 dark:text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-900 shadow-lg z-50">
          <button className="absolute top-4 right-4 text-gray-700 dark:text-white text-3xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul className="text-center mt-20 space-y-6 text-gray-700 dark:text-white text-lg">
            <li><Link to="/" className="block py-2 hover:text-yellow-500">🏠 Home</Link></li>
            <li><Link to="/services" className="block py-2 hover:text-yellow-500">✨ Services</Link></li>
            <li><Link to="/horoscope" className="block py-2 hover:text-yellow-500">🌙 Horoscope</Link></li>
            <li><Link to="/calendar" className="block py-2 hover:text-yellow-500">📅 Calendar</Link></li>
            <li><Link to="/blog" className="block py-2 hover:text-yellow-500">📰 Blog</Link></li>
            <li><Link to="/kundli-match" className="block py-2 bg-yellow-500 text-black font-bold rounded-lg">🔮 Match Kundli</Link></li>
            <li><Link to="/login" className="block py-2 bg-blue-500 text-white font-bold rounded-lg">👤 Login</Link></li>

            {/* 🌙 Dark Mode Toggle */}
            <li>
              <button className="text-2xl dark:text-yellow-400 mx-auto block" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
