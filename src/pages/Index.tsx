import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Authority from '@/components/Authority';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import CaseStudy from '@/components/CaseStudy';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingElements from '@/components/FloatingElements';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import ROICalculator from '@/components/ROICalculator';
import InteractiveQuiz from '@/components/InteractiveQuiz';
import ActivityFeed from '@/components/ActivityFeed';
import ClientLogos from '@/components/ClientLogos';
import Portfolio from '@/components/Portfolio';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <PainPoints />
        <Benefits />
        <Services />
        <ROICalculator />
        <Authority />
        <HowItWorks />
        <InteractiveQuiz />
        <SocialProof />
        <CaseStudy />
        <Portfolio />
        <TrustBadges />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ActivityFeed />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
