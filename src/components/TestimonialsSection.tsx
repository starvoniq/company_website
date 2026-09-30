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
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title row */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Previous Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-[#E5E7EB] bg-white hover:bg-blue-50 hover:border-[#2563EB] items-center justify-center text-[#0B1F4D] transition-all cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-[#E5E7EB] bg-white hover:bg-blue-50 hover:border-[#2563EB] items-center justify-center text-[#0B1F4D] transition-all cursor-pointer shadow-md"
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
                    ? 'border-[#2563EB]/40 shadow-xl shadow-blue-900/5 -translate-y-1'
                    : 'border-[#E5E7EB] hover:border-[#2563EB]/30 shadow-sm'
                }`}
              >
                <div>
                  {/* Glowing Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-[#2563EB] fill-[#2563EB]/15 rotate-180" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                  {/* User Initial Avatar or Photo */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0B1F4D] to-[#2563EB] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
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
