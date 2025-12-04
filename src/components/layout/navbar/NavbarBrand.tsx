/**
 * Navbar Brand/Logo Component
 * Following enterprise guidelines: <200 lines
 */

import Link from 'next/link';
import { Calendar } from 'lucide-react';

export function NavbarBrand() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#635BFF] to-[#5145FF] dark:from-[#7c72ff] dark:to-[#6b5fff] rounded-lg flex items-center justify-center">
        <Calendar className="text-white" size={16} />
      </div>
      <span className="text-lg sm:text-xl font-bold text-foreground">
        BookingFlow AI
      </span>
    </Link>
  );
}
