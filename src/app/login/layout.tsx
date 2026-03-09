import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login",
    description: "Log in to your Globaton account to manage your services, view leads, and access your dashboard.",
    robots: "noindex, nofollow",
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
