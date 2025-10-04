"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import { format } from "date-fns";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";

const countries = [
  { code: "ph", name: "Philippines", flag: "/Top things/Flag_of_the_Philippines.svg.png" },
  { code: "id", name: "Indonesia", flag: "/Top things/Flag_of_Indonesia.svg.png" },
];

const Hero = () => {
  const [activeCountry, setActiveCountry] = useState("ph");
  const [location, setLocation] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(),
  });

  const calendarRef = useRef(null);
  const guestsRef = useRef(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setCalendarOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(e.target)) {
        setGuestsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Framer Motion animation variants for country tabs
  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/aerial-view-of-oslob-cebu-philippines-1080p-2025-08-28-21-31-42-utc.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
          Just Unpacked!
        </h1>
        <p className="text-base md:text-xl lg:text-1xl max-w-5xl mb-12 drop-shadow-md">
          Unlock your adventure with Cocotel. Explore our collection of hotels and resorts in
          beachside, cityscape, and mountain settings. Book now with No queues, no crowds—all
          discounted.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col bg-white rounded-xl shadow-xl p-4 md:p-6 gap-3">
            {/* Country Tabs inside box */}
            <div className="flex mb-2 space-x-4">
              {countries.map((c) => (
                <motion.button
                  key={c.code}
                  onClick={() => setActiveCountry(c.code)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition border ${
                    activeCountry === c.code
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Image src={c.flag} alt={c.name} width={20} height={20} />
                  {c.name}
                </motion.button>
              ))}
            </div>

            {/* Search Fields */}
            <AnimatePresence>
              <motion.div
                key={activeCountry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row flex-wrap items-center gap-3"
              >
                {/* Location Dropdown */}
                <div className="flex items-center border rounded-lg px-3 py-2 flex-1 min-w-[140px] md:min-w-[180px]">
                  <FaMapMarkerAlt className="text-gray-500 w-4 h-4 mr-2" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full outline-none text-sm md:text-base text-gray-700"
                  >
                    <option value="">Select Location</option>
                    {activeCountry === "ph" ? (
                      <>
                        <option value="Manila">Manila</option>
                        <option value="Cebu">Cebu</option>
                        <option value="Boracay">Boracay</option>
                      </>
                    ) : (
                      <>
                        <option value="Bali">Bali</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Yogyakarta">Yogyakarta</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Check-in/out Calendar */}
                <div
                  className="relative flex items-center border rounded-lg px-3 py-2 flex-1 min-w-[180px] md:min-w-[220px]"
                  ref={calendarRef}
                >
                  <FaCalendarAlt className="text-gray-500 w-4 h-4 mr-2" />
                  <button
                    type="button"
                    onClick={() => setCalendarOpen(!calendarOpen)}
                    className="w-full text-left text-sm md:text-base text-gray-700 hover:bg-gray-100 rounded-md transition"
                  >
                    {dateRange.from && dateRange.to
                      ? `${format(dateRange.from, "dd MMM")} - ${format(dateRange.to, "dd MMM")}`
                      : "Check in – out"}
                  </button>
              <div className="relative overflow-visible">
  {calendarOpen && (
    <div className="absolute top-full left-0 mt-2 bg-gray-50 shadow-2xl rounded-lg p-4 border border-gray-200 w-[min(600px,100vw)] z-[9999]">
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={(range) => {
          if (range) setDateRange(range);
          if (range?.from && range?.to) setCalendarOpen(false);
        }}
        numberOfMonths={2}
        className="border-none bg-gray-50 text-gray-900"
        classNames={{
          day: "text-gray-900 hover:bg-green-100",
          day_selected: "bg-green-600 text-white hover:bg-green-700",
          range_middle: "bg-green-100 text-gray-900 hover:bg-green-200",
          range_start: "bg-green-600 text-white hover:bg-green-700 rounded-l-md",
          range_end: "bg-green-600 text-white hover:bg-green-700 rounded-r-md",
          today: "bg-green-50 text-gray-900",
          caption_label: "text-gray-900 font-semibold",
          dropdown: "bg-gray-50 text-gray-900",
          month_caption: "text-gray-900",
          weekday: "text-gray-700 font-medium",
          outside: "text-gray-400",
          disabled: "text-gray-400 opacity-50",
        }}
      />
    </div>
  )}
</div>

                </div>

                {/* Guests & Rooms */}
                <div
                  className="relative flex items-center border rounded-lg px-3 py-2 flex-1 min-w-[140px] md:min-w-[180px]"
                  ref={guestsRef}
                >
                  <FaUser className="text-gray-500 w-4 h-4 mr-2" />
                  <button
                    type="button"
                    onClick={() => setGuestsOpen(!guestsOpen)}
                    className="w-full text-left text-sm md:text-base text-gray-700 hover:bg-gray-100 rounded-md transition"
                  >
                    {adults} Adult{adults > 1 ? "s" : ""}, {children} Child
                    {children !== 1 ? "ren" : ""}
                  </button>

                  {guestsOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg z-50 p-4 w-64">
                      {/* Adults */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700">Adults</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="p-2 rounded-full border text-black hover:bg-gray-200"
                          >
                            <FaMinus />
                          </button>
                          <span className="font-medium">{adults}</span>
                          <button
                            onClick={() => setAdults(adults + 1)}
                            className="p-2 rounded-full border text-black hover:bg-gray-200"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Children</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="p-2 rounded-full border text-black hover:bg-gray-200"
                          >
                            <FaMinus />
                          </button>
                          <span className="font-medium">{children}</span>
                          <button
                            onClick={() => setChildren(children + 1)}
                            className="p-2 rounded-full border text-black hover:bg-gray-200"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button className="bg-green-600 hover:bg-green-700 text-white p-3 md:px-6 md:py-3 rounded-md flex items-center justify-center transition w-full md:w-auto">
                  <FaSearch className="w-5 h-5 mr-2" />
                  Search Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;