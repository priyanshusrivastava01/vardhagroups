import React from 'react';
import { Shield, Target, Award, Gem } from 'lucide-react';

const Pillars = () => {
  const pillarsList = [
    {
      icon: <Gem className="w-6 h-6 text-indigo-500" />,
      title: "Luxury & Precision",
      desc: "Every asset class and product within our ecosystem is engineered to the highest luxury standards, serving elite consumer demographics."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Corporate Integrity",
      desc: "A governance system built on transparency, regulatory compliance, and trust with global institutional partners."
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      title: "Sustainable Expansion",
      desc: "Balancing high-yield returns with ecological responsibility and social development for a better tomorrow."
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-500" />,
      title: "Algorithmic Innovation",
      desc: "Integrating machine learning models, modern web technologies, and quantitative logic to drive corporate efficiency."
    }
  ];

  return (
    <section id="pillars" className="pt-2 sm:pt-4 pb-10 sm:pb-16 bg-white relative overflow-hidden">
      {/* Background large watermark text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif font-black text-indigo-500/[0.01] select-none tracking-[0.2em] pointer-events-none uppercase">
        Vardha
      </div>
      
      {/* Decorative side blurs */}
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-100/10 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 block mb-3">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-none">
            Corporate Pillars
          </h2>
          <div className="w-16 h-[2px] bg-indigo-500 mx-auto mt-4"></div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillarsList.map((pillar, idx) => (
            <div 
              key={idx}
              className="glass-card hover-shine-wrapper rounded-2xl p-8 border border-indigo-200/10 hover:border-indigo-300/40 transition-all duration-500 hover:-translate-y-1 text-left relative group bg-[#F5F7FF]/20"
            >
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-indigo-500/5 border border-indigo-500/15 flex items-center justify-center mb-6 text-indigo-600 transition-colors group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-charcoal-500 font-sans font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
