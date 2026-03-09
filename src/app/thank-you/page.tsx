'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4 py-16 lg:py-24">
                <div className="max-w-2xl w-full text-center">
                    {/* Success Icon Animation */}
                    <div className="mb-10 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-25"></div>
                            <div className="relative bg-emerald-50 p-8 rounded-full">
                                <CheckCircle2 size={80} className="text-[#165D3F] animate-in zoom-in duration-500" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-black text-[#165D3F] mb-6 uppercase tracking-tight">
                        Thank You!
                    </h1>

                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg mx-auto">
                        Your inquiry has been received. One of our expert advisors will contact you shortly to discuss your business needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-[#165D3F] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-xl hover:shadow-emerald-900/20"
                        >
                            <ArrowLeft size={20} /> Return to Home
                        </Link>
                        <Link
                            href="/blog"
                            className="px-8 py-4 border-2 border-slate-100 text-slate-600 rounded-2xl font-bold hover:border-[#EABE4C] hover:text-[#165D3F] transition-all"
                        >
                            Read Latest Stories
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="pt-12 border-t border-slate-100">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Follow our journey</p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/globaton.in/" },
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Facebook, href: "https://www.facebook.com/globaton.in/" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#EABE4C] hover:text-white transition-all shadow-sm"
                                >
                                    <social.icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
