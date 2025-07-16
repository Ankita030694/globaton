"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const sections = [
    { id: "introduction", title: "1. Privacy Policy" },
    { id: "collection", title: "2. Collection of Personally Identifiable Information" },
    { id: "nonPersonal", title: "3. Use of Non-Personal Identifiable Data" },
    { id: "cookies", title: "4. Cookies" },
    { id: "sharing", title: "5. Sharing of Personal Information" },
    { id: "links", title: "6. Links to Other Sites" },
    { id: "security", title: "7. Information Security" },
    { id: "testimonials", title: "8. Testimonials" }
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
            Privacy Policy
          </h1>
          <div className="w-32 h-1 bg-[#1B6B50] mx-auto mt-6 rounded-full"></div>
        </div>

        <section id="introduction" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Privacy Policy Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Globaton.in, Globatonadvisors.com ("Globaton," "we," or "us") is committed to protecting your privacy. This Privacy Policy ("Policy") describes how Globaton collects, uses, shares, and secures the personal information you provide when you visit our Websites and Mobile Apps or use our Services. It also outlines your choices regarding use, access, and correction of your personal information. Please read this Policy carefully. If you do not agree, please do not use our Services.
          </p>
        </section>

        <section id="collection" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            Collection of Personally Identifiable Information
          </h2>
          <p className="text-gray-700 mb-4">
            We collect personally identifiable information (email address, name, phone number, etc.) when you set up a free account on Globaton.in or fill out a callback/program registration form. This may include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Contact Information such as name, email, mailing address, phone number, IP address</li>
            <li>Business details like firm name, firm size, and business type</li>
            <li>Billing information such as credit card number (last 4 digits only) and billing address</li>
          </ul>
          <p className="text-gray-700 mt-4">
            All payment transactions are processed through secure payment gateways, and we do not store full card details on our servers. We may contact you using provided contact details for service-related communications, even if registered on DND lists, unless you opt out.
          </p>
        </section>

        <section id="nonPersonal" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            Use of Non-Personal Identifiable Data
          </h2>
          <p className="text-gray-700">
            We capture non-identifiable data in logs, which may include device type, browser type, language preference, time zone, screen size, and referring/exit pages. We use this data to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Provide and improve our Services</li>
            <li>Send service-related communications</li>
            <li>Assess needs and suggest products</li>
            <li>Respond to customer service requests and administer accounts</li>
            <li>Send promotional and marketing communications</li>
            <li>Personalize advertisements and perform statistical analyses of user behavior</li>
          </ul>
        </section>

        <section id="cookies" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
            Cookies
          </h2>
          <p className="text-gray-700">
            We and our third-party partners use cookies and tracking technologies (web beacons, device identifiers, pixels) to provide functionality and recognize you across devices. You can disable cookies via your browser settings, but some site features may not function properly.
          </p>
        </section>

        <section id="sharing" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
            Sharing of Personal Information
          </h2>
          <p className="text-gray-700 mb-4">
            We may share personal information with affiliates to prevent fraud, enforce policies, and facilitate co-branded services. We may also disclose information when required by law, to protect rights, or during a merger or acquisition, with the stipulation that the new entity must follow this Policy.
          </p>
        </section>

        <section id="links" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
            Links to Other Sites
          </h2>
          <p className="text-gray-700">
            Our site may contain links to third-party sites not controlled by Globaton. We are not responsible for their privacy practices. Please review the privacy policies of any site you visit.
          </p>
        </section>

        <section id="security" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span>
            Information Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures like SSL encryption to protect information. While we strive to protect your data, transmission is at your own risk. Access is limited to authorized personnel and our systems are regularly scanned for vulnerabilities.
          </p>
        </section>

        <section id="testimonials" className="mb-12 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" {...fadeIn}>
          <h2 className="text-2xl font-semibold mb-6 text-[#1B6B50] flex items-center">
            <span className="w-8 h-8 bg-[#1B6B50] text-white rounded-full flex items-center justify-center mr-3 text-sm">8</span>
            Testimonials
          </h2>
          <p className="text-gray-700">
            We may post customer testimonials on our site, which may include personal information. We obtain consent before posting names alongside testimonials.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
