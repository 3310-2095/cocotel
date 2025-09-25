
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
  );
}