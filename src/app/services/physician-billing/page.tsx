import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Physician Billing Services | MedCare MSO",
  description: "Physician Billing Services for all Size Practices. We offer top notch physician revenue cycle management services.",
};

const PhysicianBillingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Blue Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop')" }}
        >
           <div className="absolute inset-0 bg-[#005c93]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-white mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight mb-6">
            Physician Billing Services for all Size Practices
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 font-medium">
            We offer top-notch physician revenue cycle management services, encompassing all the 
            administrative and clinical functions to capture, manage, and collect patient services revenue.
          </p>
          <button className="bg-[#8cc63f] hover:bg-[#7ab336] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg uppercase tracking-wider text-sm">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* 2. Why Choose Our Physician Billing Company */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-[#005c93] text-3xl md:text-4xl font-bold mb-4">Why Choose Our Physician Billing Company?</h2>
          <p className="text-gray-500 mb-16 text-sm max-w-3xl mx-auto">
            Our commitment to excellence makes us the smartest choice for comprehensive, reliable, and compliant physician billing.
          </p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16">
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">3<span className="text-[#8cc63f]">+</span> <span className="text-lg md:text-xl text-[#005c93] font-bold uppercase tracking-wider block mt-1">YEARS</span></div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Experience</p>
             </div>
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">200 <span className="text-lg md:text-xl text-[#005c93] font-bold uppercase tracking-wider block mt-1">Thousands DOLLARS</span></div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Revenue Collected</p>
             </div>
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">20<span className="text-[#8cc63f]">+</span> <span className="text-lg md:text-xl text-[#005c93] font-bold uppercase tracking-wider block mt-1">SPECIALTIES</span></div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Expertise Across</p>
             </div>
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#111] mb-2">98<span className="text-[#8cc63f]">%</span> <span className="text-lg md:text-xl text-[#005c93] font-bold uppercase tracking-wider block mt-1">RESOLUTION RATE</span></div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Clean Claims</p>
             </div>
          </div>

          <div className="bg-gradient-to-r from-[#eef6ec] via-[#dff0d8] to-[#e7f3fa] rounded-2xl p-8 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-100">
             <div className="text-left mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#005c93] mb-2">Want to max out your collections?</h3>
                <p className="text-gray-600 font-medium">Book a meeting to get a 30-min free billing consultation with our expert.</p>
             </div>
             <button className="whitespace-nowrap bg-[#8cc63f] hover:bg-[#7ab336] text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm uppercase tracking-wide">
                Schedule Meeting Now
             </button>
          </div>
        </div>
      </section>

      {/* 3. Our Consulting Process */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-[45%]">
              <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-4">Our Consulting <br/> <span className="text-[#005c93]">Process</span></h2>
              <p className="text-gray-500 mb-8 font-medium">To get exceptional billing services you deserve</p>
              
              <ul className="space-y-4 text-[#333] font-semibold mb-8">
                 <li className="flex items-center"><span className="text-[#8cc63f] mr-3 font-bold text-xl">✓</span> HIPAA Compliant Services</li>
                 <li className="flex items-center"><span className="text-[#8cc63f] mr-3 font-bold text-xl">✓</span> Scalable Solutions</li>
                 <li className="flex items-center"><span className="text-[#8cc63f] mr-3 font-bold text-xl">✓</span> 24/7 technical support</li>
                 <li className="flex items-center"><span className="text-[#8cc63f] mr-3 font-bold text-xl">✓</span> Cost-Effective</li>
              </ul>
              
              <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-[#8cc63f] pl-4 italic">
                 "Our dedicated team goes above and beyond to provide you tailored strategies, ensuring your financial peace of mind."
              </p>
           </div>
           <div className="md:w-[55%]">
              {/* Image box/illustration instead of pure grey box */}
              <div className="w-full bg-[#e7f0f7] rounded-[30px] p-6 flex justify-center items-center shadow-inner overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop" alt="Consulting Team" className="rounded-2xl shadow-lg mix-blend-multiply opacity-90 object-cover w-full h-[350px]" />
              </div>
           </div>
        </div>
      </section>

      {/* 4. Enrollment & Credentialing Form */}
      <section className="py-24 bg-[#eff5f9]">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
           <div className="md:w-1/2 space-y-10">
              <h2 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight">Enrollment & Credentialing <br/> Physician Billing</h2>
              
              <div className="space-y-8">
                 <div className="flex gap-4 items-start">
                    <span className="text-[#8cc63f] font-bold text-2xl mt-1">✓</span>
                    <div>
                       <h3 className="text-xl font-bold text-[#005c93] mb-2">85% Reduction in Days in A/R</h3>
                       <p className="text-gray-500 text-sm">Experience faster cash flow and reduced days in Accounts Receivable.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <span className="text-[#8cc63f] font-bold text-2xl mt-1">✓</span>
                    <div>
                       <h3 className="text-xl font-bold text-[#005c93] mb-2">20-40% Cost Savings</h3>
                       <p className="text-gray-500 text-sm">Optimize your resources and cut down on operational costs significantly.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start">
                    <span className="text-[#8cc63f] font-bold text-2xl mt-1">✓</span>
                    <div>
                       <h3 className="text-xl font-bold text-[#005c93] mb-2">18% Spike in Revenue</h3>
                       <p className="text-gray-500 text-sm">Our streamlined processes directly contribute to a noticeable increase in your total collections.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="md:w-1/2 w-full">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-100">
                 <h3 className="text-2xl font-bold text-[#333] mb-2">Schedule a Free Demo</h3>
                 <p className="text-gray-500 mb-8 text-sm">One of our agents will contact you shortly to schedule your personalized demo.</p>
                 
                 <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="First Name *" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#8cc63f]" required/>
                       <input type="text" placeholder="Last Name *" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#8cc63f]" required/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <input type="email" placeholder="Email *" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#8cc63f]" required/>
                       <input type="tel" placeholder="Phone *" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#8cc63f]" required/>
                    </div>
                    <input type="text" placeholder="Practice Name" className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#8cc63f]" />
                    <textarea placeholder="Message" rows={2} className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#8cc63f] resize-none"></textarea>
                    
                    <button type="submit" className="w-full bg-[#8cc63f] hover:bg-[#7ab336] text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors mt-4">
                       SUBMIT NOW
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Elite Core Billing Services */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[1400px] mx-auto px-4">
           <h2 className="text-[#005c93] text-3xl md:text-[40px] font-bold mb-4">Elite Core Billing Services We Have Got You Covered</h2>
           <p className="text-gray-500 mb-16 text-sm md:text-base max-w-4xl mx-auto">
             We support various medical practices with efficiency, offering customized billing solutions based on specific needs. Your collections are in expert hands.
           </p>

           <div className="flex flex-col lg:flex-row items-center gap-16 text-left">
              <div className="lg:w-1/2 w-full">
                 <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Dashboard on Desktop" className="w-full h-auto" />
                 </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#111]">Accurate ICD-10, CPT, and <br/> HCPCS Coding</h3>
                 <p className="text-gray-500 font-medium">
                   Our physician billing company brings extensive and up-to-date knowledge in medical coding. We ensure precise assignments preventing claim rejections.
                 </p>
                 <ul className="space-y-3 mt-6">
                    {["Coding audits & reviews", "Claim generation and scrubbing", "Claim submission through clearinghouse", "Denial Management & appeals", "AR Management & Patient statement services", "Customized reporting to track financial performance"].map((item, i) => (
                       <li key={i} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-[#8cc63f] mt-2 mr-3 shrink-0"></span>
                          <span className="text-gray-700 font-medium">{item}</span>
                       </li>
                    ))}
                 </ul>
                 <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm mt-4 uppercase">
                    Learn More
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Denial and Rejection Management */}
      <section className="py-24 bg-[#eef6ec]">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2 space-y-6 order-2 md:order-1">
              <h2 className="text-[#005c93] text-3xl md:text-[40px] font-bold leading-tight">Denial and Rejection Management</h2>
              <p className="text-gray-500 mb-6 font-medium">As part of our commitment to excellence, we strictly follow an aggressive approach to tackle claim denials, which includes:</p>
              
              <ul className="space-y-4">
                 {[
                   "Daily electronic claim submission",
                   "Resolving clearinghouse rejections promptly",
                   "Follow-up on unpaid claims on 14th day of submission",
                   "Handling all denied appeals efficiently",
                   "Patient statements & balance inquires",
                   "Accurate financial reports per month",
                   "Providing practice & patient education on coding requirements"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center">
                       <span className="text-[#8cc63f] mr-3 font-bold">✓</span>
                       <span className="text-gray-700 font-semibold">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>
           <div className="md:w-1/2 w-full order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop" alt="Doctor on Phone" className="w-full rounded-[30px] shadow-xl object-cover h-[450px]" />
           </div>
        </div>
      </section>

      {/* 7. End-to-End Solutions */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-4">End to End Solutions</h2>
            <p className="text-gray-500 mb-16 text-sm md:text-base max-w-4xl mx-auto">
              As a top physician billing company, our goal is to eliminate administrative burdens so you can focus on quality patient care.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-[#eef5fa] p-10 rounded-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-[#005c93] mb-4">Top-Notch Security and Compliance</h3>
                  <p className="text-gray-600 mb-6 text-sm font-medium">Security is the backbone of our operations. We safeguard electronic protected health information (ePHI) with the utmost care.</p>
                  <ul className="space-y-3">
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">100% HIPAA compliant</span></li>
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Adherence to state and federal regulations</span></li>
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Secure data transmission and storage</span></li>
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Regular audits and staff training</span></li>
                  </ul>
               </div>

               <div className="bg-[#eef5fa] p-10 rounded-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-[#005c93] mb-4">Excellent Customer Billing</h3>
                  <p className="text-gray-600 mb-6 text-sm font-medium">At our physician billing company we believe that excellence goes hand in hand with precision and personalized care.</p>
                  <ul className="space-y-3">
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Dedicated account representative</span></li>
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Transparent reporting and analytics</span></li>
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Patient-friendly billing statements</span></li>
                     <li className="flex items-start"><span className="text-[#8cc63f] font-bold mr-2">✓</span> <span className="text-sm font-semibold text-gray-700">Supportive customer service team to answer patient inquiries</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Nationwide Coverage */}
      <section className="py-24 bg-[#eff5f9]">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2 w-full">
              <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2669&auto=format&fit=crop" alt="Medical Professional" className="w-full rounded-2xl shadow-xl h-[450px] object-cover" />
           </div>
           <div className="md:w-1/2 space-y-6">
              <h2 className="text-[#005c93] text-3xl md:text-[40px] font-bold leading-tight">Nationwide Coverage for <br className="hidden md:block"/> Physician Medical Billing</h2>
              <p className="text-gray-500 font-medium">Our physician medical billing company provides a national presence, serving practices across all 50 states.</p>
              <ul className="space-y-3">
                 <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#005c93] mt-2 mr-3 shrink-0"></span><span className="text-gray-600 font-semibold text-sm">Customized billing solutions tailored to your specialty and location.</span></li>
                 <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#005c93] mt-2 mr-3 shrink-0"></span><span className="text-gray-600 font-semibold text-sm">Practice management software setup and training.</span></li>
                 <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#005c93] mt-2 mr-3 shrink-0"></span><span className="text-gray-600 font-semibold text-sm">Different time zones? We have you covered with extended hours.</span></li>
                 <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#005c93] mt-2 mr-3 shrink-0"></span><span className="text-gray-600 font-semibold text-sm">We follow strict federal and state regulations seamlessly.</span></li>
              </ul>
              <button className="bg-[#111] hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all text-sm mt-4 uppercase">
                  Let's Connect
              </button>
           </div>
        </div>
      </section>

      {/* 9. Additional Physician Management Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
           <div className="md:w-3/5 space-y-8">
              <h2 className="text-[#111] text-3xl md:text-[40px] font-bold mb-10">Additional Physician Management <br/> Services</h2>
              
              <div className="grid md:grid-cols-2 gap-y-6 gap-x-10">
                 {[
                   "Practice Set Up & Registration",
                   "Eligibility/Benefits",
                   "Charge/Data Entry",
                   "EHR/EMR Software setup",
                   "Audit & Compliance"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center">
                       <span className="text-[#005c93] font-bold mr-3">✓</span>
                       <span className="text-gray-600 font-semibold">{item}</span>
                    </div>
                 ))}
                 {[
                   "Out-of-network Billing & Appeals",
                   "Account Receivables/Follow Ups",
                   "Patient Statements",
                   "Reporting",
                   "Credentialing Services"
                 ].map((item, i) => (
                    <div key={i+"b"} className="flex items-center">
                       <span className="text-[#005c93] font-bold mr-3">✓</span>
                       <span className="text-gray-600 font-semibold">{item}</span>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="md:w-2/5 relative flex justify-end">
              {/* Blue semi-circle background under the image */}
              <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#005c93] rounded-full translate-x-1/4 translate-y-1/4 z-0"></div>
              <img src="https://images.unsplash.com/photo-1594824436998-f60ba8bbbfac?q=80&w=2574&auto=format&fit=crop" alt="Smiling Doctor portrait" className="relative z-10 h-[500px] object-cover object-top rounded-t-full shadow-lg" />
           </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4">
               <h2 className="text-3xl font-bold text-[#111] mb-10 text-center md:text-left">Frequently Asked Questions</h2>
               <div className="space-y-0">
                  {[
                    "What makes MedCare MSO stand out from other billing companies?",
                    "Do I need to change my current EHR/EMR software to work with you?",
                    "How quickly can you implement your services for our practice?",
                    "Is my patient data secure with MedCare MSO?",
                    "What if we have specific legacy AR challenges?"
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

export default PhysicianBillingPage;
