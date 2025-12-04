/**
 * Navbar Mobile Menu Component
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { NavItem } from './NavbarLinks';

interface NavbarMobileProps {
  isOpen: boolean;
  items: NavItem[];
  onClose: () => void;
}

export function NavbarMobile({ isOpen, items, onClose }: NavbarMobileProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="lg:hidden fixed inset-0 z-[200] bg-background"
          style={{ top: '56px' }}
        >
          <div className="h-full overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
                    onClick={onClose}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronRight size={20} className="text-muted-foreground" />
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/login" onClick={onClose}>
                    Login
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/onboarding" onClick={onClose}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
