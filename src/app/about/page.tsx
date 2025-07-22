import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <section>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white w-full mx-auto px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/about/about-banner-1.png')" }}
      >
        <div className="flex items-center justify-center h-[527px] max-w-7xl mx-auto">
          <div className="text-center px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-normal font-[MontserratSemiBold] mb-4 sm:mb-6">
              ABOUT US
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal font-[Montserrat] mb-6 sm:mb-8 ">
              Cocotel is an online hotel management company, Southeast Asia's leading one-stop solutions
              for independent hotels and resorts, offering innovative e-commerce and property management
              solutions that increase revenue by at least 30% with zero upfront cost. Our network spans
              over 300+ properties, where we set industry standards and use technology to enhance
              hospitality and tourism.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded transition duration-300 text-sm sm:text-base">
              I want to know more
            </button>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <div className="w-full sm:w-1/2">
            <Image
              src="/about/about_v_m.png"
              alt="Vision Mission"
              width={800}
              height={592}
              className="w-full h-auto sm:h-[592px] object-cover rounded-[12px]"
              priority
            />
          </div>
          <div className="w-full sm:w-1/2 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal font-[MontserratSemibold] mb-2 sm:mb-4">
                VISION
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] font-normal font-[Montserrat] leading-relaxed">
                At Cocotel, our vision is to establish ourselves as the premier one-stop solution for independent hotels and resorts, revolutionizing e-commerce in Southeast Asia. We are committed to expanding our partnerships and reach across the Asia Pacific region, setting unprecedented service standards, and harnessing technology to make a positive impact on the hospitality and tourism industries.
              </p>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal font-[MontserratSemibold] mb-2 sm:mb-4">
                MISSION
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] font-normal font-[Montserrat] leading-relaxed">
                Cocotel is dedicated to delivering top-notch service through innovative technology and comprehensive online solutions. Our mission is to lead the hotel management sector in Southeast Asia, establishing Cocotel as the premier online management company and building a sustainable business. By fostering continuous improvement and nurturing robust relationships with our stakeholders, we aim to optimize the hospitality experience, pursue excellence, and achieve sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Hotel Ecommerce Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white w-full mx-auto px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/about/about-banner-1.png')" }}
      >
        <div className="relative mx-auto py-10 sm:py-16 md:py-20 text-center h-auto sm:h-[756px]">
          <div className="mb-6 sm:mb-8">
            <Image
              src="/about/cocotel-vertical-logo.png"
              alt="Cocotel Logo"
              width={160}
              height={160}
              className="mx-auto"
              priority
            />
          </div>
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-2">
            The Future of Hotel Ecommerce
          </h3>
          <h4 className="text-xs sm:text-base md:text-lg mb-4 sm:mb-6">
            REVolutionizing Independent Hotels and Resorts Digital Sales
          </h4>
          <div className="flex justify-center mb-6 sm:mb-10">
            <Image
              src="/about/cocotel-progress-bar.png"
              alt="Progress Bar"
              width={300}
              height={30}
              className="object-contain sm:w-[400px] sm:h-[40px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-6 sm:mt-20 px-4 sm:px-20">
            <Image
              src="/about/CHS.png"
              alt="Cocotel Hospitality Solutions"
              width={120}
              height={40}
              className="object-contain sm:w-[180px] sm:h-[60px]"
            />
            <Image
              src="/about/PoweredBy1.png"
              alt="Powered By Cocotel"
              width={120}
              height={40}
              className="object-contain sm:w-[180px] sm:h-[60px]"
            />
            <Image
              src="/about/IMG_0919C.png"
              alt="Cocotel Bedbank"
              width={120}
              height={40}
              className="object-contain sm:w-[180px] sm:h-[60px]"
            />
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 text-xs sm:text-sm text-right max-w-[450px]">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8">
            Cocotel In Numbers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105">
              <Image
                src="/about/cocotel-properties.png"
                alt="Cocotel Properties"
                width={180}
                height={130}
                className="object-contain mx-auto"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mt-2 sm:mt-4">
                300+
              </h1>
              <h3 className="text-base sm:text-lg text-gray-600">Properties</h3>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105">
              <Image
                src="/about/rooms.png"
                alt="Cocotel Rooms"
                width={180}
                height={130}
                className="object-contain mx-auto"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mt-2 sm:mt-4">
                10000+
              </h1>
              <h3 className="text-base sm:text-lg text-gray-600">Rooms</h3>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105">
              <Image
                src="/about/locations.png"
                alt="Cocotel Locations"
                width={180}
                height={130}
                className="object-contain mx-auto"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mt-2 sm:mt-4">
                60+
              </h1>
              <h3 className="text-base sm:text-lg text-gray-600">Locations</h3>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105">
              <Image
                src="/about/contries.png"
                alt="Cocotel Countries"
                width={180}
                height={130}
                className="object-contain mx-auto"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mt-2 sm:mt-4">
                3+
              </h1>
              <h3 className="text-base sm:text-lg text-gray-600">Countries</h3>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-green-100 transition duration-300 transform hover:scale-105">
              <Image
                src="/about/IMG_0919C.png"
                alt="Cocotel Sales"
                width={180}
                height={130}
                className="object-contain mx-auto"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mt-2 sm:mt-4">
                PHP 2 Billion
              </h1>
              <h3 className="text-base sm:text-lg text-gray-600">Sales Generated Online</h3>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 w-full px-4 py-6 sm:py-10">
            <div className="w-full sm:w-1/2 space-y-4 sm:space-y-6 text-left">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-[MontserratSemibold] font-normal">
                COCOTEL STORY
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] font-[Montserrat] font-normal">
                Ever wondered how Cocotel was formed?
              </p>
              <p className="text-base sm:text-lg md:text-[20px] font-[Montserrat] font-normal leading-relaxed">
                Was formed in December 2018 by Rafael Jouwena and Reginald Go. Inspired by a business
                disruption in the budget hotel industry, they applied the concept in the Philippines,
                focusing on local resorts and getaways. Incorporated in 2019, they signed their first 5
                hotel clients in Boracay. Despite the challenges posed by the pandemic, Cocotel grew from
                5 to 26 clients by November 2019. Their innovative approach, including the 'Cocotel Vibe'
                service, and participation in the Ideaspace Accelerator program, enabled them to
                sustainably expand and refine their operations. Today, Cocotel boasts 300+ hotels and
                resorts across the Philippines, driven by their business model and talented hospitality
                professionals.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
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

      <section
      className="w-full h-[850px] sm:h-[700px] md:h-[600px] lg:h-[850px] bg-cover bg-center text-white px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10"
      style={{
        backgroundImage:
          "url('https://www.cocotel.com/frontend/images/e-commerce-world.png')",
      }}
    >
      <div className="flex flex-col justify-between h-full">
        {/* Top Section */}
        <div>
          {/* Top Content (Text + Logo) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left Text */}
            <div className="text-left">
              <h4 className="text-sm sm:text-lg md:text-xl font-medium">Understanding The Hotel</h4>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Ecommerce World</h2>
            </div>

            {/* Right Logo */}
            <div>
              <Image
                src="/about/cocotel-vertical-logo.png"
                alt="Cocotel Logo"
                width={120}
                height={120}
                className="mx-auto sm:mx-0 w-auto h-20 sm:h-24 md:h-32"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section (Sticks to Bottom of Section) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-10">
          {/* Left Paragraph */}
          <div className="max-w-xs sm:max-w-md md:max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              Struggling with low revenue and low occupancy rates? With Cocotel,
              your hotel can rise to the top! Gain full inventory control, optimize
              distribution, and unlock your property's full market potential by
              reaching over 10,000+ sales channels. Maximize your revenue today!
            </p>
          </div>

          {/* Right Country List */}
          <div className="flex gap-2 sm:gap-4 text-sm sm:text-lg md:text-xl font-semibold text-right">
            <h4>PHILIPPINES</h4>
            <h4>INDONESIA</h4>
            <h4>AUSTRALIA</h4>
          </div>
        </div>
      </div>
    </section>

    
