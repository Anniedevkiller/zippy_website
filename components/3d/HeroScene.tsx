"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Shield, Clock, Compass, BarChart, Server, Activity } from "lucide-react";

export default function HeroScene() {
  const [activeTab, setActiveTab] = useState("map");
  const [pulse, setPulse] = useState(true);

  // Toggle active animations
  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => !p);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative min-h-[400px] md:min-h-[500px] flex items-center justify-center p-4">
      {/* Glow background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Premium Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg bg-white border border-slate-200 shadow-xl shadow-slate-100 rounded-3xl overflow-hidden flex flex-col h-[420px] relative z-10"
      >
        {/* Terminal Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Green status ping */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-700 tracking-wide uppercase font-mono">
              ZippyTrail Dispatch Console
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="flex-grow flex p-6 gap-6 overflow-hidden">
          
          {/* Left Panel: Active Dispatches */}
          <div className="w-2/5 flex flex-col gap-4 overflow-y-auto pr-1">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
              Active Dispatches
            </h4>
            
            <div className="flex flex-col gap-2.5">
              {/* Order Item 1 */}
              <div className="bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl flex flex-col gap-1 shadow-sm">
                <span className="text-[9px] font-bold text-slate-800 font-mono">Order #ZT-9182</span>
                <span className="text-[8px] text-primary font-bold uppercase tracking-wider">EN ROUTE (Aba Road)</span>
              </div>
              
              {/* Order Item 2 */}
              <div className="bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl flex flex-col gap-1 opacity-85 shadow-sm">
                <span className="text-[9px] font-bold text-slate-800 font-mono">Order #ZT-9181</span>
                <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-wider">TRANSIT (Ikwuano)</span>
              </div>

              {/* Order Item 3 */}
              <div className="bg-slate-50 border border-slate-200/60 p-2.5 rounded-xl flex flex-col gap-1 opacity-60 shadow-sm">
                <span className="text-[9px] font-bold text-slate-800 font-mono">Order #ZT-9180</span>
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">ASSIGNED (Bende)</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Map view or metrics */}
          <div className="w-3/5 flex flex-col justify-between relative bg-slate-50 border border-slate-200/80 rounded-2xl p-4 overflow-hidden shadow-inner">
            
            {/* Grid background representation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />

            {/* Simulated Vector Delivery Route map */}
            <div className="relative w-full h-[180px] flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 150">
                {/* Curved route line */}
                <path
                  d="M 30,120 Q 80,30 170,80"
                  fill="transparent"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <motion.path
                  d="M 30,120 Q 80,30 170,80"
                  fill="transparent"
                  stroke="#CC5500"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Start Node */}
                <circle cx="30" cy="120" r="5" fill="#10b981" />
                <circle cx="30" cy="120" r="10" fill="none" stroke="#10b981" strokeWidth="1.5" className="animate-pulse" />

                {/* Target Node */}
                <circle cx="170" cy="80" r="5" fill="#CC5500" />
                <circle cx="170" cy="80" r="10" fill="none" stroke="#CC5500" strokeWidth="1.5" className="animate-pulse" />
                
                {/* Moving Courier Icon */}
                <motion.circle
                  r="4"
                  fill="#ffffff"
                  stroke="#CC5500"
                  strokeWidth="2"
                  initial={{ offset: 0 }}
                  animate={{ offset: 1 }}
                  style={{
                    // Animate coordinates using SVG motion paths if possible
                    offsetPath: "path('M 30,120 Q 80,30 170,80')",
                    offsetRotate: "auto",
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              <div className="absolute bottom-2 left-2 flex gap-1.5 items-center bg-white px-2 py-1 border border-slate-200 rounded-lg text-[8px] font-bold text-slate-600 shadow-sm">
                <Clock className="w-2.5 h-2.5 text-primary" />
                <span>Chinedu (Motorcycle) - 4 mins remaining</span>
              </div>
            </div>

            {/* Performance charts widget */}
            <div className="bg-white border border-slate-200 p-2.5 rounded-xl flex items-center justify-between text-[9px] shadow-sm">
              <div className="flex gap-2 items-center">
                <BarChart className="w-3.5 h-3.5 text-primary" />
                <div>
                  <span className="text-slate-400 block font-bold">AVG DISPATCH</span>
                  <span className="font-bold text-slate-800">14.2 mins &bull; Optimized</span>
                </div>
              </div>
              <div className="w-12 h-6 flex gap-0.5 items-end">
                <div className="bg-primary/20 w-2.5 h-2 rounded" />
                <div className="bg-primary/30 w-2.5 h-4 rounded" />
                <div className="bg-primary/60 w-2.5 h-3 rounded" />
                <div className="bg-primary w-2.5 h-5 rounded" />
              </div>
            </div>

          </div>
        </div>

        {/* Status bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-between items-center text-[9px] text-slate-500 font-semibold flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-primary" />
            <span>Routing Node: Umuahia Central Hub</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>System Status: Online</span>
          </div>
        </div>
      </motion.div>

      {/* Outer Floating UI badges for depth */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 md:left-2 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-lg z-20 text-xs font-extrabold text-slate-800"
      >
        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
          ⚡
        </div>
        <span>Avg Speed: 18m</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 md:right-2 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-lg z-20 text-xs font-extrabold text-slate-800"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
          ✓
        </div>
        <span>100% Insured</span>
      </motion.div>
    </div>
  );
}
