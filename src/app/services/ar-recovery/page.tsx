import Image from "next/image";
import Link from "next/link";
import ClientSlider from "@/components/ClientSlider";

export const metadata = {
  title: "AR Recovery Services | MedCare MSO",
  description: "AR Recovery Services. Systematically increasing revenue with effective claims management.",
};

const ARRecoveryPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Dark Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f2e4a]/90 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-10">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6">
            AR Recovery Services
          </h1>
          <p className="text-sm md:text-base opacity-90 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
            MedCare MSO uses a proven framework to systematically resolve outstanding AR. Our dedicated AR recovery team conducts a comprehensive review of your 
            unpaid claims to identify patterns and root causes. We then prioritize action based on the highest likelihood of recovery. Our team will file appeals, handle 
            rejections, and resolve denials promptly. We aggressively follow up on unpaid claims on the 14th day of submission to keep your cash flow moving 
            smoothly. We also handle patient balances through clear communication and flexible payment options. With our proactive approach, you can reduce 
            your days in AR and maximize your revenue potential.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-[#0f2e4a] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-sm tracking-wide">
            Talk to an Expert
          </button>
        </div>
      </section>

      {/* 2. Case Study Results */}
      <section className="py-20 bg-[#fbfcfd] relative overflow-hidden">
         {/* Decorative light blue circles */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#e6f0f9] rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
         
         <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111] mb-12">Case Study Results</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { 
                   value: "In April", 
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
                   value: "Texas", 
                   label: "State/Location",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                     </svg>
                   )
                 },
                 { 
                   value: "$10000 to $10,000", 
                   label: "Monthly Collection Rose",
                   icon: (
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                     </svg>
                   )
                 },
            
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

      {/* 3. Systematically Increasing Revenue */}
      <section className="py-24 bg-white">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6 lg:pr-10">
               <h2 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight">Systematically increasing <br/> revenue with effective claims <br/> management</h2>
               <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium pb-4">
                  Leverage MedCare MSO's analytics dashboard to track denial rates, pinpoint root causes of delayed payments, and much more.
               </p>
               <div className="flex gap-4">
                  <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase">
                     Talk To Sales
                  </button>
                  <button className="bg-white border border-gray-300 hover:bg-gray-50 text-[#333] px-8 py-3 rounded-full font-bold shadow-sm transition-all text-sm uppercase">
                     Learn More
                  </button>
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-gray-100 p-2 rounded-xl shadow-xl w-full">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Dashboard" className="w-full h-auto rounded-lg" />
               </div>
               <div className="w-32 h-8 bg-gray-300 mx-auto rounded-b-md shadow-md"></div>
               <div className="w-48 h-2 bg-gray-400 mx-auto rounded-b-xl shadow-sm"></div>
            </div>
         </div>
      </section>

      {/* MedCare MSO's 4-Part Strategy Section Header */}
      <section className="pt-24 pb-12 bg-[#f9fafb] text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-6">MedCare MSO's 4-Part Strategy for AR Recovery</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto">
               Our completely transparent AR solutions utilize advanced technology, years of experience in the industry, and ongoing application of smart business rules to recover the maximum possible revenue.
            </p>
         </div>
      </section>

      {/* 4-Part Strategy Content */}
      <div className="bg-[#f9fafb] flex flex-col gap-0">
         {/* Strategy 1: Systematic Evaluation */}
         <section className="py-20 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full flex justify-center order-2 md:order-1">
                  {/* Decorative Illustration Placeholder */}
                  <div className="w-full max-w-md bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex items-center justify-center relative">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#e7f0f9] rounded-full blur-[40px] z-0"></div>
                     <svg className="w-full h-auto text-[#005c93] relative z-10" viewBox="0 0 400 300" fill="none">
                        {/* Abstract Pie Chart / Gear illustration */}
                        <circle cx="200" cy="150" r="100" fill="#f0f7ff" stroke="currentColor" strokeWidth="8"/>
                        <path d="M200 50 A100 100 0 0 1 300 150 L200 150 Z" fill="#8cc63f"/>
                        <circle cx="200" cy="150" r="40" fill="white" stroke="currentColor" strokeWidth="8"/>
                        <rect x="50" y="50" width="80" height="60" rx="8" fill="white" stroke="currentColor" strokeWidth="4"/>
                        <rect x="60" y="65" width="40" height="8" rx="4" fill="#8cc63f"/>
                        <rect x="60" y="85" width="60" height="8" rx="4" fill="currentColor"/>
                     </svg>
                  </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111]">Systematic Evaluation</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     When you partner with us, we don't just randomly chase unpaid claims. First, our team audits your current A/R status, evaluating outstanding accounts to identify the root causes of rejections and denials. We analyze trends related to payers, procedures, and coding errors.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Through this evaluation, we identify where the money is stuck. <span className="text-[#8cc63f] font-semibold">We offer a complete and thorough analysis of your accounts receivable.</span> Our team works seamlessly with resolving uncollectible revenue to bring it to a manageable level so that the bills get paid.
                  </p>
               </div>
            </div>
         </section>

         {/* Strategy 2: Prioritization */}
         <section className="py-20 relative overflow-hidden bg-white">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#f4f9f7] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111]">Prioritization</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Once we analyze the A/R data, the next step is assigning priority. We create structured work queues for our reps, categorizing tasks so they focus on the <span className="text-[#005c93] font-semibold">claims with the highest potential of return first</span>. Accounts with the largest outstanding balances or those approaching the payer's timely filing limit are handled immediately. This ensures that effort is directed where it will yield maximum cash flow in the shortest timeframe.
                  </p>
                  <div className="pt-4">
                     <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                        Schedule a Demo
                     </button>
                  </div>
               </div>
               <div className="md:w-1/2 w-full flex justify-center">
                  <div className="w-full max-w-md bg-white p-8 border border-gray-50 rounded-[40px] relative shadow-sm">
                     <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                        {/* Abstract Plant Growing / Money iteration */}
                        <path d="M150 250 Q200 250 200 150 T250 50" stroke="currentColor" strokeWidth="8" fill="none"/>
                        <circle cx="250" cy="50" r="20" fill="#8cc63f"/>
                        <circle cx="150" cy="150" r="15" fill="#f59e0b"/>
                        <circle cx="280" cy="120" r="18" fill="#f59e0b"/>
                        <path d="M100 280 L200 280 L200 250 Z" fill="currentColor"/>
                        {/* Watering can abstract */}
                        <path d="M80 150 L120 150 L140 200 L60 200 Z" fill="#e7f0f9"/>
                     </svg>
                  </div>
               </div>
            </div>
         </section>

         {/* Strategy 3: Claim Correction and Resubmission */}
         <section className="py-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f0f7fc] rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 w-full flex justify-center order-2 md:order-1">
                  <div className="w-full max-w-md bg-white p-8 border border-gray-50 rounded-[40px] relative shadow-sm">
                     <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                        {/* Document Correction Abstract */}
                        <rect x="100" y="40" width="160" height="220" rx="12" fill="#f0f7ff" stroke="currentColor" strokeWidth="8"/>
                        <line x1="130" y1="80" x2="230" y2="80" stroke="#8cc63f" strokeWidth="8" strokeLinecap="round"/>
                        <line x1="130" y1="120" x2="230" y2="120" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                        <line x1="130" y1="160" x2="200" y2="160" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                        <path d="M280 180 L240 220 L260 240 L300 200 Z" fill="#f59e0b"/>
                        <rect x="60" y="240" width="120" height="20" rx="4" fill="currentColor"/>
                     </svg>
                  </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111]">Claim Correction and <br/> Resubmission</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     <span className="text-[#8cc63f] font-semibold">Our certified professionals</span> carefully review denied or rejected claims to correct any missing or invalid information. Whether it's an incorrect patient ID, missing modifiers, or coding compliance issues, we correct the mistakes and promptly resubmit the claims. For claims that are unjustly denied, <span className="text-[#005c93] font-semibold">we prepare and file detailed appeals with necessary documentation</span>. This ensures maximum recovery without delaying the payment cycle. Over time, you can witness the results in your reports.
                  </p>
               </div>
            </div>
         </section>

         {/* Strategy 4: Patient Communication */}
         <section className="py-20 relative overflow-hidden bg-[#eaf4ec]">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
               <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111]">Patient Communication</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     For balances derived to the patient responsibility – such as copays, deductibles, or non-covered services – <span className="text-[#005c93] font-semibold">our team communicates respectfully and professionally with the patients</span>. We send clear, understandable statements and follow up with a friendly outreach. We explain their financial obligations, answer questions about their coverage, and help set up payment plans if needed. This <span className="text-[#8cc63f] font-semibold">patient-friendly approach accelerates recoveries while maintaining your practice's positive reputation.</span> Your patients understand their bills, and you reduce uncollected debts.
                  </p>
                  <div className="pt-4">
                     <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                        Talk To Our Experts
                     </button>
                  </div>
               </div>
               <div className="md:w-1/2 w-full flex justify-center">
                  <div className="w-full max-w-md bg-white/50 p-8 rounded-[40px] relative">
                     <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                        {/* Phone communication abstract */}
                        <rect x="220" y="40" width="120" height="220" rx="20" fill="white" stroke="currentColor" strokeWidth="8"/>
                        <rect x="260" y="55" width="40" height="6" rx="3" fill="#e7f0f9"/>
                        <circle cx="280" cy="235" r="10" stroke="currentColor" strokeWidth="4"/>
                        <rect x="80" y="100" width="120" height="60" rx="16" fill="white" stroke="#8cc63f" strokeWidth="4"/>
                        <circle cx="110" cy="130" r="10" fill="currentColor"/>
                        <circle cx="140" cy="130" r="10" fill="currentColor"/>
                        <circle cx="170" cy="130" r="10" fill="currentColor"/>
                     </svg>
                  </div>
               </div>
            </div>
         </section>
      </div>

      {/* AR Recovery Specialties Section */}
      <section className="py-24 bg-[#fbfcfd]">
         <div className="max-w-[1400px] mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-6">AR Recovery is One of Our Specialties</h2>
            <p className="text-gray-500 mb-16 text-sm max-w-5xl mx-auto leading-relaxed">
               As a firm that is completely focused on medical billing, our specialists are dedicated to managing all aspects of the Revenue Cycle safely. A single denial out of fifty might seem insignificant, but <span className="font-semibold text-gray-700">it constitutes nearly 2% of the practice's total revenue</span>. However, an organized approach can significantly drop this percentage to <span className="text-[#005c93] font-bold">well below 1%</span>. With our systematic A/R management efforts, our clients reap the benefits of low rejection rates and minimal bad debts. What makes us the ideal choice for <span className="text-[#8cc63f] font-semibold">AR Recovery services</span> is our highly effective method that minimizes claims denials and maximizes profitability for our healthcare providers.
            </p>

            <ClientSlider items={[
               <div key="group1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-2">
                  {[
                    {
                      title: "Appeal Injections and Denials",
                      desc: "Our rigorous follow-up and timely appeals ensure a significant reduction in claim denials. We actively manage denial resolution for improved accounts receivable, driving more value.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <circle cx="12" cy="12" r="10"></circle>
                           <path d="M12 16v-4"></path>
                           <path d="M12 8h.01"></path>
                        </svg>
                      )
                    },
                    {
                      title: "All Claims Pursued",
                      desc: "We don't ignore claims below a certain dollar limit. Every single unpaid claim is tracked. This is what sets us apart from other billing companies that only focus on high-value claims. All your earned money matters to us, allowing you to maximize cash flow and compliance.",
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
                      title: "Prioritization For Maximum Recovery",
                      desc: "We prioritize accounts that have the highest return on investment, assigning effort toward those that have the most strategic, financial impact to recover uncollected revenue sooner.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      )
                    },
                    {
                      title: "Dedicated AR Recovery Team",
                      desc: "We're more than just automated software. We employ a dedicated team of AR specialists to handle the complex, manual tasks of phone outreach and payer negotiations.",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                           <circle cx="9" cy="7" r="4"></circle>
                           <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      )
                    }
                  ].map((card, i) => (
                     <div key={i} className="bg-[#eef5fa] p-8 rounded-2xl flex flex-col mb-4 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                           {card.icon}
                        </div>
                        <h3 className="text-lg font-bold text-[#111] mb-4 leading-tight">{card.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                     </div>
                  ))}
               </div>,
               <div key="group2" className="flex items-center justify-center p-12 bg-[#eef5fa] rounded-2xl h-full border-2 border-dashed border-gray-200">
                  <p className="text-gray-500 font-bold text-center">More AR Recovery Specialties <br/><span className="font-normal text-sm">Additional specialties will be listed here.</span></p>
               </div>
            ]} />
         </div>
      </section>

      {/* Footer / Connect Banner */}
      <section className="py-12 bg-white border-t border-gray-100 flex items-center justify-between px-4 md:px-12 max-w-[1400px] mx-auto">
         <h3 className="text-[#111] font-bold text-xl md:text-2xl w-2/3">Can Your Current AR Team Handle Your Revenue This Way?</h3>
         <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider whitespace-nowrap">
            Let's Connect
         </button>
      </section>

      {/* Schedule a Free Demo Yellow CTA */}
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

export default ARRecoveryPage;
