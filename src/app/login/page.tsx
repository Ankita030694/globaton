'use client';

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    if (!authLoading && user) {
      // User is already logged in, redirect to dashboard
      router.push('/dashboard');
    }
  }, [user, authLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard on successful login
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      // Provide user-friendly error messages
      let errorMessage = 'Failed to sign in. Please check your credentials.';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email address.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = 'This account has been disabled.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3B5229]"></div>
      </div>
    );
  }

  // Redirect if already authenticated
  if (user) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-white flex-col lg:flex-row">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-black">Welcome Back</h1>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Sign in to your account to continue</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="block mb-2 text-black font-medium text-sm sm:text-base">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5229] focus:outline-none text-black text-base"
                style={{ minHeight: '44px' }} // Ensure touch target size
              />
            </div>
            
            <div>
              <label className="block mb-2 text-black font-medium text-sm sm:text-base">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5229] focus:outline-none text-black text-base"
                style={{ minHeight: '44px' }} // Ensure touch target size
              />
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#3B5229] text-white py-3 sm:py-4 rounded-lg hover:bg-[#2A3D1E] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium"
              style={{ minHeight: '48px' }} // Ensure touch target size
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            
            
          </form>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 relative order-1 lg:order-2 h-48 sm:h-64 md:h-80 lg:h-auto sm:h-auto">
        <Image
          src="/login.png"
          alt="Globaton Strategic Solutions"
          fill
          className="object-cover "
          priority
        />
      </div>
    </div>
  );
}
