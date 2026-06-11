"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, MapPin, Users, Award, Shield } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  x: number; // Percentage coordinate for SVG placement
  y: number;
  riders: string;
  vendors: string;
  avgTime: string;
}

const globalHubs: Hub[] = [
  { id: "ny", name: "New York Hub", x: 28, y: 35, riders: "4,200+", vendors: "1,500+", avgTime: "14m" },
  { id: "ldn", name: "London Hub", x: 48, y: 25, riders: "3,800+", vendors: "1,200+", avgTime: "16m" },
  { id: "prs", name: "Paris Hub", x: 50, y: 28, riders: "2,900+", vendors: "800+", avgTime: "15m" },
  { id: "dxb", name: "Dubai Hub", x: 62, y: 45, riders: "5,400+", vendors: "1,900+", avgTime: "11m" },
  { id: "tky", name: "Tokyo Hub", x: 84, y: 36, riders: "6,200+", vendors: "2,400+", avgTime: "12m" },
  { id: "sp", name: "São Paulo Hub", x: 36, y: 72, riders: "1,800+", vendors: "600+", avgTime: "19m" },
  { id: "ct", name: "Cape Town Hub", x: 53, y: 80, riders: "1,200+", vendors: "450+", avgTime: "18m" },
  { id: "syd", name: "Sydney Hub", x: 90, y: 82, riders: "2,500+", vendors: "900+", avgTime: "17m" },
];

export default function GlobeScene() {
  const [hoveredHub, setHoveredHub] = useState<Hub | null>(null);

  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px] relative flex flex-col justify-between items-center p-4">
      {/* Top Banner Toolbar */}
      <div className="w-full flex justify-between items-center flex-shrink-0 mb-4 px-2">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-primary animate-spin-slow" />
          Global Fleet & Coverage Map
        </span>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
          180+ Cities Active
        </span>
      </div>

      {/* SVG Interactive Map Canvas */}
      <div className="flex-grow w-full relative bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-inner flex items-center justify-center overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        <svg className="w-full h-full max-h-[300px] text-slate-200" viewBox="0 0 1000 500" fill="none">
          {/* Stylized vector map outlines representing world continents */}
          {/* North America */}
          <path d="M 50,50 L 250,50 L 300,120 L 200,200 L 150,220 L 120,180 L 160,150 L 100,100 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          {/* South America */}
          <path d="M 220,220 L 300,230 L 350,300 L 280,420 L 250,450 L 220,380 L 200,300 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          {/* Europe */}
          <path d="M 420,80 L 520,70 L 560,120 L 500,180 L 440,160 L 420,100 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          {/* Africa */}
          <path d="M 430,190 L 550,190 L 580,260 L 550,360 L 510,400 L 480,300 L 440,250 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          {/* Asia */}
          <path d="M 540,80 L 850,70 L 900,200 L 780,300 L 700,280 L 600,240 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
          {/* Australia */}
          <path d="M 800,320 L 880,330 L 920,380 L 860,420 L 810,380 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

          {/* Logistics Corridor lines linking hubs */}
          <path d="M 280,175 Q 380,100 480,125" stroke="#CC5500" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" opacity="0.6" />
          <path d="M 480,125 Q 550,160 620,225" stroke="#CC5500" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" opacity="0.6" />
          <path d="M 620,225 Q 730,200 840,180" stroke="#CC5500" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" opacity="0.6" />
          <path d="M 280,175 Q 320,260 360,360" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.5" />
          <path d="M 620,225 Q 570,300 530,400" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.5" />
          <path d="M 840,180 Q 870,300 900,410" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.5" />

          {/* Pulse points along the active corridors */}
          <circle cx="380" cy="120" r="3" fill="#CC5500" className="animate-ping" />
          <circle cx="730" cy="205" r="3" fill="#CC5500" className="animate-ping" />
        </svg>

        {/* Dynamic Beacons / Pins placement */}
        {globalHubs.map((hub) => (
          <div
            key={hub.id}
            style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
            onMouseEnter={() => setHoveredHub(hub)}
            onMouseLeave={() => setHoveredHub(null)}
          >
            <span className="relative flex h-4 w-4 justify-center items-center">
              {/* Pulsing ring */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary group-hover:scale-125 transition-transform"></span>
            </span>
          </div>
        ))}

        {/* Hover Tooltip display popup */}
        <AnimatePresence>
          {hoveredHub && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 mx-auto bg-slate-900 border border-slate-800 text-white rounded-2xl p-4 w-64 shadow-xl flex flex-col gap-2.5 z-30"
            >
              <div className="flex gap-1.5 items-center border-b border-white/10 pb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">{hoveredHub.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="flex flex-col">
                  <span className="text-white/40 uppercase font-semibold">RIDERS</span>
                  <span className="font-bold font-mono text-white mt-0.5">{hoveredHub.riders}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 uppercase font-semibold">PARTNERS</span>
                  <span className="font-bold font-mono text-white mt-0.5">{hoveredHub.vendors}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 uppercase font-semibold">AVG ETA</span>
                  <span className="font-bold font-mono text-primary mt-0.5">{hoveredHub.avgTime}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom info metrics dashboard details */}
      <div className="w-full grid grid-cols-3 gap-3 mt-4 text-center">
        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex flex-col items-center gap-1 shadow-sm">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-[9px] text-slate-400 uppercase font-bold">Total Dispatches</span>
          <span className="text-xs font-black text-slate-800">12,409 / hour</span>
        </div>
        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex flex-col items-center gap-1 shadow-sm">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-[9px] text-slate-400 uppercase font-bold">On-Time Rating</span>
          <span className="text-xs font-black text-slate-800">99.8% Success</span>
        </div>
        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 flex flex-col items-center gap-1 shadow-sm">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-[9px] text-slate-400 uppercase font-bold">Insurance coverage</span>
          <span className="text-xs font-black text-slate-800">Fully Protected</span>
        </div>
      </div>
    </div>
  );
}
