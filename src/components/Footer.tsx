import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { StarVoniqLogo } from './StarVoniqLogo';
import { FacebookIcon, LinkedInIcon, TwitterXIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070c] text-slate-400 text-xs border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5 text-left">
          
          {/* Column 1: Brand Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <StarVoniqLogo size="md" className="mb-4" />
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              Engineering intelligent digital systems and high-impact corporate merchandise branding to power business growth worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-200"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services#web-dev" className="hover:text-orange-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#software-dev" className="hover:text-orange-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services#iot-solutions" className="hover:text-orange-400 transition-colors">
                  IoT Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#ai-ml" className="hover:text-orange-400 transition-colors">
                  AI & ML Systems
                </Link>
              </li>
              <li>
                <Link to="/services#design-3d" className="hover:text-orange-400 transition-colors">
                  Design & 3D
                </Link>
              </li>
              <li>
                <Link to="/services#video-creative" className="hover:text-orange-400 transition-colors">
                  Video & Creative
                </Link>
              </li>
              <li>
                <Link to="/services#merchandise-branding" className="hover:text-orange-400 transition-colors text-amber-400 font-medium">
                  Merchandise & Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services#process" className="hover:text-orange-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact#faqs" className="hover:text-orange-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Let's Connect (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Let's Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href="tel:+254712345678" className="hover:text-orange-400 transition-colors">
                  +254 712 345 678
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <a href="mailto:hello@starvoniq.com" className="hover:text-orange-400 transition-colors truncate">
                  hello@starvoniq.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 text-center text-slate-500 text-[11px]">
          <p>© 2026 StarVoniq. All Rights Reserved. Building Connected Intelligence.</p>
        </div>

      </div>
    </footer>
  );
};
