import React, { useState } from "react";

const astrologersData = [
  { id: 1, name: "Rachna", expertise: "Numerology", experience: 10, image: "/images/rachna.jpg" },
  { id: 2, name: "Pramod", expertise: "Numerology", experience: 8, image: "/images/pramod.jpg" },
  { id: 3, name: "Sangeetha", expertise: "Vedic", experience: 15, image: "/images/sangeetha.jpg" },
  { id: 4, name: "Amit", expertise: "Vedic Astrology", experience: 12, image: "/images/amit.jpg" },
];

const Astrologers = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  const filteredAstrologers = astrologersData.filter(
    (astrologer) =>
      astrologer.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || astrologer.expertise === filter)
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">Our Astrologers</h2>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search astrologers..."
          className="p-2 border rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="p-2 border rounded-lg" onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Numerology">Numerology</option>
          <option value="Vedic">Vedic</option>
          <option value="Vedic Astrology">Vedic Astrology</option>
        </select>
      </div>

      {/* Astrologer List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAstrologers.map((astro) => (
          <div key={astro.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={astro.image} alt={astro.name} className="rounded-full mx-auto w-24 h-24 mb-2" />
            <h3 className="text-xl font-bold">{astro.name}</h3>
            <p className="text-gray-600">{astro.expertise}</p>
            <p className="text-gray-500">Experience: {astro.experience} years</p>
            <button
              onClick={() => setSelectedAstrologer(astro)}
              className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {selectedAstrologer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold">{selectedAstrologer.name}</h2>
            <p className="text-gray-600">{selectedAstrologer.expertise}</p>
            <p className="text-gray-500">Experience: {selectedAstrologer.experience} years</p>
            <p className="mt-2 text-gray-700">More details about {selectedAstrologer.name}...</p>
            <button
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg"
              onClick={() => alert("Booking Consultation...")}
            >
              Book Consultation
            </button>
            <button
              className="mt-2 bg-gray-300 text-black px-4 py-2 rounded-lg"
              onClick={() => setSelectedAstrologer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Astrologers;
