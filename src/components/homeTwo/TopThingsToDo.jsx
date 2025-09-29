// components/TopThingsToDo.js
import React from "react";
import Image from "next/image";

const tours = [
  { src: "/Top things/group-travel-4.jpg", title: "Philippines Vacation Packages" },
  { src: "/Top things/resized-shutterstock-1506000698-4.jpg", title: "Palawan Island Hopping" },
  { src: "/Top things/resized-shutterstock-399071341.jpg", title: "Whale Shark Watching" },
  { src: "/Top things/resized-shutterstock-1478003996-1.jpg", title: "Boracay Island Activities" },
  { src: "/Top things/resized-shutterstock-1753609961-1.jpg", title: "Visit the Underground River" },
  { src: "/Top things/shutterstock-1062273197.jpg", title: "See the Chocolate Hills" },
  { src: "/Top things/shutterstock-1384933283.jpg", title: "Explore Intramuros" },
  { src: "/Top things/naked-island-siargao.jpg", title: "Siargao Tours and Activities" },
];

const TopThingsToDo = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-400">
          Top things to do in the Philippines
        </h2>
        <p className="text-center mb-8">
          Discover all the adventures you can experience in the Philippines
        </p>

        {/* Tour Places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-6">
          {tours.map((tour, index) => (
            <div key={index} className="relative group">
              <Image
                src={tour.src}
                alt={tour.title}
                width={420}
                height={200}
                className="rounded-lg object-cover w-full h-[200px]"
              />
              {/* Overlay text */}
              <p className="absolute bottom-0 left-0 w-full text-white text-center py-2 font-bold ">
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
