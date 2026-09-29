import React from 'react';
import { blogPostsData } from '../data/siteData';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
            INSIGHTS & ENGINEERING
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Perspectives on Modern Tech, AI, and Systems
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Practical perspectives on connecting software, devices, data, and intelligence—along with the engineering decisions that make systems useful, secure, and resilient.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-3xl bg-[#0c101a] border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md text-orange-400 border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-3">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <User className="w-3.5 h-3.5 text-orange-500" />
                  <span>{post.author}</span>
                </div>

                <span className="text-xs font-bold text-orange-400 group-hover:text-orange-300 flex items-center gap-1">
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
