import Image from "next/image";
import Link from "next/link";
import ClientSlider from "@/components/ClientSlider";

export const metadata = {
  title: "Chronic Care Management | MedCare MSO",
  description: "Provide continuous care and coordinate services for patients to improve health outcomes and generate additional practice revenue.",
};

const ChronicCarePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-12">
        {/* Background Image with Dark Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f2e4a]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-4">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6 drop-shadow-md">
            Chronic Care Management
          </h1>
          <p className="text-sm md:text-base opacity-95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm mb-10">
            Provide continuous care and coordinate services for patients to improve health outcomes and generate additional practice revenue without hiring more staff or significantly adding to your daily workload.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-[#0f2e4a] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-sm tracking-wide uppercase">
            Let's Talk
          </button>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="relative max-w-[1200px] mx-auto px-4 z-20 -mt-24 mb-20">
         <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">Reduce ED visits by</div>
               <div className="text-lg font-black text-[#8cc63f]">35%</div>
            </div>
            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">Generate</div>
               <div className="text-lg font-black text-[#8cc63f]">$40k/yr</div>
            </div>
            <div className="flex flex-col items-center border-r-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">Average Cost</div>
               <div className="text-lg font-black text-[#8cc63f]">$10/Patient/Month</div>
            </div>
            <div className="flex flex-col items-center">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">Dedicated</div>
               <div className="text-lg font-black text-[#8cc63f]">Care Manager</div>
            </div>
         </div>
      </section>

      {/* 3. Feature Rows (Zig Zag) */}
      <div className="bg-white flex flex-col py-10">
         {/* Row 1 */}
         <section className="py-12 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-80 h-80 bg-[#f4f9f7] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full relative order-2 md:order-1 flex justify-center lg:justify-start">
                  <div className="bg-[#f0f7ff] rounded-3xl p-4 md:p-6 w-full max-w-[500px] relative">
                     <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2670&auto=format&fit=crop" alt="Doctor and patient" className="rounded-2xl object-cover w-full h-[350px] shadow-sm" />
                     <div className="absolute -bottom-6 left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0080ff] flex items-center justify-center text-white font-bold">✓</div>
                        <div>
                           <div className="text-sm font-bold text-[#111]">Patient Education</div>
                           <div className="text-xs text-gray-500">Continuous support</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2 space-y-6 lg:pl-8">
                  <div className="inline-block bg-[#0080ff] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Transform</div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">Transform Management Services For Your Organization's Support</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     The Centers for Medicare and Medicaid Services (CMS) recognizes Chronic Care Management (CCM) as a critical component of primary care that contributes to better health and reduced overall healthcare costs. MedCare MSO's CCM program is designed to provide comprehensive, continuous care for Medicare beneficiaries with two or more chronic conditions.
                  </p>
               </div>
            </div>
         </section>

         {/* Row 2 */}
         <section className="py-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#e6f0f9] rounded-full translate-x-1/2 translate-y-1/4 z-0 blur-3xl opacity-50"></div>
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 space-y-6 lg:pr-8">
                  <div className="inline-block bg-[#0080ff] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Provider</div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">Comprehensive Management Provider of Health Systems</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     Our Chronic Care Management services extend beyond the four walls of your practice, ensuring patients receive the support they need to adhere to care plans, manage medications, and avoid unnecessary hospital visits. We utilize advanced technology and dedicated care coordinators to deliver proactive, personalized care.
                  </p>
               </div>
               <div className="md:w-1/2 w-full relative flex justify-center lg:justify-end">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" alt="Female doctor working" className="rounded-tl-[100px] rounded-br-[100px] object-cover w-[90%] md:w-full max-w-[500px] h-[400px] shadow-lg" />
               </div>
            </div>
         </section>

         {/* Row 3 */}
         <section className="py-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full relative order-2 md:order-1 flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[500px]">
                     <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop" alt="Male doctor working" className="rounded-full object-cover w-full h-[450px] shadow-lg" />
                     <div className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-lg border border-gray-100 font-bold text-[#005c93] flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#8cc63f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        Dedicated Team
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2 space-y-6 lg:pl-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">Chronic Care Management Is A Unique Model</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">
                     Unlike episodic care, CCM offers a continuous proactive approach to patient health, which can lead to better outcomes and higher patient satisfaction.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#8cc63f] flex items-center justify-center text-white shrink-0">✓</div>
                        <span className="font-bold text-[#111] text-sm">Enhanced Patient Care</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#8cc63f] flex items-center justify-center text-white shrink-0">✓</div>
                        <span className="font-bold text-[#111] text-sm">Increased Revenue</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#8cc63f] flex items-center justify-center text-white shrink-0">✓</div>
                        <span className="font-bold text-[#111] text-sm">Improved Compliance</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#8cc63f] flex items-center justify-center text-white shrink-0">✓</div>
                        <span className="font-bold text-[#111] text-sm">Reduced Readmissions</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Row 4 */}
         <section className="py-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 space-y-6 lg:pr-8">
                  <div className="inline-block bg-[#0080ff] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Trusted Partner</div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111] leading-tight max-w-lg">A Trusted Chronic Care Billing & Management Partner</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     By partnering with a trusted service provider like MedCare MSO, practices can efficiently implement and manage CCM services without placing undue burden on their clinical staff. We handle the complexities of patient outreach, care coordination, and billing, allowing you to focus on what you do best: providing excellent patient care.
                  </p>
                  <div className="pt-2">
                     <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                        Request Consultation
                     </button>
                  </div>
               </div>
               <div className="md:w-1/2 w-full relative flex justify-center lg:justify-end">
                  <div className="bg-gray-100 rounded-2xl w-[90%] md:w-full max-w-[500px] p-2">
                     <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" alt="Female professional working" className="rounded-xl object-cover w-full h-[350px]" />
                  </div>
               </div>
            </div>
         </section>
      </div>

      {/* 4. Circular Diagram Section */}
      <section className="py-20 bg-[#fbfcfd] border-y border-gray-100 relative">
         <div className="absolute left-0 top-1/2 w-64 h-64 bg-[#e6f0f9] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
         <div className="max-w-[1100px] mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">How Does Chronic Care Management <br/> Workflow Work?</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-16">
               Implementing a successful CCM program involves a structured workflow. Here is an overview of how we seamlessly integrate Chronic Care Management into your practice's operations.
            </p>
            
            <div className="relative w-full max-w-[800px] mx-auto hidden md:block aspect-square">
               {/* Abstract representation of the circular workflow diagram */}
               <svg className="w-full h-full" viewBox="0 0 600 600">
                  <circle cx="300" cy="300" r="180" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6"/>
                  <circle cx="300" cy="300" r="80" fill="#f8fafc" stroke="#0080ff" strokeWidth="1"/>
                  <text x="300" y="300" textAnchor="middle" dominantBaseline="middle" fill="#005c93" fontWeight="bold" fontSize="16">CCM</text>
                  <text x="300" y="320" textAnchor="middle" dominantBaseline="middle" fill="#005c93" fontWeight="bold" fontSize="16">Cycle</text>

                  {/* Nodes arranged in a circle */}
                  {[
                     { cx: 300, cy: 120, label: "Check Eligibility", icon: "clipboard", color: "#8cc63f" },
                     { cx: 427, cy: 173, label: "Educate & Enroll", icon: "user-plus", color: "#0080ff" },
                     { cx: 480, cy: 300, label: "Develop Care Plan", icon: "file-text", color: "#8cc63f" },
                     { cx: 427, cy: 427, label: "Regular Check-Ins", icon: "phone", color: "#0080ff" },
                     { cx: 300, cy: 480, label: "Update Care Plan", icon: "edit", color: "#8cc63f" },
                     { cx: 173, cy: 427, label: "Document Actions", icon: "pen-tool", color: "#0080ff" },
                     { cx: 120, cy: 300, label: "Billing & Claims", icon: "dollar-sign", color: "#8cc63f" },
                     { cx: 173, cy: 173, label: "Receive Payment", icon: "check-circle", color: "#0080ff" },
                  ].map((node, i) => (
                     <g key={i}>
                        {/* Connecting lines to center */}
                        <line x1="300" y1="300" x2={node.cx} y2={node.cy} stroke="#e2e8f0" strokeWidth="2"/>
                        <circle cx={node.cx} cy={node.cy} r="35" fill="white" stroke={node.color} strokeWidth="3"/>
                        {/* Text labels outside the circles based on position */}
                        <text 
                           x={node.cx + (node.cx > 300 ? 50 : node.cx < 300 ? -50 : 0)} 
                           y={node.cy + (node.cy > 300 ? 50 : node.cy < 300 ? -50 : 0)} 
                           textAnchor={node.cx > 300 ? "start" : node.cx < 300 ? "end" : "middle"} 
                           fill="#333" 
                           fontWeight="bold" 
                           fontSize="14"
                        >
                           {node.label}
                        </text>
                        {/* Inner icons (simplified using circles/rects for SVG) */}
                        <circle cx={node.cx} cy={node.cy} r="15" fill={node.color} opacity="0.1"/>
                     </g>
                  ))}
               </svg>
            </div>
            
            {/* Mobile list view for the diagram */}
            <div className="md:hidden space-y-4 text-left px-4">
               {[
                  "1. Check Eligibility", "2. Educate & Enroll", "3. Develop Care Plan", "4. Regular Check-Ins",
                  "5. Update Care Plan", "6. Document Actions", "7. Billing & Claims", "8. Receive Payment"
               ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center font-bold text-[#005c93]">
                     <div className="w-8 h-8 rounded-full bg-[#e6f0f9] flex items-center justify-center mr-3 text-[#0080ff]">✓</div>
                     {item}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. End-to-End Solutions */}
      <section className="py-20 bg-white relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-3xl md:text-[45px] font-bold text-[#111] leading-tight">End-To-End CCM Revenue Cycle Management</h2>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  We don't just provide software; we provide a complete partnership. From identifying eligible Medicare patients to deploying experienced non-clinical staff for monthly interactions, all the way to diligent billing and claim submission, our end-to-end service covers it all. We ensure every aspect of your CCM program is handled seamlessly, maximizing your revenue potential while minimizing administrative burdens.
               </p>
            </div>
            <div className="md:w-1/2 relative flex flex-col items-center">
               {/* Female doctor with green swirl */}
               <div className="relative z-10 w-full max-w-[400px]">
                  <img src="https://images.unsplash.com/photo-1594824436998-f60ba8bbbfac?q=80&w=2574&auto=format&fit=crop" alt="Smiling doctor" className="relative z-10 w-full object-cover object-top h-[400px] rounded-t-full mask-image-bottom-fade" style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }} />
                  {/* Green swirl SVG placeholder behind doctor */}
                  <svg className="absolute inset-0 w-full h-full text-[#8cc63f] z-0 -translate-x-6 translate-y-6 opacity-80" viewBox="0 0 200 200" fill="none">
                     <path d="M 50,200 C 50,100 150,100 150,50 C 150,0 50,0 50,50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" fill="none"/>
                  </svg>
               </div>
               
               {/* 3 Floating Cards at Bottom */}
               <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center justify-between gap-6 w-[90%] md:w-full max-w-[500px] relative z-20 -mt-10 mx-auto">
                  <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-[#0080ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                     </div>
                     <span className="text-[10px] uppercase font-bold text-gray-500">Eligibility</span>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-[#0080ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                     </div>
                     <span className="text-[10px] uppercase font-bold text-gray-500">Coordination</span>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="flex flex-col items-center">
                     <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center mb-2">
                        <svg className="w-5 h-5 text-[#0080ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                     </div>
                     <span className="text-[10px] uppercase font-bold text-gray-500">Billing</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Our Core Services */}
      <section className="py-20 bg-[#fbfcfd] border-t border-gray-100">
         <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#111] mb-12">Our Core Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left mb-12">
               {[
                 { title: "Care Coordination", icon: "refresh-cw" },
                 { title: "24/7 Access to Provider", icon: "clock" },
                 { title: "Systematic Assessment", icon: "clipboard" },
                 { title: "Quality Patient Care", icon: "heart" },
                 { title: "Medication Management", icon: "activity" },
                 { title: "Remote Patient Monitoring", icon: "monitor" }
               ].map((service, i) => (
                  <div key={i} className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center shrink-0 text-[#0080ff]">
                        {/* Generic icons placeholder */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                     </div>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">Providing robust care management encompassing all patient's health-related necessities.</p>
                     </div>
                  </div>
               ))}
            </div>
            
            <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider">
               Learn More
            </button>
         </div>
      </section>

      {/* 7. Benefits (Partner For Health Clinics) */}
      <section className="py-20 bg-white text-center">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">Chronic Management Partner For Health Clinics</h2>
            <p className="text-gray-500 mb-12 text-sm font-medium">Unlock practice capacity while offering better chronic care to patients.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
               {[
                 { title: "Increase Revenue", icon: "$" },
                 { title: "Improve Patient Satisfaction", icon: "☺" },
                 { title: "Decrease ED Visits", icon: "↓" },
                 { title: "Reduce Readmission Rates", icon: "↻" },
                 { title: "Enhance Quality Metrics", icon: "★" },
                 { title: "Better Resource Allocation", icon: "◩" },
                 { title: "Improve Health Outcomes", icon: "✚" },
                 { title: "Strengthen Physician Relationship", icon: "🤝" }
               ].map((card, i) => (
                  <div key={i} className="bg-[#f0f7ff] p-6 rounded-2xl group hover:-translate-y-1 transition-transform border border-transparent hover:border-[#0080ff]/20 flex flex-col items-center text-center">
                     <div className="w-12 h-12 flex items-center justify-center text-2xl mb-4 bg-white rounded-xl shadow-sm border border-gray-100 text-[#005c93] group-hover:text-[#0080ff] transition-colors">
                        {card.icon}
                     </div>
                     <h4 className="font-bold text-[#005c93] group-hover:text-[#111] transition-colors">{card.title}</h4>
                     <p className="text-xs text-gray-500 mt-2 font-medium">Provides a steady stream of additional practice revenue.</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Why Choose MedCare MSO */}
      <section className="bg-[#f4f7fa] py-16 overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 w-full flex justify-center lg:justify-start">
               {/* Doctor holding laptop */}
               <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop" alt="Doctor holding laptop" className="w-[80%] max-w-[400px] object-cover rounded-3xl shadow-xl" />
            </div>
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-3xl md:text-4xl font-bold text-[#111] leading-tight mb-8">Why Choose MedCare MSO For <br className="hidden md:block"/> Chronic Care Management Solutions?</h2>
               
               <ul className="space-y-4">
                  {[
                     "Our expert team seamlessly integrates with your existing workflows.",
                     "We provide a comprehensive, turn-key solution with no upfront costs.",
                     "Customizable protocols ensure care aligns with your clinical guidelines.",
                     "Stringent quality assurance and compliance monitoring standards.",
                     "Transparent reporting keeps you informed of program performance.",
                     "Dedicated account managers provide personalized support and guidance."
                  ].map((item, idx) => (
                     <li key={idx} className="flex items-start">
                        <span className="bg-[#8cc63f] w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 shrink-0">
                           <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                        </span>
                        <span className="text-gray-600 font-medium text-sm leading-relaxed">{item}</span>
                     </li>
                  ))}
               </ul>
               
               <div className="pt-4">
                  <p className="text-sm font-bold text-[#111] mb-2">Ready to elevate your chronic care management program?</p>
                  <button className="text-[#0080ff] font-bold text-sm uppercase tracking-wide hover:underline focus:outline-none">
                     Request A Consultation <span className="text-xl inline-block translate-y-0.5 ml-1">»</span>
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 9. Partner Logos Banner */}
      <section className="bg-[#005c93] py-8">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center">
            <h3 className="text-white text-xl font-bold mb-6">Our Proud Partners & Integrations</h3>
            <div className="flex flex-wrap justify-center gap-4 w-full">
               {/* Placeholder White Cards for Logos */}
               {[1, 2, 3, 4, 5, 6].map((logo, i) => (
                  <div key={i} className="bg-white rounded px-6 py-3 flex items-center justify-center h-16 w-32 shadow-sm">
                     <span className="text-gray-400 font-bold text-xs opacity-50">PARTNER {logo}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24 bg-[#fbfcfd] border-b border-gray-100 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-[#eaf4ec] rounded-full translate-x-1/2 -translate-y-[20%] z-0"></div>
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-[45px] font-bold text-[#111] mb-16 text-center">What Our Clients Say About Working With Us</h2>
            
            <ClientSlider items={[
               <div key="c_t1" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
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
                  
                  <div className="w-full lg:w-2/5 lg:pl-8 space-y-6 flex flex-col justify-center text-left">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Great</h3>
                     <p className="text-[#005c93] font-bold text-[15px] leading-relaxed relative z-10">
                        "My experience working with MedCare MSO has been excellent. Their dedicated team effectively identifies areas of improvement, and provides reliable solutions tailored to my practice parameters."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">Nicole Smith</h4>
                        <p className="text-gray-500 text-xs">Managing Director, Pain Management, NY</p>
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
               </div>,
               <div key="c_t2" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
                  <div className="w-full lg:w-3/5 flex justify-center lg:justify-start items-center gap-4 overflow-hidden">
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 4" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1584043720379-b56cd91b4cce?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 5" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative">
                        <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 6" />
                     </div>
                  </div>
                  
                  <div className="w-full lg:w-2/5 lg:pl-8 space-y-6 flex flex-col justify-center text-left">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Efficient</h3>
                     <p className="text-[#005c93] font-bold text-[15px] leading-relaxed relative z-10">
                        "MedCare MSO's structured approach continuously increases practice revenue seamlessly. We rely on their expertise daily and the results speak for themselves. The staff are always available."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">ROBERT V.</h4>
                        <p className="text-gray-500 text-xs">Medical Director, California, USA</p>
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
               </div>
            ]} />
         </div>
      </section>

      {/* 11. FAQs */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-10">Frequently Asked Questions</h2>
               <div className="space-y-0 text-left">
                  <div className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex flex-col group">
                     <div className="flex justify-between items-center w-full">
                        <h4 className="text-sm font-bold text-[#005c93] pr-8 uppercase tracking-wide">WHAT IS CHRONIC CARE MANAGEMENT (CCM)?</h4>
                        <span className="text-[#005c93] font-bold text-2xl group-hover:text-[#8cc63f] transition-colors">-</span>
                     </div>
                     <div className="pt-4 text-sm text-gray-600 font-medium leading-relaxed pr-8">
                        Chronic Care Management (CCM) encompasses the comprehensive coordination of care for patients with multiple chronic conditions. It goes beyond distinct patient visits, ensuring a continuous approach to managing a patient's health overall.
                     </div>
                  </div>
                  {[
                    "HOW DOES CCM BENEFIT MY PRACTICE FINANCIALLY?",
                    "WHAT RESOURCES DO I NEED TO START A CCM PROGRAM?",
                    "DO YOU HANDLE ALL OF THE BILLING FOR CCM SERVICES?",
                    "HOW DO YOU ENSURE COMPLIANCE WITH MEDICARE REGULATIONS?"
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

      {/* 12. Schedule a Free Demo Yellow CTA */}
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

export default ChronicCarePage;
