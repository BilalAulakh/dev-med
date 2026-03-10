import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Imaging Center Billing Services | MedCare MSO",
  description: "Comprehensive Billing services that meet the specific needs of an imaging center.",
};

const ImagingBillingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Dark Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f2e4a]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-10">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6 drop-shadow-md">
            Imaging Center Billing Services
          </h1>
          <p className="text-sm md:text-base opacity-95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm mb-10">
            MedCare MSO provides a comprehensive billing services to meet the specific needs of an imaging center. Our specialized imaging center medical billing
            company has a proven track record of reducing operational costs, increasing revenue, and accelerating cash flow while delivering exceptional patient care
            and maintaining a healthy patient-provider relationship. 
            <br/><br/>
            However, imaging center billing entails a complex combination of specialized skills, intricate coding guidelines, and accurate medical coding that requires an
            experienced, reliable, and competent team with deep knowledge of medical imaging technology and its associated billing regulations.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-[#0f2e4a] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-sm tracking-wide uppercase">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* 2. Case Study Results (Stats) */}
      <section className="py-20 bg-[#fbfcfd] relative overflow-hidden">
         {/* Decorative light blue circle */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#e6f0f9] rounded-full translate-x-1/3 -translate-y-1/3 z-0 blur-2xl"></div>
         
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111] mb-12">Case Study Results</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { 
                   value: "3rd May", 
                   label: "Timeframe",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                     </svg>
                   )
                 },
                 { 
                   value: "7 Months", 
                   label: "Average Duration",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                     </svg>
                   )
                 },
                 { 
                   value: "$80,000 to $144,000", 
                   label: "Collections Increased",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                     </svg>
                   )
                 },
                 { 
                   value: "37.4%", 
                   label: "Revenue Increased By",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                     </svg>
                   )
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                    <div className="mb-6 p-3 bg-gray-50 rounded-lg">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#111] mb-2">{item.value}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-wide font-semibold">{item.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Expert Billing for Modern Imaging Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
           <div className="md:w-1/2 space-y-6">
              <h2 className="text-[#111] text-3xl md:text-[45px] font-bold mb-4 leading-tight">Expert Billing for Modern <br/> Imaging Services</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                 Looking for a dedicated medical billing partner who can effectively handle your 
                 medical practice's complex operations? Connect with MedCare MSO to access top-tier 
                 <Link href="#" className="text-[#8cc63f] font-semibold hover:underline"> medical billing services</Link> tailored specifically to supercharge your collections and 
                 ensure overall practice financial profitability.
              </p>
              <div className="pt-2">
                 <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                    Our Services
                 </button>
              </div>
           </div>
           
           <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
              {/* Blue semi-circle background under the image */}
              <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#0080ff] rounded-full translate-x-[15%] translate-y-[10%] z-0"></div>
              <img src="https://images.unsplash.com/photo-1594824436998-f60ba8bbbfac?q=80&w=2574&auto=format&fit=crop" alt="Smiling representative" className="relative z-10 h-[500px] object-cover object-top rounded-t-[180px] rounded-br-[180px] shadow-lg" />
           </div>
        </div>
      </section>

      {/* 4. 35% Reduction Banner */}
      <section className="py-12 bg-white flex justify-center">
         <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="bg-gradient-to-r from-[#005c93] via-[#0070b8] to-[#8cc63f] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
               <div className="p-10 md:p-14 md:w-2/3 flex flex-col justify-center relative z-10 text-white space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold">35% Reduction in A/R</h3>
                  <p className="text-blue-50 max-w-lg font-medium leading-relaxed">
                     Our expert optimizes imaging center billing with <br/> accurate coding, fast claims processing, and a 98.5% <br/> First Pass Clean Claims Rate.
                  </p>
                  <div>
                     <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md text-sm uppercase tracking-wider mt-4">
                        Request a free consult
                     </button>
                  </div>
               </div>
               <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop" alt="Doctor giving thumbs up" className="absolute top-0 right-0 w-[150%] h-[150%] max-w-none object-cover object-top origin-top-right transform -translate-y-8 translate-x-12 mix-blend-luminosity opacity-90" />
               </div>
            </div>
         </div>
      </section>

      {/* 5. New Technologies Section */}
      <section className="py-24 bg-[#14142B] relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 gap-16">
            <div className="md:w-1/2 w-full flex justify-center">
               <img src="https://images.unsplash.com/photo-1530213786676-487aca3ad00f?q=80&w=2670&auto=format&fit=crop" alt="X-ray" className="w-full max-w-md h-auto mix-blend-lighten" />
            </div>
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight">
                  New Technologies Mean <br/> Complicated Coding
               </h2>
               <p className="text-gray-300 text-sm leading-relaxed max-w-xl font-medium">
                  As clinical technology goes hand-in-hand with diagnostic imaging, it gives rise to new medical services on nearly a daily basis, causing complexities and complications in creating your medical claims. Due to this increased innovation, your medical office stands the risk of increased denials from insurance portals. This happens due to missing information, inaccurate medical codes, and incorrect guidelines regarding your services. It's time to resolve these hurdles by partnering with an advanced medical billing company like MedCare MSO. Let our experienced <Link href="#" className="text-[#8cc63f] font-semibold hover:underline">radiology billing experts</Link> manage your cash flow, optimize your claims management processes, and eliminate errors to keep your medical billing operations afloat. Say goodbye to delayed and denied claims, missed opportunities, and revenue loss!
               </p>
               <div className="pt-4">
                  <button className="bg-transparent border border-white hover:bg-white hover:text-[#111] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider flex items-center">
                     Get A Quote <span className="ml-2 font-black">›</span>
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Our Focus Is Revenue */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#005c93] mb-6">Our Focus Is Revenue So Yours Can Be Patient Care</h2>
            <p className="text-gray-500 text-sm md:text-base mb-16 leading-relaxed font-medium">
               We understand that new technologies mean complicated coding, especially when your equipment generates multiple billing lines. Our specialized imaging medical coders understand the intricacies of unbundling and modifier usage to ensure that every charge is captured accurately without triggering audits. By entrusting your complex billing to our <Link href="#" className="text-[#0080ff] hover:underline font-semibold">imaging billing experts</Link>, you free up valuable time and resources, allowing your center to focus solely on diagnosing patients. Experience peace of mind with our dedicated team.
            </p>

            <div className="flex flex-col md:flex-row gap-6 text-left">
               <div className="md:w-1/2 bg-[#f8fafc] p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#111] mb-4">Comprehensive Radiology Billing Services</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     MedCare MSO offers a comprehensive radiology practice management infrastructure with a proven history of success that guarantees end-to-end management of complex billing issues, revenue assurance, compliance, and profitability. We provide robust analysis and reporting frameworks that offer transparent and continuous improvement. Let us shoulder the burden of complex radiology billing while you steer your center to success.
                  </p>
               </div>
               <div className="md:w-1/2 bg-[#f8fafc] p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#111] mb-4">Free Your Attention</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     By shifting the administrative burden to specialized teams, your professionals can direct their full attention towards elevating patient care standards. Trying to navigate the dense complexities of imaging billing can significantly diminish available resources that can be strategically employed to scale your business.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Connect Banner */}
      <section className="py-12 bg-[#fbfcfd] border-t border-gray-100 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 max-w-[1400px] mx-auto">
         <h3 className="text-[#111] font-bold text-xl md:text-2xl w-full md:w-2/3 mb-4 md:mb-0">Partner with MedCare MSO Today For A Secure Financial Future</h3>
         <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider whitespace-nowrap">
            Let's Connect
         </button>
      </section>

      {/* 8. Schedule a Free Demo Yellow CTA */}
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

export default ImagingBillingPage;
