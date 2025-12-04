/**
 * Hero Stats Component
 * Statistics display for social proof.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';

interface Stat {
  number: string;
  label: string;
}

interface HeroStatsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { number: '5,000+', label: 'Active Venues' },
  { number: '2M+', label: 'Bookings/Month' },
  { number: '99.9%', label: 'Uptime' },
  { number: '4.9/5', label: 'Customer Rating' },
];

export function HeroStats({ stats = defaultStats }: HeroStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
