"use client";

import React, { useState } from "react";
import Logo from "./logo.png";
import Image from "next/image";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src={Logo} // Path to your logo in the public folder
              alt="MyLogo"
              width={120} // Adjust width as needed
              height={40}  // Adjust height as needed
              priority // Ensures the logo is loaded quickly
            />
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-[#333333] hover:text-blue-600 font-medium">
              About us
            </a>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-[#333333] hover:text-blue-600 font-medium cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              className="text-[#333333] hover:text-blue-600 font-medium cursor-pointer"
            >
              Testimonial
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-[#333333] hover:text-blue-600 font-medium cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Right: Book a Call Button */}
          <div className="hidden md:block">
            <button className="transition duration-500 bg-blue-50 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-blue-600 font-medium"
            >
              Services
            </a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
