import React, { useState, useEffect } from 'react';
import {
  Search,
  Compass,
  Palette,
  Terminal,
  CheckCircle2,
  Rocket,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import { processSteps } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Subtle, rhythmic sequential flow that gently cycles through steps
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [isHovered]);

  const getStepIcon = (index: number, isActive: boolean) => {
    const iconClass = `w-4 h-4 transition-all duration-300 ${
      isActive
        ? 'text-white scale-110'
        : 'text-[#2563EB] group-hover:text-white transition-colors'
    }`;

    switch (index) {
      case 0:
        return <Search className={iconClass} />;
      case 1:
        return <Compass className={iconClass} />;
      case 2:
        return <Palette className={iconClass} />;
      case 3:
        return <Terminal className={iconClass} />;
      case 4:
        return <CheckCircle2 className={iconClass} />;
      case 5:
        return <Rocket className={iconClass} />;
      case 6:
        return <Headphones className={iconClass} />;
      default:
        return <Search className={iconClass} />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden border-t border-slate-200/60">
      {/* Precision ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-500/8 via-amber-500/5 to-blue-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title area */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              DELIVERY LIFECYCLE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1F4D] leading-tight mb-3">
            From Architecture To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">Deployment.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
            A rigorous engineering roadmap ensuring transparent milestones, verified quality, and seamless operational handoffs.
          </p>
        </div>

        {/* 7 Connected Steps Horizontal Timeline with Flow Beam */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glowing Animated Energy Beam (Desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[7.14%] right-[7.14%] h-[2px] z-0 pointer-events-none">
            {/* Base subtle guide line */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-blue-200/70 to-slate-200" />
            
            {/* Active completed glow line */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563EB] to-[#FFC107] transition-all duration-700 ease-out"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />

            {/* Continuous traveling light packet along the circuit */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="w-32 h-full bg-gradient-to-r from-transparent via-[#FFC107] to-transparent opacity-90 blur-[0.5px]"
                style={{
                  animation: 'packet-travel 2.8s linear infinite',
                }}
              />
            </div>

            {/* Glowing comet head traveling smoothly with active step */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2563EB]/40 blur-md transition-all duration-700 ease-out"
              style={{
                left: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FFC107] shadow-[0_0_12px_#FFC107] transition-all duration-700 ease-out"
              style={{
                left: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5 sm:gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const isActive = idx === activeStep;

              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`flex flex-col items-center text-center group p-3.5 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'bg-white shadow-xl shadow-blue-950/8 -translate-y-2 border border-blue-200/80'
                      : 'hover:bg-white hover:shadow-lg hover:shadow-blue-950/5 hover:-translate-y-1 border border-transparent'
                  }`}
                >
                  {/* Node icon box with glowing aura when active */}
                  <div className="relative mb-3.5">
                    {/* Active pulse aura */}
                    {isActive && (
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/30 via-indigo-500/20 to-[#FFC107]/30 blur-md animate-pulse pointer-events-none" />
                    )}

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs relative z-10 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] border-2 border-[#2563EB] text-white scale-110 shadow-lg shadow-blue-600/25 ring-4 ring-blue-500/15'
                          : 'bg-white border-2 border-slate-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:scale-105'
                      }`}
                    >
                      {getStepIcon(idx, isActive)}
                    </div>
                  </div>

                  {/* Step number badge */}
                  <span 
                    className={`text-[10px] font-mono font-bold tracking-wider mb-1.5 transition-colors ${
                      isActive ? 'text-[#2563EB]' : 'text-slate-400 group-hover:text-[#2563EB]'
                    }`}
                  >
                    PHASE 0{idx + 1}
                  </span>

                  {/* Title */}
                  <h3 
                    className={`text-xs sm:text-sm font-bold mb-1.5 transition-colors ${
                      isActive ? 'text-[#0B1F4D]' : 'text-[#0B1F4D] group-hover:text-[#2563EB]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-slate-500 group-hover:text-slate-700 leading-relaxed max-w-[140px] font-normal transition-colors">
                    {step.description}
                  </p>

                  {/* Subtle chevron flow indicator for smaller screens */}
                  {idx < processSteps.length - 1 && (
                    <div className="lg:hidden mt-3 text-slate-300 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};


