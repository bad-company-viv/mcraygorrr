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
  title: "McRAYGOR - Sewer Cleaning Equipment Manufacturer",
  description: "India's leading manufacturer of sewer cleaning equipment since 2000.",
  icons: {
    icon: "/images/favicon.jpeg",
    shortcut: "/favicon.ico",
    apple: "/images/favicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
