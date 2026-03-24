'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight } from "lucide-react";

interface ITRFillingFormProps {
  source: string;
}

export default function ITRFillingForm({ source }: ITRFillingFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: "", // will hold primary tax requirement
    customService: "",
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Only allow alphabets and spaces
      if (value !== "" && !/^[a-zA-Z\s]*$/.test(value)) {
        return;
      }
    }

    if (name === "phone") {
      // Only allow digits and limit to 10
      if (value !== "" && !/^\d*$/.test(value)) {
        return;
      }
      if (value.length > 10) {
        return;
      }
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Final validation checks
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setError("Please enter a valid name (alphabets only).");
      setLoading(false);
      return;
    }

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }

    localStorage.setItem('isfilled', 'true');

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({ name: "", email: "", phone: "", address: "", services: "", customService: "" });
      router.push('/thank-you');
    } catch (err: unknown) {
      console.error("Error initiating submission: ", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[12px] shadow-2xl p-4 sm:p-5 md:p-6 border-[4.5px] border-[#1B6B50]">
      <h2 className="text-[1.2rem] sm:text-[1.35rem] font-bold mb-1.5 text-black text-left">Get started with Income Tax return</h2>
      <p className="text-gray-500 text-[12.5px] sm:text-[13.5px] mb-4 sm:mb-6 text-left leading-relaxed">Connect with our senior Chartered Accountants to discuss your tax position.</p>

      {formSubmitted ? (
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-800 font-medium text-sm">Thank you for your submission!</p>
          <p className="text-green-700 mt-1.5 text-sm">We&apos;ll get back to you shortly.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="text-left">
            <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              required
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-50/50 placeholder-gray-400 font-medium text-[14px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left">
              <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                required
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-50/50 placeholder-gray-400 font-medium text-[14px]"
              />
            </div>
            <div className="text-left">
              <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
              <div className="flex">
                <span className="inline-flex items-center px-3.5 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50/80 text-gray-600 text-[14px] font-bold">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  required
                  className="w-full px-3.5 py-2.5 rounded-r-lg border border-gray-200 focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-50/50 placeholder-gray-400 font-medium text-[14px]"
                />
              </div>
            </div>
          </div>

          <div className="text-left">
            <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Primary Tax Requirement <span className="text-red-500">*</span></label>
            <div className="relative">
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-50/50 appearance-none font-medium text-[14px] pr-9"
              >
                <option value="" disabled hidden className="text-gray-400">Select your core requirement...</option>
                <option value="ITR Filing" className="text-black">ITR Filing</option>
                <option value="Strategic Tax Planning" className="text-black">Strategic Tax Planning</option>
                <option value="Income Tax" className="text-black">Income Tax</option>
                <option value="Notice Resolution" className="text-black">Notice Resolution</option>
                <option value="GST Filing & Management" className="text-black">GST Filing & Management</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-[13px]">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-5 flex items-center justify-center font-bold text-[15.5px] ${loading ? 'bg-gray-400' : 'bg-[#D6A73A] hover:bg-[#c4942d]'} text-black py-3 rounded-lg transition-colors shadow-sm`}
          >
            {loading ? 'Submitting...' : 'Submit'} <ArrowRight className="ml-2 w-[16px] h-[16px] stroke-[2.5]" />
          </button>
          
          <div className="flex items-center justify-center mt-4 text-[#888] text-[12px] font-medium">
            <ShieldCheck className="w-[16px] h-[16px] mr-1.5 text-[#1B6B50]" /> Confidential & Secure Submission.
          </div>
        </form>
      )}
    </div>
  );
}
