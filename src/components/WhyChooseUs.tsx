import React from 'react';
import { Sparkles, ShieldCheck, Headphones, TrendingUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#2563EB]" />,
      title: 'Innovative Solutions',
      description: 'We connect devices, platforms, data, and intelligence to address real-world needs.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2563EB]" />,
      title: 'Quality & Reliability',
      description: 'Security, resilience, and reliability are considered throughout the system.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#2563EB]" />,
      title: 'Client-Centered Approach',
      description: 'We start with your context and shape technology around the problem to solve.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#2563EB]" />,
      title: 'Scalable & Future-Ready',
      description: 'From idea to deployment, we build practical systems ready to evolve.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white text-[#1E293B] relative overflow-hidden">
      {/* Decorative dot matrix */}
      <div className="absolute top-10 left-8 hidden md:grid grid-cols-6 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] block mb-2">
            WHY STARVONIQ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] leading-tight">
            We Don't Just Build. <span className="text-[#2563EB]">We Solve.</span>
          </h2>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                <span className="group-hover:brightness-200 transition-all">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0B1F4D] mb-2 group-hover:text-[#2563EB] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
