'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function LLPPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('standard');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
          <span className="text-[#1B6B50] font-medium">Limited Liability Partnership (LLP)</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#1B6B50]">Limited Liability Partnership (LLP) Services in India</h1>

            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Quick Registration</h3>
                  <p className="text-gray-600">Complete your LLP registration within 14 business days T&amp;C*</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">All-Inclusive Package</h3>
                  <p className="text-gray-600">LLP agreement drafting, name approval and compliance requirements covered</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Tailored Services</h3>
                  <p className="text-gray-600">Tailored services for startups, professionals, and businesses to set up an LLP
seamlessly.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
            {/* VIEW PACKAGE TO BE LINKED TO SCROLL TO PACKAGES */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-[#1B6B50]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Package
            </button>
          </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="llp-page" />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full mx-auto px-4 md:px-20 py-8 md:py-16 bg-white">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#C4942D]">Choose Your </span> <span className="text-black">Package</span> 
            </h2>
            <p className="text-gray-600">Select the perfect plan for your LLP registration needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-[100%] mx-auto">
            {[
              {
                id: 'basic',
                title: 'BASIC',
                price: '1,999',
                originalPrice: '2,665',
                discount: '25% Off',
                features: [
                  'Expert Advisor',
                  'Name reserved in 3-4 days',
                  'DSC',
                  'LLP Incorporation in 14 days',
                  'LLP Incorporation Certificate in 28-35 days',
                  'LLP Agreement (post incorporation)',
                  'PAN + TAN',
                  'DIN'
                ]
              },
              {
                id: 'standard',
                title: 'STANDARD',
                price: '3,599',
                originalPrice: '5,537',
                discount: '35% off',
                features: [
                  'Expert Advisor',
                  'Name reserved in 1-2 days',
                  'DSC',
                  'LLP Incorporation in 14 days',
                  'LLP Incorporation Certificate in 28-35 days',
                  'LLP Agreement (post incorporation)',
                  'PAN + TAN',
                  'DIN',
                  'Digital Welcome Kit',
                ]
              },
              {
                id: 'premium',
                title: 'PREMIUM',
                price: '21,999',
                originalPrice: '43,998',
                discount: '50% off',
                features: [
                  'Expert Advisor',
                  'Name reserved in 24 hrs',
                  'DSC',
                  'LLP Incorporation in 14 days',
                  'LLP Incorporation Certificate in 28-35 days',
                  'LLP Agreement (post incorporation)',
                  'PAN + TAN',
                  'DIN',
                  'Digital Welcome Kit',
                  'Call with a Senior CA/CS for business planning',
                  'Form 8 & 11 Filing (for 1 Year)',
                  'DIR-3 KYC (for 2 directors)',
                  '1 Year ITR filing (up to 20L turnover)',
                  'Accounting & Book-Keeping (upto 100 transactions)',
                  'Financial Statements preparation',
                  'Accounting Software (1 Year License)'
                ]
              }
            ].map(plan => {
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
                          <span className={`text-xs 
                            ${isSelected ? 'text-[#ffffff]' : 'text-gray-500'}`}>
                            ({plan.discount})
                          </span>
                          <span className={`text-xs 
                            ${isSelected ? 'text-[#ffffff]' : 'text-gray-500'}`}>
                            + Gov. Fees
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
                        {plan.id === 'basic' && (
                          <li className="flex items-center text-left opacity-50">
                            {/* <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-400">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                              </svg>
                            </div> */}
                            {/* <span className="ml-2 text-xs font-medium text-gray-400">Digital Welcome Kit</span> */}
                          </li>
                        )}
                      </ul>

                      <button className={`w-full py-3 px-4 rounded-xl mt-4 text-white font-medium
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        ${isSelected ? 
                          'bg-[#165D3F]' : 
                          'hidden'}`}>
                        {plan.id === 'standard' ? 'Most Popular' : plan.id === 'premium' ? 'Go Premium' : 'Get Started'}
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

        {/* Annual Compliance Pricing Section */}
        <div id="annual-compliance" className="w-full mx-auto px-4 md:px-20 py-8 md:py-16 bg-white">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#C4942D]">Annual</span> <span className="text-black">Compliance</span> 
            </h2>
            <p className="text-gray-600">Choose the perfect annual compliance package for your LLP</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-[100%] mx-auto">
            {[
              {
                id: 'basic-compliance',
                title: 'BASIC',
                price: '14,499',
                originalPrice: '19,332',
                discount: '25% Off',
                features: [
                  'Form-8 & 11 filing for 1 Year',
                  'DIR-3 KYC (for 2 directors)',
                  '1 year ITR (up to 20L turnover)',
                  'Accounting & Book-Keeping (up to 100 transactions)',
                  'Financial Statements preparation',
                  'Accounting Software (1 Year License)'
                ]
              },
              {
                id: 'standard-compliance',
                title: 'STANDARD',
                price: '30,999',
                originalPrice: '47,690',
                discount: '35% off',
                features: [
                  'Form-8 & 11 filing for 1 Year',
                  'DIR-3 KYC (for 2 directors)',
                  '1 year ITR (up to 20L turnover)',
                  'Accounting & Book-Keeping (up to 100 transactions)',
                  'Financial Statements preparation',
                  'Accounting Software (1 Year License)',
                  'Dedicated account manager',
                  'GST returns Filings (12 months)'
                ]
              },
              {
                id: 'premium-compliance',
                title: 'PREMIUM',
                price: '42,999',
                originalPrice: '61,427',
                discount: '30% off',
                features: [
                  'Form-8 & 11 filing for 1 Year',
                  'DIR-3 KYC (for 2 directors)',
                  '1 year ITR (up to 20L turnover)',
                  'Accounting & Book-Keeping (up to 100 transactions)',
                  'Financial Statements preparation',
                  'Accounting Software (1 Year License)',
                  'Dedicated account manager',
                  'GST returns Filings (12 months)',
                  'Statutory Regulations PF, ESI',
                  'TDS filing for 1 year',
                  'Payroll Services (up to 5 employees)'
                ]
              }
            ].map(plan => {
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
                    {plan.id === 'standard-compliance' && (
                      <span className={`absolute top-4 right-4 text-xs font-medium py-1 px-2 rounded-full
                        ${isSelected ? 'bg-[#D4AB3A]/30 text-[#8B7425]' : 'bg-gray-200 text-gray-700'}`}>
                        Most Popular
                      </span>
                    )}
                    
                    <h3 className={`text-2xl font-extrabold mb-1 
                      ${isSelected ? 'text-[#000000]' : 'text-gray-800'}`}>{plan.title}</h3>
                    
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
                          <span className={`text-xs 
                            ${isSelected ? 'text-[#ffffff]' : 'text-gray-500'}`}>
                            ({plan.discount})
                          </span>
                          <span className={`text-xs 
                            ${isSelected ? 'text-[#ffffff]' : 'text-gray-500'}`}>
                            + Gov. Fees
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
                        {plan.id === 'standard-compliance' ? 'Most Popular' : plan.id === 'premium-compliance' ? 'Go Premium' : 'Get Started'}
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
            href="/form?service=llp-expert" 
            className="bg-[#1B6B50] text-white px-6 py-3 rounded-xl hover:bg-[#165D3F] transition-colors duration-300 font-medium w-full md:w-auto text-center"
          >
            Talk to registration expert
          </Link>
        </div>

        {/* Features of LLP */}
        <div className="mb-8 md:mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#1B6B50]">What is LLP?</h1>
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                A Limited Liability Partnership (LLP) is a unique hybrid business structure that integrates the benefits of both a partnership and a limited liability company. Introduced in India by the Limited Liability Partnership Act, 2008, it allows partners to benefit from limited liability while enjoying the flexibility of managing the business as a traditional partnership.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Separate Legal Entity</h3>
                  <p className="text-gray-600">Complete your LLP registration within 14 business days T&amp;C*</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Limited Liability</h3>
                  <p className="text-gray-600">Partners' liability is limited to their agreed contribution</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Perpetual Succession</h3>
                  <p className="text-gray-600">Continues existence regardless of changes in partners</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50] mt-8 md:mt-10">Features of LLP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Separate Legal Entity', desc: 'An LLP is a legal entity separate from its partners' },
              { title: 'Limited Liability', desc: 'The liability of partners is limited to the extent of their agreed contribution' },
              { title: 'Perpetual Succession', desc: 'The LLP continues its existence irrespective of changes in partners' },
              { title: 'No Minimum Capital', desc: 'No mandatory minimum capital requirement for forming an LLP' },
              { title: 'Flexible Management', desc: 'Partners can decide the structure of management and operational roles' },
              { title: 'Mandatory Audit', desc: 'Audit is not mandatory unless turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh' },
              { title: 'Taxation Benefits', desc: 'LLPs are taxed as partnership firms and not subject to Dividend Distribution Tax (DDT)' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of LLP */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Benefits of LLP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Limited Liability Protection', desc: 'Partners are protected from the debts and obligations of the LLP' },
              { title: 'Low Compliance Burden', desc: 'Compared to private limited companies, LLPs have fewer compliance requirements' },
              { title: 'No Dividend Distribution Tax', desc: 'Profits can be withdrawn without DDT' },
              { title: 'Flexible Profit Distribution', desc: 'Profits can be shared in any ratio as agreed in the LLP agreement' },
              { title: 'Separate Legal Identity', desc: 'Enhances credibility with banks, vendors, and clients' },
              { title: 'Ease of Ownership Transfer', desc: 'Ownership and management can be changed easily as per LLP agreement' },
              { title: 'Ideal for SMEs', desc: 'Due to its low cost and ease of formation and operation' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LLP Incorporation Checklist */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">LLP Incorporation Checklist</h2>
          <div className="space-y-4">
            {[
              'Minimum of 2 partners (at least one must be a resident of India)',
              'At least 2 Designated Partners, with at least one being an Indian resident',
              'Digital Signature Certificate (DSC) for all Designated Partners',
              'Designated Partners must have Director Identification Number (DIN)',
              'Registered office address proof',
              'Name availability and reservation',
              'Draft of the LLP Agreement',
              'PAN and TAN application'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Documents Required for LLP Incorporation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* For Partners */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Partners</h3>
              <ul className="space-y-3">
                {[
                  'PAN Card – Mandatory for Indian Nationals',
                  'Passport – Mandatory for Foreign Nationals',
                  'Identity Proof – Voter ID / Passport / Driving License / Aadhar',
                  'Address Proof – Bank Statement / Electricity Bill / Mobile Bill (not older than 2 months)',
                  'Photographs – Passport size photographs of partners'
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

            {/* For Registered Office */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Registered Office</h3>
              <ul className="space-y-3">
                {[
                  'Ownership Proof – Sale Deed (if owned)',
                  'Rent Agreement – If the office is rented',
                  'No Objection Certificate (NOC) – From the property owner',
                  'Utility Bill – Electricity / Water / Property Tax Receipt (not older than 2 months)'
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

        {/* LLP Incorporation Process */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">LLP Incorporation Process</h2>
          <div className="space-y-4">
            {[
              {
                step: 'Obtain Digital Signature Certificate (DSC)',
                desc: 'Each designated partner must have a valid DSC to sign electronic documents.'
              },
              {
                step: 'Apply for Director Identification Number (DIN)',
                desc: 'DIN can be applied via the Form FiLLiP while incorporating the LLP.'
              },
              {
                step: 'Name Reservation (RUN-LLP Form)',
                desc: 'File Reserve Unique Name (RUN) form on the MCA portal for name approval. Names should be unique and compliant with MCA naming guidelines.'
              },
              {
                step: 'Incorporation of LLP (Form FiLLiP)',
                desc: 'File Form FiLLiP with MCA for incorporation, including partner details, address proof, consent of partners, subscription sheet, and registered office proof.'
              },
              {
                step: 'Filing LLP Agreement (Form 3)',
                desc: 'After incorporation, the LLP Agreement must be filed within 30 days of incorporation using Form 3.'
              },
              {
                step: 'Apply for PAN & TAN',
                desc: 'After incorporation, apply for PAN & TAN for taxation purposes.'
              },
              {
                step: 'Open Bank Account',
                desc: "Use the COI, LLP Agreement, PAN, and other KYC documents to open a current account in the LLP's name."
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
        <div id="annual-compliance" className="mb-8 md:mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Post-Incorporation Compliance (Annual)</h2>
          <div className="space-y-4">
            {[
              'Form 11 – Annual Return of LLP (Due: 30th May every year)',
              'Form 8 – Statement of Accounts and Solvency (Due: 30th October every year)',
              'Income Tax Return Filing – By 31st July (Audit not required) or 30th September (Audit required)',
              'Maintenance of Books of Accounts'
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

        {/* FAQs */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-6 md:mb-8 text-[#1B6B50]">FAQs on Limited Liability Partnership Registration</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is a Limited Liability Partnership (LLP)?',
                a: 'A Limited Liability Partnership (LLP) is a legal entity that combines the benefits of a partnership with limited liability for its partners. It is governed by the Limited Liability Partnership Act, of 2008.'
              },
              {
                q: 'What are the advantages of forming an LLP?',
                a: 'Forming an LLP offers limited liability protection to its partners, flexibility in management, minimal compliance requirements compared to companies, and tax efficiency as profits are taxed at the individual partner level.'
              },
              {
                q: 'Who can be partners in an LLP?',
                a: 'Partners in an LLP can be individuals or corporate entities. There must be at least two designated partners, one of whom must be an Indian resident. There is no limit on the maximum number of partners in an LLP.'
              },
              {
                q: 'What is the minimum capital requirement for starting an LLP?',
                a: 'There is no minimum capital requirement for starting an LLP in India. The partners can contribute any amount of capital agreed upon in the LLP agreement.'
              },
              {
                q: 'How is an LLP taxed?',
                a: 'LLPs are taxed as pass-through entities, similar to partnerships. They do not pay taxes at the entity level. Instead, profits or losses are passed through to the partners, who report them on their individual income tax returns.'
              },
              {
                q: 'What are the annual filing requirements for LLPs?',
                a: 'LLPs must file annual returns with the Registrar of Companies (ROC) within prescribed timelines. They are also required to prepare and file financial statements, along with other compliances such as LLP agreement registration and tax filings.'
              },
              {
                q: 'Can an LLP be converted into a private limited company or vice versa?',
                a: 'Yes, an LLP can be converted into a private limited company or vice versa under certain conditions and procedures specified under the Companies Act and LLP Act.'
              },
              {
                q: 'How long does it take to register an LLP in India?',
                a: 'The timeframe to register your LLP typically ranges from 15 to 20 working days, subject to the submission of complete documents and approvals from regulatory authorities.'
              },
              {
                q: 'What are the key documents required for LLP registration?',
                a: 'Key documents include identity proofs and address proofs of partners, LLP agreement, proof of registered office address, and Digital Signature Certificates (DSC) of partners.'
              },
              {
                q: 'Can foreign nationals or entities be partners in an LLP?',
                a: 'Yes, foreign nationals or entities can be partners in an LLP, subject to compliance with Foreign Direct Investment (FDI) regulations and other applicable laws.'
              },
              {
                q: 'What is the object of the Limited Liability Partnership Act?',
                a: 'The object of the Limited Liability Partnership (LLP) Act, 2008, is to provide a legal framework for the formation and regulation of LLPs in India, offering a flexible and efficient business structure with the benefits of limited liability while allowing partners to organise their internal management based on mutually agreed terms.'
              },
              {
                q: 'Is LLP better than PVT Ltd?',
                a: 'LLPs offer greater flexibility in management and fewer compliance requirements compared to Private Limited Companies (PVT Ltd). However, PVT Ltd companies might be preferred for attracting equity investment and providing clearer structures for ownership and control. The choice depends on the specific needs and goals of the business.'
              },
              {
                q: 'What is the difference between LLP and limited partnership?',
                a: 'An LLP provides limited liability to all its partners and is a separate legal entity, whereas a limited partnership consists of both general partners (with unlimited liability) and limited partners (with liability limited to their investment).'
              },
              {
                q: 'Which is better, LLP or partnership?',
                a: 'An LLP is generally better than a traditional partnership because it offers limited liability protection to all partners, meaning their personal assets are protected from business liabilities, unlike in a traditional partnership where partners have unlimited liability.'
              },
              {
                q: 'Is LLP better than sole proprietorship?',
                a: 'Yes, an LLP is often better than a sole proprietorship as it provides limited liability protection, which means personal assets are not at risk if the business incurs debts or legal issues, unlike in a sole proprietorship where the owner is personally liable.'
              },
              {
                q: 'Who cannot be a partner in LLP?',
                a: 'An insolvent person, an undischarged bankrupt, or a person convicted of an offence involving moral turpitude cannot be a partner in an LLP.'
              },
              {
                q: 'What are the rights and duties of LLP partners?',
                a: 'The rights and duties of LLP partners are governed by the LLP agreement and may include sharing profits and losses, participating in management, and making decisions about the business. They also have a duty to act in the best interest of the LLP and to maintain transparency and honesty in their dealings.'
              },
              {
                q: 'Can an existing partnership firm be converted to LLP?',
                a: 'Yes, an existing partnership firm can be converted into an LLP by following the procedure laid out in the LLP Act, 2008, which includes filing the necessary forms and documents with the Registrar of Companies (RoC).'
              },
              {
                q: 'Can an existing company be converted to LLP?',
                a: 'Yes, an existing private or unlisted public company can be converted into an LLP, subject to compliance with the provisions of the LLP Act, 2008, and the approval of all shareholders and creditors.'
              },
              {
                q: 'Can a listed company be converted to LLP?',
                a: 'No, a listed company cannot be converted into an LLP.'
              },
              {
                q: 'How can I apply for a reserved LLP name?',
                a: 'You can apply for a reserved LLP name through the Ministry of Corporate Affairs MCA portal by filing Form LLP-RUN (Reserve Unique Name) along with the prescribed fee.'
              },
              {
                q: "Whether the name of an LLP can end with words like 'Limited' or 'Pvt. Limited'?",
                a: "No, the proposed name of an LLP must end with 'LLP' or 'Limited Liability Partnership' and cannot end with words like 'Limited' or 'Pvt. Limited.'"
              },
              {
                q: "What is the process for intimation of changes in the partner's details?",
                a: "Changes in the partner's details must be intimated to the RoC by filing Form LLP-3 and Form LLP-4 within 30 days of the change."
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
