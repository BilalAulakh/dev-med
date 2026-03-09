"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import client1 from "../assets/expertise_rcm.png"; // Placeholder
import client2 from "../assets/expertise_staffing.png"; // Placeholder
import client3 from "../assets/expertise_management.png"; // Placeholder

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Decoration Top-Right */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#8cc63f]/10 rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-24 text-black">
          What Our Clients Say About Working With Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Images Grid */}
          <div className="flex gap-4 lg:gap-6 w-full lg:w-2/3">
            {[client1, client2, client3].map((img, idx) => (
              <div 
                key={idx} 
                className={`relative flex-1 aspect-3/4 rounded-2xl overflow-hidden bg-[#8cc63f] transition-all duration-500 ${idx === 2 ? 'ring-4 ring-black/5' : ''}`}
              >
                <Image 
                  src={img} 
                  alt="Client" 
                  fill 
                  className="object-cover grayscale mix-blend-multiply opacity-90"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-start relative">
            {/* Quote Icon */}
            <div className="absolute -top-12 -right-4 lg:-right-8 opacity-20">
              <svg width="84" height="84" viewBox="0 0 48 48" fill="none" className="text-[#8cc63f]">
                <path d="M14 26H5V16H15V26C15 32 11 36 5 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34 26H25V16H35V26C35 32 31 36 25 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-[#004a99] text-3xl lg:text-4xl font-extrabold mb-6">
              Exceptional
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 italic">
              "MedCare MSO's exceptional communication and expertise elevated our RCM experience and my bank accounts!"
            </p>
            
            <div className="mb-8">
              <p className="font-bold text-black text-lg">Kelly Ballou</p>
              <p className="text-gray-400 text-sm">Owner, R.D.</p>
            </div>

            <button className="bg-black text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-20">
          <div className="flex gap-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === 2 ? 'w-4 bg-gray-800' : 'w-2 bg-gray-200'}`}></div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-400 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 text-gray-400 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
