import React from 'react';
import { X, Calendar, User, Tag, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilar?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0d121f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-left max-h-[90vh] flex flex-col">
        
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
              {project.tag}
            </span>
            <span className="text-xs text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Screenshot */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Quick Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            {project.client && (
              <div className="flex items-center gap-2 text-xs">
                <User className="w-4 h-4 text-orange-500 shrink-0" />
                <div>
                  <span className="text-slate-500 block">Client</span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-4 h-4 text-orange-500 shrink-0" />
                <div>
                  <span className="text-slate-500 block">Delivered</span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 text-xs">
              <Tag className="w-4 h-4 text-orange-500 shrink-0" />
              <div>
                <span className="text-slate-500 block">Category</span>
                <span className="text-white font-medium">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-3">
                Key Deliverables & Results
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-white/10 shrink-0 flex items-center justify-between bg-black/30">
          <button
            onClick={() => {
              onClose();
              if (onStartSimilar) onStartSimilar();
            }}
            className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 cursor-pointer transition-all"
          >
            Build A Similar Project
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
