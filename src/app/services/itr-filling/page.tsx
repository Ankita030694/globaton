import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ITRFillingForm from "@/components/ITRFillingForm";
import { CheckCircle2, ShieldCheck, Clock, FileText, TrendingUp, Calculator } from "lucide-react";

export const metadata = {
  title: "ITR Filing & Tax Planning | Globaton",
  description: "Institutional-grade tax planning, flawless ITR execution, and expert notice resolution.",
};

export default function ITRFillingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="flex items-center justify-center pb-10 pt-12 sm:pb-12 sm:pt-16 px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4">
          <div className="max-w-[1050px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-14 items-center">
            
            {/* Left Column - Hero Content */}
            <div className="max-w-xl">
              {/* Tag */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D6A73A]/60 bg-[#FDF9F1] text-[11px] font-[800] text-[#1B6B50] uppercase tracking-[0.08em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A73A] mr-2.5"></span>
                Tax & Audit Experts
              </div>
              
              {/* Headline */}
              <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] font-[800] leading-[1.1] md:leading-[1.05] mb-5 sm:mb-6 tracking-tight">
                <span className="text-[#111]">Don&apos;t Just File.</span><br />
                <span className="text-[#1B6B50]">Strategize Your</span><br />
                <span className="text-[#1B6B50]">Income Tax.</span>
              </h1>
              
              {/* Description */}
              <p className="text-gray-600/90 text-[0.95rem] sm:text-[1rem] leading-[1.6] mb-8 sm:mb-10 font-medium pr-0 sm:pr-4">
                Institutional-grade tax planning, flawless ITR execution, and expert notice resolution. We protect your cash flow and ensure 100% compliance so you can focus on scaling.
              </p>
              
              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F3EC] flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B6B50]" />
                  </div>
                  <span className="font-[800] text-[#111] text-[12.5px] sm:text-[13px] md:text-[14px] leading-tight">Proactive<br />Planning</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FDF6E3] flex items-center justify-center mr-3 flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6A73A]" />
                  </div>
                  <span className="font-[800] text-[#111] text-[12.5px] sm:text-[13px] md:text-[14px] leading-tight">Audit-Ready<br />Financials</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F3EC] flex items-center justify-center mr-3 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B6B50]" />
                  </div>
                  <span className="font-[800] text-[#111] text-[12.5px] sm:text-[13px] md:text-[14px] leading-tight">On-Time<br />Filing</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full max-w-[460px] mx-auto lg:mx-0 lg:ml-auto block">
              <ITRFillingForm source="ITR Filling Service Page" />
            </div>

          </div>
        </section>

        {/* Institutional Tax Solutions Section */}
        <section className="bg-[#050505] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1000px] w-full mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[34px] font-bold text-white mb-6">Institutional Tax Solutions</h2>
              <div className="w-16 h-1 bg-[#D6A73A] mx-auto rounded-full mb-8"></div>
              <p className="text-[#A1A1AA] max-w-2xl mx-auto text-[15px] sm:text-[16px] leading-[1.7]">
                Shift from reactive filing to proactive tax management. Our certified experts ensure your financials pass the strictest due diligence.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-[#0B1510] border border-[#165D3F] rounded-2xl p-7 hover:border-[#1B6B50] transition-colors relative transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#165D3F] flex items-center justify-center mb-6">
                  <FileText className="w-[22px] h-[22px] text-[#D6A73A]" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-[800] text-[17px] mb-4">ITR Filing</h3>
                <p className="text-[#A1A1AA] text-[14px] leading-[1.6]">
                  Flawless execution of complex tax returns. We guarantee 100% accuracy and on-time submissions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0B1510] border border-[#165D3F] rounded-2xl p-7 hover:border-[#1B6B50] transition-colors relative transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#165D3F] flex items-center justify-center mb-6">
                  <TrendingUp className="w-[22px] h-[22px] text-[#D6A73A]" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-[800] text-[17px] mb-4">Strategic Tax Planning</h3>
                <p className="text-[#A1A1AA] text-[14px] leading-[1.6]">
                  Legal structuring and proactive planning to optimize cash flow and minimize your overall tax liabilities.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0B1510] border border-[#165D3F] rounded-2xl p-7 hover:border-[#1B6B50] transition-colors relative transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#165D3F] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-[22px] h-[22px] text-[#D6A73A]" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-[800] text-[17px] mb-4">Notice Resolution</h3>
                <p className="text-[#A1A1AA] text-[14px] leading-[1.6]">
                  Received an IT Notice? Our senior legal experts provide aggressive, competent representation before tax authorities.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#0B1510] border border-[#165D3F] rounded-2xl p-7 hover:border-[#1B6B50] transition-colors relative transition-all duration-300">
                <div className="w-12 h-12 rounded-[14px] bg-[#165D3F] flex items-center justify-center mb-6">
                  <Calculator className="w-[22px] h-[22px] text-[#D6A73A]" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-[800] text-[17px] mb-4">GST Management</h3>
                <p className="text-[#A1A1AA] text-[14px] leading-[1.6]">
                  End-to-end GST reconciliation, monthly/quarterly filings, and input tax credit (ITC) optimization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
