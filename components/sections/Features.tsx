"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, ShieldCheck, Zap, History,
  Calendar, DollarSign, Navigation, Landmark,
  ClipboardList, PackageOpen, TrendingUp, BarChart3
} from "lucide-react";

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeatureSection {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  cards: FeatureCard[];
}

const featuresData: FeatureSection[] = [
  {
    id: "customer",
    tabLabel: "For Customers",
    title: "Unrivaled Convenience at Your Fingertips",
    description: "Get food from local restaurants and package couriers delivered in under 20 minutes, backed by high-tech security.",
    cards: [
      {
        icon: MapPin,
        title: "Live 3D Tracking",
        description: "Watch your rider move in real-time on our interactive vector maps, with precise down-to-the-second ETA logs.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Payments",
        description: "Encrypted checkout pathways supporting Credit Card, Apple Pay, Google Pay, and instant digital wallets.",
      },
      {
        icon: Zap,
        title: "Supercharged Speed",
        description: "Intelligent dispatch algorithms pair your request with the closest courier to bypass city congestion.",
      },
      {
        icon: History,
        title: "Smart Order History",
        description: "Save favorites, reorder with a single tap, track receipts, and set up recurring scheduled deliveries.",
      },
    ],
  },
  {
    id: "rider",
    tabLabel: "For Riders",
    title: "Earn Money on Your Own Terms",
    description: "Maximize your hourly income with AI-optimized routing, transparent dashboards, and instant cashouts.",
    cards: [
      {
        icon: Calendar,
        title: "Flexible Schedule",
        description: "Deliver whenever you want. No minimum hours, no shifts. Work around your studies or full-time career.",
      },
      {
        icon: DollarSign,
        title: "Earnings Dashboard",
        description: "Track tips, base fees, and active multipliers. Access gamified weekly bonuses and heat-maps directly.",
      },
      {
        icon: Navigation,
        title: "Route Optimization",
        description: "Our navigation AI chains multiple order collections to minimize dry distance and maximize hourly rate.",
      },
      {
        icon: Landmark,
        title: "Instant Cashouts",
        description: "Don't wait till the end of the week. Access your earnings immediately after shifts with one-tap payouts.",
      },
    ],
  },
  {
    id: "vendor",
    tabLabel: "For Vendors",
    title: "Scale Your Business Digitally",
    description: "Unlock new revenue streams. Manage items, dispatch orders, and study customer behaviors with advanced analytic dashboards.",
    cards: [
      {
        icon: ClipboardList,
        title: "Order Dispatch Manager",
        description: "Accept tickets, update cooking statuses, request couriers, and track rider handoffs in one clean portal.",
      },
      {
        icon: PackageOpen,
        title: "Inventory Control",
        description: "Add new products, adjust pricing instantly, mark sold-out items, and design customized promotional banners.",
      },
      {
        icon: TrendingUp,
        title: "Revenue Tracking",
        description: "Review comprehensive reports detailing sales margins, commission breakdowns, and net weekly payouts.",
      },
      {
        icon: BarChart3,
        title: "Business Analytics",
        description: "Understand customer satisfaction scores, popular order hours, and get recommendations to increase sales.",
      },
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("customer");

  const activeSection = featuresData.find((section) => section.id === activeTab)!;

  return (
    <section id="features" className="bg-[#f8fafc] py-24 relative overflow-hidden">
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Tailored Experiences for Everyone
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Discover specialized portals engineered to deliver value to riders, vendors, and end-consumers alike.
          </p>
        </div>

        {/* Tab Buttons Selector */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-slate-100 border border-slate-200 p-1.5 rounded-full shadow-inner">
            {featuresData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all focus:outline-none ${
                  activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeFeatureTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/15"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Swap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                {activeSection.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {activeSection.description}
              </p>
              
              <div className="hidden lg:flex w-full h-[150px] rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-slate-200/80 p-6 items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary text-center">
                  Zippy Trail OS &bull; Automated Nodes Active
                </span>
              </div>
            </div>

            {/* Right Column (Cards) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeSection.cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 rounded-2xl p-6 flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">
                        {card.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
