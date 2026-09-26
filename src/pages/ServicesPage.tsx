import React, { useState } from 'react';
import { servicesData } from '../data/siteData';
import { ContactModal } from '../components/ContactModal';
import { ArrowRight, CheckCircle2, Code2, Globe, Wifi, Cpu, Layers, Video, Shirt } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('web-dev');

  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-6 h-6 text-orange-500" />;
      case 'software-dev':
        return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'iot-solutions':
        return <Wifi className="w-6 h-6 text-sky-400" />;
      case 'ai-ml':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'design-3d':
        return <Layers className="w-6 h-6 text-amber-400" />;
      case 'video-creative':
        return <Video className="w-6 h-6 text-violet-400" />;
      case 'merchandise-branding':
        return <Shirt className="w-6 h-6 text-amber-400" />;
      default:
        return <Globe className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div className="pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Specialized Digital Services Built For Scale.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            From modern responsive web applications to enterprise cloud systems, embedded IoT telemetry, and corporate merchandise branding, StarVoniq engineers high-performance digital products from Nairobi to the world.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c101a] border border-white/10 hover:border-orange-500/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => {
                    setSelectedService(service.id);
                    setIsContactOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-orange-500/20"
                >
                  <span>Request A Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Features and Tech Stack */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Deliverables & Focus
                  </h4>
                  <ul className="space-y-2">
                    {service.features?.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};
