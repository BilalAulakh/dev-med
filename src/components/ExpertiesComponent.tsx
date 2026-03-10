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
        <div className="flex lg:hidden gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide w-full">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] h-[450px] overflow-hidden rounded-3xl cursor-pointer shadow-lg snap-start"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 ${item.color} group-hover:bg-black/40 transition-colors duration-500`}></div>
              <div className="absolute inset-0 p-8 flex flex-col z-10 text-white">
                <div>
                  <span className="text-white/90 text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-extrabold leading-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                <div className="w-full mt-auto">
                  <div className="text-white drop-shadow-lg opacity-100 w-12 h-12 flex items-center justify-start mb-6">
                    {item.icon}
                  </div>
                  <div className="w-full h-px bg-white/30 mb-5"></div>
                  <Link
                    href="#"
                    className="text-white text-base font-semibold flex items-center gap-2 group/link hover:text-white/90 transition-colors"
                  >
                    Learn More 
                    <span className="transition-transform duration-300 group-hover/link:translate-x-2 text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: expanding accordion */}
        <div className="hidden lg:flex flex-row gap-4 h-[600px] w-full">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative flex-1 hover:flex-[2.5] overflow-hidden rounded-3xl transition-all duration-700 ease-in-out cursor-pointer shadow-lg h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className={`absolute inset-0 ${item.color} group-hover:bg-black/60 transition-all duration-500`}></div>
              
              <div className="absolute inset-0 p-10 flex flex-col z-10 text-white">
                {/* Top Section */}
                <div className="w-full">
                  <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase block mb-4 whitespace-nowrap overflow-hidden text-ellipsis shadow-sm">
                    {item.category}
                  </span>
                  <div className="flex flex-row items-start w-full">
                    <h3 className="text-white text-3xl font-extrabold leading-tight w-full group-hover:w-[45%] transition-all duration-700 ease-in-out drop-shadow-lg pr-2">
                      {item.title}
                    </h3>
                    <div className="w-0 group-hover:w-[55%] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-700 ease-in-out lg:pl-6 overflow-hidden delay-100">
                      <p className="text-white/95 text-base leading-relaxed hidden lg:block min-w-[320px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover States: Stats absolute positioned */}
                <div className="absolute bottom-40 left-10 w-[80%] opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300 pointer-events-none">
                  <span className="text-6xl font-black block mb-2 drop-shadow-md">{item.stat}</span>
                  <p className="text-lg text-white/95 font-medium leading-tight max-w-sm drop-shadow-sm">{item.statDesc}</p>
                </div>

                {/* Bottom Section: Icon & Link */}
                <div className="w-full mt-auto relative z-20">
                  <div className="transition-all duration-700 group-hover:opacity-0 group-hover:-translate-y-6 mb-8 transform group-hover:scale-95 origin-left">
                    <div className="text-white drop-shadow-xl opacity-100 w-14 h-14 flex items-center justify-start">
                      {item.icon}
                    </div>
                  </div>

                  <div className="w-full h-[1.5px] bg-white/30 mb-6 group-hover:mb-8 transition-all duration-500"></div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      className="text-white text-lg font-bold flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="transition-transform duration-300 group-hover/link:translate-x-2 text-2xl font-normal">→</span>
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
