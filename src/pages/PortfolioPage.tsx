import React, { useState } from 'react';
import { projectsData } from '../data/siteData';
import { ProjectModal } from '../components/ProjectModal';
import { ContactModal } from '../components/ContactModal';
import type { ProjectItem } from '../types';
import { ArrowRight, Filter } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const categories = ['All', 'Web Development', 'Business Website', 'E-Commerce'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 text-left bg-white min-h-screen bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-3">
            // VERIFIED DEPLOYMENTS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F4D] tracking-tight leading-[1.08] mb-4">
            Production Case Studies.
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            A selection of live platforms, web infrastructure, and digital systems built for educational institutions, enterprises, and modern commerce.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10">
          <span className="flex items-center gap-1.5 text-xs text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/25'
                  : 'bg-[#F8FAFC] text-slate-600 hover:text-[#0B1F4D] hover:bg-slate-100 border border-[#E5E7EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group p-5 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-[#E5E7EB]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#2563EB] border border-[#E5E7EB] shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#2563EB] mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#0B1F4D] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] text-xs font-semibold text-slate-600 group-hover:text-[#0B1F4D]">
                <span>View Project</span>
                <span className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};
