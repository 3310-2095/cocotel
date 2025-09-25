"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  // Separate state for each dropdown
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("USD");

  const countries = ["USD", "AUD", "MYR", "IDR", "PHP"];
  const cartItems = ["Item 1", "Item 2", "Item 3"]; // Example cart items
  const userOptions = ["Profile", "Settings", "Logout"]; // Example user options

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
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
          <ul className="hidden lg:flex space-x-6 ml-6">
            <li>
              <a href="/vacation-packages" className="text-blue-600 hover:underline">
                Vacation Packages
              </a>
            </li>
            <li>
              <a href="/tours-tickets" className="text-blue-600 hover:underline">
                Tours & Tickets
              </a>
            </li>
            <li>
              <a href="/transfers" className="text-blue-600 hover:underline">
                Transfers
              </a>
            </li>
            <li>
              <a href="/hotels" className="text-blue-600 hover:underline">
                Hotels
              </a>
            </li>
            <li>
              <a href="/car-rental" className="text-blue-600 hover:underline">
                Car Rental
              </a>
            </li>
            <li>
              <a href="/travel-tips" className="text-blue-600 hover:underline">
                Travel Tips
              </a>
            </li>
            <li>
              <a href="/flights" className="text-blue-600 hover:underline">
                Flights
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="flex items-center px-2 py-1 rounded text-sm font-medium text-white bg-[#4CAA42] hover:bg-green-600"
            >
              {selectedCountry} <FiChevronDown className="ml-1" />
            </button>
            {showCurrencyDropdown && (
              <ul className="absolute z-50 mt-2 bg-white border rounded shadow w-36 right-0">
                <div className="bg-[#4CAA42] text-sm text-white font-bold p-2 flex items-center justify-between">
                  <span>Currency</span>
                  <div
                    onClick={() => setShowCurrencyDropdown(false)}
                    className="bg-white text-[#4CAA42] cursor-pointer text-sm font-bold p-1 rounded-full"
                  >
                    <RxCross2 />
                  </div>
                </div>
                {countries.map((country) => (
                  <li
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCurrencyDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-green-100 text-sm text-green-700 cursor-pointer"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCartDropdown(!showCartDropdown)}
              className="flex items-center px-1 py-1 rounded text-sm font-medium text-green-700 hover:text-green-900"
            >
              <FiShoppingCart className="ml-1 text-lg" />
            </button>
            {showCartDropdown && (
              <ul className="absolute z-50 mt-2 bg-white border rounded shadow w-36 right-0">
                <div className="bg-[#4CAA42] text-sm text-white font-bold p-2 flex items-center justify-between">
                  <span>Cart</span>
                  <div
                    onClick={() => setShowCartDropdown(false)}
                    className="bg-white text-[#4CAA42] cursor-pointer text-sm font-bold p-1 rounded-full"
                  >
                    <RxCross2 />
                  </div>
                </div>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-green-100 text-sm text-green-700 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-green-700">Cart is empty</li>
                )}
              </ul>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="bg-[#4CAA42] text-white cursor-pointer text-lg font-bold p-1 rounded-full"
            >
              <div className=""></div><FiUser />
            </button>
            {showUserDropdown && (
              <ul className="absolute z-50 mt-2 bg-white border rounded shadow w-36 right-0">
                <div className="bg-[#4CAA42] text-sm text-white font-bold p-2 flex items-center justify-between">
                  <span>Account</span>
                  <div
                    onClick={() => setShowUserDropdown(false)}
                    className="bg-white text-[#4CAA42] cursor-pointer text-sm font-bold p-1 rounded-full"
                  >
                    <RxCross2 />
                  </div>
                </div>
                {userOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => setShowUserDropdown(false)}
                    className="px-4 py-2 hover:bg-green-100 text-sm text-green-700 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="lg:hidden">
            <FiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;