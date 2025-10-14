import BlogCard from '@/components/features/blog/blog-card';
import { getAllPosts, BlogPost } from "../../lib/api/cms";
import { Card, CardContent } from '@/components/ui/card';
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  EuroIcon, 
  Users, 
  Settings 
} from 'lucide-react';

const categories = [
  {
    id: 'produkt-offer',
    name: 'Produkt & Offer',
    slug: 'produkt-offer',
    icon: Package,
    color: 'bg-blue-100 text-blue-600',
    description: 'Produktstrategie und Angebotsoptimierung'
  },
  {
    id: 'shop-conversion',
    name: 'Shop & Conversion',
    slug: 'shop-conversion',
    icon: ShoppingCart,
    color: 'bg-green-100 text-green-600',
    description: 'Shop-Optimierung und Conversion Rate'
  },
  {
    id: 'traffic',
    name: 'Traffic',
    slug: 'traffic',
    icon: TrendingUp,
    color: 'bg-purple-100 text-purple-600',
    description: 'Traffic-Generierung und Marketing'
  },
  {
    id: 'zahlen-finanzen',
    name: 'Zahlen & Finanzen',
    slug: 'zahlen-finanzen',
    icon: EuroIcon,
    color: 'bg-yellow-100 text-yellow-600',
    description: 'Finanzanalyse und KPIs'
  },
  {
    id: 'retention-crm',
    name: 'Retention & CRM',
    slug: 'retention-crm',
    icon: Users,
    color: 'bg-pink-100 text-pink-600',
    description: 'Kundenbindung und CRM'
  },
  {
    id: 'operations-marke',
    name: 'Operations & Marke',
    slug: 'operations-marke',
    icon: Settings,
    color: 'bg-orange-100 text-orange-600',
    description: 'Betrieb und Markenführung'
  }
];

export default async function BlogPage() {

  const blogPosts = await getAllPosts();

  return (
    <section className="container mx-auto space-y-12 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Operatives E-Commerce – zum Nachmachen
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Kurz, messbar, anwendbar. Für Marken, die profitabel wachsen wollen.
        </p>
      </div>

      {/* Kategorien Sektion */}
      <div className="space-y-6">
        
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                <a href={`/playbooks/${category.slug}`} className="block">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${category.color} group-hover:scale-110 transition-transform duration-300 ease-out`}>
                        <IconComponent className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300 ease-out" />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-lg font-medium text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Artikel Sektion */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Neueste Artikel
          </h2>
          <p className="text-muted-foreground">
            Praktische Insights für dein E-Commerce Business
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post: BlogPost) => (
            <BlogCard 
              key={post.id} 
              post={post}
              readTime="5 min read"
            />
          ))}
        </div>
      </div>
    </section>
  );
}