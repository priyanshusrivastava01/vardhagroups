import React from 'react';
import { Award, Compass, ShieldCheck, FileCheck, CheckCircle2, Bookmark } from 'lucide-react';

const Partners = () => {
  const partnerLogos = [
    { name: "Vardha Capital", icon: <Compass className="w-5 h-5" /> },
    { name: "ISO 9001:2015", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "RERA Compliant", icon: <Building2 className="w-5 h-5" /> }, // Wait, Building2 isn't imported, let's use check circle or bookmark
    { name: "BSE/NSE Partner", icon: <CheckCircle2 className="w-5 h-5" /> },
    { name: "Startup India", icon: <Award className="w-5 h-5" /> },
    { name: "Global Chamber", icon: <Bookmark className="w-5 h-5" /> }
  ];

  return (
    <section className="py-12 bg-white border-y border-indigo-200/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <span className="text-[9px] tracking-[0.25em] font-bold text-charcoal-400 uppercase mb-8">
            Accreditations & Strategic Partners
          </span>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full justify-items-center items-center">
            {partnerLogos.map((partner, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 text-charcoal-400 hover:text-indigo-600 transition-colors duration-300 select-none group"
              >
                <div className="text-charcoal-300 group-hover:text-indigo-500 transition-colors">
                  {partner.icon}
                </div>
                <span className="font-serif text-[11px] font-bold tracking-wider uppercase">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Wait, let's import the building icon correctly to be clean.
import { Building2 } from 'lucide-react';

export default Partners;
