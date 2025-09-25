// components/TopThingsToDo.js
import React from 'react';

const TopThingsToDo = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-600">Top things to do in the Philippines</h2>
        <p className="text-center mb-8">Discover all the adventures you can experience in the Philippines</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="/palawan.jpg" alt="Palawan Island Hopping" className="w-full h-32 object-cover rounded-md mb-2" />
            <h3 className="text-sm font-medium">Palawan Island Hopping</h3>
          </div>
          {/* Add more items similarly */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="/whale-shark.jpg" alt="Whale Shark Watching" className="w-full h-32 object-cover rounded-md mb-2" />
            <h3 className="text-sm font-medium">Whale Shark Watching</h3>
          </div>
          {/* Continue for others: Boracay, Underground River, Chocolate Hills, Intramuros, Siargao */}
        </div>
      </div>
    </section>
  );
};
export default TopThingsToDo;