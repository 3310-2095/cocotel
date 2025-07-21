"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const hotelImages = [
  "/explore/--garin-farm-pilgrimage-resort-powered-by-cocotel-g2169.jpg",
  "/explore/--garin-farm-pilgrimage-resort-powered-by-cocotel-g2170.jpg",
  "/explore/--garin-farm-pilgrimage-resort-powered-by-cocotel-g2171.jpg",
  "/explore/--garin-farm-pilgrimage-resort-powered-by-cocotel-g2172.jpg",
  "/explore/--garin-farm-pilgrimage-resort-powered-by-cocotel-g2173.jpg",
];

const HotelCard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % hotelImages.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? hotelImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % hotelImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f6f6f6] p-6 flex justify-center">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full sm:w-1/2 h-[300px] sm:h-[350px] md:h-[400px]">
          <Image
            src={hotelImages[currentImage]}
            alt="Hotel Image"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl"
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Info Section */}
        <div className="w-full sm:w-1/2 p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Garin Farm Pilgrimage Resort powered by Cocotel
            </h2>
            <div className="flex items-center mt-1">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/full-star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
              <Image
                src="/images/half-star.svg"
                alt="Star"
                width={20}
                height={20}
              />
              <span className="text-sm text-gray-600 ml-2">4.4</span>
              <span className="text-sm text-green-600 ml-2">Iloilo, Philippines</span>
            </div>

            <p className="text-sm text-gray-700 mt-3">
              Garinfarm Pilgrimage Resort is the ONLY resort in the country that integrates
              agriculture, leisure, and pilgrimage thus giving you a unique holistic getaway....
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">Amenities</h3>
              <div className="flex items-center gap-5">
                {["Swimming Pool", "uil_wifi", "Pets", "Parking", "Toiletries"].map((icon, i) => (
                  <div key={i} className="relative group">
                    <Image
                      src={`/images/${icon}.svg`}
                      alt={icon}
                      width={36}
                      height={36}
                      className="hover:scale-110 transition-transform duration-200"
                    />
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                      {icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-right mt-4">
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Flash Sale
              </span>
              <div className="flex justify-end">
                <div className="text-lg text-gray-400 line-through">$ 0</div>
                <div className="text-lg font-bold text-yellow-500 ml-1">0%</div>
              </div>
              <h2 className="text-2xl font-bold text-blue-600">$ 39</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelCard;