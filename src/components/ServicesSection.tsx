import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Code2,
  Wifi,
  Cpu,
  Layers,
  Video,
  Shirt,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-[#2563EB]" />;
      case 'software-dev':
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      case 'iot-solutions':
        return <Wifi className="w-5 h-5 text-sky-600" />;
      case 'ai-ml':
        return <Cpu className="w-5 h-5 text-[#F4B400]" />;
      case 'design-3d':
        return <Layers className="w-5 h-5 text-[#2563EB]" />;
      case 'video-creative':
        return <Video className="w-5 h-5 text-[#3B82F6]" />;
      case 'security-systems':
        return <ShieldCheck className="w-5 h-5 text-[#0B1F4D]" />;
      case 'merchandise-branding':
        return <Shirt className="w-5 h-5 text-[#FFC107]" />;
      default:
        return <Globe className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden border-t border-slate-200/60">
      {/* Background subtle radial ambient */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left sticky top-28">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-3">
              ARCHITECTURE & CAPABILITIES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B1F4D] leading-[1.1] mb-5">
              Technology That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">
                Works Together.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-sm font-normal">
              We connect digital software engineering, IoT and embedded hardware, AI algorithms, and secure systems to build practical, scalable infrastructure.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-slate-300 hover:border-[#2563EB] bg-white hover:bg-slate-50 text-[#0B1F4D] hover:text-[#2563EB] text-xs font-bold tracking-wide transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore All Capabilities</span>
              <span className="w-5 h-5 rounded-full bg-[#0B1F4D] text-white flex items-center justify-center group-hover:bg-[#2563EB] group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Right Column: Services Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service.id)}
                className="group relative p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-blue-950/5 hover:border-[#2563EB]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#2563EB] transition-colors">
                      0{index + 1} //
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F4D] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                    View Specifications
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] transform group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

