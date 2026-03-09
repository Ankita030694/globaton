'use client';

import React from 'react';
import Link from 'next/link';

const SidebarCTA: React.FC = () => {
    return (
        <div className="bg-[#165D3F] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
            <h4 className="text-xl font-bold mb-4 relative z-10">Confused about your startup structure?</h4>
            <p className="text-emerald-100/80 text-sm mb-6 relative z-10">
                Get a 15-min free consultation with our legal experts to clarify your doubts.
            </p>
            <Link href="/form?service=expert-consultation">
                <button className="w-full bg-[#CBA135] text-white py-3 rounded-xl font-bold hover:bg-[#B58E2F] transition-all text-sm shadow-lg">
                    Talk to an Expert
                </button>
            </Link>
        </div>
    );
};

export default SidebarCTA;
