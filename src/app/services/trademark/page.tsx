'use client'
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";
import ConsultationForm from "@/components/ConsultationForm";
import Testimonials from "@/components/Testimonials";

export default function TrademarkRegistrationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-4 md:py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 flex items-center flex-wrap">
          <Link href="/" className="hover:text-[#1B6B50]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-[#1B6B50]">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B6B50] font-medium">Trademark Registration</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-[#1B6B50]">Trademark Registration in India</h1>

            {/* Definition */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">What is a Trademark?</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                A Trademark is a recognizable sign, design, word, phrase, symbol, logo, or a combination used to distinguish goods or services of one enterprise from those of others.
              </p>
              <h3 className="text-base md:text-lg font-medium mb-1 text-gray-700">Definition under the Trademark Act, 1999:</h3>
              <blockquote className="pl-3 md:pl-4 border-l-4 border-[#1B6B50] italic text-sm md:text-base text-gray-700">
                "A trademark means a mark capable of being represented graphically and capable of distinguishing the goods or services of one person from those of others and may include the shape of goods, their packaging, and combination of colors."
              </blockquote>
              <p className="text-sm md:text-base text-gray-600 mt-4">
                A Trademark is more than just a name or logo—it's the identity of your business. Registering it ensures exclusive use, builds trust, and adds brand value.
              </p>
            </section>

            {/* Importance Section */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#1B6B50]">Why Register a Trademark?</h2>
              <div className="space-y-3 md:space-y-4">
                {[
                  { title: 'Exclusive Rights', desc: 'Legal ownership and exclusive use of the brand' },
                  { title: 'Brand Recognition', desc: 'Builds identity and goodwill among consumers' },
                  { title: 'Legal Protection', desc: 'Legal remedy against infringement and misuse' },
                  { title: 'Intangible Asset', desc: 'Adds value to your business and can be licensed or sold' },
                  { title: 'Global Recognition', desc: 'Basis for international trademark applications' },
                  { title: 'Deters Counterfeiting', desc: 'Helps prevent copying of your product or service' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3">
                    <div className="mt-1">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C4942D]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-medium text-gray-800">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Types of Trademarks */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#1B6B50]">Types of Trademarks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { type: 'Product Marks', desc: 'For goods/products (e.g., Nike® for shoes)' },
                  { type: 'Service Marks', desc: 'For services (e.g., Airbnb® for lodging)' },
                  { type: 'Collective Marks', desc: 'Used by members of a group/association (e.g., CA®)' },
                  { type: 'Certification Marks', desc: 'Certify product quality or origin (e.g., ISI®, FSSAI)' },
                  { type: 'Shape Marks', desc: 'Unique shape of goods or packaging (e.g., Coca-Cola bottle)' },
                  { type: 'Sound Marks', desc: 'Identifiable sound associated with brand (e.g., Nokia tune)' },
                  { type: 'Color Marks', desc: 'Specific color combination (e.g., Cadbury® purple)' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 md:p-6 rounded-xl border border-gray-200">
                    <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2">{item.type}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Symbols */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#1B6B50]">Trademark Symbols</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { sym: '™', meaning: 'Trademark (not registered)', use: 'Used during application or for unregistered marks' },
                  { sym: '®', meaning: 'Registered trademark', use: 'Used only after registration is granted' },
                  { sym: '℠', meaning: 'Service mark (mainly US)', use: 'For service-based marks (unregistered)' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-3 md:p-4 rounded-xl border border-gray-200">
                    <span className="text-xl md:text-2xl font-bold">{item.sym}</span>
                    <h4 className="text-sm md:text-base font-medium text-gray-800 mt-2">{item.meaning}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{item.use}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison */}
            <section className="mb-8 md:mb-12 overflow-x-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#1B6B50]">Trademark vs Copyright vs Patent</h2>
              <div className="min-w-[600px]">
                <table className="w-full bg-white border border-gray-200 mb-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-3 md:px-4 text-left text-sm md:text-base text-[#1B6B50]">Basis</th>
                      <th className="py-2 px-3 md:px-4 text-left text-sm md:text-base text-[#1B6B50]">Trademark</th>
                      <th className="py-2 px-3 md:px-4 text-left text-sm md:text-base text-[#1B6B50]">Copyright</th>
                      <th className="py-2 px-3 md:px-4 text-left text-sm md:text-base text-[#1B6B50]">Patent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { basis: 'Protects', a: 'Brand name, logo, slogan', b: 'Literary, artistic, musical works', c: 'New inventions, processes' },
                      { basis: 'Validity', a: '10 years (renewable)', b: "Author's lifetime + 60 years", c: '20 years' },
                      { basis: 'Law', a: 'Trademark Act, 1999', b: 'Copyright Act, 1957', c: 'Patents Act, 1970' },
                      { basis: 'Example', a: 'Apple® logo', b: 'A movie script', c: 'A new drug formula' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="py-2 px-3 md:px-4 text-sm md:text-base text-black">{row.basis}</td>
                        <td className="py-2 px-3 md:px-4 text-sm md:text-base text-black">{row.a}</td>
                        <td className="py-2 px-4 text-sm md:text-base text-black">{row.b}</td>
                        <td className="py-2 px-4 text-sm md:text-base text-black">{row.c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Classes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Trademark Classes</h2>
              <p className="text-gray-600 mb-4">There are 45 classes under the Nice Classification:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Class 1–34: Goods</li>
                <li>Class 35–45: Services</li>
              </ul>
              <p className="text-gray-600">Choosing the correct class is crucial for proper protection. Common examples:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Class 9: Electronics and software</li>
                <li>Class 25: Clothing</li>
                <li>Class 35: Advertising and business services</li>
                <li>Class 41: Education and entertainment</li>
              </ul>
            </section>

            {/* Fees */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Registration Fees (2024)</h2>
              <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-3 text-[#1B6B50]">Government Fees</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#1B6B50] flex-shrink-0" size={12} />
                      <span className="text-gray-700">Application Fees: ₹4,500/- onwards (may vary as per Government norms)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-3 text-[#1B6B50]">Professional Fees</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#1B6B50] flex-shrink-0" size={12} />
                      <span className="text-gray-700">Base Professional Fee: ₹5,000/-</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#1B6B50] flex-shrink-0" size={12} />
                      <span className="text-gray-700">Follow-up Support: Included for 6 months</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#1B6B50]">Additional Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#1B6B50] flex-shrink-0" size={12} />
                      <span className="text-gray-700">Objection Reply and Court Case Filing: ₹8,000/- onwards</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600 italic">Note: All fees are subject to applicable taxes and may vary based on case complexity and requirements.</p>
                </div>
              </div>
            </section>

            {/* Documents Required */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Documents Required</h2>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 text-[#1B6B50]">Basic Documents</h3>
                <ul className="space-y-3">
                  {[
                    "Applicant's ID & Address Proof (PAN, Aadhaar, Passport, DL)",
                    'Logo/Wordmark (if any)',
                    'Proof of Business (for firms)',
                    'Power of Attorney (Form TM-48)',
                    'Signed TM Application Form (Form TM-A)',
                    'User Affidavit (if already in use)',
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheck className="text-[#1B6B50]" size={12} />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Registration Process */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#1B6B50]">How to Register a Trademark</h2>
              <div className="space-y-3 md:space-y-4">
                {[
                  { step: 'Trademark Search', desc: 'Conduct a search using the IP India Public Search Tool' },
                  { step: 'Prepare Application', desc: 'Choose the correct class and fill Form TM-A' },
                  { step: 'File Application', desc: 'File online via ipindiaonline.gov.in' },
                  { step: 'Trademark Allotment', desc: 'Receive application number and start using ™ symbol' },
                  { step: 'Vienna Codification', desc: 'Internal classification for logo/symbol-based marks' },
                  { step: 'Examination Report', desc: 'Registry examines your application' },
                  { step: 'Reply to Report', desc: 'Reply within 30 days or attend hearing' },
                  { step: 'Advertisement', desc: 'Publication in Trademark Journal for 4 months' },
                  { step: 'Registration Certificate', desc: 'If no opposition, trademark is registered with ® symbol' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#1B6B50] rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">{idx+1}</div>
                    <div>
                      <h3 className="text-sm md:text-base font-medium text-gray-900">{item.step}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-[#1B6B50]">Benefits of Trademark Registration</h2>
              <div className="space-y-4">
                {[
                  { title: 'Legal Protection', desc: 'Right to sue for infringement' },
                  { title: 'Exclusive Rights', desc: 'Over the registered brand' },
                  { title: 'Intangible Asset', desc: 'Assignable, licensable asset' },
                  { title: 'Customer Loyalty', desc: 'Builds trust and recognition' },
                  { title: 'Business Expansion', desc: 'Helps in franchising or global brand building' },
                  { title: 'Deters Infringers', desc: 'Legal notice in public registry' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-[#1B6B50] mt-1" size={14} />
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1B6B50]">Frequently Asked Questions</h2>
              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    q: "What is trademark registration?",
                    a: "Trademark registration involves securing exclusive rights to a unique mark that distinguishes a company's goods or services. This mark can be a design, picture, sign, or expression, representing the brand's identity and value."
                  },
                  {
                    q: "How long does it take to get trademark approved in India?",
                    a: "Trademark registration usually takes 18-24 months in a straight-forward case, without any objections or oppositions. However, the trademark application number is usually issued within one or two days after filing the application."
                  },
                  {
                    q: "What is the validity period of a trademark?",
                    a: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely for further periods of 10 years by paying the prescribed fee."
                  },
                  {
                    q: "What is trademark opposition?",
                    a: "Trademark opposition is a legal challenge against the registration of a trademark during its four-month publication period in the Trademark Journal. Third parties can oppose registration before it becomes official."
                  },
                  {
                    q: "When can I use the ® symbol?",
                    a: "Once a trademark is registered, the applicant can use the ® symbol to signify official registration and protection against infringement."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left font-medium text-sm md:text-base text-gray-900 p-4 md:p-6 flex justify-between items-center hover:bg-gray-50"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#1B6B50]">{openFAQ===idx?'-':'+'}</span>
                    </button>
                    {openFAQ===idx&&(
                      <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                        <p className="text-xs md:text-sm text-gray-600">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <ConsultationForm source="trademark-registration-page" />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

      </main>
      <Footer />
    </div>
  );
}
