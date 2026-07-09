import React from 'react';
import { ArrowUp } from 'lucide-react';
import LogoSVG from '../ui/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-white border-t border-indigo-200/40 pt-14 sm:pt-20 pb-8 overflow-hidden">
      
      {/* Background ambient indigo grid overlay */}
      <div className="absolute inset-0 luxury-grid-overlay opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Branding, Tagline, and Social Links */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="flex items-center gap-3">
              <LogoSVG className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-widest text-charcoal-900 font-bold leading-none">
                  VARDHA
                </span>
                <span className="text-indigo-500 text-xs tracking-[0.25em] font-semibold uppercase leading-none mt-1">
                  GROUP
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs tracking-[0.2em] font-bold text-indigo-600 uppercase">
                BUILDING VALUE.
              </p>
              <p className="text-xs tracking-[0.2em] font-bold text-charcoal-900 uppercase">
                CREATING FUTURES.
              </p>
            </div>

            {/* Social Icons matching the circles in reference image */}
            <div className="space-y-3">
              <span className="text-[9px] tracking-widest uppercase font-bold text-charcoal-400 font-sans block">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-indigo-200/30 bg-white hover:border-indigo-500 hover:text-indigo-600 shadow-sm flex items-center justify-center text-charcoal-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-indigo-200/30 bg-white hover:border-indigo-500 hover:text-indigo-600 shadow-sm flex items-center justify-center text-charcoal-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-indigo-200/30 bg-white hover:border-indigo-500 hover:text-indigo-600 shadow-sm flex items-center justify-center text-charcoal-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full border border-indigo-200/30 bg-white hover:border-indigo-500 hover:text-indigo-600 shadow-sm flex items-center justify-center text-charcoal-600 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: World Map */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <svg
              viewBox="0 0 600 300"
              className="w-full max-w-[450px] opacity-40 hover:opacity-60 transition-opacity duration-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="80" r="1.5" fill="#6366f1" />
              <circle cx="120" cy="90" r="1.5" fill="#6366f1" />
              <circle cx="150" cy="110" r="1.5" fill="#6366f1" />
              <circle cx="140" cy="140" r="1.5" fill="#6366f1" />
              <circle cx="180" cy="120" r="1.5" fill="#6366f1" />
              <circle cx="190" cy="90" r="2" fill="#6366f1" />
              <circle cx="210" cy="100" r="2" fill="#6366f1" />
              <circle cx="230" cy="120" r="2.5" fill="#6366f1" />
              <circle cx="220" cy="150" r="2" fill="#6366f1" />
              <circle cx="260" cy="210" r="1.5" fill="#6366f1" />
              <circle cx="270" cy="240" r="2" fill="#6366f1" />
              <circle cx="290" cy="260" r="1.5" fill="#6366f1" />
              <circle cx="360" cy="90" r="2.5" fill="#6366f1" />
              <circle cx="380" cy="100" r="2" fill="#6366f1" />
              <circle cx="370" cy="140" r="2" fill="#6366f1" />
              <circle cx="390" cy="180" r="2.5" fill="#6366f1" />
              <circle cx="410" cy="210" r="1.5" fill="#6366f1" />
              <circle cx="440" cy="110" r="3" fill="#6366f1" className="animate-pulse" />
              <circle cx="470" cy="100" r="2" fill="#6366f1" />
              <circle cx="490" cy="120" r="2.5" fill="#6366f1" />
              <circle cx="510" cy="130" r="2" fill="#6366f1" />
              <circle cx="530" cy="240" r="2" fill="#6366f1" />
              <circle cx="550" cy="250" r="1.5" fill="#6366f1" />
              <path d="M230 120 Q335 115 440 110" stroke="#6366f1" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
              <path d="M360 90 Q400 100 440 110" stroke="#6366f1" strokeWidth="0.75" opacity="0.4" />
              <path d="M390 180 Q415 145 440 110" stroke="#6366f1" strokeWidth="0.75" opacity="0.4" />
              <path d="M530 240 Q485 175 440 110" stroke="#6366f1" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="440" cy="110" r="8" stroke="#6366f1" strokeWidth="0.5" opacity="0.4" className="animate-ping" />
            </svg>
          </div>

        </div>

        {/* Bottom copyright details & Scroll to top circle trigger */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-indigo-200/20 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
          <p className="text-[10px] text-charcoal-400 font-sans">
            &copy; 2025 Vardha Group. All rights reserved.
          </p>

          <div className="flex gap-6 text-[10px] text-charcoal-400 font-sans">
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">Terms of Service</span>
          </div>

          {/* Upward navigation chevron matching reference image */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-indigo-300/20 bg-white hover:border-indigo-500 shadow-md hover:shadow-lg flex items-center justify-center text-charcoal-600 hover:text-indigo-600 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
