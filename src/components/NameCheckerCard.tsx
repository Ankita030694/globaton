"use client"

import React from 'react';
import { Search, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const NameCheckerCard = () => {
    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-50 flex flex-col">
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#165D3F] rounded flex items-center justify-center text-white font-bold text-sm">G</div>
                    <span className="font-bold text-[#165D3F] tracking-tight text-sm">GLOBATON</span>
                </div>
            </div>

            <div className="p-8 pt-0 flex-grow flex flex-col items-center text-center justify-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search size={40} className="text-[#165D3F]" />
                </div>
                <h2 className="text-3xl font-black text-[#165D3F] leading-tight mb-4">
                    Name <span className="text-[#CBA135]">Checker</span>
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed h-12 flex items-center justify-center">
                    Is your dream company name available? Check in real-time against the MCA database before you register.
                </p>

                <a
                    href="https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#165D3F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg mt-auto"
                >
                    Check Name Availability <ArrowRight size={20} />
                </a>

                <div className="mt-8 pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                    <CheckCircle2 size={14} className="text-[#CBA135]" />
                    Instant Access to MCA Database
                </div>
            </div>
        </div>
    );
};

export default NameCheckerCard;
