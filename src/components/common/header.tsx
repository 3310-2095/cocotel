"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("USA");

  const countries = ["USA", "Philippines", "India", "Singapore", "UAE"];

  return (
<header className="bg-white border-white shadow-lg h-[94px]">
<nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={185}
            height={54}
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-green-700 font-medium">
          <h2 className="hover:text-green-900 cursor-pointer">Home</h2>
          <h2 className="hover:text-green-900 cursor-pointer">Explore</h2>
          <h2 className="hover:text-green-900 cursor-pointer">Events at Cocotel</h2>
          <h2 className="hover:text-green-900 cursor-pointer">Blog</h2>
          <h2 className="hover:text-green-900 cursor-pointer">About</h2>
          <h2 className="hover:text-green-900 cursor-pointer">Careers</h2>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3 relative">
          <button className="bg-green-600 text-white px-5 py-2 rounded">
            Login
          </button>

          {/* Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center border px-3 py-2 rounded text-sm font-medium text-green-700 hover:text-green-900"
            >
              {selectedCountry} <FiChevronDown className="ml-1" />
            </button>
            {showDropdown && (
              <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-36">
                {countries.map((country) => (
                  <li
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-green-100 text-sm text-green-700 cursor-pointer"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Exchange Button */}
          <button className="border p-2 rounded text-green-700 hover:text-green-900">
            <HiOutlineSwitchHorizontal size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
