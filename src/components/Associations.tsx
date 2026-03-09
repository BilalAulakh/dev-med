"use client";

import React from "react";

const Associations = () => {
  const associations = [
    {
      name: "ASRM",
      description: "American Society for Reproductive Medicine",
      icon: (
        <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
          <path d="M20 15C20 15 10 25 20 45" stroke="#ba2026" strokeWidth="8" strokeLinecap="round" />
          <text x="35" y="40" fill="#333" className="font-bold italic text-2xl">asrm</text>
        </svg>
      )
    },
    {
      name: "NILA",
      description: "National Independent Laboratory Association",
      icon: (
        <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
          <path d="M10 45V15L30 30L10 45Z" fill="#003366" />
          <text x="35" y="40" fill="#003366" className="font-bold text-2xl">NILA</text>
          <path d="M10 48H100" stroke="#ba2026" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "HIPAA",
      description: "HIPAA COMPLIANT",
      icon: (
        <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
          <circle cx="30" cy="30" r="20" stroke="#00a3ff" strokeWidth="3" />
          <path d="M30 20V40M20 30H40" stroke="#00a3ff" strokeWidth="3" />
          <text x="55" y="32" fill="#003366" className="font-bold text-lg">HIPAA</text>
          <text x="55" y="45" fill="#666" className="text-[10px]">COMPLIANT</text>
        </svg>
      )
    },
    {
      name: "ISO",
      description: "9001:2015",
      icon: (
        <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
          <circle cx="60" cy="30" r="25" stroke="#003366" strokeWidth="3" />
          <text x="60" y="35" textAnchor="middle" fill="#003366" className="font-bold text-xl">ISO</text>
          <text x="60" y="48" textAnchor="middle" fill="#666" className="text-[8px]">9001:2015</text>
        </svg>
      )
    },
    {
      name: "AAPC",
      description: "EDUCATION PROVIDER",
      icon: (
        <svg viewBox="0 0 120 60" fill="none" className="h-full w-full">
          <circle cx="25" cy="30" r="20" stroke="#003366" strokeWidth="3" />
          <text x="50" y="35" fill="#003366" className="font-bold text-2xl">AAPC</text>
          <text x="50" y="48" fill="#666" className="text-[8px]">EDUCATION PROVIDER</text>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#f0f9ff] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-black text-3xl lg:text-4xl font-extrabold mb-16 lg:mb-20">
          In Association With
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {associations.map((item, index) => (
            <div 
              key={index}
              className="bg-white w-[220px] h-[120px] rounded-xl shadow-md flex items-center justify-center p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-full">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
