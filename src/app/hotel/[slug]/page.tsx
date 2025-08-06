import Image from "next/image";
import { notFound } from "next/navigation";
import { apiGetData } from "@/lib/api";

// Define an interface for the raw data coming from the API
interface RawHotelData {
  _id: string;
  sectionData: {
    Company: {
      name?: string;
      slug?: string;
      region?: string;
      price?: number;
      discountPrice?: number;
      primary_image?: string;
      province?: string;
      rating?: number;
      reviews?: number;
      description?: string;
      amenities?: string;
    };
  };
}

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
  description?: string;
  amenities?: string[];
}

// Define the component props, satisfying the type checker's demand for a Promise
interface HotelPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function fetchHotel(slug: string): Promise<Hotel | null> {
  try {
    const data = await apiGetData({
      dbName: "hanahotelnew",
      collectionName: "company",
      query: { "sectionData.Company.slug": slug },
    });

    if (!data || data.length === 0) {
      console.log("No hotel found for slug: ", slug);
      return null;
    }

    const hotel = data[0] as RawHotelData;
    const hotelData = hotel.sectionData.Company;

    const amenitiesArray =
      typeof hotelData.amenities === "string"
        ? hotelData.amenities.split(",").map((item) => item.trim())
        : [];

    return {
      id: hotel._id.toString(),
      name: hotelData.name || "Unknown Hotel",
      slug: hotelData.slug || slug,
      location: hotelData.region || "Unknown Location",
      price: hotelData.price || 0,
      discountPrice: hotelData.discountPrice || 0,
      image: hotelData.primary_image || "/images/fallback-image.jpg",
      province: hotelData.province || "Unknown Province",
      rating: hotelData.rating || 0,
      reviews: hotelData.reviews || 0,
      description: hotelData.description,
      amenities: amenitiesArray,
    };
  } catch (err) {
    console.error("Error fetching hotel:", err);
    return null;
  }
}

// Await the params Promise to get the actual slug object
export default async function HotelPage({ params }: HotelPageProps) {
  const { slug } = await params;

  const hotel = await fetchHotel(slug);
  console.log(hotel);

  if (!hotel) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={hotel.image}
            alt={hotel.name}
            width={800}
            height={400}
            className="w-full h-96 object-cover"
            priority
          />
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <p className="text-gray-600 mt-2">
            {hotel.location}, {hotel.province}
          </p>

          <div className="flex items-center mt-2">
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
                  width={16}
                  height={16}
                />
              ))}
            </span>
            <span className="text-gray-500 text-sm ml-2">
              {hotel.rating} ({hotel.reviews} Reviews)
            </span>
          </div>

          <div className="mt-4">
            <p className="text-gray-500 text-sm line-through">
              ${hotel.price} Per Night
            </p>
            <p className="text-red-500 font-semibold text-2xl">
              ${hotel.discountPrice} Per Night
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600 mt-2">
              {hotel.description || "No description available."}
            </p>
          </div>

          {hotel.amenities && hotel.amenities.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Amenities</h2>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {hotel.amenities.map((amenity, index) => (
                  <li key={index} className="text-gray-600">
                    • {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}