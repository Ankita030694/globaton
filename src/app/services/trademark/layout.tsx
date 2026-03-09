import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trademark Registration Services",
    description: "Protect your brand with trademark registration. Get expert assistance in trademark search, filing, and response to objections in India.",
    keywords: "trademark registration, brand protection, trademark search india, logo registration",
};

export default function TrademarkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
