'use client';

import { useState, useEffect } from "react";
import HotelCard from "@/components/homeComponnent/HotelCard";
import { getFeaturedHotels, Hotel } from "@/lib/api";
// import WowWrapper from '@/components/WOWWrapper';
import dynamic from "next/dynamic";

interface HotelListProps {
  initialHotels: Hotel[];
  provinces: string[];
}

export default function HotelList({ initialHotels, provinces }: HotelListProps) {
  const WOWWrapper = dynamic(() => import("@/components/WOWWrapper"), {
      ssr: false,
    });
  const [hotels, setHotels] = useState<Hotel[]>(initialHotels);
  const [selectedProvince, setSelectedProvince] = useState('Batangas');

  useEffect(() => {
    async function fetchHotels() {
      const data = await getFeaturedHotels(selectedProvince);
      setHotels(data);
    }
    fetchHotels();
  }, [selectedProvince]);

  return (
    <WOWWrapper>
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        {provinces.map((province) => (
          <button
            key={province}
            onClick={() => setSelectedProvince(province)}
            className={`px-3 py-1 rounded-xl ${
              selectedProvince === province
                ? "bg-green-400 text-white"
                : "bg-white border text-gray-700"
            }`}
          >
            {province}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel,index) => (
         <div
          key={hotel.id}
          className="wow animate__animated animate__fadeInUp"
          data-wow-delay={`${index * 0.3}s`}
        >
          <HotelCard hotel={hotel} />
        </div>
        ))}
      </div>
    </div>
    </WOWWrapper>
  );
}