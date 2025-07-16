'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function SoleProprietorshipPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');

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
          <span className="text-[#1B6B50] font-medium">Sole Proprietorship Registration</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#1B6B50] mb-10">Sole Proprietorship Registration in India</h1>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Expert Support</h3>
                  <p className="text-gray-600">Sole proprietorship registration made simple with expert support</p>
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
                  <p className="text-gray-600">Complete documentation and filing support done in one go</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">End-to-end Support</h3>
                  <p className="text-gray-600">End-to-end support for proprietorship registration and compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="sole-proprietorship-page" />
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="w-full mx-auto px-4 md:px-20 py-8 md:py-16 bg-white">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#C4942D]">Choose Your </span> <span className="text-black">Package</span> 
            </h2>
            <p className="text-gray-600">Select the perfect plan for your company registration needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-[100%] mx-auto scale-100 transform-origin-center">
            {/* Basic Plan */}
            <div 
              className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
                ${selectedPlan === 'basic' ? 'transform scale-105 z-10 bg-[#EABE4C]' : 'bg-gray-50 z-0'}`}
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
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
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
                      ${selectedPlan === 'basic' ? 'text-[#ffffff]' : 'text-gray-800'}`}>999</span>
                    <div className="flex flex-col items-start ml-2">
                      <span className={`text-sm line-through 
                        ${selectedPlan === 'basic' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹1,427</span>
                      <span className="text-xs bg-[#1B6B50] text-white px-2 py-1 rounded-full">30% Off</span>
                      <span className={`text-xs 
                        ${selectedPlan === 'basic' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    </div>
                  </div>
                </div>
                
                <div className={`rounded-2xl p-4 backdrop-blur-md shadow-lg
                  ${selectedPlan === 'basic' ? 'bg-white/90' : 'bg-white'}`}>
                  <ul className="space-y-2">
                    {['Expert Advisor', 'GST registration', 'MSME registration'].map((feature, index) => (
                      <li key={index} className="flex items-center text-left">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center
                          ${selectedPlan === 'basic' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                        </div>
                        <span className={`ml-2 text-xs font-medium
                          ${selectedPlan === 'basic' ? 'text-gray-900' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
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
            <div 
              className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
                ${selectedPlan === 'standard' ? 'transform scale-105 z-10 bg-[#EABE4C]' : 'bg-gray-50 z-0'}`}
              onClick={() => setSelectedPlan('standard')}
            >
              {/* Curved gradient hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
              </div>

              {/* Selected card effects */}
              {selectedPlan === 'standard' && (
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
                <span className={`absolute top-4 right-4 text-xs font-medium py-1 px-2 rounded-full
                  ${selectedPlan === 'standard' ? 'bg-[#D4AB3A]/30 text-[#8B7425]' : 'bg-gray-200 text-gray-700'}`}>
                  Most Popular
                </span>
                <h3 className={`text-2xl font-extrabold mb-1 
                  ${selectedPlan === 'standard' ? 'text-[#000000]' : 'text-gray-800'}`}>STANDARD</h3>
                
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                  <div className="flex justify-center items-start">
                    <span className={`text-lg mt-1 font-medium 
                      ${selectedPlan === 'standard' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                    <span className={`text-5xl font-bold 
                      ${selectedPlan === 'standard' ? 'text-[#ffffff]' : 'text-gray-800'}`}>4,999</span>
                    <div className="flex flex-col items-start ml-2">
                      <span className={`text-sm line-through 
                        ${selectedPlan === 'standard' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹7,141</span>
                      <span className="text-xs bg-[#1B6B50] text-white px-2 py-1 rounded-full">30% Off</span>
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
                      'GST registration',
                      'MSME registration',
                      'GST Filing for 1 F.Y. (up to 300 transactions)',
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
            <div 
              className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
                ${selectedPlan === 'premium' ? 'transform scale-105 z-10 bg-[#EABE4C]' : 'bg-gray-50 z-0'}`}
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
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
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
                      ${selectedPlan === 'premium' ? 'text-[#ffffff]' : 'text-gray-800'}`}>7,999</span>
                    <div className="flex flex-col items-start ml-2">
                      <span className={`text-sm line-through 
                        ${selectedPlan === 'premium' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹12,306</span>
                      <span className="text-xs bg-[#1B6B50] text-white px-2 py-1 rounded-full">35% Off</span>
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
                      'GST registration',
                      'MSME registration',
                      'GST Filing for 1 F.Y. (up to 300 transactions)',
                      'ITR Filing'
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
        </div>
 {/* Not sure about packages banner */}
 <div className="w-full bg-[#1B6B50]/5 py-8 px-6 rounded-xl mb-12 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1B6B50] mb-4 md:mb-0">Not sure about packages?</h2>
          <Link 
            href="/form?service=soleprop-expert" 
            className="bg-[#1B6B50] text-white px-6 py-3 rounded-xl hover:bg-[#165D3F] transition-colors duration-300 font-medium w-full md:w-auto text-center"
          >
            Talk to registration expert
          </Link>
        </div>
        {/* Features Section */}
        <div className="mb-12">
        <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-[#1B6B50]">What is a Sole Proprietorship?</h1>
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                A Sole Proprietorship is the simplest and oldest form of business in India, where a single individual
                owns, manages, and controls the business. It has no separate legal entity and the owner is
                personally responsible for all business liabilities. It's the best starting point for solo entrepreneurs
                who want a quick, easy, and low-cost way to start a business in India.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Single Ownership</h3>
                  <p className="text-gray-600">Owned and operated by one individual</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Minimal Compliance</h3>
                  <p className="text-gray-600">Few legal formalities to start and run</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Complete Control</h3>
                  <p className="text-gray-600">Full decision-making authority</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50] mt-10">Features of a Sole Proprietorship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Single Ownership', desc: 'Owned and operated by one individual' },
              { title: 'No Legal Separation', desc: 'No distinction between owner and business' },
              { title: 'Unlimited Liability', desc: 'Owner is personally liable for all debts and losses' },
              { title: 'Decision Making', desc: 'Complete control and quick decision-making' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Advantages of Sole Proprietorship</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Easy to Start and Close: No mandatory registration with MCA',
              'Low Setup and Operating Costs: Minimal compliance and regulatory costs',
              'Full Control: Sole decision-maker—ideal for quick actions',
              'Minimal Tax Burden: Taxed as individual, potentially lower tax rates',
              'Ease of Compliance: No mandatory audits unless under specific conditions',
              'Privacy: Not required to publish business accounts publicly'
            ].map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Checklist for Sole Proprietorship Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Basic Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Decide a business name',
                  'Choose a business location',
                  'Apply for PAN card (if not already available)',
                  'Open a current bank account',
                  'Obtain business license/registrations',
                  'Get local registration',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Basic Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Must be an Indian citizen',
                  'Age 18 years or older',
                  'Must have a legal business address in India',
                  'Required licenses based on business type'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Personal Documents</h3>
              <ul className="space-y-3">
                {[
                  'PAN Card',
                  'Aadhaar Card',
                  'Passport-size photograph',
                  'Voter ID / Passport / Driving License (as ID proof)',
                  'Bank statement / Electricity bill (as address proof)'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Business Documents</h3>
              <ul className="space-y-3">
                {[
                  'Rent Agreement / Property documents',
                  'No Objection Certificate (NOC) from property owner',
                  'Utility bill for the premises',
                  'GST Registration (if applicable)',
                  'Shops and Establishment License',
                  'Udyam Registration (MSME)',
                  'FSSAI License (if food-related business)',
                  'Trade License (for municipal compliance)'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Post-Registration Compliances */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Post-Registration Compliances</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                type: 'GST Filing',
                desc: 'If registered under GST, monthly/quarterly returns are mandatory'
              },
              {
                type: 'Income Tax Return (ITR-3)',
                desc: 'Filed annually by the proprietor as an individual carrying on business'
              },
              {
                type: 'TDS Deductions',
                desc: 'If liable (e.g., salary payment over threshold), deduct and deposit TDS'
              },
              {
                type: 'Business Books of Accounts',
                desc: 'Required if income exceeds ₹2.5 lakh (for professionals/businesses)'
              },
              {
                type: 'Tax Audit',
                desc: 'Mandatory if turnover exceeds ₹1 crore (business) / ₹50 lakh (profession)'
              },
              {
                type: 'Other Local Laws',
                desc: 'Periodic renewals of trade, shop licenses or health permits'
              }
            ].map((compliance, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{compliance.type}</h3>
                    <p className="text-gray-600">{compliance.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Implications */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B6B50]">Tax Implications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Income Tax</h3>
              <ul className="space-y-3">
                {[
                  'Income is taxed as personal income of the proprietor',
                  'Slab-based taxation under Individual tax regime',
                  'Eligible for deductions under Sections 80C to 80U',
                  'Tax audit required if turnover > ₹1 crore'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">GST</h3>
              <ul className="space-y-3">
                {[
                  'Registration mandatory if turnover exceeds limits',
                  'GSTR-1 (monthly/quarterly)',
                  'GSTR-3B (monthly)',
                  'GSTR-9 (annual return)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Advance Tax</h3>
              <ul className="space-y-3">
                {[
                  'Applicable if tax liability > ₹10,000/year',
                  'Payable in four installments',
                  'Due dates: 15th Jun, Sep, Dec, Mar'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1B6B50]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the cost of registering a sole proprietorship firm?",
                a: "The cost of registering a sole proprietorship starts from ₹699, covering the basic registration process. Additional fees may apply based on location, legal requirements, and any extra services selected."
              },
              {
                q: "What are some real-life examples of sole proprietorships?",
                a: "Examples include Kumar Book Store, Anita's Bakery, Vijay Photography, Rao's Tailoring Services, and Suman Consultancy—small businesses personally owned and operated."
              },
              {
                q: "Is GST registration required for a sole proprietorship firm?",
                a: "GST registration is mandatory for sole proprietorships if annual turnover exceeds ₹20 lakh (₹10 lakh for certain states) or if the business engages in interstate transactions."
              },
              {
                q: "Can a sole proprietorship obtain a PAN card?",
                a: "Yes, a sole proprietorship requires a PAN card in the owner's name for tax filings and financial transactions."
              },
              {
                q: "Should I use a personal bank account or a business account?",
                a: "While a personal bank account may be used, opening a separate business account is recommended to maintain financial clarity and simplify accounting."
              },
              {
                q: "Do I need a business license to operate a sole proprietorship firm in India?",
                a: "Depending on the business activity and location, certain licenses may be required (e.g., trade license, shop and establishment license). Check with local authorities to ensure compliance."
              },
              {
                q: "How long does it take to register a sole proprietorship?",
                a: "Typically, registration can take 5-7 business days."
              },
              {
                q: "Can a sole proprietorship be converted into a private limited company?",
                a: "Yes, a sole proprietorship can be converted into a private limited company by following a specific conversion process."
              },
              {
                q: "What are the main characteristics of a sole proprietorship?",
                a: "Key characteristics include single ownership with full control, easy setup with minimal formalities, personal liability for business debts, and taxation under the owner's personal income tax."
              },
              {
                q: "What are the liabilities of a sole proprietor if the business fails?",
                a: "If a sole proprietorship fails, the owner is personally liable for all debts, risking personal assets such as property and savings. This can lead to financial loss or bankruptcy proceedings."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left font-medium text-gray-900 p-6 flex justify-between items-center hover:bg-gray-50"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#1B6B50]">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.a}</p>
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
