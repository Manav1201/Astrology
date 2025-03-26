import React from "react";
import { FaStar, FaHandSparkles, FaUserAstronaut, FaPhone, FaChartLine, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { title: "Today's Horoscope", icon: <FaStar />, image: "https://source.unsplash.com/300x200/?horoscope,astrology", description: "Get daily predictions and insights about your zodiac sign.", link: "#" },
  { title: "Free Kundli", icon: <FaBook />, image: "https://source.unsplash.com/300x200/?book,astrology", description: "Generate a free online Kundli report to predict your future.", link: "#" },
  { title: "Compatibility", icon: <FaHandSparkles />, image: "https://source.unsplash.com/300x200/?love,relationship", description: "Check compatibility with your partner for a lasting relationship.", link: "#" },
  { title: "Festival 2025", icon: <FaUserAstronaut />, image: "https://source.unsplash.com/300x200/?festival,celebration", description: "Discover the spiritual significance of upcoming festivals.", link: "#" },
  { title: "Kundli Matching", icon: <FaChartLine />, image: "https://source.unsplash.com/300x200/?wedding,match", description: "Find the perfect life partner through accurate Kundli matching.", link: "#" },
  { title: "Astrological Guidance", icon: <FaPhone />, image: "https://source.unsplash.com/300x200/?consultation,help", description: "Get personalized astrology guidance from expert astrologers.", link: "#" },
];

const AstrologyServices = () => {
  return (
    <div className="bg-black text-white py-20 px-8 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-yellow-400 mb-10 tracking-wide"
      >
        ✨ Complimentary Astrology Services ✨
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-12"
      >
        Unlock the power of astrology with free services like daily horoscopes, Kundli generation, compatibility checks, and expert guidance.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-[290px] p-7 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 
              transition-all duration-300 hover:shadow-yellow-500/50 text-center"
          >
            <div className="text-4xl text-yellow-400 mb-3">{service.icon}</div>
            <img src={service.image} alt={service.title} className="rounded-xl mb-4 w-full h-36 object-cover" />
            <h3 className="text-xl font-semibold text-yellow-400">{service.title}</h3>
            <p className="text-gray-300 mt-3 text-base leading-relaxed">{service.description}</p>
            <a
              href={service.link}
              className="mt-5 inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold 
              rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50"
            >
              CHECK NOW →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AstrologyServices;
