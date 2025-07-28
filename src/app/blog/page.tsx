"use client";

import React from 'react';
import Image from "next/image";
import "animate.css";

const Page = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative text-white w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* 👇 Blur Background Layer */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/beautiful-diamond-beach-penida-island-bali-indonesia (1).jpg')",
            filter: "blur(2px)",
            transform: "scale(1.05)", // prevents edge clipping from blur
            zIndex: 0,
          }}
        ></div>

        {/* 👇 Foreground Text Content */}
        <div className="relative z-10 mx-auto py-10 sm:py-16 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
          >
Romantic Valentine’s Dinner <br/> with Your Lover          </h1>
          <p
            className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          >
Valentine's is a day that has a special meaning for every couple that you must spend. There's nothing wrong with spending a day that falls on February…          </p>
          <button
            className="mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-base wow animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
