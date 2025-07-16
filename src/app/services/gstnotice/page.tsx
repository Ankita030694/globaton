'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'What happens in a GST notice?',
    a: 'A GST notice is a communication from the Indian tax authorities to your business regarding your GST compliance. It can be for various reasons, including missing or delayed filing of GST returns, discrepancies in your GST return data, errors in tax payment, excess claims of Input Tax Credit (ITC), failure to register under GST (when required), information discrepancies, anti-profiteering issues, claiming ineligible GST refunds. The Notice will specify the issue, any required action from you (like submitting documents or clarification), and a deadline for response.'
  },
  {
    q: 'How do I check my GST notice?',
    a: 'Get in touch with Vakilsearch. Our CA will help you to respond to your Notice.'
  },
  {
    q: 'How many years is a GST notice for?',
    a: "The timeframe for responding to a GST notice is typically mentioned in the Notice itself. It's crucial to respond within the stipulated timeframe to avoid penalties."
  },
  {
    q: 'How do I clear my GST notice?',
    a: "Here's how to address a GST notice:\n1. Understand the Notice: Carefully read the Notice to understand the issue and required action.\n2. Gather Supporting Documents: If the Notice requests clarification or additional information, collect relevant documents (invoices, bills, registration certificates) to support your response.\n3. Seek Professional Help (if needed): For complex notices or unsure ones you need clarification on, consult a chartered accountant or tax professional specializing in GST.\n4. Draft Your Reply: Frame a clear, concise, and professional response addressing the points raised in the Notice. Acknowledge the Notice, explain the situation, provide justifications (with documents if applicable), and propose corrective actions (if any).\n5. Submit the Response: Respond within the deadline using the online portal (preferred method) or the specified mode of submission. You might need a digital signature for online submissions."
  }
];

