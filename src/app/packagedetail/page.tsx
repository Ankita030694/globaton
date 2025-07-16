"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheck, FaStar, FaRegStar, FaShare, FaLink, FaFacebookF, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function PackageDetail() {
  const [selectedRating, setSelectedRating] = useState('5 Star Rating');

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 flex items-center">
          <span>Services</span>
          <span className="mx-2">›</span>
          <span className="text-[#165D3F] font-medium">Package</span>
        </div>
        
        {/* Header Section with improved layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-3 text-[#165D3F]">Private Limited (PVT LTD) Company Registration in India</h1>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                The AI Design certification is meticulously crafted to equip designers with the advanced knowledge and skills required to harness the transformative power of artificial intelligence in the design industry. This comprehensive program blends foundational AI concepts with practical applications in design, emphasizing innovation, strategic implementation, and continuous adaptation to emerging trends.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#165D3F]/10 flex items-center justify-center text-[#165D3F]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Affordable & Transparent</h3>
                  <p className="text-gray-600">Registration starting at ₹999 + Govt Fee with no hidden charges.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#165D3F]/10 flex items-center justify-center text-[#165D3F]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Comprehensive Compliance</h3>
                  <p className="text-gray-600">SPICe-INC-32, eMoA-INC-33, eAOA-INC-34 filings, DSC, PAN, and TAN—all handled seamlessly.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#165D3F]/10 flex items-center justify-center text-[#165D3F]">
                  <FaCheck size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Trusted by Startups</h3>
                  <p className="text-gray-600">Rated #1 for Pvt Ltd Registration, with 100% MCA-compliant filings.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Card with enhanced design */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gray-800">₹ 200</span>
                    <span className="line-through text-gray-500 ml-2">₹280.00</span>
                  </div>
                  <span className="bg-[#CBA135] text-white text-xs font-bold px-3 py-1 rounded-full">50% OFF</span>
                </div>
                
                <p className="text-red-600 text-sm mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  2 days left at this price!
                </p>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-4">This Plan Includes:</h3>
                  <ul className="space-y-3">
                    {['4 Users', 'All apps', 'Unlimited editable exports', 
                      'Folders and collaboration', 'All incoming apps'].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-[#165D3F]/20 flex items-center justify-center mr-3">
                          <FaCheck className="text-[#165D3F]" size={10} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-[#165D3F] hover:bg-[#165D3F]/90 text-white py-4 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                  Checkout
                </button>

                <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  All courses have 30-days money-back guarantee
                </p>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <p className="text-sm text-gray-600 mb-3">Share this Package:</p>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <FaLink className="text-gray-600" size={14} />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                      <FaFacebookF className="text-gray-600" size={14} />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                      <FaTwitter className="text-gray-600" size={14} />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <FaEnvelope className="text-gray-600" size={14} />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-green-100 rounded-full transition-colors">
                      <FaWhatsapp className="text-gray-600" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Experts Section with enhanced design */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#165D3F] flex items-center">
            <span className="mr-2 text-[#CBA135]">⭐</span>
            Service Experts (02)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expert Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <div className="p-6">
                <div className="flex gap-5">
                  <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-[#CBA135]">
                    <Image
                      src="/experts/rohan.jpg"
                      alt="Rohan Joyal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Rohan Joyal</h3>
                    <p className="text-[#CBA135] font-medium mb-2">Web Designer & Best-Selling Instructor</p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      One day Vaiko had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup...
                    </p>
                    <button className="text-[#165D3F] text-sm mt-2 hover:text-[#165D3F]/80 font-medium">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expert Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <div className="p-6">
                <div className="flex gap-5">
                  <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-[#CBA135]">
                    <Image
                      src="/experts/ishan.jpg"
                      alt="Ishan Khan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Ishan Khan</h3>
                    <p className="text-[#CBA135] font-medium mb-2">Entrepreneur & Designer • Founder of ShiftRide</p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      I'm an experienced designer with a burning passion for building products of all sorts and seeing ideas come to life...
                    </p>
                    <button className="text-[#165D3F] text-sm mt-2 hover:text-[#165D3F]/80 font-medium">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ratings Section with improved visual design */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#165D3F] flex items-center">
            <span className="mr-2 text-[#CBA135]">⭐</span>
            Service Rating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md flex flex-col items-center justify-center">
              <div className="text-6xl font-bold text-gray-800 mb-2">4.8</div>
              <div className="flex text-[#CBA135] mb-2">
                {[1,2,3,4,5].map(star => (
                  <FaStar key={star} size={24} className="mx-0.5" />
                ))}
              </div>
              <p className="text-gray-600">Course Rating</p>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              {[
                {rating: 5, percent: 70, stars: 5},
                {rating: 4, percent: 21, stars: 4},
                {rating: 3, percent: 5, stars: 3},
                {rating: 2, percent: 3, stars: 2},
                {rating: 1, percent: 1, stars: 1}
              ].map((item) => (
                <div key={item.rating} className="flex items-center gap-4">
                  <div className="flex text-[#CBA135] w-32">
                    {Array.from({length: item.stars}).map((_, i) => (
                      <FaStar key={i} size={16} className="mr-1" />
                    ))}
                    {Array.from({length: 5 - item.stars}).map((_, i) => (
                      <FaRegStar key={i} size={16} className="mr-1" />
                    ))}
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#CBA135] h-full rounded-full"
                      style={{width: `${item.percent}%`}}
                    />
                  </div>
                  <span className="text-gray-600 w-12 text-right">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section with enhanced design */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-[#165D3F] flex items-center">
              <span className="mr-2 text-[#165D3F]">💬</span>
              Customer feedback
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <select 
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="bg-transparent text-gray-700 py-3 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-[#165D3F]/50"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: `right 0.5rem center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `1.5em 1.5em`,
                  paddingRight: `2.5rem`
                }}
              >
                <option>5 Star Rating</option>
                <option>4 Star Rating</option>
                <option>3 Star Rating</option>
                <option>2 Star Rating</option>
                <option>1 Star Rating</option>
              </select>
            </div>
          </div>

          {/* Review Cards */}
          <div className="space-y-6">
            {[
              {
                name: "Vaiko Juarez",
                time: "1 week ago",
                rating: 5,
                comment: "I appreciate the precise short videos (10 mins or less) each because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vaiko."
              },
              {
                name: "David Chen",
                time: "31 mins ago",
                rating: 5,
                comment: "This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor are really interesting, full and knowledgeable and I was never getting bored throughout the course."
              },
              {
                name: "Sarah Johnson",
                time: "6 hours ago",
                rating: 5,
                comment: "Workflow course was good, it covers design stories, and to build responsive web pages, blog, and some more tricks and tips about workflow. I enjoyed the course and it helped me to add web development skills related to workflow in my toolbox. Thank you Vaiko."
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#165D3F] flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex text-[#CBA135]">
                    {Array.from({length: review.rating}).map((_, i) => (
                      <FaStar key={i} size={14} className="ml-0.5" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}

            <button className="w-full py-4 border border-gray-300 hover:border-[#165D3F] text-gray-600 hover:text-[#165D3F] rounded-xl font-medium transition-all duration-300 mt-4 flex items-center justify-center hover:bg-[#165D3F]/5">
              Load More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
