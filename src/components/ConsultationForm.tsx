'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ConsultationFormProps {
  source: string;
  onSuccess?: () => void;
  isNameChecker?: boolean;
  prefilledService?: string;
  hideTitle?: boolean;
  shouldRedirect?: boolean;
}

export default function ConsultationForm({
  source,
  onSuccess,
  isNameChecker,
  prefilledService,
  hideTitle,
  shouldRedirect = true
}: ConsultationFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: prefilledService || (isNameChecker ? "others" : ""),
    customService: "",
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Set storage and trigger callback immediately for "instant" feel
    localStorage.setItem('isfilled', 'true');
    const quizData = localStorage.getItem('matchmaker_qa');
    const parsedQuizData = quizData ? JSON.parse(quizData) : null;

    if (onSuccess) {
      onSuccess();
    }

    try {
      // Fire and forget (let it run in background)
      fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source, quizData: parsedQuizData }),
      }).then(res => {
        if (!res.ok) {
          console.error("Background submission failed");
        } else {
          localStorage.removeItem('matchmaker_qa'); // Clear after successful submission
        }
      }).catch(err => {
        console.error("Background error: ", err);
      });

      // Clear form and show local success if not closed
      setFormData({ name: "", email: "", phone: "", address: "", services: "", customService: "" });

      if (shouldRedirect) {
        router.push('/thank-you');
      } else {
        setFormSubmitted(true);
      }
    } catch (err: unknown) {
      console.error("Error initiating submission: ", err);
      // We don't block here anymore since we already triggered Success
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      {!hideTitle && <h2 className="text-2xl font-semibold mb-6 text-black">Get Consultation Now</h2>}

      {formSubmitted ? (
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-800 font-medium">Thank you for your submission!</p>
          <p className="text-green-700 mt-2">We&apos;ll get back to you shortly.</p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="mt-4 px-4 py-2 bg-[#C4942D] text-white rounded-lg hover:bg-[#b38528] transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isNameChecker && (
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name you are searching for <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="customService"
                value={formData.customService}
                onChange={handleChange}
                placeholder="e.g. Globaton Tech Pvt Ltd"
                required
                className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
              />
            </div>
          )}

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Carlos"
              required
              className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. johnxxxxx@xyz.com"
                required
                className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder=""
              className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
            />
          </div>

          <div className="text-left">
            {!isNameChecker && (
              prefilledService ? (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service requested (Based on Quiz) <span className="text-red-500">*</span></label>
                  <div className="w-full px-5 py-3 rounded-2xl bg-emerald-50 border-2 border-[#165D3F]/20 flex items-center justify-between group">
                    <span className="text-[#165D3F] font-bold">{prefilledService}</span>
                    <div className="bg-[#165D3F] text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                      Recommended
                    </div>
                  </div>
                  <input type="hidden" name="services" value={formData.services} />
                </>
              ) : (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Services needed <span className="text-red-500">*</span></label>
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
                  >
                    <option value="">Choose one</option>
                    <option value="business-setup">Business setup</option>
                    <option value="tax-compliance">Tax & Compliance</option>
                    <option value="ip-trademark">IP & Trademark Registration</option>
                    <option value="others">Others</option>
                  </select>
                </>
              )
            )}
          </div>

          {!isNameChecker && formData.services === "others" && (
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Please specify the service you need <span className="text-red-500">*</span></label>
              <textarea
                name="customService"
                value={formData.customService}
                onChange={handleChange}
                placeholder="Please describe the service you need..."
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100 resize-none"
              />
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#C4942D] hover:bg-[#b38528]'} text-white py-3 rounded-lg transition-colors`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}