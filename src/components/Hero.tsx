import React from 'react';
import { ArrowRight, Play, Cpu, Wifi, Activity } from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white bg-tech-grid">
      {/* Precision ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow-slow" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FFC107]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline and Call-To-Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Tech Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/95 shadow-xs backdrop-blur-md mb-6 hover:border-[#2563EB]/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#0B1F4D] uppercase">
                STARVONIQ // CONNECTED SYSTEMS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.05] text-[#0B1F4D] mb-6">
              Building Connected{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#F4B400]">
                Technology.
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed mb-8">
              StarVoniq synchronizes software architecture, cloud telemetry, artificial intelligence, and embedded IoT hardware to solve real-world industrial and commercial challenges.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Start a Project Button - Brand CTA */}
              <button
                onClick={onStartProject}
                className="group btn-shimmer inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-[#0B1F4D]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D]" />
                </span>
              </button>

              {/* View Our Work Button */}
              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1F4D] font-bold text-xs tracking-wide hover:border-[#2563EB]/40 transition-all duration-200 cursor-pointer shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Portfolio</span>
                <span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current text-[#2563EB] ml-0.5" />
                </span>
              </button>
            </div>

            {/* Trusted By Innovators */}
            <div className="w-full pt-6 border-t border-slate-200/80">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
                ENGINEERED FOR ENTERPRISES & SCALE
              </p>
              
              {/* Company Logo Names */}
              <div className="flex flex-wrap items-center gap-7 sm:gap-9 opacity-85 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Microsoft */}
                <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-[#f25022] w-1.5 h-1.5" />
                    <div className="bg-[#7fba00] w-1.5 h-1.5" />
                    <div className="bg-[#00a4ef] w-1.5 h-1.5" />
                    <div className="bg-[#ffb900] w-1.5 h-1.5" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">Microsoft</span>
                </div>

                {/* AWS */}
                <div className="text-xs font-black tracking-wider text-slate-700 hover:text-[#2563EB] transition-colors">
                  aws
                </div>

                {/* Google */}
                <div className="text-xs font-semibold tracking-wide text-slate-700 hover:text-slate-900 transition-colors">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </div>

                {/* Vercel */}
                <div className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                  <span className="text-xs font-bold tracking-tight">vercel</span>
                </div>

                {/* Intel */}
                <div className="text-xs font-black tracking-tight text-slate-700 hover:text-[#2563EB] transition-colors">
                  intel.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Monument with Telemetry Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            {/* Ambient Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/20 via-transparent to-[#FFC107]/20 rounded-full blur-3xl transform scale-110 pointer-events-none" />

            {/* Bespoke Telemetry Card 1 - Top Left */}
            <div className="absolute -top-3 -left-3 sm:-left-6 z-20 animate-float-subtle glass-panel-light px-4 py-2.5 rounded-2xl shadow-xl shadow-blue-950/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100 font-bold">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#2563EB] font-bold">[01] IOT_TELEMETRY</span>
                <span className="text-xs font-bold text-[#0B1F4D]">Connected Devices</span>
              </div>
            </div>

            {/* Bespoke Telemetry Card 2 - Bottom Right */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 animate-float-subtle glass-panel-light px-4 py-2.5 rounded-2xl shadow-xl shadow-blue-950/5 flex items-center gap-3" style={{ animationDelay: '-2s' }}>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#F4B400] flex items-center justify-center border border-amber-100 font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-amber-600 font-bold">[02] NEURAL_ENGINE</span>
                <span className="text-xs font-bold text-[#0B1F4D]">AI & Model Pipeline</span>
              </div>
            </div>

            {/* 3D Center Artwork Card */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/20 border border-slate-200 group bg-[#0B1F4D] transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/hero-3d.png"
                alt="StarVoniq 3D Innovation Monument"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Status Pill */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[11px] font-mono font-bold text-[#0B1F4D]">SYS_ACTIVE // 99.9%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

