import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ArrowRight, ShoppingCart, BarChart3, 
  Code, Smartphone, Users, Building, Filter, Sparkles, Award
} from 'lucide-react';


const FALLBACK_VENTURES = [
  {
    _id: "fb_3",
    title: "BUSINESS CONSULTING",
    slug: "business-consulting",
    description: "Arunn Guptaa — a visionary consultant driving bold business growth, strategy & leadership.",
    logo: "/v-consulting.webp",
    coverImage: "/v-consulting.webp",
    websiteUrl: "https://www.arunlive.com/",
    category: "CONSULTING",
    isFeatured: true,
    displayOrder: 0,
    status: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: "fb_1",
    title: "Vardha FMCG",
    slug: "fmcg",
    description: "Premium organic skin care, food, and wellness products of global luxury standards.",
    logo: "/v-fmcg.webp",
    coverImage: "/v-fmcg.webp",
    websiteUrl: "https://fmcg.vardha.live/",
    category: "FMCG",
    isFeatured: true,
    displayOrder: 1,
    status: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: "fb_4",
    title: "Web & App Solution",
    slug: "app-development",
    description: "Sleek iOS and Android application development focusing on responsive premium layouts.",
    logo: "/v-webapp.webp",
    coverImage: "/v-webapp.webp",
    websiteUrl: "https://web.vardha.live/",
    category: "TECHNOLOGY",
    isFeatured: true,
    displayOrder: 2,
    status: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: "fb_2",
    title: "STOCK MARKET EDUCATION",
    slug: "stock-market-education",
    description: "Learn trading and investing with structured courses, mock trading, and expert mentorship.",
    logo: "/v-stock.webp",
    coverImage: "/v-stock.webp",
    websiteUrl: "https://stock.vardha.live/",
    category: "FINANCE",
    isFeatured: true,
    displayOrder: 3,
    status: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: "fb_5",
    title: "Startup Cafe",
    slug: "co-working-space",
    description: "Luxury workspace environments, state-of-the-art office infrastructure, and community ecosystems.",
    logo: "/v-startup.webp",
    coverImage: "/v-startup.webp",
    websiteUrl: "https://startupcafe.co.in/",
    category: "COMMUNITY",
    isFeatured: true,
    displayOrder: 4,
    status: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: "fb_6",
    title: "REAL ESTATE",
    slug: "real-estate",
    description: "Premium commercial and luxury residential properties built for sustainable futures.",
    logo: "/v-realestate.webp",
    coverImage: "/v-realestate.webp",
    websiteUrl: "https://vardha.live/",
    category: "REAL ESTATE",
    isFeatured: true,
    displayOrder: 5,
    status: true,
    createdAt: new Date().toISOString()
  }
];

