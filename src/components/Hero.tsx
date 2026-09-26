import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-To-Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/[0.05] backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
                BUILDING CONNECTED INTELLIGENCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              Building Connected{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-blue-500 drop-shadow-[0_0_35px_rgba(245,158,11,0.4)]">
                Intelligence.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed mb-8">
              StarVoniq engineers high-performance digital systems, custom software, and premium{' '}
              <span className="text-slate-200 underline decoration-amber-500/60 decoration-1 underline-offset-4 font-medium">
                merchandise branding
              </span>{' '}
              that empower modern enterprises to innovate and lead.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* Start a Project Button */}
              <button
                onClick={onStartProject}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-semibold text-xs tracking-wide shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* View Our Work Button */}
              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-semibold text-xs tracking-wide hover:border-white/40 transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                <span>View Our Work</span>
                <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-400 transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
              </button>
            </div>

            {/* Trusted By Innovators */}
            <div className="w-full pt-4 border-t border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4">
                TRUSTED BY INNOVATORS WORLDWIDE
              </p>
              
              {/* Company Logo Names */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Microsoft */}
                <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-[#f25022] w-1.5 h-1.5" />
                    <div className="bg-[#7fba00] w-1.5 h-1.5" />
                    <div className="bg-[#00a4ef] w-1.5 h-1.5" />
                    <div className="bg-[#ffb900] w-1.5 h-1.5" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">Microsoft</span>
                </div>

                {/* AWS */}
                <div className="text-xs font-extrabold tracking-wider text-slate-300 hover:text-orange-400 transition-colors">
                  aws
                </div>

                {/* Google */}
                <div className="text-xs font-semibold tracking-wide text-slate-300 hover:text-white transition-colors">
                  <span className="text-blue-400">G</span>
                  <span className="text-red-400">o</span>
                  <span className="text-yellow-400">o</span>
                  <span className="text-blue-400">g</span>
                  <span className="text-green-400">l</span>
                  <span className="text-red-400">e</span>
                </div>

                {/* Vercel */}
                <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                  <span className="text-xs font-bold tracking-tight">vercel</span>
                </div>

                {/* Intel */}
                <div className="text-xs font-black tracking-tight text-slate-300 hover:text-blue-400 transition-colors">
                  intel.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Monument */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-amber-500/10 rounded-full blur-3xl transform scale-110 pointer-events-none" />

            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl shadow-orange-950/40 border border-orange-500/20 group">
              <img
                src="/images/hero-3d.png"
                alt="StarVoniq 3D Innovation Monument"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-40 pointer-events-none" />

              {/* Floating Status Pill */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-medium text-slate-300">Live Innovation Platform</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
