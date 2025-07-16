'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Form */}
      <div className="w-1/2 p-24 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8 text-black">Welcome Back</h1>
        <p className="text-gray-600 mb-8 max-w-md">Sign in to your account to continue</p>
        
        <form className="space-y-6 max-w-md">
          
          <div>
            <label className="block mb-2 text-black font-medium">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5229] focus:outline-none text-black"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-black font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5229] focus:outline-none text-black"
            />
          </div>
          
          {/* <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 h-4 w-4 accent-[#3B5229]" />
            <label htmlFor="terms" className="text-black">I agree to the terms & policy</label>
          </div> */}
          
          <button className="w-full bg-[#3B5229] text-white py-3 rounded-lg hover:bg-[#2A3D1E] transition-colors shadow-md">
            Sign In
          </button>
          
          <div className="text-center my-4 text-black">Or</div>
          
          <div className="flex gap-4">
            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black shadow-sm">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Sign in with Google
            </button>
            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-black shadow-sm">
              <Image src="/apple.svg" alt="Apple" width={20} height={20} />
              Sign in with Apple
            </button>
          </div>
          
          <div className="text-center mt-6">
            <span className="text-black">Have an account?</span> <Link href="/signin" className="text-[#3B5229] font-medium hover:underline">Sign In</Link>
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
        {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white backdrop-blur-sm">
          <Image
            src="/logo.svg"
            alt="Globaton Logo"
            width={120}
            height={120}
            className="mb-6"
          />
          <h1 className="text-5xl font-bold mb-4">GLOBATON</h1>
          <p className="text-xl text-center max-w-md">
            Strategic Minds, Transformative Solutions
          </p>
        </div> */}
      </div>
    </div>
  );
}
