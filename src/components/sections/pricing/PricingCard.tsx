/**
 * Pricing Card Component
 * Individual pricing tier card.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Award, Check, TrendingUp } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Feature {
  text: string;
  highlight: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  tagline: string;
  description: string;
  badge: string | null;
  features: Feature[];
  cta: string;
  ctaVariant: 'primary' | 'secondary';
  popular: boolean;
  savings: string | null;
  outcome: string;
}

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative bg-card rounded-2xl border-2 p-8 flex flex-col transition-all duration-300',
        tier.popular
          ? 'border-[#635BFF] dark:border-[#7c72ff] shadow-2xl shadow-[#635BFF]/10 scale-105'
          : 'border-border hover:border-muted-foreground/50'
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1.5 bg-gradient-to-r from-[#635BFF] to-orange-500 text-white rounded-full shadow-lg">
            <span className="text-xs font-semibold">{tier.badge}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
        <p className="text-sm text-[#635BFF] dark:text-[#8b82ff] mb-2">{tier.tagline}</p>
        <p className="text-sm text-muted-foreground">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-border">
        <div className="flex items-end gap-1 mb-2">
          <div className="text-4xl font-bold text-foreground">{tier.price}</div>
          {tier.period && <div className="text-lg text-muted-foreground mb-1">{tier.period}</div>}
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          {tier.price === 'Custom' ? 'Tailored to your scale' : '+ 2 credits per booking'}
        </p>
        {tier.savings && (
          <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-500/10 px-3 py-2 rounded-lg">
            <TrendingUp className="w-4 h-4" />
            <span>{tier.savings}</span>
          </div>
        )}
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={tier.cta === 'Contact Sales' ? '/contact' : '/onboarding'}
          className={cn(
            'w-full py-4 px-6 rounded-xl mb-8 transition-all font-medium flex items-center justify-center',
            tier.ctaVariant === 'primary'
              ? 'bg-[#635BFF] dark:bg-[#7c72ff] text-white hover:bg-[#5348E6] shadow-lg'
              : 'bg-muted text-foreground hover:bg-muted/80'
          )}
        >
          {tier.cta}
        </Link>
      </motion.div>

      {/* Outcome */}
      <div className="mb-6 p-4 bg-[#635BFF]/5 rounded-lg border border-[#635BFF]/10">
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-[#635BFF] dark:text-[#8b82ff] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">{tier.outcome}</p>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-grow">
        {tier.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                'w-4 h-4 mt-0.5 flex-shrink-0',
                feature.highlight ? 'text-orange-500' : 'text-[#635BFF] dark:text-[#8b82ff]'
              )}
            />
            <span className={feature.highlight ? 'text-foreground' : 'text-muted-foreground'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
