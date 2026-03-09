import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "GST Registration Services",
    description: "Quick and easy GST registration for your business. Get your GSTIN with expert guidance and ensuring 100% legal compliance.",
    keywords: "gst registration, gst number, gst portal, business tax registration",
};

export default function GSTLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
