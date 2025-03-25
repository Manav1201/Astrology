import React from "react";

const Blog = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white text-center relative overflow-hidden">
      
      {/* Glowing Background Effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-yellow-500 opacity-20 rounded-full blur-[200px]"></div>

      {/* Blog Title */}
      <h2 className="text-5xl font-extrabold text-yellow-400 mb-12 tracking-wide">
        📖 Explore the Universe of Astrology
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed mb-16">
        Stay updated with the latest astrological insights, cosmic events, and expert predictions 
        designed to help you navigate life's journey.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center px-8">
        {[1, 2, 3].map((_, index) => (
          <div 
            key={index} 
            className="relative w-[340px] p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 
            transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/50"
          >
            <div className="overflow-hidden rounded-lg">
              <img 
                src={`https://source.unsplash.com/400x250/?astrology,stars,cosmos&random=${index}`} 
                alt="Blog Post" 
                className="rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold text-yellow-400">Astrology Insights #{index + 1}</h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                Explore the secrets of the universe and understand your cosmic destiny.
              </p>
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black 
              font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="mt-20">
        <button className="px-10 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white 
        font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50">
          View All Blogs →
        </button>
      </div>
    </div>
  );
};

export default Blog;
