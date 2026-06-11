"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Package, Bike, Store, Globe } from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  targetValue: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { icon: Package, targetValue: 5.4, suffix: "M+", label: "Orders Delivered" },
  { icon: Bike, targetValue: 12.5, suffix: "K+", label: "Active Riders" },
  { icon: Store, targetValue: 4.2, suffix: "K+", label: "Partner Vendors" },
  { icon: Globe, targetValue: 180, suffix: "+", label: "Cities Served" },
];

function CountUpItem({ icon: Icon, targetValue, suffix, label }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100/50 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary/20 hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/3 rounded-full blur-2xl pointer-events-none" />
      
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 animate-float-slow group-hover:scale-105 transition-transform">
        <Icon className="w-6 h-6" />
      </div>

      <span className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 font-mono tracking-tight mb-2">
        {count}
        <span className="text-primary">{suffix}</span>
      </span>

      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#f8fafc] py-16 relative overflow-hidden border-y border-slate-200/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, idx) => (
            <CountUpItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
