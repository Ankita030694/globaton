import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Read the Terms and Conditions for using Globaton's services. Understand your rights and responsibilities when engaging with our platform.",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
