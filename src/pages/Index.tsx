import React, { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ErrorBoundary from '@/components/ErrorBoundary';

// Acima da dobra: carregamento imediato (LCP).
// Abaixo da dobra: code splitting por componente para reduzir o bundle inicial e o TBT.
const PainPoints = lazy(() => import('@/components/PainPoints'));
const Benefits = lazy(() => import('@/components/Benefits'));
const Services = lazy(() => import('@/components/Services'));
const ROICalculator = lazy(() => import('@/components/ROICalculator'));
const Authority = lazy(() => import('@/components/Authority'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const InteractiveQuiz = lazy(() => import('@/components/InteractiveQuiz'));
const ResultsCarousel = lazy(() => import('@/components/ResultsCarousel'));
const CaseStudy = lazy(() => import('@/components/CaseStudy'));
const Gallery = lazy(() => import('@/components/Gallery'));
const TrustBadges = lazy(() => import('@/components/TrustBadges'));
const FAQ = lazy(() => import('@/components/FAQ'));
const ContactCTA = lazy(() => import('@/components/ContactCTA'));
const Footer = lazy(() => import('@/components/Footer'));
const WhatsAppButton = lazy(() => import('@/components/WhatsAppButton'));
const FloatingElements = lazy(() => import('@/components/FloatingElements'));
const ExitIntentPopup = lazy(() => import('@/components/ExitIntentPopup'));
const ActivityFeed = lazy(() => import('@/components/ActivityFeed'));

/** Placeholder com altura reservada para evitar CLS durante o lazy-load. */
const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

const Deferred = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <Suspense fallback={<SectionFallback />}>{children}</Suspense>
  </ErrorBoundary>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>
      <Navigation />
      <main>
        <Hero />

        <Deferred>
          <PainPoints />
          <Benefits />
          <Services />
          <ROICalculator />
          <Authority />
          <HowItWorks />
          <InteractiveQuiz />
          <Gallery />
          <CaseStudy />
          <TrustBadges />
          <FAQ />
          <ContactCTA />
        </Deferred>
      </main>
      <Deferred>
        <Footer />
      </Deferred>
      <Suspense fallback={null}>
        <WhatsAppButton />
        <ActivityFeed />
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

export default Index;
