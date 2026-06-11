"use client";

import React from "react";
import { Accordion } from "../ui/accordion";

interface FAQItem {
  id: string;
  title: string;
  content: string;
}

const faqList: FAQItem[] = [
  {
    id: "speed",
    title: "How fast are Zippy Trail deliveries?",
    content: "Our average city delivery speed is under 18 minutes. We achieve this by employing smart matching algorithms that pair your ticket with the closest active rider, while predicting kitchen preparation timelines to eliminate waiting bottlenecks.",
  },
  {
    id: "rider",
    title: "How do I become a Zippy Rider?",
    content: "You can sign up on our Rider Portal or download the Zippy Rider App. Once you upload your ID, proof of vehicle registration (motorcycle, bicycle, or electric car), and pass a standard background check, you can go online and start earning.",
  },
  {
    id: "vendor",
    title: "What are the platform commission fees for vendors?",
    content: "Zippy Trail operates on a competitive flat-rate fee model. Standard food merchants pay a 12% commission on delivery sales, with zero setup fees, free onboarding materials, and full access to our analytics dashboard.",
  },
  {
    id: "insurance",
    title: "Are packages insured during transit?",
    content: "Yes, all package deliveries are fully insured up to $1,000 against theft, damage, or loss. For high-value enterprise cargo and bulk freight, we offer custom supplemental insurance packages based on cargo valuation declarations.",
  },
  {
    id: "cities",
    title: "Which cities are currently served?",
    content: "We are currently active in 180+ metropolitan hubs across North America, Europe, Asia, and the Middle East (including New York, London, Tokyo, and Dubai). We expand to 50+ new municipalities every quarter.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Have questions about shipping guidelines, courier pay cycles, or merchant dashboards? We have answers.
          </p>
        </div>

        <div className="w-full">
          <Accordion items={faqList} />
        </div>
      </div>
    </section>
  );
}
