import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#FFC107]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-To-Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2563EB]/25 bg-[#2563EB]/5 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase">
                BUILDING CONNECTED TECHNOLOGY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#0B1F4D] mb-6">
              Building Connected{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#F4B400] drop-shadow-sm">
                Technology.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed mb-8">
              StarVoniq brings software, data, artificial intelligence, and Internet of Things (IoT) technologies—including sensors and embedded systems—together to solve real-world problems. From idea to deployment, we build practical, scalable solutions.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* Start a Project Button - Brand CTA */}
              <button
                onClick={onStartProject}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-bold text-xs tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-[#0B1F4D]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B1F4D]" />
                </span>
              </button>

              {/* View Our Work Button */}
              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-slate-100 text-[#0B1F4D] font-semibold text-xs tracking-wide hover:border-[#2563EB]/40 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>View Our Work</span>
                <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current text-[#2563EB] ml-0.5" />
                </span>
              </button>
            </div>

            {/* Trusted By Innovators */}
            <div className="w-full pt-4 border-t border-[#E5E7EB]">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
                TRUSTED BY INNOVATORS WORLDWIDE
              </p>
              
              {/* Company Logo Names */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
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
                <div className="text-xs font-extrabold tracking-wider text-slate-600 hover:text-[#2563EB] transition-colors">
                  aws
                </div>

                {/* Google */}
                <div className="text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </div>

                {/* Vercel */}
                <div className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                  <span className="text-xs font-bold tracking-tight">vercel</span>
                </div>

                {/* Intel */}
                <div className="text-xs font-black tracking-tight text-slate-600 hover:text-[#2563EB] transition-colors">
                  intel.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Monument */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Ambient Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/15 via-transparent to-[#FFC107]/15 rounded-full blur-3xl transform scale-110 pointer-events-none" />

            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-[#E5E7EB] group bg-[#0B1F4D]">
              <img
                src="/images/hero-3d.png"
                alt="StarVoniq 3D Innovation Monument"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D] via-transparent to-transparent opacity-30 pointer-events-none" />

              {/* Floating Status Pill */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-[#E5E7EB] px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
                <span className="text-[11px] font-bold text-[#0B1F4D]">Live Innovation Platform</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
