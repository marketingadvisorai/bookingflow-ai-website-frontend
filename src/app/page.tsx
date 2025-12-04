/**
 * Homepage - Temporary Setup Page
 * Will be replaced with actual homepage components.
 */

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar, Footer } from '@/components/layout';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#635BFF]/10 text-[#635BFF] rounded-full text-sm font-medium">
              Next.js 16.0.7 • React 19 • Tailwind CSS 4
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              BookingFlow AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-Powered Booking Engine for Escape Rooms. 
              Currently setting up the new frontend.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              View Documentation
            </Button>
          </div>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Supabase connected with 11 tables and RLS policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ Design System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Theme configured with BookingFlow AI colors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🚧 Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Building UI components following design guide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Next.js 16.0.7',
                'React 19',
                'TypeScript 5',
                'Tailwind CSS 4',
                'Supabase',
                'Motion',
                'Radix UI',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
