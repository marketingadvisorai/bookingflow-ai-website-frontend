/**
 * Hero Visual Component
 * Dashboard preview/demo visualization.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { motion } from 'motion/react';
import { Calendar, Users, TrendingUp } from 'lucide-react';

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mt-16 relative max-w-5xl mx-auto px-4"
    >
      {/* Main Dashboard Card */}
      <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 relative overflow-hidden">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 mx-4">
            <div className="h-6 bg-muted rounded-md flex items-center px-3">
              <span className="text-xs text-muted-foreground">app.bookingflow.ai/dashboard</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="aspect-video bg-gradient-to-br from-[#635BFF]/5 to-[#8b82ff]/5 dark:from-[#635BFF]/10 dark:to-[#8b82ff]/10 rounded-lg flex items-center justify-center">
          <div className="text-center space-y-4 px-8">
            <Calendar size={64} className="text-[#635BFF] dark:text-[#8b82ff] mx-auto" />
            <p className="text-lg text-muted-foreground">
              Dashboard Preview: Manage all your bookings in one place
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                <div className="text-2xl font-bold text-[#635BFF]">24</div>
                <div className="text-xs text-muted-foreground">Today</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                <div className="text-2xl font-bold text-[#8b82ff]">156</div>
                <div className="text-xs text-muted-foreground">This Week</div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                <div className="text-2xl font-bold text-green-500">$12k</div>
                <div className="text-xs text-muted-foreground">Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Notification - Top Right */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -right-4 sm:right-4 bg-card rounded-lg shadow-lg p-3 border border-border hidden sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-foreground">+5 New Bookings</span>
        </div>
      </motion.div>

      {/* Floating Notification - Bottom Left */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-4 -left-4 sm:left-4 bg-card rounded-lg shadow-lg p-3 border border-border hidden sm:block"
      >
        <div className="flex items-center gap-2">
          <Users size={16} className="text-[#635BFF]" />
          <span className="text-xs font-medium text-foreground">12 Active Sessions</span>
        </div>
      </motion.div>

      {/* Floating Trend - Top Left */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        className="absolute top-8 -left-8 bg-card rounded-lg shadow-lg p-3 border border-border hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <TrendingUp size={16} className="text-green-500" />
          <span className="text-xs font-medium text-foreground">+23% Revenue</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
