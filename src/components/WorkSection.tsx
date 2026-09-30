import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/siteData';
import type { ProjectItem } from '../types';

interface WorkSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#0B1F4D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFC107] mb-2 block">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Projects That <br className="hidden sm:inline" />
              Make An <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-amber-200">Impact.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3 sm:max-w-sm">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed sm:text-right">
              A few of the websites and digital experiences we’ve built.
            </p>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2.5 text-xs font-bold text-[#FFC107] hover:text-[#FFD54F] transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Responsive grid keeps every project visible without a carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="bg-[#0e2763]/70 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FFC107]/60 p-3.5 flex flex-col justify-between group cursor-pointer transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 motion-reduce:transform-none motion-reduce:transition-none"
            >
              {/* Image Container with 16:10 aspect */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 mb-3.5 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              </div>

              {/* Content */}
              <div className="flex flex-col text-left px-1">
                {/* Pill Tag */}
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[#2563EB]/25 text-[#FFD54F] border border-[#FFC107]/30">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFC107] transition-colors leading-snug mb-1">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-medium text-slate-300">
                    {project.category}
                  </span>
                  <span className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#FFC107] text-slate-300 group-hover:text-[#0B1F4D] flex items-center justify-center transition-all">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
