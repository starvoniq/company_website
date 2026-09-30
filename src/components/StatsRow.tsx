import React from 'react';
import { ShieldCheck, Users, Layers, Briefcase, Award } from 'lucide-react';
import { statsData } from '../data/siteData';

export const StatsRow: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2563EB]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#2563EB]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#2563EB]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
      case 'Star':
        return <Award className="w-5 h-5 text-[#F4B400]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 mb-16 sm:mb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-950/5 border border-[#E5E7EB] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            {statsData.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-5 sm:p-6 flex items-center gap-3.5 transition-colors hover:bg-[#F8FAFC] ${
                  idx === 4 ? 'col-span-2 md:col-span-1 justify-center md:justify-start' : ''
                }`}
              >
                {/* Brand rounded square icon container */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/80">
                  {getIcon(stat.iconName)}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-xl sm:text-2xl font-black text-[#0B1F4D] tracking-tight leading-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs font-medium text-[#1E293B]/70 leading-snug">
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
