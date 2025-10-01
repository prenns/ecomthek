import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ArrowRightIcon, Package, ShoppingCart, TrendingUp, Euro, Users, Settings } from 'lucide-react';
import { BlogPost } from '@/lib/api/cms';

type BlogCardProps = {
  post: BlogPost;
  readTime?: string; // Optional, da es nicht in getAllPosts enthalten ist
};

export default function BlogCard({ post }: BlogCardProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get first category name and slug for badge and URL
  const firstCategory = post.categories?.nodes?.[0];
  const categoryName = firstCategory?.name || 'Uncategorized';
  const categorySlug = firstCategory?.slug || 'uncategorized';

  // Category mapping for icons and colors
  const getCategoryInfo = (categorySlug: string) => {
    const categoryMap: Record<string, { name: string; icon: any; color: string }> = {
      'produkt-offer': { name: 'Produkt & Offer', icon: Package, color: 'bg-blue-100 text-blue-600' },
      'shop-conversion': { name: 'Shop & Conversion', icon: ShoppingCart, color: 'bg-green-100 text-green-600' },
      'traffic': { name: 'Traffic', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
      'zahlen-finanzen': { name: 'Zahlen & Finanzen', icon: Euro, color: 'bg-yellow-100 text-yellow-600' },
      'retention-crm': { name: 'Retention & CRM', icon: Users, color: 'bg-pink-100 text-pink-600' },
      'operations-marke': { name: 'Operations & Marke', icon: Settings, color: 'bg-orange-100 text-orange-600' },
    };
    return categoryMap[categorySlug] || { name: categoryName, icon: Package, color: 'bg-gray-100 text-gray-600' };
  };

  const categoryInfo = getCategoryInfo(categorySlug);
  const IconComponent = categoryInfo.icon;

  return (
    <Card className="flex h-full flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group cursor-pointer">
      <CardContent className="flex-grow pt-4 pb-2 px-6">
        <div className="space-y-3">
          <Badge variant="secondary" className={`${categoryInfo.color} border-0`}>
            <IconComponent className="mr-1 h-3 w-3" />
            {categoryInfo.name}
          </Badge>
          <h3 className="text-lg font-semibold leading-tight hover:text-primary transition-colors">
            <a href={`/playbooks/${categorySlug}/${post.slug}`} className="block">
              {post.title}
            </a>
          </h3>
          <div 
            className="prose prose-sm max-w-none line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 px-6 pb-4">
        <div className="text-muted-foreground flex items-center text-sm">
          <CalendarIcon className="mr-1 h-3 w-3" />
          <span>{formatDate(post.date)}</span>
        </div>
        <Button variant="link" className="px-0 h-auto group-hover:text-primary transition-colors" asChild>
          <a href={`/playbooks/${categorySlug}/${post.slug}`}>
            Mehr lesen <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
