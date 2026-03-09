import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Payment Successful",
    description: "Your payment has been successfully processed. Thank you for choosing Globaton for your business compliance needs.",
    robots: "noindex, nofollow",
};

export default function PaySuccessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
