'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db, auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const [planCount, setPlanCount] = useState(0);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [totalLeadsCount, setTotalLeadsCount] = useState(0);
  const [totalBlogsCount, setTotalBlogsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        // Redirect to login if not authenticated
        router.push('/login');
      } else {
        fetchData();
      }
    }
  }, [user, authLoading, router]);

  const fetchData = async () => {
    try {
      // Get plans count
      const plansCollection = collection(db, 'plans');
      const plansSnapshot = await getDocs(plansCollection);
      setPlanCount(plansSnapshot.size);

      // Get today's date boundaries
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Get recent leads (from consultations collection) - only today's
      const consultationsCollection = collection(db, 'consultations');
      let consultationsQuery;
      try {
        // Try to order by createdAt first
        consultationsQuery = query(consultationsCollection, orderBy('createdAt', 'desc'), limit(5));
        const consultationsSnapshot = await getDocs(consultationsQuery);
        const consultationsData = consultationsSnapshot.docs
          .map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              name: data.name || '',
              email: data.email || '',
              phone: data.phone || '',
              address: data.address || '',
              services: data.services || '',
              source: data.source || '',
              createdAt: data.createdAt || new Date(),
              status: 'new' // Default status for leads
            };
          })
          .filter(lead => {
            const leadDate = new Date(lead.createdAt.toDate ? lead.createdAt.toDate() : lead.createdAt);
            return leadDate >= today && leadDate < tomorrow;
          })
          .slice(0, 5); // Get only first 5 of today's leads
        setRecentLeads(consultationsData);
      } catch (error) {
        // If createdAt ordering fails, try without ordering
        console.warn('CreatedAt ordering failed, fetching without order:', error);
        const consultationsSnapshot = await getDocs(consultationsCollection);
        const consultationsData = consultationsSnapshot.docs
          .map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              name: data.name || '',
              email: data.email || '',
              phone: data.phone || '',
              address: data.address || '',
              services: data.services || '',
              source: data.source || '',
              createdAt: data.createdAt || new Date(),
              status: 'new' // Default status for leads
            };
          })
          .filter(lead => {
            const leadDate = new Date(lead.createdAt.toDate ? lead.createdAt.toDate() : lead.createdAt);
            return leadDate >= today && leadDate < tomorrow;
          })
          .slice(0, 5); // Get only first 5 of today's leads
        setRecentLeads(consultationsData);
      }

      // Get total consultations count
      const allConsultationsSnapshot = await getDocs(consultationsCollection);
      setTotalLeadsCount(allConsultationsSnapshot.size);

      // Get recent blogs - only today's
      const blogsCollection = collection(db, 'blogs');
      let blogsQuery;
      try {
        // Try to order by created first
        blogsQuery = query(blogsCollection, orderBy('created', 'desc'), limit(5));
        const blogsSnapshot = await getDocs(blogsQuery);
        const blogsData = blogsSnapshot.docs
          .map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title || 'Untitled',
              author: data.author || 'Unknown Author',
              date: data.date || '',
              created: data.created || Date.now(),
              description: data.description || '',
              excerpt: data.metaDescription || data.description?.substring(0, 100) || 'No content available',
              slug: data.slug || doc.id,
              status: 'published' // Default status for blogs
            };
          })
          .filter(blog => {
            // Handle numeric timestamp (milliseconds since epoch)
            const blogDate = new Date(blog.created);
            return blogDate >= today && blogDate < tomorrow;
          })
          .slice(0, 5); // Get only first 5 of today's blogs
        setRecentBlogs(blogsData);
      } catch (error) {
        // If created ordering fails, try without ordering
        console.warn('Created ordering failed, fetching without order:', error);
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsData = blogsSnapshot.docs
          .map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title || 'Untitled',
              author: data.author || 'Unknown Author',
              date: data.date || '',
              created: data.created || Date.now(),
              description: data.description || '',
              excerpt: data.metaDescription || data.description?.substring(0, 100) || 'No content available',
              slug: data.slug || doc.id,
              status: 'published' // Default status for blogs
            };
          })
          .filter(blog => {
            // Handle numeric timestamp (milliseconds since epoch)
            const blogDate = new Date(blog.created);
            return blogDate >= today && blogDate < tomorrow;
          })
          .slice(0, 5); // Get only first 5 of today's blogs
        setRecentBlogs(blogsData);
      }

      // Get total blogs count
      const allBlogsSnapshot = await getDocs(blogsCollection);
      setTotalBlogsCount(allBlogsSnapshot.size);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
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

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-screen">
      {/* Header Section - Mobile Optimized */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-sm sm:text-base text-gray-600">Welcome, {user.email}</span>
          <button
            onClick={handleSignOut}
            className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Sign Out
          </button>
        </div>
      </div>
      
      {/* Dashboard Overview - Mobile Optimized Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Leads Count Card */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{loading ? '...' : totalLeadsCount}</p>
            </div>
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Blogs Count Card */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Blogs</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{loading ? '...' : totalBlogsCount}</p>
            </div>
            <div className="bg-[#EABE4C]/10 p-2 sm:p-3 rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#EABE4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Quick Actions</p>
              <p className="text-xs sm:text-sm text-gray-500">Manage content</p>
            </div>
            <div className="bg-green-100 p-2 sm:p-3 rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
          </div>
          <div className="space-y-2">
            <Link href="/dashboard/leads" className="block text-sm text-[#165D3F] hover:underline py-1">View Leads</Link>
            <Link href="/dashboard/blogs" className="block text-sm text-[#165D3F] hover:underline py-1">Create Blog Post</Link>
          </div>
        </div>
      </div>

      {/* Recent Leads Section - Mobile Optimized */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Today's Leads</h2>
          <Link 
            href="/dashboard/leads"
            className="text-sm text-[#165D3F] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            View All Leads
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="p-4 sm:p-6">
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="rounded-full bg-gray-200 h-8 w-8 sm:h-10 sm:w-10"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-2 sm:h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : recentLeads.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div className="bg-[#165D3F]/10 p-2 rounded-full flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#165D3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{lead.name || 'Unknown'}</p>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">{lead.email || 'No email'}</p>
                        {lead.phone && <p className="text-xs sm:text-sm text-gray-600 truncate">{lead.phone}</p>}
                        {lead.services && <p className="text-xs sm:text-sm text-gray-500 truncate">{lead.services}</p>}
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-gray-600">
                        {lead.createdAt ? 
                          (lead.createdAt.toDate ? 
                            new Date(lead.createdAt.toDate()).toLocaleDateString() : 
                            new Date(lead.createdAt).toLocaleDateString()
                          ) : 'Unknown date'}
                      </p>
                      {lead.status && (
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                          lead.status === 'new' ? 'bg-green-100 text-green-800' :
                          lead.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {lead.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <p className="text-sm sm:text-base">No leads found today</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Blogs Section - Mobile Optimized */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Today's Blogs</h2>
          <Link 
            href="/dashboard/blogs"
            className="text-sm text-[#165D3F] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            View All Blogs
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="p-4 sm:p-6">
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="rounded-full bg-gray-200 h-8 w-8 sm:h-10 sm:w-10"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-2 sm:h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : recentBlogs.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div className="bg-[#EABE4C]/10 p-2 rounded-full flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#EABE4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base line-clamp-1">{blog.title || 'Untitled'}</p>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{blog.excerpt || 'No content available'}...</p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm text-gray-600">
                        {blog.date || (blog.created ? new Date(blog.created).toLocaleDateString() : 'Unknown date')}
                      </p>
                      {blog.status && (
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                          blog.status === 'published' ? 'bg-green-100 text-green-800' :
                          blog.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {blog.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
              <p className="text-sm sm:text-base">No blogs found today</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
