import React from 'react';

export const LogoSVG = ({ className = "w-8 h-8", glow = false }) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? "drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" : ""}`}
    >
      <defs>
        {/* Luxury Indigo Gradient */}
        <linearGradient id="indigo-gradient-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>

      {/* Outer Triangle Shape */}
      <path 
        d="M60 10 L108 95 L84 95 L60 52 L36 95 L12 95 Z" 
        fill="url(#indigo-gradient-logo)" 
      />

      {/* Middle Chevron / Triangle */}
      <path 
        d="M60 38 L90 90 L76 90 L60 62 L44 90 L30 90 Z" 
        fill="url(#indigo-gradient-logo)" 
        opacity="0.85"
      />

      {/* Inner Wedge */}
      <path 
        d="M60 68 L72 88 L64 88 L60 81 L56 88 L48 88 Z" 
        fill="url(#indigo-gradient-logo)" 
        opacity="0.7"
      />

      {/* Bottom Horizontal Pedestal Bar */}
      <path 
        d="M20 102 L100 102 L95 107 L25 107 Z" 
        fill="url(#indigo-gradient-logo)" 
      />
    </svg>
  );
};

export default LogoSVG;
