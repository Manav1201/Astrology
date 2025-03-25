import React, { useState } from "react";

const KundliMatch = () => {
  const [userData, setUserData] = useState({
    name: "",
    gender: "Male",
    day: "1",
    month: "Jan",
    year: "1990",
    hour: "1",
    minute: "0",
    second: "0",
    place: "",
  });

  const [partnerData, setPartnerData] = useState({
    name: "",
    gender: "Female",
    day: "1",
    month: "Jan",
    year: "1992",
    hour: "1",
    minute: "0",
    second: "0",
    place: "",
  });

  const handleChange = (e, isPartner = false) => {
    if (isPartner) {
      setPartnerData({ ...partnerData, [e.target.name]: e.target.value });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔮 Kundli Matched Successfully!");
  };

  return (
    <div className="bg-gray-900 text-white py-12 px-6 rounded-xl shadow-2xl max-w-6xl mx-auto my-10 border border-gray-700">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-8">
        🔮 Match Your Kundli
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🔹 User Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">💙 Your Details</h3>

          {/* Name & Gender */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={userData.name}
              onChange={handleChange}
              className="p-4 text-lg rounded-lg bg-gray-700 border border-gray-500 w-full"
              required
            />

            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="p-4 text-lg rounded-lg bg-gray-700 border border-gray-500 w-full"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Birth Details */}
          <h3 className="text-lg text-yellow-300 mt-6">📅 Birth Details</h3>
          <div className="grid grid-cols-3 gap-4">
            <select name="day" value={userData.day} onChange={handleChange} className="p-4 rounded-lg bg-gray-700 border border-gray-500">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select name="month" value={userData.month} onChange={handleChange} className="p-4 rounded-lg bg-gray-700 border border-gray-500">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>

            <select name="year" value={userData.year} onChange={handleChange} className="p-4 rounded-lg bg-gray-700 border border-gray-500">
              {Array.from({ length: 100 }, (_, i) => 2024 - i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          {/* Birth Time */}
          <h3 className="text-lg text-yellow-300 mt-6">⏳ Time of Birth</h3>
          <div className="grid grid-cols-3 gap-4">
            <select name="hour" value={userData.hour} onChange={handleChange} className="p-4 rounded-lg bg-gray-700 border border-gray-500">
              {Array.from({ length: 24 }, (_, i) => i).map((h) => (
                <option key={h} value={h}>{h} Hrs</option>
              ))}
            </select>

            <select name="minute" value={userData.minute} onChange={handleChange} className="p-4 rounded-lg bg-gray-700 border border-gray-500">
              {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                <option key={m} value={m}>{m} Min</option>
              ))}
            </select>

            <select name="second" value={userData.second} onChange={handleChange} className="p-4 rounded-lg bg-gray-700 border border-gray-500">
              {Array.from({ length: 60 }, (_, i) => i).map((s) => (
                <option key={s} value={s}>{s} Sec</option>
              ))}
            </select>
          </div>

          <input
            type="text"
            name="place"
            placeholder="Birth Place"
            value={userData.place}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-500 mt-4"
            required
          />
        </div>

        {/* 🔹 Partner Details (Same Structure) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">❤️ Partner's Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Partner's Name"
              value={partnerData.name}
              onChange={(e) => handleChange(e, true)}
              className="p-4 rounded-lg bg-gray-700 border border-gray-500 w-full"
              required
            />

            <select
              name="gender"
              value={partnerData.gender}
              onChange={(e) => handleChange(e, true)}
              className="p-4 rounded-lg bg-gray-700 border border-gray-500 w-full"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Same Birth Details, Time, and Place Fields as User */}
        </div>

        {/* 🔥 Match Kundli Button */}
        <button
          type="submit"
          className="col-span-2 w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50 text-lg"
        >
          🔮 Match Kundli
        </button>
      </form>
    </div>
  );
};

export default KundliMatch;
