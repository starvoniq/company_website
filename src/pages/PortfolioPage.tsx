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

  const categories = ['All', 'Web Development', 'IoT Solution', 'AI / NLP', 'Merchandise & Branding'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
            PROVEN TRACK RECORD
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Featured Projects & Engineering Case Studies
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Take a look at how we’ve helped businesses build modern platforms, streamline operations with IoT, automate with AI, and launch distinctive corporate merchandise.
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
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
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
              className="group p-5 rounded-3xl bg-[#0c101a] border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md text-orange-400 border border-white/10">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-orange-500 mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-semibold text-slate-400 group-hover:text-white">
                <span>View Full Case Study</span>
                <span className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-orange-500 text-white flex items-center justify-center transition-colors">
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
