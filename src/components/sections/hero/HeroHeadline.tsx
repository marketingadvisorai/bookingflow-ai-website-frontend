/**
 * Hero Headline Component
 * Main title and subtitle for hero section.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';

interface HeroHeadlineProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
}

export function HeroHeadline({
  title = 'The Intelligent Scheduling Engine That',
  highlight = 'Scales Your Business',
  subtitle = 'BookingFlow AI automates the entire client lifecycle. From the first click to the final payment. Eliminate no-shows. Fill your schedule. Scale revenue. All without lifting a finger.',
}: HeroHeadlineProps) {
  return (
    <>
      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-[1.1] tracking-tight px-4 text-foreground"
      >
        {title}{' '}
        <span className="text-[#635BFF] dark:text-[#8b82ff]">{highlight}</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto font-normal leading-relaxed px-4 tracking-wide"
      >
        {subtitle}
      </motion.p>
    </>
  );
}
