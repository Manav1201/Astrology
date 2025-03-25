import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Customers = () => {
  const testimonials = [
    { name: "John Doe", review: "Great astrology service! Highly recommended!" },
    { name: "Alice Smith", review: "I love the accurate horoscope readings!" },
    { name: "David Brown", review: "The best astrology consultation I have ever had!" },
    { name: "Sophia Johnson", review: "Superb customer support and expert advice!" },
    { name: "Michael Lee", review: "I enjoyed the tarot reading experience!" },
  ];

  return (
    <div className="py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">🌟 Our Customers 🌟</h2>

      {/* Scrollable Testimonials Container (With Hidden Scrollbar) */}
      <div className="flex space-x-6 overflow-x-auto px-6 scrollbar-hide">
        {testimonials.map((customer, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 
            transition-all hover:shadow-yellow-500/30"
          >
            <h3 className="text-xl font-semibold">{customer.name}</h3>
            <p className="text-gray-300 mt-2">{customer.review}</p>
          </div>
        ))}
      </div>

      {/* 📌 "Write a Review" Button */}
      <div className="mt-8 text-center">
        <Link to="/review">
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 
            text-black font-bold text-lg uppercase rounded-full 
            shadow-lg hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300">
            ✍️ Write a Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Customers;
