import React, { useState } from 'react';
import { servicesData } from '../data/siteData';
import { ContactModal } from '../components/ContactModal';
import { ArrowRight, CheckCircle2, Code2, Globe, Wifi, Cpu, Layers, Video, Shirt, ShieldCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('web-dev');

  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-6 h-6 text-[#2563EB]" />;
      case 'software-dev':
        return <Code2 className="w-6 h-6 text-[#3B82F6]" />;
      case 'iot-solutions':
        return <Wifi className="w-6 h-6 text-sky-600" />;
      case 'ai-ml':
        return <Cpu className="w-6 h-6 text-[#F4B400]" />;
      case 'design-3d':
        return <Layers className="w-6 h-6 text-[#2563EB]" />;
      case 'video-creative':
        return <Video className="w-6 h-6 text-[#3B82F6]" />;
      case 'security-systems':
        return <ShieldCheck className="w-6 h-6 text-[#0B1F4D]" />;
      case 'merchandise-branding':
        return <Shirt className="w-6 h-6 text-[#FFC107]" />;
      default:
        return <Globe className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  return (
    <div className="pt-32 pb-24 text-left bg-white min-h-screen bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] block mb-3">
            // CAPABILITIES & INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F4D] tracking-tight leading-[1.08] mb-4">
            Connected Systems, Engineered For Scale.
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            StarVoniq brings together software engineering, IoT telemetry and embedded hardware, AI model pipelines, and secure infrastructure into unified, production-ready solutions.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm hover:shadow-lg"
            >
              {/* Left Column */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563EB] border border-blue-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F4D] mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => {
                    setSelectedService(service.id);
                    setIsContactOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <span>Request A Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Features and Tech Stack */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4D] mb-3">
                    Deliverables & Focus
                  </h4>
                  <ul className="space-y-2">
                    {service.features?.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4D] mb-3">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs bg-[#F8FAFC] border border-[#E5E7EB] text-[#1E293B]"
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
