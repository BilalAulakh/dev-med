import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Revenue Cycle Management | MedCare MSO",
  description: "Focused on Efficiency & Built Around Your Specialty Needs. Comprehensive Healthcare Revenue Cycle Management Services.",
};

const RCMPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative px-4 py-16 md:py-24 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10 space-y-6">
          <p className="text-[#82bc43] font-bold tracking-wider uppercase text-sm">Healthcare Revenue Cycle Management Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333] leading-tight mt-2 mb-4 tracking-[-0.02em]">
            Focused on Efficiency & Built <br className="hidden md:block"/> Around Your Specialty Needs
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8 font-medium">
            MedCare MSO uses an internal platform focused on decreasing denials, capturing missing revenue, increasing your practice revenue, decreasing patient aging, and much more.
          </p>
          <button className="bg-[#82bc43] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md uppercase tracking-wider text-sm transform hover:scale-105">
            GET A QUOTE
          </button>
        </div>
        <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-end">
           {/* Replace with actual doctor image placeholder */}
           <div className="relative w-full max-w-lg h-[550px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-[40px] overflow-hidden drop-shadow-2xl border-2 border-white">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Doctor Portrait Placeholder</div>
              {/* Decorative background shape */}
              <div className="absolute right-[-10%] top-[40%] text-[#82bc43] opacity-20 hidden lg:block pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Winning Edge */}
      <section className="py-24 bg-[#f8f9fa] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-16">The Winning Edge for Your Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-left">
             {[
               { title: "COMPREHENSIVE FINANCIAL CARE", desc: "No more worrying about your financial standing. We ensure steady cash flow for your organization." },
               { title: "A DEDICATED TEAM OF EXPERTS", desc: "Our RCM specialists, coders, and billers are thoroughly vetted and highly experienced." },
               { title: "CUSTOMIZED SOLUTIONS", desc: "We understand every practice is unique and tailor our approach to fit your specific needs." },
               { title: "DATA-DRIVEN DECISION MAKING", desc: "In-depth analytics give you a clear picture of your financial health and areas for improvement." },
               { title: "END-TO-END RCM MANAGEMENT", desc: "From patient registration to final claim resolution, we handle the entire process." },
               { title: "LATEST TECHNOLOGY ADOPTION", desc: "We utilize cutting-edge software to ensure accuracy and speed in all transactions." },
               { title: "CONTINUOUS SUPPORT & TRAINING", desc: "Your staff gets the knowledge they need to avoid front-end errors that cause denials." },
               { title: "STRICT COMPLIANCE & SECURITY", desc: "We operate with 100% HIPAA compliance, safeguarding your sensitive patient data." }
             ].map((item, idx) => (
                <div key={idx} className="bg-transparent group cursor-pointer">
                   <h3 className="text-sm font-bold text-[#333] mb-3 group-hover:text-[#005c93] transition-colors">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Why MedCare MSO */}
      <section className="py-24 bg-white relative">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] text-center mb-16 max-w-3xl mx-auto leading-tight">
               Why MedCare MSO is the Ideal Revenue Cycle Management Company for You?
            </h2>
            <div className="grid md:grid-cols-2 gap-16 mb-24">
               <div className="flex gap-4">
                  <div className="text-[#005c93] shrink-0">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-[#333] mb-4">Going Well Beyond a Standard Medical Billing Company</h3>
                     <p className="text-gray-500 text-sm leading-relaxed font-medium">As a complete revenue cycle management service, we do far more than just submit claims. We manage the entire lifecycle of a patient account, from creation to payment. Our goal is to reduce your administrative burden, minimize claim denials, and maximize your profitability. We're not just a vendor; we're your partner in success.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-[#82bc43] shrink-0">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-[#333] mb-4">Continuously Staying Ahead of the Curve</h3>
                     <p className="text-gray-500 text-sm leading-relaxed font-medium">The healthcare landscape is constantly changing. New regulations, coding updates, and compliance rules can disrupt your cash flow if you're not prepared. That's why our team continually educates themselves and upgrades our systems to ensure your practice remains compliant and profitable.</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-200">
               <div className="py-6">
                  <div className="text-5xl md:text-6xl font-black text-[#005c93] mb-3">92 <span className="text-[#0080FF] text-4xl">%</span></div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">First-pass Acceptance Rate</p>
               </div>
               <div className="py-6">
                  <div className="text-5xl md:text-6xl font-black text-[#005c93] mb-3">1.2 <span className="text-[#0080FF] text-4xl">%</span></div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">Average Denial Rate</p>
               </div>
               <div className="py-6">
                  <div className="text-5xl md:text-6xl font-black text-[#005c93] mb-3">20 <span className="text-[#0080FF] text-4xl">%</span></div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">Increase in Collections</p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. A Smarter Future of RCM */}
      <section className="py-24 bg-[#f8f9fa] overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative space-y-6">
               <div className="absolute -left-12 -top-8 text-[#82bc43] opacity-20 hidden md:block">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
               </div>
               <h2 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight mb-6 relative z-10">A Smarter & More Efficient Future of RCM with Maximus</h2>
               <p className="text-gray-500 text-base leading-relaxed relative z-10 font-medium max-w-lg">
                  Our Maximus platform handles everything from scheduling and registration to billing and reporting. It provides actionable insights into your financial health, allowing you to proactively manage your revenue instead of just reacting to issues.
               </p>
               <ul className="space-y-3 relative z-10 text-gray-700 font-semibold mt-8">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3"></span>Real-time dashboards</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3"></span>Customizable reports</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3"></span>Automated workflows</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3"></span>Predictive analytics</li>
               </ul>
               <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md text-sm mt-8 uppercase tracking-wider">
                  Explore Maximus
               </button>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-white p-2 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full flex justify-end gap-1.5 p-2 bg-gray-50/50 rounded-t-lg mb-2">
                     <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span><span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span><span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                  </div>
                  <div className="bg-gray-50 h-64 md:h-[400px] rounded-b-lg w-full flex items-center justify-center text-gray-400 font-bold border border-gray-100 border-t-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]">
                      <span className="bg-white px-4 py-2 rounded shadow-sm">Maximus Software Dashboard Placeholder</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. How We Optimize Your Revenue Cycle? */}
      <section className="py-24 bg-white">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-6 lg:pl-10">
               <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-6">How We Optimize Your Revenue Cycle?</h2>
               <h3 className="text-xl md:text-2xl font-bold text-[#005c93] leading-snug">Greater Profits through Higher Clean Claims and Lower Denials</h3>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                  We don't just process claims; we optimize the entire workflow. By catching errors before they leave the door, we significantly reduce denial rates and accelerate your payment cycles.
               </p>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mt-4">
                  The process starts from the moment the patient walks in:
               </p>
               <ul className="space-y-4 mt-8 text-gray-500 font-medium text-sm md:text-base">
                  <li className="flex items-start">
                     <div className="w-5 h-5 rounded-full bg-[#82bc43] shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                         <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <span>Thorough insurance verification to prevent issues later.</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-5 h-5 rounded-full bg-[#82bc43] shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                         <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <span>Precise medical coding to ensure optimal reimbursement.</span>
                  </li>
                  <li className="flex items-start">
                     <div className="w-5 h-5 rounded-full bg-[#82bc43] shrink-0 mr-3 mt-0.5 flex items-center justify-center">
                         <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <span>Aggressive follow-up on outstanding AR so no money is left on the table.</span>
                  </li>
               </ul>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-white p-2 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
                  <div className="w-full flex justify-start gap-1.5 p-2 bg-gray-50/50 rounded-t-lg mb-2">
                     <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span><span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span><span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  </div>
                  <div className="bg-gray-50 h-72 md:h-[450px] rounded-b-lg w-full flex items-center justify-center text-gray-400 font-bold border border-gray-100 border-t-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]">
                      <span className="bg-white px-4 py-2 rounded shadow-sm">Software Claims System Placeholder</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Comprehensive Medical Billing Solutions */}
      <section className="py-24 bg-[#f8f9fa] overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative space-y-6">
               <h2 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight mb-6 relative z-10">Comprehensive Medical Billing <br/> Solutions - We Can Handle It All</h2>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed relative z-10 font-medium max-w-xl">
                  Say goodbye to juggling multiple vendors. MedCare MSO provides an all-in-one suite of services designed to cover every aspect of your practice's financial and administrative needs.
               </p>
               <p className="text-[#333] font-bold text-sm mt-8 mb-6 uppercase tracking-wider">Our Services Include:</p>
               <ul className="space-y-4 relative z-10 text-gray-500 font-medium text-sm">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#82bc43] mr-4 shrink-0 transform rotate-45"></span>Complete Revenue Cycle Management</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#82bc43] mr-4 shrink-0 transform rotate-45"></span>Front-end Verification & Registration Support</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#82bc43] mr-4 shrink-0 transform rotate-45"></span>Expert Medical Coding & Auditing</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#82bc43] mr-4 shrink-0 transform rotate-45"></span>Detailed AR Follow-up and Denial Management</li>
               </ul>
               <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md text-sm mt-10 uppercase tracking-wider transform hover:-translate-y-0.5">
                  Learn More
               </button>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-white p-2 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
                  <div className="w-full flex justify-end gap-1.5 p-2 bg-gray-50/50 rounded-t-lg mb-2">
                     <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span><span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span><span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                  </div>
                  <div className="bg-gray-50 h-64 md:h-[400px] rounded-b-lg w-full flex items-center justify-center text-gray-400 font-bold border border-gray-100 border-t-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]">
                       <span className="bg-white px-4 py-2 rounded shadow-sm">Reporting Module Placeholder</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Testimonials */}
      <div className="bg-white py-24 pb-32 border-t border-gray-100 relative overflow-hidden">
         {/* Right side large light green arc background */}
         <div className="absolute top-0 right-[-15%] w-[600px] h-[600px] bg-[#8cc63f]/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-[45px] font-bold text-[#111] text-center mb-16">What Our Clients Say About Working With Us</h2>
            <Testimonials />
         </div>
      </div>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
               <div className="space-y-0">
                  {[
                    "Why choose an RCM company vs in-house?",
                    "How quickly can we see improvements in our revenue?",
                    "What makes MedCare MSO different from other vendors?",
                    "Do you provide customized reporting and analytics?"
                  ].map((q, idx) => (
                    <div key={idx} className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex justify-between items-center group">
                       <h4 className="text-sm font-bold text-[#333] group-hover:text-[#005c93] transition-colors pr-8">{q}</h4>
                       <span className="text-[#005c93] font-bold text-2xl group-hover:text-[#82bc43] transition-colors">+</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200"></div>
               </div>
         </div>
      </section>

      {/* 9. Final Call to Action Let's Connect */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 w-full pr-0 md:pr-10">
                <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-6 leading-tight max-w-lg">
                   Let's Connect to Unlock Peak Efficiency and Profits for Your Practice
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md font-medium">
                   We're ready to show you how our team can help ensure your practice continues to thrive. Let's build a smarter financial future together.
                </p>
            </div>
            <div className="md:w-1/2 w-full">
               <div className="bg-white rounded-[20px] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-50 p-8 lg:p-12 relative overflow-hidden h-full">
                  <h3 className="text-2xl font-bold text-[#111] mb-2">Start Collecting More</h3>
                  <p className="text-gray-500 mb-10 text-sm font-medium">Our expert advisors will assess your billing needs today.</p>
                  
                  <form className="relative z-10 space-y-6">
                     <div className="grid grid-cols-2 gap-6 w-full">
                        <input type="text" placeholder="First Name *" className="w-full bg-transparent border-b border-gray-300 px-1 py-2 text-sm focus:outline-none focus:border-[#82bc43] text-gray-700" required/>
                        <input type="text" placeholder="Last Name *" className="w-full bg-transparent border-b border-gray-300 px-1 py-2 text-sm focus:outline-none focus:border-[#82bc43] text-gray-700" required/>
                     </div>
                     <div className="grid grid-cols-2 gap-6 w-full">
                        <input type="email" placeholder="Email *" className="w-full bg-transparent border-b border-gray-300 px-1 py-2 text-sm focus:outline-none focus:border-[#82bc43] text-gray-700" required/>
                        <input type="tel" placeholder="Phone *" className="w-full bg-transparent border-b border-gray-300 px-1 py-2 text-sm focus:outline-none focus:border-[#82bc43] text-gray-700" required/>
                     </div>
                     <input type="text" placeholder="Practice Name" className="w-full bg-transparent border-b border-gray-300 px-1 py-2 text-sm focus:outline-none focus:border-[#82bc43] text-gray-700" />
                     
                     <div className="pt-4">
                        <button type="submit" className="w-full bg-[#82bc43] hover:bg-[#7ab336] text-white py-4 rounded-lg font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-md transform hover:-translate-y-0.5">
                           SUBMIT REQUEST
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default RCMPage;
