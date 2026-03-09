"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import efficiencyImg from "../assets/operational-emergency.png";
import doctorImg from "../assets/choose_medcare_doctor.png";
import medcareImg from "../assets/medcare-msoimg.png";

const slides = [
  {
    id: 1,
    title: "Increased Operational Efficiency",
    description:
      'Our software keeps you organized throughout the day with a robust "to-do" list that provides notifications for all of your tasks.',
    image: efficiencyImg,
    alt: "Increased Operational Efficiency",
    objectPosition: "center 25%",
  },
  {
    id: 2,
    title: "Smarter Medical Billing, Faster Revenue",
    description:
      "Automate your entire billing workflow — from charge capture to final payment — reducing denials by up to 30% and accelerating cash flow for your practice.",
    image: medcareImg,
    alt: "Medical Billing Dashboard",
    objectPosition: "center center",
  },
  {
    id: 3,
    title: "Healthcare Staffing You Can Trust",
    description:
      "From credentialed coders to front-desk professionals, our staffing solutions match highly skilled talent to your practice's unique needs — rapidly and compliantly.",
    image: doctorImg,
    alt: "Healthcare Professional",
    objectPosition: "center top",
  },
];

const EfficiencySlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 350);
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

          {/* Animated text content */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(14px)" : "translateY(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <h2 className="text-[#004a99] text-3xl lg:text-5xl font-extrabold leading-tight mb-8">
              {slide.title}
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              {slide.description}
            </p>
          </div>

          {/* Slider Navigation */}
          <div className="mt-16 flex items-center gap-8">
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="text-gray-400 hover:text-[#004a99] transition-colors p-2 -ml-2 rounded-full hover:bg-blue-50"
              >
                <ChevronLeft size={22} strokeWidth={3} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="text-gray-400 hover:text-[#004a99] transition-colors p-2 rounded-full hover:bg-blue-50"
              >
                <ChevronRight size={22} strokeWidth={3} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    backgroundColor:
                      i === current ? "#004a99" : "#d1d5db",
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="text-gray-400 text-sm font-semibold">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-3/5 rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl relative h-[350px] sm:h-[450px] lg:h-[650px] w-full order-1 lg:order-2 ring-1 ring-black/5">
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover transition-all duration-500"
            style={{
              objectPosition: slide.objectPosition,
              opacity: animating ? 0 : 1,
              transform: animating ? "scale(1.03)" : "scale(1)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default EfficiencySlider;
