import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "GST Notice Response Services",
    description: "Expert assistance in responding to GST notices. Our legal team helps you navigate GST departmental inquiries and ensure proper representation.",
    keywords: "gst notice, gst department notice response, gst legal help, tax notice assistance",
};

export default function GSTNoticeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
