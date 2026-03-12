import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Medical Billing Services | MedCare MSO",
  description: "Top Medical Billing Company in USA. Maximize your revenue and streamline your practice with our comprehensive medical billing services.",
};

const MedicalBillingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-[#003B5C] to-[#005c93] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Medical Billing Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Medical Billing Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-10">
            Transform your revenue cycle with our expert medical billing services. We manage every aspect of the billing process so you can focus on providing exceptional patient care.
          </p>
          <button className="bg-[#82bc43] hover:bg-[#72a63a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 uppercase tracking-wider">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* 2. Top Medical Billing Company Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] mb-4">Top Medical Billing Company in USA</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            We are a leading provider of comprehensive revenue cycle management and medical billing services, delivering measurable outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-extrabold text-[#0080FF] mb-2 group-hover:scale-110 transition-transform">500+</span>
              <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Providers</span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-extrabold text-[#82bc43] mb-2 group-hover:scale-110 transition-transform">32+</span>
              <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Specialties</span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-extrabold text-[#005c93] mb-2 group-hover:scale-110 transition-transform">$20k+</span>
              <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Processed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Enhancing Financial Health Banner */}
      <section className="bg-[#e9f2fb] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-[#0080FF]">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#005c93] leading-tight mb-4">
                Enhancing Financial Health of our Clients through Proactive Medical Billing Solutions
              </h2>
              <p className="text-gray-600 text-lg">
                Partner with us to minimize claim denials, accelerate cash flow, and ensure compliance across all your billing operations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-[#0080FF] hover:bg-[#005c93] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Let's Maximize Your Earnings Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] mb-4">Let's Maximize Your Earnings!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Our specialized services are tailored to boost your practice's profitability and streamline administrative burdens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "EHR Management", desc: "Seamless integration and management of electronic health records to improve clinical workflows." },
              { title: "RCM Solutions", desc: "End-to-end revenue cycle management ensuring maximizing collections and minimizing denials." },
              { title: "Credentialing Services", desc: "Efficient provider credentialing and enrollment to keep your practice compliant and ready to bill." }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#f8fbff] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e1effe] text-left group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-[#0080FF] group-hover:bg-[#0080FF] group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#005c93] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Medical Billing Management Process */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] text-center mb-16">Medical Billing Management Process</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { step: "01", title: "Patient Registration & Eligibility", desc: "Accurate input of patient demographics and insurance verification." },
                { step: "02", title: "Medical Coding", desc: "Translating medical reports into universal medical alphanumeric codes." },
                { step: "03", title: "Charge Entry", desc: "Entering coded procedures along with the appropriate fee schedule." },
                { step: "04", title: "Claim Submission", desc: "Sending bills to insurance companies through secure electronic pipelines." },
                { step: "05", title: "Payment Posting & A/R Follow-up", desc: "Reconciling payments and rigorously pursuing any outstanding claims." }
              ].map((process, idx) => (
                <div key={idx} className="flex flex-row items-start gap-4">
                  <div className="text-4xl font-bold text-[#e1effe]">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#005c93] mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#82bc43]"></span>
                       {process.title}
                    </h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white p-8 hidden md:block border-4 border-white">
               {/* Abstract process visualization placeholder */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#003B5C] to-[#0080FF] opacity-10"></div>
               <div className="h-full w-full flex flex-col justify-around py-12 items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#0080FF] shadow-[0_0_30px_rgba(0,128,255,0.5)] flex items-center justify-center text-white"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                  <div className="w-1 h-12 bg-gray-300"></div>
                  <div className="w-16 h-16 rounded-full bg-[#82bc43] shadow-[0_0_30px_rgba(130,188,67,0.5)] flex items-center justify-center text-white"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
                  <div className="w-1 h-12 bg-gray-300"></div>
                  <div className="w-16 h-16 rounded-full bg-[#FDB813] shadow-[0_0_30px_rgba(253,184,19,0.5)] flex items-center justify-center text-white"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Outsource Banner */}
      <section className="bg-gradient-to-r from-[#003B5C] to-[#005c93] py-20 text-white relative">
         <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
               <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Why Outsource Medical Billing Services?</h2>
               <p className="text-xl text-gray-200 mb-8">Outsourcing your billing lets you redirect valuable resources back into patient care while boosting your bottom line.</p>
               <ul className="space-y-4">
                 {['Reduce Billing Errors and Denials', 'Accelerate Cash Flow', 'Gain Access to Billing Experts', 'Stay Compliant with Industry Regulations', 'Save on Software and Training Costs'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg">
                       <svg className="w-6 h-6 text-[#82bc43] mr-3 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                       {item}
                    </li>
                 ))}
               </ul>
               <div className="mt-10">
                  <button className="bg-[#82bc43] hover:bg-[#72a63a] px-8 py-3 rounded-full font-bold transition-all shadow-md uppercase tracking-wider text-sm">Consult an Expert</button>
               </div>
            </div>
            <div className="hidden md:flex justify-center">
               <div className="relative w-80 h-[400px] bg-white rounded-t-full overflow-hidden border-8 border-white shadow-2xl">
                 <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                    <span className="text-gray-400 font-bold">Doctor Portrait Placeholder</span>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Comprehensive Solutions & Checklists */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           <div className="bg-[#f0f7ff] rounded-3xl p-8 relative h-[400px] flex items-center justify-center border border-blue-100">
               <span className="text-blue-300 font-bold text-xl">Devices/Software Mockup Placeholder</span>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] mb-6">Comprehensive Medical Billing Solutions</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">We provide tailored solutions that seamlessly integrate into your current operations, ensuring that your practice runs efficiently and profitably.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   'Electronic Claim Submissions',
                   'Denial Management',
                   'A/R Recovery',
                   'Patient Statements',
                   'Financial Reporting',
                   'Revenue Optimization'
                 ].map((feature, idx) => (
                    <div key={idx} className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100">
                       <div className="w-8 h-8 rounded-full bg-[#e6f2ff] flex items-center justify-center text-[#0080FF] mr-3">✓</div>
                       <span className="font-semibold text-[#005c93]">{feature}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 8. Grid of Benefits */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] mb-4">Key Benefits of Outsourcing Medical Billing</h2>
           <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">Partnering with MedCare MSO brings a multitude of advantages.</p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Cost Effective", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "HIPAA Compliant", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: "24/7 Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
                { title: "Customized Rules", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
                { title: "Fast Tracking", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "Transparency", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
                { title: "Dedicated Manager", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { title: "Detailed Reporting", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
              ].map((benefit, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow group">
                    <div className="w-16 h-16 rounded-full bg-[#f0f7ff] text-[#0080FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={benefit.icon} />
                       </svg>
                    </div>
                    <span className="font-bold text-[#005c93]">{benefit.title}</span>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 9. A Secure Journey Banner */}
      <section className="bg-[#82bc43] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h2 className="text-3xl font-bold mb-2">A Secure Journey of Your Billing Information</h2>
              <p className="opacity-90 text-lg">100% HIPAA Compliant. Your data security is our top priority.</p>
           </div>
           <button className="bg-white text-[#82bc43] hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-md transition-all uppercase tracking-wider text-sm whitespace-nowrap">
              Review Security Policy
           </button>
        </div>
      </section>

      {/* 9.5 Specialty Billing Section */}
      <section className="w-full bg-[#f9f9f9] py-24 relative overflow-hidden">
        {/* Visual Arc Bottom-Left */}
        <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] bg-[#8cc63f]/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-[#005c93] text-3xl md:text-4xl lg:text-[40px] font-medium mb-6">
            Specialty Billing with Expertise in 50+ Specialties
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-5xl mx-auto mb-16 leading-relaxed">
            Our medical billing company offers a wide range of specialty-specific billing solutions for medical practices of every size. We manage the entire billing process from insurance verification to payment posting covering mental health, behavioral health, DME, and more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                name: "Orthopedics",
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M30 40c-2 4-6 5-10 5s-6-4-6-8c0-5 6-8 12-5l4-10" />
                    <path d="M34 24c2-4 6-5 10-5s6 4 6 8c0 5-6 8-12 5l-4 10" />
                    <circle cx="48" cy="24" r="3" stroke="#8cc63f" />
                    <circle cx="50" cy="30" r="1.5" stroke="#8cc63f" />
                  </svg>
                )
              },
              { 
                name: "Ambulatory Surgery", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 40h20v14H22zM32 40v-8M20 32h24" />
                    <path d="M32 20a10 10 0 00-10 10" stroke="#8cc63f" strokeWidth="3" />
                    <rect x="28" y="24" width="8" height="8" rx="1" />
                    <path d="M32 26v4M30 28h4" stroke="#8cc63f" />
                    <path d="M24 20h16M26 16h12" />
                  </svg>
                )
              },
              { 
                name: "Neurosurgery", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M32 16c-10 0-16 8-16 16 0 6 3 10 6 12v6h20v-6c3-2 6-6 6-12 0-8-6-16-16-16z" />
                    <path d="M32 16v30" />
                    <path d="M22 26c4-2 6 2 10 2" />
                    <path d="M42 26c-4-2-6 2-10 2" />
                    <path d="M40 10l10 10M50 10l-10 10" stroke="#8cc63f" strokeWidth="2.5" />
                  </svg>
                )
              },
              { 
                name: "Oncology", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 50l14-24a10 10 0 10-12-12l14 24" />
                    <path d="M40 50L26 26" />
                    <circle cx="44" cy="40" r="6" stroke="#8cc63f" />
                    <path d="M44 37v6M41 40h6" stroke="#8cc63f" />
                  </svg>
                )
              },
              { 
                name: "Pathology", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 50h24M24 40h16M28 32h8M32 18v14M22 22a10 10 0 0120 0v10" stroke="#8cc63f" />
                    <rect x="28" y="10" width="8" height="8" />
                    <path d="M16 50v-6l20-8" />
                    <circle cx="16" cy="42" r="2" fill="#005c93" />
                  </svg>
                )
              },
              { 
                name: "Urgent Care", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20v10a14 14 0 0028 0V20" />
                    <circle cx="16" cy="18" r="4" />
                    <circle cx="48" cy="18" r="4" />
                    <path d="M32 34v10" />
                    <circle cx="32" cy="48" r="6" stroke="#8cc63f" />
                    <path d="M32 46v4M30 48h4" stroke="#8cc63f" />
                  </svg>
                )
              },
              { 
                name: "General Surgery", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 44l24-24" />
                    <rect x="36" y="16" width="6" height="20" transform="rotate(-45 36 16)" fill="#005c93" />
                    <path d="M20 54h24" stroke="#8cc63f" strokeDasharray="6 4" strokeWidth="3" />
                  </svg>
                )
              },
              { 
                name: "Dermatology", 
                icon: (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#005c93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 30v-10a4 4 0 018 0v10M28 26v-6a4 4 0 018 0v12M36 30v-4a4 4 0 018 0v14" />
                    <path d="M20 30c-4 0-8 4-8 8v12h32V36" />
                    <circle cx="48" cy="18" r="1.5" stroke="#8cc63f" />
                    <circle cx="52" cy="24" r="2" stroke="#8cc63f" />
                    <circle cx="44" cy="26" r="1.5" stroke="#8cc63f" />
                  </svg>
                )
              },
            ].map((specialty, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-center py-10 px-4 group hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <h3 className="text-gray-800 text-sm font-semibold tracking-wide">
                  {specialty.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-6">
              To explore the spectrum of our specialties, including tailored billing services for various medical niches, please click the button below.
            </p>
            {/* <button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shadow-md">
              View All Specialties
            </button> */}
          </div>
        </div>
      </section>

      {/* 10. Testimonials component reuse */}
      <div className="bg-white py-10">
         <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] text-center mb-4">What Our Clients Say About MedCare MSO</h2>
         <Testimonials />
      </div>

      {/* 11. FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-[#005c93] text-center mb-12">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {[
                { q: "How much do your medical billing services cost?", a: "Our pricing is transparent and typically based on a percentage of the total collections we recover for your practice. There are no hidden fees, and we ensure maximum return on investment." },
                { q: "Do you integrate with our existing EHR?", a: "Yes, our team is proficient across numerous top-tier electronic health record platforms. We ensure seamless integration to prevent disruptions to your daily workflow." },
                { q: "How do you handle denied claims?", a: "We have a proactive denial management strategy. Our dedicated experts analyze denials immediately, make necessary corrections, and appeal claims to recover your rightfully earned revenue quickly." },
                { q: "Are your services HIPAA compliant?", a: "Absolutely. Data security is paramount. Our entire process, infrastructure, and staff training adhere strictly to the latest HIPAA guidelines to protect sensitive patient information." }
              ].map((faq, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer group">
                    <h4 className="text-lg font-bold text-[#005c93] flex justify-between items-center group-hover:text-[#0080FF] transition-colors">
                       {faq.q}
                       <span className="text-[#82bc43] font-bold text-2xl">+</span>
                    </h4>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 12. Conclusion CTA */}
      <section className="relative py-24 bg-gradient-to-r from-[#005c93] to-[#0080FF] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-mamba.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10 px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Optimize Your Revenue Cycle?</h2>
            <p className="text-xl text-gray-100 mb-10">Join thousands of healthcare providers who trust MedCare MSO with their billing operations.</p>
            <button className="bg-[#82bc43] hover:bg-[#72a63a] text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1 uppercase tracking-wider">
               Contact Us Today
            </button>
        </div>
      </section>
    </div>
  );
};

export default MedicalBillingPage;
