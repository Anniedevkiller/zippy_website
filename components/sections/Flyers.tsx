"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Download, X, HelpCircle, ZoomIn } from "lucide-react";

interface FlyerItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const flyersList: FlyerItem[] = [
  {
    id: 1,
    image: "/flyer-1.jpeg",
    title: "Why Choose ZippyTrail?",
    description: "Overview of our delivery speeds, safe package handling guarantees, and Abia State coverage.",
  },
  {
    id: 2,
    image: "/flyer-2.jpeg",
    title: "Did You Know?",
    description: "Essential business statistics, courier advantages, and logistics insights for local vendors.",
  },
  {
    id: 3,
    image: "/flyer-3.jpeg",
    title: "Frequently Asked Questions",
    description: "Official guide answering same-day logistics, booking details, and branch office locations.",
  },
  {
    id: 4,
    image: "/flyer-4.jpeg",
    title: "Business Retainership Solutions",
    description: "Detailed breakdown of monthly priority dispatches and discounted corporate pricing tiers.",
  },
  {
    id: 5,
    image: "/flyer-5.jpeg",
    title: "New Opportunities & Outlook",
    description: "New Week. New Month. New Opportunities. Let's move forward with purpose, productivity, and progress. We've got your deliveries covered.",
  },
  {
    id: 6,
    image: "/flyer-6.jpeg",
    title: "Business Owners Guide",
    description: "Stop leaving your shop to make deliveries. Learn how ZippyTrail handles store dispatches and monthly packages.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Flyers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openLightbox = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="guides" className="bg-[#f8fafc] py-24 relative overflow-hidden border-b border-slate-200/40">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-primary" />
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Visual FAQ & Questions
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Click on any visual Q&A sheet below to view it in full screen, or download it to share with your customers.
          </p>
        </div>

        {/* Q&A Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {flyersList.map((flyer) => (
            <motion.div
              key={flyer.id}
              variants={cardVariants}
              className="bg-white border border-slate-200/80 shadow-md rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div 
                onClick={() => openLightbox(flyer.image, flyer.title)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 cursor-zoom-in group-hover:opacity-95 transition-opacity"
              >
                {/* Image element */}
                <img 
                  src={flyer.image} 
                  alt={flyer.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text & Action Buttons */}
              <div className="p-5 flex flex-col gap-4 flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-primary transition-colors">
                    {flyer.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {flyer.description}
                  </p>
                </div>

                <div className="flex gap-2 border-t border-slate-100 pt-4 mt-2">
                  <button
                    onClick={() => openLightbox(flyer.image, flyer.title)}
                    className="flex-grow flex items-center justify-center gap-1.5 py-2 px-3 border border-slate-200 hover:border-primary/20 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary rounded-xl text-xs font-bold transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Q&A
                  </button>
                  <a
                    href={flyer.image}
                    download={flyer.image.split("/").pop()}
                    className="p-2 border border-slate-200 hover:border-primary/25 bg-white hover:bg-primary/5 text-slate-500 hover:text-primary rounded-xl transition-all shadow-sm"
                    title="Download Q&A Sheet"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Header controls inside modal */}
            <div className="w-full max-w-2xl flex justify-between items-center text-white mb-3 relative z-10 px-4">
              <h3 className="text-sm font-bold tracking-wide uppercase">{selectedTitle}</h3>
              <div className="flex items-center gap-3">
                <a
                  href={selectedImage}
                  download={selectedImage.split("/").pop()}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-bold py-1.5 px-3.5 bg-primary hover:bg-primary-hover text-white rounded-full transition-all shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Flyer Image in modal */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="max-w-2xl max-h-[85vh] w-full flex items-center justify-center relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img 
                src={selectedImage} 
                alt={selectedTitle} 
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
