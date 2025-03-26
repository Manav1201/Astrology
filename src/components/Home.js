import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AstrologicalServices from "./AstrologicalServices";
import KundliSection from "./KundliSection";
import SpinWheel from "./SpinWheel"; // ✅ Import the Zodiac Spin Wheel Component
import Customers from "./Customers"; // ✅ Import Customers Section
// import Review from "./Review";
import EPooja from "./EPooja"; // ✅ Import E-Pooja Component
import Footer from "./Footer";
import { Link } from "react-router-dom"; // Import React Router

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

       

      {/* Kundli & Panchang Section */}
      <KundliSection />

      {/* Astrology Services */}
      <Services />

      {/* Zodiac Spin Wheel Section (NEW) */}
      <SpinWheel /> {/* ✅ Added Here */}
      
      <EPooja /> {/* ✅ Add this to render on Home Page */}
      <Link to="/festival-calendar" className="mt-5 inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold 
    rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50">
    CHECK NOW →
</Link>

      {/* Astrological Services Section */}
      <AstrologicalServices />

        {/* ✅ Add Customers Section Below Services */}
        <Customers /> 

        

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
