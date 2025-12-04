/**
 * Pricing Section
 * Complete pricing page with tiers, FAQ, and CTA.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, Shield } from 'lucide-react';

import { PricingHeader } from './PricingHeader';
import { PricingCard } from './PricingCard';
import { PricingFAQ } from './PricingFAQ';
import { pricingTiers } from './pricingData';

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 91, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99, 91, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <PricingHeader />

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        <PricingFAQ />

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#635BFF] to-[#5348E6] rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to transform your booking system?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 2,500+ businesses saving time and increasing revenue with BookingFlow AI.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/onboarding"
                className="px-8 py-4 bg-white text-[#635BFF] rounded-lg hover:bg-gray-100 transition-colors shadow-xl font-medium inline-block"
              >
                Start Free Trial
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schedule-meeting"
                className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-xl font-medium inline-block"
              >
                Schedule a Demo
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>1-800-BOOKING</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>sales@bookingflow.ai</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>Live chat available</span>
            </div>
          </div>
        </motion.div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/30 rounded-full">
            <Shield className="w-6 h-6 text-green-500" />
            <div className="text-left">
              <p className="font-medium text-green-600 dark:text-green-400">
                30-Day Money-Back Guarantee
              </p>
              <p className="text-sm text-green-600/80 dark:text-green-400/80">
                Not satisfied? Get a full refund, no questions asked.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { PricingHeader } from './PricingHeader';
export { PricingCard } from './PricingCard';
export { PricingFAQ } from './PricingFAQ';
