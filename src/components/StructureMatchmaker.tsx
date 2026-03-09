"use client"

import React, { useState } from 'react';
import {
    Users,
    Rocket,
    ShieldCheck,
    Banknote,
    ArrowRight,
    RefreshCcw,
    CheckCircle2,
    Calendar,
    AlertTriangle,
    Zap,
    X
} from 'lucide-react';
import ConsultationForm from './ConsultationForm';
import Portal from './Portal';

/**
 * StructureMatchmaker.jsx
 * - Refactored icons to store Components instead of Elements to avoid "Object as Child" errors.
 * - Optimized result logic for better stability.
 */
const StructureMatchmaker = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
    const [step, setStep] = useState('quiz'); // quiz, result
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const brand = {
        green: '#165D3F',
        gold: '#CBA135',
        lightGold: '#EABE4C',
    };

    const questions = [
        {
            id: 'founders',
            text: "How many founders are starting this venture?",
            options: [
                { label: "Just Me", value: 'single', icon: Users },
                { label: "2 or More", value: 'multiple', icon: Users }
            ]
        },
        {
            id: 'funding',
            text: "Are you planning to raise VC or Angel funding?",
            options: [
                { label: "Yes, definitely", value: 'high', icon: Rocket },
                { label: "No, we are bootstrapping", value: 'low', icon: Banknote }
            ]
        },
        {
            id: 'risk',
            text: "What is the risk level of your business (Liability)?",
            options: [
                { label: "High (Tech, Manufacturing, Lending)", value: 'high', icon: ShieldCheck },
                { label: "Low (Consulting, Content, Freelance)", value: 'low', icon: Zap }
            ]
        },
        {
            id: 'compliance',
            text: "How much can you spend on annual compliance?",
            options: [
                { label: "Minimal (Below ₹10k)", value: 'low', icon: Banknote },
                { label: "Professional (₹25k - ₹50k+)", value: 'high', icon: ShieldCheck }
            ]
        }
    ];

    const handleAnswer = (value: string, label: string) => {
        const currentQ = questions[currentQuestion];
        const newAnswers = { ...answers, [currentQ.id]: value };
        setAnswers(newAnswers);

        // Track Q&A for database submission
        const existingQA = JSON.parse(localStorage.getItem('matchmaker_qa') || '[]');
        const updatedQA = [...existingQA, { question: currentQ.text, answer: label }];
        localStorage.setItem('matchmaker_qa', JSON.stringify(updatedQA));

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setStep('result');
        }
    };

    const getRecommendation = () => {
        const { founders, funding, risk } = answers;

        if (funding === 'high') {
            return {
                type: "Private Limited Company (Pvt Ltd)",
                reason: "VCs and Angel investors almost exclusively invest in Pvt Ltd structures due to share transfer ease.",
                color: brand.green,
                riskNote: "Perfect for scaling and high-growth tech startups."
            };
        }
        if (founders === 'multiple' && funding === 'low') {
            return {
                type: "Limited Liability Partnership (LLP)",
                reason: "Provides limited liability for partners with much lower compliance costs than a Pvt Ltd.",
                color: brand.gold,
                riskNote: "Ideal for professional services and bootstrapped teams."
            };
        }
        if (founders === 'single' && risk === 'high') {
            return {
                type: "One Person Company (OPC)",
                reason: "Gives you the status of a company while allowing single-person control and limited liability.",
                color: brand.green,
                riskNote: "The best shield for solo-founders with big dreams."
            };
        }
        return {
            type: "Sole Proprietorship",
            reason: "Easiest and cheapest to start. Best for testing an idea with zero compliance headache.",
            color: "#475569",
            riskNote: "Note: Your personal assets are not protected. Switch to LLP/Pvt Ltd once you scale."
        };
    };

    const result = step === 'result' ? getRecommendation() : null;

    const resetQuiz = () => {
        setStep('quiz');
        setCurrentQuestion(0);
        setAnswers({});
        localStorage.removeItem('matchmaker_qa');
    };

    return (
        <>
            <div className="w-full max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-50 flex flex-col">
                {/* Header */}
                <div className="p-8 pb-4 flex justify-between items-center">
                    <div></div>
                </div>

                <div className="p-8 pt-0 flex-grow flex flex-col">
                    <div className="text-center flex-grow flex flex-col items-center">
                        <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck size={40} className="text-[#165D3F]" />
                        </div>
                        <h2 className="text-3xl font-black text-[#165D3F] leading-tight mb-10">
                            Structure <span className="text-[#CBA135]">Matchmaker</span>
                        </h2>
                        <p className="text-slate-500 mb-12 leading-relaxed flex items-center justify-center">
                            Choosing the wrong business structure can cost you lakhs in taxes or missed funding. Find your perfect fit in 60 seconds.
                        </p>
                        <button
                            onClick={() => {
                                resetQuiz();
                                setIsModalOpen(true);
                            }}
                            className="w-full bg-[#165D3F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg mt-auto"
                        >
                            Start Matchmaker <ArrowRight size={20} />
                        </button>

                        <div className="mt-8 pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                            <CheckCircle2 size={14} className="text-[#CBA135]" />
                            Perfect Structure for Higher Growth
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <Portal>
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    resetQuiz();
                                    setIsModalOpen(false);
                                }}
                                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10">
                                {step === 'quiz' && (
                                    <div className="py-2">
                                        <div className="flex justify-between items-center mb-8">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Question {currentQuestion + 1} / {questions.length}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#165D3F] mb-8 leading-snug">
                                            {questions[currentQuestion].text}
                                        </h2>
                                        <div className="space-y-4">
                                            {questions[currentQuestion].options.map((opt, idx) => {
                                                const IconComponent = opt.icon;
                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleAnswer(opt.value, opt.label)}
                                                        className="w-full p-5 rounded-2xl border-2 border-slate-100 hover:border-[#CBA135] hover:bg-amber-50/30 text-left transition-all flex items-center justify-between group"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-[#CBA135] transition-colors">
                                                                <IconComponent size={20} />
                                                            </div>
                                                            <span className="font-bold text-slate-700">{opt.label}</span>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-[#CBA135] flex items-center justify-center">
                                                            <div className="w-3 h-3 bg-[#CBA135] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-12 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#CBA135] transition-all duration-500"
                                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}

                                {step === 'result' && result && (
                                    <div className="py-2 text-center">
                                        <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-[#165D3F] text-xs font-bold uppercase tracking-widest mb-4">
                                            Recommended Structure
                                        </div>
                                        <h2 className="text-3xl font-black mb-4" style={{ color: result.color }}>
                                            {result.type}
                                        </h2>
                                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8 text-center">
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {result.reason}
                                            </p>
                                            <div className="flex items-start gap-3 text-left p-3 bg-white rounded-xl border border-emerald-50">
                                                <AlertTriangle size={18} className="text-[#CBA135] flex-shrink-0 mt-0.5" />
                                                <p className="text-[11px] font-bold text-slate-500 italic uppercase tracking-tighter">
                                                    {result.riskNote}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <button
                                                onClick={() => setIsConsultModalOpen(true)}
                                                className="w-full bg-[#165D3F] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-emerald-900 transition-all cursor-pointer"
                                            >
                                                <Calendar size={20} /> Book Free Setup Audit
                                            </button>
                                            <button
                                                onClick={resetQuiz}
                                                className="w-full py-4 text-slate-400 font-bold text-sm flex items-center justify-center gap-2 hover:text-slate-600 transition-colors"
                                            >
                                                <RefreshCcw size={16} /> Retake Quiz
                                            </button>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                                            <CheckCircle2 size={14} className="text-[#CBA135]" />
                                            Certified Expert Guidance by Globaton
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Portal>
            )}

            {/* Consultation Form Modal */}
            {isConsultModalOpen && result && (
                <Portal>
                    <div
                        className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsConsultModalOpen(false);
                        }}
                    >
                        <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                            {/* Close button */}
                            <button
                                onClick={() => setIsConsultModalOpen(false)}
                                className="absolute top-6 right-6 z-10 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
                                <div className="mb-6 text-center">
                                    <h1 className="text-2xl font-black text-[#165D3F] mb-2 uppercase tracking-tight">
                                        Book Your Audit
                                    </h1>
                                    <p className="text-slate-500 text-sm">
                                        Ready to set up your <span className="text-[#165D3F] font-bold">{result.type}</span>? Fill the form below.
                                    </p>
                                </div>
                                <ConsultationForm
                                    source="Structure Matchmaker Result Popup"
                                    prefilledService={result.type}
                                    onSuccess={() => {
                                        setIsConsultModalOpen(false);
                                        setIsModalOpen(false);
                                        resetQuiz();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};


export default StructureMatchmaker;
