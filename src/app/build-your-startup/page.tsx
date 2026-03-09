'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import NameCheckerCard from '@/components/NameCheckerCard';
import StructureMatchmaker from '@/components/StructureMatchmaker';
import FoundersPackCard from '@/components/FoundersPackCard';
import ClientPageWrapper from '@/components/ClientPageWrapper';
import Navbar from '@/components/Navbar';
import ExpertCTA from '@/components/ExpertCTA';
import Form from '@/components/Form';
import Footer from '@/components/Footer';

export default function BuildYourStartup() {
    const [selectedCard, setSelectedCard] = useState<'name' | 'structure' | 'founders' | null>(null);

    return (
        <ClientPageWrapper>
            <div className="bg-slate-50 font-sans text-slate-900 min-h-screen selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
                {/* Global Navbar */}
                <Navbar />

                {/* Hero Section */}
                <header className="pt-16 pb-8 px-6 text-center max-w-4xl mx-auto">
                    <span className="bg-emerald-100 text-[#165D3F] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                        For Pre-Incorporation Founders
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mt-8 leading-tight text-[#165D3F]">
                        Turn your <span className="text-[#CBA135] italic">Ideation</span> into a <span className="underline decoration-[#CBA135]/40 underline-offset-8">Legally Solid</span> Startup.
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Don't just brainstorm. Build a foundation that's ready for VC funding, bank accounts, and global scale from Day 1.
                    </p>
                </header>

                {/* The "Ideation Stage" Toolset */}
                <section
                    id="tool"
                    className="pt-4 pb-10 px-4 sm:px-10 md:px-16 bg-white/50 backdrop-blur-sm cursor-default"
                    onClick={() => setSelectedCard(null)}
                >
                    <div className="max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <NameCheckerCard
                                isSelected={selectedCard === 'name'}
                                onClick={() => setSelectedCard('name')}
                            />
                            <StructureMatchmaker
                                isSelected={selectedCard === 'structure'}
                                onClick={() => setSelectedCard('structure')}
                            />
                            <FoundersPackCard
                                isSelected={selectedCard === 'founders'}
                                onClick={() => setSelectedCard('founders')}
                            />
                        </div>
                    </div>
                </section>
                {/* Global Footer */}

                {/* Trust Bar */}
                <div className="bg-white py-12 border-y border-slate-100 mt-12 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8">Trusted by Founders from</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-40 grayscale">
                            <span className="font-black text-lg sm:text-xl italic whitespace-nowrap">QuicReach</span>
                            <span className="font-black text-lg sm:text-xl italic whitespace-nowrap">Moodscale</span>
                            <span className="font-black text-lg sm:text-xl italic whitespace-nowrap">Appomize</span>
                            <span className="font-black text-lg sm:text-xl italic whitespace-nowrap"> AMA Legal Solutions</span>
                        </div>
                    </div>
                </div>

                {/* Ready to go official? CTA */}
                <section className="py-20 px-6 text-center">
                    <div className="max-w-3xl mx-auto bg-[#165D3F] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
                        <h2 className="text-3xl font-bold mb-4">Ready to go official?</h2>
                        <p className="text-emerald-100/80 mb-8">Get incorporated in 7 days with India's most trusted startup advisors.</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/form?service=contact-us">
                                <button className="bg-[#CBA135] px-8 py-4 rounded-xl font-bold hover:bg-[#B58E2F] transition-all">
                                    Book Day 0 Call
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

               

                {/* Reviews and Consultation Section */}
                <Form />



                <Footer />
            </div>
        </ClientPageWrapper>
    );
}
