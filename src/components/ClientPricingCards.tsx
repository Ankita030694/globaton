"use client"
import React, { useState } from 'react';

const ClientPricingCards = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  
  const plans = [
    {
      id: "free",
      title: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "Have a go and test your superpowers",
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps"
      ],
      buttonText: "Signup for free"
    },
    {
      id: "pro",
      title: "Pro",
      monthlyPrice: 8,
      yearlyPrice: 79,
      description: "Experiment the power of infinite possibilities",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps"
      ],
      buttonText: "Go to pro"
    },
    {
      id: "business",
      title: "Business",
      monthlyPrice: 16,
      yearlyPrice: 159,
      description: "Unveil new superpowers and join the Design League",
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration-Soon"
      ],
      buttonText: "Goto Business"
    }
  ];

  return (
    <>
      <div className="w-full mx-auto px-20 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Choose Plan</h2>
          <h3 className="text-3xl font-bold mb-4 text-black">That's Right For You</h3>
          <p className="text-black">Choose plan that works best for you, feel free to contact us</p>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              className={`px-4 py-2 rounded ${
                billingCycle === 'monthly' ? 'bg-[#EABE4C] text-black' : 'bg-gray-200 text-black'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Bill Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded ${
                billingCycle === 'yearly' ? 'bg-[#EABE4C] text-black' : 'bg-gray-200 text-black'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Bill Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(plan => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <div 
                key={plan.id}
                className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out 
                  ${isSelected ? 'transform scale-105 z-10' : 'z-0'} 
                  ${isSelected ? 'bg-[#EABE4C]' : 'bg-gray-50'}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {/* Curved gradient hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#D4AB3A]/30 to-transparent rounded-b-3xl" />
                </div>

                {/* Selected card effects */}
                {isSelected && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                      <div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] 
                          bg-[#CBA135] rounded-[100%] translate-y-[75%] transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#CBA135]/50 to-transparent" />
                  </>
                )}
                
                <div className="relative px-6 pt-6 pb-5 text-center">
                  <span className={`absolute top-4 right-4 text-xs font-medium py-1 px-2 rounded-full
                    ${isSelected ? 'bg-[#D4AB3A]/30 text-[#8B7425]' : 'bg-gray-200 text-gray-700'}`}>
                    {billingCycle === 'yearly' ? 'Best Value' : 'Popular'}
                  </span>
                  
                  <h3 className={`text-2xl font-extrabold mb-1 
                    ${isSelected ? 'text-[#000000]' : 'text-gray-800'}`}>{plan.title}</h3>
                  <p className={`text-xs mb-4 max-w-[85%] mx-auto italic 
                    ${isSelected ? 'text-[#000000]' : 'text-gray-600'}`}>{plan.description}</p>
                  
                  <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                    <div className="flex justify-center items-start">
                      <span className={`text-lg mt-1 font-medium 
                        ${isSelected ? 'text-[#ffffff]' : 'text-gray-700'}`}>$</span>
                      <span className={`text-5xl font-bold 
                        ${isSelected ? 'text-[#ffffff]' : 'text-gray-800'}`}>{price}</span>
                      <span className={`text-xs ml-1 self-end mb-2
                        ${isSelected ? 'text-[#ffffff]' : 'text-gray-500'}`}>
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                    {billingCycle === 'monthly' && plan.id === "pro" && 
                      <p className={`text-xs mt-1 font-medium
                        ${isSelected ? 'text-[#ffffff]' : 'text-[#8B7425]'}`}>
                        Save ${plan.yearlyPrice - (plan.monthlyPrice * 12)} a year
                      </p>
                    }
                  </div>
                  
                  <div className={`rounded-2xl p-4 backdrop-blur-md shadow-lg
                    ${isSelected ? 'bg-white/90' : 'bg-white'}`}>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-left">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center
                            ${isSelected ? 'bg-[#2B553B]' : 'bg-[#2B553B]'}`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                          </div>
                          <span className={`ml-2 text-xs font-medium
                            ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-4 rounded-xl mt-4 text-white font-medium
                      transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                      ${isSelected ? 
                        'bg-[#165D3F]' : 
                        'hidden'}`}>
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
                
                {/* Border glow effect for selected plan */}
                {isSelected && (
                  <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AB3A] z-[-1]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClientPricingCards; 