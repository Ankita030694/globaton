"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ExpertCTA from "./ExpertCTA";

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
        src="/card1.png"
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
        src="/card2.png"
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
        src="/card3.png"
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
        src="/card4.png"
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
        src="/card5.png"
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
            ? 'bg-[#CBA135] text-gray-800 scale-105 shadow-2xl shadow-[#CBA135]/30 animate-selected-pop'
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
      <ExpertCTA />
    </div>
  );
};

export default Plans;
