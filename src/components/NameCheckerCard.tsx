'use client'
import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import Portal from './Portal';

const NameCheckerCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div
            className="w-full max-w-xl mx-auto rounded-[2.5rem] shadow-2xl overflow-hidden border-2 transition-all duration-300 ease-in-out cursor-default flex flex-col h-full relative group bg-white border-transparent hover:border-[#CBA135]"
        >
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center relative z-20">
                <div></div>
            </div>

            <div className="p-8 pt-0 flex-grow flex flex-col items-center text-center justify-center relative z-20">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-colors bg-emerald-50">
                    <Search size={40} className="text-[#165D3F]" />
                </div>
                <h2 className="text-3xl font-black leading-tight mb-10 transition-colors text-[#165D3F]">
                    Name <span className="text-[#CBA135]">Checker</span>
                </h2>
                <p className="mb-12 leading-relaxed flex items-center justify-center transition-colors text-slate-500">
                    Is your dream company name available? Check in real-time against the MCA database before you register.
                </p>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                    }}
                    className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg mt-auto bg-[#165D3F] text-white hover:bg-emerald-900 cursor-pointer"
                >
                    Check Name Availability <ArrowRight size={20} />
                </button>

                <div className="mt-8 pt-6 border-t w-full flex items-center justify-center gap-2 text-xs font-medium transition-colors border-slate-100 text-slate-400">
                    <CheckCircle2 size={14} className="text-[#CBA135]" />
                    Instant Access to MCA Database
                </div>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <Portal>
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
                                <div className="mb-6 text-center px-4 md:px-0">
                                    <h1 className="text-2xl font-black text-[#165D3F] mb-2 uppercase tracking-tight">
                                        Name Search Request
                                    </h1>
                                    <p className="text-slate-500 text-sm">
                                        Enter your preferred company name and our experts will check its availability for you.
                                    </p>
                                </div>
                                <ConsultationForm
                                    source="Name Checker Card Popup"
                                    isNameChecker={true}
                                    hideTitle={true}
                                    onSuccess={() => setIsModalOpen(false)}
                                />
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </div>
    );
};

export default NameCheckerCard;
