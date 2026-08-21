import React from 'react';
import logoImg from '../../assets/logo.png';
import logoMarkImg from '../../assets/logo-mark.png';

export const LogoSVG = ({ className = "h-10 w-auto", glow = false, variant = "full" }) => {
  const src = variant === "mark" ? logoMarkImg : logoImg;
  return (
    <div className={`relative inline-flex items-center justify-center ${glow ? "drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]" : ""}`}>
      <img 
        src={src} 
        alt="Vardha Group Logo" 
        className={`${className} object-contain filter drop-shadow-sm`} 
      />
    </div>
  );
};

export default LogoSVG;



