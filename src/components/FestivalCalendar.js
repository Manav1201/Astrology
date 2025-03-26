import React from "react";
import { motion } from "framer-motion";

const festivals = {
  January: [
    { name: "Makar Sankranti", date: "January 14, 2025", day: "Tuesday" },
    { name: "Pongal", date: "January 15, 2025", day: "Wednesday" },
    { name: "Vasant Panchami", date: "January 29, 2025", day: "Wednesday" },
  ],
  February: [
    { name: "Maha Shivratri", date: "February 26, 2025", day: "Wednesday" },
  ],
  March: [
    { name: "Holi", date: "March 14, 2025", day: "Friday" },
    { name: "Chaitra Navratri Begins", date: "March 30, 2025", day: "Sunday" },
  ],
  April: [
    { name: "Ram Navami", date: "April 6, 2025", day: "Sunday" },
    { name: "Hanuman Jayanti", date: "April 14, 2025", day: "Monday" },
  ],
  May: [
    { name: "Buddha Purnima", date: "May 12, 2025", day: "Monday" },
  ],
  June: [
    { name: "Ganga Dussehra", date: "June 6, 2025", day: "Friday" },
    { name: "Jagannath Rath Yatra", date: "June 26, 2025", day: "Thursday" },
  ],
  July: [
    { name: "Guru Purnima", date: "July 9, 2025", day: "Wednesday" },
  ],
  August: [
    { name: "Nag Panchami", date: "August 3, 2025", day: "Sunday" },
    { name: "Raksha Bandhan", date: "August 9, 2025", day: "Saturday" },
    { name: "Krishna Janmashtami", date: "August 16, 2025", day: "Saturday" },
  ],
  September: [
    { name: "Ganesh Chaturthi", date: "September 7, 2025", day: "Sunday" },
    { name: "Pitru Paksha Begins", date: "September 8, 2025", day: "Monday" },
  ],
  October: [
    { name: "Navratri Begins", date: "October 1, 2025", day: "Wednesday" },
    { name: "Dussehra", date: "October 9, 2025", day: "Thursday" },
    { name: "Karva Chauth", date: "October 30, 2025", day: "Thursday" },
  ],
  November: [
    { name: "Diwali", date: "November 20, 2025", day: "Thursday" },
    { name: "Bhai Dooj", date: "November 22, 2025", day: "Saturday" },
  ],
  December: [
    { name: "Gita Jayanti", date: "December 6, 2025", day: "Saturday" },
  ],
};

const FestivalCalendar = () => {
  return (
    <div className="bg-black text-white py-20 px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-yellow-400 mb-8 text-center"
      >
        🗓️ Hindu Festival Calendar 2025 🗓️
      </motion.h2>

      {/* Hindu Calendar Significance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-12"
      >
        <p className="mb-5">
          The Hindu calendar, also known as **Panchang**, is a lunisolar calendar used to determine important festivals, auspicious occasions, and religious events. It follows both **solar and lunar cycles**, making it unique compared to the Western Gregorian calendar.
        </p>
        <h3 className="text-xl text-yellow-400 mb-3">📜 Origin of the Hindu Calendar</h3>
        <p className="mb-5">
          The origins of the Hindu calendar date back to the **Vedic period**. Ancient astronomers like **Aryabhata and Varahamihira** refined it based on astronomical calculations. The calendar is deeply connected to planetary movements and is used in astrology and rituals.
        </p>
        <h3 className="text-xl text-yellow-400 mb-3">🔢 Structure of the Hindu Calendar</h3>
        <p className="mb-5">
          The Hindu calendar consists of **12 lunar months**, each beginning on the new moon day (**Amavasya**). The months are **Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwin, Kartika, Margashirsha, Pausha, Magha, and Phalguna**. A leap month (**Adhik Maas**) is added every 32.5 months to align with the solar year.
        </p>
        <h3 className="text-xl text-yellow-400 mb-3">☀️ Indian Solar Calendar</h3>
        <p className="mb-5">
          Some Indian states, like **Tamil Nadu, Kerala, and West Bengal**, follow a purely **solar calendar**. This system is based on the movement of the Sun through the **twelve zodiac signs**, leading to variations in festival dates.
        </p>
      </motion.div>

      {/* Festival List */}
      <div className="max-w-5xl mx-auto">
        {Object.keys(festivals).map((month, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="mb-10"
          >
            <h3 className="text-2xl text-yellow-400 font-semibold mb-4">{month}</h3>
            <ul className="list-disc pl-5 text-gray-300">
              {festivals[month].map((festival, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-semibold text-white">{festival.name}</span> - {festival.date} ({festival.day})
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FestivalCalendar;
