import React from 'react';
import { Sparkles, ShieldCheck, Headphones, TrendingUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-orange-500" />,
      title: 'Innovative Solutions',
      description: 'We use the latest technologies to build future-ready products.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      title: 'Quality & Reliability',
      description: 'We deliver tested solutions designed to scale and last.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-orange-500" />,
      title: 'Client-Centered Approach',
      description: 'We listen, understand and deliver exactly what you need.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      title: 'Scalable & Future-Ready',
      description: 'Our solutions grow with your business and adapt to change.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative dot matrix */}
      <div className="absolute top-10 left-8 hidden md:grid grid-cols-6 gap-2 opacity-25 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 block mb-2">
            WHY CHOOSE ELEVONE?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            We Don't Just Build. <span className="text-orange-500">We Solve.</span>
          </h2>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <span className="group-hover:brightness-200 transition-all">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
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
