"use client";

import React from "react";
import { motion } from "framer-motion";
import { Utensils, Package, Zap, Truck, ArrowRight } from "lucide-react";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
}

const servicesList: ServiceItem[] = [
  {
    icon: Utensils,
    title: "Food Delivery",
    description: "Hot, fresh meals from your favorite local restaurants delivered to your doorstep. Optimally routed for freshness.",
    tag: "Under 20m",
  },
  {
    icon: Package,
    title: "Package Delivery",
    description: "Send documents, keys, gifts, or merchandise safely. Insured transit with secure signature verification.",
    tag: "On-Demand",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "For urgent delivery needs. Instant dispatcher matching ensures your goods arrive in record-breaking speeds.",
    tag: "Priority",
  },
  {
    icon: Truck,
    title: "Business Logistics",
    description: "Enterprise routing, freight warehousing, and bulk cargo deliveries. Scale your ecommerce operations effortlessly.",
    tag: "Enterprise",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#f8fafc] py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Designed for Speed. Built for Convenience.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Zippy Trail offers custom delivery models designed to handle food cravings, personal shipping, and global logistics networks.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel glass-panel-hover glow-card rounded-2xl p-8 flex flex-col justify-between h-[320px] shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-primary/90 bg-primary/5 border border-primary/10 px-2.5 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-primary transition-colors mt-4">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
