"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaClock, FaRegHourglass, FaFlag } from 'react-icons/fa';


const tours = [
  { 
    src: [
      "/Top things/group-travel-4.jpg",
      "/Top things/dummy-slide-1.jpg",
      "/Top things/dummy-slide-2.jpg",
      "/Top things/dummy-slide-3.jpg"
    ], 
    title: "Amazing 5-Day Palawan Island Beach & Nature Package", 
    discount: "30% Discount", 
    originalPrice: 1056, 
    price: 739, 
    duration: "5 days", 
    startingTime: "Flexible", 
    tourStarts: "Manila, Metro...", 
    endingPlace: "Manila, Metro...", 
    reviews: { count: 3, rating: 8.6 }, 
    save: 317 
  },
  { 
    src: [
      "/Top things/resized-shutterstock-1478003996-1.jpg",
      "/Top things/dummy-slide-1.jpg",
      "/Top things/dummy-slide-2.jpg",
      "/Top things/dummy-slide-3.jpg"
    ], 
    title: "Fun 10-Day Boracay, Cebu & Palawan Islands Beaches, Whale Watching", 
    discount: "30% Discount", 
    originalPrice: 1914, 
    price: 1354, 
    duration: "10 days", 
    startingTime: "Flexible", 
    tourStarts: "Manila, Metro...", 
    endingPlace: "Manila, Metro...", 
    reviews: { count: 3, rating: 10 }, 
    save: 580 
  },
  { 
    src: [
      "/Top things/resized-shutterstock-399071341.jpg",
      "/Top things/dummy-slide-1.jpg",
      "/Top things/dummy-slide-2.jpg",
      "/Top things/dummy-slide-3.jpg"
    ], 
    title: "Amazing 15-Day Adventure & Whale Shark Watching Package", 
    discount: "20% Discount", 
    originalPrice: 2107, 
    price: 1685, 
    duration: "15 days", 
    startingTime: "Flexible", 
    tourStarts: "Manila, Metro...", 
    endingPlace: "Manila, Metro...", 
    reviews: { count: 2, rating: 9.2 }, 
    save: 422 
  },
  { 
    src: [
      "/Top things/resized-shutterstock-1506000698-4.jpg",
      "/Top things/dummy-slide-1.jpg",
      "/Top things/dummy-slide-2.jpg",
      "/Top things/dummy-slide-3.jpg"
    ], 
    title: "Ultimate 1-Month Adventure Tour Package to the Best Islands", 
    discount: "30% Discount", 
    originalPrice: 6387, 
    price: 4671, 
    duration: "30 days", 
    startingTime: "Flexible", 
    tourStarts: "Manila, Metro...", 
    endingPlace: "Manila, Metro...", 
    reviews: { count: 4, rating: 8.9 }, 
    save: 1716 
  },
];

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = (index) => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : tours[index].src.length - 1));
  };

  const handleNext = (index) => {
    setCurrentSlide((prev) => (prev < tours[index].src.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-400">
          Top things to do in the Philippines
        </h2>
        <p className="text-center mb-8">
          Discover all the adventures you can experience in the Philippines
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={tour.src[currentSlide]}
                  alt={tour.title}
                  width={380}
                  height={207}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-black px-2 py-1 rounded-full text-sm font-semibold">
                  {tour.discount}
                </div>
                {tour.reviews && (
                  <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-black px-2 py-1 rounded-full text-sm font-semibold flex items-center">
                  </div>
                )}
                <button className="absolute bottom-2 right-2 bg-gray-200 bg-opacity-75 text-black px-4 py-2 rounded-full">
                  Quick View
                </button>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-black px-2 py-1 rounded-full"
                  onClick={() => handlePrev(index)}
                >
                  &lt;
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-black px-2 py-1 rounded-full"
                  onClick={() => handleNext(index)}
                >
                  &gt;
                </button>
              </div>
              <div className="p-4">
                <p className="text-blue-600 font-bold mb-2">{tour.title}</p>
             <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
  <div className="flex items-center gap-1">
    <FaMapMarkerAlt className="text-gray-500" />
    <div>
      <div className="font-bold">Tour starts:</div>
      <div className="font-medium">{tour.tourStarts}</div>
    </div>
  </div>

  <div className="flex items-center gap-1">
    <FaClock className="text-gray-500" />
    <div>
      <div className="font-bold">Starting time:</div>
      <div className="font-medium">{tour.startingTime}</div>
    </div>
  </div>

  <div className="flex items-center gap-1">
    <FaRegHourglass className="text-gray-500" />
    <div>
      <div className="font-bold">Duration:</div>
      <div className="font-medium">{tour.duration}</div>
    </div>
  </div>

  <div className="flex items-center gap-1">
    <FaFlag className="text-gray-500" />
    <div>
      <div className="font-bold">Ending place:</div>
      <div className="font-medium">{tour.endingPlace}</div>
    </div>
  </div>
</div>

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-green-600 font-bold">From ${tour.price} USD</p>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
                  <div className="text-right mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              See all photos →
            </a>
          </div>
      </div>
    </section>
  );
};

export default Features;