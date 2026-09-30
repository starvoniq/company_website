import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface CtaBannerProps {
  onStartProject?: () => void;
  onWatchVideo?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartProject, onWatchVideo }) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B1F4D] via-[#12337d] to-[#2563EB] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-blue-950/25 border border-white/10 bg-tech-grid-dark">
          
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC107]/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB]/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-left">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#FFD54F] block mb-3">
                // INITIATE ENGAGEMENT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Ready To Engineer Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-amber-200">
                  Connected Future?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                From IoT embedded systems to high-velocity software platforms and machine intelligence, we turn architectural vision into high-impact reality.
              </p>
            </div>

            {/* Right Buttons: Start a Project + Circle Play */}
            <div className="flex items-center gap-3.5 shrink-0">
              <button
                onClick={onStartProject}
                className="group btn-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-black/20 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-[#0B1F4D]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D]" />
                </span>
              </button>

              <button
                onClick={onWatchVideo}
                aria-label="Play video showcase"
                className="w-13 h-13 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95 border border-white/20 backdrop-blur-md"
              >
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

