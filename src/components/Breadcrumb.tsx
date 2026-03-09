'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    // Schema Markup for Rich Results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': items.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.label,
            'item': `${process.env.NEXT_PUBLIC_BASE_URL || 'https://globaton.com'}${item.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav className="flex px-4 py-4 text-gray-500 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                            {index === items.length - 1 ? (
                                <span className="text-emerald-700 font-medium truncate max-w-[200px] md:max-w-none">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-emerald-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;
