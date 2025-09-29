import React from 'react';
import Head from 'next/head';
import Header from '@/components/homeTwo/Header';
import Hero from '@/components/homeTwo/Hero';
import Features from '@/components/homeTwo/Features';
import TopThingsToDo from '@/components/homeTwo/TopThingsToDo';
import WhyUs from '@/components/homeTwo/whyus';
import Attractions from '@/components/homeTwo/attractions';
import Photos from '@/components/homeTwo/photos';

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
            <TopThingsToDo />
      <Features />
      <WhyUs />
      <Attractions />
      <Photos />
    </div>
  );
}