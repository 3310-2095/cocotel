import React from 'react';
import Image from "next/image";

const DiscoverSection = () => {
  
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover What Cocotel has to Offer
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Unlock your adventure with Cocotel. Explore our collection of hotels and resorts in beachside, cityscape, and mountain settings. Book now with no queues, no crowds—all discounted.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
          Explore
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          
            <div
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2 text-green-600">
                <Image
                    src="/images/perfect-2.svg"
                    alt="Beatch"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                /></div>
              <p className="text-gray-800 text-sm font-medium">Beatch</p>
            </div>

            <div
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2 text-green-600">
                <Image
                    src="/images/nature.png"
                    alt="Nature"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                /></div>
              <p className="text-gray-800 text-sm font-medium">Nature</p>
            </div>
            <div
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2 text-green-600">
                <Image
                    src="/images/resorts.svg"
                    alt="Resorts"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                /></div>
              <p className="text-gray-800 text-sm font-medium">Resorts</p>
            </div>
            <div
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2 text-green-600">
                <Image
                    src="/images/home-line.svg"
                    alt="Farms"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                /></div>
              <p className="text-gray-800 text-sm font-medium">Farms</p>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;