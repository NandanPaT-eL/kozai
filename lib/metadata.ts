import { Metadata } from "next";

export const siteMetadata: Metadata = {
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
