import React, { useState } from "react";

const Review = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Added email state
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && review) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setName("");
      setEmail("");
      setReview("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
        💬 Write a Review
      </h2>

      {/* Review Form Card */}
      <div
        className="w-full max-w-lg bg-gray-900/50 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-gray-700 
        transition-all duration-300 hover:shadow-yellow-500/30"
      >
        {submitted ? (
          <p className="text-green-400 text-center font-bold">
            ✅ Thank you for your review!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-yellow-400 transition"
              required
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-yellow-400 transition"
              required
            />

            {/* Review Input */}
            <textarea
              placeholder="Your Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full h-28 px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-yellow-400 transition"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black 
              font-bold text-lg uppercase rounded-full shadow-lg hover:shadow-yellow-500/50 hover:scale-105 
              transition-all duration-300"
            >
              ✨ Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Review;
