// components/Hero.js
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa";
import { Calendar } from "@/components/ui/calendar"; // your calendar component
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const calendarRef = useRef(null);

  const formatDate = (date) => (date ? format(date, "MMM dd, yyyy") : "");

  // close calendar if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <p className="text-base md:text-xl lg:text-2xl max-w-4xl mb-12 drop-shadow-md">
Unlock your adventure with Cocotel. Explore our collection of hotels and resorts in beachside, cityscape, and mountain settings. Book now with No queues, no crowds—all discounted.

        </p>

        {/* Search Bar */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap items-center bg-white rounded-xl shadow-xl p-4 md:p-6 gap-3">
            {/* Location */}
            <div className="flex items-center border rounded-lg px-3 py-2 flex-1 min-w-[140px] md:min-w-[180px]">
              <FaMapMarkerAlt className="text-gray-500 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none text-sm md:text-base text-gray-700 placeholder-gray-500"
              />
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
                className={cn(
                  "w-full text-left text-sm md:text-base text-gray-700 outline-none",
                  !dateRange?.from && "text-gray-500"
                )}
              >
                {dateRange?.from
                  ? dateRange?.to
                    ? `${formatDate(dateRange.from)} - ${formatDate(dateRange.to)}`
                    : formatDate(dateRange.from)
                  : "Check in – out"}
              </button>
              {calendarOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg z-50 p-2 md:p-4 w-[280px] md:w-auto">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    initialFocus
                    className="border-none"
                  />
                </div>
              )}
            </div>

            {/* Guests & Rooms */}
            <div className="flex items-center border rounded-lg px-3 py-2 flex-1 min-w-[140px] md:min-w-[180px]">
              <FaUser className="text-gray-500 w-4 h-4 mr-2" />
              <select
                value={`${adults},${children}`}
                onChange={(e) => {
                  const [a, c] = e.target.value.split(",").map(Number);
                  setAdults(a);
                  setChildren(c);
                }}
                className="w-full outline-none text-sm md:text-base text-gray-700"
              >
                {Array.from({ length: 5 }, (_, i) => i + 1).map((adult) =>
                  Array.from({ length: 4 }, (_, j) => j).map((child) => (
                    <option key={`${adult},${child}`} value={`${adult},${child}`}>
                      {adult} Adult{adult > 1 ? "s" : ""},{" "}
                      {child} Child{child !== 1 ? "ren" : ""}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 md:px-6 md:py-3 rounded-md flex items-center justify-center transition w-full md:w-auto">
              <FaSearch className="w-5 h-5 mr-2" />
              Search Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
