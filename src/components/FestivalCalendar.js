import React from "react";
import { motion } from "framer-motion";

// 📅 Different Religious Calendars in India
const calendars = [
  { name: "🕉️ Hindu Calendar 2025", description: "The Hindu calendar (Panchang) follows both lunar and solar cycles to determine religious festivals, auspicious days, and rituals.", link: "/hindu-calendar-2025" },
  { name: "☪️ Islamic Calendar 2025", description: "The Islamic (Hijri) calendar is a lunar calendar used by Muslims worldwide to determine religious observances like Ramadan, Eid al-Fitr, and Eid al-Adha.", link: "/islamic-calendar-2025" },
  { name: "🦁 Sikh Holidays 2025", description: "The Sikh calendar (Nanakshahi) marks important Sikh festivals such as Vaisakhi, Guru Nanak Jayanti, and Gurpurabs.", link: "/sikh-calendar-2025" },
  { name: "✝️ Christian Calendar 2025", description: "The Christian (Gregorian) calendar determines Christian holidays such as Christmas, Easter, and Good Friday.", link: "/christian-calendar-2025" },
  { name: "☸️ Buddhist Calendar 2025", description: "The Buddhist calendar marks key events like Vesak (Buddha’s birth, enlightenment, and passing) and Magha Puja.", link: "/buddhist-calendar-2025" },
  { name: "🕍 Jain Calendar 2025", description: "The Jain calendar follows a lunar system, highlighting festivals like Paryushana and Mahavir Jayanti.", link: "/jain-calendar-2025" },
];

// 📆 Festival Dates for 2025
const festivals = {
  January: [{ name: "Makar Sankranti", date: "January 14, 2025", day: "Tuesday" }, { name: "Pongal", date: "January 15, 2025", day: "Wednesday" }],
  February: [{ name: "Maha Shivratri", date: "February 26, 2025", day: "Wednesday" }],
  March: [{ name: "Holi", date: "March 14, 2025", day: "Friday" }],
  April: [{ name: "Ram Navami", date: "April 6, 2025", day: "Sunday" }],
  May: [{ name: "Buddha Purnima", date: "May 12, 2025", day: "Monday" }],
  October: [{ name: "Diwali", date: "October 20, 2025", day: "Thursday" }],
};

// 🎭 Caste-Based Celebrations
const casteFestivals = {
  Brahmin: ["Upakarma", "Gayatri Japam", "Vedic Rituals"],
  Kshatriya: ["Vijayadashami", "Rath Yatra", "Warrior Festivals"],
  Vaishya: ["Akshaya Tritiya", "Guru Purnima", "Business Festivities"],
  Shudra: ["Makar Sankranti", "Pongal", "Harvest Festivals"],
  Dalit: ["Bhim Jayanti", "Sant Ravidas Jayanti", "Equality Celebrations"],
};

// ❓ FAQ Section
const faqs = [
  { question: "What does the Indian Festival Calendar 2025 include?", answer: "The calendar covers major religious festivals, caste-specific celebrations, and cultural events happening throughout 2025." },
  { question: "How accurate are the festival dates?", answer: "Our calendar is regularly updated to ensure accuracy with lunar and solar cycles." },
  { question: "Can I find regional festivals in the calendar?", answer: "Yes! We highlight festivals significant to different Indian states and communities." },
  { question: "Does the calendar include caste-based festivals?", answer: "Absolutely! We showcase important events celebrated by various castes and social groups." },
];

const FestivalCalendar = () => {
  return (
    <div className="bg-black text-white py-20 px-8">
      {/* 📆 Title */}
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">
        📆 Indian Religious & Cultural Festivals 2025 📆
      </motion.h2>

      {/* 📝 Religious Calendar List */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {calendars.map((calendar, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.8 }} className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-yellow-500/50">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{calendar.name}</h3>
            <p className="text-gray-300 text-base mb-4">{calendar.description}</p>
            <a href={calendar.link} className="inline-block px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50">
              Click Here To Read More →
            </a>
          </motion.div>
        ))}
      </div>

      {/* 🎉 Festival Dates */}
      <div className="max-w-5xl mx-auto">
        {Object.keys(festivals).map((month, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.8 }} className="mb-10">
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

      {/* 🎭 Caste-Based Festivals */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-3xl text-yellow-400 font-bold mb-6 text-center">🎭 Caste-Based Festivals in 2025 🎭</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(casteFestivals).map((caste, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.8 }} className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{caste}</h3>
              <ul className="text-gray-300">
                {casteFestivals[caste].map((festival, idx) => (
                  <li key={idx} className="mb-2">{festival}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ❓ FAQs */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-3xl text-yellow-400 font-bold mb-6 text-center">❓ Frequently Asked Questions ❓</h3>
        {faqs.map((faq, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.8 }} className="mb-6">
            <h4 className="text-xl text-yellow-400 font-semibold">{faq.question}</h4>
            <p className="text-gray-300">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FestivalCalendar;
