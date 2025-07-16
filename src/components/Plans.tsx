"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  name: string;
  route: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  startingPrice: number;
  icon: React.ReactNode;
  services: Service[];
  isHighlighted?: boolean;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "company-registration",
    title: "Register your Company",
    startingPrice: 999,
    icon: (
      <Image
        src="/card1.PNG"
        alt="Register your Company"
        width={80}
        height={80}
        className="w-20 h-20 object-contain rounded-full mb-4"
      />
    ),
    services: [
      { name: "Private Limited Company", route: "/services/pvltd" },
      { name: "Limited Liability Partnership", route: "/services/llp" }, 
      { name: "One Person Company", route: "/services/opc" },
      { name: "Partnership Firm", route: "/services/partnership" },
      { name: "Sole Proprietorship", route: "/services/soleprop" }
    ]
  },
  {
    id: "accounting",
    title: "Accounting & Tax", 
    startingPrice: 4999,
    icon: (
      <Image
        src="/card2.PNG"
        alt="Accounting & Tax"
        width={80}
        height={80}
        className="w-20 h-20 object-contain rounded-full mb-4"
      />
    ),
    services: [
      { name: "Accounting & Book Keeping", route: "/services/accounting-&-bookkeeping" },
      { name: "Tax Return Filing", route: "/form" },
      { name: "Annual Compliance", route: "/form" }, 
      { name: "Income Tax Notice", route: "/form" },
      { name: "Secretary Audit", route: "/form" }
    ]
  },
  {
    id: "gst-services",
    title: "GST Filing",
    startingPrice: 599,
    icon: (
      <Image
        src="/card3.PNG"
        alt="GST Filing"
        width={80}
        height={80}
        className="w-20 h-20 object-contain rounded-full mb-4"
      />
    ),
    services: [
      { name: "GST Registration", route: "/services/gst" },
      { name: "GST Filing", route: "/services/gstfiling" },
      { name: "GST Notice Reply", route: "/services/gstnotice" },
      { name: "GST Cancellation & Revocation", route: "/form" }
    ]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    startingPrice: 1499,
    icon: (
      <Image
        src="/card4.PNG"
        alt="Intellectual Property"
        width={80}
        height={80}
        className="w-20 h-20 object-contain rounded-full mb-4"
      />
    ),
    services: [
      { name: "Trademark Registration", route: "/services/trademark" },
      { name: "Trademark Objection", route: "/form" }, 
      { name: "Trademark Infringement", route: "/form" },
      { name: "Copyright Registration", route: "/form" },
      { name: "Patent Registration", route: "/form" }
    ]
  },
  {
    id: "licenses",
    title: "Licenses & Documentation",
    startingPrice: 999,
    icon: (
      <Image
        src="/card5.PNG"
        alt="Licenses & Documentation"
        width={80}
        height={80}
        className="w-20 h-20 object-contain rounded-full mb-4"
      />
    ),
    services: [
      { name: "FSSAI Registration", route: "/form" },
      { name: "ISO Registration", route: "/form" },
      { name: "UDYAM Registration", route: "/form" },
      { name: "IEC (Import/Export)", route: "/form" },
      { name: "Legal Agreements", route: "/form" }
    ]
  }
];

