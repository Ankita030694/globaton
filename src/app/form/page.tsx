'use client'

import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";

export default function FormPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');

  // Define dynamic headings based on service
  const getHeading = () => {
    if (!service) return "Get Started with Your Business Journey";
    
    const headings: { [key: string]: string } = {
      'producer-company': 'Get Started with Producer Company Registration',
      'partnership-firm': 'Get Started with Partnership Firm Registration',
      'startup-india': 'Get Started with Start-Up India Registration',
      'change-company-name': 'Get Started with Company Name Change',
      'dsc': 'Get Started with Digital Signature Certificate',
      'udyam-registration': 'Get Started with Udyam Registration',
      'msme-registration': 'Get Started with MSME Registration',
      'iso-certification': 'Get Started with ISO Certification',
      'iec-code': 'Get Started with IEC (Import/Export Code)',
      'apeda-rcme': 'Get Started with Apeda RCME',
      'spice-board': 'Get Started with Spice Board Registration',
      'fieo-registration': 'Get Started with FIEO Registration',
      'legal-metrology': 'Get Started with Legal Metrology',
      'hallmark-registration': 'Get Started with Hallmark Registration',
      'bis-registration': 'Get Started with BIS Registration',
      'liquor-license': 'Get Started with Liquor License',
      'clra-registration': 'Get Started with CLRA Registration & Licensing',
      'ad-code-registration': 'Get Started with AD Code Registration',
      'gst-registration': 'Get Started with GST Registration',
      'gst-filing': 'Get Started with GST Filing',
      'gst-notice': 'Get Started with GST Notice',
      'itr-filing': 'Get Started with ITR Filing',
      'itr-notice': 'Get Started with ITR Notice Reply',
      'accounting-bookkeeping': 'Get Started with Accounting & Bookkeeping',
      'annual-compliance': 'Get Started with Annual Compliance',
      'trademark-registration': 'Get Started with Trademark Registration',
      'copyright-registration': 'Get Started with Copyright Registration',
      'patent-filing': 'Get Started with Patent Filing',
      'design-registration': 'Get Started with Design Registration',
      'employment-agreement': 'Get Started with Employment Agreement',
      'consulting-agreement': 'Get Started with Consulting Agreement',
      'partnership-agreement': 'Get Started with Partnership Agreement',
      'vendor-agreement': 'Get Started with Vendor Agreement',
      'moa-aoa': 'Get Started with MOA & AOA',
      'business-contracts': 'Get Started with Business Contracts',
      'nda-agreements': 'Get Started with NDA Agreements',
      'business-legal-advisory': 'Get Started with Business Legal Advisory',
      'startup-advisory': 'Get Started with Startup Advisory',
      'compliance-advisory': 'Get Started with Compliance Advisory',
      'regulatory-advisory': 'Get Started with Regulatory Advisory',
      'business-support': 'Get Started with Business Support',
      'investor-relations': 'Get Started with Investor Relations',
      'faqs': 'Get Started with FAQs',
      'consult-expert': 'Get Started with Expert Consultation',
      'book-appointment': 'Book an Appointment with Our Experts',
      'contact-us': 'Contact Us for Expert Guidance',
      'start-now': 'Get Started with Your Business Journey',
      'book-consultation': 'Book a Free Consultation',
      'talk-to-lawyer': 'Talk to a Lawyer',
      'talk-to-chartered-accountant': 'Talk to a Chartered Accountant',
      'talk-to-company-secretary': 'Talk to a Company Secretary',
      'nidhi-company': 'Get Started with Nidhi Company Registration',
      'legal-agreements': 'Get Started with Legal Agreements',
      'legal-advisory': 'Get Started with Legal Advisory',
      'licenses-registration': 'Get Started with Licenses & Registration',
      'get-in-touch': 'Get in Touch with Our Experts',
      'partnership-expert': 'Talk to Partnership Registration Expert',
      'accounting-expert': 'Talk to Accounting Expert',
      'pvltd-expert': 'Talk to PVT Ltd Registration Expert',
      'soleprop-expert': 'Talk to Sole Proprietorship Registration Expert',
      'llp-expert': 'Talk to LLP Registration Expert',
      'opc-expert': 'Talk to OPC Registration Expert'
    };

    return headings[service] || `Get Started with ${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#1B6B50] mb-4 sm:mb-8">
            {getHeading()}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 px-2 sm:px-0">
            Fill out the form below and our experts will get back to you shortly
          </p>
          
          <ConsultationForm source="form_page" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
