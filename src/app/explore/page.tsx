// page.tsx
"use client";

import React, { useState, useEffect, JSX } from "react";
import { DateRange } from "react-date-range"; // Import Range type
import Image from "next/image";
import { addDays, format } from "date-fns";
import {
  FiSearch,
  FiCalendar,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { getFeaturedHotels, Hotel } from "@/lib/api";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface ExtendedHotel extends Hotel {
  sectionData?: {
    Company?: {
      name?: string;
      city?: string;
      province?: string;
      country?: string;
      description?: string;
      gallery_image?: string;
      amenities?: string;
      promo_active?: number;
      price?: number;
      discountPrice?: number;
      primary_image?: string;
    };
  };
}

const ImageWithErrorBoundary: React.FC<{
  src: string;
  alt: string;
  layout: "fill" | "responsive";
  objectFit: "cover" | "contain";
  className?: string;
}> = ({ src, alt, layout, objectFit, className }) => {
  const [imageSrc, setImageSrc] = useState<string>(
    "/images/fallback-image.jpg"
  );
  const [hasError, setHasError] = useState(false);
  const fallbackImage = "/images/fallback-image.jpg";

  useEffect(() => {
    setHasError(false);
    console.log(`Attempting to load image: ${src}`);
    if (
      !src ||
      typeof src !== "string" ||
      src.trim() === "" ||
      !src.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/) ||
      src === "undefined" ||
      src === "null"
    ) {
      console.warn(`Invalid image URL: ${src}, using fallback`);
      setImageSrc(fallbackImage);
      setHasError(true);
    } else {
      setImageSrc(src.trim());
    }
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image: ${imageSrc}, switching to fallback`);
      setImageSrc(fallbackImage);
      setHasError(true);
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
      unoptimized
      onError={handleError}
      onLoad={() => console.log(`Image loaded successfully: ${imageSrc}`)}
    />
  );
};

const HotelCard: React.FC<{ province?: string }> = ({ province }) => {
  const [hotels, setHotels] = useState<ExtendedHotel[]>([]);
  const [currentImage, setCurrentImage] = useState<{ [key: string]: number }>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5;

  // Search bar states
  const [location, setLocation] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [adults, setAdults] = useState(3);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  // Corrected type for DateRange state
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [checkIn, setCheckIn] = useState(format(new Date(), "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(
    format(addDays(new Date(), 1), "yyyy-MM-dd")
  );

  // Sample location data
  const locations = [
    "New York, USA",
    "London, UK",
    "Paris, France",
    "Tokyo, Japan",
    "Sydney, Australia",
    "Dubai, UAE",
    "Singapore, Singapore",
    "Mumbai, India",
    "Los Angeles, USA",
    "Rome, Italy",
  ];

  // Filter locations based on input
  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  useEffect(() => {
    setCheckIn(format(state[0].startDate, "yyyy-MM-dd"));
    setCheckOut(format(state[0].endDate, "yyyy-MM-dd"));
  }, [state]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const fetched = await getFeaturedHotels(
          province || location.split(",")[1]?.trim()
        );
        console.log("Fetched hotels:", JSON.stringify(fetched, null, 2));
        setHotels(fetched);
        const initState = fetched.reduce((acc, h) => {
          acc[h.id] = 0;
          return acc;
        }, {} as { [key: string]: number });
        setCurrentImage(initState);
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Failed to load hotels.");
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [province, location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, adults, rooms });
  };

  const handleNext = (id: string, images: string[]) =>
    setCurrentImage((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % images.length,
    }));

  const handlePrev = (id: string, images: string[]) =>
    setCurrentImage((prev) => ({
      ...prev,
      [id]: prev[id] === 0 ? images.length - 1 : prev[id] - 1,
    }));

  const getGalleryImages = (g?: string, primary?: string) => {
    const images: string[] = [];
    if (
      primary &&
      typeof primary === "string" &&
      primary.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/)
    ) {
      images.push(primary.trim());
    }
    if (g && typeof g === "string") {
      images.push(
        ...g
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/))
      );
    }
    console.log(`Gallery images:`, images);
    return images.length > 0 ? images : ["/images/fallback-image.jpg"];
  };

  const getAmenities = (a?: string) => {
    const map: Record<string, string> = {
      "12": "Swimming Pool",
      "13": "WiFi",
      "18": "Pets",
      "19": "Parking",
      "22": "Toiletries",
      "27": "Restaurant",
      "31": "Spa",
    };
    return a && typeof a === "string"
      ? a
          .split(",")
          .map((id) => map[id] || id)
          .filter(Boolean)
      : [];
  };

  const getAmenityIcon = (amenity: string) => {
    const iconMap: Record<string, string> = {
      "Swimming Pool": "/images/swimming-pool.svg",
      WiFi: "/images/wifi.svg",
      Pets: "/images/pets.svg",
      Parking: "/images/parking.svg",
      Toiletries: "/images/toiletries.svg",
      Restaurant: "/images/restaurant.svg",
      Spa: "/images/spa.svg",
    };
    return iconMap[amenity] || "/images/fallback-icon.svg";
  };

  const getDescription = (d?: string) => {
    if (!d || typeof d !== "string") return "No description available.";
    const clean = d.replace(/<[^>]+>| /g, "").trim();
    if (!clean) return "No description available.";
    return clean.length > 150
      ? clean.slice(0, clean.lastIndexOf(" ", 150)) + "..."
      : clean;
  };

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPaginationButtons = () => {
    const buttons: JSX.Element[] = [];
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
      >
        <FiChevronLeft size={20} />
      </button>
    );

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span
            key="start-ellipsis"
            className="w-10 h-10 flex items-center justify-center text-gray-700"
          >
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 shadow-sm ${
            currentPage === i
              ? "bg-blue-600 text-white border-none"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span
            key="end-ellipsis"
            className="w-10 h-10 flex items-center justify-center text-gray-700"
          >
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm"
        >
          {totalPages}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
      >
        <FiChevronRight size={20} />
      </button>
    );

    return buttons;
  };

  if (loading) return <div className="text-center p-6">Loading hotels...</div>;
  if (error) return <div className="text-center p-6 text-red-500">{error}</div>;
  if (hotels.length === 0)
    return <div className="text-center p-6">No hotels found.</div>;

  return (
    <section className="p-4 sm:p-6 max-w-[84rem] mx-auto">
      {/* Search Bar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <form
          onSubmit={handleSearch}
          className="bg-white/90 backdrop-blur-md flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4 sm:p-6 rounded-full shadow-2xl drop-shadow-xl"
        >
          {/* Location (Searchable Select) */}
          <div className="relative w-full lg:flex-1">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowLocationDropdown(true);
              }}
              onFocus={() => setShowLocationDropdown(true)}
              onBlur={() =>
                setTimeout(() => setShowLocationDropdown(false), 200)
              }
              className="text-sm text-black font-medium w-full p-2 sm:p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 pl-8 sm:pl-10 placeholder-black"
            />
            <Image
              src="/images/location.svg"
              alt="Location"
              width={14}
              height={14}
              className="object-cover absolute left-2 sm:left-3 top-2.5 sm:top-3 text-green-600"
              priority
            />
            {showLocationDropdown && filteredLocations.length > 0 && (
              <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                {filteredLocations.map((loc) => (
                  <li
                    key={loc}
                    onClick={() => {
                      setLocation(loc);
                      setShowLocationDropdown(false);
                    }}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date Range */}
          <div className="relative w-full lg:flex-1">
            <button
              type="button"
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full text-sm p-2 sm:p-3 rounded-md text-left focus:outline-none focus:ring-1 focus:ring-green-500 pl-8 sm:pl-10 relative"
            >
              <span className="text-sm text-black font-medium">
                {`${format(state[0].startDate, "dd MMM yyyy")} - ${format(
                  state[0].endDate,
                  "dd MMM yyyy"
                )}`}
              </span>
              <FiCalendar className="absolute left-2 sm:left-3 top-2.5 sm:top-3 text-green-600" />
            </button>
            {showDatePicker && (
              <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-300 rounded-md shadow-lg w-full">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) =>
                    setState([
                      {
                        startDate: item.selection.startDate || new Date(), // Provide a default or handle undefined
                        endDate:
                          item.selection.endDate || addDays(new Date(), 1), // Provide a default or handle undefined
                        key: "selection",
                      },
                    ])
                  }
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  minDate={new Date()}
                  className="p-4"
                />
              </div>
            )}
          </div>

          {/* Guests and Rooms */}
          <div className="relative w-full lg:flex-1">
            <button
              type="button"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="w-full text-sm text-black font-medium p-2 sm:p-3 rounded-md text-left focus:outline-none focus:ring-1 focus:ring-green-500 pl-8 sm:pl-10 relative"
            >
              <span className="text-gray-700">{`${adults} Adults - ${rooms} Room`}</span>
              <FiUsers className="absolute left-2 sm:left-3 top-2.5 sm:top-3 text-green-600" />
            </button>
            {showGuestsDropdown && (
              <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-300 rounded-md shadow-lg w-full min-w-[200px] sm:min-w-[240px]">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span>Adults</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                      >
                        -
                      </button>
                      <span>{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rooms</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                        className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                      >
                        -
                      </button>
                      <span>{rooms}</span>
                      <button
                        type="button"
                        onClick={() => setRooms(rooms + 1)}
                        className="w-8 h-8 bg-gray-200 text-base font-bold text-green-600 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowGuestsDropdown(false)}
                    className="w-full mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-green-500 text-white p-2 sm:p-3 rounded-full w-full lg:w-auto h-12 sm:h-[50px] px-4 sm:px-6 hover:bg-green-600 transition"
          >
            <FiSearch className="inline mr-2" /> Search
          </button>
        </form>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal font-[MontserratSemiBold] text-center md:text-left mt-4 mb-6 text-[#212529]">
        Our Hotels & Resorts
      </h1>

      {/* Hotel Cards */}
      {currentHotels.map((hotel) => {
        const images = getGalleryImages(
          hotel.sectionData?.Company?.gallery_image,
          hotel.sectionData?.Company?.primary_image
        );
        console.log(`Hotel ${hotel.name} images:`, images);
        const amenities = getAmenities(hotel.sectionData?.Company?.amenities);
        const desc = getDescription(hotel.sectionData?.Company?.description);
        const imgIndex = currentImage[hotel.id] || 0;

        return (
          <div
            key={hotel.id}
            className="bg-white w-full max-w-6xl rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex flex-col md:flex-row overflow-hidden mb-6"
          >
            <div className="relative w-full sm:w-[40%] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
              <ImageWithErrorBoundary
                src={images[imgIndex]}
                alt={hotel.name || "Hotel Image"}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
              />
              <button
                onClick={() => handlePrev(hotel.id, images)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleNext(hotel.id, images)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            <div className="w-full sm:flex-1 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {hotel.name || "Unknown Hotel"}
                </h2>
                <div className="flex items-center mt-1 flex-wrap">
                  {[...Array(Math.floor(hotel.rating || 0))].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/full-star.svg"
                      alt="Star"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                      onError={() =>
                        console.warn("Failed to load full-star.svg")
                      }
                    />
                  ))}
                  {(hotel.rating || 0) % 1 !== 0 && (
                    <Image
                      src="/images/half-star.svg"
                      alt="Half Star"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                      onError={() =>
                        console.warn("Failed to load half-star.svg")
                      }
                    />
                  )}
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">
                    {hotel.rating || "N/A"}
                  </span>
                  <span className="text-xs sm:text-sm text-green-600 ml-2">
                    {hotel.location || "Unknown Location"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 mt-2 sm:mt-3">
                  {desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between mt-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
                    Amenities
                  </h3>
                  <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
                    {amenities.length > 0 ? (
                      amenities.map((a, i) => (
                        <div key={i} className="relative group">
                          <Image
                            src={getAmenityIcon(a)}
                            alt={a}
                            width={24}
                            height={24}
                            className="sm:w-9 sm:h-9 hover:scale-110 transition-transform duration-200"
                            onError={() =>
                              console.warn(`Failed to load amenity icon: ${a}`)
                            }
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                            {a}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="text-xs sm:text-sm text-gray-600">
                        No amenities available
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-left sm:text-right mt-4 sm:mt-0">
                  {hotel.sectionData?.Company?.promo_active === 1 && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Flash Sale
                    </span>
                  )}
                  <div className="flex justify-start sm:justify-end mt-1">
                    <div className="text-sm sm:text-lg text-gray-400 line-through">
                      $ {hotel.price || 0}
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-yellow-500 ml-1">
                      {hotel.price && hotel.discountPrice
                        ? Math.round(
                            (1 - hotel.discountPrice / hotel.price) * 100
                          )
                        : 0}
                      %
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                    $ {hotel.discountPrice || 0}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2">
        {getPaginationButtons()}
      </div>
    </section>
  );
};

// export default HotelCard;
const ExplorePage = () => {
  return <HotelCard />;
};

export default ExplorePage;