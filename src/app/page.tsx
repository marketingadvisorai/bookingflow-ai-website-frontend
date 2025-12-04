/**
 * Homepage
 * Main landing page with hero and sections.
 */

import { Navbar, Footer } from '@/components/layout';
import { Hero } from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        {/* More sections will be added here */}
        {/* <ClientsSection /> */}
        {/* <FeaturesSection /> */}
        {/* <HowItWorksSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <PricingPreviewSection /> */}
        {/* <CTASection /> */}
      </main>

      <Footer />
    </div>
  );
}
