import React from 'react';
import { teamData } from '../data/siteData';
import { Mail, MapPin, Target, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon, TwitterXIcon } from '../components/SocialIcons';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story & Vision Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
              ABOUT STARVONIQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Building Connected Intelligence For Africa & The World.
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              StarVoniq is a premier technology engineering, digital systems, and corporate merchandise branding studio headquartered in Nairobi, Kenya. We bridge the gap between intelligent software systems and high-impact physical brand presence.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Founded on the belief that digital solutions and branded merchandise should be both aesthetically inspiring and architecturally resilient, we collaborate with startups, enterprises, and innovators across Africa and globally.
            </p>
            
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              <span>HQ: Nairobi, Kenya • Remote Worldwide</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#0c101a] border border-orange-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                To engineer world-class, reliable, and intelligent digital products that elevate businesses, accelerate productivity, and pioneer the next era of digital infrastructure.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Obsession with Code Quality and Performance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Human-Centered, Intuitive Design</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Reliable & Transparent Delivery Cycles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Showcase */}
        <div>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
              LEADERSHIP & ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Minds Behind ElevOne
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-3xl bg-[#0c101a] border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 mb-5 border border-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-orange-500 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5 text-slate-400">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
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
                      className="hover:text-white transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <TwitterXIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="hover:text-white transition-colors"
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
