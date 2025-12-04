/**
 * Homepage
 * Main landing page with all sections.
 */

import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  ClientsSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ClientsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
