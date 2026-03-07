"use client"

import React, { useState } from 'react';
import { Zap, ArrowRight, Package, CheckCircle2, X, FileDown, Download } from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import Portal from './Portal';

const FoundersPackCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    const files = [
        { name: 'Co-founder Equity & Vesting Agreement', filename: 'CO-FOUNDER EQUITY & VESTING AGREEMENT.docx' },
        { name: 'LLP Agreement', filename: 'LIMITED LIABILITY PARTNERSHIP (LLP) AGREEMENT.docx' },
        { name: 'Non-Disclosure Agreement (NDA)', filename: 'NON-DISCLOSURE AGREEMENT (NDA).docx' },
        { name: 'Shareholder Agreement', filename: 'SHAREHOLDER AGREEMENT.docx' }
    ];

    const downloadFile = (filename: string) => {
        const link = document.createElement('a');
        link.href = `/${filename}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = () => {
        const isFilled = localStorage.getItem('isfilled') === 'true';

        if (isFilled) {
            setShowDownloadModal(true);
        } else {
            setIsModalOpen(true);
        }
    };

    const downloadAll = () => {
        files.forEach((file, index) => {
            setTimeout(() => {
                downloadFile(file.filename);
            }, index * 500);
        });
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
                        Download the Pack <Download size={20} />
                    </button>

                    <div className="mt-8 pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                        <CheckCircle2 size={14} className="text-[#CBA135]" />
                        Save up to 40% on Bundled Services
                    </div>
                </div>
            </div>

            {/* Consultation Form Modal */}
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
                                        First Fill this Form
                                    </h1>
                                    <p className="text-slate-500 text-sm">
                                        Please complete the consultation request below to unlock your free Founder's Pack download.
                                    </p>
                                </div>
                                <ConsultationForm
                                    source="Founders Pack Card Popup"
                                    onSuccess={() => {
                                        setIsModalOpen(false);
                                        setShowDownloadModal(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Portal>
            )}

            {/* Download Selection Modal */}
            {showDownloadModal && (
                <Portal>
                    <div
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setShowDownloadModal(false);
                        }}
                    >
                        <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                            {/* Close button */}
                            <button
                                onClick={() => setShowDownloadModal(false)}
                                className="absolute top-6 right-6 z-10 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Download size={32} className="text-[#165D3F]" />
                                    </div>
                                    <h2 className="text-2xl font-black text-[#165D3F] uppercase tracking-tight">Your Founder's Pack</h2>
                                    <p className="text-slate-500 text-sm mt-1">Select the documents you wish to download</p>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {files.map((file, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => downloadFile(file.filename)}
                                            className="w-full p-4 rounded-2xl border-2 border-slate-100 hover:border-[#CBA135] hover:bg-amber-50/30 text-left transition-all flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-[#CBA135] transition-colors">
                                                    <FileDown size={20} />
                                                </div>
                                                <span className="font-bold text-slate-700 text-sm leading-tight">{file.name}</span>
                                            </div>
                                            <div className="p-2 bg-[#165D3F]/5 rounded-lg group-hover:bg-[#CBA135]/10 transition-colors">
                                                <Download size={16} className="text-[#165D3F] group-hover:text-[#CBA135]" />
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={downloadAll}
                                    className="w-full bg-[#165D3F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg"
                                >
                                    <Download size={20} /> Download All Files
                                </button>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

export default FoundersPackCard;
