import React from "react";

const PremiumConsult = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6 animate-fadeIn">🌟 Premium Astrology Consultation</h1>
      <p className="text-lg max-w-3xl text-center mb-10 text-gray-300">
        Get personalized astrology guidance from top astrologers. Choose your session type and book now!
      </p>

      {/* Session Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Basic Reading", "Deep Analysis", "Life Path Consultation"].map((session, index) => (
          <div 
            key={index} 
            className="relative p-6 bg-white/10 backdrop-blur-xl border border-yellow-500 rounded-xl text-center 
            shadow-lg shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/50"
          >
            <h2 className="text-2xl font-bold">{session}</h2>
            <p className="mt-4 text-gray-400">30 min session</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full 
            hover:scale-105 transition-transform duration-300 hover:shadow-yellow-500/50 active:scale-95">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumConsult;
