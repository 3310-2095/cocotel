"use client";

import React from 'react';
import Image from "next/image";
import WOWWrapper from "@/components/WOWWrapper";

const Page = () => {
  return (
    <WOWWrapper>
      <section>
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat text-white w-full mx-auto px-4 sm:px-6 lg:px-8 wow animate__animated animate__fadeInUp"
          style={{ backgroundImage: "url('/events/event_banner.png')" }}
          data-wow-duration="1.2s"
          data-wow-delay="0.2s"
        >
          <div className="relative mx-auto py-10 sm:py-16 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold wow animate__animated animate__fadeInDown" data-wow-delay="0.4s">
              DISCOVER YOUR PERFECT EVENTS
            </h1>
            <h2 className="text-2xl font-bold mt-4 wow animate__animated animate__fadeInDown" data-wow-delay="0.6s">
              Where Every Occasion Matters at Cocotel
            </h2>
            <p className="text-[16px] mt-2 sm:mt-6 max-w-2xl mx-auto leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay="0.8s">
              Your special moments deserve the best. At Cocotel, we offer stunning venues and tailored packages for all events—grand gatherings, intimate weddings, corporate galas, and family reunions. Our elegant and versatile venues ensure the perfect setting for any occasion. With our expert assistance, you'll create unforgettable memories. Celebrate every occasion at Cocotel.
            </p>
            <button className="mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-base wow animate__animated animate__zoomIn" data-wow-delay="1s">
              I want to see more
            </button>
          </div>
        </div>

        {/* Events Section */}
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-[38px] font-normal font-[MontserratSemiBold] md:text-left mt-10 text-[#212529] wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            Events
          </h1>

          {[1].map((_, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mt-20 wow animate__animated animate__fadeInUp"
              data-wow-delay={`${0.3 + i * 0.2}s`}
              data-wow-duration="1s"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[510px]">
                <Image
                  src="/events/event_1.png"
                  alt="Vision Mission"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 bg-green-50 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-gray-600 text-xl uppercase tracking-wide font-semibold wow animate__animated animate__fadeInLeft" data-wow-delay={`${0.4 + i * 0.2}s`}>
                    Corporate Sales and Events
                  </h3>
                  <h2 className="text-gray-900 text-4xl mt-4 font-semibold wow animate__animated animate__fadeInLeft" data-wow-delay={`${0.5 + i * 0.2}s`}>
                    Beyond Meetings Luxurious Corporate Experiences with Cocotel
                  </h2>
                  <p className="text-black text-base mt-6 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay={`${0.6 + i * 0.2}s`}>
                    Seal the Deal in Style. Making an exceptional impression is essential,
                    giving you the ideal setting for business dealings. We offer conference
                    facilities and diverse venue options. Our comprehensive accommodation
                    packages complement your event needs.
                  </p>
                </div>
                <div className="flex mt-8">
                  <button className="sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-base wow animate__animated animate__fadeInUp" data-wow-delay={`${0.7 + i * 0.2}s`}>
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </WOWWrapper>
  );
};

export default Page;
