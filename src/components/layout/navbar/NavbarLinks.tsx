/**
 * Navbar Desktop Links Component
 * Following enterprise guidelines: <200 lines
 */

'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: string;
}

interface NavbarLinksProps {
  items: NavItem[];
  activeDropdown: string | null;
  onDropdownEnter: (dropdown: string | null) => void;
}

export function NavbarLinks({
  items,
  activeDropdown,
  onDropdownEnter,
}: NavbarLinksProps) {
  return (
    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.hasDropdown && onDropdownEnter(item.dropdown || null)}
        >
          <Link
            href={item.href}
            className={cn(
              'text-sm text-muted-foreground hover:text-foreground',
              'transition-colors flex items-center gap-1 py-5'
            )}
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform duration-200',
                  activeDropdown === item.dropdown && 'rotate-180'
                )}
              />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
