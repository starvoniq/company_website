import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  onStartProject?: () => void;
  onWatchVideo?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartProject, onWatchVideo }) => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cosmic Starfield Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#060d24] border border-blue-500/25 shadow-2xl shadow-blue-950/30 p-8 sm:p-12 lg:p-14 group">
          
          {/* Starfield Image Background - Clearly Visible with Gentle Blur */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <img 
              src="/images/stars.jpg" 
              alt="StarVoniq Constellation"
              className="w-full h-full object-cover object-center opacity-85 blur-[3px] scale-105"
            />
            {/* Soft translucent left gradient for 100% readable text while keeping stars vividly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071330]/80 via-[#071330]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071330]/60 via-transparent to-[#071330]/30" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 text-left">
            
            {/* Left Content Area */}
            <div className="max-w-2xl">
              
              {/* Sharp Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[#FFC107] mb-5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  INITIATE ENGAGEMENT GET STARTED
                </span>
              </div>

              {/* High-Contrast Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                Ready To Engineer Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFE082] to-amber-200">
                  Connected Future?
                </span>
              </h2>

              {/* Crystal Clear Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
                From IoT hardware sensors and cloud telemetry to enterprise software platforms and AI models, we turn complex technical challenges into production-ready reality.
              </p>

              {/* Trust & Clarity Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107]" />
                  <span>Rapid Architecture Scoping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107]" />
                  <span>Production-Grade Reliability</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107]" />
                  <span>Direct Technical Lead Access</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              
              {/* Primary Action Button */}
              <button
                type="button"
                onClick={onStartProject}
                className="group btn-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-[#0B1F4D]/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D]" />
                </span>
              </button>

              {/* Secondary Clearly Labeled Action Button */}
              <button
                type="button"
                onClick={onWatchVideo}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 border border-white/20 hover:border-white/40 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#FFC107] transition-transform group-hover:scale-110" />
                <span>Explore Portfolio</span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


