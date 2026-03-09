"use client";

import React from "react";
import Link from "next/link";
import { Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// Custom X (Twitter) icon since Lucide might not have the new X brand
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans">
      {/* 1. Yellow CTA Bar */}
      <div className="w-full bg-[#f9a825] py-8 lg:py-12 relative overflow-hidden">
        {/* Subtle Background Arcs */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] border-60 border-white/10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] border-40 border-white/5 rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 tracking-tight">
              Schedule a free Demo
            </h2>
            <p className="text-white/90 text-sm lg:text-base font-medium">
              A member of our team will get in touch with you in 12 hours.
            </p>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#f9a825] transition-transform duration-300 group-hover:scale-110">
              <Phone size={32} fill="currentColor" />
            </div>
            <div className="text-white">
              <p className="text-xs uppercase font-bold tracking-widest opacity-80">Call Us At</p>
              <p className="text-2xl lg:text-3xl font-extrabold tracking-tight">800-640-6409</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* PRODUCT */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">Product</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-[#004a99] text-sm transition-colors">Maximus RCM</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {[
                "Revenue Cycle Management",
                "Medical Billing Services",
                "Medical Billing Consulting",
                "Medical Billing Small Practices",
                "AR Recovery Services",
                "Hospital Billing Services",
                "Denial Management Services",
                "Chronic Care Management",
                "Remote Patient Monitoring"
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-500 hover:text-[#004a99] text-sm transition-colors">{service}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="#" className="text-[#00a3ff] hover:underline text-sm font-bold">View all services</Link>
              </li>
            </ul>
          </div>

          {/* SPECIALTIES */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">Specialties</h3>
            <ul className="space-y-3">
              {[
                "Rehab",
                "Oncology",
                "Psychiatric",
                "Wound Care",
                "Dermatology",
                "Cardiology",
                "FQHC",
                "Medical Clinics",
                "Podiatry"
              ].map((specialty) => (
                <li key={specialty}>
                  <Link href="#" className="text-gray-500 hover:text-[#004a99] text-sm transition-colors">{specialty}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="#" className="text-[#00a3ff] hover:underline text-sm font-bold">View all specialties</Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Webinars",
                "Blogs",
                "States",
                "White Papers",
                "Case Studies",
                "Guides",
                "Comparisons",
                "EHR Billing Services"
              ].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 hover:text-[#004a99] text-sm transition-colors">{link}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="#" className="text-[#00a3ff] hover:underline text-sm font-bold">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">Let's Get Connected</h3>
            <form className="space-y-8 pt-4">
              <div className="border-b border-gray-200 py-2">
                <label className="text-gray-400 text-xs font-semibold block mb-1">Name</label>
                <input type="text" className="w-full bg-transparent border-none outline-none text-sm text-gray-800" />
              </div>
              <div className="border-b border-gray-200 py-2">
                <label className="text-gray-400 text-xs font-semibold block mb-1">Your Email</label>
                <input type="email" className="w-full bg-transparent border-none outline-none text-sm text-gray-800" />
              </div>
              <button 
                type="submit" 
                className="bg-black text-white px-10 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-all uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="w-full border-t border-gray-100 py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex gap-6">
            {["Privacy Policy", "Return Policy", "Quality Policy", "Sitemap"].map((item) => (
              <Link key={item} href="#" className="text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <p className="text-gray-500 text-xs font-medium">
            Copyright © 2026 MedCare MSO
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-[#004a99] transition-colors"><Facebook size={18} fill="currentColor" /></Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors"><XIcon /></Link>
            <Link href="#" className="text-gray-600 hover:text-[#004a99] transition-colors"><Linkedin size={18} fill="currentColor" /></Link>
            <Link href="#" className="text-gray-600 hover:text-[#e4405f] transition-colors"><Instagram size={18} /></Link>
            <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors"><Youtube size={20} fill="currentColor" /></Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
