"use client";

import Image from "next/image";
import headerBg from "../assets/header-bg.jpg";
import tabletImg from "../assets/laptop-img.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0079C1] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={headerBg}
          alt="Hero Background"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Left Decoration (Vertical Dots) */}
          <div className="hidden xl:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 flex-col space-y-3 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white mt-10 lg:mt-0 xl:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Serving Healthcare <br /> Providers Since 2012
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              With over a decade of experience, MedCare MSO is a trusted partner
              for over 80,000 practitioners seeking advanced medical billing
              software.
            </p>

            <div className="mb-10">
              <button className="bg-[#82bc43] hover:bg-[#72a63a] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:scale-105">
                Request Demo
              </button>
            </div>

            {/* Accreditation Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl relative">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <span className="text-[#c0392b] font-bold text-xl italic tracking-tighter">
                  asm
                </span>
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <span className="text-[#002868] font-bold text-sm text-center">
                  NILA
                </span>
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <div className="flex flex-col items-center">
                  <span className="text-[#34495e] font-black text-lg leading-none">
                    ISO
                  </span>
                  <span className="text-[10px] text-gray-500 font-bold">
                    9001:2015
                  </span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <span className="text-[#005c93] font-black text-xl italic">
                  ONC
                </span>
              </div>
            </div>

            {/* Navigation Arrows (Positioned exactly below the logos) */}
            <div className="flex space-x-4 mt-8">
              <button className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md cursor-pointer shadow-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 backdrop-blur-md cursor-pointer shadow-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image (Tablet) */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">
            <div className="relative z-20 transform lg:translate-x-12 xl:translate-x-20 hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={tabletImg}
                alt="MedCare MSO Dashboard on Tablet"
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Decoration (Contact Sidebar) */}
          <div className="hidden lg:flex absolute right-[-20px] top-1/2 transform -translate-y-1/2 flex-col space-y-0 bg-[#34495e]/80 backdrop-blur-md rounded-l-xl overflow-hidden shadow-2xl z-40">
            <button className="p-4 hover:bg-[#0079C1] transition-colors border-b border-white/10 group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:scale-110 transition-transform"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <button className="p-4 hover:bg-[#0079C1] transition-colors border-b border-white/10 group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:scale-110 transition-transform"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </button>
            <button className="p-4 hover:bg-[#0079C1] transition-colors group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:scale-110 transition-transform"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
