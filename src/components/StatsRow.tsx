import React from 'react';
import { ShieldCheck, Users, Layers, Briefcase, Award } from 'lucide-react';
import { statsData } from '../data/siteData';

export const StatsRow: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#2563EB]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#2563EB]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#2563EB]" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-[#2563EB]" />;
      case 'Star':
        return <Award className="w-4 h-4 text-[#F4B400]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#2563EB]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 mb-16 sm:mb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel-light rounded-2xl overflow-hidden p-2">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200/70">
            {statsData.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-4 sm:p-5 flex items-center gap-3.5 transition-all duration-300 hover:bg-slate-50/80 rounded-xl group ${
                  idx === 4 ? 'col-span-2 md:col-span-1 justify-center md:justify-start' : ''
                }`}
              >
                {/* Tech icon box */}
                <div className="w-10 h-10 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white transition-all duration-300 shadow-xs">
                  <span className="group-hover:brightness-200 transition-all">
                    {getIcon(stat.iconName)}
                  </span>
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-xl sm:text-2xl font-black text-[#0B1F4D] tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">
                    {stat.number}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

