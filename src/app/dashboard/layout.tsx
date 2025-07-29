'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      // Redirect to login if not authenticated
      router.push('/login');
    }
  }, [user, authLoading, router]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarOpen && window.innerWidth < 1024) {
        const sidebar = document.querySelector('aside');
        const toggleButton = document.querySelector('[data-sidebar-toggle]');
        if (sidebar && !sidebar.contains(event.target as Node) && 
            toggleButton && !toggleButton.contains(event.target as Node)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation Bar */}
     <Navbar />
      
      <div className="flex flex-1 relative">
        {/* Sidebar Toggle Button */}
        <button
          data-sidebar-toggle
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-20 right-4 z-50 p-2 bg-white rounded-md shadow-md border"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-gray-100 border-r shadow-lg lg:shadow-none`}
        >
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Panel</h2>
            <nav className="space-y-1">
              <Link 
                href="/dashboard" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-800"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/dashboard/leads" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-800"
                onClick={() => setSidebarOpen(false)}
              >
                Leads
              </Link>
              <Link 
                href="/dashboard/blogs" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-800"
                onClick={() => setSidebarOpen(false)}
              >
                Blogs
              </Link>
            </nav>
          </div>
        </aside>
        
        {/* Backdrop - only show when sidebar is actually open on mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            style={{ display: 'block' }}
          />
        )}
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-0 w-full max-w-full overflow-x-hidden">
          <div className="w-full max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 