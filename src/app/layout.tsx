import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Globaton | Expert Management Advisors & Startup Registration",
    template: "%s | Globaton"
  },
  description: "Globaton is a leading management advisory firm in India, specializing in company registration, legal compliance, and tax services for startups and entrepreneurs.",
  keywords: "startup registration, company incorporation, legal services India, tax compliance, management advisors, sole proprietorship registration, pvt ltd company formation, trademark registration",
  authors: [{ name: "Globaton Team" }],
  creator: "Globaton",
  publisher: "Globaton",
  robots: "index, follow",
  openGraph: {
    title: "Globaton | Expert Management Advisors & Startup Registration",
    description: "Globaton is a leading management advisory firm in India, specializing in company registration, legal compliance, and tax services for startups and entrepreneurs.",
    url: "https://www.globaton.in",
    siteName: "Globaton",
    locale: "en_IN",
    type: "website",
  },
};

import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=925294633682116&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
        {children}
        <WhatsAppWidget />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '925294633682116');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