const ServiceCard: React.FC<ServiceCategory & { active: boolean; onClick: () => void }> = ({
  title,
  startingPrice,
  icon,
  services,
  isHighlighted = false,
  active,
  onClick
}) => {
  return (
    <div className="w-full h-full">
      <div
        className={`
          relative rounded-2xl p-6 w-full h-full min-h-[500px] flex flex-col
          cursor-pointer
          border border-transparent
          transition-all duration-300 ease-out
          ${active || isHighlighted
            ? 'bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 text-gray-800 scale-105 shadow-2xl shadow-yellow-400/30 animate-selected-pop'
            : 'bg-gray-200 text-gray-700'}
        `}
        onClick={onClick}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${active || isHighlighted ? 'text-gray-800' : 'text-gray-700'}`}>
            {title}
          </h3>
          {/* Render the icon prop (Image) here, no SVGs */}
          {icon}
          <div className="flex flex-col items-center mt-2">
            <span className={`text-sm font-medium transition-colors duration-300 ${active || isHighlighted ? 'text-gray-700' : 'text-gray-600'}`}>
              starting from
            </span>
            <span className={`text-2xl font-bold transition-colors duration-300 ${active || isHighlighted ? 'text-gray-800' : 'text-gray-800'}`}>
              ₹{startingPrice.toLocaleString()}/-
            </span>
          </div>
        </div>

        {/* Services List */}
        <div className="flex-1">
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <Link href={service.route}>
                  <div className={`
                    flex items-center justify-between p-3 rounded-lg 
                    transition-all duration-200
                    ${active || isHighlighted
                      ? 'bg-white/20 border border-gray-700/20'
                      : 'border border-gray-500/20'}
                  `}>
                    <span className={`text-sm font-medium flex-1 pr-2 transition-colors duration-300 ${active || isHighlighted ? 'text-gray-800' : 'text-gray-700'}`}>
                      {service.name}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-all duration-200 ${active || isHighlighted ? 'text-gray-700' : 'text-gray-600'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Tailwind custom animation (add to your global CSS if not already present)
// @layer utilities {
//   @keyframes selected-pop {
//     0% { transform: scale(1); box-shadow: none; }
//     60% { transform: scale(1.12); box-shadow: 0 0 40px #fde68a66; }
//     100% { transform: scale(1.05); box-shadow: 0 0 24px #fde68a66; }
//   }
//   .animate-selected-pop {
//     animation: selected-pop 0.35s cubic-bezier(0.4,0,0.2,1);
//   }
// }

const Plans: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-16 bg-white">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          OUR SERVICES
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Comprehensive business solutions tailored to your needs with expert guidance at every step
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
        {serviceCategories.map((category, index) => (
          <div key={category.id} className="animate-in slide-in-from-bottom-8 duration-300" style={{ animationDelay: `${index * 100}ms` }}>
            <ServiceCard
              {...category}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Expert Section */}
      <div className="relative z-10 bg-gradient-to-br from-[#165D3F] via-[#1B6B50] to-[#165D3F] py-12 md:py-20 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#EABE4C] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#EABE4C] rounded-full animate-spin"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* White inner container with enhanced glassmorphism */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 md:p-12 shadow-xl border border-white/20 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#165D3F] to-[#EABE4C]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
              {/* Left side */}
              <div className="space-y-8">
                <div>
                  <span className="bg-gradient-to-r from-[#EABE4C] to-[#D4AB3A] text-[#165D3F] text-sm font-bold px-4 py-2 rounded-full mb-4 inline-block shadow-lg">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                      EXPERT CONSULTATION
                    </div>
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#165D3F] mb-4">
                    Talk to an Expert
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Get personalized advice from our certified professionals
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Expertise",
                      description: "Unparalleled industry knowledge and strategic insights to drive meaningful change.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      )
                    },
                    {
                      title: "Innovation", 
                      description: "Cutting-edge solutions combining management consulting, technology, and digital ventures.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      )
                    },
                    {
                      title: "Impact",
                      description: "Collaborative, results-driven approach to empower organizations for long-term success.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#EABE4C]/10 hover:to-transparent transition-all duration-300">
                      <div className="bg-gradient-to-br from-[#EABE4C] to-[#D4AB3A] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-6 h-6 text-[#165D3F]">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#165D3F] mb-2 group-hover:text-[#1B6B50] transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="space-y-4">
                {[
                  { 
                    title: "Talk to Lawyer", 
                    color: "from-blue-500 to-blue-600",
                    icon: (
                      <Image 
                        src="/law.PNG" 
                        alt="Lawyer Icon" 
                        width={100} 
                        height={100} 
                        className="w-24 h-30"
                      />
                    )
                  },
                  { 
                    title: "Talk to Chartered Accountant", 
                    color: "from-green-500 to-green-600",
                    icon: (
                      <Image 
                        src="/ca.PNG" 
                        alt="Chartered Accountant Icon" 
                        width={100} 
                        height={100} 
                        className="w-24 h-30"
                      />
                    )
                  },
                  { 
                    title: "Talk to Company Secretary", 
                    color: "from-purple-500 to-purple-600",
                    icon: (
                      <Image 
                        src="/cs.PNG" 
                        alt="Company Secretary Icon" 
                        width={100} 
                        height={100} 
                        className="w-24 h-30"
                      />
                    )
                  }
                ].map((expert, index) => (
                  <Link key={index} href={`/form?service=${expert.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="group bg-white rounded-2xl p-5 flex items-center justify-between 
                      hover:shadow-xl transition-all duration-150 cursor-pointer border-2 border-gray-100
                      hover:border-[#EABE4C] hover:scale-105 transform">
                      <div className="flex items-center gap-4">
                        {expert.icon}
                        <span className="font-bold text-[#165D3F] text-lg group-hover:text-[#1B6B50] transition-colors duration-150">
                          {expert.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
