"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  slides: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

export function Carousel({ slides, autoplay = true, autoplayInterval = 5000, className }: CarouselProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const activeIndex = Math.abs(page % slides.length);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      paginate(1);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, paginate]);

  return (
    <div className={cn("relative w-full flex flex-col items-center", className)}>
      {/* Slider Viewport */}
      <div className="relative w-full h-[320px] md:h-[280px] overflow-hidden flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                paginate(1);
              } else if (swipe > 50) {
                paginate(-1);
              }
            }}
            className="absolute w-full px-4 md:px-12 flex justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="w-full max-w-3xl">
              {slides[activeIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
          className="p-3 rounded-full border border-slate-200 hover:border-primary/40 hover:bg-slate-50 text-slate-400 hover:text-primary transition-all focus:outline-none"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const diff = index - activeIndex;
                if (diff !== 0) {
                  paginate(diff);
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          aria-label="Next slide"
          className="p-3 rounded-full border border-slate-200 hover:border-primary/40 hover:bg-slate-50 text-slate-400 hover:text-primary transition-all focus:outline-none"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
