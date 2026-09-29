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
        return (
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
            <Globe className="w-5 h-5" />
          </div>
        );
      case 'software-dev':
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600">
            <Code2 className="w-5 h-5" />
          </div>
        );
      case 'iot-solutions':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600">
            <Wifi className="w-5 h-5" />
          </div>
        );
      case 'ai-ml':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
            <Cpu className="w-5 h-5" />
          </div>
        );
      case 'design-3d':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
            <Layers className="w-5 h-5" />
          </div>
        );
      case 'video-creative':
        return (
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600">
            <Video className="w-5 h-5" />
          </div>
        );
      case 'security-systems':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
        );
      case 'merchandise-branding':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
            <Shirt className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
            <Globe className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f8fafc] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left sticky top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">
              WHAT WE DO
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
              Technology That <br />
              <span className="text-orange-500">Works Together</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-sm">
              We connect digital engineering, IoT and embedded systems, AI and data, secure systems, and creative technology to solve real-world problems—from idea to deployment.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-slate-300 hover:border-orange-500 bg-white hover:bg-orange-50/50 text-slate-800 hover:text-orange-600 text-xs font-bold tracking-wide transition-all duration-200 shadow-sm"
            >
              <span>Explore All Services</span>
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Right Column: Services Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service.id)}
                className="group relative p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="mb-4">
                    {getIcon(service.id)}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-end pt-2 text-slate-400 group-hover:text-orange-500 transition-colors">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
