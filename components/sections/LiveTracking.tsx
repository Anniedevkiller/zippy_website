"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Compass, Clock, MapPin, Star, Phone, MessageSquare } from "lucide-react";

const RouteScene = dynamic(() => import("../3d/RouteScene"), {
  ssr: false,
  loading: () => <RouteFallback />,
});

function RouteFallback() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px] flex items-center justify-center relative bg-slate-100 rounded-2xl border border-slate-200/60 shadow-inner">
      <div className="absolute w-[200px] h-[200px] rounded-full bg-primary/5 blur-[80px] animate-pulse" />
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
          Loading Vector Map
        </span>
      </div>
    </div>
  );
}

export default function LiveTracking() {
  const [eta, setEta] = useState(480);

  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 10 ? prev - 1 : 480));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatEta = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section id="live-map" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Active Operations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Real-Time Tracking Showcase
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Witness how Zippy Trail tracks shipments in real-time. Our routing engine coordinates rider locations with topological street meshes.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side Status dashboard */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Status Panel Header */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Active Delivery
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                    Order #ZT-98762
                  </h3>
                </div>
                <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary animate-pulse">
                  On the Way
                </div>
              </div>

              {/* Countdown metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-bold">
                      ETA Arriving
                    </span>
                    <span className="text-base font-black text-slate-800 font-mono">
                      {formatEta(eta)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-bold">
                      Distance
                    </span>
                    <span className="text-base font-black text-slate-800 font-mono">
                      1.4 miles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Timeline Dashboard */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex-grow flex flex-col gap-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Delivery Progression
              </h4>
              
              <div className="flex flex-col gap-5 relative pl-4">
                {/* Connection line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200" />
                <div className="absolute left-[7px] top-2 h-[55%] w-0.5 bg-primary shadow-[0_0_4px_rgba(204,85,0,0.3)]" />

                {/* Step 1: Placed */}
                <div className="flex items-center gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-slate-50 z-10" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Order Confirmed</span>
                    <span className="text-[10px] text-slate-500 font-medium">17:54 - Kitchen claimed ticket</span>
                  </div>
                </div>

                {/* Step 2: Cooked */}
                <div className="flex items-center gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-slate-50 z-10" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Prepared & Dispatched</span>
                    <span className="text-[10px] text-slate-500 font-medium">17:59 - Handoff complete</span>
                  </div>
                </div>

                {/* Step 3: Transit */}
                <div className="flex items-center gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-slate-50 z-10 animate-ping absolute -left-0.5" />
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-slate-50 z-10" />
                  <div>
                    <span className="text-xs font-bold text-primary block">Out for Delivery</span>
                    <span className="text-[10px] text-slate-500 font-medium">En route to your location</span>
                  </div>
                </div>

                {/* Step 4: End */}
                <div className="flex items-center gap-3 relative">
                  <div className="w-4 h-4 rounded-full bg-slate-200 border-4 border-slate-50 z-10" />
                  <div>
                    <span className="text-xs font-bold text-slate-400 block">Arrived & Completed</span>
                    <span className="text-[10px] text-slate-400 font-medium">Awaiting signature check</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rider profile widget */}
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  MV
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Marcus Vance</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                    <span className="text-[11px] font-bold text-slate-800">4.9</span>
                    <span className="text-[10px] text-slate-500"> &bull; Electric Scooter</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => alert("Simulating phone call to rider Marcus...")}
                  className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-primary transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                </button>
                <button
                  onClick={() => alert("Opening chat with rider Marcus...")}
                  className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-primary transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: 3D map */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between overflow-hidden min-h-[400px] shadow-sm">
            <div className="flex justify-between items-center mb-4 px-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Interactive Route Simulator
              </span>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block">
                SYS_VER_4.9 // CAMERA_ROTATION_LOCKED
              </span>
            </div>

            <div className="flex-grow rounded-xl bg-slate-100/60 overflow-hidden relative border border-slate-200/40 shadow-inner">
              <RouteScene />
              
              <div className="absolute bottom-4 left-4 p-3 bg-white border border-slate-200 rounded-lg flex flex-col gap-1 z-10 text-[10px] text-slate-500 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Restaurant Hub (Start)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span>Interactive Drone Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span>Client Residence (End)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
