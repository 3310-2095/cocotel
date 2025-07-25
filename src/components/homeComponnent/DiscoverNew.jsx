"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

 const hotels = [
  {
    id: 1,
    title: "Casa Marco Suites",
    image: "https://img.cocotel.com/frontend/hotels/278/casa-marco-suites-g1867.jpg",
    description: `Welcome to Casa Marco Suites, our latest #CocotelCollections addition!
      Nestled in a serene location, this boutique hotel combines elegance and comfort
      with modern amenities. Enjoy the tranquil garden, refreshing pool, and delicious
      in-house dining. Perfect for a romantic getaway or a relaxing retreat.`,
  },
  {
    id: 2,
    title: "Yello! Hotel",
    image: "https://img.cocotel.com/frontend/hotels/275/yello--hotel-cebu-powered-by-cocotel-g1851.jpg",
    description: `It is a Hello from Yello! Hotel, our vibrant new spot in Cebu!
      This lively hotel features a contemporary design and colourful decor.
      Enjoy modern comforts, stunning city views from the rooftop bar, and easy access
      to local attractions. Ideal for both business and leisure travellers.`,
  },
];

const DiscoverNew = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
      >
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white shadow-md rounded-lg overflow-hidden">
              <div>
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  width={600}
                  height={400}
                  className="rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none object-cover w-full h-full"
                />
              </div>
              <div className="p-8 h-full">
                <p className="text-xl text-gray-600 mb-3">Discover Something New</p>
                <h2 className="text-3xl font-bold text-black mb-4">{hotel.title}</h2>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{hotel.description}</p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                  Explore More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscoverNew;
