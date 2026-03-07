"use client"

import React, { useState } from 'react';
import { Zap, ArrowRight, Package, CheckCircle2, X } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const FoundersPackCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-50 flex flex-col">
                {/* Header */}
                <div className="p-8 pb-4 flex justify-between items-center">
                    <div></div>
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

            {/* Modal Popup */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsModalOpen(false);
                    }}
                >
                    <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 z-10 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                            <div className="mb-6 text-center">
                                <h1 className="text-2xl font-black text-[#165D3F] mb-2 uppercase tracking-tight">
                                    First Fill this Form
                                </h1>
                                <p className="text-slate-500 text-sm">
                                    Please complete the consultation request below to unlock your free Founder's Pack download.
                                </p>
                            </div>
                            <ConsultationForm source="Founders Pack Card Popup" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FoundersPackCard;
