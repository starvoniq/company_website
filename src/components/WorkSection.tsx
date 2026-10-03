import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/siteData';
import type { ProjectItem } from '../types';

interface WorkSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0B1F4D] text-white relative overflow-hidden bg-tech-grid-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FFC107]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#FFC107] mb-3 block">
              PRODUCTION SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Selected Work & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-amber-200">
                Deployments.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3 sm:max-w-sm">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed sm:text-right font-normal">
              High-performance web applications, digital portals, and connected business platforms.
            </p>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#FFC107] hover:text-[#0B1F4D] text-xs font-bold text-[#FFD54F] transition-all duration-300 border border-white/15"
            >
              <span>View All Deployments</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="glass-panel-navy rounded-2xl p-4 flex flex-col justify-between group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#FFC107]/80 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Image Container with 16:10 aspect */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 mb-4 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                {/* Floating Hover Action */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white group-hover:text-[#FFC107]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col text-left px-1">
                {/* Pill Tag */}
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider bg-[#2563EB]/40 text-[#FFD54F] border border-[#FFC107]/40">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#FFC107] transition-colors leading-snug mb-1">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                  <span className="text-[11px] font-medium text-slate-300">
                    {project.category}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FFC107] text-slate-300 group-hover:text-[#0B1F4D] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

