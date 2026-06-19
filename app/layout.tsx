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
  title: "ZippyTrail | Courier, Transport & Logistics Services",
  description: "ZippyTrail Transport & Logistics provides swift, safe, and reliable movement of people, parcels, documents, and business deliveries across Abia State and beyond.",
  keywords: [
    "delivery",
    "logistics",
    "express courier",
    "courier services",
    "passenger transport",
    "package shipping",
    "Umuahia",
    "Abia State",
    "ZippyTrail",
    "last mile delivery",
  ],
  authors: [{ name: "ZippyTrail Transport & Logistics" }],
  openGraph: {
    title: "ZippyTrail | Transport & Logistics",
    description: "Swift, safe, and reliable movement of people, parcels, documents, and business deliveries across Abia State and beyond. Zippy. Swift. Reliable. Safe.",
    type: "website",
    locale: "en_US",
    siteName: "ZippyTrail",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZippyTrail | Courier, Transport & Logistics Services",
    description: "Your trusted partner for courier, transport, and logistics services. Fast pickups, safe deliveries, reliable transportation.",
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
