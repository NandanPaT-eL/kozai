import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kozai — AI Invoice Processing for Australian Accounting Firms",
  description: "Kozai automates invoice ingestion, OCR extraction, GST validation, approval workflows, and Xero sync for Australian SMBs and accounting firms. Save 10+ hours per week.",
  keywords: ["invoice processing Australia", "AI bookkeeping", "Xero automation", "GST compliance", "accounts payable software Australia", "accounting firm software"],
  authors: [{ name: "Kozai Pty Ltd" }],
  creator: "Kozai",
  metadataBase: new URL("https://kozai.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://kozai.com.au",
    title: "Kozai — AI Invoice Processing for Australian Accounting Firms",
    description: "Automate invoice processing, GST validation, and Xero sync with AI built for Australia.",
    siteName: "Kozai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kozai AI Financial Operations Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kozai — AI Invoice Processing",
    description: "AI-native invoice ops for Australian accounting firms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kozai",
              url: "https://kozai.com.au",
              logo: "https://kozai.com.au/logo.png",
              description: "AI-powered financial operations for Australian accounting firms and SMBs.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AU",
              },
              sameAs: [
                "https://linkedin.com/company/kozai",
                "https://twitter.com/kozai",
                "https://github.com/kozai",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
