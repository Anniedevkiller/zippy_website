"use client";

import React from "react";
import { Shield, Zap, Box, Compass, Globe, Milestone } from "lucide-react";

interface Logo {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

const partnerLogos: Logo[] = [
  { icon: Box, name: "VeloCargo" },
  { icon: Zap, name: "SwiftFleet" },
  { icon: Shield, name: "SecureDrop" },
  { icon: Compass, name: "UrbanTransit" },
  { icon: Globe, name: "QuantumLog" },
  { icon: Milestone, name: "RouteHub" },
];

export default function TrustedBy() {
  const doubleLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white py-10 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          Powering Logistics For Modern Industry Leaders
        </p>
      </div>

      <div className="relative flex w-full overflow-x-hidden marquee-mask">
        <div className="flex gap-16 py-2 animate-infinite-scroll whitespace-nowrap min-w-full">
          {doubleLogos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-400 hover:text-primary transition-colors duration-300"
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-bold uppercase tracking-wider">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
