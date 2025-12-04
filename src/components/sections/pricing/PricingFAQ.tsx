/**
 * Pricing FAQ Component
 * Frequently asked questions accordion.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'Can I start with a free trial?',
    answer:
      'Yes! We offer a 14-day free trial on all plans with no credit card required. You get full access to all features.',
  },
  {
    question: 'What happens if I exceed my booking limit?',
    answer:
      "We'll notify you when you're approaching your limit. You can upgrade anytime, or we offer flexible overage pricing at $0.10 per additional booking.",
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely! You can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer:
      'Yes! Save 20% with annual billing on any plan. Plus, get priority onboarding and additional implementation support.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'No setup fees, ever. We include free onboarding and migration assistance with all plans.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "Yes! We offer a 30-day money-back guarantee. If BookingFlow AI isn't right for you, we'll refund your payment in full.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Pricing <span className="text-[#635BFF] dark:text-[#8b82ff]">FAQ</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about our pricing
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium pr-8 text-foreground">{faq.question}</span>
              <ArrowRight
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openIndex === idx ? 'rotate-90' : ''
                }`}
              />
            </button>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="px-6 pb-5 text-muted-foreground"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
