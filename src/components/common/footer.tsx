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
<footer className="bg-[#2E7D32] text-white py-10 px-6">
  {/* Main Footer Grid */}
  <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4 py-3">
    
    {/* Column 1: Social + Logo */}
    <div className="flex flex-col items-center md:items-start space-y-5 text-center md:text-left w-full md:w-1/4">
  <p className="text-base font-medium">Stay Connected with Us</p>

  <div className="flex gap-5">
  <span className="hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] transition duration-300 cursor-pointer">
    <FaFacebookF className="w-8 h-8" />
  </span>
  <span className="hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] transition duration-300 cursor-pointer">
    <FaInstagram className="w-8 h-8" />
  </span>
  <span className="hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] transition duration-300 cursor-pointer">
    <FaTiktok className="w-8 h-8" />
  </span>
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
    <div className="flex-1 flex justify-end">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* About Cocotel */}
        <div className="w-[206px] h-[175px]">
          <h4 className="text-xl font-semibold mb-2">About Cocotel</h4>
          <ul className="space-y-3 text-base">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Explore</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
          </ul>
        </div>

        {/* Partner With Us */}
        <div className="w-[206px] h-[175px]">
          <h4 className="text-xl font-semibold mb-4">Partner With Us</h4>
          <ul className="space-y-3 text-base">
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Franchise</li>
          </ul>
        </div>

        {/* Events */}
        <div className="w-[206px] h-[175px]">
          <h4 className="text-xl font-semibold mb-4">Events</h4>
          <ul className="space-y-3 text-base">
            <li className="hover:underline cursor-pointer">Main Events</li>
            <li className="hover:underline cursor-pointer">Meetings</li>
            <li className="hover:underline cursor-pointer">Milestones</li>
            <li className="hover:underline cursor-pointer">Weddings</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Divider & Bottom Row (Unchanged) */}
  <div className="border-t border-white/30 mt-8 pt-4 flex-col md:flex-row justify-between gap-4 text-sm max-w-7xl mx-auto px-4 py-3 flex">
    {/* Left Side: Email + Copyright */}
    <div className="flex flex-col gap-2">
      <p className="text-base font-light">
        © 2025 Cocotel International. All Rights Reserved.
      </p>
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-white text-base" />
        <p>info@cocotel.com.ph</p>
      </div>
    </div>

    {/* Right Side: Contact Numbers */}
    <div className="flex flex-col items-start md:items-end gap-1">
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-white text-base" />
        <p>+63-917-555-1234</p>
      </div>
      <p className="pl-6 md:pl-0">+63-908-777-8901</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
