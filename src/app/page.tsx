
import SearchBar from "@/components/homeComponnent/SearchBar";
import Image from "next/image";
import { getFeaturedHotels, getProvinces } from "@/lib/api";

import React from 'react';

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TopThingsToDo from '@/components/TopThingsToDo';

export default async function Home() {
  return (
    <div>
      <Head>
        <title>Guide to the Philippines</title>
        <meta name="description" content="Travel marketplace for the Philippines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <TopThingsToDo />
      {/* Add footer or other sections as needed */}
    </div>

// Server Component to fetch initial data
async function getInitialHotels() {
  const hotels = await getFeaturedHotels(); // Fetch all hotels initially
  return hotels;
}

//fetch restricted province data
async function getProvinceList() {
  return await getProvinces();
}

export default async function Home() {
  //const initialHotels = await getInitialHotels();
  const [initialHotels, provinces] = await Promise.all([
    getInitialHotels(),
    getProvinceList(),
  ]);
  return (
    <>
      {/* Hero Section */}
      {/* <section className="container mx-auto mt-4 p-4  py-5 px-2 flex"> */}
      <section className="max-w-7xl mx-auto mt-4 p-4 py-5 px-2 flex">
        <div className="home-main-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 home-main-section">
            <div className="escape-the-ordinary-main">
              <h1 className="text-4xl lg:text-[64px] leading-[64px] font-semibold wow animate__animated animate__fadeInUp">
                Just<br></br> Unpacked!
              </h1>
              <p
                className="text-xl mt-8 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1s"
              >
                Just unpacked! Welcome to our new look website. Discover the
                Cocotel Collection, featuring 4-5 star hotels and resorts. Each
                property is meticulously selected for explorers, business
                travellers&apos;, and leisure seekers seeking unique
                experiences. With over 300+ hotels, book directly for the best
                pricing and exclusive deals!
              </p>
            </div>
            <div className="escape-the-ordinary-img">
              <Image
                src="/images/Caza-Property.jpg"
                alt="Caza Property"
                width={800}
                height={500}
                className="rounded-md object-cover"
                priority={true}
              />
            </div>
          </div>
          <SearchBar />
        </div>
      </section>
      

      {/* Featured Hotels Section */}
      {/* <section className="container p-4 mx-auto mt-0 lg:mt-10 "> */}
      <section className="max-w-7xl p-4 mx-auto mt-0 lg:mt-10">
        <h2 className="text-[40px] font-semibold text-start mb-5 wow animate__animated animate__fadeInUp">
          Featured or Top visited properties
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <p
            className="text-base wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
            data-wow-duration="1s"
          >
            &quot;Discover #CocotelCollections and exceptional stays in the
            Philippines.
            <br />
            Explore Batangas, Cebu, and more top destinations&quot;
          </p>
          <div className="hidden lg:block">
            <button className="btn-viewall-green">View All</button>
          </div>
        </div>
        <HotelList initialHotels={initialHotels} provinces={provinces} />
      </section>

      <section className="container p-4 mx-auto mt-20 mb-10 max-w-[80rem]">
        <DiscoverNew />
      </section>

      <section className="container p-4 mx-auto mt-20 mb-10 max-w-[80rem]">
        <UserReview />
      </section>
      <section className="container p-4 mx-auto mt-20 mb-10 max-w-[80rem]">
        <DiscoverSection />
      </section>
    </>

  );
}