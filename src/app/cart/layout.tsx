import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Your Cart",
    description: "Review the services in your cart before proceeding to checkout. Ensure you have everything you need to start your business registration.",
    robots: "noindex, nofollow",
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
