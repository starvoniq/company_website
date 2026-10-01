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
  Sparkles,
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
    }, 2600);

    return () => clearInterval(interval);
  }, [isHovered]);

  const getStepIcon = (index: number, isActive: boolean) => {
    const iconClass = `w-4 h-4 transition-all duration-300 ${
      isActive
        ? 'text-[#0B1F4D] scale-110'
        : 'text-[#60A5FA] group-hover:text-white transition-colors'
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
        <div className="text-left mb-14">
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

        {/* Cosmic Constellation Stage with stars.jpg Backdrop */}
        <div 
          className="relative rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800/80 overflow-hidden bg-[#060d24] shadow-2xl shadow-blue-950/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cosmic Starfield Image Backdrop */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <img 
              src="/images/stars.jpg" 
              alt="StarVoniq Constellation"
              className="w-full h-full object-cover opacity-65 mix-blend-screen scale-105 transform -translate-y-4"
            />
            {/* Cinematic vignettes to seamlessly integrate with dark navy stage */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d24] via-transparent to-[#060d24]/80" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#060d24]/50 to-[#060d24]" />
            <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] bg-[#2563EB]/20 rounded-full blur-[120px]" />
          </div>

          {/* Top Status Bar HUD */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-300">
                STARVONIQ PIPELINE // 7 CONSTELLATION NODES
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FFC107] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC107] animate-pulse" />
              <span>PHASE 0{activeStep + 1}: {processSteps[activeStep].title.toUpperCase()}</span>
            </div>
          </div>

          {/* 7 Connected Steps Horizontal Timeline with Flow Beam */}
          <div className="relative z-10">
            {/* Glowing Animated Energy Beam (Desktop) */}
            <div className="hidden lg:block absolute top-[42px] left-[7.14%] right-[7.14%] h-[2px] z-0 pointer-events-none">
              {/* Base subtle guide line */}
              <div className="absolute inset-0 bg-white/15" />
              
              {/* Active completed glow line */}
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563EB] to-[#FFC107] transition-all duration-700 ease-out shadow-[0_0_8px_#2563EB]"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />

              {/* Continuous traveling light packet along the circuit */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="w-36 h-full bg-gradient-to-r from-transparent via-[#FFC107] to-transparent opacity-95 blur-[0.5px]"
                  style={{
                    animation: 'packet-travel 2.6s linear infinite',
                  }}
                />
              </div>

              {/* Glowing comet head traveling smoothly with active step */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2563EB]/60 blur-md transition-all duration-700 ease-out"
                style={{
                  left: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FFC107] shadow-[0_0_14px_#FFC107] transition-all duration-700 ease-out"
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
                        ? 'bg-gradient-to-b from-white/[0.14] to-[#0B1F4D]/90 shadow-2xl shadow-blue-950/40 -translate-y-2 border border-[#FFC107]/60 ring-1 ring-[#FFC107]/40 backdrop-blur-md'
                        : 'bg-white/[0.05] hover:bg-white/[0.10] hover:shadow-lg hover:-translate-y-1 border border-white/10 backdrop-blur-md'
                    }`}
                  >
                    {/* Node icon box with glowing aura when active */}
                    <div className="relative mb-3.5">
                      {/* Active pulse aura */}
                      {isActive && (
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/40 via-amber-400/30 to-[#FFC107]/40 blur-md animate-pulse pointer-events-none" />
                      )}

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md relative z-10 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#FFC107] to-[#F4B400] border-2 border-[#FFC107] text-[#0B1F4D] scale-110 shadow-amber-500/30'
                            : 'bg-[#0B1F4D]/80 border-2 border-white/20 text-[#60A5FA] group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105'
                        }`}
                      >
                        {getStepIcon(idx, isActive)}
                      </div>
                    </div>

                    {/* Step number badge */}
                    <span 
                      className={`text-[10px] font-mono font-bold tracking-wider mb-1.5 transition-colors ${
                        isActive ? 'text-[#FFC107]' : 'text-blue-300/70 group-hover:text-blue-300'
                      }`}
                    >
                      PHASE 0{idx + 1}
                    </span>

                    {/* Title */}
                    <h3 
                      className={`text-xs sm:text-sm font-bold mb-1.5 transition-colors ${
                        isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-slate-300 group-hover:text-white leading-relaxed max-w-[140px] font-normal transition-colors">
                      {step.description}
                    </p>

                    {/* Subtle chevron flow indicator for smaller screens */}
                    {idx < processSteps.length - 1 && (
                      <div className="lg:hidden mt-3 text-slate-500 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-400/60" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


