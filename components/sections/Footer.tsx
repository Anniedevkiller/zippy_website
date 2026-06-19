"use client";

import React, { useState } from "react";
import { Send, Twitter, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Thank you for subscribing to ZippyTrail updates!");
        setEmail("");
      } else {
        alert(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden relative">
      {/* Background glow flares */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16 relative z-10">
        
        {/* Branding & Contacts */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <a href="/#home" className="flex items-center gap-2 group">
            <Logo size={32} className="group-hover:scale-105" />
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
              Zippy<span className="text-primary">Trail</span>
            </span>
          </a>
          
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
            Customer-focused transport, courier, and logistics company dedicated to providing swift, safe, and reliable movement of people, parcels, documents, and business deliveries.
          </p>

          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span>41 School Road, Umuahia</span>
                <span className="text-xs text-slate-400">Ochison Plaza, Aba Road by Umuobia Junction, Umuahia, Abia State</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>08061295020, 0803557495</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>zippytrail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a href="/#services" className="hover:text-primary transition-colors">Courier & Parcel</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Same-Day Courier</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Passenger Transit</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Business Support</a></li>
          </ul>
        </div>

        {/* Join Us */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Join Us</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a href="/rider" className="hover:text-primary transition-colors">Become a Rider</a></li>
            <li><a href="/#features" className="hover:text-primary transition-colors">Business Retainer</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">E-commerce Logistics</a></li>
            <li><a href="/#faq" className="hover:text-primary transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/#about" className="hover:text-primary transition-colors">Operational Area</a></li>
            <li><a href="/#faq" className="hover:text-primary transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Stay Updated</h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Subscribe to our newsletter to receive company updates and coverage expansions.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full bg-white border border-slate-200 rounded-full px-5 py-3 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors shadow-sm disabled:opacity-75"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              disabled={loading}
              className="absolute right-1.5 top-1.5 p-2 bg-primary hover:bg-primary-hover text-white rounded-full transition-all disabled:opacity-50"
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>

          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/zippytrailcl" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium relative z-10">
        <span>&copy; {currentYear} ZippyTrail Transport & Logistics Co. Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
