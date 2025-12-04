/**
 * Hero Badge Component
 * Animated announcement badge at top of hero.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface HeroBadgeProps {
  text?: string;
}

export function HeroBadge({ text = 'New: AI Agent Integration Included' }: HeroBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#635BFF]/10 to-[#5145FF]/10 dark:from-[#7c72ff]/20 dark:to-[#6b5fff]/20 border border-[#635BFF]/20 dark:border-[#7c72ff]/30 text-[#635BFF] dark:text-[#8b82ff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8"
    >
      <Sparkles size={14} className="sm:w-4 sm:h-4" />
      <span className="font-medium">{text}</span>
      <span className="w-4 h-4 sm:w-5 sm:h-5 bg-foreground text-background text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold">
        →
      </span>
    </motion.div>
  );
}
