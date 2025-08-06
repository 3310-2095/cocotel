'use client';

import { useState, useEffect } from "react";
import HotelCard from "@/components/homeComponnent/HotelCard";
import { getFeaturedHotels, Hotel } from "@/lib/api";

interface HotelListProps {
  initialHotels: Hotel[];
  provinces: string[];
}

export default function HotelList({ initialHotels, provinces }: HotelListProps) {
  const [hotels, setHotels] = useState<Hotel[]>(
    initialHotels.filter((hotel) => hotel.province === 'Batangas')
  );
  const [selectedProvince, setSelectedProvince] = useState('Batangas');

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getFeaturedHotels(selectedProvince);
        // Filter hotels by selectedProvince on the client side
        setHotels(data.filter((hotel) => hotel.province === selectedProvince));
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotels([]); // Fallback to empty array on error
      }
    }
    fetchHotels();
  }, [selectedProvince]);

  return (
    
      <div>
        <div className="flex flex-wrap gap-3 mb-6">
          {provinces.map((province) => (
            <button
              key={province}
              onClick={() => setSelectedProvince(province)}
              className={`px-3 py-1 rounded-xl ${
                selectedProvince === province
                  ? "bg-green-400 text-white"
                  : "bg-white border border-gray-500 text-gray-700"
              }`}
            >
              {province}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.length > 0 ? (
            hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <HotelCard hotel={hotel} />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hotels found for {selectedProvince}</p>
          )}
        </div>
      </div>
    
  );
}