"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const sections = [
    { id: "overview", title: "1. Terms of Use" },
    { id: "acceptance", title: "2. Acceptance of Terms" },
    { id: "usage", title: "3. Website Usage" },
    { id: "guidelines", title: "4. Usage Guidelines" },
    { id: "liability", title: "5. Limit of Liability" },
    { id: "indemnification", title: "6. Indemnification" },
    { id: "fees", title: "7. Fees" },
    { id: "refunds", title: "8. Refunds" }
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
            Terms of Use
          </h1>
          <div className="w-32 h-1 bg-[#1B6B50] mx-auto mt-6 rounded-full"></div>
        </div>

        <section id="overview" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Terms of Use
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Please carefully review the following terms and conditions that govern your use of globaton.in ("Website"). In these terms, "Globaton" ("Partnership Firm", "us", "we") outlines your responsibilities and rights. By using this Website or its products and services, you agree that you have read, understood, and accepted these terms. If you do not agree, you must not use any part of the site, products, or services.
          </p>
        </section>

        <section id="acceptance" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            Your use of the Website constitutes acceptance of these Terms of Use and our Privacy Policy. You warrant that you will comply with all applicable laws and regulations. We reserve the right to update the terms at any time; continued use after changes indicates your acceptance.
          </p>
        </section>

        <section id="usage" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            Website Usage
          </h2>
          <p className="text-gray-700">
            You agree not to use this site unlawfully or in violation of these terms. Under no circumstances will the Firm be liable for any errors, omissions, loss, or damage arising from use of the site or its content. You are responsible for any hardware, software, or ISP charges to access the Website.
          </p>
        </section>

        <section id="guidelines" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
            Usage Guidelines
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Do not insult, harass, stalk, threaten, or infringe on others’ rights.</li>
            <li>Do not post defamatory, indecent, offensive or unlawful content.</li>
            <li>Avoid uploading files protected by IP laws without permission.</li>
            <li>Editing HTML, reverse engineering, or hacking is prohibited.</li>
            <li>No spam services/scripts or infrastructure-disrupting actions.</li>
            <li>Do not advertise or distribute phishing links or plagiarize content.</li>
            <li>Comply with all legal, regulatory, and network operator rules.</li>
          </ul>
        </section>

        <section id="liability" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
            Limit of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree that the Firm is not liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including lost profits, goodwill, data, or other intangible losses, resulting from: use or inability to use the service; substitute procurement costs; unauthorized access or alteration of data; third-party statements or conduct; or any matter relating to the products.
          </p>
        </section>

        <section id="indemnification" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
            Indemnification
          </h2>
          <p className="text-gray-700">
            You agree to indemnify and hold the Firm, its affiliates, officers, directors, agents, and employees harmless from any third-party claims or demands, including legal fees, arising from your breach of these Terms or violation of any law or third-party rights.
          </p>
        </section>

        <section id="fees" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span>
            Fees
          </h2>
          <p className="text-gray-700">
            Usage of Globaton services may incur fees. You will be notified of any applicable fees before completing a transaction, which will proceed only upon your consent and payment.
          </p>
        </section>

        <section id="refunds" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">8</span>
            Refunds
          </h2>
          <p className="text-gray-700">
            Refunds are subject to the service agreement you sign. Fees paid in advance are non-refundable except as outlined in your agreement. You may cancel services anytime without additional fees, but prior payments remain non-refundable.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default TermsAndConditions