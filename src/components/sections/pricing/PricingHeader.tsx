/**
 * Pricing Header Component
 * Header with social proof and trust badges.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Shield, Star, TrendingUp, Users, Zap, Lock, Award } from 'lucide-react';

const socialProof = {
  customers: '2,500+',
  bookings: '1M+',
  rating: '4.9',
  uptime: '99.99%',
};

const trustBadges = [
  { icon: Shield, text: 'SOC 2 Compliant' },
  { icon: Lock, text: 'Bank-Level Security' },
  { icon: Award, text: 'ISO 27001 Certified' },
  { icon: CheckCircle2, text: 'GDPR Compliant' },
];

export function PricingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#635BFF]/10 border border-[#635BFF]/20 mb-6">
        <TrendingUp className="w-4 h-4 text-[#635BFF] dark:text-[#8b82ff]" />
        <span className="text-sm text-foreground">Transparent Pricing</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
        ROI-Driven Pricing{' '}
        <span className="text-[#635BFF] dark:text-[#8b82ff]">Models</span>
      </h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Designed for high-growth service businesses. Pay for value, not just features.
        <br />
        Join {socialProof.customers} businesses already saving time and increasing revenue.
      </p>

      {/* Social Proof */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#635BFF] dark:text-[#8b82ff]" />
          <div className="text-left">
            <div className="text-2xl font-bold text-foreground">{socialProof.customers}</div>
            <div className="text-sm text-muted-foreground">Active businesses</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#635BFF] dark:text-[#8b82ff]" />
          <div className="text-left">
            <div className="text-2xl font-bold text-foreground">{socialProof.bookings}</div>
            <div className="text-sm text-muted-foreground">Bookings processed</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
          <div className="text-left">
            <div className="text-2xl font-bold text-foreground">{socialProof.rating}/5</div>
            <div className="text-sm text-muted-foreground">Customer rating</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#635BFF] dark:text-[#8b82ff]" />
          <div className="text-left">
            <div className="text-2xl font-bold text-foreground">{socialProof.uptime}</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border">
        {trustBadges.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
            <badge.icon className="w-4 h-4 text-[#635BFF] dark:text-[#8b82ff]" />
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
