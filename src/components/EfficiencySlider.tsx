"use client";

import React from "react";
import Image from "next/image";
import efficiencyImg from "../assets/operational-emergency.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EfficiencySlider = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Content */}
        <div className="lg:w-2/5 flex flex-col items-start relative order-2 lg:order-1">
          {/* Quote Icon */}
          <div className="mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M14 26H5V16H15V26C15 32 11 36 5 36" 
                stroke="#8cc63f" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="opacity-40"
              />
              <path 
                d="M34 26H25V16H35V26C35 32 31 36 25 36" 
                stroke="#8cc63f" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="opacity-40"
              />
            </svg>
          </div>
          
          <h2 className="text-[#004a99] text-3xl lg:text-5xl font-extrabold leading-tight mb-8">
            Increased Operational Efficiency
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
            Our software keeps you organized throughout the day with a robust "to-do" list that provides notifications for all of your tasks.
          </p>

          {/* Slider Navigation (Bottom Left) */}
          <div className="mt-16 flex items-center gap-16">
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-[#004a99] transition-colors p-2 -ml-2">
                <ChevronLeft size={20} strokeWidth={3} />
              </button>
              <button className="text-gray-400 hover:text-[#004a99] transition-colors p-2">
                <ChevronRight size={20} strokeWidth={3} />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex items-center gap-3">
              <div className="w-12 lg:w-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-3/5 rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl relative h-[350px] sm:h-[450px] lg:h-[650px] w-full order-1 lg:order-2 ring-1 ring-black/5">
          <Image 
            src={efficiencyImg} 
            alt="Increased Operational Efficiency" 
            fill
          
            className="object-cover object-[center_25%]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default EfficiencySlider;
