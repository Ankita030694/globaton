'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Working with Globaton has been an enlightening experience for our business. Their team's strategic insights and practical advice have truly transformed our approach to operations and helped us achieve remarkable growth.",
      author: "Yaash Jain",
      position: "Proprietor",
      company: "M/s Veer Fiber",
      image: "yash.jpeg"
    },
    {
      text: "Engaging with Globaton has been a revelation for our business. Their team's strategic acumen and culturally sensitive approach have revolutionised our operations, propelling us towards unprecedented growth",
      author: "CA. Pushpit Dixit",
      position: "CFO",
      company: "Gupta&Dixit Associates",
      image: "noprofile.webp"
    },
    {
      text: "Globaton simplified my ITR. Their knowledgeable team ensured I maximized deductions while adhering to all regulations. With their help, I completed my taxes accurately and on time, giving me peace of mind during tax season.",
      author: "Neha Thakur",
      position: "Business Development Manager",
      company: "Exxon Mobil Ltd.",
      image: "neha.jpeg"
    },
    {
      text: "The expertise and professionalism demonstrated by Globaton have been invaluable to our organization. Their tailored solutions and hands-on approach have not only improved our efficiency but also positioned us for long-term success in a highly competitive market.",
      author: "Abhishek Gupta",
      position: "Director",
      company: "M/s R.S Plastics",
      image: "abhi.jpeg"
    },
    {
      text: "We engaged Globaton to assist with our restructuring efforts, and the results have exceeded our expectations. Their team's in-depth analysis and customized recommendations have revitalized our business model, resulting in improved profitability and organizational agility.",
      author: "Akshay Jain",
      position: "MD",
      company: "M/s Mahavir Packagers",
      image: "akshay.jpeg"
    },
    {
      text: "Their professionalism and dedication exhibited have been instrumental in our business transformation journey. Their collaborative approach and commitment to excellence have enabled us to streamline processes, optimize resources, and achieve significant cost savings.",
      author: "Shubham Jain",
      position: "Founder",
      company: "QuicReach",
      image: "shubh.jpeg"
    },
    {
      text: "Choosing Globaton for my tax needs as a salaried employee was the best decision I made. Their expertise and attention to detail made the entire process seamless and stress-free. I highly recommend their services to anyone looking for efficient and reliable tax assistance.",
      author: "Rajat Srivastava",
      position: "Business Development Manager",
      company: "Exxon Mobil Ltd.",
      image: "rajat.jpeg"
    },
    {
      text: "Enlisting the expertise of Globaton added a touch of ease and professionalism to my tax filing journey as an individual. Their courteous team not only navigated the complexities of tax law with finesse but also provided personalized attention, ensuring my financial affairs were in good hands.",
      author: "Aakanksha Tyagi",
      position: "Senior Tax Consultant",
      company: "Delloite (USI)",
      image: "akansha.jpeg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 lg:mt-16 bg-[#E6F0EB] p-6 lg:p-12 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Testimonial Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              <span className="text-[#C4942D]">What Our</span> <span className="text-black">Clients Say</span>
            </h2>
            
            <div className="mb-6 lg:mb-8">
              <div className="text-lg lg:text-xl italic mb-4 lg:mb-6 text-gray-700">
                "{testimonials[currentTestimonial].text}"
              </div>
              <div className="text-gray-600">
                <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
                <div>{testimonials[currentTestimonial].position}</div>
                <div>{testimonials[currentTestimonial].company}</div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-[#C4942D] w-4' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Profile Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  currentTestimonial === index ? 'scale-110 z-10' : 'scale-100 hover:scale-105'
                }`}
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={`/${testimonial.image}`}
                    alt={testimonial.author}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
                {currentTestimonial === index && (
                  <div className="absolute inset-0 border-2 border-[#C4942D] rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 