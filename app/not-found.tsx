"use client";

import React from "react";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full bg-white border border-slate-200 shadow-xl shadow-slate-100 rounded-3xl p-8 text-center flex flex-col items-center gap-6 relative z-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary animate-bounce">
          <Compass className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-primary font-mono">Error 404</span>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Route Not Found
          </h1>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-2">
            The page or delivery corridor you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <a
          href="/"
          className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3.5 px-6 w-full rounded-xl transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 mt-2"
        >
          Return to Dispatch Home
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </main>
  );
}
