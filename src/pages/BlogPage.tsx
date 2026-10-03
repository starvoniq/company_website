import React from 'react';
import { blogPostsData } from '../data/siteData';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 text-left bg-white min-h-screen bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-3">
            ENGINEERING DISPATCHES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F4D] tracking-tight leading-[1.08] mb-4">
            Technical Perspectives & Insights.
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Deep dives into connecting software, embedded devices, cloud data pipelines, and artificial intelligence architecture.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-[#E5E7EB]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#2563EB] border border-[#E5E7EB] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-[#0B1F4D] group-hover:text-[#2563EB] transition-colors leading-snug mb-3">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <User className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{post.author}</span>
                </div>

                <span className="text-xs font-bold text-[#2563EB] group-hover:text-[#3B82F6] flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
