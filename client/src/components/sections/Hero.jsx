import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Compass, ShoppingCart, BarChart3, Code, Smartphone, Users, Building, ArrowRight, Sparkles } from 'lucide-react';
import LogoSVG from '../ui/Logo';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  
  const [hoveredSector, setHoveredSector] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.8'
      );

      tl.fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.7'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = () => {
    const element = document.getElementById('ventures');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Defining the orbit items with custom description text for credibility boost
  const orbitItems = [
    { icon: <ShoppingCart size={16} />, label: "FMCG Products", code: "FMCG", desc: "Organic beauty & lifestyle products", angle: 0 },
    { icon: <BarChart3 size={16} />, label: "Stock Trading", code: "Finance", desc: "Quantitative algorithmic holdings", angle: 60 },
    { icon: <Code size={16} />, label: "Web & App Development", code: "Web Dev", desc: "Bespoke digital design portals", angle: 120 },
    { icon: <Smartphone size={16} />, label: "Business Consulting", code: "Business Consulting", desc: "Premium iOS & Android development", angle: 180 },
    { icon: <Users size={16} />, label: "Co-working Space", code: "Community", desc: "Luxury office infrastructures", angle: 240 },
    { icon: <Building size={16} />, label: "Real Estate", code: "Properties", desc: "Sustainable residential towers", angle: 300 }
  ];

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-to-b from-indigo-50/20 via-white to-indigo-50/20"
    >
      {/* Premium Luxury Background Grid */}
      <div className="absolute inset-0 luxury-grid-overlay opacity-40 pointer-events-none"></div>

      {/* Decorative Grid Accents (+) */}
      <div className="absolute top-[15%] left-[25%] text-indigo-500/20 font-light select-none pointer-events-none text-xs font-sans">+</div>
      <div className="absolute top-[45%] left-[8%] text-indigo-500/20 font-light select-none pointer-events-none text-xs font-sans">+</div>
      <div className="absolute top-[75%] left-[45%] text-indigo-500/15 font-light select-none pointer-events-none text-xs font-sans">+</div>
      <div className="absolute top-[25%] right-[28%] text-indigo-500/20 font-light select-none pointer-events-none text-xs font-sans">+</div>
      <div className="absolute bottom-[25%] right-[12%] text-indigo-500/15 font-light select-none pointer-events-none text-xs font-sans">+</div>

      {/* Floating particles/glowing dust elements for high credibility */}
      <div className="absolute top-[30%] left-[12%] w-2 h-2 rounded-full bg-indigo-400 opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-indigo-500/10 animate-ping pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-indigo-400/30 animate-pulse pointer-events-none"></div>
      
      {/* Background glowing spheres */}
      <div className="absolute top-[25%] left-[5%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-indigo-100/10 to-transparent blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-indigo-200/15 to-transparent blur-[120px] pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading and Text */}
        <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
          
          {/* Pre-Headline Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-400/20 shadow-[0_2px_10px_rgba(79,70,229,0.04)]">
            <Sparkles size={10} className="text-indigo-600 animate-pulse-slow" />
            <span className="text-[9px] tracking-[0.25em] font-bold text-indigo-700 uppercase">
              Multi-Sector Conglomerate
            </span>
          </div>

          {/* Main Headline */}
          <div ref={titleRef} className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-[64px] lg:text-[72px] leading-[1.05] font-bold text-charcoal-900 tracking-tight font-sans">
              ONE GROUP<br />
              <span className="text-indigo-gradient tracking-tight italic font-light font-serif">ENDLESS POSSIBILITIES</span>
            </h1>
          </div>
 
          {/* Subheading */}
          <p 
            ref={subtitleRef}
            className="text-sm sm:text-base text-charcoal-500 font-sans font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Building value across industries. Creating impact for a better tomorrow.
          </p>
 
          {/* Action Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button 
              onClick={handleExploreClick}
              className="btn-indigo-primary flex items-center gap-3 group"
            >
              <span>Explore Vardha</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Inline Stats Highlights Strip */}
          <div className="w-full pt-6 sm:pt-8 border-t border-indigo-200/25 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
            <div>
              <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal-900">06<span className="text-indigo-500 font-light font-sans ml-0.5">+</span></span>
              <span className="block text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-charcoal-400 mt-1 font-sans">Global Sectors</span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal-900">10K<span className="text-indigo-500 font-light font-sans ml-0.5">+</span></span>
              <span className="block text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-charcoal-400 mt-1 font-sans">Elite Clients</span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-bold text-charcoal-900">25<span className="text-indigo-500 font-light font-sans ml-0.5">+</span></span>
              <span className="block text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-charcoal-400 mt-1 font-sans">Smart Cities</span>
            </div>
          </div>

        </div>


        {/* Right Column: Orbit Diagram - scaled down on mobile */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[280px] sm:h-[380px] lg:h-[500px] w-full overflow-visible">
          
          {/* Subtle tech radar lines / circular background grids */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-indigo-400/5 pointer-events-none animate-pulse-slow"></div>
          <div className="absolute w-[520px] h-[520px] rounded-full border border-indigo-500/[0.03] pointer-events-none"></div>
          <div className="absolute w-[440px] h-[440px] border-t border-b border-indigo-400/[0.03] rotate-45 pointer-events-none"></div>
          <div className="absolute w-[440px] h-[440px] border-l border-r border-indigo-400/[0.03] rotate-45 pointer-events-none"></div>

          <div className="relative w-[420px] h-[420px] flex items-center justify-center scale-[0.6] sm:scale-[0.75] lg:scale-100 origin-center">
            
            {/* Concentric solid thin ring */}
            <div className="absolute inset-8 rounded-full border border-indigo-400/10 pointer-events-none"></div>

            {/* Dashed Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-indigo-400/20 animate-spin-slow"></div>

            {/* Orbit Badges */}
            {orbitItems.map((item, idx) => {
              const rad = (item.angle * Math.PI) / 180;
              const radius = 210; // Scaled up radius from 170 to 210
              const x = Math.round(Math.cos(rad) * radius);
              const y = Math.round(Math.sin(rad) * radius);
              const isHovered = hoveredSector?.label === item.label;
              
              return (
                <div
                  key={idx}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  onMouseEnter={() => setHoveredSector(item)}
                  onMouseLeave={() => setHoveredSector(null)}
                  className={`absolute px-3 py-1.5 rounded-full bg-white border shadow-md flex items-center gap-2 text-charcoal-700 transition-all duration-500 cursor-pointer select-none whitespace-nowrap ${
                    isHovered 
                      ? 'border-indigo-500 text-indigo-600 scale-105 shadow-indigo-200/50 shadow-lg z-30' 
                      : 'border-indigo-200/30 hover:border-indigo-400'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isHovered ? 'bg-indigo-500/10 text-indigo-600' : 'bg-indigo-500/5 text-indigo-700'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-[14px] sm:text-[12px] lg:text-[10px] tracking-wider uppercase font-bold font-sans pr-1">
                    {item.label}
                  </span>
                </div>
              );
            })}

            {/* Central core circle (Exact center of the Orbit) */}
            <div className="absolute w-[210px] h-[210px] rounded-full border border-dashed border-indigo-400/20 animate-spin-slow pointer-events-none"></div>
            
            <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-b from-white to-[#EEF2FF] border border-indigo-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden z-20">
              <div className="w-[172px] h-[172px] rounded-full border border-indigo-500/15 flex flex-col items-center justify-center p-3 relative bg-white/50 backdrop-blur-md">
                
                {/* Centered Floating Logo */}
                <div className="animate-bounce-slow flex items-center justify-center mb-1">
                  <LogoSVG className="w-20 h-20" glow={true} />
                </div>

                {/* Dynamically show holding info on orbit hovering */}
                {hoveredSector ? (
                  <div className="text-center animate-fade-in z-20 flex flex-col items-center justify-center">
                    <span className="text-[14px] sm:text-[12px] lg:text-[10px] tracking-wider uppercase font-bold text-indigo-600 block max-w-[140px] truncate">
                      {hoveredSector.label}
                    </span>
                    <span className="text-[11px] sm:text-[10px] lg:text-[9px] tracking-normal text-charcoal-500 block mt-0.5 max-w-[140px] leading-normal font-sans font-light">
                      {hoveredSector.desc}
                    </span>
                  </div>
                ) : (
                  <div className="text-center animate-fade-in z-20 flex flex-col items-center justify-center">
                    <span className="text-[14px] sm:text-[12px] lg:text-[10px] tracking-wider uppercase font-bold text-indigo-600 block flex items-center gap-1 justify-center">
                      <Sparkles size={10} className="animate-pulse" />
                      Ecosystem
                    </span>
                    <span className="text-[11px] sm:text-[10px] lg:text-[9px] tracking-normal text-charcoal-400 block mt-0.5 font-sans font-light">
                      Hover to explore
                    </span>
                  </div>
                )}

              </div>
            </div>
            
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
