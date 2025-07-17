'use client'

import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const AddPlanPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: string; message: string } | null>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const [editingPlanDocId, setEditingPlanDocId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: '',
    features: ['', '', '', '', ''],
    buttonText: 'Get Started',
    isHighlighted: false,
  });
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        // Redirect to login if not authenticated
        router.push('/login');
      } else {
        fetchPlans();
      }
    }
  }, [user, authLoading, router, submitStatus]);

  const fetchPlans = async () => {
    try {
      const plansCollection = collection(db, 'plans');
      const plansSnapshot = await getDocs(plansCollection);
      const plansList = plansSnapshot.docs.map(doc => ({ 
        docId: doc.id, // Store the actual Firestore document ID
        ...doc.data() 
      }));
      setPlans(plansList);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#165D3F]"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData({ ...formData, features: updatedFeatures });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: '',
      features: ['', '', '', '', ''],
      buttonText: 'Get Started',
      isHighlighted: false,
    });
    setEditingPlanDocId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Filter out empty features
      const filteredFeatures = formData.features.filter(feature => feature.trim() !== '');
      
      if (editingPlanDocId) {
        // Update existing plan using the document ID
        const planRef = doc(db, 'plans', editingPlanDocId);
        await updateDoc(planRef, {
          ...formData,
          features: filteredFeatures,
          lastUpdated: new Date()
        });
        setSubmitStatus({ type: 'success', message: 'Plan updated successfully!' });
      } else {
        // Add new plan
        await addDoc(collection(db, 'plans'), {
          ...formData,
          features: filteredFeatures,
          timestamp: new Date()
        });
        setSubmitStatus({ type: 'success', message: 'Plan added successfully!' });
      }
      
      // Reset form
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: editingPlanDocId ? 'Failed to update plan. Please try again.' : 'Failed to add plan. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (plan: any) => {
    // Fill form with plan data for editing
    setFormData({
      id: plan.id || '',
      title: plan.title || '',
      monthlyPrice: plan.monthlyPrice || 0,
      yearlyPrice: plan.yearlyPrice || 0,
      description: plan.description || '',
      features: [...(plan.features || []), '', '', '', '', ''].slice(0, 5),
      buttonText: plan.buttonText || 'Get Started',
      isHighlighted: plan.isHighlighted || false,
    });
    
    // Store the Firestore document ID
    setEditingPlanDocId(plan.docId);
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (docId: string) => {
    if (window.confirm('Are you sure you want to delete this plan?')) {
      try {
        setIsSubmitting(true);
        await deleteDoc(doc(db, 'plans', docId));
        setSubmitStatus({ type: 'success', message: 'Plan deleted successfully!' });
      } catch (error) {
        console.error('Error deleting plan:', error);
        setSubmitStatus({ type: 'error', message: 'Failed to delete plan. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const cancelEdit = () => {
    resetForm();
    setSubmitStatus(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Plans</h1>
          <a href="/" className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-lg transition-colors">
            Back to Home
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add/Edit Plan Form */}
          <div className="md:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#165D3F] p-6 text-white">
              <h2 className="text-xl font-bold">{editingPlanDocId ? 'Edit Plan' : 'Add New Plan'}</h2>
              <p className="text-sm opacity-80">{editingPlanDocId ? 'Update existing subscription plan' : 'Create a new subscription plan'}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan ID *</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="e.g., pro, basic, premium"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Pro, Basic, Premium"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Price *</label>
                  <input
                    type="number"
                    name="monthlyPrice"
                    value={formData.monthlyPrice}
                    onChange={handleNumberChange}
                    placeholder="0"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Yearly Price *</label>
                  <input
                    type="number"
                    name="yearlyPrice"
                    value={formData.yearlyPrice}
                    onChange={handleNumberChange}
                    placeholder="0"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of the plan"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                  required
                  rows={2}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                <input
                  type="text"
                  name="buttonText"
                  value={formData.buttonText}
                  onChange={handleChange}
                  placeholder="e.g., Get Started, Subscribe Now"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Features (up to 5)</label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <input
                      key={index}
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      placeholder={`Feature ${index + 1}`}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#EABE4C] focus:border-[#EABE4C] text-black"
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isHighlighted"
                  name="isHighlighted"
                  checked={formData.isHighlighted}
                  onChange={(e) => setFormData({ ...formData, isHighlighted: e.target.checked })}
                  className="h-4 w-4 text-[#165D3F] focus:ring-[#EABE4C] border-gray-300 rounded"
                />
                <label htmlFor="isHighlighted" className="ml-2 block text-sm text-gray-700">
                  Highlight this plan
                </label>
              </div>
              
              {submitStatus && (
                <div className={`p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="flex gap-2">
                {editingPlanDocId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className={`${editingPlanDocId ? 'w-1/2' : 'w-full'} bg-[#EABE4C] text-black py-3 rounded-xl hover:bg-[#D4AB3A] font-medium transition-colors flex justify-center`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : editingPlanDocId ? 'Update Plan' : 'Add Plan'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Plans List */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <div className="bg-[#165D3F] p-6 text-white">
                <h2 className="text-xl font-bold">Current Plans</h2>
                <p className="text-sm opacity-80">Manage your subscription plans</p>
              </div>
              
              <div className="p-6">
                {plans.length > 0 ? (
                  <div className="grid gap-4">
                    {plans.map((plan) => (
                      <div key={plan.docId} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-bold text-gray-800 text-black">{plan.title}</h3>
                          <div className="flex gap-2">
                            <span className="bg-gray-200 text-xs px-2 py-1 rounded-full font-medium text-black">
                              ${plan.monthlyPrice}/mo
                            </span>
                            <span className="bg-gray-200 text-xs px-2 py-1 rounded-full font-medium text-black">
                              ${plan.yearlyPrice}/yr
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mt-1 italic text-black">{plan.description}</p>
                        
                        <div className="mt-3">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase text-black">Features:</h4>
                          <ul className="mt-1 space-y-1">
                            {plan.features.map((feature: string, idx: number) => (
                              <li key={idx} className="text-sm flex items-center text-black">
                                <div className="w-4 h-4 rounded-full bg-[#2B553B] flex items-center justify-center mr-2">
                                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                  </svg>
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4 flex justify-end gap-2">
                          <button 
                            onClick={() => handleEdit(plan)} 
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(plan.docId)} 
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No plans</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new plan.</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Preview section */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden mt-6">
              <div className="bg-[#165D3F] p-6 text-white">
                <h2 className="text-xl font-bold">Plan Preview</h2>
                <p className="text-sm opacity-80">How your new plan will appear</p>
              </div>
              
              <div className="p-6">
                {formData.title ? (
                  <div className="rounded-3xl shadow-xl overflow-hidden bg-gray-50">
                    <div className="relative px-6 pt-6 pb-5 text-center">
                      <span className="absolute top-4 right-4 text-xs font-medium py-1 px-2 rounded-full bg-gray-200 text-gray-700">
                        Popular
                      </span>
                      
                      <h3 className="text-2xl font-extrabold mb-1 text-gray-800">{formData.title}</h3>
                      <p className="text-xs mb-4 max-w-[85%] mx-auto italic text-gray-600">{formData.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-center items-start">
                          <span className="text-lg mt-1 font-medium text-gray-700">$</span>
                          <span className="text-5xl font-bold text-gray-800">{formData.monthlyPrice}</span>
                          <span className="text-xs ml-1 self-end mb-2 text-gray-500">/mo</span>
                        </div>
                      </div>
                      
                      <div className="rounded-2xl p-4 bg-white shadow-lg">
                        <ul className="space-y-2">
                          {formData.features.filter(feature => feature.trim() !== '').map((feature, index) => (
                            <li key={index} className="flex items-center text-left">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#2B553B]">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                              </div>
                              <span className="ml-2 text-xs font-medium text-gray-700">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="w-full py-3 px-4 rounded-xl mt-4 text-white font-medium bg-[#165D3F] transition-all duration-300">
                          {formData.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Fill the form to see a preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlanPage;
