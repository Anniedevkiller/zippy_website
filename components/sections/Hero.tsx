"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, CheckCircle } from "lucide-react";

const HeroScene = dynamic(() => import("../3d/HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function HeroFallback() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center relative">
      <div className="absolute w-[280px] h-[280px] rounded-full bg-primary/5 blur-[80px] animate-pulse" />
      <div className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 border border-slate-200/60 z-10 shadow-sm">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <span className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
          Initializing 3D Space
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#f8fafc]"
    >
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      {/* Futuristic grid overlay - light scheme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
          


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            Deliver Faster.<br />
            <span className="orange-gradient-text font-black">Move Smarter.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Food delivery and package logistics made simple. Experience lightning-fast deliveries and state-of-the-art tracking built for modern cities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <a
              href="/#cta"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/rider"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold px-8 py-4 rounded-full transition-all shadow-sm"
            >
              Become a Rider
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-6 mt-6 border-t border-slate-200/80 pt-6 text-xs text-slate-500 font-semibold"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>99.8% On-Time</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" />
              <span>Avg. 18m Delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Scene */}
        <div className="lg:col-span-6 relative w-full h-[400px] lg:h-[550px]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
