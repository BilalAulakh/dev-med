import Image from "next/image";
import aboutHero from "@/assets/medcare-msoimg.png"; // reusing an asset that looks suitable
import efficiencyImg from "@/assets/choose_medcare_doctor.png";

export default function AboutPage() {
  return (
    <main className="w-full bg-[#fafbfc] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#E5F1FC] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/header-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0080FF] rounded-full blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8cc63f] rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col items-start space-y-6">
            <div className="inline-block bg-white text-[#0080FF] font-bold px-4 py-1.5 rounded-full text-sm shadow-sm tracking-wide uppercase">
              About DevMedCare MSO
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-[1.15] tracking-tight">
              Empowering Your Practice with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005c93] to-[#0080FF]">Next-Level Solutions</span>
            </h1>
            <p className="text-[#4a5568] text-lg lg:text-xl leading-relaxed max-w-xl">
              We are a dedicated Management Services Organization (MSO) offering cutting-edge Medical Billing and Revenue Cycle Management (RCM) services to healthcare providers nationwide.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#005c93]/20 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={aboutHero} 
                  alt="DevMedCare Team" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="bg-[#f8fafd] rounded-[2rem] p-10 lg:p-14 border border-blue-50 shadow-sm group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#0080FF]/10 rounded-full blur-2xl group-hover:bg-[#0080FF]/20 transition-colors duration-500"></div>
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-8 relative z-10">
              <svg className="w-8 h-8 text-[#005c93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-[#1a1a1a] mb-5 relative z-10">Our Mission</h3>
            <p className="text-gray-600 text-[1.1rem] leading-relaxed relative z-10">
              To drastically reduce administrative burdens on healthcare providers so they can focus on what matters most: patient care. We achieve this by deploying innovative, tech-driven RCM workflows to maximize your practice's profitability.
            </p>
          </div>

          <div className="bg-[#f8fafd] rounded-[2rem] p-10 lg:p-14 border border-green-50 shadow-sm group hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-[#8cc63f]/10 rounded-full blur-2xl group-hover:bg-[#8cc63f]/20 transition-colors duration-500"></div>
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-8 relative z-10">
              <svg className="w-8 h-8 text-[#8cc63f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-[#1a1a1a] mb-5 relative z-10">Our Vision</h3>
            <p className="text-gray-600 text-[1.1rem] leading-relaxed relative z-10">
              To emerge as the premier healthcare financial partner globally, renowned for unlocking growth, instilling trust, and keeping our promise of unmatched efficiency and transparency in every transaction.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#005c93] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0080FF] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8cc63f] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative lg:pr-10 z-10">
             <div className="relative">
                <Image 
                   src={efficiencyImg} 
                   alt="Efficiency" 
                   className="w-full max-w-[500px] mx-auto lg:mx-0 object-contain drop-shadow-2xl filter brightness-110"
                />
             </div>
          </div>
          
          <div className="lg:w-1/2 z-10">
            <div className="text-left mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Why DevMedCare Is<br/> The Right Choice
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                DevMedCare MSO stands out by blending experienced certified coders with state-of-the-art AI technology to guarantee the smoothest billing experience possible. 
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-sm">
                  <span className="text-xl font-bold text-white">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">99% Clean Claim Rate</h4>
                  <p className="text-blue-100/80 leading-relaxed text-sm">We ensure that claims are scrubbed thoroughly before submission, resulting in fewer denials and faster reimbursements.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-sm">
                  <span className="text-xl font-bold text-white">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Tailored Reporting</h4>
                  <p className="text-blue-100/80 leading-relaxed text-sm">Every practice is different. Enjoy customized financial reporting to track your practice's fiscal health easily.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-sm">
                  <span className="text-xl font-bold text-white">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Dedicated Account Managers</h4>
                  <p className="text-blue-100/80 leading-relaxed text-sm">You'll have a direct line to a dedicated expert who understands the nuances of your specific specialty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-gray-100">
            <div className="flex flex-col space-y-2">
              <div className="text-5xl lg:text-6xl font-extrabold text-[#0080FF]">500+</div>
              <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Providers Served</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-5xl lg:text-6xl font-extrabold text-[#8cc63f]">99%</div>
              <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Clean Claims</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-5xl lg:text-6xl font-extrabold text-[#005c93]">$20k+</div>
              <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Daily Collections</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-5xl lg:text-6xl font-extrabold text-[#1a1a1a]">3+</div>
              <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
