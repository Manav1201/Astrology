import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import KundliMatch from "./components/KundliMatch"; // ✅ Import the Kundli Match Component

import Footer from "./components/Footer";
import FestivalCalendar from "./components/FestivalCalendar";
import Review from "./components/Review"; // ✅ Import the Review Page

const Home = lazy(() => import("./components/Home"));
const Horoscope = lazy(() => import("./components/Horoscope"));
const Services = lazy(() => import("./components/Services"));
const KundliSection = lazy(() => import("./components/KundliSection")); // ✅ Import Here
const Consult = lazy(() => import("./components/Consult"));
const AIChat = lazy(() => import("./components/AIChat"));
const Calendar = lazy(() => import("./components/Calendar"));
const Blog = lazy(() => import("./components/Blog"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/services" element={<Services />} />
          <Route path="/kundli" element={<KundliSection />} /> {/* ✅ Added Here */}
          <Route path="/consult" element={<Consult />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/festival-calendar" element={<FestivalCalendar />} />
          <Route path="/kundli-match" element={<KundliMatch />} />

          <Route path="*" element={<NotFound />} />

<Route path="/review" element={<Review />} />  // ✅ Add the route
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
