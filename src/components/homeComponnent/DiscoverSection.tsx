"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import WowWrapper from "@/components/WOWWrapper";

const DiscoverSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-1 p-3">
        <WowWrapper>
          <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4 wow animate__animated animate__fadeInUp">
            Discover What Cocotel has to Offer
          </h2>
          <p
            className=" mb-6 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          >
            Unlock your adventure with Cocotel. Explore our collection of hotels
            and resorts in beachside, cityscape, and mountain settings. Book now
            with no queues, no crowds—all discounted.
          </p>
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition duration-300 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          >
            Explore
          </button>
        </WowWrapper>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6  aminities-main">
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/perfect-2.svg"
                alt="Beatch"
                width={40}
                height={40}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Beatch</p>
          </Link>
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.1s"
            data-wow-duration="1s"
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/nature.svg"
                alt="Nature"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Nature</p>
          </Link>
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
            data-wow-duration="1s">
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/resorts.svg"
                alt="Resorts"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Resorts</p>
          </Link>
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/home-line.svg"
                alt="Farms"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Farms</p>
          </Link>

          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/culture.svg"
                alt="Culture"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Culture</p>
          </Link>
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.1s"
            data-wow-duration="1s"
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/city.svg"
                alt="City"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">City</p>
          </Link>
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
            data-wow-duration="1s"
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/islands.svg"
                alt="Islands"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Islands</p>
          </Link>
          <Link
            href="#"
            className="bg-white border border-gray-200 rounded-lg px-4 py-8 shadow-sm  transition-shadow flex flex-col justify-center items-center wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          >
            <div className="text-2xl mb-2 text-green-600">
              <Image
                src="/images/swimmingPool.svg"
                alt="Swimming Pool"
                width={35}
                height={35}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">Swimming Pool</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
