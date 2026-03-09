import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Our Privacy Policy outlines how we collect, use, and protect your personal information. Your privacy is important to us at Globaton.",
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
