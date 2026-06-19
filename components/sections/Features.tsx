"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, ShieldCheck, Zap, Calendar, Banknote,
  Navigation, ClipboardList, PackageOpen, TrendingUp,
  Users, Briefcase, Clock, Truck, Award
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
    id: "senders",
    tabLabel: "For Senders",
    title: "Swift & Secure Courier Solutions",
    description: "Send parcels, business documents, and ecommerce merchandise safely across Abia State with real-time updates and professional handling.",
    cards: [
      {
        icon: PackageOpen,
        title: "Courier & Parcel Delivery",
        description: "Swift and safe movement of packages, parcels, and personal items to any destination.",
      },
      {
        icon: Clock,
        title: "Same-Day Priority",
        description: "Urgent shipment dispatch completed within the same day for time-sensitive items.",
      },
      {
        icon: ClipboardList,
        title: "Document Dispatch",
        description: "Secure movement of confidential corporate papers, legal contracts, and files.",
      },
      {
        icon: MapPin,
        title: "Wide Local Coverage",
        description: "Prompt pickups and deliveries covering Umuahia, Ikwuano, Isiala Ngwa, Bende, and beyond.",
      },
    ],
  },
  {
    id: "passengers",
    tabLabel: "For Passengers",
    title: "Safe & Dependable Passenger Transport",
    description: "Experience comfortable and reliable passenger transit services, connecting people and communities across local government areas.",
    cards: [
      {
        icon: Users,
        title: "Comfortable Journeys",
        description: "Modern, clean, and reliable vehicles for a pleasant passenger transit experience.",
      },
      {
        icon: Navigation,
        title: "Experienced Drivers",
        description: "Professional, trained, and verified operators who know the best local routes.",
      },
      {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Strict compliance with safety protocols for complete confidence and peace of mind.",
      },
      {
        icon: Calendar,
        title: "Convenient Pickups",
        description: "Flexible scheduled pickups and drop-offs designed around your travel schedule.",
      },
    ],
  },
  {
    id: "businesses",
    tabLabel: "For Businesses",
    title: "Business Retainership Delivery Solutions",
    description: "Our monthly retainership packages are designed for businesses with regular delivery needs. Enjoy priority dispatch, discounted rates, and dedicated support.",
    cards: [
      {
        icon: Award,
        title: "Priority Dispatch",
        description: "Your business deliveries move straight to the front of the line for immediate pickup.",
      },
      {
        icon: Banknote,
        title: "Discounted Rates",
        description: "Enjoy lower logistics costs and predictable pricing with our exclusive business packages.",
      },
      {
        icon: Briefcase,
        title: "Dedicated Support",
        description: "A professional, dedicated support team available to assist your business operations.",
      },
      {
        icon: Truck,
        title: "Flexible Options",
        description: "Solutions tailored to fit your schedule, vendor runs, and regular customer deliveries.",
      },
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("senders");

  const activeSection = featuresData.find((section) => section.id === activeTab)!;

  return (
    <section id="features" className="bg-[#f8fafc] py-24 relative overflow-hidden">
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Tailored Services for Everyone
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Discover how ZippyTrail serves individuals, passengers, and business retainers with dedicated solutions.
          </p>
        </div>

        {/* Tab Buttons Selector */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap sm:flex-nowrap justify-center bg-slate-100 border border-slate-200 p-1.5 rounded-2xl sm:rounded-full shadow-inner gap-1 sm:gap-0">
            {featuresData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none ${
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
                  ZippyTrail Logistics &bull; Connected Communities
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
