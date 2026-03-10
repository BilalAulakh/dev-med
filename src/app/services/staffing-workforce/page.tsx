import Image from "next/image";
import Link from "next/link";
import ClientSlider from "@/components/ClientSlider";

export const metadata = {
  title: "Staffing and Workforce Services | MedCare MSO",
  description: "On-demand Front and Back Office Support to Increase Growth. Want a simple solution to your staffing shortage?",
};

const StaffingWorkforcePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Dark Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f2e4a]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-10">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6 drop-shadow-md">
            Want A Simple Solution To Your Staffing <br className="hidden md:block"/> Shortage? MedCare Force
          </h1>
          <p className="text-sm md:text-base opacity-95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm mb-10">
            MedCare Force is our personnel signage medical staffing across the country, eradicating difficulty in hiring
            sufficient personnel keeping your businesses functioning. Reduces turnover, cost of recruitment for each
            recruiter they place. We provide an extension of your own staff and a remote team of experienced staff
            proficient reading scheduling, insurance verification, updating electronic medical records, credentialing, and
            much more.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-[#0f2e4a] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-sm tracking-wide uppercase">
            Request Demo
          </button>
        </div>
      </section>

      {/* 2. Workforce & Staffing Process Section */}
      <section className="py-20 bg-white relative text-center">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#111] mb-6">MedCare MSO's Workforce & Staffing Process</h2>
            <p className="text-gray-500 mb-12 text-sm max-w-4xl mx-auto leading-relaxed font-medium">
               At MedCare Force we aim to alleviate your staffing challenges. We offer medical personnel globally so that we can have experts available that match perfectly to your organizational requirements. Our thorough process guarantees to find you dedicated talent.
            </p>
            
            <ClientSlider items={[
               <div key="group1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-2">
                  {[
                    {
                      title: "Streamline Critical Processes",
                      desc: "You operate and direct operations while your dedicated MedCare Force team takes off administrative tasks so you can focus on core objectives.",
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="6" cy="6" r="3"></circle>
                           <circle cx="6" cy="18" r="3"></circle>
                           <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                           <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                           <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                        </svg>
                      )
                    },
                    {
                      title: "Increase Profitability and Growth Potential",
                      desc: "By quickly onboarding experienced pros with highly specialized skills in specific areas so you can focus on scale and growth while expanding your services quickly without overhead of typical full-time employees.",
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="12" y1="20" x2="12" y2="10"></line>
                           <line x1="18" y1="20" x2="18" y2="4"></line>
                           <line x1="6" y1="20" x2="6" y2="16"></line>
                           <polyline points="4 14 12 6 18 12"></polyline>
                        </svg>
                      )
                    },
                    {
                      title: "Improve Turnaround Time",
                      desc: "MedCare Force operates globally across differing time zones so work gets done quickly and accurately, allowing for turnaround times that are difficult to achieve internally. So you can ensure rapid processing and reduce backlogs.",
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                           <polyline points="12 6 12 12 16 14"></polyline>
                           <path d="M16 4l-4-4"></path>
                        </svg>
                      )
                    },
                    {
                      title: "Reduce Overhead by 50% or More",
                      desc: "Achieve significant savings on overhead without sacrificing quality. Staff from developing regions are ready and trained to perform administrative work at a fraction of the cost within your local market.",
                      icon: (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                           <circle cx="12" cy="7" r="4"></circle>
                           <line x1="12" y1="11" x2="12" y2="17"></line>
                           <line x1="9" y1="14" x2="15" y2="14"></line>
                        </svg>
                      )
                    }
                  ].map((card, i) => (
                     <div key={i} className="bg-[#f0f4f8] p-8 rounded-2xl flex flex-col hover:shadow-md transition-shadow">
                        <div className="mb-6 opacity-70">
                           {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#111] mb-4 leading-tight">{card.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed font-semibold">{card.desc}</p>
                     </div>
                  ))}
               </div>,
               <div key="group2" className="flex items-center justify-center p-12 bg-[#f0f4f8] rounded-2xl h-full border-2 border-dashed border-gray-200">
                  <p className="text-gray-500 font-bold text-center">Custom Process Phases <br/><span className="font-normal text-sm">Additional steps can be configured here.</span></p>
               </div>
            ]} />
         </div>
      </section>

      {/* 3. Transform Your Revenue Cycle Section */}
      <section className="py-24 bg-[#fbfcfd] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e6f0f9] rounded-full translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
           <div className="md:w-1/2 space-y-6">
              <h2 className="text-[#111] text-3xl md:text-[40px] font-bold mb-4 leading-tight">Find Out How Partnership with MedCare MSO Can Transform Your Revenue Cycle</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                 We are a 100% US-based operation with an extensive track record of delivering superior practice management and Revenue Cycle Management solutions to medical practices of all sizes across multiple specialties. Discover our comprehensive, end-to-end medical billing and coding capabilities by scheduling a complimentary consultation today. Contact us for a free quote.
              </p>
           </div>
           
           <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0 relative">
              {/* Illustration of people shaking hands */}
              <div className="w-full max-w-lg bg-transparent relative">
                 <svg className="w-full h-auto drop-shadow-md" viewBox="0 0 500 400" fill="none">
                    {/* Abstract background elements */}
                    <circle cx="50" cy="100" r="10" fill="#a4d3ee"/>
                    <circle cx="50" cy="130" r="10" fill="#a4d3ee"/>
                    <circle cx="50" cy="160" r="10" fill="#a4d3ee"/>
                    {/* Document */}
                    <rect x="330" y="50" width="100" height="120" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                    <line x1="350" y1="70" x2="390" y2="70" stroke="#8cc63f" strokeWidth="4"/>
                    <line x1="350" y1="90" x2="410" y2="90" stroke="#e2e8f0" strokeWidth="2"/>
                    <polyline points="350 120 370 140 400 110" stroke="#8cc63f" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Desk */}
                    <line x1="100" y1="360" x2="450" y2="360" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
                    {/* Green Suit Person (Right) */}
                    <path d="M300 360 L320 200 L400 200 L420 360" fill="white" stroke="#111" strokeWidth="2"/>
                    <path d="M330 200 L320 140 L380 140 L390 200" fill="white" stroke="#111" strokeWidth="2"/>
                    <circle cx="355" cy="110" r="30" fill="white" stroke="#111" strokeWidth="2"/>
                    <path d="M320 200 L250 250 L260 270 L340 220" fill="#8cc63f" stroke="#111" strokeWidth="2"/>
                    <path d="M400 200 L430 250 L410 270 L390 220" fill="#8cc63f" stroke="#111" strokeWidth="2"/>
                    <rect x="330" y="260" width="70" height="80" rx="4" fill="#f59e0b" stroke="#111" strokeWidth="2"/>
                    {/* White Coat/Shirt Person (Left) */}
                    <path d="M120 360 L140 220 L240 220 L250 360" fill="white" stroke="#111" strokeWidth="2"/>
                    <circle cx="190" cy="130" r="35" fill="white" stroke="#111" strokeWidth="2"/>
                    {/* Arm shaking hand */}
                    <path d="M220 230 L350 300 L330 320 L210 260" fill="#0070b8" stroke="#111" strokeWidth="2"/>
                    <path d="M240 220 L300 270 L300 310 L250 250" fill="white" stroke="#111" strokeWidth="2"/>
                 </svg>
              </div>
           </div>
        </div>
      </section>

      {/* 4. MedCare Force Services Grid */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-12">MedCare Force Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
               {[
                 {
                   title: "Revenue Cycle Assessment",
                   desc: "If you are unsure where your team falls behind let us conduct an entire cycle assessment. From eligibility to patient statements, our gap analysis pinpoints inefficiencies across your revenue cycle and presents tailored, actionable solutions to maximize revenues.",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <polyline points="11 8 11 11 14 14"></polyline>
                     </svg>
                   )
                 },
                 {
                   title: "Medical Dictation and Transcription",
                   desc: "Our medical transcriptionists can transcribe audio notes via voice recordings. Dictation software and EMR notes can seamlessly organize all notes, documentation, updates and convert raw materials into standardized formats within EMK systems.",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                     </svg>
                   )
                 },
                 {
                   title: "Medical Coding",
                   desc: "MedCare Force ensures coding experts with vast experience accurately parsing the complex nuances of medical coding to assign accurate codes. They will get your maximum reimbursement while accelerating your revenue cycle without compliance pitfalls.",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        <path d="M12 11h4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 16h.01"></path>
                     </svg>
                   )
                 },
                 {
                   title: "Indexing and Documentation",
                   desc: "Our indexing services systematically process and categorize scanning medical documents, charts and charges to correct patient and records folder. We ensure accuracy of files including history sheets, labs logs reports and results. Accurate mapping of items enhances clinical decision making.",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                     </svg>
                   )
                 },
                 {
                   title: "Prior Authorization",
                   desc: "The single biggest administrative burden affecting your bottom line. Securing prior authorizations is critical for smooth billing. MedCare Force specialists navigate the requirements across specialties to verify and document medical necessity to avoid claim denials, accelerate processing and ensure timely reimbursement, improving your revenue.",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                     </svg>
                   )
                 },
                 {
                   title: "Virtual Front Desk Services",
                   desc: "Our Virtual Front Desk Teams can handle all your administrative aspects of the front office that can be done remotely. They will schedule/resend/cancel appointments, perform remote demographic entry, and verify insurance coverages and deductibles remotely.",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                     </svg>
                   )
                 }
               ].map((card, i) => (
                  <div key={i} className="bg-[#f8fafc] p-8 rounded-xl border border-gray-100 hover:shadow-md transition-all group relative overflow-hidden">
                     {/* Light green hover overlay effect placeholder */}
                     <div className="mb-4">
                        <div className="w-12 h-12 bg-[#e6f0f9] rounded-full flex items-center justify-center shrink-0">
                           {card.icon}
                        </div>
                     </div>
                     <h3 className="text-[17px] font-bold text-[#111] mb-3 leading-snug group-hover:text-[#005c93] transition-colors">{card.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed font-medium pb-2 border-l-2 border-transparent group-hover:border-[#8cc63f] pl-1 transition-all duration-300">
                        {/* Highlighting specific keywords if they match part of the description based on the screenshot, but doing it generically here */}
                        <span dangerouslySetInnerHTML={{__html: card.desc.replace(/(gap analysis|transcribe audio notes|medical coding|Prior authorizations|compliance pitfalls|verify insurance coverages)/gi, "<span class='text-[#8cc63f] font-semibold'>$&</span>")}} />
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. What Do Customers Love About MedCare Force? (Testimonials) */}
      <section className="py-24 bg-[#fbfcfd] border-y border-gray-100 relative overflow-hidden">
         <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#eaf4ec] rounded-full translate-x-[30%] translate-y-[30%] z-0"></div>
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h3 className="text-center text-sm font-bold tracking-wide uppercase text-gray-800 mb-2">What Do Customers Love About MedCare Force?</h3>
            <h2 className="text-3xl md:text-[45px] font-bold text-[#111] mb-16 text-center">Let Our Clients Fill You In</h2>
            
            <ClientSlider items={[
               <div key="t1" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
                  {/* 3 Photos on left */}
                  <div className="w-full lg:w-3/5 flex justify-center lg:justify-start items-center gap-4 overflow-hidden">
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 1" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 2" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 3" />
                     </div>
                  </div>
                  
                  {/* Testimonial Quote on right */}
                  <div className="w-full lg:w-2/5 lg:pl-8 space-y-6 flex flex-col justify-center text-left">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Outstanding</h3>
                     <p className="text-[#005c93] font-bold text-[15px] leading-relaxed relative z-10">
                        "MedCare MSO is a very well structured organization. The entire team has a deep understanding of our specialty and they have worked with us for our medical billing needs. They ensure we met all of our terms of standard operating procedures prior to sending us the required resources."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">JAMES L.</h4>
                        <p className="text-gray-500 text-xs">Chief Operating Officer, Florida, USA</p>
                     </div>
                     <div className="pt-2 flex justify-center lg:justify-start">
                        <button className="bg-[#111] hover:bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                           Read All
                        </button>
                     </div>
                     <div className="pt-2 flex justify-center lg:justify-start">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhT6R8aNixuH8hL4O4T_fQn0d_f32jS5-Ecw&s" alt="Ion logo" className="h-8 grayscale opacity-70" />
                     </div>
                  </div>
               </div>,
               <div key="t2" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
                  {/* 3 Photos on left */}
                  <div className="w-full lg:w-3/5 flex justify-center lg:justify-start items-center gap-4 overflow-hidden">
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 4" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 5" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 6" />
                     </div>
                  </div>
                  
                  {/* Testimonial Quote on right */}
                  <div className="w-full lg:w-2/5 lg:pl-8 space-y-6 flex flex-col justify-center text-left">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Incredible Support</h3>
                     <p className="text-[#005c93] font-bold text-[15px] leading-relaxed relative z-10">
                        "The MedCare Force team provided exactly the right medical staffing needed to clear our administrative backlogs quickly. The professionalism and swiftness with which they integrated into our operations were truly impressive."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">SARAH M.</h4>
                        <p className="text-gray-500 text-xs">Clinical Director, New York, USA</p>
                     </div>
                     <div className="pt-2 flex justify-center lg:justify-start">
                        <button className="bg-[#111] hover:bg-gray-800 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                           Read All
                        </button>
                     </div>
                     <div className="pt-2 flex justify-center lg:justify-start">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Trustpilot_logo.svg/1024px-Trustpilot_logo.svg.png" alt="Trustpilot" className="h-6 opacity-70" />
                     </div>
                  </div>
               </div>
            ]} />
         </div>
      </section>

      {/* 6. Contact Banner Strip */}
      <section className="py-8 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 max-w-[1400px] mx-auto gap-4 md:gap-0">
         <h3 className="text-[#111] font-bold text-lg md:text-xl w-full md:w-3/4 text-center md:text-left">
            If You Have The Right Process, People and Technology, You Can Solve Any Problem Start streamlining your operations / procedures today!
         </h3>
         <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider whitespace-nowrap">
            Let's Connect
         </button>
      </section>

      {/* 7. Schedule a Free Demo Yellow CTA */}
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

export default StaffingWorkforcePage;
