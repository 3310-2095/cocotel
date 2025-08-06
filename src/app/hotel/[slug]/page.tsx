"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HotelHeroSection() {
  const [activeTab, setActiveTab] = useState("Home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = ["Home", "Amenities", "ROOM", "Location", "Know More", "FAQ"];
  const mobileImages = [
    "/hotel/hotel1.png",
    "/hotel/hotel2.jpg",
    "/hotel/hotel3.jpg",
    "/hotel/hotel4.jpg",
    "/hotel/hotel5.jpg",
  ];

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? mobileImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === mobileImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* 👉 Image Gallery - Desktop */}
      <section className="hidden lg:flex gap-3 mb-12">
        <div className="relative w-[604px] h-[476px]">
          <Image
            src="/hotel/hotel1.png"
            alt="Main Hotel View"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {[2, 3, 4, 5].map((num) => (
            <div key={num} className="relative w-[294px] h-[230px]">
              <Image
                src={`/hotel/hotel${num}.jpg`}
                alt={`Hotel View ${num}`}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          ))}
        </div>
      </section>

      {/* 👉 Image Gallery - Mobile */}
      <section className="relative lg:hidden w-full h-[300px] mb-8">
        <Image
          src={mobileImages[currentImageIndex]}
          alt="Hotel Mobile View"
          fill
          className="object-cover rounded-lg"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </section>

      {/* 👉 Tabs */}
      <div className="flex flex-wrap gap-4 text-base font-semibold border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-1 transition-colors duration-200 ${
              activeTab === tab
                ? "text-green-600 font-bold"
                : "text-gray-800 hover:text-green-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 rounded"></span>
            )}
          </button>
        ))}
      </div>

      {/* 👉 Title & Side Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 border-b pb-6 mb-6">
        {/* 📝 Left: Hotel Info */}
        <div className="flex-1">
          <h1 className="text-[32px] sm:text-[36px] lg:text-[48px] font-bold leading-tight mb-3">
            AS Ilaya Resort and Events Place <br />
            Powered by Cocotel
          </h1>
          <h2 className="text-green-600 text-[20px] sm:text-[22px] lg:text-[24px] font-medium mb-4">
            Nasugbu, Batangas, Philippines
          </h2>
          <p className="text-[16px] text-gray-700 leading-6 max-w-2xl">
            AS Ilaya Resort and Events Place is an ideal destination for those seeking relaxation and fun with their loved ones. The establishment provides comfortable accommodations and a large swimming pool. The rooms are spacious and well-maintained, while the surrounding greenery creates a tranquil atmosphere.
          </p>
        </div>

        {/* ⭐ Right: Rating & Price */}
        <div className="w-full lg:w-[260px] flex flex-col justify-between">
          {/* ⭐ Rating */}
          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src="/images/full-star.svg"
                alt="Star"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            ))}
            <Image
              src="/images/half-star.svg"
              alt="Star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="ml-3 text-gray-800 text-sm font-medium">
              4.1 / 5 (530 Review)
            </span>
          </div>

          {/* 💰 Price */}
          <div className="text-right mt-auto">
            <h4 className="text-sm text-gray-600">start-from</h4>
            <h1 className="text-green-600 text-2xl font-bold">$ 52</h1>
            <h4 className="text-sm text-gray-600">/room /night</h4>
            <button className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm">
              See Rooms
            </button>
          </div>
        </div>
      </div>

      {/* 👉 Amenities */}
      <div>
        <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-tight mb-8">Amenities</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {[
            { icon: "/images/uil_wifi.svg", label: "Free Wi-Fi" },
            { icon: "/images/Pets.svg", label: "Pets" },
            { icon: "/images/swimmer.svg", label: "Swimming Pool" },
            { icon: "/images/Toiletries.svg", label: "Toiletries" },
            { icon: "/images/Parking.svg", label: "Parking" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={item.icon}
                alt={item.label}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-[18px] font-bold text-black">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>

  
    </div>
  );
}