'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function OPCPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'standard' | 'premium'>('basic');

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
          <span className="text-[#1B6B50] font-medium">One Person Company (OPC)</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-[#1B6B50]">One Person Company (OPC) Services in India</h1>
            

            <div className="space-y-6">
              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Quick Registration</h3>
                  <p className="text-gray-600">Expert assisted Online OPC registration in 7 business days</p>
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
                  <p className="text-gray-600">Name approval, DSC, DIN allotment, PAN, TAN, and compliance filing Done</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Annual Compliance</h3>
                  <p className="text-gray-600">Support for annual compliance, financial statements, and statutory audits.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="opc-page" />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full mx-auto px-4 md:px-20 py-8 md:py-16 bg-white">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#C4942D]">Choose Your</span> <span className="text-black">Package</span> 
            </h2>
            <p className="text-gray-600">Select the perfect plan for your company registration needs</p>
            
            {/* State Selection */}
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[100%] mx-auto scale-100 transform-origin-center">
            {/* Basic Plan */}
            <div className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${selectedPlan === 'basic' ? 'transform scale-105 z-10' : 'z-0'} 
              ${selectedPlan === 'basic' ? 'bg-[#EABE4C]' : 'bg-gray-50'}`}
              onClick={() => setSelectedPlan('basic')}
            >
              {/* Curved gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
              </div>

              {/* Selected card effects */}
              {selectedPlan === 'basic' && (
                <>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
                      bg-[#CBA135] rounded-[100%] translate-y-[75%] transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/50 to-transparent" />
                </>
              )}

              <div className="relative px-6 pt-6 pb-5 text-center">
                <h3 className={`text-2xl font-extrabold mb-1 
                  ${selectedPlan === 'basic' ? 'text-[#000000]' : 'text-gray-800'}`}>BASIC</h3>
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                  <div className="flex justify-center items-start">
                    <span className={`text-lg mt-1 font-medium 
                      ${selectedPlan === 'basic' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                    <span className={`text-5xl font-bold 
                      ${selectedPlan === 'basic' ? 'text-[#ffffff]' : 'text-gray-800'}`}>1,499</span>
                    <div className="flex flex-col items-start ml-2">
                      <span className={`text-sm line-through 
                        ${selectedPlan === 'basic' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹1,999</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'basic' ? 'text-[#ffffff]' : 'text-gray-500'}`}>(500 Off)</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'basic' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl p-4 backdrop-blur-md shadow-lg
                  ${selectedPlan === 'basic' ? 'bg-white/90' : 'bg-white'}`}>
                  <ul className="space-y-2">
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        Expert Advisor
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        Company Name reserved in 3-4 days*
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        DSC
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        SPICe+ Forms filing in 07 days
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        Incorporation Certificate in 14 days
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        PAN + TAN
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        DIN
                      </span>
                    </li>
                    <li className="flex items-center text-left">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-xs font-medium
                        ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                        Digital Welcome Kit
                      </span>
                    </li>
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-xl mt-4 text-white font-medium
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${selectedPlan === 'basic' ? 
                      'bg-[#165D3F]' : 
                      'hidden'}`}>
                    Get Started
                  </button>
                </div>
              </div>

              {/* Border glow effect for selected plan */}
              {selectedPlan === 'basic' && (
                <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AB3A] z-[-1]"></div>
              )}
            </div>

            {/* Standard Plan */}
            <div className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${selectedPlan === 'standard' ? 'transform scale-105 z-10' : 'z-0'} 
              ${selectedPlan === 'standard' ? 'bg-[#EABE4C]' : 'bg-gray-50'}`}
              onClick={() => setSelectedPlan('standard')}
            >
              {/* Most Popular Tag */}
              <span className="absolute top-4 right-4 text-xs font-medium py-1 px-2 rounded-full
                ${selectedPlan === 'standard' ? 'bg-[#D4AB3A]/30 text-[#8B7425]' : 'bg-gray-200 text-gray-700'}">
                Most Popular
              </span>

              {/* Curved gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
              </div>

              {/* Selected card effects */}
              {selectedPlan === 'standard' && (
                <>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
                      bg-[#CBA135] rounded-[100%] translate-y-[75%] transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/50 to-transparent" />
                </>
              )}

              <div className="relative px-6 pt-6 pb-5 text-center">
                <h3 className={`text-2xl font-extrabold mb-1 
                  ${selectedPlan === 'standard' ? 'text-[#000000]' : 'text-gray-800'}`}>STANDARD</h3>
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                  <div className="flex justify-center items-start">
                    <span className={`text-lg mt-1 font-medium 
                      ${selectedPlan === 'standard' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                    <span className={`text-5xl font-bold 
                      ${selectedPlan === 'standard' ? 'text-[#ffffff]' : 'text-gray-800'}`}>2,999</span>
                    <div className="flex flex-col items-start ml-2">
                      <span className={`text-sm line-through 
                        ${selectedPlan === 'standard' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹5,998</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'standard' ? 'text-[#ffffff]' : 'text-gray-500'}`}>(50% off)</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'standard' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl p-4 backdrop-blur-md shadow-lg
                  ${selectedPlan === 'standard' ? 'bg-white/90' : 'bg-white'}`}>
                  <ul className="space-y-2">
                    {[
                      'Expert Advisor',
                      'Company Name reserved in 1-2 days*',
                      'DSC',
                      'SPICe+ Forms filing in 07 days',
                      'Incorporation Certificate in 14 days',
                      'PAN + TAN',
                      'DIN',
                      'Digital Welcome Kit',
                      'ADT-1 & INC-20A Forms Filing',
                      'Appointment of Auditor'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-left">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center
                          ${selectedPlan === 'standard' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                        </div>
                        <span className={`ml-2 text-xs font-medium
                          ${selectedPlan === 'standard' ? 'text-gray-900' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-xl mt-4 text-white font-medium
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${selectedPlan === 'standard' ? 
                      'bg-[#165D3F]' : 
                      'hidden'}`}>
                    Most Popular
                  </button>
                </div>
              </div>

              {/* Border glow effect for selected plan */}
              {selectedPlan === 'standard' && (
                <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AB3A] z-[-1]"></div>
              )}
            </div>

            {/* Premium Plan */}
            <div className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${selectedPlan === 'premium' ? 'transform scale-105 z-10' : 'z-0'} 
              ${selectedPlan === 'premium' ? 'bg-[#EABE4C]' : 'bg-gray-50'}`}
              onClick={() => setSelectedPlan('premium')}
            >
              {/* Curved gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
              </div>

              {/* Selected card effects */}
              {selectedPlan === 'premium' && (
                <>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
                      bg-[#CBA135] rounded-[100%] translate-y-[75%] transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/50 to-transparent" />
                </>
              )}

              <div className="relative px-6 pt-6 pb-5 text-center">
                <h3 className={`text-2xl font-extrabold mb-1 
                  ${selectedPlan === 'premium' ? 'text-[#000000]' : 'text-gray-800'}`}>PREMIUM</h3>
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                  <div className="flex justify-center items-start">
                    <span className={`text-lg mt-1 font-medium 
                      ${selectedPlan === 'premium' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                    <span className={`text-5xl font-bold 
                      ${selectedPlan === 'premium' ? 'text-[#ffffff]' : 'text-gray-800'}`}>29,999</span>
                    <div className="flex flex-col items-start ml-2">
                      <span className={`text-sm line-through 
                        ${selectedPlan === 'premium' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹36,140</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'premium' ? 'text-[#ffffff]' : 'text-gray-500'}`}>(17% off)</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'premium' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl p-4 backdrop-blur-md shadow-lg
                  ${selectedPlan === 'premium' ? 'bg-white/90' : 'bg-white'}`}>
                  <ul className="space-y-2">
                    {[
                      'Expert Advisor',
                      'Company Name reserved in 1-2 days*',
                      'DSC',
                      'SPICe+ Forms filing in 07 days',
                      'Incorporation Certificate in 14 days',
                      'PAN + TAN',
                      'DIN',
                      'Digital Welcome Kit',
                      'ADT-1 & INC-20A Forms Filing',
                      'Appointment of Auditor',
                      'Issuance of Share Certificate',
                      'DIR-3 KYC (for 2 directors)',
                      'Accounting & Book-Keeping (up to 100 transactions)',
                      'Financial Statements preparation',
                      'Accounting Software (1 Year License)',
                      'AOC-4, MGT-7, ADT-1 Filing',
                      'Annual Filing (up to 20L Turnover)',
                      'AGM',
                      'Statutory Regulations PF, ESI',
                      '1 Year ITR filing (up to 20L turnover)',
                      'Call with a Senior CA/CS for business planning'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-left">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center
                          ${selectedPlan === 'premium' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                        </div>
                        <span className={`ml-2 text-xs font-medium
                          ${selectedPlan === 'premium' ? 'text-gray-900' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-xl mt-4 text-white font-medium
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${selectedPlan === 'premium' ? 
                      'bg-[#165D3F]' : 
                      'hidden'}`}>
                    Go Premium
                  </button>
                </div>
              </div>

              {/* Border glow effect for selected plan */}
              {selectedPlan === 'premium' && (
                <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AB3A] z-[-1]"></div>
              )}
            </div>
          </div>
          <p className="text-black text-center mt-20">*Note: Approval is based on MCA review. <a href="/termsandcondition" className="text-[#C4942D]">Terms and Conditions</a> apply.</p>
        </div>
 {/* Not sure about packages banner */}
 <div className="w-full bg-[#1B6B50]/5 py-8 px-6 rounded-xl mb-12 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1B6B50] mb-4 md:mb-0">Not sure about packages?</h2>
          <Link 
            href="/form?service=opc-expert" 
            className="bg-[#1B6B50] text-white px-6 py-3 rounded-xl hover:bg-[#165D3F] transition-colors duration-300 font-medium w-full md:w-auto text-center"
          >
            Talk to registration expert
          </Link>
        </div>
        {/* Features of OPC */}
        <div className="mb-12">
          <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#1B6B50]">What is OPC?</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                A One Person Company (OPC) is a relatively new type of business entity introduced under the Companies Act, 2013. It allows a single individual to operate a company with a separate legal identity, offering the benefits of limited liability, corporate structure, and full control. This structure is perfect for entrepreneurs who seek full control over their business decisions while benefiting from the formal status of a registered company.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Single Shareholder</h3>
                  <p className="text-gray-600">Only one person can be the shareholder (owner) of the OPC</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Limited Liability</h3>
                  <p className="text-gray-600">The liability of the shareholder is limited to the extent of unpaid subscription money</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Separate Legal Entity</h3>
                  <p className="text-gray-600">OPC has its own legal identity separate from its owner</p>
                </div>
              </div>
            </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50] mt-10">Features of One Person Company</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Single Shareholder', desc: 'Only one person can be the shareholder (owner) of the OPC.' },
              { title: 'Nominee Appointment', desc: 'The shareholder must appoint a nominee who takes over the company in case of death or incapacity.' },
              { title: 'Limited Liability', desc: 'The liability of the shareholder is limited to the extent of unpaid subscription money.' },
              { title: 'Separate Legal Entity', desc: 'OPC has its own legal identity separate from its owner.' },
              { title: 'Perpetual Succession', desc: 'The company continues even after the owner dies, through the nominee.' },
              { title: 'Minimum One Director', desc: 'A single individual can act as both the shareholder and director.' },
              { title: 'No Minimum Capital', desc: 'OPCs can be formed without any prescribed minimum paid-up capital.' },
              { title: 'Prohibited from Raising Equity', desc: 'OPCs cannot issue shares to the public or list on stock exchanges.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of OPC */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Privileges and Benefits of One Person Company</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Limited Liability Protection', desc: 'Personal assets of the owner are protected.' },
              { title: 'Separate Legal Existence', desc: 'Offers credibility and ease in contract execution and litigation.' },
              { title: 'Complete Control', desc: 'The sole shareholder has full control over decision-making.' },
              { title: 'Reduced Compliance Burden', desc: 'Compared to private companies, OPCs have fewer compliance requirements.' },
              { title: 'Ease of Funding (Limited)', desc: 'Banks and financial institutions may prefer dealing with a structured entity over proprietorships.' },
              { title: 'Perpetual Succession', desc: 'Ensures business continuity.' },
              { title: 'Tax Benefits', desc: 'Lower income tax rate compared to sole proprietorships (under certain slabs).' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Status */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#1B6B50]">Legal Status of OPC</h2>
          <div className="space-y-4">
            {[
              'Corporate Body: Treated as a private limited company.',
              'Independent Entity: Can own property, incur debt, sue or be sued.',
              'Taxation: Taxed as a private company under Income Tax Act, 1961.'
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

        {/* Eligibility & Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Eligibility & Requirements for OPC Incorporation</h2>
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="min-w-[800px] md:min-w-0">
              <table className="w-full bg-white border border-gray-200 rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Requirement</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Number of Shareholders</td>
                    <td className="px-6 py-4 text-sm text-gray-600">1 (Must be a natural person and Indian citizen)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Number of Directors</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Minimum 1, Maximum 15</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Nominee</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Mandatory; must also be a natural person, Indian citizen, and resident</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Minimum Capital</td>
                    <td className="px-6 py-4 text-sm text-gray-600">No minimum requirement</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Allowed Activities</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Cannot carry out NBFC or investment activities</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Conversion</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Mandatory conversion into Pvt Ltd if:<br/>
                      • Turnover &gt; ₹2 crore<br/>
                      • Paid-up capital &gt; ₹50 lakh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Documents Required for OPC Incorporation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* For Director/Shareholder */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Director/Shareholder</h3>
              <ul className="space-y-3">
                {[
                  'PAN Card',
                  'Aadhaar Card',
                  'Passport (if NRI/foreign resident)',
                  'Voter ID / Driving License (as ID proof)',
                  'Bank statement / Utility bill (as address proof, not older than 2 months)',
                  'Passport-size photograph',
                  'Specimen signature'
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

            {/* For Nominee */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Nominee</h3>
              <ul className="space-y-3">
                {[
                  'Same documents as the shareholder',
                  'Consent in Form INC-3 with signature'
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
                  'Rent Agreement (if rented)',
                  'NOC from the owner',
                  'Utility bill (not older than 2 months)'
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
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#1B6B50]">Pre-Incorporation Compliance</h2>
          <div className="space-y-4">
            {[
              'Digital Signature Certificate (DSC) – Required for shareholder and nominee.',
              'Name Approval – File SPICe+ Part A for reserving a unique company name with suffix "OPC Private Limited".',
              'Consent of Nominee – Submit nominee consent in Form INC-3.',
              'Draft MOA & AOA – Memorandum and Articles of Association.',
              'Directors Declaration – That he/she has not been convicted or declared insolvent.'
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

        {/* Incorporation Process */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Incorporation Process of One Person Company</h2>
          <div className="space-y-4">
            {[
              {
                step: 'Obtain DSC',
                desc: 'Apply for Digital Signature Certificate (DSC) for the proposed shareholder/director and nominee.'
              },
              {
                step: 'Name Reservation',
                desc: 'File SPICe+ Part A on the MCA portal to reserve the name with the suffix (OPC) Private Limited.'
              },
              {
                step: 'File SPICe+ Part B',
                desc: 'Once the name is approved, fill SPICe+ Part B to file incorporation forms:\n• SPICe+ (INC-32)\n• AGILE-PRO-S (for GST, EPFO, ESIC, Profession Tax, and Bank Account)\n• e-MOA (INC-33) and e-AOA (INC-34)\n• INC-3 (Nominees consent)\n• INC-9 (Declaration by shareholder/director)'
              },
              {
                step: 'Certificate of Incorporation',
                desc: 'After verification, the Registrar of Companies (ROC) will issue a Certificate of Incorporation (COI) with CIN (Corporate Identity Number).'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start gap-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1B6B50] rounded-full flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">{step.step}</h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Incorporation Compliance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Post-Incorporation Compliance</h2>
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="min-w-[800px] md:min-w-0">
              <table className="w-full bg-white border border-gray-200 rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Compliance</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">PAN & TAN</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Automatically issued with incorporation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Bank Account</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Open current account using COI, MOA, AOA, PAN</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Appointment of Auditor</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Within 30 days of incorporation (Form ADT-1)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Statutory Registers</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Maintain statutory registers like Register of Members, Directors, etc.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Board Meeting</td>
                    <td className="px-6 py-4 text-sm text-gray-600">At least one board meeting in each half of the calendar year</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual Filing</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      • Form AOC-4 (Financial Statements)<br/>
                      • Form MGT-7A (Annual Return)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Income Tax Return</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Filed by 31st July (Non-Audit) / 30th Sept (Audit)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">GST Returns</td>
                    <td className="px-6 py-4 text-sm text-gray-600">If registered under GST</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Other Returns</td>
                    <td className="px-6 py-4 text-sm text-gray-600">PF, ESI, Professional Tax (if applicable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Conversion and Restrictions */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#1B6B50]">Conversion and Restrictions</h2>
          <div className="space-y-4">
            {[
              'Voluntary Conversion: Permitted only after 2 years unless capital or turnover exceeds the threshold.',
              'Mandatory Conversion: If turnover > ₹2 crore or paid-up capital > ₹50 lakh.',
              'Prohibited Activities:\n• Investment in securities\n• NBFC activities\n• Cannot convert directly into a Section 8 Company'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700 whitespace-pre-line">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#1B6B50]">FAQs on One Person Company Registration</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the primary objective of OPC registration?',
                a: 'The primary objective of OPC registration is to allow individual entrepreneurs to form a business entity with limited liability protection and full control, combining the benefits of sole proprietorship and corporate structure.'
              },
              {
                q: 'How to inform RoC about change in membership of OPC?',
                a: 'In the event that an OPC member is terminated due to death, incapacity to enter into contracts, or ownership changes, the company is required to submit form INC-4. The user must fill up the same form with the new OPC members details.'
              },
              {
                q: 'Is there any threshold limits for an OPC to mandatorily get converted into either private or public company?',
                a: 'Yes, an OPC must convert into a private or public company if its paid-up share capital exceeds ₹50 lakhs or its average annual turnover exceeds ₹2 crores over three consecutive financial years.'
              },
              {
                q: 'How to intimate RoC that the OPC has exceeded the threshold limits and require conversion into private or public company?',
                a: 'File Form INC-5 within 60 days of exceeding the threshold limits to intimate the RoC about the need for conversion.'
              },
              {
                q: 'What is the time limit for filing form INC-5?',
                a: 'The time limit for filing Form INC-5 is within 60 days of exceeding the threshold limits.'
              },
              {
                q: 'Is there any form that is to be filed for conversion of an OPC into a private or public company?',
                a: 'Yes, Form INC-6 is to be filed for the conversion of an OPC into a private or public company.'
              },
              {
                q: 'Is there any other purpose for filing this form?',
                a: 'Yes, Form INC-6 is also used for voluntarily converting an OPC into a private or public company before reaching the threshold limits.'
              },
              {
                q: 'What is the time limit for filing form INC-6?',
                a: 'Form INC-6 must be filed within 30 days of passing the special resolution for conversion.'
              },
              {
                q: 'Who is eligible to act as a member of an OPC?',
                a: 'Only a natural person who is an Indian citizen and resident in India is eligible to act as a member of an OPC.'
              },
              {
                q: 'A person can be a member of how many OPCs?',
                a: 'A person can only be a member of one OPC at a time.'
              },
              {
                q: 'What if a member of an OPC becomes a member of another OPC by virtue of being a nominee in that other OPC?',
                a: 'The member must withdraw membership from one of the OPCs within 180 days.'
              },
              {
                q: 'Which form is to be filed in case of withdrawal of consent by the nominee of an OPC or in case of intimation of change in nominee by the member?',
                a: 'Form INC-4 must be filed for withdrawal of consent by the nominee or for intimation of a change in nominee by the member.'
              },
              {
                q: 'What happens if the OPCs paid-up share capital exceeds ₹50 lakhs or its annual turnover exceeds ₹2 crores?',
                a: 'The OPC must convert into a private or public company and file Form INC-5 to inform the RoC.'
              },
              {
                q: 'What is the role of a nominee in an OPC?',
                a: 'The nominee steps in as the member in case the original member becomes incapacitated or dies, ensuring continuity of the company.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left font-medium text-gray-900 p-4 md:p-6 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <span className="text-[#1B6B50] flex-shrink-0 ml-4">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-sm md:text-base">{faq.a}</p>
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