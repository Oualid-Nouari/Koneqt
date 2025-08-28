'use client'; 

import React from 'react';
import Header from './components/Header';
import { HeroSection } from './components/Hero';
import {SolutionSection} from './components/Solution';
import { HowItWorksSection } from './components/HowItWorks';
import { DemoSection } from './components/DemoSection';
import { Footer } from './components/Footer';
import { PricingSection } from './components/Pricing';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden main-container">
      <Header />
      <HeroSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      {/* <DemoSection /> */}
      <Footer />
    </main>
  );
}