'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function GSTFilingPage() {
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
          <span className="text-[#1B6B50] font-medium">GST Filing</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-3 text-[#1B6B50]">GST Filing Services in India</h1>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-3">What is GST Filing?</h2>
              <p className="text-gray-600 leading-relaxed">
                Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. 
                Introduced on 1st July 2017, it replaced multiple indirect taxes like VAT, service tax, excise duty, etc. 
                GST Filing is mandatory for businesses above the prescribed turnover or engaged in certain operations like 
                inter-state trade or e-commerce. It provides a legal identity, enables input credit, and fosters credibility.
              </p>
            </div>

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

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="gst-filing-page" />
          </div>
        </div>

        {/* Types of GST Returns */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Types of GST Returns</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  {['Return Form','Purpose','Applicability','Frequency','Due Date'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { form: 'GSTR-1', purpose: 'Details of outward supplies (sales)', apply: 'All regular taxpayers', freq: 'Monthly/Quarterly', due: '11th of next month (monthly) or 13th of next month (QRMP)' },
                  { form: 'GSTR-3B', purpose: 'Summary of outward and inward supplies + tax liability', apply: 'All regular taxpayers', freq: 'Monthly', due: '20th of next month (monthly); 22nd/24th (QRMP)' },
                  { form: 'GSTR-4', purpose: 'Return for Composition Scheme', apply: 'Composition taxpayers', freq: 'Annual', due: '30th April of next FY' },
                  { form: 'GSTR-5', purpose: 'Return for Non-resident taxable persons', apply: 'Non-resident', freq: 'Monthly', due: '20th of next month' },
                  { form: 'GSTR-6', purpose: 'Input Service Distributor (ISD) return', apply: 'ISDs', freq: 'Monthly', due: '13th of next month' },
                  { form: 'GSTR-7', purpose: 'TDS return', apply: 'Persons deducting TDS', freq: 'Monthly', due: '10th of next month' },
                  { form: 'GSTR-8', purpose: 'TCS return', apply: 'E-commerce operators', freq: 'Monthly', due: '10th of next month' },
                  { form: 'GSTR-9', purpose: 'Annual return', apply: 'All regular taxpayers', freq: 'Annually', due: '31st December of next FY' },
                  { form: 'GSTR-9C', purpose: 'Reconciliation statement & audit', apply: 'Taxpayers with turnover > ₹5 Cr', freq: 'Annually', due: '31st December of next FY' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.form}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.purpose}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.apply}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.freq}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* GST Filing Deadlines */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">GST Filing Deadlines (Regular Taxpayers)</h2>
          <div className="space-y-4 text-gray-600">
            <p>GSTR-1 (Monthly): 11th of next month</p>
            <p>GSTR-3B (Monthly): 20th of next month</p>
            <p>GSTR-9 (Annual): 31st December of next FY</p>
            <p>GSTR-9C (Annual, if applicable): 31st December of next FY</p>
            <div>
              <span className="block mb-2 font-medium">QRMP scheme:</span>
              <ul className="list-disc list-inside space-y-1">
                <li>GSTR-1: 13th of month following quarter</li>
                <li>GSTR-3B: 22nd or 24th depending on the state</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Step-by-Step GST Filing Process</h2>
          <div className="space-y-4">
            {[
              'Login to GST Portal: Visit www.gst.gov.in and log in using credentials',
              'Select the Relevant Return: Click on Returns Dashboard and choose the relevant financial year and month',
              'Enter Details: Fill outward supply (sales), inward supply (purchases), tax liability, and ITC claimed',
              'Upload Invoices (if required): Upload B2B invoices, credit/debit notes, amendments',
              'Preview Return: Check for accuracy and reconcile with books',
              'Pay Tax (if applicable): Use cash ledger or credit ledger to pay any outstanding tax liability',
              'Submit & File with DSC/EVC: Submit the return and validate with Digital Signature Certificate (DSC) or Electronic Verification Code (EVC)',
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1B6B50] rounded-full flex items-center justify-center text-white font-bold">{idx+1}</div>
                <p className="text-gray-700 mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Documents Required for GST Filing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Sales Invoices', desc: 'B2B, B2C, export invoices' },
              { title: 'Purchase Invoices', desc: 'For ITC claim' },
              { title: 'Credit/Debit Notes', desc: 'Adjustments made post invoicing' },
              { title: 'GSTR-2B / 2A Statement', desc: 'Auto-drafted purchase data' },
              { title: 'Bank Statement', desc: 'For reconciliation (optional)' },
              { title: 'E-Way Bills', desc: 'Movement of goods (if applicable)' },
              { title: 'Payment Challans', desc: 'Tax payment details' },
              { title: 'Input Tax Credit Summary', desc: 'ITC claim calculations' }
            ].map((doc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Penalties Information */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Penalties for Late Filing</h2>
          <ul className="space-y-4">
            {[
              'Late Filing – GSTR-3B or GSTR-1: ₹50/day (₹20/day for nil returns) – max ₹5,000 per return',
              'Late Filing – GSTR-9/9C: ₹200/day (₹100 CGST + ₹100 SGST) – max 0.25% of turnover',
              'Interest on Late Tax Payment: 18% per annum on tax due',
              'Wrong ITC Claim: Penalty of 100% of tax + interest',
              'Non-filing for 2 months: E-Way Bill generation gets blocked'
            ].map((penalty, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{penalty}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips Section */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Key Tips for Error-Free GST Filing</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Reconcile books with GSTR-2B every month',
              'File nil returns even if there is no business activity',
              'Avoid ITC claims beyond allowed period (e.g., 30th Nov of next FY)',
              'Keep digital records of all invoices',
              'Use GST-compliant invoicing software',
            ].map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                  <FaCheck className="text-[#1B6B50]" size={12} />
                </div>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#1B6B50]">FAQs on GST Filing</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the composition scheme in GST?', a: 'The composition scheme allows small businesses with turnover up to ₹1.5 crores (₹75 lakhs for specific states) to pay a fixed percentage of turnover as tax instead of regular GST rates.' },
              { q: 'How many returns are there under GST?', a: 'There are 22 types of GST returns, but only a few apply to most taxpayers, such as GSTR-1, GSTR-3B, GSTR-9, and GSTR-4 (for composition taxpayers).' },
              { q: 'What are the consequences of missing GST filing deadlines?', a: 'Late filing attracts a penalty of ₹50 per day (₹20 for NIL returns) and 18% annual interest on unpaid tax. Continuous non-filing may lead to GST registration cancellation.' },
              { q: 'How much does it cost to file GST returns?', a: 'Costs vary based on the filing method: self-filing is free; online platforms charge ₹250 – ₹2,000 per month; professional CA consultation is ₹500 – ₹5,000 per return.' },
              { q: 'What is the process for filing GST returns on the GST portal?', a: 'Log in to www.gst.gov.in, select return type, upload invoices and tax details, preview, validate, submit the return, and pay the required GST.' },
              { q: 'Can GST returns be revised after submission?', a: 'No, GST returns cannot be revised. Corrections must be made in the next filing by adjusting errors in subsequent returns.' },
              { q: 'How does the QRMP scheme simplify GST filing?', a: 'The QRMP scheme allows taxpayers with turnover up to ₹5 crores to file GSTR-1 and GSTR-3B quarterly while making monthly tax payments, reducing compliance burden.' },
              { q: 'Who can opt for the quarterly return monthly payment (QRMP) scheme?', a: 'Businesses with an annual turnover of up to ₹5 crores can opt for QRMP to file returns quarterly instead of monthly while paying tax monthly.' },
              { q: 'Can I file GST myself without a CA?', a: 'Yes, you can file GST returns yourself using the GST portal or GST software, but professional help is recommended for complex filings, ITC claims, and annual returns.' },
              { q: 'How to apply for GST refunds?', a: 'You can apply directly on the GST portal or choose Vakilsearch for expert-assisted GST filing.' }
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

        {/* Rest of the content sections... */}
      </main>
      <Footer />
    </div>
  );
}
