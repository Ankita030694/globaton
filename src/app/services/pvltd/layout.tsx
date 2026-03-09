import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Private Limited Company Registration",
    description: "Register your Private Limited Company (Pvt Ltd) in India. Get limited liability protection, credible business structure, and expert assistance for your startup.",
    keywords: "private limited company registration, pvt ltd incorporation, company registration india, startup formation",
};

export default function PvtLtdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
