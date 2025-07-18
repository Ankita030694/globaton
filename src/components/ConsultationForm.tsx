'use client'
import React, { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

interface ConsultationFormProps {
  source: string;
}

export default function ConsultationForm({ source }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: "",
    customService: "", // Add custom service field
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
    
    try {
      // Use custom service if "others" is selected, otherwise use the selected service
      const serviceToSubmit = formData.services === "others" ? formData.customService : formData.services;
      
      await addDoc(collection(db, "consultations"), {
        ...formData,
        services: serviceToSubmit, // Store the final service value
        source,
        createdAt: new Date()
      });
      
      setFormData({ name: "", email: "", phone: "", address: "", services: "", customService: "" });
      setFormSubmitted(true);
    } catch (err) {
      console.error("Error submitting form: ", err);
      setError("There was an error submitting your information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-black">Get Consultation Now</h2>
      
      {formSubmitted ? (
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-800 font-medium">Thank you for your submission!</p>
          <p className="text-green-700 mt-2">We'll get back to you shortly.</p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="mt-4 px-4 py-2 bg-[#C4942D] text-white rounded-lg hover:bg-[#b38528] transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
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
              placeholder="Enter your address"
              className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Services needed *</label>
            <select 
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-full focus:ring-2 focus:ring-[#1B6B50] focus:border-transparent text-black bg-gray-100"
            >
              <option value="">Choose one</option>
              <option value="business-setup">Business Setup</option>
              <option value="financial-planning">Financial & Tax Planning</option>
              <option value="tax-planning">ITR Filing</option>
              <option value="registration-compliance">Registration and Compliance</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Conditional textarea for custom service */}
          {formData.services === "others" && (
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Please specify the service you need *</label>
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