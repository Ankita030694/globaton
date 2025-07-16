"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { useState } from "react"

const PaymentRefundPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const sections = [
    { id: "general", title: "1. General Policy" },
    { id: "payment", title: "2. Payment Policy" },
    { id: "cancellation", title: "3. Cancellation Policy" },
    { id: "refund", title: "4. Refund Policy" },
    { id: "disputes", title: "5. Disputes & Chargebacks" },
    { id: "exceptions", title: "6. Exceptions" },
    { id: "updates", title: "7. Updates to This Policy" },
    { id: "contact", title: "8. Contact Information" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Quick Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10 py-4 px-4 hidden md:block">
        <div className="max-w-4xl mx-auto flex justify-between items-center space-x-4 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                setActiveSection(section.id)
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeSection === section.id
                ? "bg-[#1B6B50] text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-[#1B6B50] hover:text-white"
              }`}
            >
              {section.title.split(".")[1]}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl bg-white shadow-xl rounded-lg my-8">
        <div {...fadeIn} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B6B50] bg-clip-text">
            Payment, Refund & Cancellation Policy
          </h1>
          <p className="text-[#1B6B50] font-semibold text-lg">Effective Date: 29/05/2025</p>
          <div className="w-32 h-1 bg-[#1B6B50] mx-auto mt-6 rounded-full"></div>
        </div>

        <section 
          id="general"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            General Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Globaton.in ("we", "our", "us") is committed to providing high-quality services and a seamless
            customer experience. This policy outlines the terms and conditions related to payments, refunds,
            and cancellations made through our website.
          </p>
        </section>

        <section 
          id="payment"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            Payment Policy
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">2.1 Accepted Payment Methods</h3>
              <p className="text-gray-700 mb-4">We accept payments via:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Credit/Debit Cards (Visa, MasterCard, RuPay)",
                  "UPI (Unified Payments Interface)",
                  "Net Banking",
                  "Wallets (PhonePe, Google Pay, Paytm)",
                  "Bank Transfer (NEFT/IMPS/RTGS)"
                ].map((method, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <span className="w-2 h-2 bg-[#1B6B50] rounded-full"></span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">2.2 Payment Gateways</h3>
              <p className="text-gray-700">
                Payments are securely processed through RBI-compliant third-party gateways such as Razorpay,
                Paytm, etc. We do not store card or bank details on our servers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">2.3 Payment Confirmation</h3>
              <p className="text-gray-700">
                After a successful transaction, you will receive a confirmation via email/SMS and a downloadable
                GST-compliant invoice.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">2.4 Pricing and Taxes</h3>
              <p className="text-gray-700">
                Prices are listed in INR and include applicable taxes unless stated otherwise. We reserve the right to
                update pricing without prior notice.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">2.5 Payment Failures</h3>
              <p className="text-gray-700">
                In case of a failed transaction with a debited amount, contact us at{" "}
                <a href="mailto:support@globaton.in" className="text-[#1B6B50] font-semibold hover:underline">
                  support@globaton.in
                </a>{" "}
                within 24 hours. We will verify and resolve the issue within 5-6 business days.
              </p>
            </div>
          </div>
        </section>

        <section 
          id="cancellation"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            Cancellation Policy
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">3.1 Digital Services</h3>
              <p className="text-gray-700 mb-4">Orders for digital services are non-cancellable and non-refundable unless:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#1B6B50] rounded-full"></span>
                  <span>Duplicate payment</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#1B6B50] rounded-full"></span>
                  <span>Service not delivered due to our fault</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">3.2 Scheduled Services</h3>
              <p className="text-gray-700">
                Cancellations must be made 24 hours in advance to be eligible for rescheduling. No-shows or late
                cancellations are non-refundable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">3.3 Physical Products (if applicable)</h3>
              <p className="text-gray-700">
                Orders can be cancelled before shipment. Contact{" "}
                <a href="mailto:support@globaton.in" className="text-[#1B6B50] font-semibold hover:underline">
                  support@globaton.in
                </a>{" "}
                with your order number to initiate a cancellation.
              </p>
            </div>
          </div>
        </section>

        <section 
          id="refund"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
            Refund Policy
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">4.1 Eligibility</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4 font-semibold">Refunds are issued if:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#1B6B50] rounded-full"></span>
                      <span>Duplicate transaction occurred</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#1B6B50] rounded-full"></span>
                      <span>Service/product not delivered</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#1B6B50] rounded-full"></span>
                      <span>Service/product significantly deviates from description</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 mb-4 font-semibold">Refunds are not provided for:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Customer change of mind</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Delayed or unused services by the customer</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Services/products partially consumed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1B6B50]">4.2 Process</h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B6B50] rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Submit refund requests to{" "}
                  <a href="mailto:support@globaton.in" className="text-[#1B6B50] font-semibold hover:underline">
                    support@globaton.in
                  </a>{" "}
                  within 7 days of payment. Include order ID and proof of payment. Refunds will be processed within 7-10 business days to the original method.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          id="disputes"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
            Disputes & Chargebacks
          </h2>
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <p className="text-gray-700">
                Please contact our support team before initiating any chargeback. Unjustified disputes may result in
                restricted access to our services and potential legal action.
              </p>
            </div>
          </div>
        </section>

        <section 
          id="exceptions"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
            Exceptions
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700">
              Certain services or promotions may have unique refund terms, which will be clearly stated at the
              time of purchase.
            </p>
          </div>
        </section>

        <section 
          id="updates"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span>
            Updates to This Policy
          </h2>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-gray-700">
              We reserve the right to modify this policy at any time. Updates will be posted on this page with a
              revised "Effective Date".
            </p>
          </div>
            </section>

        <section 
          id="contact"
          className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          {...fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">8</span>
            Contact Information
          </h2>
          <div className="bg-[#1B6B50] text-white p-8 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-lg font-semibold mb-2">For any queries email:</p>
                <a href="mailto:support@globaton.in" className="text-white text-xl hover:underline">
                  support@globaton.in
                </a>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = 'mailto:support@globaton.in'}
              className="bg-white text-[#1B6B50] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PaymentRefundPolicy
