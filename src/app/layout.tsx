import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FacebookPixel from "@/components/layout/FacebookPixel";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  metadataBase: new URL('https://nextpathglobal.bd'),
  title: {
    default: "Next Path Global | Study Abroad, Immigration & Visa Consulting in Bangladesh",
    template: "%s | Next Path Global",
  },
  alternates: {
    canonical: 'https://nextpathglobal.bd',
  },
  description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
  keywords: [
    "study abroad Bangladesh", "visa consultant Dhaka", "study in Malaysia from Bangladesh",
    "Malaysia student visa Bangladesh", "MM2H", "PVIP", "tourist visa Bangladesh",
    "Europe work permit Bangladesh", "Employment Pass Malaysia", "education consultant Dhaka",
    "NextPath Global Bangladesh", "Next Paath Global", "immigration consultant Bangladesh"
  ],
  authors: [{ name: "NextPath Global Sdn Bhd" }],
  creator: "NextPath Global Sdn Bhd",
  publisher: "NextPath Global Sdn Bhd",
  openGraph: {
    title: "Next Path Global | Study Abroad, Immigration & Visa Consulting in Bangladesh",
    description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
    url: "https://nextpathglobal.bd",
    siteName: "Next Path Global",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next Path Global - Immigration & Visa Consulting",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Path Global | Study Abroad, Immigration & Visa Consulting in Bangladesh",
    description: "Trusted partner for education, immigration, and visa services — providing expert guidance and full support to help students, professionals, and travellers achieve their global goals",
    images: ["/og-image.png"],
    creator: "@nextpathglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code", // User should replace with actual code
    other: {
      'agd-partner-manual-verification': '',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <FacebookPixel />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
