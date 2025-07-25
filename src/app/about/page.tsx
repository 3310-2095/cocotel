"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import WOW from "wowjs";

import "animate.css";

const AboutPage = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white w-full mx-auto px-4 sm:px-6 lg:px-8 wow animate__animated animate__fadeInUp"
        style={{ backgroundImage: "url('/about/about-banner-1.png')" }}
        data-wow-duration="1s"
      >
        <div className="relative mx-auto py-10 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            ABOUT US
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
            Cocotel is an online hotel management company, Southeast Asia's leading one-stop solutions for independent hotels and resorts, offering innovative e-commerce and property management solutions that increase revenue by at least 30% with zero upfront cost. Our network spans over 300+ properties, where we set industry standards and use technology to enhance hospitality and tourism.
          </p>
          <button className="mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-base wow animate__animated animate__fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
            I want to know more
          </button>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <div className="w-full sm:w-1/2 wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
            <Image
              src="/about/about_v_m.png"
              alt="Vision Mission"
              width={800}
              height={592}
              className="w-full h-auto sm:h-[592px] object-cover rounded-[12px]"
              priority
            />
          </div>
          <div className="w-full sm:w-1/2 space-y-6 sm:space-y-8 wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal font-[MontserratSemibold] mb-2 sm:mb-4 wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                VISION
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] font-normal font-[Montserrat] leading-relaxed wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1s">
                At Cocotel, our vision is to establish ourselves as the premier one-stop solution for independent hotels and resorts, revolutionizing e-commerce in Southeast Asia. We are committed to expanding our partnerships and reach across the Asia Pacific region, setting unprecedented service standards, and harnessing technology to make a positive impact on the hospitality and tourism industries.
              </p>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal font-[MontserratSemibold] mb-2 sm:mb-4 wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1s">
                MISSION
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] font-normal font-[Montserrat] leading-relaxed wow animate__animated animate__fadeInLeft" data-wow-delay="0.7s" data-wow-duration="1s">
                Cocotel is dedicated to delivering top-notch service through innovative technology and comprehensive online solutions. Our mission is to lead the hotel management sector in Southeast Asia, establishing Cocotel as the premier online management company and building a sustainable business. By fostering continuous improvement and nurturing robust relationships with our stakeholders, we aim to optimize the hospitality experience, pursue excellence, and achieve sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Hotel Ecommerce Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white w-full mx-auto px-4 sm:px-6 lg:px-8 wow animate__animated animate__fadeInUp"
        style={{ backgroundImage: "url('/about/about-banner-1.png')" }}
        data-wow-duration="1s"
      >
        <div className="relative mx-auto py-10 sm:py-16 md:py-20 text-center h-auto sm:h-[756px]">
          <div className="mb-6 sm:mb-8 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <Image
              src="/about/cocotel-vertical-logo.png"
              alt="Cocotel Logo"
              width={160}
              height={160}
              className="mx-auto"
              priority
            />
          </div>
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
            The Future of Hotel Ecommerce
          </h3>
          <h4 className="text-xs sm:text-base md:text-lg mb-4 sm:mb-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
            REVolutionizing Independent Hotels and Resorts Digital Sales
          </h4>
          <div className="flex justify-center mb-6 sm:mb-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s" data-wow-duration="1s">
            <Image
              src="/about/cocotel-progress-bar.png"
              alt="Progress Bar"
              width={300}
              height={30}
              className="object-contain sm:w-[400px] sm:h-[40px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-6 sm:mt-20 px-4 sm:px-20">
            {["CHS.png", "PoweredBy1.png", "IMG_0919C.png"].map((img, i) => (
              <Image
                key={i}
                src={`/about/${img}`}
                alt={["Cocotel Hospitality Solutions", "Powered By Cocotel", "Cocotel Bedbank"][i]}
                width={120}
                height={40}
                className="object-contain sm:w-[180px] sm:h-[60px] wow animate__animated animate__fadeInUp"
                data-wow-delay={`${0.9 + i * 0.2}s`}
                data-wow-duration="1s"
                priority
              />
            ))}
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 text-xs sm:text-sm text-right max-w-[450px] wow animate__animated animate__fadeInUp" data-wow-delay="1.5s" data-wow-duration="1s">
            <p>
              All content, including images, text, and graphics, is the property of Cocotel International Inc and is protected by copyright and intellectual property laws.
              <br />
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </div>
        </div>
      </section>

      {/* Cocotel In Numbers Section */}
      <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            Cocotel In Numbers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { img: "cocotel-properties.png", value: "300+", label: "Properties" },
              { img: "rooms.png", value: "10000+", label: "Rooms" },
              { img: "locations.png", value: "60+", label: "Locations" },
              { img: "contries.png", value: "3+", label: "Countries" },
              { img: "IMG_0919C.png", value: "PHP 2 Billion", label: "Sales Generated Online" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105 wow animate__animated animate__fadeInUp"
                data-wow-delay={`${i * 0.2}s`}
                data-wow-duration="1s"
              >
                <Image
                  src={`/about/${item.img}`}
                  alt={item.label}
                  width={180}
                  height={130}
                  className="object-contain mx-auto"
                />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mt-2 sm:mt-4 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.2}s`} data-wow-duration="1s">
                  {item.value}
                </h1>
                <h3 className="text-base sm:text-lg text-gray-600 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.4}s`} data-wow-duration="1s">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 w-full px-4 py-6 sm:py-10">
            <div className="w-full sm:w-1/2 space-y-4 sm:space-y-6 text-left wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-[MontserratSemibold] font-normal wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                COCOTEL STORY
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] font-[Montserrat] font-normal wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1s">
                Ever wondered how Cocotel was formed?
              </p>
              <p className="text-base sm:text-lg md:text-[20px] font-[Montserrat] font-normal leading-relaxed wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1s">
                Was formed in December 2018 by Rafael Jouwena and Reginald Go. Inspired by a business disruption in the budget hotel industry, they applied the concept in the Philippines, focusing on local resorts and getaways. Incorporated in 2019, they signed their first 5 hotel clients in Boracay. Despite the challenges posed by the pandemic, Cocotel grew from 5 to 26 clients by November 2019. Their innovative approach, including the 'Cocotel Vibe' service, and participation in the Ideaspace Accelerator program, enabled them to sustainably expand and refine their operations. Today, Cocotel boasts 300+ hotels and resorts across the Philippines, driven by their business model and talented hospitality professionals.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <Image
                src="/about/cocotel_story.png"
                alt="Cocotel Story"
                width={499}
                height={546}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce World Section */}
      <section
        className="w-full h-[850px] sm:h-[700px] md:h-[600px] lg:h-[850px] bg-cover bg-center text-white px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10 wow animate__animated animate__fadeInUp"
        style={{ backgroundImage: "url('https://www.cocotel.com/frontend/images/e-commerce-world.png')" }}
        data-wow-duration="1s"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-left">
                <h4 className="text-sm sm:text-lg md:text-xl font-medium wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                  Understanding The Hotel
                </h4>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                  Ecommerce World
                </h2>
              </div>
              <div>
                <Image
                  src="/about/cocotel-vertical-logo.png"
                  alt="Cocotel Logo"
                  width={120}
                  height={120}
                  className="mx-auto sm:mx-0 w-auto h-20 sm:h-24 md:h-32 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1s"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-10">
            <div className="max-w-xs sm:max-w-md md:max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed wow animate__animated animate__fadeInUp" data-wow-delay="0.7s" data-wow-duration="1s">
              <p>
                Struggling with low revenue and low occupancy rates? With Cocotel, your hotel can rise to the top! Gain full inventory control, optimize distribution, and unlock your property's full market potential by reaching over 10,000+ sales channels. Maximize your revenue today!
              </p>
            </div>
            <div className="flex gap-2 sm:gap-4 text-sm sm:text-lg md:text-xl font-semibold text-right">
              {["PHILIPPINES", "INDONESIA", "AUSTRALIA"].map((country, i) => (
                <h4 key={i} className="wow animate__animated animate__fadeInUp" data-wow-delay={`${0.9 + i * 0.2}s`} data-wow-duration="1s">
                  {country}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            A Partnership with Cocotel Promises
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 max-w-3xl mx-auto wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
            Enjoy full ownership and unique branding while benefiting from 5-star services. Expect a 25-50% increase in occupancy rate and save up to $3,000 on property management systems.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
            Our Board
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                img: "/about/reginald_go_investor.png",
                name: "Reginald Go",
                title: "Founder",
                desc: "Reginald Go is a founder and a strategic leader who fosters strong relationships between organizations and their stakeholders, driving collaboration, trust, and sustainable growth.",
              },
              {
                img: "/about/rafael_jouwena_investor1722243676.png",
                name: "Rafael Jouwena",
                title: "Co-founder & CEO",
                desc: "The smart high Acer Finance Analyst at Cocotel. Rafael Jouwena embarks his passion and experience in a tech hotel company and refining the general financial community to maximize the value of the organization’s stock.",
              },
              {
                img: "/about/jitendra_dadhaniya_investor1722243640.png",
                name: "Jitendra Dadhaniya",
                title: "Co-founder & CTO",
                desc: "Growing up as a dedicated and highly innovative business technopreneur, Jitendra Dadhaniya embarks his passion with Cocotel offering the most advanced technology system to help the internal organization Fastrack processes so that leaders can focus more on what matters.",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2}s`} data-wow-duration="1s">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.2}s`} data-wow-duration="1s">
                  {member.name}
                </h3>
                <h5 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.4}s`} data-wow-duration="1s">
                  {member.title}
                </h5>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 max-w-xs mx-auto wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.6}s`} data-wow-duration="1s">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            Cocotel includes these services for free
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              { img: "service_1.png", label: "Online Inventory Management" },
              { img: "service_2.png", label: "Channel Management" },
              { img: "service_3new.png", label: "Sales And Digital Marketing Management" },
              { img: "service_4.png", label: "Social Media Management" },
              { img: "service_5.png", label: "Property Management System" },
              { img: "service_6.png", label: "Revenue Management" },
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2}s`} data-wow-duration="1s">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  <Image
                    src={`/about/${service.img}`}
                    alt={service.label}
                    width={96}
                    height={96}
                    className="w-3/5 h-3/5 object-contain"
                    priority
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.2}s`} data-wow-duration="1s">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-10 max-w-2xl mx-auto line-clamp-3 wow animate__animated animate__fadeInUp" data-wow-delay="1.4s" data-wow-duration="1s">
            No subscription or setup costs. Boost your digital presence to reach 500,000-1.2M people with personalized digital sales and marketing. Be present on over 30 online travel agency platforms, 10,000+ distribution channels and multiple social media platforms to increase revenue. Achieve an additional 30% revenue within 3-6 months of the partnership.
          </p>
        </div>
      </section>

      {/* Featured In and Partner Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            Featured in
          </h2>
          {/* Add Featured In content here if available */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <div className="flex flex-col items-center w-full lg:w-1/2 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <Image
                src="/about/bewith_cocotel.png"
                alt="Achieve Revenue"
                width={400}
                height={320}
                className="object-contain"
                priority
              />
              <div className="mt-6 text-center space-y-2">
                <p className="text-xl font-semibold text-gray-700 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                  Achieve An Additional
                </p>
                <p className="text-5xl font-extrabold text-green-600 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
                  30%
                </p>
                <p className="text-2xl font-bold text-green-500 tracking-widest wow animate__animated animate__fadeInUp" data-wow-delay="0.7s" data-wow-duration="1s">
                  REVENUE
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-md shadow-xl border border-gray-200 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
                Be A Coco Partner
              </h2>
              <form className="space-y-5">
                {[
                  { label: "Name", placeholder: "Your name here", type: "text" },
                  { label: "Phone Number", placeholder: "564545464", type: "text" },
                  { label: "Email Address", placeholder: "user@email.com", type: "email" },
                  { label: "Hotel Name", placeholder: "Hotel Name", type: "text" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700" data-wow-delay={`${i * 0.2}s`} data-wow-duration="1s">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 "
                      data-wow-delay={`${i * 0.2 + 0.2}s`}
                      data-wow-duration="1s"
                    />
                  </div>
                ))}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700" data-wow-delay="0.8s" data-wow-duration="1s">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Location"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 "
                      data-wow-delay="1s"
                      data-wow-duration="1s"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 " data-wow-delay="1.2s" data-wow-duration="1s">
                      Room Count
                    </label>
                    <input
                      type="text"
                      placeholder="Put Number Here"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 "
                      data-wow-delay="1.4s"
                      data-wow-duration="1s"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 " data-wow-delay="1.6s" data-wow-duration="1s">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 "
                    data-wow-delay="1.8s"
                    data-wow-duration="1s"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notRobot"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded "
                    data-wow-delay="2s"
                    data-wow-duration="1s"
                  />
                  <label
                    htmlFor="notRobot"
                    className="ml-2 text-sm text-red-600"
                    data-wow-delay="2.2s"
                    data-wow-duration="1s"
                  >
                    I'm not a robot (verification expired. Check the checkbox again)
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-300 wow animate__animated animate__fadeInUp"
                  data-wow-delay="2.4s"
                  data-wow-duration="1s"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;