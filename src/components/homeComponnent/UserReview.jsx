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
    title: "Rold and Roub Suite by Cocotel ",
    address1: " Puerto Galera",
    address2: "Oriental Mindoro",
    country: "Philippines",
    image: "https://img.cocotel.com/frontend/hotels/278/casa-marco-suites-g1867.jpg",
    description: `Welcome to Casa Marco Suites, our latest #CocotelCollections addition!
      Nestled in a serene location, this boutique hotel combines elegance and comfort
      with modern amenities. Enjoy the tranquil garden, refreshing pool, and delicious
      in-house dining. Perfect for a romantic getaway or a relaxing retreat.`,
  },
  {
    id: 2,
    title: "Club Monet Beachfront Resort by Cocotel ",
    address1: " Cabangan",
    address2: "",
    country: "Philippines",
    image: "https://img.cocotel.com/frontend/hotels/275/yello--hotel-cebu-powered-by-cocotel-g1851.jpg",
    description: `It is a Hello from Yello! Hotel, our vibrant new spot in Cebu!
      This lively hotel features a contemporary design and colourful decor.
      Enjoy modern comforts, stunning city views from the rooftop bar, and easy access
      to local attractions. Ideal for both business and leisure travellers.`,
  },
];

const UserReview = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center bg-white shadow-md rounded-lg overflow-hidden">
              
              <div className="p-8 h-full col-span-1 lg:col-span-2">
                <h2 className="text-4xl font-medium text-black mb-4">{hotel.title}</h2>
                <div className="flex items-center mt-1">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src={
                    i < Math.floor(5)
                      ? "/images/full-star.svg"
                      : "/images/half-star.svg"
                  }
                  alt="star"
                  className="object-cover"
                  width={14}
                  height={14}
                  priority
                />
              ))}
            </span>
            <span className="text-gray-500 text-sm ml-5">
              {hotel.address1}, {hotel.address2}, {hotel.country}
            </span>
          </div>
                <p className="text-gray-700 mt-4 whitespace-pre-line max-h-30 overflow-y-scroll">{hotel.description}</p>
                <div className="mt-5 flex justify-start items-center">
                    
                    <Image
                        src="https://www.cocotel.com/frontend/images/review.png"
                        alt="user"
                        width={58}
                        height={58}
                        className=" object-cover"
                    />
                    <div>
                    <p className="text-2xl font-bold">Patricia Jane Francisco</p>
                    <p className="text-base font-normal">2 months ago</p>
                    </div>
                </div>
              </div>
              <div className="col-span-1">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  width={600}
                  height={400}
                  className="rounded-tl-none rounded-bl-none rounded-tr-[20px] rounded-br-[20px] object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserReview;
