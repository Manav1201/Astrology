import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">📅 Astrology Calendar</h1>
      <p className="text-lg max-w-3xl text-center mb-10 text-gray-300">
        Check important astrology events, moon phases, and book astrology consultations!
      </p>

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg shadow-yellow-500/30">
        <Calendar 
          onChange={setDate} 
          value={date} 
          className="border-none text-black rounded-lg"
        />
        <p className="mt-4 text-lg text-gray-300">Selected Date: <span className="text-yellow-400">{date.toDateString()}</span></p>
      </div>
    </div>
  );
};

export default CalendarPage;
