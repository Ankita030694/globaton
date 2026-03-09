import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Package Details",
    description: "View detailed information about our service packages. Find the right plan that fits your business needs and budget.",
};

export default function PackageDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
