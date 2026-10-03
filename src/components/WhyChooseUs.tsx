import React from 'react';
import { ShieldCheck, Cpu, Layers, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#2563EB]" />,
      tag: 'ARCHITECTURE',
      title: 'Full-Stack Ecosystem',
      description: 'Unified hardware, cloud telemetry, software platforms, and data pipelines built as one cohesive system.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2563EB]" />,
      tag: 'RESILIENCE',
      title: 'Enterprise Security',
      description: 'Zero-trust architecture, hardware-level encryption, and fault-tolerant cloud backbones by design.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#2563EB]" />,
      tag: 'INTELLIGENCE',
      title: 'Applied AI & Telemetry',
      description: 'Real-time sensor intelligence, predictive analytics, and automated edge computing models.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
      tag: 'VELOCITY',
      title: 'Turnkey Delivery',
      description: 'Rapid prototyping to field-tested production deployment with complete documentation and support.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white text-[#1E293B] relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-3">
            WHY STARVONIQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1F4D] leading-tight">
            We Don't Just Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">We Engineer.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            Bridging hardware, cloud intelligence, and high-performance software into reliable production systems.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col text-left p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-950/5 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white transition-all duration-300 shadow-xs">
                  <span className="group-hover:brightness-200 transition-all">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 group-hover:text-[#2563EB] transition-colors">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0B1F4D] mb-2 group-hover:text-[#2563EB] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