<div className="relative w-full h-[421px] bg-cover bg-center" style={{ backgroundImage: 'url(/about/about_partner_banner.png)' }}>
  {/* Overlay (optional) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Centered Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      A Partnership with Cocotel Promises
    </h1>
    <p className="max-w-xl text-sm sm:text-base leading-relaxed">
      Enjoy full ownership and unique branding while benefiting from 5-star services. <br />
      Expect a 25-50% increase in occupancy rate and save up to $3,000 on property management systems.
    </p>
  </div>
</div>

<section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10">Our Board</h2>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-8 sm:gap-12">
          {/* Reginald Go */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
              <Image
                src="/about/reginald_go_investor1740709098.png"
                alt="Reginald Go"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4">Reginald Go</h3>
            <h5 className='text-lg sm:text-xl md:text-1xl font-semibold text-gray-800 mt-6'>Founder</h5>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs mx-auto">
            Reginald Go is a founder and a strategic leader who fosters strong relationships between organizations and their stakeholders, driving collaboration, trust, and sustainable growth.
            </p>
          </div>

          {/* Rafael Jouwena */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
              <Image
                src="/about/rafael_jouwena_investor1722243676.png"
                alt="Rafael Jouwena"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4">Rafael Jouwena</h3>
            <h5 className='text-lg sm:text-xl md:text-1xl font-semibold text-gray-800 mt-6'>Co-founder & CEO</h5>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 max-w-xs mx-auto">
             The smart high Acer Finance Analyst at Cocotel. Rafael Jouwena embarks his passion and experience in a tech hotel company and refining the general financial community to maximize the value of the organization’s stock.
            </p>
          </div>

          {/* Jitendra Dadhaniya */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
              <Image
                src="/about/jitendra_dadhaniya_investor1722243640.png"
                alt="Jitendra Dadhaniya"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4">Jitendra Dadhaniya</h3>
            <h5 className='text-lg sm:text-xl md:text-1xl font-semibold text-gray-800 mt-6'> Co-founder & CTO</h5>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 max-w-xs mx-auto">
            Growing up as a dedicated and highly innovative business technopreneur, Jitendra Dadhaniya embarks his passion with Cocotel offering the most advanced technology system to help the internal organization Fastrack processes so that leaders can focus more on what matters.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">Cocotel includes these services for free</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Online Inventory Management */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/service_1.png"
                alt="Online Inventory Management"
                width={96}
                height={96}
                className="w-3/5 h-3/5 object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4">Online Inventory Management</p>
          </div>

          {/* Channel Management */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/service_2.png"
                alt="Channel Management"
                width={96}
                height={96}
                className="w-3/5 h-3/5 object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4">Channel Management</p>
          </div>

          {/* Sales And Digital Marketing Management */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/service_3new.png"
                alt="Sales And Digital Marketing Management"
                width={96}
                height={96}
                className="w-3/5 h-3/5 object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4">Sales And Digital Marketing Management</p>
          </div>

          {/* Social Media Management */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/service_4.png"
                alt="Social Media Management"
                width={96}
                height={96}
                className="w-3/5 h-3/5 object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4">Social Media Management</p>
          </div>

          {/* Property Management System */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/service_5.png"
                alt="Property Management System"
                width={96}
                height={96}
                className="w-3/5 h-3/5 object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4">Property Management System</p>
          </div>

          {/* Revenue Management */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src="/about/service_6.png"
                alt="Revenue Management"
                width={96}
                height={96}
                className="w-3/5 h-3/5 object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-4">Revenue Management</p>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-10 max-w-2xl mx-auto line-clamp-3">
        No subscription or setup costs. Boost your digital presence to reach 500,000-1.2M people with personalized digital sales and marketing. Be present on over 30 online travel agency platforms, 10,000+ distribution channels and multiple social media platforms to increase revenue. Achieve an additional 30% revenue within 3-6 months of the partnership.</p>

      </div>
    </section>

    <section className="py-12 bg-white">
  {/* Featured In */}
  <div className="text-center mb-12">
    <h1 className="text-2xl font-bold text-gray-800">Featured in</h1>
    <div className="flex flex-wrap justify-center items-center gap-25 mt-6">
      <Image
        src="/about/anc.png"
        alt="ANC"
        width={160}
        height={60}
        className="object-contain"
        priority
      />
      <Image
        src="/about/cnn.png"
        alt="CNN"
        width={160}
        height={60}
        className="object-contain"
        priority
      />
      <Image
        src="/about/finalpitch.png"
        alt="Final Pitch"
        width={160}
        height={60}
        className="object-contain"
        priority
      />
      <Image
        src="/about/inquirer.png"
        alt="Inquirer"
        width={160}
        height={60}
        className="object-contain"
        priority
      />
    </div>
  </div>

  <section className="py-12 bg-white">
  <div className="max-w-screen-lg mx-auto px-4">
    {/* Partner Section */}
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
      
      {/* Left: Image + Text */}
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <Image
          src="/about/bewith_cocotel.png"
          alt="Achieve Revenue"
          width={400}
          height={320} // Set a more compact height
          className="object-contain"
          priority
        />
        <div className="mt-6 text-center space-y-2">
          <p className="text-xl font-semibold text-gray-700">Achieve An Additional</p>
          <p className="text-5xl font-extrabold text-green-600">30%</p>
          <p className="text-2xl font-bold text-green-500 tracking-widest">REVENUE</p>
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-md shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Be A Coco Partner</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name here"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="564545464"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="user@email.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hotel Name</label>
            <input
              type="text"
              placeholder="Hotel Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Room Count</label>
              <input
                type="text"
                placeholder="Put Number Here"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Write your message here"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="notRobot"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="notRobot" className="ml-2 text-sm text-red-600">
              I'm not a robot (verification expired. Check the checkbox again)
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

</section>


    </section>
  )
}

export default page
