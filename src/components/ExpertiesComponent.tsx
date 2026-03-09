"use client";

import Image from "next/image";
import Link from "next/link";
import exp1 from "../assets/expertise_rcm.png";
import exp2 from "../assets/expertise_billing.png";
import exp3 from "../assets/expertise_recovery.png";
import exp4 from "../assets/expertise_management.png";
import exp5 from "../assets/expertise_staffing.png";

const ExpertiesComponent = () => {
  const expertiseData = [
    {
      id: 1,
      image: exp1,
      category: "Faster Reimbursements",
      title: "Revenue Cycle Management",
      description:
        "Our end-to-end RCM services streamline patient registration, eligibility verification, and claims processing to ensure maximum reimbursement.",
      stat: "15%",
      statDesc:
        "reduction in administrative costs and 95% clean claim rate achieved within the first 6 months of implementation.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="45" r="30" stroke="white" strokeWidth="5" />
          <path
            d="M40 30V60M48 38H36C33 38 33 44 36 44H44C47 44 47 50 44 50H32"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M10 100L55 68L80 90L115 55"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M100 55H115V70"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "bg-blue-900/40",
    },
    {
      id: 2,
      image: exp2,
      category: "Maximize Profitability",
      title: "Medical Billing Services",
      description:
        "Our cutting-edge software and scalable infrastructure enable us to provide a complete billing solution at a competitive price. We enhance revenue generation by simplifying every step of your operational process.",
      stat: "20%",
      statDesc:
        "increase in revenue growth, a 10 % increase in collections in the first few months, and 88% of claims getting paid on the first submission.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 15H80L105 40V110C105 115 100 120 95 120H20C15 120 10 115 10 110V25C10 20 15 15 20 15Z"
            stroke="white"
            strokeWidth="5"
          />
          <path d="M80 15V40H105" stroke="white" strokeWidth="5" />
          <path d="M50 40H64M57 33V47" stroke="white" strokeWidth="5" />
          <path d="M30 65H85M30 85H75" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path
            d="M75 95C73 95 73 102 75 102H80C82 102 82 109 80 109H73"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M77 92V112" stroke="white" strokeWidth="3" />
        </svg>
      ),
      color: "bg-slate-800/40",
    },
    {
      id: 3,
      image: exp3,
      category: "Systematic Evaluation",
      title: "A/R Recovery Analysis",
      description:
        "We provide in-depth analysis of your accounts receivable to identify bottleneck areas and recover lost revenue from unpaid claims.",
      stat: "30%",
      statDesc:
        "recovery of aged AR (90+ days) and significant improvement in overall accounts receivable turnover rates.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105 64C105 87 87 105 64 105C50 105 38 100 29 90"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M23 64C23 41 41 23 64 23C77 23 88 28 97 38"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M108 28V42H94" stroke="white" strokeWidth="6" />
          <path d="M20 100V86H34" stroke="white" strokeWidth="6" />
          <path
            d="M64 45V83M72 55H60c-4 0-4 9 0 9h8c4 0 4 9 0 9H56"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      ),
      color: "bg-gray-900/40",
    },
    {
      id: 4,
      image: exp4,
      category: "Optimized Workflows",
      title: "Practice Management Software",
      description:
        "Seamlessly integrate clinical and administrative workflows with our intuitive platform, designed to improve provider productivity.",
      stat: "40%",
      statDesc:
        "increase in provider productivity and 50% reduction in patient wait times through optimized scheduling.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="15" y="30" width="98" height="60" rx="4" stroke="white" strokeWidth="5" />
          <path d="M10 100H118" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <circle cx="64" cy="60" r="18" stroke="white" strokeWidth="4" />
          <path d="M64 52V68M56 60H72" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
      color: "bg-blue-800/40",
    },
    {
      id: 5,
      image: exp5,
      category: "Staffing Solutions",
      title: "MedCare Force",
      description:
        "Access a pool of highly trained healthcare professionals ready to support your practice's staffing needs accurately and rapidly.",
      stat: "100%",
      statDesc:
        "compliant staffing solutions with rapid deployment to meet your practice's dynamic peak demands.",
      icon: (
        <svg
          className="w-full h-full"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="14" stroke="white" strokeWidth="5" />
          <path d="M20 90C20 78 28 68 40 68" stroke="white" strokeWidth="5" />
          <circle cx="88" cy="40" r="14" stroke="white" strokeWidth="5" />
          <path d="M108 90C108 78 100 68 88 68" stroke="white" strokeWidth="5" />
          <circle cx="64" cy="72" r="14" stroke="white" strokeWidth="5" />
          <path d="M42 115C42 103 52 94 64 94C76 94 86 103 86 115" stroke="white" strokeWidth="5" />
        </svg>
      ),
      color: "bg-blue-900/50",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      {/* Mobile & Tablet: horizontal scroll; Desktop: expanding accordion row */}
      <div className="max-w-[1600px] mx-auto">
        {/* Mobile / Tablet scroll container */}
        <div className="flex lg:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative shrink-0 w-[80vw] sm:w-[55vw] md:w-[40vw] h-[420px] overflow-hidden rounded-3xl cursor-pointer shadow-lg snap-start"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 ${item.color}`}></div>
              <div className="absolute inset-0 p-7 flex flex-col z-10 text-white">
                <div>
                  <span className="text-white/80 text-[10px] font-bold tracking-[0.25em] uppercase block mb-3">
                    {item.category}
                  </span>
                  {/* Fixed minimum height so titles don't cause vertical jumps for the icons below them */}
                  <h3 className="text-white text-xl font-extrabold leading-tight drop-shadow-lg min-h-[56px] mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Icon perfectly aligned and sized perfectly */}
                  <div className="mt-2 text-white drop-shadow-xl opacity-90 w-12 h-12 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <div className="w-full mt-auto">
                  <div className="w-full h-px bg-white/20 mb-6"></div>
                  <Link
                    href="#"
                    className="text-white text-base font-semibold flex items-center gap-2"
                  >
                    Learn More <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: expanding accordion */}
        <div className="hidden lg:flex flex-row gap-4 h-[600px]">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative flex-1 hover:flex-[2.5] overflow-hidden rounded-3xl transition-all duration-700 ease-in-out cursor-pointer shadow-lg h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${item.color} group-hover:bg-black/60 transition-all duration-500`}></div>
              <div className="absolute inset-0 p-10 flex flex-col z-10 text-white">
                <div>
                  <span className="text-white/80 text-xs font-bold tracking-[0.25em] uppercase block mb-4">
                    {item.category}
                  </span>
                  <div className="flex flex-row items-start">
                    {/* min-h-[60px] guarantees consistent height across different titles (1-line vs 2-line) */}
                    <h3 className="text-white text-xl lg:text-2xl font-extrabold leading-tight w-[45%] drop-shadow-lg min-h-[64px]">
                      {item.title}
                    </h3>
                    <div className="w-[55%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 pl-4">
                      <p className="text-white/90 text-sm xl:text-base leading-relaxed hidden lg:block">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Icons are now given a fixed width/height instead of an unpredictable tailwind scale */}
                  <div className="transition-all duration-700 group-hover:opacity-0 group-hover:-translate-y-6 mt-4">
                    <div className="text-white drop-shadow-xl opacity-90 w-14 h-14 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-40 left-12 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300">
                  <span className="text-7xl font-bold block mb-4">{item.stat}</span>
                  <p className="text-lg text-white/90 leading-tight max-w-2xl">{item.statDesc}</p>
                </div>

                <div className="w-full mt-auto">
                  <div className="w-full h-px bg-white/20 mb-8"></div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      className="text-white text-base font-semibold flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="transition-transform duration-300 group-hover/link:translate-x-2 text-xl">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiesComponent;
