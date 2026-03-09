"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-t-4 border-[#0080FF] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="MedCareMSO Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center text-[#005c93] hover:text-[#0079C1] font-semibold transition-colors cursor-pointer">
                <span className="mr-1 text-[#FDB813]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l1.5 7.5L21 11l-7.5 1.5L12 20l-1.5-7.5L3 11l7.5-1.5z" />
                  </svg>
                </span>
                AI-Products
                <svg
                  className="ml-1 h-4 w-4 text-[#005c93]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-[#005c93] hover:text-[#0079C1] font-semibold transition-colors cursor-pointer">
                Services
                <svg
                  className="ml-1 h-4 w-4 text-[#005c93]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <Link
              href="/specialties"
              className="text-[#005c93] hover:text-[#0079C1] font-semibold transition-colors"
            >
              Specialties
            </Link>

            <div className="relative group">
              <button className="flex items-center text-[#005c93] hover:text-[#0079C1] font-semibold transition-colors cursor-pointer">
                Resources
                <svg
                  className="ml-1 h-4 w-4 text-[#005c93]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <Link
              href="/contact"
              className="text-[#005c93] hover:text-[#0079C1] font-semibold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Request Demo Button */}
          <div className="hidden md:block">
            <button className="bg-[#82bc43] hover:bg-[#72a63a] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md text-sm uppercase tracking-wider">
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/ai-products"
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50"
          >
            AI-Products
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50"
          >
            Services
          </Link>
          <Link
            href="/specialties"
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50"
          >
            Specialties
          </Link>
          <Link
            href="/resources"
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50"
          >
            Contact
          </Link>
          <div className="px-3 py-2">
            <button className="w-full bg-[#82bc43] text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
