import React from 'react';
import logoImg from '../../assets/logo.png';

export const LogoSVG = ({ className = "w-8 h-8", glow = false }) => {
  return (
    <div className={`relative inline-block ${className} ${glow ? "drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]" : ""}`}>
      <img 
        src={logoImg} 
        alt="Vardha Group Logo" 
        className="w-full h-full object-contain filter drop-shadow-sm" 
      />
    </div>
  );
};

export default LogoSVG;

