import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zippy Trail | Deliver Faster. Move Smarter.",
  description: "Zippy Trail is a premium delivery and logistics platform providing food delivery, package logistics, and express parcel shipping across 180+ cities.",
  keywords: [
    "delivery",
    "logistics",
    "express courier",
    "food delivery",
    "package shipping",
    "route optimization",
    "Zippy Trail",
    "last mile delivery",
  ],
  authors: [{ name: "Zippy Trail Technologies" }],
  openGraph: {
    title: "Zippy Trail | On-Demand Delivery & Logistics",
    description: "Experience lightning-fast package routing and food delivery powered by advanced logistics algorithms.",
    type: "website",
    locale: "en_US",
    siteName: "Zippy Trail",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zippy Trail | Deliver Faster. Move Smarter.",
    description: "Food delivery and package logistics made simple.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#0c0c0e] text-[#f5f5f5]`}
      >
        <div id="root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
