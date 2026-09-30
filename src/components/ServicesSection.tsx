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
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB]">
            <Globe className="w-5 h-5" />
          </div>
        );
      case 'software-dev':
        return (
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-[#3B82F6]">
            <Code2 className="w-5 h-5" />
          </div>
        );
      case 'iot-solutions':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600">
            <Wifi className="w-5 h-5" />
          </div>
        );
      case 'ai-ml':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#F4B400]">
            <Cpu className="w-5 h-5" />
          </div>
        );
      case 'design-3d':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB]">
            <Layers className="w-5 h-5" />
          </div>
        );
      case 'video-creative':
        return (
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-[#3B82F6]">
            <Video className="w-5 h-5" />
          </div>
        );
      case 'security-systems':
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B1F4D]">
            <ShieldCheck className="w-5 h-5" />
          </div>
        );
      case 'merchandise-branding':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#FFC107]">
            <Shirt className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB]">
            <Globe className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#1E293B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left sticky top-28">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
              WHAT WE DO
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] leading-[1.15] mb-5">
              Technology That <br />
              <span className="text-[#2563EB]">Works Together</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-sm">
              We connect digital engineering, IoT and embedded systems, AI and data, secure systems, and creative technology to solve real-world problems—from idea to deployment.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#E5E7EB] hover:border-[#2563EB] bg-white hover:bg-blue-50/50 text-[#0B1F4D] hover:text-[#2563EB] text-xs font-bold tracking-wide transition-all duration-200 shadow-sm"
            >
              <span>Explore All Services</span>
              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
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
                className="group relative p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="mb-4">
                    {getIcon(service.id)}
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F4D] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-end pt-2 text-slate-400 group-hover:text-[#2563EB] transition-colors">
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
