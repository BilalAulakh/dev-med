"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import headerBg from "../assets/header-bg.jpg";
import tabletImg from "../assets/laptop-img.png";
import doctorImg from "../assets/choose_medcare_doctor.png";
import medcareImg from "../assets/medcare-msoimg.png";
import emergencyImg from "../assets/operational-emergency.png";

const slides = [
  {
    id: 1,
    headline: "Serving Healthcare\nProviders Since 2012",
    sub: "With over a decade of experience, MedCare MSO is a trusted partner for over 80,000 practitioners seeking advanced medical billing software.",
    cta: "Request Demo",
    rightImage: tabletImg,
    rightAlt: "MedCare MSO Dashboard on Tablet",
    accent: "#0079C1",
  },
  {
    id: 2,
    headline: "End-to-End Revenue\nCycle Management",
    sub: "Streamline patient registration, eligibility verification, and claims processing to ensure maximum reimbursement with 95% clean claim rates.",
    cta: "Learn More",
    rightImage: medcareImg,
    rightAlt: "MedCare MSO Revenue Cycle",
    accent: "#005a8e",
  },
  {
    id: 3,
    headline: "Expert Staffing &\nPractice Solutions",
    sub: "Access a pool of highly trained healthcare professionals and industry-leading practice management software to grow your practice with confidence.",
    cta: "Get Started",
    rightImage: doctorImg,
    rightAlt: "MedCare Healthcare Professionals",
    accent: "#006fa8",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating, current]
  );

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center" style={{ backgroundColor: slide.accent, transition: "background-color 0.6s ease" }}>
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src={headerBg}
          alt="Hero Background"
          fill
          className="object-cover object-right opacity-30"
          priority
        />
      </div>

      {/* Slide content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center relative">

          {/* Left Decoration (Vertical Dots) */}
          <div className="hidden xl:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 flex-col space-y-3 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Left Content */}
          <div
            className="w-full lg:w-1/2 text-white mt-10 lg:mt-0 xl:pr-10"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(18px)" : "translateY(0)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 whitespace-pre-line">
              {slide.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              {slide.sub}
            </p>

            <div className="mb-10">
              <button className="bg-[#82bc43] hover:bg-[#72a63a] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg transform hover:scale-105">
                {slide.cta}
              </button>
            </div>

            {/* Accreditation Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl relative">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <span className="text-[#c0392b] font-bold text-xl italic tracking-tighter">asm</span>
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <span className="text-[#002868] font-bold text-sm text-center">NILA</span>
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <div className="flex flex-col items-center">
                  <span className="text-[#34495e] font-black text-lg leading-none">ISO</span>
                  <span className="text-[10px] text-gray-500 font-bold">9001:2015</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 shadow-md transition-transform hover:-translate-y-1">
                <span className="text-[#005c93] font-black text-xl italic">ONC</span>
              </div>
            </div>

            {/* Navigation Row */}
            <div className="flex items-center gap-6 mt-8">
              {/* Arrows */}
              <div className="flex space-x-3">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md cursor-pointer shadow-xl"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 backdrop-blur-md cursor-pointer shadow-xl"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === current ? "28px" : "10px",
                      height: "10px",
                      backgroundColor: i === current ? "#82bc43" : "rgba(255,255,255,0.5)",
                    }}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <span className="text-white/60 text-sm font-semibold ml-2">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">
            <div
              className="relative z-20 transform lg:translate-x-12 xl:translate-x-20"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? "translateX(30px) scale(0.97)"
                  : "translateX(0) scale(1)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <Image
                src={slide.rightImage}
                alt={slide.rightAlt}
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-2xl object-contain max-h-[450px]"
                priority
              />
            </div>
          </div>

          {/* Right Decoration (Contact Sidebar) */}
          <div className="hidden lg:flex absolute right-[-20px] top-1/2 transform -translate-y-1/2 flex-col space-y-0 bg-[#34495e]/80 backdrop-blur-md rounded-l-xl overflow-hidden shadow-2xl z-40">
            <button className="p-4 hover:bg-[#0079C1] transition-colors border-b border-white/10 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <button className="p-4 hover:bg-[#0079C1] transition-colors border-b border-white/10 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </button>
            <button className="p-4 hover:bg-[#0079C1] transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
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
