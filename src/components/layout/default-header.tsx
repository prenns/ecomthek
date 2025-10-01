import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DefaultHeader() {
  return (
    <section className="py-4 border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              className="h-8 w-auto dark:invert block object-contain"
              alt="ECOMTHEK Logo"
            />
            <span className="text-lg font-bold tracking-tighter">
              ECOMTHEK
            </span>
          </Link>
          
          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link 
              href="/blog" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              asChild
            >
              <Link href="/#hero-form">
                Audit starten
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}