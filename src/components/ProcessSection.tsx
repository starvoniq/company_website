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
        return <Search className="w-4 h-4 text-orange-400" />;
      case 1:
        return <Compass className="w-4 h-4 text-orange-400" />;
      case 2:
        return <Palette className="w-4 h-4 text-orange-400" />;
      case 3:
        return <Terminal className="w-4 h-4 text-orange-400" />;
      case 4:
        return <CheckCircle2 className="w-4 h-4 text-orange-400" />;
      case 5:
        return <Rocket className="w-4 h-4 text-orange-400" />;
      case 6:
        return <Headphones className="w-4 h-4 text-orange-400" />;
      default:
        return <Search className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#070a11] text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-48 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title area */}
        <div className="text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2 block">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight mb-3">
            From Idea To <span className="text-orange-500">Deployment.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            A proven process that ensures quality, transparency and results every step of the way.
          </p>
        </div>

        {/* 7 Connected Steps Horizontal Timeline */}
        <div className="relative">
          {/* Connector line (Desktop) */}
          <div className="hidden lg:block absolute top-[27px] left-8 right-8 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center group"
              >
                {/* Node icon circle */}
                <div className="w-14 h-14 rounded-full bg-[#0e1424] border-2 border-orange-500/60 group-hover:border-orange-400 group-hover:scale-110 flex items-center justify-center mb-3 transition-all duration-300 shadow-lg shadow-orange-950/40">
                  {getStepIcon(idx)}
                </div>

                {/* Step number badge */}
                <span className="text-[11px] font-extrabold text-orange-500 tracking-wider mb-1">
                  {step.step}
                </span>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-slate-400 leading-relaxed max-w-[140px]">
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
