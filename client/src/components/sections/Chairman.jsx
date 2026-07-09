import React from 'react';
import LogoSVG from '../ui/Logo';

const Chairman = () => {
  return (
    <section id="chairman" className="py-24 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 border-y border-indigo-950/40 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 luxury-grid-overlay opacity-10 pointer-events-none"></div>
      
      {/* Dark mode luxury glowing blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-600/5 to-transparent blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Chairman Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-indigo-500/30 group">
              <img
                src="/founder.webp"
                alt="Arunn Guptaa, Founder & Chairman"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[9px] tracking-widest uppercase font-bold text-indigo-400 block mb-1">
                  Founder & Chairman
                </span>
                <span className="font-serif text-xl font-bold text-white block">
                  Arunn Guptaa
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Philosophy & Message */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="flex items-center gap-2">
              <LogoSVG className="w-8 h-8 opacity-60" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-indigo-500 font-sans">
                Vardha Leadership
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Presidential <span className="text-indigo-gradient italic font-light font-serif">Message</span>
            </h2>

            <div className="w-12 h-[2px] bg-indigo-500"></div>

            <p className="font-serif text-base sm:text-lg md:text-xl text-indigo-100 italic leading-relaxed font-light">
              "At Vardha Group, we do not merely invest in businesses; we cultivate global ecosystems. Our vision is to pioneer advancements across finance, technology, real estate, and consumer goods while remaining grounded in luxury, integrity, and social impact."
            </p>

            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed font-sans font-light">
              By combining quantitative analytics with sustainable industrial development, Vardha Group stands as a catalyst for future-proof ventures. We build value across industries and create lasting impact for a better tomorrow.
            </p>

            {/* Signature Block */}
            <div className="pt-6 flex items-center gap-4">
              <div className="w-px h-12 bg-indigo-500/30"></div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-wide block italic font-light">
                  A. Guptaa
                </span>
                <span className="text-[9px] tracking-widest uppercase font-bold text-indigo-500/80 font-sans mt-0.5 block">
                  Founder, Chairman & Chief Executive Officer
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Chairman;
