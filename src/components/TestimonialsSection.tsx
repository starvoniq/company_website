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
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title row */}
        <div className="text-left mb-14">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-3 block">
            CLIENT VALIDATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1F4D] leading-tight">
            Trusted By Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">Product Leaders.</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Previous Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-[#2563EB] items-center justify-center text-[#0B1F4D] transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-[#2563EB] items-center justify-center text-[#0B1F4D] transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((item, idx) => (
              <div
                key={item.id}
                className={`relative p-7 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between text-left ${
                  idx === activeIndex
                    ? 'border-[#2563EB]/60 shadow-xl shadow-blue-950/5 -translate-y-1'
                    : 'border-slate-200/90 hover:border-[#2563EB]/40 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-[#2563EB] fill-[#2563EB]/10 rotate-180" />
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">VERIFIED CLIENT</span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0B1F4D] to-[#2563EB] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {item.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0B1F4D] leading-tight">
                      {item.author}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight">
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
                  idx === activeIndex ? 'w-6 bg-[#2563EB]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

