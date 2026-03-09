'use client';

import React from 'react';

interface TOCItem {
    id: string;
    label: string;
}

interface TOCProps {
    items: TOCItem[];
}

const TOC: React.FC<TOCProps> = ({ items }) => {
    return (
        <aside className="sticky top-24 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 hidden lg:block">
            <h4 className="text-[#165D3F] font-bold uppercase tracking-wider text-xs mb-6">
                Table of Contents
            </h4>
            <nav>
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className="text-slate-600 hover:text-emerald-700 text-sm transition-colors border-l-2 border-transparent hover:border-emerald-500 pl-4 block"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default TOC;
