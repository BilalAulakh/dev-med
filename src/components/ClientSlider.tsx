"use client";
import React, { useState, useEffect } from "react";

export default function ClientSlider({ items }: { items: React.ReactNode[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="w-full relative overflow-hidden pb-4">
      <div 
         className="flex transition-transform duration-500 ease-in-out w-full"
         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
         {items.map((item, idx) => (
           <div key={idx} className="w-full shrink-0 px-1">
             {item}
           </div>
         ))}
      </div>
       
      {/* Dots and Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8 text-gray-400">
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
            className="hover:text-[#111] transition-colors p-2 cursor-pointer"
            aria-label="Previous slide"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="flex gap-1.5">
             {items.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#111] w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
             ))}
          </div>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
            className="hover:text-[#111] transition-colors p-2 cursor-pointer"
            aria-label="Next slide"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
      </div>
    </div>
  );
}
