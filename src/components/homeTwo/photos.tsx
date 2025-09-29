"use client";

import React, { useState } from "react";
import Image from "next/image";

const tours = [
  { src: "/Top things/1.jpg", title: "Puerto Princesa Underground River" },
  { src: "/Top things/2.jpg", title: "White Beach in Boracay Island" },
  { src: "/Top things/3.jpg", title: "Chocolate Hills" },
  { src: "/Top things/4.jpg", title: "Intramuros" },
  { src: "/Top things/5.jpg", title: "Kayangan Lake" },
  { src: "/Top things/6.jpg", title: "Kawasan Falls" },
  { src: "/Top things/7.jpg", title: "Nacpan Beach" },
  { src: "/Top things/8.jpg", title: "Calle Crisologo" },
];

// First 6 for homepage thumbnails
const visibleTours = tours.slice(0, 6);

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openPopup = (index: number) => {
    setSelectedImage(index);
    setCurrentSlide(index);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setCurrentSlide(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : tours.length - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev < tours.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-400">
          Photos of the Philippines
        </h2>
        <p className="text-center mb-8 text-gray-600">
          See pictures of the best destinations and attractions in the Philippines
        </p>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border-4 border-brown-800">
            <Image
              src={visibleTours[0].src}
              alt={visibleTours[0].title}
              width={896}
              height={479}
              className="w-full h-[479px] object-cover"
            />
            {/* Homepage Thumbnails (6 only) */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 rounded">
              {visibleTours.map((tour, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openPopup(index)}
                >
                  <Image
                    src={tour.src}
                    alt={tour.title}
                    width={120}
                    height={90}
                    className={`rounded-lg object-cover border ${
                      currentSlide === index
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-right mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              See all photos →
            </a>
          </div>
        </div>

        {/* Popup */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
            {/* Close button */}
            <button
              type="button"
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-50"
              onClick={closePopup}
            >
              &times;
            </button>

            {/* Main image */}
            <div className="relative flex items-center justify-center flex-1 w-full px-8">
              <button
                className="absolute left-4 text-white text-4xl bg-black/50 rounded-full p-2 hover:bg-black/70"
                onClick={handlePrev}
              >
                &#10094;
              </button>
              <Image
                src={tours[currentSlide].src}
                alt=""
                width={1000}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute right-4 text-white text-4xl bg-black/50 rounded-full p-2 hover:bg-black/70"
                onClick={handleNext}
              >
                &#10095;
              </button>
            </div>

            {/* Popup Thumbnails (all 8) */}
            <div className="flex space-x-2 overflow-x-auto px-4 pb-4">
              {tours.map((tour, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                >
                  <Image
                    src={tour.src}
                    alt=""
                    width={120}
                    height={90}
                    className={`rounded-lg object-cover border ${
                      currentSlide === index
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Photos;
