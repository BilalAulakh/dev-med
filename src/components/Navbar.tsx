"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";

const servicesData = [
  {
    title: "Revenue Cycle Management",
    desc: "Catalyze financial processes to get you paid faster.",
    href: "/services/revenue-cycle-management",
    icon: (
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="28" r="14" />
        <path d="M28 20v16M24 24h6M24 32h6" stroke="#8cc63f" />
        <path d="M12 48l16-16 8 8 16-16" strokeWidth="3" />
        <path d="M42 24h10v10" strokeWidth="3" />
      </svg>
    )
  },
  {
    title: "Physician Billing",
    desc: "Your dedication to your patients is of the utmost importance.",
    href: "/services/physician-billing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20v12A16 16 0 0048 32V20" />
        <circle cx="16" cy="16" r="4" />
        <circle cx="48" cy="16" r="4" />
        <path d="M32 48v8" />
        <circle cx="40" cy="56" r="4" stroke="#8cc63f" />
        <path d="M32 56h4" stroke="#8cc63f" />
      </svg>
    )
  },
  {
    title: "Medical Billing",
    desc: "We take a comprehensive, all-inclusive approach.",
    href: "/services/medical-billing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "AR Recovery",
    desc: "To meet the unique needs of your organization.",
    href: "/services/ar-recovery",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Laboratory Billing",
    desc: "Leverage experience and know-how to help chart a successful future.",
    href: "/services/laboratory-billing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Hospital Billing",
    desc: "We take a comprehensive, all-inclusive approach.",
    href: "/services/hospital-billing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Imaging Billing",
    desc: "We will handle complicated coding for your imaging center.",
    href: "/services/imaging-billing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Staffing and Workforce Services",
    desc: "On-demand Front and Back Office Support to Increase Growth.",
    href: "/services/staffing-workforce",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Chronic Care Management",
    desc: "Provide continuous care and coordinate services for patients.",
    href: "/services/chronic-care",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Remote Patient Monitoring",
    desc: "Remote tracking of patient health data to improve outcomes.",
    href: "/services/remote-patient",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
          <div className="hidden md:flex items-center space-x-4 h-full">
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

            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-[#005c93] hover:text-[#0079C1] font-semibold transition-colors cursor-pointer h-full">
                Services
                <svg
                  className="ml-1 h-4 w-4 text-[#005c93] group-hover:rotate-180 transition-transform duration-200"
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

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-2xl rounded-b-lg border-t-2 border-[#82bc43] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex text-left z-50 overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-1/3 bg-gray-50 border-r py-4 flex flex-col">
                  <div className="px-6 py-4 bg-white border-l-4 border-[#0080FF] text-[#005c93] font-bold flex justify-between items-center shadow-sm cursor-pointer">
                    VALUE ADDED SERVICES
                    <span className="text-xl leading-none">&rsaquo;</span>
                  </div>
                  <div className="px-6 py-4 text-gray-600 font-semibold hover:text-[#005c93] hover:bg-white flex justify-between items-center cursor-pointer transition-colors border-l-4 border-transparent">
                    RCM SERVICES
                    <span className="text-xl leading-none">&rsaquo;</span>
                  </div>
                  <div className="px-6 py-4 text-gray-600 font-semibold hover:text-[#005c93] hover:bg-white flex justify-between items-center cursor-pointer transition-colors border-l-4 border-transparent">
                    PRACTICE MANAGEMENT
                    <span className="text-xl leading-none">&rsaquo;</span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-2/3 p-6 2xl:p-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {servicesData.map((service, idx) => (
                      <Link href={service.href || "/services"} key={idx} className="flex items-start gap-4 group/item cursor-pointer">
                        <div className="text-[#0080FF] shrink-0 mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-[#005c93] font-semibold md:text-base group-hover/item:text-[#0080FF] transition-colors mb-1">
                            {service.title}
                          </h4>
                          <p className="text-gray-500 text-sm leading-snug">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b overflow-y-auto max-h-[calc(100vh-80px)]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/ai-products"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50 rounded-md"
          >
            AI-Products
          </Link>

          {/* Services Mobile Dropdown */}
          <div className="px-3 block">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex justify-between items-center py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50 rounded-md focus:outline-none"
            >
              Services
              <svg
                className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${isServicesOpen ? "block" : "hidden"} mt-1 pl-4 border-l-2 border-gray-100 space-y-1 py-2 bg-gray-50/50 rounded-md`}>
              {servicesData.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href || "/services"}
                  onClick={() => setIsOpen(false)}
                  className="flex items-start gap-3 py-3 px-2 hover:bg-white rounded-md transition-colors group/item"
                >
                  <div className="text-[#0080FF] shrink-0 mt-0.5 transform scale-[0.85] origin-top">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-[#005c93] font-semibold text-sm mb-0.5 group-hover/item:text-[#0080FF] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-500 text-[11px] leading-snug pr-2">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/specialties"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50 rounded-md"
          >
            Specialties
          </Link>
          <Link
            href="/resources"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50 rounded-md"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#005c93] hover:text-[#0079C1] hover:bg-gray-50 rounded-md"
          >
            Contact
          </Link>
          <div className="px-3 py-4">
            <button className="w-full bg-[#82bc43] hover:bg-[#72a63a] transition-colors text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm shadow-sm">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
