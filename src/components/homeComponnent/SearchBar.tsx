"use client";

import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import Image from "next/image";
import { addDays, format } from "date-fns";
import { FiSearch, FiCalendar, FiUsers } from "react-icons/fi";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [adults, setAdults] = useState(3);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  // Sync checkIn and checkOut with DateRange state
  const [checkIn, setCheckIn] = useState(format(new Date(), "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(
    format(addDays(new Date(), 1), "yyyy-MM-dd")
  );

  useEffect(() => {
    setCheckIn(format(state[0].startDate, "yyyy-MM-dd"));
    setCheckOut(format(state[0].endDate, "yyyy-MM-dd"));
  }, [state]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, adults, rooms });
    // Add your search logic here (e.g., navigate to /hotels with query params)
  };

  // Sample location data (replace with API data if needed)
  const locations = [
    "New York, USA",
    "London, UK",
    "Paris, France",
    "Tokyo, Japan",
    "Sydney, Australia",
    "Dubai, UAE",
    "Singapore, Singapore",
    "Mumbai, India",
    "Los Angeles, USA",
    "Rome, Italy",
  ];

  // Filter locations based on input
  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 custom-margin">
      <form
        onSubmit={handleSearch}
        className="search-hotel-form bg-white/90 backdrop-blur-md flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4"
      >
        {/* Location (Searchable Select) */}
        <div className="ms-3 flex-1 relative w-full lg-w-auto">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setShowLocationDropdown(true);
            }}
            onFocus={() => setShowLocationDropdown(true)}
            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)} // Delay to allow click
            className="text-sm text-black font-medium w-full p-2 cursor-pointer rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 pl-8 placeholder-black"
          />
          <Image
            src="/images/location.svg"
            alt="Logo"
            width={14}
            height={14}
            className="object-cover absolute left-2 top-2.5 text-green-600"
            priority
          />
          {/* <FiSearch className="absolute left-2 top-2 text-gray-400" /> */}
          {showLocationDropdown && filteredLocations.length > 0 && (
            <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
              {filteredLocations.map((loc) => (
                <li
                  key={loc}
                  onClick={() => {
                    setLocation(loc);
                    setShowLocationDropdown(false);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date Range */}
        <div className="flex-1 relative w-full lg-w-auto">
          <button
            type="button"
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="w-full text-sm p-2 cursor-pointer rounded-md text-left focus:outline-none focus:ring-1 focus:ring-green-500 pl-8"
          >
            <span className="text-gray-700 text-sm text-black font-medium">
              {`${format(state[0].startDate, "dd MMM yyyy")} - ${format(
                state[0].endDate,
                "dd MMM yyyy"
              )}`}
            </span>
            <FiCalendar className="absolute left-2 top-2.5 text-gray-400 text-green-600" />
          </button>
          {showDatePicker && (
            <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg ">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                minDate={new Date()}
                className="p-4"
              />
            </div>
          )}
        </div>

        {/* Guests and Rooms */}
        <div className="relative flex-1 w-full lg-w-auto">
          <button
            type="button"
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
            className="w-full cursor-pointer text-sm text-black font-medium p-2  rounded-md text-left focus:outline-none focus:ring-1 focus:ring-green-500 pl-8"
          >
            <span className="text-gray-700">{`${adults} Adults - ${rooms} Room`}</span>
            <FiUsers className="absolute left-2 top-2.5 text-gray-400 text-green-600" />
          </button>
          {showGuestsDropdown && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span>Adults</span>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span>{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Rooms</span>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span>{rooms}</span>
                    <button
                      type="button"
                      onClick={() => setRooms(rooms + 1)}
                      className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGuestsDropdown(false)}
                  className="w-full mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-full w-full lg:w-auto h-[50px] lg:h-[80px] px-6 hover:bg-green-600 transition"
        >
          <FiSearch className="inline mr-2" /> Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
