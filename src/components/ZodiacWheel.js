import React, { useState } from "react";

const ZodiacWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    const newRotation = rotation + Math.floor(Math.random() * 360) + 1800; // Random spin
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
    }, 3000); // Stops after 3 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
        🔮 Spin the Zodiac Wheel
      </h2>

      {/* 🛠️ Wheel Container */}
      <div className="relative w-[450px] h-[450px] flex items-center justify-center">
        
        {/* 🔥 FIXED: Proper Triangle Arrow (No Rectangle) */}
      

        {/* Spinning Wheel */}
        <img
          src="/zodiac-wheel.png"
          alt="Zodiac Wheel"
          className="w-full h-full transition-transform duration-[3s] ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg uppercase rounded-full 
        shadow-lg hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300 disabled:opacity-50"
        disabled={spinning}
      >
        🌟 Spin the Wheel
      </button>
    </div>
  );
};

export default ZodiacWheel;