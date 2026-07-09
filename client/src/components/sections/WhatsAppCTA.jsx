import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919670111167'; // Vardha Group WhatsApp

const quickMessages = [
  { label: 'Business Inquiry', text: 'Hi Vardha Group, I have a business inquiry.' },
  { label: 'Partnership', text: 'Hi Vardha Group, I am interested in a partnership opportunity.' },
  { label: 'Get a Quote', text: 'Hi Vardha Group, I would like to get a quote.' },
  { label: 'Real Estate', text: 'Hi Vardha Group, I want to know more about your real estate offerings.' },
  { label: 'Startup Cafe', text: 'Hi Vardha Group, I want to know more about Startup Cafe co-working space.' },
  { label: 'Support', text: 'Hi Vardha Group, I need some support.' },
];

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.062.522 4.004 1.442 5.697L0 24l6.47-1.424A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.371l-.36-.213-3.724.819.834-3.638-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);

const WhatsAppCTA = () => {
  const [activeMsg, setActiveMsg] = useState(null);

  const openChat = (text) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="connect" className="relative overflow-hidden py-20 sm:py-28">
      {/* Deep green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e1a] via-[#064e29] to-[#0a3d20]" />

      {/* Luxury grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-green-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-emerald-300/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Pulsing WhatsApp icon badge */}
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/40">
            <span className="absolute inset-0 rounded-full bg-green-400/25 animate-ping" />
            <span className="absolute inset-2 rounded-full bg-green-400/15 animate-ping" style={{ animationDelay: '0.3s' }} />
            <WhatsAppIcon className="w-9 h-9 text-white relative z-10" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
          Let's Build Something
          <span className="block mt-1 bg-gradient-to-r from-green-300 via-emerald-200 to-green-400 bg-clip-text text-transparent italic font-light font-serif">
            Great Together
          </span>
        </h2>

        <p className="text-green-100/70 text-sm sm:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Reach out to Vardha Group directly on WhatsApp. Our team typically responds within minutes.
        </p>

        {/* Quick Message Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {quickMessages.map((msg) => (
            <button
              key={msg.label}
              onClick={() => { setActiveMsg(msg.label); openChat(msg.text); }}
              className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                activeMsg === msg.label
                  ? 'bg-green-400 border-green-400 text-[#0a2e1a]'
                  : 'border-green-400/30 text-green-200 hover:bg-green-400/10 hover:border-green-400/60'
              }`}
            >
              {msg.label}
            </button>
          ))}
        </div>

        {/* Main CTA Button */}
        <button
          onClick={() => openChat("Hi Vardha Group, I'd like to connect with you.")}
          className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-[#0a2e1a] font-bold text-sm tracking-widest uppercase shadow-2xl shadow-green-500/30 hover:shadow-green-400/50 hover:scale-105 active:scale-[0.98] transition-all duration-500"
        >
          <WhatsAppIcon className="w-5 h-5 group-hover:animate-bounce" />
          Chat with Vardha Group
          <span className="w-2 h-2 rounded-full bg-[#0a2e1a] animate-pulse" />
        </button>

        {/* Trust line */}
        <p className="mt-6 text-[10px] tracking-widest uppercase font-semibold text-green-400/50">
          🔒 &nbsp;Secure · Private · Instant Reply
        </p>

      </div>
    </section>
  );
};

export default WhatsAppCTA;
