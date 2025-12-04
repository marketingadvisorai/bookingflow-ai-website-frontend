/**
 * Hero CTA Component
 * Call-to-action buttons for hero section.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroCTAProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function HeroCTA({
  primaryText = 'Start Growing for Free',
  primaryHref = '/onboarding',
  secondaryText = 'View Features',
  secondaryHref = '#features',
}: HeroCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={primaryHref}
          className="w-full sm:w-auto group bg-[#635BFF] hover:bg-[#5145FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all shadow-lg shadow-[#635BFF]/30 hover:shadow-xl hover:shadow-[#635BFF]/40 inline-flex items-center justify-center gap-2"
        >
          {primaryText}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={secondaryHref}
          className="w-full sm:w-auto border-2 border-border hover:border-[#635BFF] text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
        >
          {secondaryText}
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
