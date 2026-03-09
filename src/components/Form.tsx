'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ConsultationForm from './ConsultationForm';

const Form = () => {
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
    <div className="flex flex-col" id="consultation-form">
      <div className="flex flex-col md:flex-row bg-[#1B5E41] p-4 md:p-8">
        {/* Left Section */}
        <div className="md:w-1/2 text-white p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            People are Saying<br />
            About Globaton
          </h1>



          <div className="mb-8 md:mb-12">
            <div className="text-lg md:text-xl italic mb-4 md:mb-6 text-[#A6A6A6]">
              "{testimonials[currentTestimonial].text}"
            </div>
            <div className="text-sm md:text-base text-[#A6A6A6]">
              - {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].position}
              <br />
              <span className="text-[#A6A6A6]">{testimonials[currentTestimonial].company}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 pb-4">
            {testimonials.slice(0, 8).map((testimonial, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 cursor-pointer border-2 transition-all border-transparent hover:border-white/50"
                style={{ borderColor: currentTestimonial === index ? 'white' : 'transparent' }}
                onClick={() => setCurrentTestimonial(index)}
              >
                <Image
                  src={`/${testimonial.image}`}
                  alt="/nophoto"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/30 transition-colors"
              onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
            >
              <span className="text-white">▶</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form Wrapper */}
        <div className="md:w-1/2 p-4 md:p-8 mt-8 md:mt-0" id="consultation-form">
          <div className="max-w-md mx-auto">
            <ConsultationForm source="Homepage Footer Section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
