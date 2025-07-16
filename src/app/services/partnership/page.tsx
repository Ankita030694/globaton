'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function PartnershipPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const [selectedPlan, setSelectedPlan] = useState<string>('standard');
  const [plans] = useState([
    {
      id: "basic",
      title: "Basic",
      price: 3339,
      originalPrice: 4452,
      description: "Start your partnership journey with essential services",
      features: [
        "Expert Advisor",
        "Partnership Deed drafting",
        "Deed submission to the local Registrar",
        "PAN",
        "Zero Balance Current A/C with 7% interest"
      ],
      buttonText: "Get Started",
      disclaimer: "+ Gov. Fees",
      discount: "25% Off"
    },
    {
      id: "standard",
      title: "Standard",
      price: 7149,
      originalPrice: 10213,
      description: "Perfect for growing partnerships needing more features",
      features: [
        "Expert Advisor",
        "Partnership Deed drafting",
        "Deed submission to the local Registrar",
        "PAN",
        "Zero Balance Current A/C with 7% interest",
        "GST registration",
        "GSTR-1 & 3B for 12 months (up to 300 transactions)"
      ],
      buttonText: "Most Popular",
      disclaimer: "+ Gov. Fees",
      discount: "30% Off"
    },
    {
      id: "premium",
      title: "Premium",
      price: 13899,
      originalPrice: 21383,
      description: "Complete solution with premium benefits",
      features: [
        "Expert Advisor",
        "Partnership Deed drafting",
        "Deed submission to the local Registrar",
        "PAN",
        "Zero Balance Current A/C with 7% interest",
        "GST registration",
        "GSTR-1 & 3B for 12 months (up to 300 transactions)",
        "Accounting Software (1 Year License)",
        "Trademark Registration",
        "ITR filing for 1 F.Y. (up to 10L turnover)"
      ],
      buttonText: "Go Premium",
      disclaimer: "+ Gov. Fees",
      discount: "35% Off"
    }
  ]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 flex items-center flex-wrap">
          <Link href="/" className="hover:text-[#1B6B50]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-[#1B6B50]">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B6B50] font-medium">Partnership Firm</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-[#1B6B50]">Partnership Firm Services in India</h1>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Convinient</h3>
                    <p className="text-gray-600">Hassle free partnership firm registration with expert support</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Experienced Experts</h3>
                    <p className="text-gray-600">Partnership deed drafting done by senior experts</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Complete Guidance</h3>
                    <p className="text-gray-600">Complete guidance and filing support for partnership deed registration</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="partnership-page" />
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="w-full mx-auto px-4 md:px-20 py-8 md:py-16 bg-white">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#C4942D]">Choose Your</span> <span className="text-black">Package</span> 
            </h2>
            <p className="text-gray-600">Select the perfect plan for your partnership registration needs</p>
            
            {/* State Selection */}
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-[100%] mx-auto scale-100 transform-origin-center">
            {plans.map(plan => {
              const isSelected = selectedPlan === plan.id;
              
              return (
                <div 
                  key={plan.id}
                  className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                    ${isSelected ? 'transform scale-105 z-10' : 'z-0'} 
                    ${isSelected ? 'bg-[#EABE4C]' : 'bg-gray-50'}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {/* Curved gradient hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
                  </div>

                  {/* Selected card effects */}
                  {isSelected && (
                    <>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
                            bg-[#CBA135] rounded-[100%] translate-y-[75%] transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/50 to-transparent" />
                    </>
                  )}
                  
                  <div className="relative px-6 pt-6 pb-5 text-center">
                    {plan.id === 'standard' && (
                      <span className={`absolute top-4 right-4 text-xs font-medium py-1 px-2 rounded-full
                        ${isSelected ? 'bg-[#D4AB3A]/30 text-[#8B7425]' : 'bg-gray-200 text-gray-700'}`}>
                        Most Popular
                      </span>
                    )}
                    
                    <h3 className={`text-2xl font-extrabold mb-1 
                      ${isSelected ? 'text-[#000000]' : 'text-gray-800'}`}>{plan.title}</h3>
                    <p className={`text-xs mb-4 max-w-[85%] mx-auto italic 
                      ${isSelected ? 'text-[#000000]' : 'text-gray-600'}`}>{plan.description}</p>
                    
                    <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                      <div className="flex justify-center items-start">
                        <span className={`text-lg mt-1 font-medium 
                          ${isSelected ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                        <span className={`text-5xl font-bold 
                          ${isSelected ? 'text-[#ffffff]' : 'text-gray-800'}`}>{plan.price}</span>
                        <div className="flex flex-col items-start ml-2">
                          <span className={`text-sm line-through 
                            ${isSelected ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>
                            ₹{plan.originalPrice}
                          </span>
                          <span className={`text-sm font-medium
                            ${isSelected ? 'text-[#ffffff]' : 'text-[#C4942D]'}`}>
                            {plan.discount}
                          </span>
                          <span className={`text-xs 
                            ${isSelected ? 'text-[#ffffff]' : 'text-gray-500'}`}>
                            {plan.disclaimer}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`rounded-2xl p-4 backdrop-blur-md shadow-lg
                      ${isSelected ? 'bg-white/90' : 'bg-white'}`}>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-left">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center
                              ${isSelected ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                              </svg>
                            </div>
                            <span className={`ml-2 text-xs font-medium
                              ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className={`w-full py-3 px-4 rounded-xl mt-4 text-white font-medium
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        ${isSelected ? 
                          'bg-[#165D3F]' : 
                          'hidden'}`}>
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  {/* Border glow effect for selected plan */}
                  {isSelected && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AB3A] z-[-1]"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>  
 {/* Not sure about packages banner */}
        <div className="w-full bg-[#1B6B50]/5 py-6 md:py-8 px-4 md:px-6 rounded-xl mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-[#1B6B50] mb-4 md:mb-0 text-center md:text-left">Not sure about packages?</h2>
          <Link 
            href="/form?service=partnership-expert" 
            className="bg-[#1B6B50] text-white px-6 py-3 rounded-xl hover:bg-[#165D3F] transition-colors duration-300 font-medium w-full md:w-auto text-center"
          >
            Talk to registration expert
          </Link>
        </div>
        {/* Features of Partnership Firm */}
        <div className="mb-8 md:mb-12">
        <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#1B6B50]">What is a Partnership Firm?</h1>
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  A Partnership Firm is a type of business organization where two or more individuals join hands to run a business and share its profits and losses. It is governed by the Indian Partnership Act, 1932. Although registration is not mandatory, it is highly recommended due to the legal benefits associated with a registered firm.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  A Partnership Firm is a simple and cost-effective form of business organization, ideal for small and medium-sized businesses where mutual trust, shared responsibility, and ease of management are valued. While registration is optional, it is highly recommended for legal protection, enforceability, and credibility.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                    <FaCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Contractual Relationship</h3>
                    <p className="text-gray-600">Formed by an agreement (oral or written) between two or more persons</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                    <FaCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Profit and Loss Sharing</h3>
                    <p className="text-gray-600">Partners share profits and losses in a mutually agreed ratio</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                    <FaCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Unlimited Liability</h3>
                    <p className="text-gray-600">Partners are personally liable for the debts of the firm</p>
                  </div>
                </div>
              </div>
            </div>
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50] mt-10">Features of Partnership Firm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Contractual Relationship', desc: 'Formed by an agreement (oral or written) between two or more persons' },
              { title: 'Profit and Loss Sharing', desc: 'Partners share profits and losses in a mutually agreed ratio' },
              { title: 'Minimum & Maximum Partners', desc: 'Minimum 2; Maximum 50 as per Companies Act, 2013' },
              { title: 'Unlimited Liability', desc: 'Partners are personally liable for the debts of the firm' },
              { title: 'No Separate Legal Entity', desc: 'The firm and partners are not considered distinct legal entities' },
              { title: 'Mutual Agency', desc: 'Every partner can act on behalf of the firm and bind it legally' },
              { title: 'Flexibility', desc: 'Easy to form, operate, and dissolve' },
              { title: 'No Minimum Capital', desc: 'Can start with any amount of capital' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
          {/* Privileges of Partnership Firm */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Privileges of Partnership Firm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Simple Formation & Dissolution', desc: 'Easy to form and dissolve with minimal legal formalities' },
                { title: 'Lower Compliance Costs', desc: 'Fewer compliance requirements compared to companies or LLPs' },
                { title: 'Direct Control', desc: 'Partners have direct control without complex governance structures' },
                { title: 'Shared Financial Burden', desc: 'Financial responsibilities and expertise are shared among partners' }
              ].map((privilege, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                  <h3 className="font-medium text-gray-900 mb-2">{privilege.title}</h3>
                  <p className="text-gray-600">{privilege.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Importance of Partnership Firm */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Importance of Partnership Firm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Ideal Business Size', desc: 'Perfect structure for small and medium-sized businesses' },
                { title: 'Collaborative Operations', desc: 'Enables shared responsibilities and collaborative business operations' },
                { title: 'Resource Pooling', desc: 'Facilitates pooling of resources, capital, and diverse skills' },
                { title: 'Simple Tax Structure', desc: 'Straightforward tax structure and accounting methods' },
                { title: 'Quick Decision Making', desc: 'Faster decision-making process due to fewer formalities' }
              ].map((importance, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                  <h3 className="font-medium text-gray-900 mb-2">{importance.title}</h3>
                  <p className="text-gray-600">{importance.desc}</p>
                </div>
              ))}
            </div>
          </div>

        {/* Types of Partnership Firms */}
        <div className="mb-8 md:mb-12 mt-8 md:mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Types of Partnership Firms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'General Partnership', desc: 'All partners share unlimited liability and actively manage the business' },
              { title: 'Partnership at Will', desc: 'Formed for an indefinite period; can be dissolved anytime by any partner' },
              { title: 'Particular Partnership', desc: 'Formed for a specific project or time duration' },
              { title: 'Limited Partnership', desc: 'Some partners have limited liability (less common under Indian law)' },
              { title: 'Registered vs. Unregistered', desc: 'Registered firms enjoy legal rights to sue third parties; unregistered ones do not' }
            ].map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>

        
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Eligibility Criteria</h2>
          <div className="space-y-4">
            {[
              'Persons involved: Only individuals (natural persons) can be partners',
              'Indian residents: All partners should ideally be Indian residents (though foreign individuals may invest with government approval)',
              'Age: Partners must be of sound mind and at least 18 years of age',
              'Number of partners: 2 to 50'
            ].map((criteria, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{criteria}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Status */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Legal Status of a Partnership Firm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: 'Not a Separate Legal Entity', desc: 'Unlike companies or LLPs, a partnership firm is not legally separate from its partners' },
              { title: 'Property Ownership', desc: 'Cannot own property or sue in its own name: Legal proceedings must be made in the name of the partners' },
              { title: 'Registered Firms', desc: 'Can file a case against third parties and claim contractual rights in court' },
              { title: 'Unregistered Firms', desc: 'Cannot enforce rights in court (with some exceptions)' }
            ].map((status, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{status.title}</h3>
                <p className="text-gray-600">{status.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Documents Required for Partnership Firm Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* For Partners */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Partners</h3>
              <ul className="space-y-3">
                {[
                  'PAN Card of each partner',
                  'Aadhar Card / Voter ID / Passport / Driving License (as identity proof)',
                  'Latest utility bill / bank statement (as address proof)',
                  'Passport-size photographs'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={10} />
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Partnership Firm */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Partnership Firm</h3>
              <ul className="space-y-3">
                {[
                  'Partnership Deed (on stamp paper)',
                  'PAN card of the firm (to be applied after deed)',
                  'Address proof of the firm (utility bill, rent agreement, or ownership deed)',
                  'NOC from the owner (if premises is rented)'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={10} />
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pre-Incorporation Compliance */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-[#1B6B50]">Pre-Incorporation Compliance</h2>
          <p className="text-[#C4942D] mb-4 md:mb-6">Note: Registration is optional but strongly advised for legal benefits.</p>
          <div className="space-y-4">
            {/* Drafting Partnership Deed */}
            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
              <h3 className="font-medium text-gray-900 mb-4">1. Drafting the Partnership Deed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Firm name',
                  'Business nature',
                  'Capital contribution',
                  'Profit/loss sharing ratio',
                  'Rights, duties, and obligations of partners',
                  'Rules regarding admission, retirement, and dissolution'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={10} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stamp Duty */}
            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
              <h3 className="font-medium text-gray-900 mb-4">2. Stamp Duty on Deed</h3>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={10} />
                </div>
                <span className="text-gray-700">Paid as per the relevant State Stamp Act.</span>
              </div>
            </div>

            {/* Name Selection */}
            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
              <h3 className="font-medium text-gray-900 mb-4">3. Name Selection</h3>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={10} />
                </div>
                <span className="text-gray-700">Should not be identical to existing firms or violate trademarks.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Incorporation Process */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Incorporation Process of a Partnership Firm</h2>
          <div className="space-y-4">
            {[
              {
                step: 'Draft the Partnership Deed',
                desc: 'Must be signed by all partners and should be notarized and executed on non-judicial stamp paper.'
              },
              {
                step: 'Choose the Name of the Firm',
                desc: 'Unique, should not be offensive or infringe on trademarks.'
              },
              {
                step: 'Apply for PAN & TAN',
                desc: 'Apply for a PAN in the firm\'s name. TAN is needed for tax deduction purposes (TDS).'
              },
              {
                step: 'Open a Current Account',
                desc: 'Use the PAN, deed, and KYC documents to open a bank account.'
              },
              {
                step: 'Registration with Registrar of Firms',
                desc: 'File Form 1 with the Registrar of Firms of the respective State. Attach required documents including certified copy of partnership deed, ownership/rental proof, and identity/address proofs.'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start gap-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1B6B50] rounded-full flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">{step.step}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Incorporation Compliance */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Post-Incorporation Compliance</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Mandatory Compliance (Registered/Unregistered)</h3>
              <div className="space-y-3">
                {[
                  { title: 'PAN & TAN', desc: 'Compulsory for taxation and TDS deductions' },
                  { title: 'GST Registration', desc: 'If turnover exceeds threshold (₹20 lakh / ₹40 lakh)' },
                  { title: 'Income Tax Return Filing', desc: 'Required annually (Form ITR-5 for firm; partners file ITR-3 or ITR-4)' },
                  { title: 'TDS Returns', desc: 'Quarterly (if liable to deduct TDS)' },
                  { title: 'Maintenance of Books', desc: 'Mandatory if turnover crosses prescribed limit' },
                  { title: 'Tax Audit', desc: 'Required if turnover > ₹1 crore (business) / ₹50 lakh (profession)' }
                ].map((compliance, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={12} />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{compliance.title}</span>
                      <span className="text-gray-600"> - {compliance.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Registered Firms</h3>
              <div className="space-y-3">
                {[
                  'Notify Registrar about any change in firm name, business address, or constitution',
                  'Update the partnership deed as needed and re-register if necessary'
                ].map((compliance, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={12} />
                    </div>
                    <span className="text-gray-700">{compliance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages of Registered Partnership Firms */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Advantages of Registering a Partnership Firm</h3>
              <div className="space-y-3">
                {[
                  'Legal recognition and protection under the law',
                  'Right to sue third parties in legal proceedings',
                  'Ability to enforce contractual rights in court',
                  'Enhanced credibility with banks, financial institutions, and vendors'
                ].map((advantage, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={12} />
                    </div>
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disadvantages of Partnership Firms */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Disadvantages of Partnership Firms</h3>
              <div className="space-y-3">
                {[
                  'Unlimited liability - partners are personally liable for firm\'s debts',
                  'Lack of perpetual existence - firm dissolves if a partner dies or withdraws (unless deed states otherwise)',
                  'Limited access to capital and external funding sources',
                  'Less suitable for high-growth businesses requiring substantial capital'
                ].map((disadvantage, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                      <FaCheck className="text-[#1B6B50]" size={12} />
                    </div>
                    <span className="text-gray-700">{disadvantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 md:mb-8 text-[#1B6B50]">FAQs on Partnership Firm Registration</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Who can become a partner in an Indian Partnership Firm?',
                a: 'In India, any individual, including minors (with certain limitations), as well as companies and LLPs, can become partners in a Partnership Firm, subject to the provisions of the Partnership Deed and the Indian Partnership Act, 1932.'
              },
              {
                q: 'How is the profit-sharing ratio determined in a Partnership Firm?',
                a: 'The profit-sharing ratio is determined by the Partnership Deed. If the deed does not specify, profits and losses are shared equally among the partners.'
              },
              {
                q: 'What are the compliance requirements for a registered Partnership Firm?',
                a: 'Compliance obligations include maintaining accurate financial records, filing income tax returns, conducting statutory audits when required, and ensuring adherence to labor laws and other regulations.'
              },
              {
                q: 'How can a registered Partnership Firm be dissolved?',
                a: 'A Partnership Firm can be dissolved voluntarily by mutual agreement among the partners, by a court order, or due to the insolvency or retirement of a partner, in accordance with the Partnership Deed and the Indian Partnership Act, 1932.'
              },
              {
                q: 'What are the tax implications for a registered Partnership Firm?',
                a: 'A registered Partnership Firm is treated as a separate legal entity for tax purposes, with profits taxed at a flat rate, while individual partners are taxed on their respective shares of profits.'
              },
              {
                q: 'Can a Partnership Firm be converted into another type of business entity?',
                a: 'It is possible to convert a Partnership Firm into a Limited Liability Partnership (LLP) or a Private Limited Company, subject to following the relevant legal procedures.'
              },
              {
                q: 'What are the rights and duties of partners in a Partnership Firm?',
                a: 'Partners have the right to participate in management, share in the profits, and access the firm\'s accounts. Their duties include acting in good faith, sharing losses, and refraining from competing with the firm.'
              },
              {
                q: 'How is a new partner added to an existing Partnership Firm?',
                a: 'A new partner can be admitted by amending the Partnership Deed with the unanimous consent of all existing partners and notifying the Registrar of Firms.'
              },
              {
                q: 'What is the difference between a Partnership Firm and a Sole Proprietorship?',
                a: 'A Partnership Firm consists of two or more partners who share both profits and responsibilities, whereas a Sole Proprietorship is owned and operated by a single individual.'
              },
              {
                q: 'What is a Dormant Partnership Firm?',
                a: 'A Dormant Partnership Firm is registered but not actively engaged in business operations. However, such firms are still required to comply with legal and regulatory obligations.'
              },
              {
                q: 'Can a Partnership Firm engage in multiple business activities?',
                a: 'A Partnership Firm can engage in multiple business activities, provided these are outlined in the Partnership Deed and adhere to applicable legal regulations.'
              },
              {
                q: 'What are the consequences of not registering a Partnership Firm?',
                a: 'Unregistered Partnership Firms cannot initiate or defend lawsuits in court, and their partners may face legal and financial disadvantages in disputes and contract enforcement.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left font-medium text-gray-900 p-4 md:p-6 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <span className="text-[#1B6B50] flex-shrink-0 ml-2">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm md:text-base text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

      </main>

      <Footer />
    </div>
  );
} 