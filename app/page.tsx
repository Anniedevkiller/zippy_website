"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import LiveTracking from "@/components/sections/LiveTracking";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import MobileApp from "@/components/sections/MobileApp";
import FAQ from "@/components/sections/FAQ";
import Flyers from "@/components/sections/Flyers";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted By Section */}
      <TrustedBy />

      {/* 2.5. About ZippyTrail Section */}
      <About />

      {/* 3. Services Section */}
      <Services />

      {/* 4. How It Works Section */}
      <HowItWorks />

      {/* 5. Customer, Rider, Vendor Features */}
      <Features />

      {/* 6. Live Tracking Showcase Map */}
      <LiveTracking />

      {/* 7. Statistics Section */}
      <Stats />

      {/* 8. Testimonials Slider */}
      <Testimonials />

      {/* 9. Mobile App Showcase */}
      <MobileApp />

      {/* 10. FAQ Section */}
      <FAQ />

      {/* 10.5. Official Brand Flyers Gallery */}
      <Flyers />

      {/* 11. CTA Conversion Section */}
      <CTA />

      {/* 12. Footer Sitemap */}
      <Footer />
    </main>
  );
}
