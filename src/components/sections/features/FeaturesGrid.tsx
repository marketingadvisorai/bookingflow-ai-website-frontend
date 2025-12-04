/**
 * Features Grid Component
 * Grid of feature cards.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';
import {
  Calendar,
  QrCode,
  CreditCard,
  Mail,
  Search,
  BarChart3,
  Settings,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Calendar,
    title: 'Smart Booking Management',
    description: 'Create, edit, and track bookings with our intuitive dashboard.',
    color: 'blue',
  },
  {
    icon: QrCode,
    title: 'QR Code Check-In',
    description: 'Customers check in instantly with QR codes. No manual entry.',
    color: 'purple',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Accept payments via Stripe, cash, or gift vouchers.',
    color: 'green',
  },
  {
    icon: Mail,
    title: 'Automated Emails',
    description: 'Send confirmations and reminders automatically.',
    color: 'orange',
  },
  {
    icon: Calendar,
    title: 'Calendar Views',
    description: 'Visualize your schedule with month, week, and day views.',
    color: 'pink',
  },
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Find any booking instantly by ID, customer, or date.',
    color: 'indigo',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Export data and generate revenue reports.',
    color: 'cyan',
  },
  {
    icon: Settings,
    title: 'Role-Based Access',
    description: 'Control permissions for admins, managers, and staff.',
    color: 'red',
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
  green: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400',
  orange: 'bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
  pink: 'bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
  indigo: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
  cyan: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
  red: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400',
};

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="group"
        >
          <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300">
            <div
              className={`w-12 h-12 ${colorMap[feature.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <feature.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
