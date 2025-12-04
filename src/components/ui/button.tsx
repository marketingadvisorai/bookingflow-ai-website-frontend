/**
 * Button component with variants.
 * Following enterprise guidelines: <200 lines, modular, typed.
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#635BFF] text-white hover:bg-[#7c72ff]',
        secondary:
          'bg-transparent text-white border border-[#27272a] hover:border-[#635BFF]',
        ghost: 'text-[#A1A1AA] hover:text-white hover:bg-[#131318]',
        link: 'text-[#635BFF] underline-offset-4 hover:underline',
        destructive: 'bg-[#EF4444] text-white hover:bg-[#DC2626]',
      },
      size: {
        default: 'h-10 px-6 py-3 rounded-lg',
        sm: 'h-8 px-4 py-2 rounded-lg text-sm',
        lg: 'h-12 px-8 py-4 rounded-lg text-lg',
        icon: 'h-10 w-10 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
