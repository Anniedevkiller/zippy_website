"use client";

import React, { useState } from "react";
import { Apple, Play, Check } from "lucide-react";

interface AppFeature {
  title: string;
  description: string;
}

interface AppSection {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: AppFeature[];
  screenContent: React.ReactNode;
}

export default function MobileApp() {
  const [activeApp, setActiveApp] = useState("customer");

  const apps: AppSection[] = [
    {
      id: "customer",
      badge: "Customer Portal",
      title: "Zippy Trail App",
      description: "Order delicious food from local partners or ship items across the country. Fast, reliable, and trackable down to the second.",
      features: [
        { title: "One-Tap Reorder", description: "Save your favorite meals and reorder in under 5 seconds." },
        { title: "Split-Bill Logistics", description: "Order from multiple stores and pay together in one check." },
        { title: "Contactless Lockers", description: "Deliver safely to community smart lockers with OTP keys." }
      ],
      screenContent: (
        <div className="w-full h-full bg-[#0d0d10] p-4 flex flex-col justify-between text-left select-none text-xs">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-[10px] text-charcoal-muted block">Good evening</span>
              <span className="font-extrabold text-white text-sm font-sans">Hi, Alex! 👋</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">A</div>
          </div>
          <div className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[10px] text-charcoal-muted mb-4 flex items-center gap-2">
            <span>What are you craving?</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 rounded-xl p-3 flex flex-col justify-between h-20">
              <span className="font-bold text-white text-[11px] font-sans">Food Delivery</span>
              <span className="text-[9px] text-primary/80">Order Now &rarr;</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-between h-20">
              <span className="font-bold text-white text-[11px] font-sans">Send Package</span>
              <span className="text-[9px] text-charcoal-muted">Book Dispatch &rarr;</span>
            </div>
          </div>
          <div className="bg-[#16161c] border border-white/10 rounded-xl p-3 flex-grow flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] text-primary font-extrabold uppercase tracking-wide">Active Track</span>
                <h5 className="font-bold text-white text-[11px] mt-0.5 font-sans">Burger Lounge</h5>
              </div>
              <span className="text-[10px] font-bold text-white/80 font-mono bg-white/5 px-1.5 py-0.5 rounded">4m left</span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-primary rounded-full" />
              </div>
              <span className="text-[8px] text-charcoal-muted mt-1 block">Rider Marcus is approaching...</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "rider",
      badge: "Rider Hub",
      title: "Zippy Rider App",
      description: "Manage shifts on the fly. Log in to claim high-multiplier orders, track tips, and cash out earnings daily.",
      features: [
        { title: "Heat Maps", description: "Navigate directly to high-demand areas to lock down high order values." },
        { title: "Dynamic Multipliers", description: "Receive active bonus earnings during peak dining hours and rain storms." },
        { title: "Auto-Navigation", description: "Built-in offline maps route through alleys and bypass traffic roadblocks." }
      ],
      screenContent: (
        <div className="w-full h-full bg-[#0d0d10] p-4 flex flex-col justify-between text-left select-none text-xs">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full animate-pulse">
              ONLINE
            </span>
            <div className="text-right">
              <span className="text-[9px] text-charcoal-muted block">Today's Earnings</span>
              <span className="text-sm font-black text-white font-mono">$184.20</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/30 to-[#121215] border border-primary/40 rounded-2xl p-4 flex-grow flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div>
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest">New Trip Dispatch</span>
              <h4 className="text-base font-black text-white font-mono mt-1">+$18.50</h4>
              <span className="text-[9px] text-charcoal-muted block mt-0.5">Estimated Duration: 12 mins</span>
            </div>
            <div className="bg-black/30 rounded-lg p-2.5 my-3 text-left border border-white/5">
              <div className="flex gap-2 items-center text-[10px] text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="truncate">Collect: Pizzeria Roma (0.2m)</span>
              </div>
              <div className="flex gap-2 items-center text-[10px] text-white/90 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="truncate">Dropoff: 808 Sutter St (1.2m)</span>
              </div>
            </div>
            <button
              onClick={() => alert("Trip Accepted! Drive safely.")}
              className="w-full bg-primary hover:bg-primary-hover text-white text-[11px] font-bold py-2 rounded-xl transition-all shadow-md shadow-primary/20"
            >
              Swipe to Accept
            </button>
          </div>
        </div>
      )
    },
    {
      id: "vendor",
      badge: "Merchant Dashboard",
      title: "Zippy Partner App",
      description: "Receive orders, update menus, dispatch kitchen tickets, and monitor net revenue with real-time merchant analytics.",
      features: [
        { title: "Bulk Preparation Mode", description: "Group orders by similar prep instructions to cook faster." },
        { title: "Rider Dispatch Forecast", description: "Know the exact minute a rider will arrive to align packing time." },
        { title: "Direct Payout Portal", description: "Review and transfer earnings directly to your bank account weekly." }
      ],
      screenContent: (
        <div className="w-full h-full bg-[#0d0d10] p-4 flex flex-col justify-between text-left select-none text-xs">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h5 className="font-extrabold text-white text-xs font-sans">Bistro Italia</h5>
              <span className="text-[8px] text-emerald-500 font-bold">&bull; Accepting Orders</span>
            </div>
            <span className="text-[10px] font-bold text-white/80 font-mono">$1,420 today</span>
          </div>
          <div className="flex-grow flex flex-col gap-2 mb-3">
            <div className="bg-[#16161c] border border-white/5 rounded-xl p-2.5 flex justify-between items-center">
              <div>
                <span className="text-[9px] font-bold text-white block">#ZT-4091 &bull; Pizza Pepperoni</span>
                <span className="text-[8px] text-charcoal-muted">Ready in 2m</span>
              </div>
              <span className="text-[9px] font-semibold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded">PREPPING</span>
            </div>
            
            <div className="bg-[#16161c] border border-white/5 rounded-xl p-2.5 flex justify-between items-center">
              <div>
                <span className="text-[9px] font-bold text-white block">#ZT-4090 &bull; 2x Pasta Carbonara</span>
                <span className="text-[8px] text-charcoal-muted">Rider Assigned: Marcus</span>
              </div>
              <span className="text-[9px] font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded">DISPATCH</span>
            </div>

            <div className="bg-[#16161c] border border-white/5 rounded-xl p-2.5 flex justify-between items-center opacity-60">
              <div>
                <span className="text-[9px] font-bold text-white block">#ZT-4089 &bull; Lasagna Classica</span>
                <span className="text-[8px] text-charcoal-muted">Delivered at 17:42</span>
              </div>
              <span className="text-[9px] font-semibold text-white/50 bg-white/5 px-2 py-0.5 rounded">COMPLETE</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex justify-between items-center text-[10px]">
            <span className="text-white font-medium">Weekly Net Profits</span>
            <span className="font-extrabold text-primary font-mono">+$8,409.20</span>
          </div>
        </div>
      )
    }
  ];

  const activeData = apps.find((app) => app.id === activeApp)!;

  return (
    <section className="bg-[#f8fafc] py-24 relative overflow-hidden border-b border-slate-200">
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Download Center
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Supercharged Mobile Interfaces
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Download our designated applications designed to support logistics networks for riders, restaurants, and everyday users.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveApp(app.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all focus:outline-none ${
                activeApp === app.id
                  ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                  : "bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 shadow-sm"
              }`}
            >
              {app.badge}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side (Features) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {activeData.badge}
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900">
              {activeData.title}
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              {activeData.description}
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {activeData.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Store Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => alert("Downloading from Apple App Store...")}
                className="group flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 transition-all shadow-sm"
              >
                <Apple className="w-6 h-6 text-slate-800 group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Download on</span>
                  <span className="text-xs font-black text-slate-800">App Store</span>
                </div>
              </button>
              <button
                onClick={() => alert("Downloading from Google Play Store...")}
                className="group flex items-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 transition-all shadow-sm"
              >
                <Play className="w-5 h-5 text-slate-800 group-hover:text-primary fill-slate-800 group-hover:fill-primary transition-all" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Get it on</span>
                  <span className="text-xs font-black text-slate-800">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side (Phone frame) */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative w-[280px] h-[550px] rounded-[48px] border-[12px] border-slate-800 bg-[#08080a] shadow-2xl overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 w-32 h-6 bg-slate-800 rounded-b-2xl z-20 flex justify-center items-start pt-1">
                  <div className="w-12 h-1 bg-[#1a1c22] rounded-full" />
                </div>
                
                <div className="w-full h-full pt-6 relative overflow-hidden">
                  {activeData.screenContent}
                </div>

                <div className="absolute bottom-1.5 w-24 h-1 bg-white/20 rounded-full z-20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
