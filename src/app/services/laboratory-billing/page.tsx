import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Laboratory Billing Services | MedCare MSO",
  description: "Streamline with Comprehensive Laboratory Billing Services. Maximize your reimbursements.",
};

const LaboratoryBillingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full pt-24 md:pt-32 pb-32 flex flex-col items-center justify-center text-center px-4 overflow-visible">
        {/* Background Image with Dark Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#0f3d5ea6] mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-white mt-10">
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-6 tracking-wide drop-shadow-md">
            Streamline with Comprehensive <br className="hidden md:block"/> Laboratory Billing Services
          </h1>
          <p className="text-sm md:text-base opacity-95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Laboratory billing requires a distinct approach compared to typical physician billing. Due to the high volume of claims and relatively low dollar variations, efficiency and accuracy are paramount. Our laboratory billing services are designed to maximize your reimbursement while ensuring full compliance.
          </p>
        </div>
      </section>

      {/* Specialty Cards (Overlapping Hero) */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 -mt-20 mb-16">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Clinical Laboratory Billing", icon: <path d="M10 2v7.31M14 2v7.31M2 13h20M7 22h10M4 13l3 9M20 13l-3 9" stroke="#8cc63f" strokeWidth="2" fill="none" /> },
              { title: "Pathology", icon: <><circle cx="12" cy="12" r="8" stroke="#005c93" strokeWidth="2" fill="none" /><line x1="12" y1="4" x2="12" y2="20" stroke="#8cc63f" strokeWidth="2" /><line x1="4" y1="12" x2="20" y2="12" stroke="#8cc63f" strokeWidth="2" /></> },
              { title: "Toxicology", icon: <><path d="M12 2L2 22h20L12 2z" stroke="#005c93" strokeWidth="2" fill="none" /><circle cx="12" cy="15" r="2" fill="#8cc63f" /></> },
              { title: "PCR", icon: <><path d="M4 12V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2v-4" stroke="#005c93" strokeWidth="2" fill="none"/><line x1="8" y1="12" x2="16" y2="12" stroke="#8cc63f" strokeWidth="2"/><line x1="8" y1="8" x2="16" y2="8" stroke="#8cc63f" strokeWidth="2"/></> },
              { title: "Phlebotomy", icon: <><path d="M12 22a10 10 0 100-20 10 10 0 000 20z" stroke="#005c93" strokeWidth="2" fill="none"/><path d="M12 6v12M6 12h12" stroke="#8cc63f" strokeWidth="2"/></> }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col justify-center items-center text-center transform hover:-translate-y-1 transition-transform">
                 <svg width="40" height="40" viewBox="0 0 24 24" className="mb-4">{item.icon}</svg>
                 <h3 className="text-sm font-bold text-[#005c93]">{item.title}</h3>
              </div>
            ))}
         </div>
      </div>

      {/* 2. 30 Years Experience Stats */}
      <section className="py-16 bg-[#fbfcfd] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e6f0f9] rounded-full translate-x-1/2 -translate-y-1/2 z-0 blur-[50px]"></div>
         <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-12">30 Years of Experience Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { value: "98%", label: "First-Pass Rate", icon: <polyline points="20 6 9 17 4 12" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/> },
                 { value: "3+", label: "Years Experience", icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/> },
                 { value: "200k", label: "Revenue Collected", icon: <><line x1="12" y1="1" x2="12" y2="23" stroke="#111" strokeWidth="2"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#111" strokeWidth="2" fill="none"/></> },
                 { value: "20+", label: "Specialties Covered", icon: <><circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="2" fill="none"/><path d="M12 16v-4M12 8h.01" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                       <svg width="24" height="24" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <div className="text-3xl font-black text-[#005c93] mb-1">{item.value}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Lab Medical Billing Services */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-[800px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6">Lab Medical Billing Services For <br/> Maximum Reimbursements</h2>
            <p className="text-gray-500 text-sm md:text-base mb-10 leading-relaxed font-medium">
               Laboratory billing is fundamentally different from other medical billing specialties. Let our experts handle the intricacies of CPT codes, modifiers, and complex regulations so you can focus on delivering accurate lab results.
            </p>
            <div className="flex justify-center gap-4">
               <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider">
                  Learn More
               </button>
               <button className="bg-white border border-gray-300 hover:bg-gray-50 text-[#333] px-8 py-3 rounded-full font-bold shadow-sm transition-all text-xs uppercase tracking-wider">
                  Contact Us
               </button>
            </div>
         </div>
      </section>

      {/* 4. Comprehensive Lab Billing Solutions */}
      <section className="py-20 bg-[#005c93] text-white">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Comprehensive Lab Billing <br/> Solutions</h2>
               <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                  We provide a complete suite of services tailored to independent clinical, reference, and pathology laboratories. From requisition scrubbing to denial management, our end-to-end approach guarantees maximum reimbursement.
               </p>
               <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                  Our team stays updated with the latest LIS integrations and coding requirements to minimize claim denials and optimize your revenue cycle.
               </p>
            </div>
            <div className="md:w-1/2 flex justify-center w-full">
               <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm flex items-center justify-between">
                  {/* Abstract representation of the gear/tech diagram */}
                  <div className="text-[#005c93] font-bold text-sm text-center">LIS Integration <br/> & API Bridges</div>
                  <div className="flex gap-2 items-center">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8cc63f" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     <div className="grid grid-cols-2 gap-2">
                        {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200"></div>)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Feature Cards Below Solutions */}
      <section className="py-16 bg-[#005c93] -mt-1 relative z-10 px-4">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Reduce Claim Denials", desc: "Our proactive approach identifies and resolves potential issues before claims are submitted, significantly reducing the likelihood of denials and underpayments." },
              { title: "Prior Authorization Support", desc: "We handle the tedious prior authorization process, ensuring that necessary approvals are secured promptly to prevent delays in processing and payment." },
              { title: "Unmatched Cloud Based Coding", desc: "Leverage our advanced, cloud-based coding platform for real-time updates and impeccable accuracy, customized for complex laboratory testing scenarios." }
            ].map((card, i) => (
               <div key={i} className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8cc63f" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#005c93] mb-4">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Collection Fees Banner */}
      <section className="py-8 bg-transparent">
         <div className="max-w-[1200px] mx-auto px-4">
            <div className="bg-gradient-to-r from-[#005c93] to-[#8cc63f] rounded-[40px] p-12 text-center text-white relative shadow-2xl overflow-hidden">
               {/* Background photo blend */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
               <div className="relative z-10">
                  <h2 className="text-[50px] md:text-[80px] font-black leading-none mb-2">2%</h2>
                  <h3 className="text-xl md:text-3xl font-bold mb-6">Collection Fees</h3>
                  <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base font-medium">
                     We offer a competitively low collection fee structure with no hidden costs. Pay only for what we successfully collect for you.
                  </p>
                  <button className="mt-8 bg-[#8cc63f] hover:bg-white hover:text-[#005c93] text-white px-8 py-3 rounded-full font-bold shadow-md transition-colors text-sm uppercase tracking-wider">
                     Get A Quote
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Lab Credentialing */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-[#f0fdf4] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]"></div>
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-[#111] text-3xl md:text-[40px] font-bold">Lab Credentialing</h2>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Proper credentialing is critical for laboratories to ensure timely payments from Medicare, Medicaid, and commercial payers. The process involves extensive paperwork and strict adherence to specific requirements.
               </p>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Our specialized team manages the entire credentialing and re-credentialing process. We maintain your CAQH profiles, track expirations for CLIA certificates, and handle payer-specific enrollment applications, keeping your lab in perfect standing.
               </p>
               <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider mt-4">
                  Learn More
               </button>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
               {/* Abstract illustration placeholder */}
               <div className="w-full max-w-md bg-[#eaf4ec] p-8 rounded-[40px] relative shadow-sm border border-green-50">
                   <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                      <rect x="120" y="40" width="160" height="220" rx="12" fill="white" stroke="currentColor" strokeWidth="8"/>
                      <circle cx="200" cy="100" r="30" fill="#8cc63f"/>
                      <rect x="150" y="160" width="100" height="8" rx="4" fill="#cbd5e1"/>
                      <rect x="150" y="180" width="80" height="8" rx="4" fill="#cbd5e1"/>
                      <path d="M260 240 L300 280 M300 240 L260 280" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round"/>
                   </svg>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Denial Management */}
      <section className="py-24 bg-[#eaf4ec] relative overflow-hidden">
         <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#dcfce7] rounded-full translate-x-1/2 -translate-y-1/2 blur-[80px]"></div>
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 w-full flex justify-center order-2 md:order-1">
               <div className="w-full max-w-md bg-white p-8 rounded-[40px] relative shadow-sm">
                   <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                      <rect x="80" y="60" width="200" height="140" rx="12" fill="#f0f7ff" stroke="currentColor" strokeWidth="8"/>
                      <path d="M120 160 L160 100 L200 140 L240 80" stroke="#8cc63f" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="280" cy="220" r="40" fill="#f59e0b"/>
                      <path d="M260 220 L300 220 M280 200 L280 240" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                   </svg>
               </div>
            </div>
            <div className="md:w-1/2 space-y-6 order-1 md:order-2">
               <h2 className="text-[#111] text-3xl md:text-[40px] font-bold">Denial Management</h2>
               <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  Laboratory claims frequently face denials due to medical necessity edits, missing demographics, or invalid diagnosis codes. We proactively address these hurdles.
               </p>
               <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  We dig deep into payer remarks to understand the root cause of every denial. By establishing robust feedback loops with your ordering providers, we help correct issues at the source. Our rigorous follow-up and timely appeals ensure a significant reduction in claim denials and increased revenue capture.
               </p>
            </div>
         </div>
      </section>

      {/* 9. The Job Isn't Getting Any Easier (Form Banner) */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop" alt="Lab Work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#333]/70 mix-blend-multiply"></div>
         </div>
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 gap-16">
            <div className="md:w-1/2 text-white">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">The Job Isn't <br className="hidden md:block" /> Getting Any Easier!</h2>
               <p className="text-gray-300 mb-8 max-w-md">
                  Is your laboratory struggling to keep up with changing billing rules and dropping reimbursements? Let us help you succeed.
               </p>
            </div>
            <div className="md:w-5/12 w-full">
               <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-[#005c93] mb-2 text-center">Free Consultation</h3>
                  <p className="text-center text-gray-500 mb-6 text-sm">Fill out the form below to connect with an expert.</p>
                  <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name *" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8cc63f] text-sm bg-transparent" />
                        <input type="text" placeholder="Last Name *" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8cc63f] text-sm bg-transparent" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <input type="email" placeholder="Email *" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8cc63f] text-sm bg-transparent" />
                        <input type="tel" placeholder="Phone *" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8cc63f] text-sm bg-transparent" />
                     </div>
                     <button type="button" className="w-full bg-[#8cc63f] hover:bg-[#7ab336] text-white py-3 rounded-lg font-bold transition-colors uppercase tracking-wide text-xs mt-4">
                        Submit
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* 10. Financial Management Reporting */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-[#111] text-3xl md:text-[40px] font-bold leading-tight">Financial Management <br/> Reporting</h2>
               <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  Transparency is key to a successful partnership. We provide comprehensive, intuitive financial reports tailored specifically for labs. Track essential metrics like Gross Charges, Net Collections, Days in A/R, and test-specific profitability.
               </p>
               <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  Our analytics go beyond basic tracking. We deliver actionable insights summarizing payer behavior, denial trends, and coding performance to help you make informed strategic decisions to grow your laboratory business.
               </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
               <div className="w-full max-w-md bg-white border border-gray-100 p-8 rounded-[40px] relative shadow-lg">
                   <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                      <rect x="40" y="40" width="320" height="220" rx="12" fill="#f8fafc" stroke="currentColor" strokeWidth="6"/>
                      <path d="M80 200 L120 120 L160 160 L200 80 L240 140 L320 60" stroke="#8cc63f" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="320" cy="60" r="10" fill="#f59e0b"/>
                      <rect x="80" y="220" width="30" height="40" fill="#005c93"/>
                      <rect x="130" y="160" width="30" height="100" fill="#8cc63f"/>
                      <rect x="180" y="100" width="30" height="160" fill="#005c93"/>
                   </svg>
               </div>
            </div>
         </div>
      </section>

      {/* 11. Benefits of Outsourced Laboratory Billing Services */}
      <section className="py-24 bg-[#eaf4ec] relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 w-full flex justify-center order-2 md:order-1">
               <div className="w-full max-w-md bg-white p-8 rounded-[40px] relative shadow-sm border border-green-50">
                   <svg className="w-full h-auto text-[#005c93]" viewBox="0 0 400 300" fill="none">
                      {/* Shield abstract */}
                      <path d="M200 40 L320 80 L320 160 C320 220 260 260 200 280 C140 260 80 220 80 160 L80 80 Z" fill="#f0fdf4" stroke="#8cc63f" strokeWidth="8" strokeLinejoin="round"/>
                      <path d="M140 160 L180 200 L260 120" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
               </div>
            </div>
            <div className="md:w-1/2 space-y-6 order-1 md:order-2">
               <h2 className="text-[#111] text-3xl md:text-[40px] font-bold leading-tight">Benefits of Outsourced <br/> Laboratory Billing Services</h2>
               <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  Running a laboratory demands severe focus on clinical excellence and quick turnaround times. Dealing with complex billing issues drains valuable resources. Outsourcing to MedCare MSO alleviates this burden.
               </p>
               <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  We reduce your overhead costs associated with hiring, training, and retaining in-house billing staff. By leveraging our specialized technology and dedicated experts, you enjoy a streamlined workflow, accelerated cash flow, and assured compliance giving you the freedom to scale operations.
               </p>
               <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-xs uppercase tracking-wider mt-4">
                  Talk to Us
               </button>
            </div>
         </div>
      </section>

      {/* 12. Complete suite of revenue billing */}
      <section className="py-24 bg-[#fbfcfd] text-center">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-[#111] text-3xl md:text-[40px] font-bold mb-12 max-w-3xl mx-auto leading-tight">
               We offer complete suite of revenue billing cycles & management services to meet your needs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
               {[
                 { title: "Patient Eligibility", desc: "Checking coverage details upfront to prevent denials related to patient benefits.", icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#005c93" strokeWidth="2" fill="none"/><circle cx="9" cy="7" r="4" stroke="#005c93" strokeWidth="2" fill="none"/><path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#005c93" strokeWidth="2" fill="none"/><path d="M16 3.13a4 4 0 010 7.75" stroke="#005c93" strokeWidth="2" fill="none"/></> },
                 { title: "PA Services", desc: "Acquiring necessary prior authorizations seamlessly to keep tests moving without delay.", icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#005c93" strokeWidth="2" fill="none"/><line x1="16" y1="2" x2="16" y2="6" stroke="#005c93" strokeWidth="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="#005c93" strokeWidth="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="#005c93" strokeWidth="2"/><path d="M9 16l2 2 4-4" stroke="#8cc63f" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></> },
                 { title: "Denial Management", desc: "Rigorous investigation and prompt resolution of rejected or denied claims to recapture lost revenue.", icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#005c93" strokeWidth="2" fill="none"/><line x1="12" y1="9" x2="12" y2="13" stroke="#005c93" strokeWidth="2"/><line x1="12" y1="17" x2="12.01" y2="17" stroke="#005c93" strokeWidth="3"/></> },
                 { title: "AR Follow Up", desc: "Aggressive follow-up on outstanding AR so no earned dollars are left on the table.", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#005c93" strokeWidth="2" fill="none"/> }
               ].map((card, i) => (
                  <div key={i} className="bg-[#eef5fa] p-8 rounded-2xl flex flex-col hover:shadow-md transition-shadow">
                     <div className="w-10 h-10 mb-6">
                        <svg width="32" height="32" viewBox="0 0 24 24">{card.icon}</svg>
                     </div>
                     <h3 className="text-xl font-bold text-[#111] mb-3">{card.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
               ))}
            </div>
            
            <div className="flex items-center justify-between max-w-[80px] mx-auto mt-10">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </div>
            </div>
         </div>
      </section>

      {/* 13. Our Services section with Doctor */}
      <section className="py-24 bg-white relative overflow-hidden text-center md:text-left">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
           <div className="md:w-1/2 space-y-8 order-2 md:order-1">
              <h2 className="text-[#111] text-3xl md:text-[45px] font-bold mb-8">Our Services</h2>
              
              <ul className="space-y-4 inline-block text-left">
                 {[
                   "Patient Registration",
                   "Verification",
                   "Medical Coding services",
                   "Claims generation & submission",
                   "AR & denials",
                   "Payment posting",
                   "Appeals for Denied Claims",
                   "Reporting & Management"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center text-[#005c93] font-bold text-lg">
                       <span className="text-[#8cc63f] mr-3 text-2xl font-black">✓</span>
                       {item}
                    </li>
                 ))}
              </ul>
              <div className="pt-4">
                 <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider">
                    Learn More
                 </button>
              </div>
           </div>
           
           <div className="md:w-1/2 w-full relative flex justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2">
              <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#005c93] rounded-full translate-x-1/4 translate-y-1/4 z-0"></div>
              <img src="https://images.unsplash.com/photo-1594824436998-f60ba8bbbfac?q=80&w=2574&auto=format&fit=crop" alt="Smiling Doctor" className="relative z-10 h-[550px] object-cover object-top rounded-t-[200px] shadow-lg" />
           </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-10">Frequently Asked Questions</h2>
               <div className="space-y-0">
                  {[
                    "Do you support generic or custom LIS platforms?",
                    "How quickly can we transition our lab billing to MedCare MSO?",
                    "Are you fully HIPAA compliant?",
                    "Do you assist with out-of-network claims for laboratories?"
                  ].map((q, idx) => (
                    <div key={idx} className="bg-transparent border-t border-gray-200 py-5 cursor-pointer flex justify-between items-center group">
                       <h4 className="text-sm font-bold text-[#333] group-hover:text-[#005c93] transition-colors pr-8">{q}</h4>
                       <span className="text-[#005c93] font-bold text-2xl group-hover:text-[#8cc63f] transition-colors">+</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200"></div>
               </div>
         </div>
      </section>

      {/* 15. Footer / Connect Banner */}
      <section className="py-12 bg-white border-t border-gray-100 flex items-center justify-between px-4 md:px-12 max-w-[1400px] mx-auto">
         <h3 className="text-[#111] font-bold text-xl md:text-2xl w-2/3">Can Your Current Lab Billing Team Handle Your Revenue This Way?</h3>
         <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wider whitespace-nowrap">
            Let's Connect
         </button>
      </section>

      {/* 16. Schedule a Free Demo Yellow CTA */}
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

export default LaboratoryBillingPage;
