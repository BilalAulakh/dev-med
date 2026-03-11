import Image from "next/image";
import doctorImg from "@/assets/choose_medcare_doctor.png";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#fafbfc] min-h-screen">
      {/* Top Banner Section */}
      <div className="w-full bg-[#E5F1FC] relative pt-16 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
          
          {/* Left Text & Image */}
          <div className="space-y-6 flex flex-col items-start relative lg:pr-12">
            <h1 className="text-4xl lg:text-5xl lg:leading-tight font-extrabold text-[#1a1a1a]">
              Thank you for showing<br /> your interest in<br /> DevMedCare
            </h1>
            <p className="text-[#4a5568] text-[1.1rem] max-w-[500px] leading-relaxed">
              We're keen to know more about your practice! Whether you are a hospital, lab, imaging service or an independent medical provider, you need to deal with insurance claims recovery.
            </p>
            
            {/* Doctor Image overlapping */}
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] mt-8 lg:-mb-64 left-0">
              <div className="absolute inset-0 bg-[#005c93] rounded-t-full rounded-b-full w-[80%] h-[100%] bottom-0 -left-6 opacity-10 blur-xl"></div>
              <Image 
                src={doctorImg} 
                alt="Doctor" 
                layout="fill" 
                objectFit="contain"
                className="relative z-10 drop-shadow-2xl object-bottom"
              />
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-500/10 p-8 md:p-10 relative z-20 top-10 lg:top-20">
            <div className="mb-6">
              <h3 className="text-[1.7rem] font-bold text-[#0080FF] mb-2 tracking-tight">Let's get connected</h3>
              <p className="text-[13px] text-gray-500 max-w-sm">
                Please provide the following information so our team can connect with you within 12 hours. Or call us at <span className="font-bold text-[#8cc63f]">+92 320 3000555</span>
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 mt-8">
              <div className="flex flex-col space-y-2 border-b-2 border-gray-100 py-1 focus-within:border-red-500 transition-colors relative">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Name</label>
                <input type="text" defaultValue="Officia rem et sunt" className="bg-transparent border-none outline-none text-gray-800 text-sm w-full" />
              </div>

              <div className="flex flex-col space-y-2 border-b-2 border-gray-100 py-1 focus-within:border-red-500 transition-colors relative">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Practice Name</label>
                <input type="text" defaultValue="Lorem iure duis sit" className="bg-transparent border-none outline-none text-gray-800 text-sm w-full" />
              </div>

              <div className="flex flex-col space-y-2 border-b-2 border-red-500 py-1 focus-within:border-red-500 transition-colors relative">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Email</label>
                <input type="text" defaultValue="Et vel non ad it saep" className="bg-transparent border-none outline-none text-gray-800 text-sm w-full" />
                <span className="text-[10px] text-red-500 absolute right-0 -bottom-5 font-medium">Invalid Email</span>
              </div>

              <div className="flex flex-col space-y-2 border-b-2 border-gray-100 py-1 focus-within:border-[#0080FF] transition-colors relative">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Phone</label>
                <input type="tel" defaultValue="T" className="bg-transparent border-none outline-none text-gray-800 text-sm w-full" />
              </div>

              <div className="flex flex-col space-y-2 border-b-2 border-gray-100 py-1 focus-within:border-[#0080FF] transition-colors relative">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Monthly Collection</label>
                <input type="text" defaultValue="Minus numquam qui id" className="bg-transparent border-none outline-none text-gray-800 text-sm w-full" />
                <span className="text-[10px] text-red-500 absolute right-0 -bottom-5 font-medium">Only numbers</span>
              </div>

              <div className="flex flex-col space-y-2 border-b-2 border-gray-100 py-1 focus-within:border-[#0080FF] transition-colors relative">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Total AR</label>
                <input type="text" defaultValue="Voluptates dolore vo" className="bg-transparent border-none outline-none text-gray-800 text-sm w-full" />
                <span className="text-[10px] text-red-500 absolute right-0 -bottom-5 font-medium">Only numbers</span>
              </div>

              <div className="flex flex-col space-y-2 border-b-2 border-gray-100 py-1 focus-within:border-[#0080FF] transition-colors relative md:col-span-2">
                <label className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Your Message</label>
                <textarea rows={1} defaultValue="Hite enim est irure" className="bg-transparent border-none outline-none text-gray-800 text-sm resize-none w-full"></textarea>
              </div>

              <div className="md:col-span-2 mt-6">
                <button type="button" className="w-full bg-[#82bc43] hover:bg-[#72a63a] text-white py-3.5 rounded-md font-bold text-[15px] transition-all duration-300 shadow-md">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Sections: Locations & Contact Details */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 mt-56 lg:mt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Our Locations */}
          <div>
            <h2 className="text-[2rem] font-extrabold text-[#1a1a1a] mb-8">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location 1 */}
              <div className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden group">
                <div className="h-44 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" alt="California" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <h4 className="font-bold text-[1.1rem] text-gray-900 mb-5">USA - California</h4>
                  <div className="flex items-start gap-3 mb-4">
                    <svg className="w-[18px] h-[18px] text-gray-400 mt-[3px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-[13px] text-gray-500 leading-snug">18000 Sky Park Circle, Irvine,<br/>California 92614</p>
                  </div>
             
                </div>
              </div>

              {/* Location 2 */}
              <div className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden group">
                <div className="h-44 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1549488344-c7a6fdf6afda?auto=format&fit=crop&w=800&q=80" alt="New Mexico" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <h4 className="font-bold text-[1.1rem] text-gray-900 mb-5">USA - New Mexico</h4>
                  <div className="flex items-start gap-3 mb-4">
                    <svg className="w-[18px] h-[18px] text-gray-400 mt-[3px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-[13px] text-gray-500 leading-snug">150 Washington Ave, Suite 201,<br/>Santa Fe, New Mexico, 87501</p>
                  </div>
      
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-[2rem] font-extrabold text-[#1a1a1a] mb-8">Contact Details</h2>
            <div className="grid grid-cols-2 gap-6">
              
              {/* Info */}
              <div className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 py-10 px-6 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-[0_8px_30px_-4px_rgba(0,128,255,0.1)] transition-all">
                <svg className="w-[28px] h-[28px] text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-gray-900 text-base">Info</h4>
                <p className="text-[13px] text-gray-500">devmedcare@gmail.com</p>
              </div>

          

              {/* Fax */}
       

              {/* Jobs */}
              <div className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 py-10 px-6 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-[0_8px_30px_-4px_rgba(0,128,255,0.1)] transition-all">
                <svg className="w-[28px] h-[28px] text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="font-bold text-gray-900 text-base">Jobs</h4>
                <p className="text-[13px] text-gray-500">careers@devmedcare.com</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Locate Us On Map */}
      <div className="w-full bg-[#f8f9fa] pt-24 pb-0 relative">
        <div className="text-center mb-10 flex items-center justify-center gap-3">
          <h2 className="text-[2rem] font-extrabold text-[#1a1a1a]">Locate Us on Map</h2>
          <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="w-full h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102046.22593933758!2d-117.88241432490527!3d33.68260275825319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd1296c00001%3A0xeab50d297a7e80f2!2sIrvine%2C%20CA%2092614%2C%20USA!5e0!3m2!1sen!2s!4v1716301648083!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
