import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe, FaCalendarAlt, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [horoscopeDropdown, setHoroscopeDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // ✅ Apply Dark Mode on Load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        
        {/* 🔮 Logo */}
        <Link to="/" className="text-3xl font-bold text-gray-900 dark:text-yellow-400 hover:scale-105 transition">
        🔮 AstroSphere
        </Link>

        {/* 🌟 Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 dark:text-white font-medium text-lg">
          <li><Link to="/" className="hover:text-yellow-500 transition-all duration-200">🏠 Home</Link></li>
          <li><Link to="/services" className="hover:text-yellow-500 transition-all duration-200">✨ Services</Link></li>
          
          {/* Horoscope Dropdown */}
          <li className="relative">
            <button 
              onClick={() => setHoroscopeDropdown(!horoscopeDropdown)} 
              className="hover:text-yellow-500 transition-all duration-200 flex items-center"
            >
              <FaGlobe className="mr-2" /> Horoscopes ▼
            </button>
            {horoscopeDropdown && (
              <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-48 border border-gray-300 dark:border-gray-700 transition-all">
                <li><Link to="/horoscope" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">Daily Horoscope</Link></li>
                <li><Link to="/horoscope?weekly" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">Weekly Horoscope</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/calendar" className="hover:text-yellow-500 transition-all duration-200">📅 Calendar</Link></li>
          <li><Link to="/blog" className="hover:text-yellow-500 transition-all duration-200">📰 Blog</Link></li>

          {/* 🔮 Match Kundli Button */}
          <li>
            <Link to="/kundli-match">
              <button className="px-6 py-2 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-md hover:scale-105 transition-all duration-300">
                🔮 Match Kundli
              </button>
            </Link>
          </li>
        </ul>

        {/* 🌗 Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden lg:flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full shadow-md hover:scale-105 transition-all"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        {/* 📱 Mobile Menu Button */}
        <button className="lg:hidden text-gray-800 dark:text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-all">
          <button className="absolute top-4 right-4 text-gray-700 dark:text-white text-3xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul className="text-center mt-20 space-y-6 text-gray-700 dark:text-white text-lg">
            <li><Link to="/" className="block py-2 hover:text-yellow-500">🏠 Home</Link></li>
            <li><Link to="/services" className="block py-2 hover:text-yellow-500">✨ Services</Link></li>
            <li><Link to="/horoscope" className="block py-2 hover:text-yellow-500">🌙 Horoscope</Link></li>
            <li><Link to="/calendar" className="block py-2 hover:text-yellow-500">📅 Calendar</Link></li>
            <li><Link to="/blog" className="block py-2 hover:text-yellow-500">📰 Blog</Link></li>
            

            {/* 🔮 Mobile Match Kundli Button */}
            <li>
              <Link to="/kundli-match">
                <button className="px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                  🔮 Match Kundli
                </button>
              </Link>
            </li>

            {/* 🌗 Mobile Dark Mode Toggle */}
            <li className="flex justify-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full shadow-md hover:scale-105 transition-all"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
