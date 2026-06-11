"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, ArrowRight, CheckCircle, Navigation, Award, Smartphone } from "lucide-react";
import Footer from "@/components/sections/Footer";

export default function BecomeRider() {
  const [vehicle, setVehicle] = useState("scooter");
  const [hours, setHours] = useState(20);
  const [earnings, setEarnings] = useState(360);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    vehicleType: "scooter",
  });

  // Earnings estimation calculation
  useEffect(() => {
    let ratePerHour = 18; // Base bicycle rate
    if (vehicle === "scooter") ratePerHour = 22;
    if (vehicle === "car") ratePerHour = 26;

    setEarnings(hours * ratePerHour);
  }, [vehicle, hours]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28">
      {/* Background soft glowing decoration rings */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary self-center lg:self-start bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full">
            Drive with Zippy Trail
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Earn on Your Schedule.<br />
            <span className="orange-gradient-text">Be Your Own Boss.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            Deliver food, groceries, and packages in your city. Log on whenever you want, maximize your hourly rates with AI routes, and get paid instantly.
          </p>

          {/* Core Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div className="flex items-start gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Total Flexibility</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">No shifts or weekly hour minimums.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Instant Payouts</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Cash out your earnings immediately.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Smart Routing</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Stacked orders maximize hourly fees.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Earnings Estimator */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-white border border-slate-200 shadow-xl shadow-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            
            <h3 className="text-lg font-extrabold text-slate-900">
              Calculate Your Earnings
            </h3>

            {/* Vehicle Selector */}
            <div className="flex gap-2 bg-slate-100 border border-slate-200/50 p-1 rounded-xl">
              {["bicycle", "scooter", "car"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVehicle(v)}
                  className={`flex-grow py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                    vehicle === v ? "bg-primary text-white shadow" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Hours Selector */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                <span>HOURS PER WEEK</span>
                <span className="text-slate-900 font-mono">{hours} hrs</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              />
            </div>

            {/* Calculator Output Display */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 text-center flex flex-col items-center gap-1.5">
              <span className="text-xs font-semibold text-primary/95 uppercase tracking-widest">
                Estimated Weekly Earnings
              </span>
              <span className="text-4xl font-black text-slate-900 font-mono">
                ${earnings}
              </span>
              <span className="text-[10px] text-slate-500">
                Calculated at approx. ${earnings / hours}/hr for a {vehicle}. Tips are 100% yours.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding application section */}
      <section className="bg-white border-y border-slate-200 py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Start Earning in 24 Hours
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              Fill out this quick portal form, pass a background screening check, and download the app.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/60 p-6 md:p-10 rounded-3xl shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
                  Thanks for signing up, {formData.name}. Our city ops manager will review your documents and text you onboarding codes within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">City to Deliver</label>
                    <input
                      type="text"
                      required
                      placeholder="San Francisco"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Primary Vehicle Type</label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="bicycle">Bicycle (Standard or Electric)</option>
                    <option value="scooter">Electric Scooter / Motorbike</option>
                    <option value="car">Car / Delivery Van</option>
                    <option value="walker">Walking (Metro Centers only)</option>
                  </select>
                </div>

                {/* Consent checkbox */}
                <div className="flex gap-2 items-start mt-2">
                  <input type="checkbox" required id="consent" className="mt-1 cursor-pointer accent-primary" />
                  <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                    I agree to the Zippy Trail Rider Terms of Service and authorize background check processing in accordance with global regulations.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Requirements Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-16">
          Rider Application Guidelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Age Requirements</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              You must be 18 years or older (or 19+ in certain regions) to register and perform last-mile deliveries on the Zippy Trail network.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Smart Device</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              A modern iOS or Android smartphone is required to run the Rider application, follow maps navigation, upload proof-of-delivery, and verify routes.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col gap-4">
            <div className="w-10 h-15 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Background Clearance</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              All couriers must hold a valid driver's license (for scooter/car delivery) and successfully pass a local background and criminal registry screening.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Sitemap */}
      <Footer />
    </main>
  );
}
