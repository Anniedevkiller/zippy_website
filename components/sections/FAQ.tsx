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
    id: "sameday",
    title: "Do you offer same-day delivery?",
    content: "Yes! We offer swift same-day delivery within Umuahia and selected surrounding areas across Abia State.",
  },
  {
    id: "quote",
    title: "How do I get a delivery quote?",
    content: "Simply enter your pickup location, destination, and package details directly inside the Zippy Trail app for an instant, transparent quote.",
  },
  {
    id: "retainer",
    title: "Do you have business retainership packages?",
    content: "Yes! We offer customized monthly retainership packages designed for businesses with regular delivery needs, complete with priority dispatch and discounted rates.",
  },
  {
    id: "deliverable",
    title: "What can you deliver?",
    content: "We deliver a wide variety of items including documents, parcels, office supplies, vendor orders, gifts, electronics, e-commerce orders, and more.",
  },
  {
    id: "booking",
    title: "How do I book a delivery?",
    content: "You can book a delivery easily from the Zippy Trail app.",
  },
  {
    id: "location",
    title: "Where are you located?",
    content: "We operate from two convenient branches in Umuahia: (1) 41 School Road, Umuahia and (2) Ochison Plaza, Aba Road by Umuobia Junction, Umuahia, Abia State.",
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
            Everything you need to know about ZippyTrail Transport & Courier Services.
          </p>
        </div>

        <div className="w-full">
          <Accordion items={faqList} />
        </div>
      </div>
    </section>
  );
}
