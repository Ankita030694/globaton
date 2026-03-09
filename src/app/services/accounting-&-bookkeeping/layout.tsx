import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Accounting & Bookkeeping Services",
    description: "Professional accounting and bookkeeping services for startups and small businesses in India. Maintain accurate financial records and stay compliant.",
    keywords: "accounting services, bookkeeping for startups, financial record keeping, small business accounting",
};

export default function AccountingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
