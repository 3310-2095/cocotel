"use client";
import React from "react";
import Image from "next/image";

const TopThingsToDo = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-black">
          {data.title}
        </h2>
        <p className="text-center mb-8 text-gray-500">{data.subtitle}</p>

        {/* Tour Places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {data.tours.map((tour, index) => (
            <div key={index} className="relative group">
              <Image
                src={tour.src}
                alt={tour.title}
                width={420}
                height={200}
                className="rounded-lg object-cover w-full h-[200px]"
              />
              <p className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-2 font-bold">
                {tour.title}
              </p>
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

export default TopThingsToDo;
