"use client";

import React from "react";
import Image from "next/image";
import doctorImg from "../assets/medcare-msoimg.png";

const ReasonsToChoose = () => {
  const reasons = [
    {
      title: "Cost-Effective Solutions",
      description: "MedCare MSO offers a pay-for-paid model to save you thousands of dollars. Outsource your billing services to us and enjoy free software installation and denied claims appeals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#00a3ff]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 7l-6 6-4-4-8 8" />
          <path d="M16 7h6v6" />
        </svg>
      )
    },
    {
      title: "Increase Revenue",
      description: "MedCare MSO will ensure that your claims are accurately submitted promptly. It will reduce the number of rejected or denied claims due to an inefficient medical billing cycle.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#00a3ff]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      title: "Get Paid Faster",
      description: "We significantly reduce your turnaround time by ensuring claims reach all possible carriers through our reliable electronic medical billing services and by being set up to receive ERAs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#00a3ff]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#f0f9ff] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 flex flex-col space-y-12">
          <div className="space-y-4">
            <h2 className="text-black text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Reasons to choose<br />
              <span className="text-black/90">MedCare MSO</span>
            </h2>
          </div>

          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col space-y-4 max-w-lg">
                <div className="flex items-center gap-4 group">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {reason.icon}
                  </div>
                  <h3 className="text-[#00a3ff] text-xl font-bold tracking-wide">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed pl-10">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Framed Image */}
        <div className="lg:w-1/2 relative flex flex-col items-center">
          {/* Vertical Dashed Line */}
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-0 h-20 border-l-2 border-dashed border-[#00a3ff]/60 hidden lg:block"></div>
          
          <div className="relative w-full max-w-[550px] aspect-4/5 p-4 lg:p-6 border-[3px] border-[#00a3ff]/40 rounded-sm">
            <div className="relative w-full h-full overflow-hidden bg-white/40">
              <Image 
                src={doctorImg} 
                alt="MedCare MSO Healthcare Professional" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReasonsToChoose;
