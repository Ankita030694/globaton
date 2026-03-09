'use client';

import React from 'react';
import Link from 'next/link';

interface PageLink {
    label: string;
    href: string;
}

const RelatedPages: React.FC = () => {
    const relatedLinks: PageLink[] = [
        { label: 'Private Limited Registration', href: '/services/pvltd' },
        { label: 'One Person Company', href: '/services/opc' },
        { label: 'LLP Registration', href: '/services/llp' },
        { label: 'Partnership Firm', href: '/services/partnership' },
        { label: 'Trademark Registration', href: '/services/trademark' },
    ];

    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mt-8">
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">
                Related Services
            </h4>
            <ul className="space-y-4">
                {relatedLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="text-slate-600 hover:text-emerald-700 text-sm transition-colors flex items-center group"
                        >
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedPages;
