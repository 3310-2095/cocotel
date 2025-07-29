"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("USA - $");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const countries = [
    "USA - $",
    "Australia - A$",
    "Malaysia - RM",
    "Indonesia - Rp",
    "Philippines - ₱",
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events at Cocotel", href: "/events" },
    { name: "Partner With Us", href: "/about" },
  ];

  return (
    <header className="bg-white shadow-lg ">
      <nav className="max-w-[82rem] mx-auto py-5 px-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={185}
              height={54}
              className="object-cover"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-10 text-green-600 font-normal text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" text-base transition transform hover:scale-105 hover:text-green-700  border-transparent hover:border-green-700"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-green-600 text-2xl"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/login">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
              Register
            </button>
          </Link>

          {/* Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center border w-38 px-3 py-2 rounded text-sm font-medium text-green-700 hover:text-green-900"
            >
              {selectedCountry} <FiChevronDown className="ml-1" />
            </button>
            {showDropdown && (
              <ul className="absolute z-10 mt-2 bg-white border rounded shadow w-36 right-0">
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
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-green-600 hover:text-green-700 hover:font-bold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 w-full text-center">
                Login
              </button>
            </Link>
            <Link href="/register">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 w-full text-center">
              Register
            </button>
          </Link>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center border px-3 py-2 rounded text-sm font-medium text-green-700 hover:text-green-900 w-full"
              >
                {selectedCountry} <FiChevronDown className="ml-1" />
              </button>
              {showDropdown && (
                <ul className="mt-2 bg-white border rounded shadow w-full">
                  {countries.map((country) => (
                    <li
                      key={country}
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowDropdown(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-green-100 text-sm text-green-700 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
