"use client";

import React from "react";
import Image from "next/image";
import icon1 from "../assets/special-icon1.png";
import icon2 from "../assets/special-icon2.png";
import icon3 from "../assets/special-icon3.png";
import icon4 from "../assets/special-icon4.png";
import icon5 from "../assets/special-icon5.png";
import icon6 from "../assets/special-icon6.png";
import icon7 from "../assets/special-icon7.png";
import icon8 from "../assets/special-icon8.png";
import icon9 from "../assets/special-icon9.png";
import icon10 from "../assets/special-icon10.png";

const Specialties = () => {
  const specialties = [
    {
      name: "Ambulatory Surgery",
      icon: <Image src={icon1} alt="Ambulatory Surgery" width={100} height={100} className="w-16 h-16 object-contain" />
    },
    {
      name: "Neurosurgery",
      icon: <Image src={icon2} alt="Neurosurgery" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Thoracic Surgery",
      icon: <Image src={icon3} alt="Thoracic Surgery" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Pathology",
      icon: <Image src={icon4} alt="Pathology" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Dermatology",
      icon: <Image src={icon5} alt="Dermatology" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Oncology",
      icon: <Image src={icon6} alt="Oncology" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Gastroenterology",
      icon: <Image src={icon7} alt="Gastroenterology" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Radiology",
      icon: <Image src={icon8} alt="Radiology" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "Ob Gyn",
      icon: <Image src={icon9} alt="Ob Gyn" width={64} height={64} className="w-16 h-16 object-contain" />
    },
    {
      name: "DME",
      icon: <Image src={icon10} alt="DME" width={64} height={64} className="w-16 h-16 object-contain" />
    }
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Visual Arcs Bottom-Left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] border-40 border-[#8cc63f]/5 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] border-20 border-[#8cc63f]/10 rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <h2 className="text-black text-4xl lg:text-[40px] font-bold mb-24 tracking-tight">
          Our Specialties
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-20 lg:gap-y-32 gap-x-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center space-y-6"
            >
              <div className="h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {specialty.icon}
              </div>
              <h3 className="text-[#333] text-sm lg:text-base font-semibold transition-colors duration-300 group-hover:text-[#004a99]">
                {specialty.name}
              </h3>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-32">
          <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-10 py-3 rounded-full text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md transform hover:scale-105">
            View All Specialties
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Specialties;
