import React from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AstrologicalServices from "./AstrologicalServices";
import KundliSection from "./KundliSection";
import SpinWheel from "./SpinWheel";
import Customers from "./Customers";
import EPooja from "./EPooja";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleNavigate = () => {
    navigate("/festival-calendar"); // ✅ Navigates to Festival Calendar
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <KundliSection />
      <Services />
      <SpinWheel />
      <EPooja />

      {/* ✅ Fixed Navigation Button */}
      <div className="text-center mt-5">
        <button
          onClick={handleNavigate}
          className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold 
          rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50"
        >
          CHECK NOW →
        </button>
      </div>

      <AstrologicalServices />
      <Customers />
      <Footer />
    </div>
  );
};

export default Home;
