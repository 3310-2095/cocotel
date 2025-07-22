
import HotelCard from "@/components/homeComponnent/HotelCard";
import SearchBar from "@/components/homeComponnent/SearchBar";
import Image from "next/image";
import { getFeaturedHotels, Hotel } from "@/lib/api";
import HotelList from "@/components/homeComponnent/HotelList"; 
import DiscoverSection from "@/components/homeComponnent/DiscoverSection"
import WowWrapper from '@/components/WOWWrapper';


const provinces = [
  "Batangas",
  "Oriental Mindoro",
  "Cebu",
  "Siargao",
  "Palawan",
  "Laguna",
  "Metro Manila",
];

// Server Component to fetch initial data
async function getInitialHotels() {
  const hotels = await getFeaturedHotels(); // Fetch all hotels initially
  return hotels;
}

export default async function Home() {
  const initialHotels = await getInitialHotels();


  return (
    <>

      {/* Hero Section */}
      <section className="container mx-auto mt-6">
        <div className="home-main-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 home-main-section">
            <div className="escape-the-ordinary-main">
              <WowWrapper>
              <h1 className="text-5xl lg:text-7xl font-semibold animate__animated animate__fadeInUp">
                Just Unpacked!
              </h1>
              <p className="text-xl mt-8 animate__animated animate__fadeInUp wow" data-wow-delay="0.3s"
              data-wow-duration="1s">
                Just unpacked! Welcome to our new look website. Discover the
                Cocotel Collection, featuring 4-5 star hotels and resorts. Each
                property is meticulously selected for explorers, business
                travellers, and leisure seekers seeking unique experiences. With
                over 300+ hotels, book directly for the best pricing and
                exclusive deals!
              </p>
              </WowWrapper>
            </div>
            <div className="escape-the-ordinary-img">
              <Image
                src="/images/Caza-Property.jpg"
                alt="Caza Property"
                width={800}
                height={500}
                className="rounded-md object-cover"
              />
            </div>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="container mx-auto mt-0 lg:mt-32">
        <WowWrapper>
        <h2 className="text-[40px] font-semibold text-start mb-5 animate__animated animate__fadeInUp wow">
          Our most visited hotels and resorts
        </h2>
        <div className="flex justify-between items-center mb-5 ">
          <p className="text-base animate__animated animate__fadeInUp wow" data-wow-delay="0.5s">
            "Discover #CocotelCollections and exceptional stays in the
            Philippines.<br />
            Explore Batangas, Cebu, and more top destinations"
          </p>
          <button className="text-base text-green-600 bg-green-200 py-2 px-6 cursor-pointer rounded">
            View All
          </button>
        </div>
        </WowWrapper>

        <HotelList initialHotels={initialHotels} provinces={provinces} />
      </section>
      <section className="container mx-auto mt-5">
        <DiscoverSection></DiscoverSection>
      </section>
    </>
  );
}