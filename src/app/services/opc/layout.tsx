import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "One Person Company (OPC) Registration",
    description: "Register your One Person Company (OPC) in India. Enjoy the benefits of a corporate structure with just one member. Perfect for solo entrepreneurs.",
    keywords: "opc registration, one person company, startup registration, solo founder india",
};

export default function OPCLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
