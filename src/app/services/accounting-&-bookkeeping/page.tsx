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

export default function AccountingBookkeepingPage() {
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
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');
  const [plans] = useState([
    {
      id: "basic",
      title: "Basic",
      price: 7999,
      originalPrice: 9999,
      description: "Essential accounting services for small businesses",
      features: [
        "Accounting & Bookkeeping for One Financial Year (Turnover up to ₹10 lakhs)",
        "Financial Statement Preparation for One FY",
        "Auditing of Financial Records for One FY",
        "ITR Filing for the Company for One FY",
        "2 Free Consultations with CA for One FY"
      ],
      buttonText: "Get Started",
      disclaimer: "+ Gov. Fees"
    },
    {
      id: "premium",
      title: "Premium",
      price: 12999,
      originalPrice: 15999,
      description: "Complete accounting solution with comprehensive services",
      features: [
        "Accounting & Bookkeeping for One Financial Year (Turnover up to ₹10 lakhs)",
        "Financial Statement Preparation for One FY",
        "Auditing of Financial Records for One FY",
        "ITR Filing for the Company for One FY",
        "2 Free Consultations with CA for One FY",
        "Dedicated Accounts Manager",
        "ITR Filing for 2 Directors for One FY"
      ],
      buttonText: "Go Premium",
      disclaimer: "+ Gov. Fees"
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
        source: "accounting-bookkeeping-page",
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
          <Link href="/services" className="text-gray-600 hover:text-[#1B6B50]">Services</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">Accounting & Bookkeeping</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-10 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1B6B50] mb-6 lg:mb-8">
            Accounting & Bookkeeping Services
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
                <h3 className="font-medium text-gray-900">Comprehensive Financial Management:</h3>
                <p className="text-gray-600">Complete accounting and bookkeeping services starting at ₹4,999 with transparent pricing.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Regulatory Compliance:</h3>
                <p className="text-gray-600">GST, TDS, Income Tax filings, and all statutory compliance handled seamlessly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Expert CA Team:</h3>
                <p className="text-gray-600">CA-led team with 10+ years of experience in finance and compliance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Modern Technology:</h3>
                <p className="text-gray-600">Cloud-based systems with Tally, QuickBooks, Zoho integration for real-time access.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
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
          <ConsultationForm source="accounting-bookkeeping-page" />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full mx-auto px-4 sm:px-20 py-8 lg:py-16 bg-white">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C4942D]">Choose Your</span> <span className="text-black">Package</span> 
          </h2>
          <p className="text-gray-600">Select the perfect plan for your accounting and bookkeeping needs</p>
        </div>

        {plansLoading ? (
          <div className="flex justify-center items-center py-12 lg:py-20">
            <div className="animate-spin rounded-full h-12 lg:h-16 w-12 lg:w-16 border-t-2 border-b-2 border-[#165D3F]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[100%] mx-auto scale-100 transform-origin-center">
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
                    {plan.id === 'premium' && (
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
        <p className="text-black text-center mt-20">*Note: Services are subject to terms and conditions. <a href="/termsandcondition" className="text-[#C4942D]">Terms and Conditions</a> apply.</p>
      </div>

      {/* Not sure about packages banner */}
      <div className="w-full bg-[#1B6B50]/5 py-8 px-6 rounded-xl mb-12 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1B6B50] mb-4 md:mb-0">Not sure about packages?</h2>
        <Link 
          href="/form?service=accounting-expert" 
          className="bg-[#1B6B50] text-white px-6 py-3 rounded-xl hover:bg-[#165D3F] transition-colors duration-300 font-medium"
        >
          Talk to accounting expert
        </Link>
      </div>

      {/* Overview Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
          <span className="text-black">Overview of</span> <span className="text-[#C4942D]">Accounting & Bookkeeping</span>
        </h2>

        <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
          Accounting and bookkeeping are essential functions in managing a business's financial health and ensuring regulatory compliance.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bookkeeping</h3>
                  <p className="text-gray-600">
                    The process of recording daily financial transactions, including purchases, sales, receipts, and payments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Accounting</h3>
                  <p className="text-gray-600">
                    Involves interpreting, classifying, analyzing, reporting, and summarizing financial data.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-900 font-medium">
                In short, bookkeeping is the foundation, and accounting is the framework built upon it.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why It Matters for Every Business
            </h3>
            <p className="text-gray-700 mb-6">
              Regardless of size or industry, all businesses—startups, SMEs, or corporates—require accurate accounting systems to:
            </p>
            <ul className="space-y-3">
              {[
                "Track financial performance",
                "Ensure tax compliance", 
                "Make strategic decisions",
                "Raise capital or secure loans",
                "Prevent fraud or mismanagement"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16 bg-gray-50">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C4942D]">Benefits of</span> <span className="text-black">Proper Accounting & Bookkeeping</span>
          </h2>
          <p className="text-gray-600">Comprehensive financial management that drives business success</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Accurate Financial Records", description: "Keeps track of income, expenses, and cash flow" },
            { title: "Regulatory Compliance", description: "Ensures timely GST, TDS, Income Tax filings" },
            { title: "Better Financial Planning", description: "Informed decisions based on financial insights" },
            { title: "Budgeting & Forecasting", description: "Compare actuals with planned budgets" },
            { title: "Audit Preparedness", description: "Maintains clean records for internal/external audits" },
            { title: "Investor/Lender Confidence", description: "Transparent financials help raise funds" },
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#1B6B50] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Checklist */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16 bg-white">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C4942D]">Compliance</span> <span className="text-black">Checklist</span>
          </h2>
          <p className="text-gray-600">Stay compliant with all regulatory requirements</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Task</th>
                <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">Frequency</th>
                <th className="border border-gray-200 px-6 py-4 text-left font-semibold text-black">Compliance Law</th>
              </tr>
            </thead>
            <tbody>
              {[
                { task: "Maintain proper books of accounts", frequency: "Ongoing", law: "Companies Act, Income Tax Act" },
                { task: "GST return filings (GSTR-1, 3B)", frequency: "Monthly/Quarterly", law: "CGST/SGST Act" },
                { task: "TDS deduction and deposit", frequency: "Monthly", law: "Income Tax Act" },
                { task: "TDS return filing (Form 26Q/24Q)", frequency: "Quarterly", law: "Income Tax Act" },
                { task: "Advance Tax payment", frequency: "Quarterly", law: "Income Tax Act" },
                { task: "Income Tax Return (ITR) Filing", frequency: "Annually", law: "Income Tax Act" },
                { task: "ROC filings (MCA compliance)", frequency: "Annually", law: "Companies Act" },
                { task: "Audit (if applicable)", frequency: "Annually", law: "Companies Act, Income Tax Act" }
              ].map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-6 py-4 text-black">{item.task}</td>
                  <td className="border border-gray-200 px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {item.frequency}
                    </span>
                  </td>
                  <td className="border border-gray-200 px-6 py-4 text-sm text-black">{item.law}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Service Scope */}
      <section className="w-full mx-auto px-4 sm:px-12 py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl shadow-lg my-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight">
            <span className="text-[#C4942D] drop-shadow">Scope of</span> <span className="text-black">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive financial services tailored to your business needs
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              label: "Recording day-to-day financial transactions",
              icon: (
                <svg className="w-8 h-8 text-[#1B6B50]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" fill="#E6F4EF" />
                  <path d="M8 2v4M16 2v4M3 10h18" stroke="#1B6B50" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Maintaining ledgers, journals, cash book",
              icon: (
                <svg className="w-8 h-8 text-[#C4942D]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="5" y="3" width="14" height="18" rx="2" fill="#FFF7E6" />
                  <path d="M9 7h6M9 11h6M9 15h4" stroke="#C4942D" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Preparation of trial balance, balance sheet, and P&L",
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#E6F0FA" />
                  <path d="M8 16v-4M12 16v-8M16 16v-2" stroke="#3B82F6" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Bank reconciliations",
              icon: (
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#E6F9F0" />
                  <path d="M8 12l2 2 4-4" stroke="#22C55E" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Tax calculation and filing (GST, TDS, Income Tax)",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="12" rx="2" fill="#FDEDED" />
                  <path d="M8 10h8M8 14h5" stroke="#F87171" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Payroll accounting",
              icon: (
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="5" y="5" width="14" height="14" rx="2" fill="#F3E8FF" />
                  <path d="M12 8v4l3 3" stroke="#A78BFA" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Financial analysis and MIS reporting",
              icon: (
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="10" rx="2" fill="#FDF2F8" />
                  <path d="M7 13l3-3 4 4 3-3" stroke="#EC4899" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Budgeting and forecasting",
              icon: (
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#FEF9C3" />
                  <path d="M8 16l4-8 4 8" stroke="#FACC15" strokeWidth={2} />
                </svg>
              ),
            },
            {
              label: "Statutory audit support",
              icon: (
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#DBEAFE" />
                  <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth={2} />
                </svg>
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <span className="text-gray-800 text-base font-medium text-center">{service.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16 bg-white">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#C4942D]">Why Choose</span> <span className="text-black">Globaton?</span>
          </h2>
          <p className="text-gray-600">
            Globaton Management Advisors is your reliable finance partner for scalable and compliant financial operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "10+ Years of Experience", description: "Proven track record in finance & compliance" },
            { title: "End-to-End Services", description: "From bookkeeping to CFO-level reporting" },
            { title: "Customized Solutions", description: "Tailored for startups, SMEs, and corporates" },
            { title: "Expert Team", description: "CA-led team with deep industry knowledge" },
            { title: "Data Security", description: "Secure cloud-based systems" },
            { title: "Timely Compliance", description: "Avoid penalties with scheduled filings" },
            { title: "Modern Tools", description: "Use of Tally, Zoho, QuickBooks, ERP systems" },
            { title: "Real-Time Support", description: "Regular updates, MIS reports, and on-call advisors" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#1B6B50] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <Testimonials />

      {/* FAQs Section */}
      <div className="w-full mx-auto px-4 sm:px-50 py-8 lg:py-16">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
          <span className="text-[#C4942D]">FAQs</span> <span className="text-black">on Accounting & Bookkeeping</span>
        </h2>

        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
            Professional accounting and bookkeeping services are essential for business success. We've answered the most common questions to help you understand our services better.
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border-b border-gray-200">
            <button 
              onClick={() => toggleFAQ(0)} 
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-black font-medium">What's the difference between bookkeeping and accounting?</span>
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
                  Bookkeeping is the process of recording daily financial transactions, while accounting involves interpreting, analyzing, and reporting that financial data. Bookkeeping is the foundation, and accounting builds upon it to provide insights for decision-making.
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
              <span className="text-black font-medium">How often should I update my books?</span>
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
                  We recommend updating your books at least monthly for most businesses. However, for businesses with high transaction volumes, weekly or even daily updates may be necessary to maintain accurate financial records and ensure timely compliance.
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
              <span className="text-black font-medium">What documents do I need to provide for accounting services?</span>
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
                  You'll need to provide bank statements, invoices, receipts, expense records, payroll information, and any other financial documents related to your business transactions. We'll provide you with a comprehensive checklist based on your specific needs.
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
              <span className="text-black font-medium">Do you handle GST and tax filings?</span>
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
                  Yes, we handle all GST returns (GSTR-1, GSTR-3B), TDS calculations and filings, and income tax returns. Our comprehensive packages include all necessary tax compliance services to keep your business compliant with regulatory requirements.
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
              <span className="text-black font-medium">Can I access my financial data online?</span>
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
                  Absolutely! We use cloud-based accounting software that allows you to access your financial data anytime, anywhere. You'll have real-time access to your books, reports, and financial statements through secure online portals.
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
