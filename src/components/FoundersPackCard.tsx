"use client"

import React from 'react';
import { Zap, ArrowRight, Package, CheckCircle2 } from 'lucide-react';

const FoundersPackCard = () => {
    const handleDownload = () => {
        const isFilled = localStorage.getItem('isfilled') === 'true';

        if (isFilled) {
            const files = [
                'CO-FOUNDER EQUITY & VESTING AGREEMENT.docx',
                'LIMITED LIABILITY PARTNERSHIP (LLP) AGREEMENT.docx',
                'NON-DISCLOSURE AGREEMENT (NDA).docx',
                'SHAREHOLDER AGREEMENT.docx'
            ];

            files.forEach((file, index) => {
                setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = `/${file}`;
                    link.download = file;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, index * 500); // 500ms delay between downloads to prevent browser blocking
            });
        } else {
            alert("Please fill the Consultation Form first to unlock the Founder's Pack downloads.");
            // Optionally trigger the popup if you have access to its state or just let the auto-popup handle it
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-50 flex flex-col">
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#165D3F] rounded flex items-center justify-center text-white font-bold text-sm">G</div>
                    <span className="font-bold text-[#165D3F] tracking-tight text-sm">GLOBATON</span>
                </div>
                <div className="px-3 py-1 bg-amber-50 text-[#CBA135] text-[10px] font-black uppercase tracking-tighter rounded-full border border-amber-100">
                    Most Popular
                </div>
            </div>

            <div className="p-8 pt-0 flex-grow flex flex-col items-center text-center justify-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Package size={40} className="text-[#165D3F]" />
                </div>
                <h2 className="text-3xl font-black text-[#165D3F] leading-tight mb-4">
                    Founder's <span className="text-[#CBA135]">Pack</span>
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed h-12 flex items-center justify-center">
                    The ultimate jumpstart kit for founders. Registration, Compliance, and Legal essentials in one powerful bundle.
                </p>

                <button
                    onClick={handleDownload}
                    className="w-full bg-[#165D3F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg mt-auto"
                >
                    Download the Pack <ArrowRight size={20} />
                </button>

                <div className="mt-8 pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                    <CheckCircle2 size={14} className="text-[#CBA135]" />
                    Save up to 40% on Bundled Services
                </div>
            </div>
        </div>
    );
};

export default FoundersPackCard;
