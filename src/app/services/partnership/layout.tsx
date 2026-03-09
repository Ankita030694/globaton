import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Partnership Firm Registration",
    description: "Register your Partnership Firm in India. Collaborate with partners in a simple, legally recognized business structure with expert document preparation.",
    keywords: "partnership registration, partnership deed, business partnership india, partnership firm setup",
};

export default function PartnershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
