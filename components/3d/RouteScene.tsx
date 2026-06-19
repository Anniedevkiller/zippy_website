"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Store, Home, Compass } from "lucide-react";

export default function RouteScene() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto progression of delivery state checks
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stepsInfo = [
    { title: "Dispatch Booked", desc: "Rider accepts package booking." },
    { title: "Package Collected", desc: "Rider secures parcel at pickup." },
    { title: "Transit Corridor", desc: "Express delivery routing in Umuahia." },
    { title: "Delivered & Signed", desc: "Safe handoff with customer signature." }
  ];

  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px] relative flex flex-col justify-between items-center p-4">
      {/* Top Console bar */}
      <div className="w-full flex justify-between items-center flex-shrink-0 mb-4 px-2">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-primary animate-spin-slow" />
          Active Route Dispatch Simulator
        </span>
        <span className="text-[10px] text-slate-400 font-bold uppercase font-mono tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
          Chained dispatch
        </span>
      </div>

      {/* SVG City Street map */}
      <div className="flex-grow w-full relative bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-inner flex items-center justify-center overflow-hidden">
        
        {/* Subtle grid base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

        <svg className="w-full h-full max-h-[280px]" viewBox="0 0 400 250" fill="none">
          {/* Simulated Street Grid Blocks (Light gray blocks representing buildings) */}
          <rect x="20" y="20" width="80" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="120" y="20" width="160" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="300" y="20" width="80" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

          <rect x="20" y="100" width="120" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="160" y="100" width="80" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="260" y="100" width="120" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

          <rect x="20" y="180" width="160" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="200" y="180" width="180" height="50" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

          {/* Glowing Winding Street Path */}
          <path
            d="M 60,90 L 110,90 L 110,170 L 250,170 L 250,90 L 290,90"
            stroke="#e2e8f0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.path
            d="M 60,90 L 110,90 L 110,170 L 250,170 L 250,90 L 290,90"
            stroke="#CC5500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Starting Restaurant Hub Node */}
          <circle cx="60" cy="90" r="14" fill="#10b981" />
          <path d="M 56,86 L 64,86 L 64,94 L 56,94 Z" fill="white" />
          <circle cx="60" cy="90" r="22" fill="none" stroke="#10b981" strokeWidth="1.5" className="animate-pulse" opacity="0.4" />

          {/* Destination House Node */}
          <circle cx="290" cy="90" r="14" fill="#CC5500" />
          <path d="M 285,93 L 290,87 L 295,93 Z" fill="white" />
          <rect x="287" y="93" width="6" height="4" fill="white" />
          <circle cx="290" cy="90" r="22" fill="none" stroke="#CC5500" strokeWidth="1.5" className="animate-pulse" opacity="0.4" />

          {/* Moving Courier Scooter Icon */}
          <motion.g
            initial={{ offset: 0 }}
            animate={{ offset: 1 }}
            style={{
              offsetPath: "path('M 60,90 L 110,90 L 110,170 L 250,170 L 250,90 L 290,90')",
              offsetRotate: "auto",
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Scooter representation circle */}
            <circle cx="0" cy="0" r="7" fill="#ffffff" stroke="#CC5500" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="2.5" fill="#CC5500" />
          </motion.g>
        </svg>

        {/* Small floating overlays detailing endpoints */}
        <div className="absolute top-8 left-8 p-1.5 bg-white border border-slate-200 rounded-lg flex items-center gap-1.5 text-[8px] font-bold text-slate-600 shadow-sm">
          <Store className="w-3 h-3 text-emerald-500" />
          <span>Pickup: 41 School Road</span>
        </div>

        <div className="absolute bottom-8 right-8 p-1.5 bg-white border border-slate-200 rounded-lg flex items-center gap-1.5 text-[8px] font-bold text-slate-600 shadow-sm">
          <Home className="w-3 h-3 text-primary" />
          <span>Drop-off: Aba Road, Umuahia</span>
        </div>
      </div>

      {/* Steps checklist display */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-center">
        {stepsInfo.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <div
              key={idx}
              className={`border rounded-xl p-2.5 flex flex-col gap-1 transition-all duration-300 ${
                isActive 
                  ? "bg-primary/5 border-primary/20 shadow-sm" 
                  : "bg-slate-50 border-slate-200/50 opacity-60"
              }`}
            >
              <span className={`text-[9px] font-black uppercase tracking-wider ${
                isActive ? "text-primary" : "text-slate-500"
              }`}>
                {step.title}
              </span>
              <span className="text-[8px] text-slate-400 leading-snug">{step.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