const Ventures = () => {
  const [ventures] = useState(FALLBACK_VENTURES);
  const [filteredVentures, setFilteredVentures] = useState(FALLBACK_VENTURES);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewFilter, setViewFilter] = useState('all'); 
  const [categories] = useState(['All', ...new Set(FALLBACK_VENTURES.map(v => v.category))]);

  useEffect(() => {
    let result = [...ventures];

    if (viewFilter === 'featured') {
      result = result.filter(v => v.isFeatured);
    } else if (viewFilter === 'recent') {
      result = [...result].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);
    }

    if (selectedCategory !== 'All') {
      result = result.filter(v => v.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(v => 
        v.title.toLowerCase().includes(query) || 
        v.description.toLowerCase().includes(query) ||
        v.category.toLowerCase().includes(query)
      );
    }

    setFilteredVentures(result);
  }, [searchQuery, selectedCategory, viewFilter, ventures]);

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Maps a venture's category or title to its specific icon (lucide component)
  const getVentureIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('fmcg')) return <ShoppingCart size={20} />;
    if (t.includes('stock') || t.includes('market') || t.includes('trading') || t.includes('finance')) return <BarChart3 size={20} />;
    if (t.includes('business') || t.includes('consulting')) return <Users size={20} />;
    if (t.includes('web') || t.includes('design')) return <Code size={20} />;
    if (t.includes('app') || t.includes('development') || t.includes('phone')) return <Smartphone size={20} />;
    if (t.includes('co-working') || t.includes('space') || t.includes('community')) return <Users size={20} />;
    return <Building size={20} />;
  };

  // Maps a venture's title to a set of realistic enterprise operational tags
  const getVentureTags = (title) => {
    const t = title.toLowerCase();
    if (t.includes('fmcg')) return ["Subsidiary", "Global Trade"];
    if (t.includes('stock') || t.includes('market') || t.includes('trading')) return ["BSE Educator", "Skill-Building"];
    if (t.includes('business') || t.includes('consulting')) return ["Strategic Growth", "Expert Advisory"];
    if (t.includes('web') || t.includes('design')) return ["Custom SaaS", "UI/UX Immersive"];
    if (t.includes('app') || t.includes('development')) return ["Mobile Engine", "iOS & Android"];
    if (t.includes('co-working') || t.includes('space') || t.includes('coworking')) return ["Asset Class A", "Infrastructure"];
    return ["Real Estate", "Luxury Holdings"];
  };

  // Maps theme colors based on title to match the exact circles in reference image
  const getThemeColor = (title) => {
    const t = title.toLowerCase();
    if (t.includes('fmcg')) return {
      iconText: 'text-green-500',
      iconBg: 'bg-green-50',
      border: 'border-green-100',
      arrowBg: 'bg-green-550 group-hover:bg-green-600',
      badgeColor: 'bg-green-500 text-white'
    };
    if (t.includes('stock') || t.includes('market') || t.includes('trading')) return {
      iconText: 'text-blue-500',
      iconBg: 'bg-blue-50',
      border: 'border-blue-100',
      arrowBg: 'bg-blue-550 group-hover:bg-blue-600',
      badgeColor: 'bg-blue-500 text-white'
    };
    if (t.includes('business') || t.includes('consulting')) return {
      iconText: 'text-amber-500',
      iconBg: 'bg-amber-50',
      border: 'border-amber-100',
      arrowBg: 'bg-amber-550 group-hover:bg-amber-600',
      badgeColor: 'bg-amber-500 text-white'
    };
    if (t.includes('web') || t.includes('design')) return {
      iconText: 'text-purple-500',
      iconBg: 'bg-purple-50',
      border: 'border-purple-100',
      arrowBg: 'bg-purple-550 group-hover:bg-purple-600',
      badgeColor: 'bg-purple-500 text-white'
    };
    if (t.includes('app') || t.includes('development')) return {
      iconText: 'text-pink-500',
      iconBg: 'bg-pink-50',
      border: 'border-pink-100',
      arrowBg: 'bg-pink-550 group-hover:bg-pink-600',
      badgeColor: 'bg-pink-500 text-white'
    };
    if (t.includes('co-working') || t.includes('space') || t.includes('coworking')) return {
      iconText: 'text-teal-500',
      iconBg: 'bg-teal-50',
      border: 'border-teal-100',
      arrowBg: 'bg-teal-550 group-hover:bg-teal-600',
      badgeColor: 'bg-teal-500 text-white'
    };
    // Real Estate or default
    return {
      iconText: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      border: 'border-indigo-100',
      arrowBg: 'bg-indigo-600 group-hover:bg-indigo-700',
      badgeColor: 'bg-indigo-600 text-white'
    };
  };

  return (
    <section id="ventures" className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 block mb-3 font-sans">
            Holdings Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight leading-none">
            Vardha Portfolio
          </h2>
          <div className="w-16 h-[2px] bg-indigo-500 mx-auto mt-4 mb-6"></div>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto font-sans font-light">
            Connecting our diversified high-impact enterprises under one corporate flag.
          </p>
        </div>


        {/* Ventures Grid */}
        {filteredVentures.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-indigo-200/50 rounded-2xl">
            <p className="text-charcoal-400 font-serif italic text-lg mb-2">No ventures found matching search</p>
          </div>
        ) : (
          /* Ventures Card Grid (Vertical tall card matching image) */
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredVentures.map((venture) => {
                const colors = getThemeColor(venture.title);
                return (
                  <motion.div
                    layout
                    key={venture._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleCardClick(venture.websiteUrl)}
                    className="glass-card hover-shine-wrapper hover:shadow-xl rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer transition-all duration-500 border border-indigo-200/20 hover:-translate-y-1.5"
                  >
                    
                    {/* Cover image (Takes top 55% of the tall vertical card layout) */}
                    <div className="relative aspect-[4/3] bg-indigo-50/30 overflow-hidden border-b border-indigo-100/10">
                      <img
                        src={venture.coverImage}
                        alt={`${venture.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent"></div>
                    </div>

                    {/* Content Section (Takes bottom 45% of card) */}
                    <div className="p-8 pt-10 flex flex-col flex-grow relative bg-white items-center text-center">
                      
                      {/* Overlapping circle icon badge on the boundary */}
                      <div className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border ${colors.border} shadow-md flex items-center justify-center ${colors.iconText} transition-transform duration-500 group-hover:scale-110`}>
                        {getVentureIcon(venture.title)}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg lg:text-xl font-bold text-charcoal-900 tracking-wide mb-3 uppercase">
                        {venture.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs text-charcoal-400 font-sans font-light leading-relaxed line-clamp-3 mb-4">
                        {venture.description}
                      </p>

                      {/* Info-rich operational badges to remove the plain/empty layout feeling */}
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {getVentureTags(venture.title).map((tag, i) => (
                          <span key={i} className="text-[9px] tracking-wider uppercase font-bold text-indigo-700 bg-indigo-500/5 border border-indigo-200/20 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Footer arrow navigation trigger */}
                      <div className="mt-auto pt-4 flex items-center justify-center">
                        <div 
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 bg-indigo-600 group-hover:bg-indigo-500 group-hover:scale-110 shadow-md`}
                        >
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Ventures;
