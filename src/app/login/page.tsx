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
    <div className="flex min-h-screen bg-white">
      {/* Left side - Form */}
      <div className="w-1/2 p-24 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8 text-black">Welcome Back</h1>
        <p className="text-gray-600 mb-8 max-w-md">Sign in to your account to continue</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          <div>
            <label className="block mb-2 text-black font-medium">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5229] focus:outline-none text-black"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-black font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5229] focus:outline-none text-black"
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#3B5229] text-white py-3 rounded-lg hover:bg-[#2A3D1E] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          
          <div className="text-center my-4 text-black">Or</div>
          
          <div className="flex gap-4">
            <button 
              type="button"
              className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black shadow-sm"
            >
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Sign in with Google
            </button>
            <button 
              type="button"
              className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black shadow-sm"
            >
              <Image src="/apple.svg" alt="Apple" width={20} height={20} />
              Sign in with Apple
            </button>
          </div>
          
          <div className="text-center mt-6">
            <span className="text-black">Don't have an account?</span> <Link href="/signup" className="text-[#3B5229] font-medium hover:underline">Sign Up</Link>
          </div>
        </form>
      </div>
      
      {/* Right side - Image */}
      <div className="w-1/2 relative">
        <Image
          src="/login.png"
          alt="Globaton Strategic Solutions"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
