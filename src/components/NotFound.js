import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white animate-fadeIn">
      <h1 className="text-8xl font-bold text-yellow-500 animate-pulse">404</h1>
      <p className="text-xl mt-4 animate-slideUp">Oops! This page does not exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
