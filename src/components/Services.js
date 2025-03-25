import React, { useState } from "react";
import { FaStar, FaHandSparkles, FaUserAstronaut, FaPhone, FaChartLine, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const servicesData = [
  { id: 1, name: "Daily Horoscope", category: "Horoscope", icon: <FaStar /> },
  { id: 2, name: "Weekly Horoscope", category: "Horoscope", icon: <FaCalendarAlt /> },
  { id: 3, name: "Palmistry", category: "Readings", icon: <FaHandSparkles /> },
  { id: 4, name: "Tarot Reading", category: "Readings", icon: <FaChartLine /> },
  { id: 5, name: "Numerology", category: "Readings", icon: <FaUserAstronaut /> },
  { id: 6, name: "Chat with Astrologer", category: "Consultation", icon: <FaUserAstronaut /> },
  { id: 7, name: "Talk to Astrologer", category: "Consultation", icon: <FaPhone /> },
  { id: 8, name: "Kundli Matching", category: "Consultation", icon: <FaChartLine /> },
];

const categories = ["All", "Horoscope", "Readings", "Consultation"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ensure category selection updates correctly
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category); // Debugging - check selected category
  };

  const filteredServices = selectedCategory === "All" 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  return (
    <div className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white text-center relative overflow-hidden">
      
      {/* Glowing Background Effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-yellow-500 opacity-20 rounded-full blur-[200px]"></div>

      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-5xl font-extrabold text-yellow-400 mb-12 tracking-wide"
      >
        🔮 Explore Our Astrology Services
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }} 
        className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed mb-16"
      >
        Discover expert astrology services tailored to your needs. Choose a category and explore!
      </motion.p>

      {/* Category Filter (Fix Applied) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8, duration: 1 }} 
        className="flex flex-wrap justify-center gap-6 mb-16"
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-yellow-500 text-black shadow-md shadow-yellow-500/50 scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-yellow-500 hover:text-black hover:scale-105"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1, duration: 1 }} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-8"
      >
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="relative w-[300px] p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 
              transition-all duration-300"
            >
              <div className="text-5xl text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-400">{service.name}</h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">{service.category}</p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black 
              font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50">
                Explore →
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-lg">No services available in this category.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Services;
