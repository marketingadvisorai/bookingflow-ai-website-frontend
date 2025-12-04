/**
 * Main Navbar Component
 * Combines all navbar sub-components.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { NavbarBrand } from './NavbarBrand';
import { NavbarLinks, type NavItem } from './NavbarLinks';
import { NavbarActions } from './NavbarActions';
import { NavbarMobile } from './NavbarMobile';

const navItems: NavItem[] = [
  { label: 'Products', href: '#products', hasDropdown: true, dropdown: 'products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '#resources', hasDropdown: true, dropdown: 'resources' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          'sticky top-0 z-[100] transition-all duration-300',
          'border-b border-border',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-background'
        )}
        initial={{ y: 0 }}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <NavbarBrand />

            <NavbarLinks
              items={navItems}
              activeDropdown={activeDropdown}
              onDropdownEnter={setActiveDropdown}
            />

            <NavbarActions
              isMobileMenuOpen={isMobileMenuOpen}
              onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </motion.nav>

      <NavbarMobile
        isOpen={isMobileMenuOpen}
        items={navItems}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

// Barrel exports
export { NavbarBrand } from './NavbarBrand';
export { NavbarLinks, type NavItem } from './NavbarLinks';
export { NavbarActions } from './NavbarActions';
export { NavbarMobile } from './NavbarMobile';
