import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonialsData.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonialsData.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#070a12] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title row */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Previous Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/10 bg-black/40 hover:bg-orange-500/20 hover:border-orange-500/60 items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/10 bg-black/40 hover:bg-orange-500/20 hover:border-orange-500/60 items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((item, idx) => (
              <div
                key={item.id}
                className={`relative p-7 rounded-2xl bg-[#0b0f19] border transition-all duration-300 flex flex-col justify-between text-left ${
                  idx === activeIndex
                    ? 'border-orange-500/40 shadow-xl shadow-orange-950/20 -translate-y-1'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Glowing Orange Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-orange-500 fill-orange-500/20 rotate-180" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {/* User Initial Avatar or Photo */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                    {item.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">
                      {item.author}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      {item.title}, {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-6 bg-orange-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
