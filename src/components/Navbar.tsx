import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { StarVoniqLogo } from './StarVoniqLogo';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', sectionId: 'hero' },
    { name: 'Services', href: '/services', sectionId: 'services' },
    { name: 'Solutions', href: '/services#solutions', sectionId: 'why-us' },
    { name: 'Portfolio', href: '/portfolio', sectionId: 'portfolio' },
    { name: 'About Us', href: '/about', sectionId: 'team' },
    { name: 'Blog', href: '/blog', sectionId: 'blog' },
    { name: 'Contact', href: '/contact', sectionId: 'contact' },
  ];

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    
    // If on homepage and section exists, smooth scroll to it
    if (location.pathname === '/' && link.sectionId) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 border-b border-slate-200/90 shadow-xs'
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <StarVoniqLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 bg-slate-100/80 rounded-full border border-slate-200 backdrop-blur-sm text-xs font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(link, e)}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive && location.pathname === link.href && !location.hash
                      ? 'bg-white text-[#2563EB] shadow-xs font-bold'
                      : 'text-slate-700 hover:text-[#2563EB] hover:bg-white/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button: "Let's Talk ->" */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => {
                if (onOpenContactModal) {
                  onOpenContactModal();
                } else {
                  navigate('/contact');
                }
              }}
              className="group btn-shimmer relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-extrabold text-xs tracking-wider uppercase shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B1F4D]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0B1F4D] hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(link, e)}
                className="text-base font-semibold text-slate-800 hover:text-[#2563EB] py-1.5 px-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContactModal) {
                    onOpenContactModal();
                  } else {
                    navigate('/contact');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFC107] hover:bg-[#F4B400] text-[#0B1F4D] font-bold text-sm shadow-md shadow-amber-500/25"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-[#0B1F4D]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

