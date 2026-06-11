"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Live Map", href: "/#live-map" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Lock in the light theme layout globally
  const isLightPage = true;

  // Handle scroll detection for sticky glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer to highlight active links (only on home page)
  useEffect(() => {
    if (isLightPage) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach((link) => {
      const id = link.href.split("#")[1];
      if (id) {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [isLightPage]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? isLightPage 
              ? "bg-white/85 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm"
              : "glass-nav py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-2 group focus:outline-none">
            <Logo size={32} className="group-hover:scale-105" />
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              isLightPage && !scrolled 
                ? "text-slate-900 group-hover:text-primary" 
                : "text-white group-hover:text-primary"
            )}>
              Zippy<span className="text-primary">Trail</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = !isLightPage && activeSection === link.href.split("#")[1];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-colors py-1 focus:outline-none",
                    isLightPage
                      ? "text-slate-600 hover:text-slate-900"
                      : isActive 
                        ? "text-primary" 
                        : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/rider"
              className={cn(
                "text-sm font-bold px-4 py-2 hover:bg-black/5 rounded-full transition-all",
                isLightPage ? "text-slate-700 hover:text-slate-900" : "text-white/80 hover:text-white hover:bg-white/5"
              )}
            >
              Become a Rider
            </a>
            <a
              href="/#cta"
              className="group flex items-center gap-1 bg-primary hover:bg-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={cn(
              "lg:hidden p-2 focus:outline-none transition-colors",
              isLightPage && !scrolled ? "text-slate-800 hover:text-slate-900" : "text-white/80 hover:text-white"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "lg:hidden absolute top-full left-0 right-0 shadow-2xl border-t overflow-hidden",
                isLightPage 
                  ? "bg-white border-slate-200" 
                  : "glass-nav border-white/5"
              )}
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-semibold transition-colors focus:outline-none",
                      isLightPage
                        ? "text-slate-700 hover:text-slate-950"
                        : activeSection === link.href.split("#")[1] 
                          ? "text-primary" 
                          : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
                
                <hr className={isLightPage ? "border-slate-200 my-1" : "border-white/10 my-1"} />

                <div className="flex flex-col gap-4">
                  <a
                    href="/rider"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full text-center py-3 text-sm font-bold border rounded-full transition-all",
                      isLightPage 
                        ? "text-slate-800 hover:text-slate-950 border-slate-300 hover:bg-slate-50" 
                        : "text-white/80 hover:text-white border-white/10 hover:bg-white/5"
                    )}
                  >
                    Become a Rider
                  </a>
                  <a
                    href="/#cta"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 text-sm font-bold bg-primary hover:bg-primary-hover text-white rounded-full transition-all shadow-md shadow-primary/20"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
