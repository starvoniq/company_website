import React from 'react';
import { teamData } from '../data/siteData';
import { Mail, MapPin, Target, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon, TwitterXIcon } from '../components/SocialIcons';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 text-left bg-white min-h-screen bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story & Vision Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-3">
              // ABOUT STARVONIQ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F4D] tracking-tight leading-[1.08] mb-6">
              Building Connected Technology.
            </h1>
            <p className="text-slate-700 text-base leading-relaxed mb-4 font-normal">
              StarVoniq is a technology engineering and innovation company headquartered in Nairobi, Kenya. We design and engineer connected systems that bring together software architecture, data pipelines, artificial intelligence, Internet of Things (IoT), and embedded technologies to solve real-world problems.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              By connecting physical sensors, digital platforms, data, and edge intelligence, we create practical, scalable solutions—from early architecture through global deployment.
            </p>
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
              <span>HQ: Nairobi, Kenya • Global Distributed Engineering</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#0B1F4D]">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                To make technology work together in useful ways—connecting devices, platforms, data, and intelligence to address real needs with secure, reliable systems, from idea to deployment.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Obsession with Code Quality and Performance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Human-Centered, Intuitive Design</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Reliable & Transparent Delivery Cycles</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Team Showcase */}
        <div>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] block mb-2">
              LEADERSHIP & ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F4D] tracking-tight">
              The Minds Behind StarVoniq
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-[#E5E7EB]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1F4D] group-hover:text-[#2563EB] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2563EB] mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB] text-slate-400">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2563EB] transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2563EB] transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <TwitterXIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="hover:text-[#2563EB] transition-colors"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
