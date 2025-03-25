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
