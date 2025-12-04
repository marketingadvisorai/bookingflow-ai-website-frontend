/**
 * Navbar Actions (Right Side) Component
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

interface NavbarActionsProps {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export function NavbarActions({
  isMobileMenuOpen,
  onMobileMenuToggle,
}: NavbarActionsProps) {
  return (
    <>
      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/login"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 xl:px-4 py-2"
        >
          Login
        </Link>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button asChild>
            <Link href="/onboarding">Get Started</Link>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Actions */}
      <div className="lg:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={onMobileMenuToggle}
          className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  );
}
