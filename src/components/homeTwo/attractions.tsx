import React from "react";
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

const TopThingsToDo = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-400">
          Top attractions in the Philippines
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Discover all the best places you can visit in the Philippines
        </p>

        {/* Eight places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tours.map((tour, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              {/* Number Badge */}
              <div className="absolute top-0 left-0 bg-[#FF6D6D] text-white rounded-br-2xl w-[55px] h-[55px] flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>

              {/* Image */}
              <Image
                src={tour.src}
                alt={tour.title}
                width={321}
                height={199}
                className="object-cover w-full h-[199px]"
              />

              {/* Title inside image */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 text-center">
                <p className="text-white font-bold text-sm md:text-base">
                  {tour.title}
                </p>
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

export default TopThingsToDo;
