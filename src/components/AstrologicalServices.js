import React from "react";
import { FaStar, FaHandSparkles, FaUserAstronaut, FaPhone, FaChartLine, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { title: "Brihat Horoscope", category: "Horoscope", icon: <FaStar />, image: "https://source.unsplash.com/300x200/?horoscope,astrology", description: "What will you get in 250+ pages?", link: "#" },
  { title: "Finance", category: "Finance", icon: <FaChartLine />, image: "https://source.unsplash.com/300x200/?money,finance", description: "Are money matters a reason for worry?", link: "#" },
  { title: "Ask A Question", category: "Consultation", icon: <FaHandSparkles />, image: "https://source.unsplash.com/300x200/?question,help", description: "Is there any question or problem?", link: "#" },
  { title: "Career / Job", category: "Career", icon: <FaUserAstronaut />, image: "https://source.unsplash.com/300x200/?career,job", description: "Worried about your career?", link: "#" },
  { title: "AstroSage Year Book", category: "Readings", icon: <FaBook />, image: "https://source.unsplash.com/300x200/?book,astrology", description: "A must-have astrology guide!", link: "#" },
  { title: "Career Counselling", category: "Guidance", icon: <FaPhone />, image: "https://source.unsplash.com/300x200/?education,study", description: "Get the right guidance for your career!", link: "#" },
];

const AstrologicalServices = () => {
  return (
    <div className="bg-black text-white">
      {/* Astrological Services Section */}
      <div className="py-20 px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl font-extrabold text-yellow-400 mb-10 tracking-wide"
        >
          ✨ Accurate Astrological Services ✨
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-12"
        >
          Explore expert astrology services, including horoscopes, career guidance, financial advice, and more!
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
              <a href={service.link} className="mt-5 inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold 
              rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50">
                CHECK NOW →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AstrologicalServices;
