"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden flex items-center justify-center">
      {/* Background decoration arcs (similar to Specialties) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] border-40 border-blue-50/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:w-2/5 flex flex-col space-y-8 pt-4">
          <div className="space-y-4">
            <h2 className="text-black text-4xl lg:text-5xl font-extrabold leading-tight">
              Have Questions?<br />
              <span className="text-black/90">Let's discuss</span>
            </h2>
          </div>
          <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed font-medium max-w-sm">
            Fill out this form, tell us about your practice's unique needs, and get a tailored solution!
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-3/5 w-full bg-white/50 backdrop-blur-sm rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {/* Name */}
            <div className="flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors">
              <label htmlFor="name" className="text-gray-400 text-sm font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-transparent border-none outline-none text-gray-800 placeholder-transparent" 
                required
              />
            </div>

            {/* Practice Name */}
            <div className="flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors">
              <label htmlFor="practice" className="text-gray-400 text-sm font-medium">Practice Name</label>
              <input 
                type="text" 
                id="practice" 
                className="bg-transparent border-none outline-none text-gray-800 placeholder-transparent" 
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors">
              <label htmlFor="email" className="text-gray-400 text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-transparent border-none outline-none text-gray-800 placeholder-transparent" 
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors">
              <label htmlFor="phone" className="text-gray-400 text-sm font-medium">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="bg-transparent border-none outline-none text-gray-800 placeholder-transparent" 
                required
              />
            </div>

            {/* Monthly Collection (Dropdown) */}
            <div className="flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors relative">
              <label htmlFor="monthlyCollection" className="text-gray-400 text-sm font-medium">Monthly Collection</label>
              <select 
                id="monthlyCollection" 
                className="bg-transparent border-none outline-none text-gray-800 flex-1 appearance-none cursor-pointer pr-8"
              >
                <option value=""></option>
                <option value="0-10k">$0 - $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
              <div className="absolute right-0 bottom-3 pointer-events-none text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Total AR */}
            <div className="flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors">
              <label htmlFor="totalAr" className="text-gray-400 text-sm font-medium">Total AR</label>
              <input 
                type="text" 
                id="totalAr" 
                className="bg-transparent border-none outline-none text-gray-800 placeholder-transparent" 
                required
              />
            </div>

            {/* Your Message (Full Width) */}
            <div className="md:col-span-2 flex flex-col space-y-2 border-b border-gray-200 py-2 focus-within:border-[#00a3ff] transition-colors">
              <label htmlFor="message" className="text-gray-400 text-sm font-medium">Your Message</label>
              <textarea 
                id="message" 
                rows={1}
                className="bg-transparent border-none outline-none text-gray-800 placeholder-transparent resize-none" 
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                className="w-full bg-[#8cc63f] hover:bg-[#7ab336] text-white py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
