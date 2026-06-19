"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play, Sparkles, Smartphone, Award, Shield } from "lucide-react";
import Footer from "@/components/sections/Footer";

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "courier",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waiting-list",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
        }),
      });
      const data = await res.json();
      if (res.ok || data.success) {
        setSubmitted(true);
      } else {
        alert(data.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Welcoming Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-primary self-center lg:self-start bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Welcome to ZippyTrail
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            The Logistics Revolution is <span className="orange-gradient-text">Coming.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            We are preparing to launch our full-service customer mobile app to deliver swift, safe, and reliable movement of people, parcels, documents, and business deliveries across Abia State and beyond!
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            Join our priority waiting list today to get instant release updates, early access promos, and first-mile logistics vouchers.
          </p>

          {/* App download promo block */}
          <div className="mt-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-left flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Download Our Active Apps</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Get the active ZippyTrail Rider or Merchant app on Google Play.</p>
              </div>
            </div>
            
            <button
              onClick={() => alert("Redirecting to ZippyTrail on Google Play Store...")}
              className="group flex items-center gap-2 bg-[#0c0c0e] hover:bg-[#1a1c22] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              Google Play
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Waiting List Form Card */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-white border border-slate-200 shadow-xl shadow-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm animate-pulse-slow">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">You're on the List!</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                  Thank you for signing up, {formData.name || "friend"}. We have registered your email (**{formData.email}**) on the priority queue and will notify you as soon as the customer app goes live.
                </p>
                <p className="text-slate-500 text-xs leading-relaxed max-w-sm mt-2">
                  In the meantime, feel free to share our site with your network or download our apps on Google Play Store.
                </p>
                <button
                  onClick={() => alert("Opening Google Play...")}
                  className="mt-4 group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3 px-6 rounded-full transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                  Download on Google Play
                </button>
              </motion.div>
            ) : (
              <>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Join the Waiting List
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Get priority updates and first-run dispatch coupons.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      disabled={loading}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400 disabled:opacity-75 shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      disabled={loading}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400 disabled:opacity-75 shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 08061295020"
                      disabled={loading}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder-slate-400 disabled:opacity-75 shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">I am interested in</label>
                    <select
                      value={formData.interest}
                      disabled={loading}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors cursor-pointer disabled:opacity-75 shadow-sm"
                    >
                      <option value="courier">Courier & Parcel Delivery</option>
                      <option value="rides">Passenger Rides</option>
                      <option value="business">Business Logistics Solutions</option>
                      <option value="all">All ZippyTrail Services</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        Reserve My Spot
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-slate-200/60 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Priority Release</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Be the first to download the app in your LGA.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Google Play Support</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Fully optimized for Android devices with instant updates.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Secure Pre-registration</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Zero spam. Verified updates on the logistics rollout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Sitemap */}
      <Footer />
    </main>
  );
}
