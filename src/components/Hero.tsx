"use client"

import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 sm:py-12 lg:py-16 bg-white">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          <span className="text-[#CBA135]">Simplifying</span>{" "}
          <span className="text-black">Business</span>
          <br />
          <span className="text-black">and Compliance</span>
        </h1>
        
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
          Hassle-Free Registration, Compliance & Tax Solutions – All in One Place.
        </p>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135]" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-black text-sm sm:text-base">Quick & Affordable</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135]" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-black text-sm sm:text-base">Certified Experts</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#CBA135]" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-black text-sm sm:text-base">100% Online Process</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href="/form?service=start-now"
            className="bg-[#CBA135] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-[#b38528] transition-colors flex items-center justify-center"
          >
            Start Now
          </Link>
          
          <Link 
            href="/form?service=book-consultation"
            className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium text-black hover:text-[#165D3F] transition-colors justify-center sm:justify-start"
          >
            Book a Free Consultation
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#165D3F] group-hover:translate-x-1 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-8 sm:mt-12 lg:mt-0">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/gbhero.png"
            alt="Business Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero 