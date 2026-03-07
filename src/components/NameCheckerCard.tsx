'use client'
import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import Portal from './Portal';

const NameCheckerCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-50 flex flex-col">
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center">
                <div></div>
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

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#165D3F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg mt-auto"
                >
                    Check Name Availability <ArrowRight size={20} />
                </button>

                <div className="mt-8 pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
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
                                <div className="mb-6 text-center">
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
