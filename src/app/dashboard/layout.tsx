'use client'

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
     <Navbar />
      
      <div className="flex flex-1">
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
              >
                Dashboard Home
              </Link>
              <Link 
                href="/dashboard/plans" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-800"
              >
                Manage Plans
              </Link>
              <Link 
                href="/dashboard/leads" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-800"
              >
                Leads
              </Link>
              <Link 
                href="/dashboard/blogs" 
                className="block px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-800"
              >
                Blogs
              </Link>
            </nav>
          </div>
        </aside>
        
        {/* Backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 