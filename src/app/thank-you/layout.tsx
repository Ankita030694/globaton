import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Thank You",
    description: "Thank you for your submission. Our experts will get back to you shortly.",
    robots: "noindex, nofollow",
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
