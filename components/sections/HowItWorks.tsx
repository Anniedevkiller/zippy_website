"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Smartphone, Store, Bike, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  duration: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: Smartphone,
    title: "Place Order",
    description: "Submit food orders or cargo shipping logistics inside the customer app. Set custom destination checkpoints.",
    duration: "Instant",
  },
  {
    id: 2,
    icon: Store,
    title: "Vendor Prepares",
    description: "The kitchen cooks or the logistic warehouse wraps the cargo. Real-time packing updates send directly to our cloud.",
    duration: "4 - 8 mins",
  },
  {
    id: 3,
    icon: Bike,
    title: "Rider Picks Up",
    description: "The nearest dispatched driver claims the trip, secures the package, and follows the dynamic AI-optimized route map.",
    duration: "5 - 10 mins",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Delivered",
    description: "Secure delivery arrives at your door. Contactless proof-of-delivery or digital signature verified instantly.",
    duration: "Success",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="how-it-works" ref={containerRef} className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Process Flow
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            How Zippy Trail Works
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Four simple steps powered by autonomous routing AI, delivering anything from standard burgers to critical enterprise parcels.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line Base */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 md:-translate-x-1/2" />
          
          {/* Animated Glowing Fill Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-0.5 bg-primary md:-translate-x-1/2 shadow-[0_0_8px_rgba(204,85,0,0.4)]"
          />

          {/* Steps List */}
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="flex flex-col md:flex-row relative items-start md:items-center"
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-0 md:left-1/2 z-20 flex items-center justify-center -translate-x-0 md:-translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-[62px] h-[62px] rounded-full bg-white border border-slate-200 hover:border-primary flex items-center justify-center text-slate-500 hover:text-white transition-all cursor-pointer shadow-md group"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-primary/10 group-hover:border-primary/20 flex items-center justify-center transition-all">
                        <Icon className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content Block */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-200/60 hover:border-slate-300 shadow-sm transition-colors"
                    >
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                        {step.duration}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for Desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
