// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-96 md:h-[500px] lg:h-[600px]" style={{ backgroundImage: 'url(/hero-image.jpg)' }}> {/* Replace with actual image */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
          Everything you need, all in one place, for your dream adventure in the Philippines (and the best prices, too)
        </h1>
        <p className="text-base md:text-xl lg:text-2xl max-w-4xl mb-8 drop-shadow-md">
          As the largest travel marketplace in the Philippines, we search over 19,000 travel service providers to find you the best deals at the best prices—guaranteed
        </p>
        {/* Search Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select destination</label>
              <input type="text" placeholder="Starting location / Destination" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select dates</label>
              <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Add travelers</label>
              <input type="number" defaultValue={1} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <button className="md:col-span-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Search Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;