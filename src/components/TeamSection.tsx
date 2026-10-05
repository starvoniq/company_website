import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { teamData } from '../data/siteData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white text-[#1E293B] relative overflow-hidden">
      {/* Decorative dot matrix on right */}
      <div className="absolute top-1/3 right-6 hidden xl:grid grid-cols-6 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header row with "Meet The Full Team ->" link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2 block">
              OUR TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] leading-tight">
              The Experts Behind <span className="text-[#2563EB]">StarVoniq.</span>
            </h2>
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#0B1F4D] hover:text-[#2563EB] transition-colors mt-4 sm:mt-0"
          >
            <span>Meet The Full Team</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="flex flex-col group text-left"
            >
              {/* Photo Frame with subtle rounded corners */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-100 mb-4 border border-[#E5E7EB] group-hover:border-[#2563EB]/40 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-sm font-bold text-[#0B1F4D] leading-snug group-hover:text-[#2563EB] transition-colors">
                {member.name}
              </h3>
              <p className="text-[11px] font-semibold text-[#2563EB] mb-3">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
