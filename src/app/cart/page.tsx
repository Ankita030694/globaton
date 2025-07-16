'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cart() {
  const [step, setStep] = useState('recipient'); // 'recipient' or 'payment'
  const [recipientVisible, setRecipientVisible] = useState(true);
  const [paymentVisible, setPaymentVisible] = useState(false);
  
  const handleContinue = () => {
    if (step === 'recipient') {
      // Start the transition
      setRecipientVisible(false);
      
      // Wait for the first animation to complete before showing the payment form
      setTimeout(() => {
        setStep('payment');
        setPaymentVisible(true);
      }, 300);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">View Cart</h1>
          <div className="flex justify-center items-center gap-2">
            <span className="text-black">Services</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-black">Package</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-[#CBA135] font-medium">Checkout</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Forms with smooth transitions */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
            {/* Recipient Form */}
            <div 
              className={`absolute inset-0 p-8 transition-all duration-500 ease-in-out transform ${
                recipientVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full pointer-events-none'
              }`}
            >
              <h2 className="text-2xl font-semibold border-b-2 border-[#CBA135] pb-3 mb-8 inline-block text-black">
                Recipient Information
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-black">
                    Recipient Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                    placeholder="Shalini"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-black">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                    placeholder="26, Shenoy Nagar"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-black">Company Details</label>
                  <input 
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-black">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                    placeholder="Chennai"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-black">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                      placeholder="Tamil Nadu"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-black">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                      placeholder="India"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-black">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                      placeholder="600008"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-black">Phone Number</label>
                    <div className="flex">
                      <input 
                        type="text"
                        className="w-16 border border-gray-200 rounded-l-lg p-3 bg-gray-50 text-center font-medium text-black"
                        value="+91"
                        disabled
                      />
                      <input 
                        type="text"
                        className="flex-1 border border-gray-200 rounded-r-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all border-l-0 text-black"
                        placeholder="9441953269"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Payment Form */}
            <div 
              className={`absolute inset-0 p-8 transition-all duration-500 ease-in-out transform ${
                paymentVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full pointer-events-none'
              }`}
            >
              <h2 className="text-2xl font-semibold border-b-2 border-[#CBA135] pb-3 mb-8 inline-block text-black">
                Payment Method
              </h2>
              
              {/* Saved Payment Methods */}
              <div className="space-y-4 mb-6">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src="/visa-logo.png" alt="Visa" className="h-6" />
                    <span className="text-black">4855 **** **** ****</span>
                    <span className="text-gray-500">04/24</span>
                  </div>
                  <span className="text-black">Shalini</span>
                </div>

                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src="/mastercard-logo.png" alt="Mastercard" className="h-6" />
                    <span className="text-black">5795 **** **** ****</span>
                    <span className="text-gray-500">04/24</span>
                  </div>
                  <span className="text-black">Shalini</span>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
                    <span className="text-gray-600">You will be redirected to the PayPal site after reviewing your order.</span>
                  </div>
                </div>

                <button className="border rounded-lg p-4 w-full flex items-center gap-2 text-black">
                  <span className="text-2xl">+</span>
                  New Payment Cards
                </button>
              </div>

              {/* New Card Form */}
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-black">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                    placeholder="Visa"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-black">
                    Card Number
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                    placeholder="2574 6282 7248"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-black">
                      Expires <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                      placeholder="25/28"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-black">
                      CVV Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#CBA135] transition-all text-black"
                      placeholder="489"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember-card" className="rounded text-[#165D3F]" />
                  <label htmlFor="remember-card" className="text-gray-600">
                    Remember this card, save it on my card list
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Payment Method */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-semibold border-b-2 border-[#CBA135] pb-3 mb-8 inline-block text-black">
                Payment Method
              </h2>

              {/* Course Card */}
              <div className="bg-white rounded-lg border border-gray-100 p-6 mb-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-4 text-black">Course</h3>
                <div className="flex items-center gap-5">
                  <div className="w-28 h-28 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                    <img 
                      src="/course-thumbnail.jpg" 
                      alt="Course Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Course by: Ishan Khan</p>
                    <p className="font-bold text-lg mb-1 text-black">AI+ Design</p>
                    <p className="text-[#CBA135] font-semibold text-lg">$200.00</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-6 text-black">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-semibold text-black">Pro</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-black">$200 USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-black">$ 3.25 USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Coupon Discount</span>
                    <span className="text-black">8%</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t font-semibold text-lg">
                    <span className="text-black">Total:</span>
                    <span className="text-black">$203.25 USD</span>
                  </div>
                </div>

                <button 
                  onClick={handleContinue}
                  className="w-full bg-[#165D3F] text-white py-4 rounded-lg mt-8 hover:bg-opacity-90 transition-all font-medium text-lg shadow-sm hover:shadow-md"
                >
                  {step === 'recipient' ? 'Continue' : 'Pay Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
