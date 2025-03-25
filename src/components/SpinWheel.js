import React, { useState } from "react";
import { motion } from "framer-motion";

const SpinWheel = () => {
  const zodiacWheel = "/zodiac-wheel.png"; // Your wheel image in public folder
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  // Function to Spin Wheel
  const spinWheel = () => {
    if (spinning) return; // Prevent multiple spins

    setSpinning(true);

    // Generate a random degree (between 1800° to 3600° for multiple full spins)
    const randomDegree = 1800 + Math.floor(Math.random() * 1800);
    setRotation((prev) => prev + randomDegree);

    // Stop spinning after animation
    setTimeout(() => {
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">🔮 Spin the Wheel of Fortune</h2>
      <p className="text-gray-400 text-lg text-center max-w-3xl mb-8">
        Spin the wheel and see what zodiac sign the universe selects for you!
      </p>

      <div className="relative flex items-center justify-center">
        {/* Fixed Arrow Indicator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-5 w-6 h-10 bg-red-500 clip-triangle"></div>

        {/* Spinning Wheel */}
        <motion.img
          src={zodiacWheel}
          alt="Zodiac Wheel"
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-yellow-500/50"
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "🎡 Spin the Wheel"}
      </button>
    </div>
  );
};

export default SpinWheel;
