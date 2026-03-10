import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import ClientSlider from "@/components/ClientSlider";

export const metadata = {
  title: "Hospital Billing Services | MedCare MSO",
  description: "Customized Hospital Billing Services for Your Unique Needs. We take a comprehensive, all-inclusive approach.",
};

const HospitalBillingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Dark Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f2e4a]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-10">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6 drop-shadow-md">
            Customized Hospital Billing Services for Your Unique <br className="hidden md:block"/> Needs
          </h1>
          <p className="text-sm md:text-base opacity-95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm mb-10">
            Hospitals have a multitude of moving parts, and managing their revenue cycle effectively is a massive undertaking. MedCare MSO offers comprehensive hospital billing services tailored to the specific needs of large healthcare organizations. Whether you run a community hospital, a regional medical center, or a multi-specialty health system, we have the expertise and infrastructure to optimize your financial performance.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-[#0f2e4a] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-sm tracking-wide uppercase">
            Let's Talk
          </button>
        </div>
      </section>

      {/* 2. Stats & Banner */}
      <section className="py-20 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0f7fc] rounded-full translate-x-1/2 -translate-y-1/2 blur-[80px] z-0"></div>
         
         <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#111] mb-12">True Results Will Amaze You</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-32 mb-16 text-center">
               <div>
                  <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">43%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Decrease Denial Rate</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">1X</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Increase In AR</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">8%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Collection Cost</div>
               </div>
            </div>
            
            {/* Blue Banner with Doctor */}
            <div className="bg-gradient-to-r from-[#005c93] to-[#0080FF] rounded-[24px] flex flex-col md:flex-row items-center justify-between p-8 md:p-12 text-white relative shadow-2xl overflow-hidden">
               <div className="md:w-3/5 relative z-10 mb-8 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                     MedCare MSO's expert team is an <br/> extension of your own. By combining <br/> hospital billing solutions with our <br/> proven methodology, we help your hospital
                  </h3>
                  <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md text-sm uppercase tracking-wider mt-2">
                     Request A Demo
                  </button>
               </div>
               <div className="md:w-2/5 absolute right-0 bottom-0 h-full flex justify-end">
                  <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop" alt="Smiling Doctor giving thumbs up" className="h-[120%] object-cover object-top right-0 absolute bottom-0 max-w-none w-auto translate-y-[10%]" />
                  {/* Gradient mask to blend image into the right side smoothly */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0080FF] via-transparent to-transparent"></div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Comprehensive Hospital Billing Services */}
      <section className="py-20 bg-[#fbfcfd] text-center">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-4">Our Comprehensive Hospital Billing Services</h2>
            <p className="text-gray-500 mb-12 text-sm max-w-4xl mx-auto leading-relaxed font-medium">
               From accurate claims submission to rigorous denial management, our suite of solutions is crafted to elevate your financial health. Here is a glimpse of what our comprehensive hospital billing services encompass:
            </p>
            
            <ClientSlider items={[
               <div key="group1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-2">
                  {[
                    {
                      title: "AR Management and Follow-Up",
                      desc: "Rigorous follow-up on outstanding accounts receivable ensures that no claim is left unresolved. We persistently pursue unpaid claims to accelerate cash flow and minimize bad debts.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                           <polyline points="14 2 14 8 20 8"></polyline>
                           <line x1="16" y1="13" x2="8" y2="13"></line>
                           <line x1="16" y1="17" x2="8" y2="17"></line>
                           <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      )
                    },
                    {
                      title: "Denial Management",
                      desc: "We analyze the root causes of denied claims, correct errors, and resubmit them promptly. Our proactive approach minimizes future denials and helps recover lost revenue.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                           <line x1="16" y1="2" x2="16" y2="6"></line>
                           <line x1="8" y1="2" x2="8" y2="6"></line>
                           <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      )
                    },
                    {
                      title: "Charge Entry",
                      desc: "Our dedicated team ensures that all services are accurately coded and entered into the billing system, capturing all eligible charges to prevent revenue leakage.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="12" y1="1" x2="12" y2="23"></line>
                           <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      )
                    },
                    {
                      title: "Insurance Verification",
                      desc: "We prioritize verifying patient insurance coverage before services are rendered, reducing the risk of claims being rejected due to eligibility issues.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                           <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      )
                    }
                  ].map((card, i) => (
                     <div key={i} className="bg-[#eff5f9] p-8 rounded-2xl flex flex-col hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 pb-0.5">
                           {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-4 leading-tight">{card.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed pb-4">{card.desc}</p>
                     </div>
                  ))}
               </div>,
               <div key="group2" className="flex items-center justify-center p-12 bg-[#eff5f9] rounded-2xl h-full border-2 border-dashed border-gray-200">
                  <p className="text-gray-500 font-bold text-center">More Hospital Billing Services <br/><span className="font-normal text-sm">Additional services will be listed here.</span></p>
               </div>
            ]} />
         </div>
      </section>

      {/* 4. How We Stay Ahead of the Curve */}
      <section className="pt-20 pb-10 bg-white text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f4f9f7] rounded-full translate-x-1/2 -translate-y-1/2 z-0"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-6">How We Stay Ahead of the Curve</h2>
         </div>
      </section>

      {/* Zig Zag Feature Rows */}
      <div className="bg-white flex flex-col gap-0 pb-20">
         
         {/* Row 1 */}
         <section className="py-16 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full flex justify-center order-2 md:order-1">
                  <div className="w-full max-w-md bg-white p-6 border border-gray-100 rounded-[40px] relative shadow-lg">
                     <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                        {/* Medical checkup / chart illustration */}
                        <rect x="50" y="50" width="140" height="200" rx="12" fill="#f0f7ff" stroke="currentColor" strokeWidth="6"/>
                        <path d="M70 100 L170 100 M70 140 L170 140" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                        <path d="M70 180 L130 180" stroke="#8cc63f" strokeWidth="6" strokeLinecap="round"/>
                        <circle cx="280" cy="150" r="40" fill="#f59e0b"/>
                        <path d="M260 150 L300 150 M280 130 L280 170" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                        <rect x="220" y="220" width="140" height="60" rx="8" fill="#e7f0f9" stroke="currentColor" strokeWidth="4"/>
                        <rect x="240" y="240" width="40" height="20" rx="4" fill="#8cc63f"/>
                        <rect x="290" y="240" width="40" height="20" rx="4" fill="currentColor"/>
                     </svg>
                  </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">Complete Hospital Billing, Coding & Revenue Cycle Management</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                     While a smooth hospital visit is expected by the patient, the billing process often falls short. Did you know 70% of hospital executives say claims are taking longer to process? This delay is straining finances and increasing the cost to collect. Don't let your hospital's billing hold you back. Enhance point-of-service cash collections, streamline clean claim rates, and minimize A/R follow-up. 
                  </p>
                  <p className="text-[#005c93] font-bold">Partner with the best hospital billing company.</p>
                  <div className="pt-2">
                     <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                        Learn More
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* Row 2 */}
         <section className="py-16 relative overflow-hidden bg-[#fbfcfd]">
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#eaf4ec] rounded-full -translate-x-1/2 translate-y-1/2 z-0"></div>
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">MedCare MSO Helps You Get Paid Faster!</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                     From managing authorization to dealing with insurance appeals, our highly skilled professionals seamlessly navigate complex billing requirements. By improving operational efficiencies, cutting down accounts receivable, and reducing days in AR, we guarantee an upsurge in your cash flow. We stay updated with changing compliance requirements, minimizing the risk of audits, and saving your hospital from potential financial strain.
                  </p>
               </div>
               <div className="md:w-1/2 w-full flex justify-center">
                  <div className="w-full max-w-md bg-white p-6 border border-gray-100 rounded-[40px] relative shadow-lg">
                     <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                        {/* Phone and money abstract illustration */}
                        <rect x="220" y="40" width="120" height="220" rx="16" fill="#f8fafc" stroke="currentColor" strokeWidth="6"/>
                        <rect x="240" y="80" width="80" height="120" rx="4" fill="white" stroke="#8cc63f" strokeWidth="4"/>
                        <polyline points="255 140 270 155 305 120" stroke="#8cc63f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="120" cy="220" r="50" fill="#f59e0b"/>
                        <path d="M120 190 L120 250 M100 220 L140 220" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none"/>
                        <path d="M60 150 Q120 100 180 150 T300 100" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="8 8" fill="none"/>
                     </svg>
                  </div>
               </div>
            </div>
         </section>

         {/* Row 3 */}
         <section className="py-16 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full flex justify-center order-2 md:order-1">
                  <div className="w-full max-w-md bg-white p-6 border border-gray-100 rounded-[40px] relative shadow-lg">
                     <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                        {/* Dashboard and chart illustration */}
                        <rect x="40" y="60" width="320" height="200" rx="12" fill="#f0f7ff" stroke="currentColor" strokeWidth="6"/>
                        <rect x="60" y="80" width="160" height="100" rx="8" fill="white" stroke="currentColor" strokeWidth="4"/>
                        <rect x="80" y="140" width="20" height="40" fill="#8cc63f"/>
                        <rect x="110" y="110" width="20" height="70" fill="#005c93"/>
                        <rect x="140" y="130" width="20" height="50" fill="#f59e0b"/>
                        <rect x="170" y="90" width="20" height="90" fill="#8cc63f"/>
                        <circle cx="290" cy="130" r="50" fill="white" stroke="currentColor" strokeWidth="4"/>
                        <path d="M290 80 A50 50 0 0 1 340 130 L290 130 Z" fill="#f59e0b"/>
                        <path d="M290 80 A50 50 0 0 0 240 130 L290 130 Z" fill="#8cc63f"/>
                     </svg>
                  </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">Advanced Hospital Billing Software for Streamlined Workflow</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                     Utilizing outdated clunky software slows down your internal operations and ultimately harms your revenue structure. Choosing MedCare MSO as your hospital billing partner equates to equipping yourself with our proprietary, high-quality, comprehensive Practice Management software. Our software streamlines workflow, increases productivity, builds transparent communication channels, ensures security, and significantly improves claim management, optimizing the revenue cycle over the long run.
                  </p>
                  <div className="pt-2">
                     <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                        Learn More
                     </button>
                  </div>
               </div>
            </div>
         </section>

      </div>

      {/* 5. What Our Clients Say (Testimonials) */}
      <section className="py-24 bg-[#fbfcfd] border-y border-gray-100 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#eaf4ec] rounded-full translate-x-1/2 -translate-y-1/2 z-0"></div>
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-16 text-center">What Our Clients Say About Working With Us</h2>
            
            <ClientSlider items={[
               <div key="t1" className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-3/5 flex justify-center items-end gap-4 overflow-hidden">
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[280px] overflow-hidden shadow-lg relative translate-y-8">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 1" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[320px] overflow-hidden shadow-lg relative">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 2" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[360px] overflow-hidden shadow-lg relative -translate-y-4">
                        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 3" />
                     </div>
                  </div>
                  
                  <div className="w-full lg:w-2/5 md:pl-8 space-y-6">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Great</h3>
                     <p className="text-[#005c93] font-bold text-lg leading-relaxed relative z-10 max-w-md">
                        "My experience working with MedCare MSO has been excellent. Their dedicated team effectively identifies areas of improvement, and provides reliable solutions tailored to my practice parameters."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg">Nicole Smith</h4>
                        <p className="text-gray-500 text-sm">Managing Director, Pain Management, NY</p>
                     </div>
                     <div className="pt-2">
                        <button className="bg-[#111] hover:bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                           Read All
                        </button>
                     </div>
                     <div className="pt-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Trustpilot_logo.svg/1024px-Trustpilot_logo.svg.png" alt="Trustpilot" className="h-6 opacity-80" />
                     </div>
                  </div>
               </div>,
               <div key="t2" className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-3/5 flex justify-center items-end gap-4 overflow-hidden">
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[280px] overflow-hidden shadow-lg relative translate-y-8 filter grayscale hover:grayscale-0 transition-duration-300">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 4" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[320px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-duration-300">
                        <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 5" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[360px] overflow-hidden shadow-lg relative -translate-y-4 filter grayscale hover:grayscale-0 transition-duration-300">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 6" />
                     </div>
                  </div>
                  
                  <div className="w-full lg:w-2/5 md:pl-8 space-y-6 flex flex-col justify-center">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Outstanding</h3>
                     <p className="text-[#005c93] font-bold text-lg leading-relaxed relative z-10 max-w-md">
                        "MedCare MSO takes away the daily administrative burden from our staff so we can focus solely on delivering excellent healthcare."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">PATRICIA M.</h4>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Cardiology Specialist, Florida, USA</p>
                     </div>
                     <div className="pt-2">
                        <button className="bg-[#111] hover:bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                           Read All
                        </button>
                     </div>
                     <div className="pt-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT6R8aNixuH8hL4O4T_fQn0d_f32jS5-Ecw&s" alt="Ion logo" className="h-8 grayscale opacity-70" />
                     </div>
                  </div>
               </div>
            ]} />
         </div>
      </section>

      {/* 6. Partner Logos Banner */}
      <section className="py-12 bg-white border-b border-gray-100">
         <div className="max-w-[1400px] mx-auto px-4 overflow-hidden relative">
            <div className="flex justify-between items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
               <span className="cursor-pointer text-gray-300 hover:text-gray-500"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></span>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/EClinicalWorks_Logo.svg/2560px-EClinicalWorks_Logo.svg.png" alt="eClinicalWorks" className="h-8 md:h-12 object-contain" />
               <img src="https://logos-world.net/wp-content/uploads/2021/08/Kareo-Logo.png" alt="Kareo" className="h-8 md:h-12 object-contain" />
               <div className="text-xl md:text-3xl font-black text-gray-400 font-serif italic">OPIE</div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/AdvancedMD_Logo.png" alt="AdvancedMD" className="h-6 md:h-10 object-contain" />
               <span className="cursor-pointer text-gray-300 hover:text-gray-500"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></span>
            </div>
         </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-10">Frequently Asked Questions</h2>
               <div className="space-y-0">
                  <div className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex flex-col group">
                     <div className="flex justify-between items-center w-full">
                        <h4 className="text-sm font-bold text-[#005c93] pr-8 uppercase tracking-wide">WHAT IS HOSPITAL BILLING?</h4>
                        <span className="text-[#005c93] font-bold text-2xl group-hover:text-[#8cc63f] transition-colors">-</span>
                     </div>
                     <div className="pt-4 text-sm text-gray-600 font-medium leading-relaxed pr-8">
                        The process of billing healthcare services rendered by a hospital is called hospital billing. It involves gathering patient info, assigning medical codes, and submitting claims. This is a vital function that ensures the hospital gets paid for services rendered.
                     </div>
                  </div>
                  {[
                    "WHY SHOULD MY HOSPITAL OUTSOURCE MEDICAL BILLING?",
                    "WHAT MEDICAL BILLING SOFTWARE DOES YOUR HOSPITAL BILLING COMPANY USE?",
                    "HOW DO I TRANSITION MY HOSPITAL'S BILLING OPERATIONS TO YOUR HOSPITAL BILLING COMPANY?",
                    "WHAT IS YOUR PRICING MODEL FOR HOSPITAL BILLING?"
                  ].map((q, idx) => (
                    <div key={idx} className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex justify-between items-center group">
                       <h4 className="text-sm font-bold text-[#333] group-hover:text-[#005c93] transition-colors pr-8 uppercase tracking-wide">{q}</h4>
                       <span className="text-gray-400 font-bold text-2xl group-hover:text-[#8cc63f] transition-colors">+</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200"></div>
               </div>
         </div>
      </section>

      {/* 8. Partner with MedCare CTA */}
      <section className="py-16 bg-[#fbfcfd] border-t border-gray-100 overflow-hidden relative">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-[#111] text-3xl md:text-5xl font-bold leading-tight">Partner with MedCare MSO to <br/> Boost Your Hospital Revenue Up <br/> to 35%!</h2>
               <p className="text-gray-500 font-medium pb-2 text-sm leading-relaxed max-w-xl">
                  Take the first step toward optimizing your billing cycle and increasing revenue by partnering with us. Book a free consultation with our experts to learn more about how our hospital billing services can help your hospital grow.
               </p>
               <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                  Talk to an Expert
               </button>
            </div>
            <div className="md:w-1/2 relative flex justify-center md:justify-end">
               <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#005c93] rounded-full translate-x-1/4 translate-y-[20%] z-0"></div>
               <img src="https://images.unsplash.com/photo-1594824436998-f60ba8bbbfac?q=80&w=2574&auto=format&fit=crop" alt="Smiling Doctor portrait" className="relative z-10 h-[500px] object-cover object-top rounded-t-full shadow-lg" />
            </div>
         </div>
      </section>

      {/* 9. Schedule a Free Demo Yellow CTA */}
      <section className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] py-8 border-y-4 border-[#111]">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center text-center md:text-left justify-between">
            <div className="mb-4 md:mb-0">
               <h2 className="text-2xl font-bold text-white mb-1">Schedule a Free Demo</h2>
               <p className="text-yellow-100 font-medium text-sm">Discover how we can help increase your revenue today.</p>
            </div>
            <div className="flex items-center bg-white/20 px-8 py-3 rounded-full backdrop-blur-sm border border-white/30">
               <svg className="w-6 h-6 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
               <span className="text-white font-black text-xl tracking-wider">800-640-6409</span>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HospitalBillingPage;
