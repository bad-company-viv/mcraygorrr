import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToHash from "@/shared/ScrollToHash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://beta.mcraygor.com'),
  title: {
    default: "McRAYGOR | India's Top Sewer Cleaning Machine Manufacturer",
    template: "%s | McRAYGOR"
  },
  description: "McRAYGOR is India's leading manufacturer of sewer cleaning machines & jetting units. Trusted global supplier with 25+ years of engineering excellence.",
  keywords: ["sewer cleaning machine", "jetting suction machine", "super sucker", "municipal equipment India", "McRAYGOR", "waste management"],
  authors: [{ name: "McRAYGOR Mechanicals" }],
  creator: "McRAYGOR Mechanicals",
  publisher: "McRAYGOR Mechanicals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://beta.mcraygor.com',
    siteName: 'McRAYGOR Mechanicals',
    title: "McRAYGOR | Sewer Cleaning Equipment Manufacturer",
    description: "World-class sewer cleaning and municipal waste management equipment, engineered for maximum reliability.",
    images: [
      {
        url: '/images/mcraygor-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'McRAYGOR Mechanicals Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "McRAYGOR | Sewer Cleaning Equipment Manufacturer",
    description: "India's leading manufacturer of high-performance sewer cleaning equipment.",
    images: ['/images/mcraygor-logo.jpeg'],
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
    icon: '/images/favicon.jpeg',
    shortcut: '/images/favicon.jpeg',
    apple: '/images/favicon.jpeg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "McRAYGOR Mechanicals Infrastructure",
  "url": "https://beta.mcraygor.com",
  "logo": "https://beta.mcraygor.com/images/mcraygor-logo.jpeg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9812001368",
    "contactType": "sales",
    "areaServed": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/people/Mcraygor-Mechanicals-Haryana/pfbid0qePKjr71ddpkYnJWw5QRedgSsTuDDaP9zeu3np2NKR9ekTK8QhAXT9niszHcjbLQl/",
    "https://x.com/mcraygor",
    "https://www.linkedin.com/in/mcraygor-mechanicals-p-ltd-b82399a3/",
    "https://www.instagram.com/mcraygor"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header logoUrl="/images/mcraygor-logo.jpeg" />
        <main className="pt-[120px] lg:pt-[100px]">
          <ScrollToHash />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
