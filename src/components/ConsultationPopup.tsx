'use client'
import React, { useState, useEffect } from "react";
import ConsultationForm from "./ConsultationForm";

export default function ConsultationPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay when the page loads
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={(e) => {
                if (e.target === e.currentTarget) setIsOpen(false);
            }}
        >
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-colors"
                    aria-label="Close"
                >
                    &times;
                </button>
                <ConsultationForm source="home-popup" onSuccess={() => setIsOpen(false)} />
            </div>
        </div>
    );
}
