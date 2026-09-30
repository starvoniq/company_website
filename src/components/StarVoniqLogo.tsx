import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const StarVoniqLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'light',
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

  const isDark = variant === 'dark';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Official StarVoniq Emblem */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-xl overflow-hidden border ${
          isDark
            ? 'border-white/10 bg-[#0B1F4D] shadow-lg shadow-black/20 group-hover:border-[#FFC107]/40'
            : 'border-[#E5E7EB] bg-[#0B1F4D] shadow-md shadow-blue-900/10 group-hover:border-[#2563EB]/40'
        } transition-transform duration-300 group-hover:scale-105`}
      >
        <img
          src="/images/starvoniq-emblem.png"
          alt="StarVoniq Logo Mark"
          className="w-full h-full object-cover"
        />
        {/* Subtle glow highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/20 to-[#FFC107]/20 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className={`font-extrabold tracking-tight font-sans leading-none flex items-center ${titleSizes[size]}`}>
            <span className={`${isDark ? 'text-white group-hover:text-slate-100' : 'text-[#0B1F4D] group-hover:text-[#2563EB]'} transition-colors`}>
              Star
            </span>
            <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#F4B400] bg-clip-text text-transparent">
              Voniq
            </span>
          </div>
          <span className={`font-bold uppercase ${isDark ? 'text-slate-400 group-hover:text-[#FFD54F]' : 'text-[#1E293B]/70 group-hover:text-[#2563EB]'} mt-1 leading-none ${subSizes[size]} transition-colors`}>
            Building Connected Technology
          </span>
        </div>
      )}
    </Link>
  );
};

// Backwards compatibility export
export const ElevOneLogo = StarVoniqLogo;
export default StarVoniqLogo;
