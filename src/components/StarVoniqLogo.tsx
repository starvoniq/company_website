import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const StarVoniqLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const subSizes = {
    sm: 'text-[7.5px] tracking-[0.16em]',
    md: 'text-[8.5px] sm:text-[9px] tracking-[0.18em]',
    lg: 'text-[11px] tracking-[0.22em]',
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Official StarVoniq Emblem */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#080d1a] shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-400/40`}
      >
        <img
          src="/images/starvoniq-emblem.png"
          alt="StarVoniq Logo Mark"
          className="w-full h-full object-cover"
        />
        {/* Subtle glow highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-amber-400/10 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className={`font-extrabold tracking-tight font-sans leading-none flex items-center ${titleSizes[size]}`}>
            <span className="text-white group-hover:text-slate-100 transition-colors">Star</span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
              Voniq
            </span>
          </div>
          <span className={`font-bold uppercase text-slate-400 mt-1 leading-none ${subSizes[size]} transition-colors group-hover:text-amber-400/90`}>
            Building Connected Intelligence
          </span>
        </div>
      )}
    </Link>
  );
};

// Backwards compatibility export
export const ElevOneLogo = StarVoniqLogo;
export default StarVoniqLogo;
