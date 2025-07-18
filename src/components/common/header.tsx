"use client";

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("USA");

  const countries = ["USA", "Philippines", "India", "Singapore", "UAE"];

  return (
    <header className="bg-white border-white shadow-lg h-[94px] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={185}
            height={54}
            className="object-cover w-auto h-12 sm:h-14"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-green-700 hover:text-green-900"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6 sm:space-x-8 lg:space-x-12 text-[#4baa42] font-light">
          <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
            Home
          </h2>
          <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
            Explore
          </h2>
          <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
            Events at Cocotel
          </h2>
          <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
            Blog
          </h2>
          <Link href="/about">
            <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
              About
            </h2>
          </Link>
          <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
            Careers
          </h2>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden absolute top-[94px] left-0 w-full bg-white shadow-md z-40">
            <div className="flex flex-col items-center space-y-4 py-4">
              <h2 className="hover:text-green-900 cursor-pointer text-sm">
                Home
              </h2>
              <h2 className="hover:text-green-900 cursor-pointer text-sm">
                Explore
              </h2>
              <h2 className="hover:text-green-900 cursor-pointer text-sm">
                Events at Cocotel
              </h2>
              <h2 className="hover:text-green-900 cursor-pointer text-sm">
                Blog
              </h2>
              <Link href="/about">
            <h2 className="hover:text-green-900 cursor-pointer text-sm sm:text-base">
              About
            </h2>
          </Link>
              <h2 className="hover:text-green-900 cursor-pointer text-sm">
                Careers
              </h2>
            </div>
          </div>
        )}

        {/* Right Side */}
        <div className="flex items-center space-x-2 sm:space-x-3 relative">
          <button className="bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm">
            Login
          </button>

          {/* Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center border px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium text-green-700 hover:text-green-900"
            >
              {selectedCountry} <FiChevronDown className="ml-1" size={16} />
            </button>
            {showDropdown && (
              <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-28 sm:w-36">
                {countries.map((country) => (
                  <li
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowDropdown(false);
                    }}
                    className="px-3 py-1 sm:px-4 sm:py-2 hover:bg-green-100 text-xs sm:text-sm text-green-700 cursor-pointer"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Exchange Button */}
          <button className="border p-1 sm:p-2 rounded text-green-700 hover:text-green-900">
            <HiOutlineSwitchHorizontal size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
