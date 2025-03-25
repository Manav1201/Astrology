import React, { useState } from "react";

const Compatibility = () => {
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [result, setResult] = useState(null);

  const checkCompatibility = () => {
    if (!sign1 || !sign2) {
      alert("Please select both zodiac signs.");
      return;
    }

    // Example compatibility logic (Replace with API if available)
    const compatibilityScore = Math.floor(Math.random() * 101); // Random % match
    const message =
      compatibilityScore > 70
        ? "🔥 A great match! Your energies align well."
        : compatibilityScore > 40
        ? "⚖ A decent connection. Some effort needed."
        : "❌ Not the best match, but opposites attract!";

    setResult({ compatibilityScore, message });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-indigo-900 text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">❤️ Zodiac Compatibility</h1>

      {/* Selection Boxes */}
      <div className="flex space-x-4">
        <select
          className="p-3 rounded-lg text-black"
          onChange={(e) => setSign1(e.target.value)}
        >
          <option value="">Select Sign</option>
          {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>

        <select
          className="p-3 rounded-lg text-black"
          onChange={(e) => setSign2(e.target.value)}
        >
          <option value="">Select Sign</option>
          {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>

      {/* Compatibility Button */}
      <button
        className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition"
        onClick={checkCompatibility}
      >
        Check Compatibility
      </button>

      {/* Show Result */}
      {result && (
        <div className="mt-6 p-6 bg-gray-800 border border-yellow-400 rounded-lg text-center">
          <h2 className="text-3xl font-bold">{sign1} & {sign2}</h2>
          <p className="mt-4 text-lg">Compatibility: {result.compatibilityScore}%</p>
          <p className="mt-2 text-lg">{result.message}</p>
        </div>
      )}
    </div>
  );
};

export default Compatibility;
