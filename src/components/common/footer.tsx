import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white py-10 px-4 md:px-6">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Column 1: Social + Logo */}
        <div className="flex flex-col items-center md:items-start space-y-5 w-full md:w-1/3 text-center md:text-left">
          <p className="text-base font-medium">Stay Connected with Us</p>
          <div className="flex gap-5">
            {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, idx) => (
              <span
                key={idx}
                className="hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] transition duration-300 cursor-pointer"
              >
                <Icon className="w-7 h-7 md:w-8 md:h-8" />
              </span>
            ))}
          </div>
          <Image
            src="/logo/footer.svg"
            alt="Cocotel Logo"
            width={200}
            height={54}
            className="object-contain mt-4"
          />
        </div>

        {/* Columns 2–4 grouped on the right */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Reusable List Column Component */}
            {[
              {
                title: "About Cocotel",
                links: ["Home", "Blog", "Explore", "Gallery"],
              },
              {
                title: "Partner With Us",
                links: ["Contact Us", "Careers", "Franchise"],
              },
              {
                title: "Events",
                links: ["Main Events", "Meetings", "Milestones", "Weddings"],
              },
            ].map((section, idx) => (
              <div key={idx} className="w-full">
                <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3 text-base">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className=" cursor-pointer hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition duration-300"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider & Bottom Row */}
      <div className="border-t border-white/30 mt-10 pt-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 px-2">
        {/* Left Side */}
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-light">
            © 2025 Cocotel International. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <FaEnvelope />
            <p>info@cocotel.com.ph</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:items-end gap-1 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>+63-917-555-1234</p>
          </div>
          <p className="pl-6 md:pl-0">+63-908-777-8901</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
