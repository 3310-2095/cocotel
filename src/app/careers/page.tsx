"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WOW from "wowjs";
import "animate.css";

const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    try {
      new WOW.WOW({ live: false }).init();
    } catch (error) {
      console.error("WOW.js initialization failed:", error);
    }
  }, []);

  const jobOpenings = [
    { title: "Admin", exp: 3, deadline: "2024-08-08", link: "/job/admin", category: "HT & Admin" },
    { title: "Social Media", exp: 3, deadline: "2024-07-24", link: "/job/social-media", category: "Marketing" },
    { title: "Marketing Strategist", exp: 2, deadline: "2024-07-31", link: "/job/marketing-strategist", category: "Marketing" },
  ];

  const categories = ["All", "HT & Admin", "Marketing", "Creative", "Sales", "Business Dev"];

  const filteredJobs = selectedCategory === "All" ? jobOpenings : jobOpenings.filter(job => job.category === selectedCategory);

  return (
    <section className="min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px]">
          <Image
            src="/careers/join_us.png"
            alt="Join Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">COCOTEL IS ALWAYS HIRING!</h1>
              <p className="text-sm sm:text-base md:text-lg mb-6">
                Embark on a journey with Cocotel, a one-stop reservation, marketing, and property-management solution in the hospitality industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Join Us</button>
                <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black">Career</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <section className="bg-white text-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-stretch">
          <div className="lg:w-1/2 flex flex-col justify-between wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-green-600 wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
                Benefits
              </h2>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6 wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1s">
                Why You Should Join Our #Extraordinary Team
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1s">
                Discover the rewards of joining Cocotel—competitive salaries, flexible schedules, and comprehensive benefits designed for a dynamic and inclusive team. We value dedication and passion. Joining us means more than just a job—it's an opportunity to participate in the satisfaction of making a difference in the hospitality industry and creating memorable guest experiences. We also offer opportunities for remote work setup.
                <br />
                <span className="text-sm sm:text-base mt-6 sm:mt-8 block wow animate__animated animate__fadeInLeft" data-wow-delay="0.7s" data-wow-duration="1s">
                  *for specific countries only: Indonesia, Australia, and India
                </span>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { bg: "#E7F2FF", icon: "team_work", title: "Team work", desc: "Thrive in a collaborative environment where creativity, technology, and teamwork drive innovation." },
              { bg: "#F1F7E8", icon: "secured_future", title: "Learning Opportunity", desc: "Access ongoing learning opportunities tailored to grow your skills through workshops and mentorship." },
              { bg: "#EFF2F5", icon: "learning_opp", title: "Secured Future", desc: "We prioritize your growth and offer pathways to advance your career in the most effective ways possible." },
              { bg: "#FFF0ED", icon: "upgrade_skill", title: "Upgrade Skills", desc: "Gain hands-on experience and develop industry-leading skills that propel your career forward." },
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-6 bg-white h-full flex flex-col wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2}s`} data-wow-duration="1s">
                <div className="flex mb-4">
                  <div className={`p-3`} style={{ background: item.bg }}>
                    <Image
                      src={`/careers/${item.icon}.png`}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      priority
                      onError={() => console.error(`Failed to load icon: ${item.icon}`)}
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.2}s`} data-wow-duration="1s">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm flex-grow wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.2 + 0.4}s`} data-wow-duration="1s">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-8 sm:py-10 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            COME JOIN US
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
            Explore Career Openings
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-xs sm:text-sm leading-relaxed text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
            Dive into a world of exciting career opportunities at Cocotel. Explore our openings and find your perfect fit to embark on a rewarding journey with us!
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 mt-6 sm:mt-10">
          <div className="lg:w-1/6 wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:flex-col">
              {categories.map((cat, index) => (
                <h3
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm sm:text-lg font-medium cursor-pointer transition-colors duration-200 wow animate__animated animate__fadeInLeft ${
                    selectedCategory === cat ? "text-green-600" : "text-black hover:text-green-600"
                  }`}
                  data-wow-delay={`${index * 0.2}s`}
                  data-wow-duration="1s"
                >
                  {cat}
                </h3>
              ))}
            </div>
          </div>

          <div className="lg:w-5/6 flex flex-col gap-4">
            {filteredJobs.length === 0 ? (
              <p className="text-center text-gray-400 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                No job openings in this category.
              </p>
            ) : (
              filteredJobs.map((job, index) => (
                <Link href={job.link} key={index}>
                  <div
                    className="w-full bg-white shadow p-4 sm:p-6 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${index * 0.1}s`}
                    data-wow-duration="1s"
                  >
                    {/* Job Title */}
                    <div className="w-full sm:w-1/3">
                      <h1
                        className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${index * 0.1 + 0.2}s`}
                        data-wow-duration="1s"
                      >
                        {job.title}
                      </h1>
                    </div>

                    {/* Experience */}
                    <div className="w-full sm:w-1/3 text-left sm:text-center">
                      <h4
                        className="text-sm text-gray-500 wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${index * 0.1 + 0.3}s`}
                        data-wow-duration="1s"
                      >
                        Experience
                      </h4>
                      <h2
                        className="text-lg sm:text-2xl wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${index * 0.1 + 0.4}s`}
                        data-wow-duration="1s"
                      >
                        {job.exp} years
                      </h2>
                    </div>

                    {/* Deadline */}
                    <div className="w-full sm:w-1/3 text-left sm:text-right">
                      <h4
                        className="text-sm text-gray-500 wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${index * 0.1 + 0.5}s`}
                        data-wow-duration="1s"
                      >
                        Deadline
                      </h4>
                      <h2
                        className="text-lg sm:text-2xl wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${index * 0.1 + 0.6}s`}
                        data-wow-duration="1s"
                      >
                        {job.deadline}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default CareerPage;