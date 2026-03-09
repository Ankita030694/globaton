'use client'
import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import Portal from './Portal';

const NameCheckerCard = ({ isSelected, onClick }: { isSelected?: boolean; onClick?: () => void }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div
            onClick={onClick}
            className={`w-full max-w-xl mx-auto rounded-[2.5rem] shadow-2xl overflow-hidden border transition-all duration-500 ease-in-out cursor-pointer flex flex-col h-full relative group
                ${isSelected ? 'transform scale-105 z-10 bg-[#EABE4C] border-[#D4AB3A]' : 'bg-white border-emerald-50 hover:border-[#CBA135]'}`}
        >
            {/* Curved gradient hover/selected effect */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className={`absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t rounded-b-3xl ${isSelected ? 'from-[#CBA135]/50' : 'from-[#D4AB3A]/30'} to-transparent`} />
            </div>

            {/* Selected card background shape */}
            {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden pointer-events-none">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] h-[400%] bg-[#CBA135] rounded-[100%] translate-y-[75%]" />
                </div>
            )}

            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center relative z-20">
                <div></div>
            </div>

            <div className="p-8 pt-0 flex-grow flex flex-col items-center text-center justify-center relative z-20">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-colors ${isSelected ? 'bg-white/20' : 'bg-emerald-50'}`}>
                    <Search size={40} className={isSelected ? 'text-white' : 'text-[#165D3F]'} />
                </div>
                <h2 className={`text-3xl font-black leading-tight mb-10 transition-colors ${isSelected ? 'text-white' : 'text-[#165D3F]'}`}>
                    Name <span className={isSelected ? 'text-black' : 'text-[#CBA135]'}>Checker</span>
                </h2>
                <p className={`mb-12 leading-relaxed flex items-center justify-center transition-colors ${isSelected ? 'text-white/90' : 'text-slate-500'}`}>
                    Is your dream company name available? Check in real-time against the MCA database before you register.
                </p>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                    }}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg mt-auto ${isSelected ? 'bg-[#165D3F] text-white hover:bg-emerald-900' : 'bg-[#165D3F] text-white hover:bg-emerald-900'}`}
                >
                    Check Name Availability <ArrowRight size={20} />
                </button>

                <div className={`mt-8 pt-6 border-t w-full flex items-center justify-center gap-2 text-xs font-medium transition-colors ${isSelected ? 'border-white/20 text-white/70' : 'border-slate-100 text-slate-400'}`}>
                    <CheckCircle2 size={14} className={isSelected ? 'text-white' : 'text-[#CBA135]'} />
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
