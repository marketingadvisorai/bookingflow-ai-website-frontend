/**
 * CTA Section
 * Final call-to-action with benefits.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';

const benefits = [
  { icon: Zap, text: 'Setup in 5 minutes with our quick wizard' },
  { icon: CheckCircle2, text: '14-day free trial, no credit card required' },
  { icon: TrendingUp, text: 'Free migration from your current system' },
  { icon: Shield, text: 'Dedicated success manager included' },
];

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#635BFF] via-[#5145FF] to-[#4a3fd9]" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 lg:mb-8"
          >
            <Sparkles className="text-white" size={18} />
            <span className="text-sm font-semibold text-white">Join 5,000+ Successful Venues</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Automate Your Entire Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-white/90 mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Stop trading time for money. Install the intelligent operating system that books, sells,
            and manages itself.
          </motion.p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 lg:mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-left hover:bg-white/15 transition-colors"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-white" size={20} />
                </div>
                <span className="text-white font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/onboarding"
                className="bg-white text-[#635BFF] px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 text-lg"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schedule-meeting"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 text-lg"
              >
                Schedule a Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 lg:mt-10 text-white/70 text-sm font-medium"
          >
            🔒 Enterprise-grade security • 99.9% uptime • GDPR compliant
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
