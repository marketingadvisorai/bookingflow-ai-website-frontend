/**
 * Clients/Logos Section
 * Displays trusted client logos and trust indicators.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const clients = [
  { name: 'EscapeQuest', type: 'icon' },
  { name: 'MysteryRooms', type: 'gradient-purple' },
  { name: 'PuzzlePalace', type: 'icon' },
  { name: 'AdventureZone', type: 'gradient-blue' },
  { name: 'TheExitRoom', type: 'icon' },
];

const trustIndicators = [
  'No credit card required',
  '14-day free trial',
  'Cancel anytime',
];

export function ClientsSection() {
  return (
    <section className="relative py-20 overflow-hidden border-y border-border transition-colors duration-200">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm mb-3 uppercase tracking-wider">
            Trusted by teams worldwide
          </p>
          <p className="text-foreground text-2xl">
            Powering{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#635BFF] dark:text-[#8b82ff] font-semibold">
                50+
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#635BFF]/10 dark:bg-[#635BFF]/20 -z-0 rounded" />
            </span>{' '}
            escape rooms and entertainment venues
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm ${
                  client.type === 'gradient-purple'
                    ? 'bg-gradient-to-br from-[#635BFF] to-[#5145FF]'
                    : client.type === 'gradient-blue'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                    : 'border-2 border-border bg-card'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded ${
                    client.type.includes('gradient') ? 'bg-white/30' : 'bg-muted-foreground/30'
                  }`}
                />
              </div>
              <span className="text-foreground font-semibold text-lg">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          {trustIndicators.map((indicator) => (
            <div key={indicator} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
