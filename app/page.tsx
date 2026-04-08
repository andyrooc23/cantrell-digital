'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import WhyCantrell from './components/WhyCantrell';
import Pricing from './components/Pricing';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <FeaturedWork />
      <Process />
      <WhyCantrell />
      <Pricing />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}