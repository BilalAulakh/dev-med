"use client";

import React from "react";

const KPIComponent = () => {
  const stats = [
    { value: "35 %", label: "Reduction in A/R" },
    { value: "7 - 14", label: "Days Turnaround Time" },
    { value: "Upto 35 %", label: "Revenue Increase" },
    { value: "96 %", label: "Collection Ratio" },
    { value: "98.5 %", label: "First Pass Clean Claims Rate" },
    { value: "50 +", label: "Specialties" },
  ];

  return (
    <section className="relative w-full bg-[#f8f9fa] py-16 lg:py-24 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-gray-200 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] border border-gray-100 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-[#004a99] text-3xl lg:text-5xl font-extrabold leading-tight mb-8">
              Our Key Performance Indicators
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-xl">
              Our robust medical billing KPIs are measurable, specific, and aligned with your practice's financial goals. The results? Accurate claim transmissions, better patient care, and faster reimbursements.
            </p>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-12 lg:gap-y-16 lg:gap-x-20">
            {stats.slice(0, 2).map((stat, index) => (
              <div key={index} className="flex flex-col items-start lg:items-center text-left lg:text-center">
                <span className="text-[#212529] text-4xl lg:text-5xl font-extrabold mb-3">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 lg:mt-32">
          {stats.slice(2).map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-[#212529] text-3xl lg:text-4xl font-extrabold mb-3">
                {stat.value}
              </span>
              <span className="text-gray-500 text-xs lg:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default KPIComponent;
