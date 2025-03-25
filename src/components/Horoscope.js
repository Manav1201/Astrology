import React, { useState } from "react";

const zodiacSigns = [
  { name: "Aries", symbol: "♈" },
  { name: "Taurus", symbol: "♉" },
  { name: "Gemini", symbol: "♊" },
  { name: "Cancer", symbol: "♋" },
  { name: "Leo", symbol: "♌" },
  { name: "Virgo", symbol: "♍" },
  { name: "Libra", symbol: "♎" },
  { name: "Scorpio", symbol: "♏" },
  { name: "Sagittarius", symbol: "♐" },
  { name: "Capricorn", symbol: "♑" },
  { name: "Aquarius", symbol: "♒" },
  { name: "Pisces", symbol: "♓" },
];

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [horoscope, setHoroscope] = useState(null);
  const [timeframe, setTimeframe] = useState("today"); // Toggle for Daily/Weekly

  // Fetch Horoscope Data
  const fetchHoroscope = async (sign) => {
    try {
      const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`, {
        method: "POST",
      });
      const data = await response.json();
      setHoroscope(data);
      setSelectedSign(sign);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center p-10 animate-fadeIn">
      <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">🔮 What's Your Sign?</h1>
      <p className="text-lg max-w-3xl text-center mb-10 animate-slideUp">
        Click on your zodiac sign to see what the stars have planned for you.
      </p>

      {/* Toggle for Daily/Weekly */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full transition ${timeframe === "today" ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"}`}
          onClick={() => setTimeframe("today")}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 rounded-full transition ${timeframe === "weekly" ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"}`}
          onClick={() => setTimeframe("weekly")}
        >
          Weekly
        </button>
      </div>

      {/* Zodiac Sign Cards */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className="relative bg-black bg-opacity-20 border border-yellow-400 rounded-lg p-6 text-center transition transform hover:scale-105 hover:bg-yellow-400 hover:text-black cursor-pointer"
            onClick={() => fetchHoroscope(sign.name.toLowerCase())}
          >
            <span className="text-6xl block">{sign.symbol}</span>
            <h2 className="text-2xl font-bold mt-2">{sign.name}</h2>
          </div>
        ))}
      </div>

      {/* Display Horoscope Result */}
      {selectedSign && horoscope && (
        <div className="mt-10 p-6 bg-gray-800 border border-yellow-400 rounded-lg max-w-lg text-center shadow-lg animate-fadeIn">
          <h2 className="text-3xl font-bold text-yellow-400">{selectedSign} {timeframe} Horoscope</h2>
          <p className="mt-4 text-lg">{horoscope.description}</p>
          <p className="mt-2 text-sm text-gray-400">✨ Lucky Color: {horoscope.color}</p>
          <p className="text-sm text-gray-400">🌟 Lucky Number: {horoscope.lucky_number}</p>
        </div>
      )}
    </div>
  );
};

export default Horoscope;
