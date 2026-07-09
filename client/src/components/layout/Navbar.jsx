import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoSVG from '../ui/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location]);

  const navLinks = [
    { label: 'Home',     id: 'hero' },
    { label: 'About',    id: 'chairman' },
    { label: 'Ventures', id: 'ventures' },
    { label: 'Pillars',  id: 'pillars' },
    { label: 'Connect',  id: 'connect' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-indigo-200/30 shadow-md shadow-indigo-100/5'
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group z-10"
            >
              <LogoSVG className="w-10 h-10 transition-transform duration-500 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl tracking-widest text-charcoal-900 font-bold leading-none">
                  VARDHA
                </span>
                <span className="text-indigo-500 text-[10px] tracking-[0.25em] font-semibold uppercase leading-none mt-1">
                  GROUP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="relative py-2 text-[11px] font-bold uppercase tracking-widest text-charcoal-500 hover:text-charcoal-900 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
              ))}
            </div>

            {/* Hamburger Button — only on mobile */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all focus:outline-none z-[60]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{ background: 'rgba(0,0,0,0.15)' }}
      />

      {/* Mobile Slide-down Menu Panel */}
      <div
        className={`md:hidden fixed left-0 right-0 top-0 z-[56] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top bar inside panel with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-100/50">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <LogoSVG className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest text-charcoal-900 font-bold leading-none">VARDHA</span>
              <span className="text-indigo-500 text-[9px] tracking-[0.25em] font-semibold uppercase leading-none mt-0.5">GROUP</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="px-6 py-4 flex flex-col divide-y divide-indigo-100/50">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-4 text-sm font-bold uppercase tracking-widest text-charcoal-700 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
