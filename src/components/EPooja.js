import React from "react";

const EPooja = () => {
  const poojaList = [
    { title: "Maha Rudrabhishek", date: "10 Mar 2025", desc: "Powerful Shiva Pooja for overall prosperity.", btn: "Book Now" },
    { title: "Vishnu Sahasranama", date: "15 Mar 2025", desc: "Chanting of 1000 Names of Lord Vishnu for success.", btn: "Book Now" },
    { title: "Navgraha Shanti Pooja", date: "20 Mar 2025", desc: "Balance planetary doshas for a smoother life.", btn: "Book Now" },
    { title: "Laxmi Kubera Pooja", date: "25 Mar 2025", desc: "Attract wealth and abundance into your life.", btn: "Book Now" },
    { title: "Hanuman Chalisa Paath", date: "30 Mar 2025", desc: "Get strength and protection from evil forces.", btn: "Book Now" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">
        🔱 Book Your E-Pooja Online 🔱
      </h2>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {poojaList.map((pooja, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:scale-105 hover:shadow-yellow-400/50">
            <h3 className="text-2xl font-semibold text-yellow-400">{pooja.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{pooja.date}</p>
            <p className="text-gray-400 mt-3">{pooja.desc}</p>
            <button className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded-full shadow-md hover:bg-yellow-600 transition-all">
              {pooja.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EPooja;
