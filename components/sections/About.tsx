"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, MapPin, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const lgaCoverage = [
  "Umuahia North",
  "Umuahia South",
  "Ikwuano",
  "Isiala Ngwa North",
  "Isiala Ngwa South",
  "Bende"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function About() {
  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden border-b border-slate-200/50">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-5%] w-[350px] h-[350px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 fill-primary/10" />
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            About ZippyTrail
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-1" />
        </div>

        {/* Main Grid Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: About copy and Motto */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
              ZippyTrail Transport & Logistics
            </h3>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We are a customer-focused transport, courier, and logistics company dedicated to providing swift, safe, and reliable movement of people, parcels, documents, and business deliveries across Abia State and beyond.
            </p>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              At ZippyTrail, we understand that every delivery matters and every journey counts. Whether it's an urgent document, a parcel, a business delivery, or a passenger requiring dependable transportation, our mission is to connect people and businesses efficiently while delivering exceptional customer service.
            </p>

            {/* Motto Callout Banner */}
            <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/2 to-transparent border border-primary/15 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Our Motto</span>
              <h4 className="text-2xl font-black text-primary tracking-wide mb-3 flex items-center gap-2">
                Zippy. Swift. Reliable. Safe.
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                At ZippyTrail, we do more than move people and packages - we deliver confidence, convenience, and peace of mind.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Vision, Mission & Operations Coverage */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md hover:shadow-primary/2 transition-all duration-300 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    To provide safe, efficient, affordable, and dependable transport and logistics solutions that connect people, businesses, and communities while creating opportunities for economic growth and development.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-primary/20 hover:shadow-md hover:shadow-primary/2 transition-all duration-300 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    To become the most trusted and preferred transport and logistics partner in South-East Nigeria, delivering convenience, reliability, and value to individuals, businesses, and communities.
                  </p>
                </div>
              </div>
            </div>

            {/* LGA Operations Coverage */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Operational Coverage</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Abia State</span>
                </div>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed">
                Our operations currently cover key cities and surrounding communities in Abia State, with active plans for continuous expansion across the entire South-East region.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                {lgaCoverage.map((lga) => (
                  <div 
                    key={lga}
                    className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 shadow-sm font-semibold hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="truncate">{lga}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
