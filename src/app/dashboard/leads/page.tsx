'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  services: string;
  source: string;
  quizData?: Array<{ question: string; answer: string }>;
  createdAt: Date;
}

export default function LeadsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [filteredConsultations, setFilteredConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Delete confirmation
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Mobile filters toggle
  const [showFilters, setShowFilters] = useState(false);

  // Lead Details Modal
  const [selectedLead, setSelectedLead] = useState<Consultation | null>(null);

  // Authentication effect
  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        // Redirect to login if not authenticated
        router.push('/login');
      } else {
        fetchConsultations();
      }
    }
  }, [user, authLoading, router]);

  // Apply filters effect
  useEffect(() => {
    let result = [...consultations];

    // Apply search filter to name and email
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        item => item.name.toLowerCase().includes(lowerSearchTerm) ||
          item.email.toLowerCase().includes(lowerSearchTerm)
      );
    }

    // Apply service filter
    if (serviceFilter) {
      result = result.filter(item => item.services === serviceFilter);
    }

    // Apply source filter
    if (sourceFilter) {
      result = result.filter(item => item.source === sourceFilter);
    }

    // Apply date filter
    if (dateFilter) {
      const today = new Date();
      const filterDate = new Date();

      switch (dateFilter) {
        case 'today':
          result = result.filter(item =>
            item.createdAt.getDate() === today.getDate() &&
            item.createdAt.getMonth() === today.getMonth() &&
            item.createdAt.getFullYear() === today.getFullYear()
          );
          break;
        case 'week':
          filterDate.setDate(today.getDate() - 7);
          result = result.filter(item => item.createdAt >= filterDate);
          break;
        case 'month':
          filterDate.setMonth(today.getMonth() - 1);
          result = result.filter(item => item.createdAt >= filterDate);
          break;
      }
    }

    setFilteredConsultations(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchTerm, serviceFilter, sourceFilter, dateFilter, consultations]);

  const fetchConsultations = async () => {
    try {
      const consultationsCollection = collection(db, 'consultations');
      const consultationsSnapshot = await getDocs(consultationsCollection);

      const consultationsData = consultationsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || '',
          services: data.services || '',
          source: data.source || '',
          quizData: data.quizData || [],
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Consultation;
      });

      // Sort by createdAt in descending order (latest first)
      const sortedConsultations = consultationsData.sort((a, b) =>
        b.createdAt.getTime() - a.createdAt.getTime()
      );

      setConsultations(sortedConsultations);
      setFilteredConsultations(sortedConsultations);
    } catch (error) {
      console.error("Error fetching consultations:", error);
    } finally {
      setLoading(false);
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

  // Get unique service and source options for filters
  const serviceOptions = [...new Set(consultations.map(item => item.services))].filter(Boolean).sort();
  const sourceOptions = [...new Set(consultations.map(item => item.source))].filter(Boolean).sort();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  const formatService = (service: string) => {
    // Handle predefined services with better formatting
    const serviceMap: { [key: string]: string } = {
      'business-setup': 'Business setup',
      'tax-compliance': 'Tax & Compliance',
      'ip-trademark': 'IP & Trademark Registration',
      'others': 'Others'
    };

    // Return mapped service name or the original service (for custom entries)
    return serviceMap[service] || service;
  };

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setShowDeleteModal(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteDoc(doc(db, 'consultations', deleteId));
      setConsultations(prev => prev.filter(item => item.id !== deleteId));
      setFilteredConsultations(prev => prev.filter(item => item.id !== deleteId));
    } catch (error) {
      console.error("Error deleting consultation:", error);
    } finally {
      setShowDeleteModal(false);
      setDeleteId(null);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredConsultations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredConsultations.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Mobile card component
  const LeadCard = ({ consultation }: { consultation: Consultation }) => (
    <div
      className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm active:bg-gray-50 cursor-pointer"
      onClick={() => setSelectedLead(consultation)}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg">{consultation.name}</h3>
          <p className="text-sm text-gray-500">{formatDate(consultation.createdAt)}</p>
        </div>
        <button
          onClick={() => confirmDelete(consultation.id)}
          className="text-red-600 hover:text-red-900 text-sm font-medium"
        >
          Delete
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <span className="text-gray-500 w-16">Email:</span>
          <span className="text-gray-900 flex-1 break-all">{consultation.email}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 w-16">Phone:</span>
          <span className="text-gray-900">{consultation.phone}</span>
        </div>
        <div className="flex items-start">
          <span className="text-gray-500 w-16">Address:</span>
          <span className="text-gray-900 flex-1">{consultation.address}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 w-16">Service:</span>
          <span className="text-gray-900">{formatService(consultation.services)}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 w-16">Source:</span>
          <span className="text-gray-900">{consultation.source}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Lead Management</h1>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Mobile Filter Toggle */}
            <div className="sm:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              >
                <span>Filters {searchTerm || serviceFilter || sourceFilter || dateFilter ? '(Active)' : ''}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Filters */}
            <div className={`bg-gray-50 p-4 rounded-lg mb-6 ${showFilters ? 'block' : 'hidden sm:block'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or email"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select
                    id="service"
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  >
                    <option value="">All Services</option>
                    {serviceOptions.map(service => (
                      <option key={service} value={service}>{formatService(service)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                  <select
                    id="source"
                    value={sourceFilter}
                    onChange={(e) => setSourceFilter(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  >
                    <option value="">All Sources</option>
                    {sourceOptions.map(source => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                  <select
                    id="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  >
                    <option value="">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mb-4 text-sm text-gray-600">
              {filteredConsultations.length} lead{filteredConsultations.length !== 1 ? 's' : ''} found
            </div>

            {/* Mobile Cards View */}
            <div className="sm:hidden">
              {currentItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No leads found</p>
                </div>
              ) : (
                <div>
                  {currentItems.map((consultation) => (
                    <LeadCard key={consultation.id} consultation={consultation} />
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Table View */}
            <div className="hidden sm:block bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto max-w-full">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Services
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Matchmaker
                      </th>
                      <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-3 py-4 text-center text-sm text-gray-500">
                          No leads found
                        </td>
                      </tr>
                    ) : (
                      currentItems.map((consultation) => (
                        <tr key={consultation.id} className="hover:bg-gray-50">
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm text-gray-400 cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {formatDate(consultation.createdAt)}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm font-bold text-[#165D3F] cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {consultation.name}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {consultation.email}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {consultation.phone}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {consultation.address}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {formatService(consultation.services)}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {consultation.source}
                          </td>
                          <td
                            className="px-3 py-4 whitespace-nowrap text-sm cursor-pointer"
                            onClick={() => setSelectedLead(consultation)}
                          >
                            {consultation.quizData && consultation.quizData.length > 0 ? (
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Filled</span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-400 rounded-full text-xs">Not Filled</span>
                            )}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => confirmDelete(consultation.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {filteredConsultations.length > 0 && (
              <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6 flex items-center justify-between mt-4">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-700 px-4 py-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                      <span className="font-medium">
                        {Math.min(indexOfLastItem, filteredConsultations.length)}
                      </span>{' '}
                      of <span className="font-medium">{filteredConsultations.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${currentPage === number
                            ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                            : 'bg-white text-gray-500 hover:bg-gray-50'
                            }`}
                        >
                          {number}
                        </button>
                      ))}

                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
              <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto w-full">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Deletion</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Are you sure you want to delete this lead? This action cannot be undone.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={cancelDelete}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Lead Details Modal */}
            {selectedLead && (
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
                onClick={(e) => { if (e.target === e.currentTarget) setSelectedLead(null); }}
              >
                <div className="bg-white rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div>
                      <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Lead Details</h2>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(selectedLead.createdAt)}</p>
                    </div>
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-8 overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-4">
                        <div className="group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Full Name</label>
                          <p className="text-gray-900 font-bold text-lg">{selectedLead.name}</p>
                        </div>
                        <div className="group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
                          <p className="text-gray-900 font-medium break-all">{selectedLead.email}</p>
                        </div>
                        <div className="group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Phone Number</label>
                          <p className="text-gray-900 font-medium">{selectedLead.phone}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Service Requested</label>
                          <p className="inline-block px-3 py-1 bg-emerald-50 text-[#165D3F] rounded-lg font-bold text-sm">
                            {formatService(selectedLead.services)}
                          </p>
                        </div>
                        <div className="group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Lead Source</label>
                          <p className="text-gray-600 text-sm font-medium">{selectedLead.source}</p>
                        </div>
                        <div className="group">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Address</label>
                          <p className="text-gray-600 text-sm italic">{selectedLead.address || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quiz Section */}
                    <div className="pt-8 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-[#CBA135]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Structure Matchmaker Results</h3>
                      </div>

                      {selectedLead.quizData && selectedLead.quizData.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                          {selectedLead.quizData.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-[#CBA135] transition-colors">
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Question {idx + 1}</p>
                              <p className="text-gray-700 font-bold mb-2 text-sm">{item.question}</p>
                              <div className="flex justify-between items-center">
                                <span className="text-[11px] font-black text-[#165D3F] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md">Answer:</span>
                                <span className="text-[#CBA135] font-black text-sm">{item.answer}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-8 text-center">
                          <p className="text-gray-400 text-sm font-medium">This user did not complete the Structure Matchmaker quiz.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 text-right">
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="px-8 py-3 bg-[#165D3F] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-900 transition-all shadow-lg"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}