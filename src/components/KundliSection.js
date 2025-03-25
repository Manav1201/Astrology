import React from "react";

const KundliSection = () => {
  return (
    <div className="py-20 bg-gray-900 text-white px-8">
      <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-14 tracking-wide">
        ✨ Kundli & Panchang Services ✨
      </h2>

      {/* Kundli & Panchang Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        
        {/* Kundli Chart */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 text-center">📜 Kundli / Birth Chart</h3>
            <p className="text-gray-400 text-center mt-3">Enter Birth Details</p>
            <input type="text" placeholder="Name" className="w-full p-3 mt-5 bg-gray-800 text-white rounded-lg" />
            <select className="w-full p-3 mt-5 bg-gray-800 text-white rounded-lg">
              <option>Male</option>
              <option>Female</option>
            </select>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <input type="text" placeholder="DD" className="p-3 bg-gray-800 text-white rounded-lg" />
              <input type="text" placeholder="MM" className="p-3 bg-gray-800 text-white rounded-lg" />
              <input type="text" placeholder="YYYY" className="p-3 bg-gray-800 text-white rounded-lg" />
            </div>
            <input type="text" placeholder="Birth Place" className="w-full p-3 mt-5 bg-gray-800 text-white rounded-lg" />
          </div>
          <button className="w-full mt-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
            GET KUNDLI
          </button>
        </div>

        {/* Kundli Matching */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 text-center">❤️ Kundli Matching</h3>
            <p className="text-gray-400 text-center mt-3">Enter Boy's Details</p>
            <input type="text" placeholder="Name" className="w-full p-3 mt-5 bg-gray-800 text-white rounded-lg" />
            <div className="grid grid-cols-3 gap-3 mt-5">
              <input type="text" placeholder="DD" className="p-3 bg-gray-800 text-white rounded-lg" />
              <input type="text" placeholder="MM" className="p-3 bg-gray-800 text-white rounded-lg" />
              <input type="text" placeholder="YYYY" className="p-3 bg-gray-800 text-white rounded-lg" />
            </div>
            <input type="text" placeholder="Birth Place" className="w-full p-3 mt-5 bg-gray-800 text-white rounded-lg" />
            <p className="text-gray-400 text-center mt-3">Enter girl's details on the next page</p>
          </div>
          <button className="w-full mt-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
            CONTINUE
          </button>
        </div>

        {/* Panchang */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 text-center">📅 Panchang</h3>
            <p className="text-gray-400 text-center mt-3">New Delhi, India (13 February, 2025)</p>
            <div className="mt-6 text-gray-300 text-lg space-y-3">
              <p><b>Tithi:</b> Krishna Pratipada upto 20:25:06</p>
              <p><b>Month Amanta:</b> Magha</p>
              <p><b>Month Purnimanta:</b> Phalguna</p>
              <p><b>Day:</b> Guruvara | <b>Samvat:</b> 2081</p>
              <p><b>Nakshatra:</b> Magha upto 21:08:33</p>
              <p><b>Yoga:</b> Sobhna upto 07:31:09</p>
              <p><b>Karan:</b> Baalav upto 07:51:39, Kolav upto 20:25:06</p>
            </div>
          </div>
          <button className="w-full mt-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300">
            TODAY PANCHANG
          </button>
        </div>

      </div>
    </div>
  );
};

export default KundliSection;
