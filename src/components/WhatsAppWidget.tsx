'use client';

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '9315393217';
const WHATSAPP_MESSAGE = "Hello! I'm interested in Globaton's services and would like to consult with an expert.";
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function WhatsAppWidget() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 group">
            {/* Tooltip/Label */}
            <div className="bg-white/95 text-[#165D3F] px-4 py-2 rounded-2xl text-[13px] font-bold shadow-xl border border-emerald-50 backdrop-blur-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Chat with our experts
            </div>

            {/* WhatsApp Button */}
            <Link
                href={WHATSAPP_URL}
                aria-label="Chat with Globaton on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 active:scale-95 group/btn overflow-hidden relative"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 relative z-10" />
            </Link>
        </div>
    );
}
