/**
 * Hero Section - Main Component
 * Combines all hero sub-components.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { HeroBadge } from './HeroBadge';
import { HeroHeadline } from './HeroHeadline';
import { HeroCTA } from './HeroCTA';
import { HeroStats } from './HeroStats';
import { HeroVisual } from './HeroVisual';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-background transition-colors duration-200">
      {/* Background Elements */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
        <HeroBadge />
        <HeroHeadline />
        <HeroCTA />
        <HeroStats />
        <HeroVisual />
      </div>
    </section>
  );
}

// Barrel exports for sub-components
export { HeroBadge } from './HeroBadge';
export { HeroHeadline } from './HeroHeadline';
export { HeroCTA } from './HeroCTA';
export { HeroStats } from './HeroStats';
export { HeroVisual } from './HeroVisual';
export { HeroBackground } from './HeroBackground';
