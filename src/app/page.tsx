

import React from 'react';
import Image from "next/image";
import Head from 'next/head';
import Header from '@/components/homeTwo/Header';
import Hero from '@/components/homeTwo/Hero';
import Features from '@/components/homeTwo/Features';
import TopThingsToDo from '@/components/homeTwo/TopThingsToDo';

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
 );
}

