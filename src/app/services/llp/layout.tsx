import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Limited Liability Partnership (LLP) Registration",
    description: "Register your Limited Liability Partnership (LLP) in India. Combine the benefits of a partnership with the protection of limited liability.",
    keywords: "llp registration, limited liability partnership, startup registration india, partnership firm",
};

export default function LLPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
