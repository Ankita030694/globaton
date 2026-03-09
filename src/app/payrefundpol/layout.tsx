import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Payment, Refund & Cancellation Policy",
    description: "Read our Payment, Refund, and Cancellation Policy. Understand the terms regarding payments, service refunds, and project cancellations at Globaton.",
};

export default function PaymentPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