export default function GSTNoticePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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
          <span className="text-[#1B6B50] font-medium">GST Notice</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#1B6B50]">GST Notice Services in India</h1>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-3">What is a GST Notice?</h2>
              <p className="text-gray-600 leading-relaxed">
                A GST notice is a formal intimation issued by the Goods and Services Tax (GST) Department to a taxpayer. It can be in the form of a show cause notice, demand notice, scrutiny notice, or simply a reminder, depending on the issue observed in a taxpayer's return or conduct. These notices aim to ensure compliance, recover unpaid tax, or clarify discrepancies.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                GST Notices are official tools for tax enforcement and cannot be taken lightly. It's important to check your GST portal regularly, reconcile your filings, and respond promptly and correctly to any notice received. Engaging a tax professional or legal advisor can ensure appropriate compliance and timely responses.
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
                  <h3 className="font-medium text-gray-800">Official Communication</h3>
                  <p className="text-gray-600">Formal intimation from GST Department</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Compliance Tool</h3>
                  <p className="text-gray-600">Ensures adherence to GST regulations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
                <div>
                  <h3 className="font-medium text-gray-800">Time-Sensitive</h3>
                  <p className="text-gray-600">Requires prompt and accurate response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <ConsultationForm source="gst-notice-page" />
          </div>
        </div>

        {/* Common Reasons Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Common Reasons for Receiving a GST Notice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Mismatch in GSTR-1, GSTR-3B, and GSTR-2A/2B',
              'Delayed or non-filing of GST returns',
              'Excess Input Tax Credit (ITC) claim',
              'Underreporting or overreporting of sales',
              'Non-payment or short payment of tax',
              'Incorrect classification of goods/services',
              'Suspicion of fraudulent activities',
              'Failure to respond to previous communication',
              'Issue of fake invoices',
              'E-way bill irregularities'
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1B6B50] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center mt-1">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                  </div>
                  <span className="text-gray-700">{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of GST Notices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Types of GST Notices</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notice Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Form</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { type: 'Show Cause Notice (SCN)', form: 'DRC-01', purpose: 'Issued under Section 73/74 for tax evasion, non-payment, wrong ITC, etc.' },
                      { type: 'Scrutiny Notice', form: 'ASMT-10', purpose: 'Issued if discrepancies are found during return scrutiny' },
                      { type: 'Notice for Audit', form: 'ADT-01', purpose: 'Issued prior to conducting GST audit by the department' },
                      { type: 'Notice for Assessment', form: 'ASMT-02/06', purpose: 'Issued during provisional or best judgment assessments' },
                      { type: 'Notice for Cancellation of Registration', form: 'REG-17', purpose: 'Issued when the department suspects non-compliance or ineligibility' },
                      { type: 'Notice for Recovery', form: 'DRC-07/DRC-09', purpose: 'To recover tax dues or penalties' },
                      { type: 'Summons', form: 'GST SUMMON under Sec 70', purpose: 'To appear for investigation or provide evidence' },
                      { type: 'Notice for Annual Return/Non-filing', form: '-', purpose: 'Reminder to file GSTR-9/GSTR-9C or other returns' },
                      { type: 'Intimation of Tax as per Return', form: 'DRC-01A', purpose: 'Prior intimation before issuing a show cause notice' },
                      { type: 'Mismatches with GSTR-2A/2B', form: '-', purpose: 'Notification to clarify excess ITC claim' }
                    ].map((notice, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{notice.type}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{notice.form}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{notice.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Content and Response Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Comprehensive Overview: Format and Response Process</h2>
          
          {/* Typical Content Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-8 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Typical Content of a GST Notice</h3>
            <ul className="space-y-3">
              {[
                'Name of taxpayer',
                'GSTIN',
                'Date and type of notice',
                'Period of discrepancy',
                'Legal reference (Section 73, 74, 61, etc.)',
                'Nature of default (non-filing, wrong ITC, etc.)',
                'Timeframe for response (7–30 days)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center">
                    <FaCheck className="text-[#1B6B50]" size={12} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Response Steps Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">How to Reply to GST Notices</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Steps to Respond:</h4>
                <ol className="space-y-3">
                  {[
                    'Login to GST Portal',
                    "Navigate to 'Services' → 'User Services' → 'View Additional Notices and Orders'",
                    'Click on the relevant notice',
                    'Download and read the notice carefully',
                    'Prepare your reply (attach supporting documents if needed)',
                    'File your response using the appropriate form (e.g., DRC-03 for voluntary payment)',
                    'Submit using DSC/EVC'
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1B6B50] text-white flex items-center justify-center flex-shrink-0 mt-1">
                        {idx + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-3">Documents to Attach (if applicable):</h4>
                <ul className="space-y-2">
                  {[
                    'GST returns (GSTR-1, 3B, 9)',
                    'Reconciliation statements',
                    'Tax invoices',
                    'Bank statements',
                    'Proof of payment (if any)',
                    'Legal explanations/correspondence'
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1B6B50]/20 flex items-center justify-center">
                        <FaCheck className="text-[#1B6B50]" size={12} />
                      </div>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Response Section */}
        <div className="mb-12 bg-white rounded-xl border border-gray-200 p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#1B6B50]">Sample Response to a GST Notice (Scrutiny under ASMT-10)</h2>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-black overflow-x-auto">
            <p className="font-medium mb-2">Subject: Response to Notice ASMT-10 for Discrepancy in ITC Claim</p>
            <p className="mb-4">Respected Sir/Madam,</p>
            <p className="mb-4">In reference to the notice ASMT-10 dated [dd/mm/yyyy] for FY [year], regarding the discrepancy in ITC claimed in GSTR-3B and reflected in GSTR-2A, we submit the following:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>The discrepancy amounting to ₹[amount] arose due to [reason – e.g., supplier delayed filing, clerical error].</li>
              <li>Attached are the supporting invoices and reconciliation statements.</li>
              <li>We kindly request you to consider the explanation and close the notice.</li>
            </ul>
            <p className="mb-4">Thank you.</p>
            <p>Sincerely,</p>
            <p>[Name & Signature]</p>
            <p>[GSTIN]</p>
            <p>[Date]</p>
          </div>
        </div>

        {/* Consequences Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Consequences of Non-Response to GST Notices</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type of Notice</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Consequences of Non-Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { type: 'Show Cause Notice (DRC-01)', consequence: 'Ex parte order with tax demand and penalty' },
                      { type: 'Scrutiny Notice (ASMT-10)', consequence: 'Audit/investigation or demand notice' },
                      { type: 'REG-17 (Cancellation)', consequence: 'Suspension or cancellation of registration' },
                      { type: 'Summons', consequence: 'Penal action under Sec 122/132 (non-cooperation)' },
                      { type: 'DRC Notices (Recovery)', consequence: 'Recovery via bank account freeze, property seizure' },
                      { type: 'Audit-related Notices', consequence: 'Provisional assessment or extended audit' }
                    ].map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.type}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{item.consequence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="text-red-600 mt-4">❗ Ignoring GST notices can result in hefty penalties, interest, and legal prosecution under Section 122–132 of the CGST Act.</p>
        </div>

        {/* Penalties Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Penalties Under GST for Non-Compliance</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Offense</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Penalty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { offense: 'Failure to respond to SCN', penalty: '100% tax + penalty under Sec 74' },
                      { offense: 'Fraudulent ITC claim', penalty: '₹10,000 or 100% of tax amount (whichever is higher)' },
                      { offense: 'Not appearing on Summon', penalty: '₹25,000 + prosecution under Sec 132' },
                      { offense: 'Delay in return filing (non-response)', penalty: '₹50/day (regular) or ₹20/day (nil)' },
                      { offense: 'Non-payment of tax after notice', penalty: 'Interest @18% + recovery under DRC' }
                    ].map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.offense}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{item.penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-[#1B6B50]">FAQs on GST Notices</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left font-medium text-gray-900 p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <span className="text-[#1B6B50] flex-shrink-0 ml-2">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">{faq.a}</p>
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
