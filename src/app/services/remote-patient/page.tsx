import Image from "next/image";
import Link from "next/link";
import ClientSlider from "@/components/ClientSlider";

export const metadata = {
  title: "Remote Patient Monitoring Services | MedCare MSO",
  description: "Remote tracking of patient health data to improve outcomes. Our expert RPM solutions are designed explicitly for health practices.",
};

const RemotePatientMonitoringPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-12">
        {/* Background Image with Dark Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f2e4a]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-4">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6 drop-shadow-md">
            Remote Patient Monitoring Services
          </h1>
          <p className="text-sm md:text-base opacity-95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm mb-10">
            Advanced Remote Patient Monitoring (RPM) solutions designed explicitly for health practices. We
            offer a comprehensive suite of services that combine cutting-edge technology with personalized
            care, allowing you to monitor and manage your patients' health remotely.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-[#0f2e4a] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-sm tracking-wide uppercase">
            Let's Talk
          </button>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="relative max-w-[1200px] mx-auto px-4 z-20 -mt-24 mb-20">
         <div className="bg-white rounded-[20px] shadow-xl border border-gray-100 py-8 px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">90%</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Client Retention</div>
            </div>
            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">10%</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Increase in Revenue</div>
            </div>
            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">15%</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Reduction in Readmissions</div>
            </div>
            <div className="flex flex-col items-center border-r-0 md:border-r border-gray-100 pb-4 md:pb-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">8,000+</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Patients Monitored</div>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
               <svg className="w-8 h-8 text-[#0080ff] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <div className="text-xl font-bold text-[#111] mb-1">98.5%</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Customer Satisfaction</div>
            </div>
         </div>
      </section>

      <div className="text-center mb-12 px-4 max-w-4xl mx-auto">
         <h2 className="text-2xl md:text-4xl font-bold text-[#111] mb-4">MedCare MSO Remote Patient Monitoring Services in USA</h2>
      </div>

      {/* 3. Feature Rows (Zig Zag vertical layout) */}
      <div className="bg-[#fbfcfd] flex flex-col gap-0 pb-16 pt-10">
         {/* Row 1 */}
         <section className="py-12 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full relative flex justify-center lg:justify-start">
                  <div className="relative w-[90%] md:w-full max-w-[500px]">
                     <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop" alt="Doctor reviewing data" className="rounded-[40px] shadow-lg border border-gray-100 object-cover w-full h-[350px]" />
                     <div className="absolute -bottom-6 right-10 bg-[#feedde] p-3 pr-8 rounded-xl shadow-md border border-[#fedbb2] flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-white shrink-0">
                           <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <span className="text-[#96540b] font-bold text-sm">Real-time alerts & monitoring</span>
                     </div>
                     {/* Blue semi circle decoration behind */}
                     <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#e6f0f9] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                  </div>
               </div>
               <div className="md:w-1/2 space-y-6">
                  <div className="inline-block bg-[#0080ff] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">TECHNOLOGY</div>
                  <h3 className="text-2xl md:text-[32px] font-bold text-[#111] leading-tight">AI-Powered Compliance & Care Tracking</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     The utilization of remote monitoring systems allows for streamlined and automated monitoring processes, freeing up healthcare staff to focus on critical tasks, reducing administrative burden, minimizing the risk of errors, and ensuring patient adherence, enhancing productivity.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     Our robust, HIPAA-compliant platform seamlessly integrates with your existing workflow and Electronic Health Records (EHR). Providing real-time dashboard data visualization tools, automated alerts, and customizable reporting, giving you immediate insights into your patients' health status. We provide specialized care managers handling all alerts, resulting in less workload, and fewer hospital readmissions.
                  </p>
               </div>
            </div>
         </section>

         {/* Row 2 */}
         <section className="py-12 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#e6f0f9] rounded-full translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"></div>
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 order-2 md:order-1 space-y-6 lg:pl-8">
                  <h3 className="text-2xl md:text-[32px] font-bold text-[#111] leading-tight">Patient Engagement & Device Management</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     We manage the entire logistics process, including provisioning connected devices directly to patients' homes. Our patient onboarding team guides patients on how to use devices properly, ensuring data accuracy and boosting overall patient engagements.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     Further, patient enrollment relies on proactive outreach and tailored communication strategies to engage patients in remote setups. We understand these intricacies, offering strategic guidance and streamlined processes to facilitate smooth patient enrollment in your RPM programs.
                  </p>
                  <div className="pt-2">
                     <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                        Learn More
                     </button>
                  </div>
               </div>
               <div className="md:w-1/2 w-full relative flex justify-center lg:justify-end order-1 md:order-2">
                  <div className="relative w-[90%] md:w-full max-w-[500px]">
                     <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Customer service team" className="rounded-[40px] shadow-lg border border-gray-100 object-cover w-full h-[350px]" />
                     <div className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow-md">
                         <svg className="w-8 h-8 text-[#0080ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                     </div>
                     <div className="absolute -bottom-6 right-10 bg-white p-4 rounded-xl shadow-md border border-[#e6f0f9] flex flex-col gap-2 min-w-[200px]">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#111]">
                           <div className="w-2 h-2 rounded-full bg-[#0080ff]"></div> Connected Devices
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-[#111]">
                           <div className="w-2 h-2 rounded-full bg-[#0080ff]"></div> Patient Education
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Row 3 */}
         <section className="py-12 relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-80 h-80 bg-[#e6f0f9] rounded-full -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"></div>
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full relative flex justify-center lg:justify-start">
                  <div className="relative w-[90%] md:w-full max-w-[500px]">
                     <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop" alt="Colleagues discussing" className="rounded-[40px] shadow-lg border border-gray-100 object-cover w-full h-[350px]" />
                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-[#111]">Claim Approval Rate</span>
                           <span className="text-xs font-bold text-[#8cc63f]">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                           <div className="bg-[#8cc63f] h-1.5 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-[#111]">Claim Denial Rate</span>
                           <span className="text-xs font-bold text-[#f59e0b]">2%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                           <div className="bg-[#f59e0b] h-1.5 rounded-full" style={{ width: '2%' }}></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-[32px] font-bold text-[#111] leading-tight">End-to-End Revenue Cycle Management</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     Navigating the billing complexities associated with RPM can be challenging. Our expert team ensures that all eligible services are accurately coded and billed to Medicare, Medicaid, and commercial payers, maximizing your reimbursement and avoiding compliance pitfalls.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     MedCare MSO RPM service seamlessly embeds directly into our premier full-service medical billing cycle. So, from device set-up and patient enrollment to verifying insurance and optimizing RPM codes to follow up on denials, we have got you covered.
                  </p>
               </div>
            </div>
         </section>

         {/* Row 4 */}
         <section className="py-12 relative overflow-hidden">
            <div className="absolute right-0 top-1/2 w-64 h-64 bg-[#e6f0f9] rounded-full translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"></div>
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 order-2 md:order-1 space-y-6 lg:pl-8">
                  <h3 className="text-2xl md:text-[32px] font-bold text-[#111] leading-tight">Data Integration, Analytics & Staff Augmentation</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     Actionable data empowers clinicians to formulate data-driven decisions regarding treatments over the long run. We integrate comprehensive analytics tailored towards healthcare facilities specifically, giving your practice an edge over your competitors.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                     Furthermore, offering RPM services shouldn't mean overwhelming your clinical staff. Our team of certified clinical staff acts as an extension of your practice, handling routine monitoring and alerts, allowing your physicians to focus on patients who require immediate attention.
                  </p>
               </div>
               <div className="md:w-1/2 w-full relative flex justify-center lg:justify-end order-1 md:order-2">
                  <div className="relative w-[90%] md:w-full max-w-[500px]">
                     <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" alt="Doctor looking at laptop" className="rounded-[40px] shadow-lg border border-gray-100 object-cover w-full h-[350px]" />
                     <div className="absolute -bottom-6 left-10 bg-[#eef8eb] p-4 rounded-xl shadow-md border border-[#c4e5b3] flex items-center gap-3 w-64">
                        <div className="w-10 h-10 rounded-full bg-[#8cc63f] flex items-center justify-center text-white shrink-0 font-bold">✓</div>
                        <div>
                           <div className="text-[#3b660c] font-bold text-xs mb-1">Advanced Analytics Insights</div>
                           <div className="text-gray-500 text-[10px] w-full bg-white h-1.5 rounded-full overflow-hidden">
                               <div className="bg-[#8cc63f] h-full" style={{width: '75%'}}></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>

      {/* 4. Essential Remote Patient Monitoring Banner Area */}
      <section className="py-20 bg-white relative">
         <div className="absolute left-0 top-1/2 w-80 h-80 bg-[#edf5fd] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
         <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/3 flex justify-center relative">
               <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop" alt="Smiling doctor with laptop" className="w-[80%] md:w-full max-w-[300px] object-cover object-top h-[450px] mask-image-bottom-fade shadow-xl" style={{ filter: "drop-shadow(0 20px 13px rgba(0,0,0,0.03))" }} />
               {/* Decorative green arrow */}
               <svg className="absolute w-[150%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[#8cc63f] opacity-80" viewBox="0 0 200 200" fill="none">
                  <path d="M 20,150 C 60,180 160,150 160,80 C 160,30 100,20 100,50 L 120,40 M 100,50 L 80,40" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
               </svg>
               {/* 2 Floating stat cards */}
               <div className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase">Patient Engagement</span>
                  <span className="text-[#005c93] font-black text-xl">95%</span>
               </div>
               <div className="absolute top-1/2 right-0 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase">Staff Efficiency</span>
                  <span className="text-[#8cc63f] font-black text-xl">40%↑</span>
               </div>
            </div>
            <div className="md:w-2/3 space-y-6 text-center md:text-left">
               <h2 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight mb-4">Essential Remote Patient <br className="hidden md:block"/> Monitoring</h2>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  We offer a complete suite of proactive solutions and essential RPM products. When combined with care management programs, this leads to an expansive improvement in health, leading to greater financial compensation for hospitals.
               </p>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  We supply patients with FDA-approved, easy-to-use devices that automatically transmit vital signs (e.g., blood pressure, glucose, weight) to our secure platform. Thus improving patient comfort. We ensure reliable data gathering with fewer errors compared to manual reporting and recording.
               </p>
            </div>
         </div>
      </section>

      {/* 5. Device Icons Grid */}
      <section className="py-12 bg-white">
          <div className="max-w-[1000px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-16">
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center text-[#0080ff] mb-3">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16m-8-8h16" strokeLinecap="round"/></svg>
                </div>
                <span className="text-xs font-bold text-center text-[#111]">Blood Pressure Monitors</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center text-[#0080ff] mb-3">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
                </div>
                <span className="text-xs font-bold text-center text-[#111]">Continuous Glucose Monitors</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center text-[#0080ff] mb-3">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/></svg>
                </div>
                <span className="text-xs font-bold text-center text-[#111]">Oximeters and Spirometers</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f0f7ff] rounded-2xl flex items-center justify-center text-[#0080ff] mb-3">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M8 12h8" strokeLinecap="round"/></svg>
                </div>
                <span className="text-xs font-bold text-center text-[#111]">Digital Weight Monitors</span>
             </div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-4 flex justify-center">
              <div className="bg-gradient-to-tr from-[#005c93] to-[#0080ff] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between w-full shadow-lg gap-6 text-center md:text-left">
                 <h4 className="text-white font-bold text-xl leading-snug">Bring A Turnkey RPM Solution Into Your Organization</h4>
                 <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider whitespace-nowrap">
                    Let's Connect
                 </button>
              </div>
          </div>
      </section>

      {/* 6. Benefits Section */}
      <section className="py-20 bg-white">
         <div className="max-w-[1400px] mx-auto px-4 text-center border-t border-gray-100 pt-16">
            <h2 className="text-2xl md:text-[34px] font-bold text-[#111] mb-2 leading-tight">Remote Management Partners for Healthcare</h2>
            <p className="text-gray-500 mb-12 text-sm font-medium">Unlock practice capacity to generate greater medical bills efficiently while ensuring patients recover faster.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
               {[
                 { title: "Increased Practice Earnings", desc: "Remote management services can be billed on recurring basis bringing a steady stream of income via a new structure." },
                 { title: "Fill Gaps In Patient Care Needs", desc: "Proactive monitoring reduces expensive ER visits, and hospital readmissions by prioritizing preventive care, lowering total cost of care." },
                 { title: "Early Detection & Intervention", desc: "Remote devices enable providers to monitor health vitals in real-time, detecting irregularities instantly and allowing timely medical interventions." },
                 { title: "Reduction in Administrative Burden", desc: "Allows clinics to focus exclusively on patient treatment rather than spending time on device tracking and administrative issues." },
                 { title: "Better Medical Data Accuracy", desc: "Devices like CGMs and BP monitors send data automatically ensuring 100% accurate results compared to patient self-reporting." },
                 { title: "Decrease Hospital Admissions", desc: "Routine health management significantly limits likelihood of acute ailments developing thereby lowering overall hospitalization." },
                 { title: "Cost-Effective Model for Practice", desc: "RPM minimizes the necessity of hiring dedicated staff exclusively for care tasks resulting in lower overhead." },
                 { title: "Personalized Patient Engagement", desc: "Daily monitoring enhances trust and ensures patients feel constantly supervised thus strengthening their relationship with clinics." }
               ].map((card, i) => (
                  <div key={i} className="bg-[#f0f4f8] p-6 rounded-2xl hover:shadow-md transition-shadow group">
                     <div className="w-10 h-10 flex items-center justify-center text-[#005c93] mb-4 bg-white rounded-lg group-hover:bg-[#005c93] group-hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                     </div>
                     <h4 className="font-bold text-[#111] text-sm mb-2 leading-snug">{card.title}</h4>
                     <p className="text-xs text-gray-500 leading-relaxed font-medium">{card.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Why Choose MedCare MSO */}
      <section className="bg-[#fbfcfd] py-16 overflow-hidden border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 w-full flex justify-center lg:justify-start">
               {/* Doctor wearing glasses */}
               <div className="relative w-[350px] md:max-w-md h-[400px]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#e6f0f9] rounded-full -z-10"></div>
                  {/* Decorative green sweep */}
                  <svg className="absolute -left-10 top-1/2 w-[450px] h-[200px] -z-5 text-[#8cc63f] opacity-80 -translate-y-1/2" viewBox="0 0 200 100" fill="none">
                     <path d="M 0,50 Q 80,0 200,50" stroke="currentColor" strokeWidth="20" strokeLinecap="round" fill="none"/>
                  </svg>
                  <img src="https://images.unsplash.com/photo-1594824436998-f60ba8bbbfac?q=80&w=2574&auto=format&fit=crop" alt="Smiling doctor with glasses" className="w-full h-full object-cover object-top mask-image-bottom-fade" style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }} />
               </div>
            </div>
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight mb-8">Why Choose MedCare MSO For <br className="hidden md:block"/> Remote Patient Monitoring <br className="hidden md:block"/> Services?</h2>
               
               <ul className="space-y-4">
                  {[
                     "Turnkey solutions tailored to individual practice.",
                     "Customizable protocols ensuring care aligns with guidelines.",
                     "Seamless integration with major EHR platforms efficiently.",
                     "Experienced clinical staff conducting monitoring and alerts.",
                     "Strict compliance with HIPAA and Medicare regulatory standards.",
                     "Dedicated account managers providing actionable analytics.",
                     "Higher patient adoption rates reducing technical grievances."
                  ].map((item, idx) => (
                     <li key={idx} className="flex items-start">
                        <span className="bg-[#8cc63f] w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 shrink-0">
                           <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                        </span>
                        <span className="text-gray-600 font-medium text-sm leading-relaxed">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* 8. Partner Logos Banner */}
      <section className="bg-[#0f2e4a] py-8">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center">
            <h3 className="text-white text-xl font-bold mb-6">Our Proud Partners & Integrations</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full">
               <div className="bg-white rounded px-4 py-3 h-16 w-32 flex items-center justify-center overflow-hidden"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/EClinicalWorks_Logo.svg/2560px-EClinicalWorks_Logo.svg.png" className="w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/></div>
               <div className="bg-white rounded px-4 py-3 h-16 w-32 flex items-center justify-center overflow-hidden"><img src="https://logos-world.net/wp-content/uploads/2021/08/Kareo-Logo.png" className="w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/></div>
               <div className="bg-white rounded px-4 py-3 h-16 w-32 flex items-center justify-center overflow-hidden font-serif font-black text-2xl text-gray-400 italic">OPIE</div>
               <div className="bg-white rounded px-4 py-3 h-16 w-32 flex items-center justify-center overflow-hidden"><img src="https://upload.wikimedia.org/wikipedia/commons/0/07/AdvancedMD_Logo.png" className="w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/></div>
               <div className="bg-white rounded px-4 py-3 h-16 w-32 flex items-center justify-center overflow-hidden"><img src="https://cdn-images.curemd.com/images/curemd-logo.png" className="w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" style={{filter: 'brightness(0) opacity(50%)'}}/></div>
            </div>
         </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
         <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#eaf4ec] rounded-full translate-x-1/2 translate-y-1/2 z-0 hidden md:block"></div>
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-[45px] font-bold text-[#111] mb-16 text-center">What Our Clients Say About Working With Us</h2>
            
            <ClientSlider items={[
               <div key="rpm_t1" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
                  <div className="w-full lg:w-3/5 flex justify-center lg:justify-start items-center gap-4 overflow-hidden">
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 1" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" alt="Client 2" />
                     </div>
                     <div className="w-1/3 bg-[#8cc63f] rounded-2xl h-[340px] overflow-hidden shadow-lg relative">
                        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Client 3" />
                     </div>
                  </div>
                  
                  <div className="w-full lg:w-2/5 lg:pl-8 space-y-6 flex flex-col justify-center">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Efficient</h3>
                     <p className="text-[#005c93] font-bold text-[15px] leading-relaxed relative z-10">
                        "Working with MedCare MSO has greatly streamlined our remote monitoring services. The entire team has a deep understanding of our specialty and they have worked with us for our medical billing needs efficiently."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">RICHARD S.</h4>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Family Medicine, Texas, USA</p>
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
               <div key="rpm_t2" className="flex flex-col lg:flex-row gap-12 text-center lg:text-left">
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
                  
                  <div className="w-full lg:w-2/5 lg:pl-8 space-y-6 flex flex-col justify-center">
                     <div className="text-[120px] text-[#0080ff]/20 font-serif leading-none absolute -mt-10 -ml-4">"</div>
                     <h3 className="text-4xl font-black text-[#005c93] leading-tight relative z-10">Outstanding</h3>
                     <p className="text-[#005c93] font-bold text-[15px] leading-relaxed relative z-10">
                        "MedCare MSO takes away the daily administrative burden from our staff so we can focus solely on delivering excellent healthcare. Their remote patient monitoring platform integrates wonderfully."
                     </p>
                     <div>
                        <h4 className="font-bold text-[#111] text-lg uppercase">PATRICIA M.</h4>
                        <p className="text-gray-500 text-xs uppercase tracking-wide">Cardiology Specialist, Florida, USA</p>
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

      {/* 10. FAQs */}
      <section className="py-24 bg-white border-b border-gray-100">
         <div className="max-w-5xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-10">Frequently Asked Questions</h2>
               <div className="space-y-0 text-left">
                  <div className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex flex-col group">
                     <div className="flex justify-between items-center w-full">
                        <h4 className="text-sm font-bold text-[#005c93] pr-8 uppercase tracking-wide">WHAT DEVICES ARE INCLUDED IN YOUR RPM PROGRAM?</h4>
                        <span className="text-[#005c93] font-bold text-2xl group-hover:text-[#8cc63f] transition-colors">-</span>
                     </div>
                     <div className="pt-4 text-sm text-gray-600 font-medium leading-relaxed pr-8">
                        Our program encompasses FDA-cleared devices including digital blood pressure monitors, continuous glucose monitors, spirometers, pulse oximeters, and digital weight scales tailored to the specific chronic conditions of the patient.
                     </div>
                  </div>
                  {[
                    "HOW IS PATIENT DATA TRANSMITTED AND STORED SECURELY?",
                    "DO YOU PROVIDE ONGOING SUPPORT FOR THE PATIENTS?",
                    "ARE MEDICARE BENEFICIARIES ELIGIBLE FOR RPM SERVICES?",
                    "WHAT IS THE MINIMUM VOLUME REQUIRED TO START?",
                    "DO YOU HANDLE THE BILLING CODES CPT 99453, 99454, 99457 AND 99458?"
                  ].map((q, idx) => (
                    <div key={idx} className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex justify-between items-center group">
                       <h4 className="text-sm font-bold text-[#333] group-hover:text-[#005c93] transition-colors pr-8 uppercase tracking-wide">{q}</h4>
                       <span className="text-gray-400 font-bold text-2xl group-hover:text-[#8cc63f] transition-colors">+</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200"></div>
               </div>
               
               <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-6">
                  <h4 className="text-sm font-bold text-[#111]">Join 34,700+ Practitioners relying on MedCare MSO Today.</h4>
                  <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider mt-4 md:mt-0">
                     Talk to an Expert
                  </button>
               </div>
         </div>
      </section>

      {/* 11. Schedule a Free Demo Yellow CTA */}
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

export default RemotePatientMonitoringPage;
