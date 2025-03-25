import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500); // Adds a smooth delay effect
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-black min-h-screen px-6 pt-48 pb-32 overflow-hidden">
      
      {/* Animated Background (Nebula Effect) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-yellow-500 opacity-30 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full blur-[160px] animate-pulse"></div>
      </div>

      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-6xl md:text-7xl font-extrabold text-white tracking-wide leading-tight"
      >
        🔮 Unlock Your 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"> Destiny</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }} 
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        Experience the future with personalized astrology guidance. Your destiny awaits!
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.8, duration: 1 }} 
        className="mt-10 flex flex-wrap justify-center gap-6"
      >
        <button
          onClick={() => navigate("/signup")}
          className="px-10 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full shadow-lg 
          hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/50 active:scale-95"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate("/about")}
          className="px-10 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-full shadow-lg 
          hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all duration-300 active:scale-95"
        >
          Learn More
        </button>
        <button
          onClick={() => navigate("/chat-astrologer")}
          className="px-10 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-full shadow-lg 
          hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50 active:scale-95"
        >
          Start Chat
        </button>
      </motion.div>

      {/* Premium Astrology Consultation Section */}
      {showContent && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 1 }} 
          className="mt-48 w-full max-w-7xl px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-yellow-400">🌟 Premium Astrology Consultation</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-3">
            Unlock life-changing insights with our top astrologers. Choose your session and get started!
          </p>

          {/* Consultation Options */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {["Basic Reading", "Deep Analysis", "Life Path Consultation"].map((session, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="relative p-8 bg-white/10 backdrop-blur-xl border border-yellow-500 rounded-xl text-center 
                shadow-lg shadow-yellow-500/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white">{session}</h3>
                <p className="mt-3 text-gray-400">30 min session with a top astrologer</p>
                <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full 
                hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/50 active:scale-95">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
