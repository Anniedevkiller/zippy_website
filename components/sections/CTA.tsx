"use client";

import React from "react";
import { ArrowRight, Globe, ShieldAlert, Zap } from "lucide-react";

export default function CTA() {
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Welcome aboard Zippy Trail! Redirecting to setup portal...");
  };

  return (
    <section id="cta" className="bg-[#f8fafc] py-24 relative overflow-hidden">
      {/* Light Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Gradient Card */}
        <div className="relative w-full rounded-[36px] bg-gradient-to-br from-white via-primary/5 to-primary/15 border border-primary/20 p-8 md:p-16 text-center overflow-hidden shadow-xl shadow-primary/5 flex flex-col items-center gap-8 group">
          
          <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary animate-pulse-slow">
            <Zap className="w-6 h-6 fill-primary" />
          </div>

          <div className="max-w-3xl flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Ready to Supercharge<br />
              Your <span className="orange-gradient-text font-black">Local Deliveries?</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Join thousands of restaurant vendors, on-demand shippers, and professional couriers accelerating their operations with Zippy Trail OS.
            </p>
          </div>

          <div className="w-full max-w-md mt-2">
            <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                required
                className="flex-grow bg-white border border-slate-200 focus:border-primary rounded-full px-6 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-sm"
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-primary/15 whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>Available in 180+ Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-primary" />
              <span>Free Setup &bull; Cancel Anytime</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
