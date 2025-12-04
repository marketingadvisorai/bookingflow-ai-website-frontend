/**
 * Features Section
 * Displays product features with grid and status flow.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';
import { CheckCircle, Clock, QrCode, Users, XCircle } from 'lucide-react';

import { FeaturesGrid } from './FeaturesGrid';

const statuses = [
  { label: 'Pending', color: 'yellow', Icon: Clock },
  { label: 'Confirmed', color: 'blue', Icon: CheckCircle },
  { label: 'Checked In', color: 'green', Icon: QrCode },
  { label: 'In Progress', color: 'purple', Icon: Users },
  { label: 'Completed', color: 'gray', Icon: CheckCircle },
  { label: 'Cancelled', color: 'red', Icon: XCircle },
  { label: 'No-Show', color: 'orange', Icon: XCircle },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#635BFF]/10 text-[#635BFF] dark:text-[#8b82ff] px-4 py-2 rounded-full text-sm mb-4">
            <CheckCircle size={16} />
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to manage{' '}
            <span className="text-[#635BFF] dark:text-[#8b82ff]">bookings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From booking creation to customer check-in, we&apos;ve got you covered with powerful
            tools built for entertainment venues.
          </p>
        </motion.div>

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Status Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Track every <span className="text-[#635BFF] dark:text-[#8b82ff]">booking stage</span>
            </h3>
            <p className="text-muted-foreground">
              Multi-status tracking keeps you organized from booking to completion
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#635BFF]/5 to-[#8b82ff]/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              {statuses.map((status, index) => (
                <motion.div
                  key={status.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-4 text-center shadow-sm border border-border"
                >
                  <status.Icon className={`mx-auto mb-2 text-${status.color}-500`} size={24} />
                  <div className="text-xs font-medium text-foreground">{status.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { FeaturesGrid } from './FeaturesGrid';
