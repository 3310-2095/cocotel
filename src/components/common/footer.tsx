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
<div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-8">
  {/* Column 1: Social + Logo */}
  <div className="flex flex-col items-center md:items-start space-y-5 text-center md:text-left w-full md:w-1/4">
    <p className="text-base font-medium">Stay Connected with Us</p>
    <div className="flex gap-5 text-2xl">
      <FaFacebookF />
      <FaInstagram />
      <FaTiktok />
    </div>
    <Image
      src="/logo/footer.svg"
      alt="Cocotel Logo"
      width={160}
      height={48}
      className="object-contain"
    />
  </div>

  {/* Columns 2–4 grouped on the right */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
    {/* About Cocotel */}
    <div>
      <h4 className="text-xl font-semibold mb-4">About Cocotel</h4>
      <ul className="space-y-3 text-base">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Blog</li>
        <li className="hover:underline cursor-pointer">Explore</li>
        <li className="hover:underline cursor-pointer">Gallery</li>
      </ul>
    </div>

    {/* Partner With Us */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Partner With Us</h4>
      <ul className="space-y-3 text-base">
        <li className="hover:underline cursor-pointer">Contact Us</li>
        <li className="hover:underline cursor-pointer">Careers</li>
        <li className="hover:underline cursor-pointer">Franchise</li>
      </ul>
    </div>

    {/* Events */}
    <div>
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

{/* Divider & Bottom Row */}
<div className="max-w-[1320px] mx-auto border-t border-white/30 mt-8 pt-4 px-4 flex flex-col md:flex-row justify-between gap-4 text-sm">
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

  {/* Right Side: Contact Numbers (Stacked Vertically) */}
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