import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Registration Form",
    description: "Fill out the registration form to get started with your service. Provide the necessary details for our experts to assist you.",
    robots: "noindex, nofollow",
};

export default function FormLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
