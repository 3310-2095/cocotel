"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiCalendar, FiSearch, FiUsers } from "react-icons/fi";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [checkIn, setCheckIn] = useState(format(new Date(), "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(format(addDays(new Date(), 1), "yyyy-MM-dd"));

  const locationRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  const locations = [
    "New York, USA", "London, UK", "Paris, France", "Tokyo, Japan",
    "Sydney, Australia", "Dubai, UAE", "Singapore, Singapore",
    "Mumbai, India", "Los Angeles, USA", "Rome, Italy"
  ];

  const filteredLocations =
    location.trim() === "" || locations.includes(location)
      ? locations
      : locations.filter((loc) =>
          loc.toLowerCase().includes(location.toLowerCase())
        );

  useEffect(() => {
    setCheckIn(format(state[0].startDate, "yyyy-MM-dd"));
    setCheckOut(format(state[0].endDate, "yyyy-MM-dd"));
  }, [state]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (locationRef.current && !locationRef.current.contains(target)) {
        setShowLocationDropdown(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(target)) {
        setShowDatePicker(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(target)) {
        setShowGuestsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredLocations.length > 0) {
      setLocation(filteredLocations[0]);
      setShowLocationDropdown(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search data:", {
      location,
      checkIn,
      checkOut,
      adults,
      child,
      rooms,
    });
    // You can call API or redirect to search results page here
  };

  return (
    <section className="p-2 sm:p-4 md:p-6 max-w-[90rem] mx-auto">
      <div className="relative max-w-4xl mx-auto mt-20 sm:mt-16 md:mt-20 lg:mt-[72px]">
         <form
           onSubmit={handleSearch}
           className="search-hotel-form bg-white/90 backdrop-blur-md flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 rounded-lg shadow-lg px-4 py-6"
         >
           {/* Location */}
           <div className="ms-3 flex-1 relative w-full lg-w-auto" ref={locationRef}>
             <input
               type="text"
               placeholder="Location"
               value={location}
               onChange={(e) => {
                 setLocation(e.target.value);
                 setShowLocationDropdown(true);
               }}
               onFocus={() => {
                 setShowLocationDropdown(true);
               }}
               onKeyDown={handleLocationKeyDown}
               className="text-sm text-black font-medium w-full p-2 cursor-pointer rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 pl-8 placeholder-black"
             />
             <Image
               src="/images/location.svg"
               alt="Location"
               width={14}
               height={14}
               className="object-cover absolute left-2 top-2.5 text-green-600"
               priority
             />
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
           <div className="flex-1 relative w-full lg-w-auto" ref={datePickerRef}>
             <button
               type="button"
               onClick={() => setShowDatePicker(!showDatePicker)}
               className="w-full text-sm p-2 cursor-pointer rounded-md text-left focus:outline-none focus:ring-1 focus:ring-green-500 pl-8"
             >
               <span className="text-black font-medium">
                 {`${format(state[0].startDate, "dd MMM yyyy")} - ${format(
                   state[0].endDate,
                   "dd MMM yyyy"
                 )}`}
               </span>
               <FiCalendar className="absolute left-2 top-2.5 text-green-600" />
             </button>
             {showDatePicker && (
               <div className="absolute z-50 mt-2 w-full sm:w-[300px] md:w-[600px] bg-white border border-gray-300 rounded-md shadow-lg">
                 <DateRange
                   editableDateInputs={true}
                   onChange={(item) => {
                     const { startDate, endDate } = item.selection;
                     setState([
                       {
                         startDate: startDate || new Date(),
                         endDate: endDate || new Date(),
                         key: "selection",
                       },
                     ]);
                     if (
                       startDate &&
                       endDate &&
                       startDate.toDateString() !== endDate.toDateString()
                     ) {
                       setTimeout(() => setShowDatePicker(false), 150);
                     }
                   }}
                   moveRangeOnFirstSelection={false}
                   ranges={state}
                   minDate={new Date()}
                   className="p-2 sm:p-4"
                 />
               </div>
             )}
           </div>
 
           {/* Guests and Rooms */}
           <div className="relative flex-1 w-full lg-w-auto" ref={guestsRef}>
             <button
               type="button"
               onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
               className="w-full cursor-pointer text-sm text-black font-medium p-2 rounded-md text-left focus:outline-none focus:ring-1 focus:ring-green-500 pl-8"
             >
               <span>{`${adults} Adults - ${child} Child - ${rooms} Room`}</span>
               <FiUsers className="absolute left-2 top-2.5 text-green-600" />
             </button>
             {showGuestsDropdown && (
               <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                 <div className="p-2 sm:p-4">
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-sm sm:text-base">Adults</span>
                     <div className="flex items-center space-x-2">
                       <button
                         type="button"
                         onClick={() => setAdults(Math.max(1, adults - 1))}
                         className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 text-green-600 rounded-full font-bold hover:bg-gray-300"
                       >
                         -
                       </button>
                       <span className="text-sm sm:text-base">{adults}</span>
                       <button
                         type="button"
                         onClick={() => setAdults(adults + 1)}
                         className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 text-green-600 rounded-full font-bold hover:bg-gray-300"
                       >
                         +
                       </button>
                     </div>
                   </div>
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-sm sm:text-base">Child</span>
                     <div className="flex items-center space-x-2">
                       <button
                         type="button"
                         onClick={() => setChild(Math.max(0, child - 1))}
                         className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 text-green-600 rounded-full font-bold hover:bg-gray-300"
                       >
                         -
                       </button>
                       <span className="text-sm sm:text-base">{child}</span>
                       <button
                         type="button"
                         onClick={() => setChild(child + 1)}
                         className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 text-green-600 rounded-full font-bold hover:bg-gray-300"
                       >
                         +
                       </button>
                     </div>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm sm:text-base">Rooms</span>
                     <div className="flex items-center space-x-2">
                       <button
                         type="button"
                         onClick={() => setRooms(Math.max(1, rooms - 1))}
                         className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 text-green-600 rounded-full font-bold hover:bg-gray-300"
                       >
                         -
                       </button>
                       <span className="text-sm sm:text-base">{rooms}</span>
                       <button
                         type="button"
                         onClick={() => setRooms(rooms + 1)}
                         className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 text-green-600 rounded-full font-bold hover:bg-gray-300"
                       >
                         +
                       </button>
                     </div>
                   </div>
                   <button
                     type="button"
                     onClick={() => setShowGuestsDropdown(false)}
                     className="w-full mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 text-sm sm:text-base"
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
             className="bg-green-500 text-white p-2 rounded-full w-full lg:w-auto h-[50px] lg:h-[85px] px-8 hover:bg-green-600 transition text-sm sm:text-base"
           >
             <FiSearch className="inline mr-2" /> Search
           </button>
         </form>
      </div>


      <section>
      <div className="relative w-full h-64">
  <Image
    src="/explore/img1.png"
    alt="Join Us"
    fill
  />
</div>


      </section>
    </section>

    
  );
}
