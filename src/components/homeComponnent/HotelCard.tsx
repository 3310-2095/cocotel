import Image from "next/image";
import Link from "next/link";

interface Hotel {
  id: string;
  name: string;
  slug: string;
  location: string;
  price: number;
  discountPrice: number;
  image: string;
  province: string;
  rating: number;
  reviews: number;
  // Add sectionData to the Hotel interface
  sectionData?: {
    Company?: {
      slug?: string;
      // Add other properties from Company if they are directly used in HotelCard
      // e.g., name, primary_image, etc., if they are not already mapped to top-level Hotel properties
    };
  };
}

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link
      // Safely access slug, providing a fallback if sectionData or Company is undefined
      href={`/hotel/${hotel.sectionData?.Company?.slug || hotel.slug}`}
      data-id={`${hotel.id}`}
      className="block rounded-2xl overflow-hidden hotel-card transition bg-white"
    >
      <div className="relative">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={400}
          height={200}
          className="w-full h-60 object-cover"
        />
        <span className="absolute bottom-[-12px] right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          New Hotels
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-green-600 text-xs w-1/2">{hotel.location}</p>
          <div className="flex items-center mt-1">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src={
                    i < Math.floor(hotel.rating)
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
            <span className="text-gray-500 text-sm ml-1">
              {hotel.rating} ({hotel.reviews} Rating)
            </span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mt-1">{hotel.name}</h3>

        <p className="text-gray-500 text-sm line-through mt-1">
          ${hotel.price} Per Night
        </p>
        <p className="text-red-500 font-semibold text-2xl mt-1 animate-slide-up">
          ${hotel.discountPrice} Per Night
        </p>
      </div>
    </Link>
  );
}