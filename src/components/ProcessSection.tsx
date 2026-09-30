import React from 'react';
import {
  Search,
  Compass,
  Palette,
  Terminal,
  CheckCircle2,
  Rocket,
  Headphones,
} from 'lucide-react';
import { processSteps } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      case 1:
        return <Compass className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      case 2:
        return <Palette className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      case 3:
        return <Terminal className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      case 4:
        return <CheckCircle2 className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      case 5:
        return <Rocket className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      case 6:
        return <Headphones className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
      default:
        return <Search className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title area */}
        <div className="text-left mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-3 block">
            // DELIVERY LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1F4D] leading-tight mb-3">
            From Architecture To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">Deployment.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal">
            A rigorous engineering roadmap ensuring transparent milestones, verified quality, and seamless operational handoffs.
          </p>
        </div>

        {/* 7 Connected Steps Horizontal Timeline */}
        <div className="relative">
          {/* Connector line (Desktop) */}
          <div className="hidden lg:block absolute top-[27px] left-8 right-8 h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB] to-[#2563EB]/20 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center group p-3 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-blue-950/5 hover:-translate-y-1 cursor-default"
              >
                {/* Node icon box */}
                <div className="w-13 h-13 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:scale-105 flex items-center justify-center mb-3 transition-all duration-300 shadow-xs cursor-pointer">
                  {getStepIcon(idx)}
                </div>

                {/* Step number */}
                <span className="text-[10px] font-mono font-bold text-[#2563EB] mb-1">
                  PHASE 0{idx + 1}
                </span>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-[#0B1F4D] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-slate-600 leading-relaxed max-w-[140px] font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

