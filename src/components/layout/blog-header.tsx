import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShoppingCart, TrendingUp, Euro, Users, Settings, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function BlogHeader() {
  // Category mapping for icons and colors
  const categories = [
    { slug: 'produkt-offer', name: 'Produkt & Offer', icon: Package, color: 'bg-blue-100 text-blue-600' },
    { slug: 'shop-conversion', name: 'Shop & Conversion', icon: ShoppingCart, color: 'bg-green-100 text-green-600' },
    { slug: 'traffic', name: 'Traffic', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
    { slug: 'zahlen-finanzen', name: 'Zahlen & Finanzen', icon: Euro, color: 'bg-yellow-100 text-yellow-600' },
    { slug: 'retention-crm', name: 'Retention & CRM', icon: Users, color: 'bg-pink-100 text-pink-600' },
    { slug: 'operations-marke', name: 'Operations & Marke', icon: Settings, color: 'bg-orange-100 text-orange-600' },
  ];

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
            {/* Playbooks Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  Playbooks
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="grid grid-cols-2 gap-2 p-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <DropdownMenuItem key={category.slug} asChild>
                        <Link href={`/playbooks/${category.slug}`} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${category.color}`}>
                            <IconComponent className={`h-4 w-4 ${category.color.split(' ')[1]}`} />
                          </div>
                          <span className="text-sm font-medium">{category.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              size="sm" 
              className="font-semibold"
              asChild
            >
              <Link href="/#hero-form">
                <ArrowRight className="mr-2 h-4 w-4" />
                Kostenloser Shop Audit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
