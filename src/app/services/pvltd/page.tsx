'use client'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer";
import { db } from "@/firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function ServicesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: "",
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('standard');
  const [plans] = useState([
    {
      id: "basic",
      title: "Basic",
      price: 1499,
      originalPrice: 1999,
      description: "Start your business journey with essential services",
      features: [
        "Expert Advisor",
        "Company Name reserved in 3-5 days*",
        "DSC",
        "SPICe+ Forms filing in 14 days",
        "Incorporation Certificate in 28-35 days",
        "PAN + TAN",
        "DIN for 2 directors",
      ],
      buttonText: "Get Started",
      disclaimer: "+ Gov. Fees"
    },
    {
      id: "standard",
      title: "Standard",
      price: 2999,
      originalPrice: 5998,
      description: "Perfect for growing businesses needing more features",
      features: [
        "Expert Advisor",
          "Company Name reserved in 2-4 days*",
        "DSC",
        "SPICe+ Forms filing in 14 days",
        "Incorporation Certificate in 28-35 days",
        "PAN + TAN",
        "DIN for 2 directors",
        "Digital welcome kit that includes a check list of all compliances",
      ],
      buttonText: "Most Popular",
      disclaimer: "+ Gov. Fees"
    },
    {
      id: "premium",
      title: "Premium",
      price: 4999,
      originalPrice: 7141,
      description: "Complete solution with premium benefits",
      features: [
        "Expert Advisor",
        "Company Name reserved in 1-2 days*",
        "DSC",
        "SPICe+ Forms filing in 14 days",
        "Incorporation Certificate in 28-35 days",
        "PAN + TAN",
        "DIN for 2 directors",
        "Digital welcome kit that includes a check list of all compliances",
        "MSME Registration (free)",
        "Expedited Trademark Application Filing",
      ],
      buttonText: "Go Premium",
      disclaimer: "+ Gov. Fees",
      
    }
  ]);
  const [plansLoading, setPlansLoading] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      await addDoc(collection(db, "consultations"), {
        ...formData,
        source: "services-page",
        createdAt: new Date()
      });
      
      setFormData({ name: "", email: "", phone: "", address: "", services: "" });
      setFormSubmitted(true);
    } catch (err) {
      console.error("Error submitting form: ", err);
      setError("There was an error submitting your information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Breadcrumb */}
      <div className="px-10 sm:px-20 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#1B6B50]">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/company-registration" className="text-gray-600 hover:text-[#1B6B50]">Company Registration</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">Private Limited Company Registration</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-10 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1B6B50] mb-6 lg:mb-8">
            Private Limited (PVT LTD) Company Registration in India
          </h1>

          {/* Features List */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Affordable & Transparent:</h3>
                <p className="text-gray-600">Registration starting at ₹999 + Govt Fee with no hidden charges.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Comprehensive Compliance:</h3>
                <p className="text-gray-600">SPICe-INC-32, eMoA-INC-33, eAOA-INC-34 filings, DSC, PAN, and TAN—all handled seamlessly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Post-Incorporation Benefits:</h3>
                <p className="text-gray-600">Includes free MSME registration, GST filing support, and banking setup.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Trusted by Startups:</h3>
                <p className="text-gray-600">Rated #1 for Pvt Ltd Registration, with 100% MCA-compliant filings.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
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

        {/* Right Column - Registration Form */}
        <div>
          <ConsultationForm source="pvltd-page" />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full mx-auto px-4 sm:px-20 py-8 lg:py-16 bg-white">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C4942D]">Choose Your</span> <span className="text-black">Package</span> 
          </h2>
          <p className="text-gray-600">Select the perfect plan for your company registration needs</p>
        </div>

        {plansLoading ? (
          <div className="flex justify-center items-center py-12 lg:py-20">
            <div className="animate-spin rounded-full h-12 lg:h-16 w-12 lg:w-16 border-t-2 border-b-2 border-[#165D3F]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[100%] mx-auto scale-100 transform-origin-center">
            {plans.map(plan => {
              const isSelected = selectedPlan === plan.id;
              
              return (
                <div 
                  key={plan.id}
                  className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
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
        )}
        <p className="text-black text-center mt-20">*Note: Approval is based on MCA review. <a href="/termsandcondition" className="text-[#C4942D]">Terms and Conditions</a> apply.</p>
        <p className="text-black text-center">GST Registration along with Premium Package + Bank A/C Opening (Complimentary) – 5,500/-</p>
      </div>
       {/* Not sure about packages banner */}
       <div className="w-full bg-[#1B6B50]/5 py-8 px-6 rounded-xl mb-12 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1B6B50] mb-4 md:mb-0">Not sure about packages?</h2>
          <Link 
            href="/form?service=pvltd-expert" 
            className="bg-[#1B6B50] text-white px-6 py-3 rounded-xl hover:bg-[#165D3F] transition-colors duration-300 font-medium w-full md:w-auto text-center"
          >
            Talk to registration expert
          </Link>
        </div>

      {/* Annual Compliance Pricing Section */}
      <div id="annual-compliance" className="w-full mx-auto px-4 sm:px-20 py-8 lg:py-16 bg-white">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C4942D]">Annual</span> <span className="text-black">Compliance</span> 
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">Choose the perfect annual compliance package for your company</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[100%] mx-auto scale-100 transform-origin-center">
          {/* Basic Annual Compliance Package */}
          <div 
            className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${selectedPlan === 'basic-compliance' ? 'transform scale-105 z-10 bg-[#EABE4C]' : 'bg-gray-50 z-0'}`}
            onClick={() => setSelectedPlan('basic-compliance')}
          >
            {/* Curved gradient hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
            </div>

            {/* Selected card effects */}
            {selectedPlan === 'basic-compliance' && (
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

            <div className="relative px-4 lg:px-6 pt-4 lg:pt-6 pb-4 lg:pb-5 text-center">
              <h3 className={`text-xl lg:text-2xl font-extrabold mb-1 
                ${selectedPlan === 'basic-compliance' ? 'text-[#000000]' : 'text-gray-800'}`}>Basic</h3>
              <p className={`text-xs mb-3 lg:mb-4 max-w-[85%] mx-auto italic 
                ${selectedPlan === 'basic-compliance' ? 'text-[#000000]' : 'text-gray-600'}`}>Essential annual compliance services</p>
              
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                <div className="flex justify-center items-start">
                  <span className={`text-base lg:text-lg mt-1 font-medium 
                    ${selectedPlan === 'basic-compliance' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                  <span className={`text-4xl lg:text-5xl font-bold 
                    ${selectedPlan === 'basic-compliance' ? 'text-[#ffffff]' : 'text-gray-800'}`}>29,999</span>
                  <div className="flex flex-col items-start ml-2">
                    <span className={`text-xs lg:text-sm line-through 
                      ${selectedPlan === 'basic-compliance' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹35,999</span>
                    <span className={`text-[10px] lg:text-xs 
                      ${selectedPlan === 'basic-compliance' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    <span className="text-[10px] lg:text-xs text-green-600">17% Off</span>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-2xl p-3 lg:p-4 backdrop-blur-md shadow-lg
                ${selectedPlan === 'basic-compliance' ? 'bg-white/90' : 'bg-white'}`}>
                <ul className="space-y-2">
                  {[
                    "Appointment of Auditor",
                    "Issuance of Share Certificate",
                    "INC-20A Form filing",
                    "DIR-3 KYC (for 2 directors)",
                    "Accounting & Book-Keeping (up to 100 transactions)",
                    "Financial Statements preparation",
                    "Accounting Software (1 Year License)",
                    "AOC-4, MGT-7, ADT-1 Filing",
                    "ADT-1 & INC-20A Forms Filing",
                    "Annual Filing (up to 20L Turnover)",
                    "Facilitation of AGM",
                    "Statutory Regulations PF, ESI",
                    "1 Year ITR filing (up to 20L turnover)"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-left">
                      <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${selectedPlan === 'basic-compliance' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-[11px] lg:text-xs font-medium
                        ${selectedPlan === 'basic-compliance' ? 'text-gray-900' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 lg:py-3 px-3 lg:px-4 rounded-xl mt-3 lg:mt-4 text-white font-medium text-sm lg:text-base
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  ${selectedPlan === 'basic-compliance' ? 
                    'bg-[#165D3F]' : 
                    'hidden'}`}>
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Standard Annual Compliance Package */}
          <div 
            className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${selectedPlan === 'standard-compliance' ? 'transform scale-105 z-10 bg-[#EABE4C]' : 'bg-gray-50 z-0'}`}
            onClick={() => setSelectedPlan('standard-compliance')}
          >
            {/* Curved gradient hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
            </div>

            {/* Selected card effects */}
            {selectedPlan === 'standard-compliance' && (
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

            <div className="relative px-4 lg:px-6 pt-4 lg:pt-6 pb-4 lg:pb-5 text-center">
              <span className={`absolute top-3 lg:top-4 right-3 lg:right-4 text-[10px] lg:text-xs font-medium py-1 px-2 rounded-full
                ${selectedPlan === 'standard-compliance' ? 'bg-[#D4AB3A]/30 text-[#8B7425]' : 'bg-gray-200 text-gray-700'}`}>
                Most Popular
              </span>
              <h3 className={`text-xl lg:text-2xl font-extrabold mb-1 
                ${selectedPlan === 'standard-compliance' ? 'text-[#000000]' : 'text-gray-800'}`}>Standard</h3>
              <p className={`text-xs mb-3 lg:mb-4 max-w-[85%] mx-auto italic 
                ${selectedPlan === 'standard-compliance' ? 'text-[#000000]' : 'text-gray-600'}`}>Comprehensive compliance coverage</p>
              
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                <div className="flex justify-center items-start">
                  <span className={`text-base lg:text-lg mt-1 font-medium 
                    ${selectedPlan === 'standard-compliance' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                  <span className={`text-4xl lg:text-5xl font-bold 
                    ${selectedPlan === 'standard-compliance' ? 'text-[#ffffff]' : 'text-gray-800'}`}>49,999</span>
                  <div className="flex flex-col items-start ml-2">
                    <span className={`text-xs lg:text-sm line-through 
                      ${selectedPlan === 'standard-compliance' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹71,427</span>
                    <span className={`text-[10px] lg:text-xs 
                      ${selectedPlan === 'standard-compliance' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    <span className="text-[10px] lg:text-xs text-green-600">30% Off</span>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-2xl p-3 lg:p-4 backdrop-blur-md shadow-lg
                ${selectedPlan === 'standard-compliance' ? 'bg-white/90' : 'bg-white'}`}>
                <ul className="space-y-2">
                  {[
                    "Appointment of Auditor",
                    "Issuance of Share Certificate",
                    "INC-20A Form filing",
                    "DIR-3 KYC (for 2 directors)",
                    "Accounting & Book-Keeping (up to 100 transactions)",
                    "Financial Statements preparation",
                    "Accounting Software (1 Year License)",
                    "AOC-4, MGT-7, ADT-1 Filing",
                    "ADT-1 & INC-20A Forms Filing",
                    "Annual Filing (up to 20L Turnover)",
                    "Facilitation of AGM",
                    "Statutory Regulations PF, ESI",
                    "1 Year ITR filing (up to 20L turnover)",
                    "Preparation of Minutes & AGM Report",
                    "GST returns Filings (12 months)",
                    "Dedicated account manager",
                    "Consultation with a CA, CS & Lawyer",
                    "TDS filing for 1 year"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-left">
                      <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${selectedPlan === 'standard-compliance' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-[11px] lg:text-xs font-medium
                        ${selectedPlan === 'standard-compliance' ? 'text-gray-900' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 lg:py-3 px-3 lg:px-4 rounded-xl mt-3 lg:mt-4 text-white font-medium text-sm lg:text-base
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  ${selectedPlan === 'standard-compliance' ? 
                    'bg-[#165D3F]' : 
                    'hidden'}`}>
                  Most Popular
                </button>
              </div>
            </div>
          </div>

          {/* Premium Annual Compliance Package */}
          <div 
            className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${selectedPlan === 'premium-compliance' ? 'transform scale-105 z-10 bg-[#EABE4C]' : 'bg-gray-50 z-0'}`}
            onClick={() => setSelectedPlan('premium-compliance')}
          >
            {/* Curved gradient hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
            </div>

            {/* Selected card effects */}
            {selectedPlan === 'premium-compliance' && (
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

            <div className="relative px-4 lg:px-6 pt-4 lg:pt-6 pb-4 lg:pb-5 text-center">
              <h3 className={`text-xl lg:text-2xl font-extrabold mb-1 
                ${selectedPlan === 'premium-compliance' ? 'text-[#000000]' : 'text-gray-800'}`}>Premium</h3>
              <p className={`text-xs mb-3 lg:mb-4 max-w-[85%] mx-auto italic 
                ${selectedPlan === 'premium-compliance' ? 'text-[#000000]' : 'text-gray-600'}`}>Complete compliance solution</p>
              
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                <div className="flex justify-center items-start">
                  <span className={`text-base lg:text-lg mt-1 font-medium 
                    ${selectedPlan === 'premium-compliance' ? 'text-[#ffffff]' : 'text-gray-700'}`}>₹</span>
                  <span className={`text-4xl lg:text-5xl font-bold 
                    ${selectedPlan === 'premium-compliance' ? 'text-[#ffffff]' : 'text-gray-800'}`}>69,999</span>
                  <div className="flex flex-col items-start ml-2">
                    <span className={`text-xs lg:text-sm line-through 
                      ${selectedPlan === 'premium-compliance' ? 'text-[#ffffff]/70' : 'text-gray-500'}`}>₹98,591</span>
                    <span className={`text-[10px] lg:text-xs 
                      ${selectedPlan === 'premium-compliance' ? 'text-[#ffffff]' : 'text-gray-500'}`}>+ Gov. Fees</span>
                    <span className="text-[10px] lg:text-xs text-green-600">29% Off</span>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-2xl p-3 lg:p-4 backdrop-blur-md shadow-lg
                ${selectedPlan === 'premium-compliance' ? 'bg-white/90' : 'bg-white'}`}>
                <ul className="space-y-2">
                  {[
                    "Appointment of Auditor",
                    "Issuance of Share Certificate",
                    "INC-20A Form filing",
                    "DIR-3 KYC (for 2 directors)",
                    "Accounting & Book-Keeping (up to 100 transactions)",
                    "Financial Statements preparation",
                    "Accounting Software (1 Year License)",
                    "AOC-4, MGT-7, ADT-1 Filing",
                    "ADT-1 & INC-20A Forms Filing",
                    "Annual Filing (up to 20L Turnover)",
                    "Facilitation of AGM",
                    "Statutory Regulations PF, ESI",
                    "1 Year ITR filing (up to 20L turnover)",
                    "Preparation of Minutes & AGM Report",
                    "GST returns Filings (12 months)",
                    "Dedicated account manager",
                    "Consultation with a CA, CS & Lawyer",
                    "TDS filing for 1 year",
                    "Payroll Services (up to 5 employees)"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-left">
                      <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${selectedPlan === 'premium-compliance' ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                        <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className={`ml-2 text-[11px] lg:text-xs font-medium
                        ${selectedPlan === 'premium-compliance' ? 'text-gray-900' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 lg:py-3 px-3 lg:px-4 rounded-xl mt-3 lg:mt-4 text-white font-medium text-sm lg:text-base
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  ${selectedPlan === 'premium-compliance' ? 
                    'bg-[#165D3F]' : 
                    'hidden'}`}>
                  Go Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Private Limited Company Information Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
          <span className="text-black">What Is a</span> <span className="text-[#C4942D]">Private Limited Company?</span>
        </h2>

        <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
          A private limited company (commonly abbreviated as Pvt Ltd) is considered a separate legal entity from its owners, offering a secure framework for operations while safeguarding the personal assets of its members. This business structure, governed by the Companies Act, 2013, is popular among entrepreneurs and small to medium-sized businesses (SMEs) for its combination of limited liability protection, ownership control, and scalability.
        </p>

        <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
          <span className="font-medium">For instance,</span> startups like Swiggy began as private limited companies due to their ability to secure venture capital funding while maintaining limited liability for founders.
        </p>

        <p className="text-gray-600 mb-8 lg:mb-12 text-sm lg:text-base">
          Unlike public companies, a private limited company restricts the transfer of shares and operates with a focused group of stakeholders. This makes it ideal for businesses seeking operational independence, confidentiality, and long-term growth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex justify-center items-center text-center mt-8 lg:mt-20">
            <Image 
              src="/newspaper.png"
              alt="Company Registration Document"
              width={250}
              height={250}
              className="object-contain w-[200px] lg:w-[300px]"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Definition as per the Companies Act, 2013</h3>
            
            <p className="mb-4 text-black">Section 2(68) of the Companies Act, 2013, defines a Private Limited Company as an entity that:</p>

            <ul className="space-y-4">
              <li>
                <p className="font-bold text-black mb-1">• Restricts the Transfer of Shares:</p>
                <p className="text-black pl-4">Shareholders cannot freely transfer their shares to the public or external parties. This restriction ensures that ownership remains within a close group of trusted individuals, protecting the company's stability.</p>
              </li>

              <li>
                <p className="font-bold text-black mb-1">• Limits the Number of Members:</p> 
                <p className="text-black pl-4">A private limited company can have a maximum of 200 members, excluding current and former employees who hold shares. This limit ensures the company remains a private entity. (Exception: A One Person Company (OPC) can have only one member.)</p>
              </li>

              <li>
                <p className="font-bold text-black mb-1">• Prohibits Public Invitations:</p>
                <p className="text-black pl-4">The company is not allowed to invite the public to subscribe to its shares, debentures, or other securities. This makes private limited companies more focused on raising capital privately, such as through friends, family, or institutional investors.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-full bg-[#F5F9F7] p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-bold mb-4 text-black">Companies Act, 2013</h4>
          <p className="text-black">
            The Companies Act 2013 (No. 18 of 2013) is the primary source of Indian company law. It received presidential assent on 29 August 2013 and largely replaced the Companies Act 1956. The Act was implemented in stages. Section 1 came into force on 30 August 2013. 98 sections became effective on 12 September 2013 with some changes. Another 183 sections were enforced from 1 April 2014.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 flex flex-col lg:flex-row items-center gap-2">
          <span className="text-black">What Are the</span>
          <span className="text-[#C4942D]">Key Features</span>
          <span className="text-black">and Benefits of a Private Limited Company?</span>
        </h2>

        <p className="text-black mb-8 lg:mb-12 text-sm lg:text-base">
          A Private Limited Company provides an ideal business structure that combines legal protections, operational flexibility, and growth opportunities, making it a preferred choice for entrepreneurs and small to medium-sized businesses. Here are the 10 key features and 7 benefits of a Private Limited Company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">1. Limited Liability Protection</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              Shareholders' liability is limited to the unpaid amount of their shares. This safeguards personal assets from business liabilities.
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">2. Separate Legal Entity</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              The company is treated as an independent entity, allowing it to own property, sue, and be sued in its own name.
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">3. Perpetual Succession</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              The company continues to exist irrespective of changes in ownership or member status, ensuring continuity in business operations.
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">4. Membership Flexibility</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              Requires at least 2 members and allows up to 200 members, making it suitable for small and medium-sized enterprises (SMEs).
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">5. Restrictions on Share Transfers</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              Shares can only be transferred within the group, ensuring control over ownership and decision-making.
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">6. No Minimum Paid-Up Capital</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              Entrepreneurs can register a private limited company in India without any mandatory requirement for minimum capital investment.
            </p>
          </div>

          {/* Feature cards */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border">
            <div className="mb-3 lg:mb-4">
              <Image 
                src="/building-icon.png"
                alt="Building Icon"
                width={32}
                height={32}
                className="object-contain w-8 lg:w-10"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 text-black">7. Board of Directors</h3>
            <div className="h-1 w-full bg-gradient-to-r from-[#165D3F] to-[#ffffff] mb-3"></div>
            <p className="text-black">
              A private limited company must have at least 2 directors and can include up to 15 directors. If necessary, a special resolution can increase the limit.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <Testimonials />

      {/* Registration Process Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
          <span className="text-[#C4942D]">Step-by-Step</span> <span className="text-black">Private Limited Company Registration Process</span>
        </h2>

        <p className="text-gray-600 mb-6 lg:mb-8 text-sm lg:text-base">
          A Private Limited Company offers limited liability protection to its shareholders, making it one of the most popular business structures for entrepreneurs in India. The registration process requires submitting key documents, adhering to compliance regulations, and opening a current account for financial transactions. Here's a detailed breakdown of the steps involved:
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-gradient-to-b from-white to-[#B3DCCB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-black">Step 1: Obtain a Digital Signature Certificate (DSC)</h3>
            <p className="text-gray-600">
              A Digital Signature Certificate (DSC) is mandatory for filing electronically signed documents with the Ministry of Corporate Affairs (MCA). The DSC ensures the authenticity of all filings and transactions. Our team will assist you in procuring your DSC from a certified authority on your behalf.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-b from-white to-[#B3DCCB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-black">Step 2: Apply for a Director Identification Number (DIN)</h3>
            <p className="text-gray-600">
              The Director Identification Number (DIN) is a unique ID required for individuals intending to serve as directors of a company. It is issued by the MCA. We will handle the DIN application process for you by filing the necessary forms on the MCA portal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-b from-white to-[#B3DCCB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-black">Step 3: Name Approval Process</h3>
            <p className="text-gray-600 mb-3">Selecting the right company name is a crucial step in the registration process. Here's how it works:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Submit the RUN form (Reserve Unique Name) on the MCA portal.</li>
              <li>Ensure the name complies with the guidelines of the Companies Act, 2013.</li>
              <li>Confirm that the name is unique and not similar to any existing company or trademark.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-b from-white to-[#B3DCCB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-black">Step 4: File the SPICe+ Form (Simplified Proforma for Incorporating Company Electronically Plus)</h3>
            <p className="text-gray-600 mb-3">The SPICe+ form is an integrated online form that simplifies the incorporation process by including multiple services:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Part A: For name reservation.</li>
              <li>Part B: For incorporation, DIN allocation, PAN, TAN, GST registration, and more.</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="bg-gradient-to-b from-white to-[#B3DCCB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-black">Step 5: Draft and File the MOA and AOA</h3>
            <p className="text-gray-600">
              Memorandum of Association (MOA): Defines the company's objectives and operational scope. Articles of Association (AOA): Outlines the internal rules and governance structure. We will prepare and file these documents, ensuring all vital clauses are accurately included to reflect your company's purpose and management structure.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-gradient-to-b from-white to-[#B3DCCB] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-black">Step 6: Obtain the Certificate of Incorporation</h3>
            <p className="text-gray-600 mb-3">
              The Certificate of Incorporation is issued by the Registrar of Companies (ROC) as proof that your company is officially registered. Once the certificate is received, we will:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Apply for PAN and TAN with the Income Tax Department.</li>
              <li>Assist in opening a company bank account.</li>
              <li>Guide you on how to start operations while adhering to statutory and legal compliance requirements.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
          <span className="text-[#C4942D]">FAQs</span> <span className="text-black">on Private Limited Company Registration</span>
        </h2>

        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
            Starting a Private Limited Company is a big milestone for any entrepreneur. With the right guidance, the process can be smooth and straightforward. Whether you're curious about the SPICe+ forms, the documents you'll need, or what comes after registration, we've got you covered.
          </p>
          <p className="text-gray-600">
            To make things easier, we've answered some of the most common questions about Private Limited Company registration. These FAQs will help you understand each step clearly and give you the confidence to move forward. Explore the answers below and take the first step toward building your business.
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border-b border-gray-200">
            <button 
              onClick={() => toggleFAQ(0)} 
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-black font-medium">What is the minimum requirement to register a Private Limited Company in India?</span>
              <svg 
                className={`w-6 h-6 text-gray-400 transition-transform ${openFAQ === 0 ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 0 && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600">
                  To register a Private Limited Company in India, you need at least 2 directors and 2 shareholders (they can be the same individuals), a unique company name, a registered office address, and the necessary identity and address proofs. There's no minimum capital requirement, though you'll need to specify an authorized capital amount in your application.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="border-b border-gray-200">
            <button 
              onClick={() => toggleFAQ(1)} 
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-black font-medium">Can a Private Limited Company operate multiple businesses?</span>
              <svg 
                className={`w-6 h-6 text-gray-400 transition-transform ${openFAQ === 1 ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 1 && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600">
                  Yes, a Private Limited Company can operate multiple businesses under one entity as long as these activities are listed in the company's Memorandum of Association (MOA). If you want to add new business activities later, you can amend the MOA through a special resolution and by filing the necessary forms with the Ministry of Corporate Affairs (MCA).
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="border-b border-gray-200">
            <button 
              onClick={() => toggleFAQ(2)} 
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-black font-medium">What documents are required for Private Limited Company registration?</span>
              <svg 
                className={`w-6 h-6 text-gray-400 transition-transform ${openFAQ === 2 ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 2 && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600">
                  The key documents required for registration include: Identity proofs (Passport/Voter ID/Aadhaar) and PAN cards of all directors and shareholders, address proofs, photographs, digital signatures, proof of registered office address (utility bills/rent agreement), and the proposed company name with alternatives. Our team handles the preparation of all legal documents like MOA, AOA, and incorporation forms.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="border-b border-gray-200">
            <button 
              onClick={() => toggleFAQ(3)} 
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-black font-medium">Can foreign nationals or NRIs be directors in a Private Limited Company?</span>
              <svg 
                className={`w-6 h-6 text-gray-400 transition-transform ${openFAQ === 3 ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 3 && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600">
                  Yes, foreign nationals and NRIs can be directors and shareholders in an Indian Private Limited Company. They require a passport, proof of address in their home country, and a PAN card. At least one director must be resident in India (stayed for a minimum of 182 days in the previous calendar year). Foreign directors also need to obtain a Digital Signature Certificate (DSC) and Director Identification Number (DIN).
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="border-b border-gray-200">
            <button 
              onClick={() => toggleFAQ(4)} 
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-black font-medium">Can I use my residential address as my company's registered office?</span>
              <svg 
                className={`w-6 h-6 text-gray-400 transition-transform ${openFAQ === 4 ? 'transform rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === 4 && (
              <div className="p-4 bg-gray-50">
                <p className="text-gray-600">
                  Yes, you can use your residential address as your company's registered office address, provided there are no prohibitions in your rental agreement or local zoning laws. You'll need to submit proof of this address (like a utility bill or rent agreement) during the registration process. Remember that the registered office must display the company name outside and maintain statutory registers at this location.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
