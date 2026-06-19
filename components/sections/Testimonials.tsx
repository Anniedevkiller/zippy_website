"use client";

import React from "react";
import { Carousel } from "../ui/carousel";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
  stars: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    text: "ZippyTrail has completely transformed our boutique delivery operations. Our clients in Ikwuano and Bende receive their packages the same day, handled with care. The pricing is transparent and highly affordable!",
    name: "Ngozi Okoye",
    role: "Founder & Creative Director",
    company: "Umuahia Fashion Hub",
    stars: 5,
    initials: "NO",
  },
  {
    text: "We require secure and prompt dispatch for confidential legal documents between our Umuahia offices. ZippyTrail's document dispatch service has been exceptionally reliable and professional.",
    name: "Kalu Benson",
    role: "Senior Partner",
    company: "Benson Legal Associates",
    stars: 5,
    initials: "KB",
  },
  {
    text: "I use ZippyTrail's passenger transport regularly to travel comfortably and safely between Umuahia and Ikwuano. The riders are professional, well-trained, and the service is always dependable.",
    name: "Amara Nwachukwu",
    role: "Lecturer",
    company: "Michael Okpara University",
    stars: 5,
    initials: "AN",
  },
];

function TestimonialCard({ text, name, role, company, stars, initials }: Testimonial) {
  return (
    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100/30 relative flex flex-col md:flex-row items-start gap-6 select-none">
      
      <div className="absolute top-6 right-8 text-primary/10">
        <Quote className="w-16 h-16 fill-primary/5 stroke-none" />
      </div>

      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-bold text-white text-xl shadow-md shadow-primary/10 flex-shrink-0">
        {initials}
      </div>

      <div className="flex-grow">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: stars }).map((_, idx) => (
            <Star key={idx} className="w-4 h-4 text-primary fill-primary" />
          ))}
        </div>

        <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 italic">
          "{text}"
        </p>

        <div>
          <h4 className="text-sm font-bold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {role} &bull; <span className="text-primary/90 font-semibold">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const slides = testimonials.map((item, idx) => (
    <TestimonialCard key={idx} {...item} />
  ));

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Read stories from local businesses, vendors, and passengers who rely on ZippyTrail's courier, transport, and logistics services.
          </p>
        </div>

        <div className="w-full">
          <Carousel slides={slides} autoplay={true} autoplayInterval={6000} />
        </div>
      </div>
    </section>
  );
}
