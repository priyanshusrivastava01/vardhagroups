import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users2, Compass, Award, Globe2 } from 'lucide-react';
import LogoSVG from '../ui/Logo';

const IndividualStat = ({ targetNum, suffix, label, icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setHasAnimated(true);
            let startTimestamp = null;
            const duration = 1500;
            
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              // Easing function: ease out quad
              const easeProgress = progress * (2 - progress);
              const currentCount = Math.floor(easeProgress * targetNum);
              
              setCount(currentCount);
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(targetNum);
              }
            };
            
            window.requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [targetNum, delay, hasAnimated]);

  const formatCount = (num) => {
    if (targetNum < 10 && targetNum >= 0) {
      return `0${num}`;
    }
    return num;
  };

  return (
    <div 
      ref={cardRef} 
      className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center select-none w-full mx-auto border border-white/50"
    >
      <div className="w-11 h-11 rounded-full border border-indigo-300/20 bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-3 transition-transform hover:scale-105 duration-300">
        {icon}
      </div>
      
      <div className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-1">
        {formatCount(count)}{suffix}
      </div>
      
      <div className="text-[9px] tracking-[0.2em] font-bold uppercase text-charcoal-400 font-sans">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section 
      id="stats" 
      className="py-24 bg-gradient-to-b from-white via-[#F5F7FF] to-white relative overflow-hidden"
    >
      {/* Divider lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Stats Column (Ventures, Clients) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 justify-center items-center">
            <IndividualStat 
              targetNum={6} 
              suffix="+" 
              label="Ventures" 
              icon={<Building2 size={18} />} 
              delay={0}
            />
            <IndividualStat 
              targetNum={10} 
              suffix="K+" 
              label="Clients" 
              icon={<Users2 size={18} />} 
              delay={200}
            />
          </div>

          {/* Center 3D Corporate Gate / Archway */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[260px] sm:h-[320px] order-first lg:order-none">
            {/* Ambient indigo glow under pedestal */}
            <div className="absolute bottom-4 w-48 h-12 bg-gradient-to-r from-indigo-300/20 to-transparent blur-xl pointer-events-none rounded-full"></div>
            
            {/* Futuristic Gateway Monument shape using absolute divs */}
            <div className="relative w-64 h-full flex flex-col items-center">
              
              {/* White Gate Pillars and Archway */}
              <div className="absolute bottom-0 w-60 h-[220px] bg-gradient-to-b from-white to-[#EEF2FF] rounded-t-[100px] border-t border-x border-indigo-300/30 shadow-[0_10px_30px_rgba(0,0,0,0.03),_inset_0_2px_10px_rgba(255,255,255,0.95)] flex items-center justify-center overflow-hidden">
                {/* Gate opening reflection/light */}
                <div className="absolute bottom-0 w-44 h-[160px] bg-gradient-to-b from-white to-transparent rounded-t-[80px] opacity-75"></div>
                <div className="absolute bottom-0 w-28 h-[100px] bg-[#FAF8F5] border-t border-x border-indigo-200/50 rounded-t-[50px] shadow-[inset_0_4px_12px_rgba(99,102,241,0.06)]"></div>
              </div>

              {/* Glowing Gateway Logo SVG mounted in center */}
              <div className="absolute top-[28%] flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full border border-indigo-300/20 shadow-md flex items-center justify-center hover:scale-105 transition-all duration-500">
                  <LogoSVG className="w-16 h-16" />
                </div>
              </div>
              
              {/* Indigo road projection leading out of the gate */}
              <div 
                className="absolute bottom-0 w-48 h-[20px] bg-gradient-to-b from-indigo-400/20 to-transparent rounded-full blur-[1px]"
                style={{ transform: 'rotateX(75deg)' }}
              ></div>
            </div>
          </div>

          {/* Right Stats Column (Cities, Years) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 justify-center items-center">
            <IndividualStat 
              targetNum={25} 
              suffix="+" 
              label="Cities" 
              icon={<Globe2 size={18} />} 
              delay={400}
            />
            <IndividualStat 
              targetNum={10} 
              suffix="+" 
              label="Years" 
              icon={<Award size={18} />} 
              delay={600}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
