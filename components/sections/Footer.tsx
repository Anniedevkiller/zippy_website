"use client";

import React from "react";
import { Send, Twitter, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Zippy Trail news!");
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
            Futuristic delivery logistics for food, packages, and large-scale enterprises. Moving your goods smarter and faster across 180+ cities.
          </p>

          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span>100 Innovation Way, Suite 400, San Francisco</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (800) ZIP-TRAIL</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>support@zippytrail.com</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a href="/#services" className="hover:text-primary transition-colors">Food Delivery</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Package Logistics</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Express Courier</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Enterprise Cargo</a></li>
          </ul>
        </div>

        {/* Join Us */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Join Us</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a href="/rider" className="hover:text-primary transition-colors">Become a Rider</a></li>
            <li><a href="/#features" className="hover:text-primary transition-colors">Partner Vendor</a></li>
            <li><a href="/#features" className="hover:text-primary transition-colors">Fleet Operations</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Developer API</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Press & Media</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Stay Updated</h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Subscribe to our newsletter to receive feature releases and company updates.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-white border border-slate-200 rounded-full px-5 py-3 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors shadow-sm"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1.5 top-1.5 p-2 bg-primary hover:bg-primary-hover text-white rounded-full transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-primary/10 hover:text-primary text-slate-500 shadow-sm transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium relative z-10">
        <span>&copy; {currentYear} Zippy Trail Technologies Inc. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
