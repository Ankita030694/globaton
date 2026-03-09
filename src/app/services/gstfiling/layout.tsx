import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "GST Filing Services",
    description: "Hassle-free GST return filing services. Stay compliant with GST laws and avoid penalties with our expert tax filing assistance.",
    keywords: "gst filing, gst returns, gstr filing, tax compliance service",
};

export default function GSTFilingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
