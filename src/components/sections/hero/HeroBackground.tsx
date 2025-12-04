/**
 * Hero Background Component
 * Animated decorative elements for hero section.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';

export function HeroBackground() {
  return (
    <>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Decorative Plus Signs */}
      <motion.div
        className="hidden md:block absolute top-32 left-[10%] text-[#635BFF]/20 dark:text-[#7c72ff]/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-4xl lg:text-6xl">+</div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-32 right-[15%] text-[#635BFF]/20 dark:text-[#7c72ff]/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className="text-4xl lg:text-6xl">+</div>
      </motion.div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#635BFF]/10 dark:bg-[#7c72ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5145FF]/10 dark:bg-[#6b5fff]/10 rounded-full blur-3xl pointer-events-none" />
    </>
  );
}
