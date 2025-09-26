import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#4baa42] text-white mt-[30px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        {/* TOP: 50/50 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left (Social + Logo) */}
          <div className="flex flex-col items-center md:items-start space-y-5 text-center md:text-left">
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
              loading="lazy"
            />
          </div>

          {/* Right (Links) */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b pb-10 border-white/100">
              {[
                {
                  title: "About Cocotel",
                  links: [
                    { name: "Home", href: "/" },
                    { name: "Blog", href: "/blog" },
                    { name: "Explore", href: "/explore" },
                    { name: "Gallery", href: "/gallery" },
                  ],
                },
                {
                  title: "Partner With Us",
                  links: [
                    { name: "Contact Us", href: "/contact" },
                    { name: "Careers", href: "/careers" },
                    { name: "Franchise", href: "/franchise" },
                  ],
                },
                {
                  title: "Events",
                  links: [
                    { name: "Main Events", href: "/events" },
                    { name: "Meetings", href: "/events/meetings" },
                    { name: "Milestones", href: "/events/milestones" },
                    { name: "Weddings", href: "/events/weddings" },
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="w-full text-center md:text-start">
                  <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-3 text-base">
                    {section.links.map((link, i) => (
                      <li
                        key={i}
                        className="cursor-pointer hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition duration-300"
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: 50/50 layout with top border */}
        <div className=" mt-10  grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Left (Copyright) */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base font-light">
              © 2025 Cocotel International. All Rights Reserved.
            </p>
          </div>

          {/* Right (Contacts) */}
          <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p>csr@cocotel.com.ph</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>+63-917-307-7462</p>
              </div>
                <p>+63-908-932-1399</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
