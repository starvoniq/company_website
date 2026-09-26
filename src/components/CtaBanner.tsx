import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface CtaBannerProps {
  onStartProject?: () => void;
  onWatchVideo?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartProject, onWatchVideo }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#ff5500] via-[#ff6500] to-[#e04500] p-8 sm:p-12 lg:p-14 shadow-2xl shadow-orange-900/40">
          
          {/* Subtle geometric background pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-left">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-200 block mb-2">
                READY TO BUILD SOMETHING AMAZING?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let's Build The Future Together.
              </h2>

              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                Have a project in mind? Let's turn your ideas into powerful digital solutions.
              </p>
            </div>

            {/* Right Buttons: Start a Project + Circle Play */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0a0d14] hover:bg-black text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              <button
                onClick={onWatchVideo}
                aria-label="Play video showcase"
                className="w-11 h-11 rounded-full bg-[#0a0d14] hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95 border border-white/10"
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
