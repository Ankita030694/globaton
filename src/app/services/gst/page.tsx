'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function GSTRegistrationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 flex items-center">
          <Link href="/" className="hover:text-[#1B6B50]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-[#1B6B50]">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B6B50] font-medium">GST Registration</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-10 text-[#1B6B50]">GST Registration Services in India</h1>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Quick Registration</h3>
                  <p className="text-gray-600">GST Application Filing in Just 2 Business Days – Starting at ₹499 T&amp;C*</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Simplified Process</h3>
                  <p className="text-gray-600">Simplified process for new GST registration, application status
                  tracking, and resolving clarifications with the GST authorities.</p>
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
                  <p className="text-gray-600">Tailored GST services for businesses, eCommerce sellers, startups, and government
                  offices.</p>
                </div>
                
              </div>
            </div>
            
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="gst-registration-page" />
          </div>
        </div>

        {/* GST Filing Services Section */}
        {/* <div className="mb-12">
        <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-3 text-[#1B6B50]">GST Filing Services in India</h1>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                GST Filing refers to submitting details of outward and inward supplies, tax collected and paid, and claiming input tax credit (ITC) to the government through the GST Portal. Registered taxpayers must file returns regularly in prescribed forms.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Legal Compliance</h3>
                  <p className="text-gray-600">Mandatory under GST laws; non-filing attracts penalties</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Input Tax Credit (ITC)</h3>
                  <p className="text-gray-600">Claim ITC for taxes paid on purchases</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B6B50]/10 flex items-center justify-center text-[#1B6B50]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Avoids Penalties & Interest</h3>
                  <p className="text-gray-600">Filing on time helps avoid late fees and interest</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* What is GST Registration Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">What is GST Registration?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. 
            Introduced on 1st July 2017, it replaced multiple indirect taxes like VAT, service tax, excise duty, etc. 
            GST Registration is mandatory for businesses above the prescribed turnover or engaged in certain operations like 
            inter-state trade or e-commerce. It provides a legal identity, enables input credit, and fosters credibility.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
            <div className="mt-1">
              <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
              <div>
                <h3 className="font-medium text-gray-800">Legal Recognition</h3>
                <p className="text-gray-600">Official business identity under GST law</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
            <div className="mt-1">
              <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
              <div>
                <h3 className="font-medium text-gray-800">Input Tax Credit</h3>
                <p className="text-gray-600">Claim tax credits on business purchases</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
            <div className="mt-1">
              <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
              <div>
                <h3 className="font-medium text-gray-800">Business Expansion</h3>
                <p className="text-gray-600">Enable inter-state trade and e-commerce operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Service Charges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Our Service Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Consultation */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Consultation</h3>
              <div className="text-3xl font-bold text-[#1B6B50] mb-2">₹1,999/-</div>
              <p className="text-gray-600">onwards</p>
            </div>

            {/* Registration */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">GST Registration</h3>
              <div className="text-3xl font-bold text-[#1B6B50] mb-2">₹500/-</div>
              <p className="text-gray-600">onwards</p>
            </div>

            {/* Monthly Returns */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Monthly Filings</h3>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium text-black">NIL Return</div>
                  <div className="text-[#1B6B50] font-bold">₹500/- per month</div>
                </li>
                <li>
                  <div className="font-medium text-black">Turnover up to ₹2cr</div>
                  <div className="text-[#1B6B50] font-bold">₹3,999/- per month</div>
                </li>
                <li>
                  <div className="font-medium text-black">Turnover above ₹2cr</div>
                  <div className="text-[#1B6B50] font-bold">₹7,999/- per month</div>
                </li>
              </ul>
            </div>

            {/* GST-4 Filing */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">GST-4 Filing</h3>
              <div className="text-3xl font-bold text-[#1B6B50] mb-2">₹2,499/-</div>
              <p className="text-gray-600">per filing</p>
            </div>
          </div>
        </div>

        {/* Governing Law Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Governing Law</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'CGST Act', desc: 'Central Goods and Services Tax Act' },
              { title: 'SGST Act', desc: 'State Goods and Services Tax Act' },
              { title: 'IGST Act', desc: 'Integrated Goods and Services Tax Act' },
              { title: 'UTGST Act', desc: 'Union Territory Goods and Services Tax Act' }
            ].map((law, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">{law.title}</h3>
                <p className="text-gray-600">{law.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Apply Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Who Should Apply for GST Registration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Businesses with turnover exceeding threshold limits',
              'Inter-state suppliers of goods or services',
              'E-commerce operators and sellers on platforms like Amazon, Flipkart',
              'Casual taxable persons or non-resident taxable persons',
              'Agents of a supplier',
              'Input service distributors (ISD)',
              'Businesses liable under reverse charge',
              'Persons required to deduct TDS/TCS under GST',
              'Voluntary registration is also allowed for businesses below the threshold'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GST Threshold Limits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">GST Threshold Limits (FY 2024–25)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type of Supply</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">State Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Threshold Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Goods</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Normal states</td>
                  <td className="px-4 py-3 text-sm text-gray-900">₹40 lakhs annual aggregate turnover</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Goods</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Special category states*</td>
                  <td className="px-4 py-3 text-sm text-gray-900">₹20 lakhs annual turnover</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Services</td>
                  <td className="px-4 py-3 text-sm text-gray-900">All states/UTs</td>
                  <td className="px-4 py-3 text-sm text-gray-900">₹20 lakhs (₹10 lakhs for special category states)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">*Special category states: Manipur, Mizoram, Nagaland, Tripura</p>
        </div>

        {/* Benefits of GST Registration */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Benefits of GST Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Legal recognition of the business',
              'Proper accounting of taxes paid on input goods/services',
              'Eligibility for Input Tax Credit (ITC)',
              'Expansion of business via online platforms or inter-state trade',
              'Enhances credibility and trust with clients and vendors',
              'Required for participation in tenders and government contracts',
              'Avoidance of penalties and legal issues'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Types of GST Registration */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Types of GST Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { type: 'Regular Taxpayer', desc: 'For normal businesses operating within the threshold' },
              { type: 'Composition Scheme', desc: 'For small taxpayers with turnover up to ₹1.5 crore (lower compliance, fixed tax rate)' },
              { type: 'Casual Taxable Person', desc: 'Occasional business in a taxable territory' },
              { type: 'Non-resident Taxable Person', desc: 'For foreign businesses operating temporarily in India' },
              { type: 'E-commerce Operator', desc: 'Online platforms collecting tax at source (TCS)' },
              { type: 'Input Service Distributor (ISD)', desc: 'Distributes input tax credit to units' }
            ].map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">{type.type}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Documents Required for GST Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Individual/Sole Proprietor */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4">For Individuals / Sole Proprietors</h3>
              <ul className="space-y-2">
                {[
                  'PAN Card of the applicant',
                  'Aadhaar Card',
                  'Photograph (JPEG format)',
                  'Bank account details',
                  'Address proof'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnership Firm / LLP */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4">For Partnership Firm / LLP</h3>
              <ul className="space-y-2">
                {[
                  'PAN Card of the firm',
                  'Partnership deed / LLP agreement',
                  'PAN & Aadhaar of partners',
                  'Photos of partners',
                  'Authorization letter',
                  'Proof of business address'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private/Public Companies */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4">For Private Limited / Public Companies</h3>
              <ul className="space-y-2">
                {[
                  'PAN Card of company',
                  'Certificate of Incorporation',
                  'MOA and AOA',
                  'PAN & Aadhaar of Directors',
                  'Board resolution',
                  'Business address proof',
                  'Bank details'
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

        {/* Step-by-Step Registration Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Step-by-Step GST Registration Process</h2>
          <div className="space-y-4">
            {[
              { step: 'Visit GST Portal', desc: 'Go to www.gst.gov.in' },
              { step: 'Click on Register Now', desc: 'Under Taxpayer tab' },
              { step: 'Fill Part-A of Form GST REG-01', desc: 'Enter PAN, Mobile Number, Email ID, and State' },
              { step: 'OTP Verification', desc: 'Enter OTPs sent to email and mobile' },
              { step: 'Receive TRN', desc: 'Temporary Reference Number will be generated' },
              { step: 'Fill Part-B of Form GST REG-01', desc: 'Upload documents and provide business details' },
              { step: 'Verification by GST Officer', desc: 'Additional documents may be requested via GST REG-03' },
              { step: 'GST Registration Approval', desc: 'Receive GSTIN via email and SMS' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1B6B50] rounded-full flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{step.step}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GSTIN Section */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">GSTIN and Its Significance</h2>
          <p className="text-gray-600 mb-6">
            GSTIN (Goods and Services Tax Identification Number) is a 15-digit unique number assigned to each registered taxpayer.
          </p>
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Format: 22ABCDE1234F1Z5</h3>
            <ul className="space-y-2">
              {[
                'First 2 digits: State code',
                'Next 10 digits: PAN',
                '13th digit: Entity code',
                '14th digit: Blank/default',
                '15th digit: Checksum digit'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Significance:</h3>
            <ul className="space-y-2">
              {[
                'Unique identity for GST compliance',
                'Required for tax invoices, returns, and ITC',
                'Mandatory for inter-state and B2B transactions'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fees and Penalties */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Fees and Penalties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fees Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Registration Fees</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                  <span className="text-gray-700">Government Fee: ₹0 (Free on portal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                  <span className="text-gray-700">Professional Fees: ₹500 – ₹5,000</span>
                </li>
              </ul>
            </div>

            {/* Penalties Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Penalties for Non-Compliance</h3>
              <ul className="space-y-3">
                {[
                  { violation: 'Failure to register', penalty: '₹10,000 or tax evaded (higher)' },
                  { violation: 'Late return filing', penalty: '₹50/day (₹20/day for nil returns)' },
                  { violation: 'Wrong composition scheme use', penalty: '100% of tax due or ₹10,000' },
                  { violation: 'Fraudulent registration', penalty: 'Up to ₹25,000 + GSTIN cancellation' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                    <span className="text-gray-700">
                      <strong>{item.violation}:</strong> {item.penalty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#1B6B50]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is GST registration mandatory?",
                a: "GST registration is mandatory for businesses with an annual turnover exceeding ₹40 lakh (₹20 lakh for services) in most states or ₹10 lakh in special category states. It is also required for entities involved in interstate trade or supply."
              },
              {
                q: "What is the GST registration number?",
                a: "The GST registration number is a 15-character alphanumeric code assigned to businesses under the GST system."
              },
              {
                q: "What is the threshold limit for GST registration?",
                a: "The threshold limit for GST registration varies by sector: ₹40 lakhs for manufacturing, ₹20 lakhs for services, and ₹10 lakhs for special category states."
              },
              {
                q: "How much time does GST registration take?",
                a: "GST registration typically takes 2-6 working days, provided all required documents are in order."
              },
              {
                q: "What happens if the GST registration application gets rejected?",
                a: "If rejected, you can revise the application and resubmit it with the correct details or documents."
              },
              {
                q: "What is CGST?",
                a: "CGST (Central Goods and Services Tax) is collected by the central government on intra-state transactions."
              },
              {
                q: "What is SGST?",
                a: "SGST (State Goods and Services Tax) is collected by the state government on intra-state transactions."
              },
              {
                q: "What is IGST?",
                a: "IGST (Integrated Goods and Services Tax) is levied by the central government on inter-state transactions."
              },
              {
                q: "Is a trade license mandatory for GST registration?",
                a: "A trade license is not mandatory for GST registration, but it may be required depending on the business type or location."
              },
              {
                q: "What is the new rule for GST?",
                a: "A new advisory by GSTN has alerted taxpayers about changes in E-Way Bill generation time limits, which have now been reduced to 180 days from the date of the base document."
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
