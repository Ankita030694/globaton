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
                {/* Expert Consultation Section */}
                <ExpertCTA />

                {/* Reviews and Consultation Section */}
                <Form />

                <Footer />
            </div>
        </ClientPageWrapper>
    );
}
