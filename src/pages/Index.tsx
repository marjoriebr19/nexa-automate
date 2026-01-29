import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ROICalculator from '@/components/ROICalculator';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <ROICalculator />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;