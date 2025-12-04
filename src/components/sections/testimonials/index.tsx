/**
 * Testimonials Section
 * Customer testimonials with pagination.
 * Following enterprise guidelines: <200 lines
 */

'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: 'BookingFlow AI transformed our escape room business. We went from spreadsheets to a sleek, automated system. Check-ins are a breeze!',
    author: 'Sarah Mitchell',
    role: 'Owner',
    company: 'Mystery Manor Escape Rooms',
    rating: 5,
  },
  {
    quote: 'The calendar view is a game-changer. We can see our entire week at a glance and avoid double-bookings.',
    author: 'James Rodriguez',
    role: 'Operations Manager',
    company: 'Adventure Zone',
    rating: 5,
  },
  {
    quote: 'Our staff loves how easy it is to check in customers. The QR code scanner works perfectly.',
    author: 'Emma Chen',
    role: 'Front Desk Manager',
    company: 'Puzzle Palace',
    rating: 5,
  },
  {
    quote: 'Reporting features are excellent. We export booking data weekly and use it to optimize our pricing.',
    author: 'Michael Thompson',
    role: 'CEO',
    company: 'Escape Quest Network',
    rating: 5,
  },
  {
    quote: 'Payment integration with Stripe made our lives so much easier. No more manual payment tracking.',
    author: 'Lisa Anderson',
    role: 'Finance Manager',
    company: 'The Great Escape Co.',
    rating: 5,
  },
  {
    quote: 'We run 3 locations and BookingFlow AI handles them all seamlessly.',
    author: 'David Park',
    role: 'Regional Director',
    company: 'Epic Adventures',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = testimonials.slice(currentPage * perPage, (currentPage + 1) * perPage);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm mb-4">
            <Star size={16} fill="currentColor" />
            Loved by venue owners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Don&apos;t just take our <span className="text-[#635BFF] dark:text-[#8b82ff]">word</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thousands of venues trust BookingFlow AI to manage their bookings every day
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {current.map((testimonial, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-xl p-8 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          {totalPages > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-card rounded-full shadow-lg border border-border hover:bg-muted disabled:opacity-50 hidden lg:block"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-card rounded-full shadow-lg border border-border hover:bg-muted disabled:opacity-50 hidden lg:block"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentPage ? 'bg-[#635BFF] w-8' : 'bg-muted w-2 hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
