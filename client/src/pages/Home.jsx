import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Ventures from '../components/sections/Ventures';
import Chairman from '../components/sections/Chairman';
import Partners from '../components/sections/Partners';
import Pillars from '../components/sections/Pillars';
import WhatsAppCTA from '../components/sections/WhatsAppCTA';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Chairman />
        <Ventures />
        <Pillars />
        <WhatsAppCTA />
      </main>
    </div>
  );
};

export default Home;
