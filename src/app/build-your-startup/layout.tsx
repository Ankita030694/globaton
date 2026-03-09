import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Build Your Startup",
    description: "Start your entrepreneurial journey with Globaton. Get the right guidance and services to build your startup from the ground up.",
};

export default function BuildStartupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
