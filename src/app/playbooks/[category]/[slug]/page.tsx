import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getPostSEOBySlug } from "../../../../lib/api/cms";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, ShoppingCart, TrendingUp, Euro, Users, Settings } from 'lucide-react';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
   const posts = await getAllPosts();

    return posts.map((post) => ({
        category: post.categories.nodes[0]?.slug || 'uncategorized',
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostPageProps) {

  const { slug } = await params;
  const post = await getPostSEOBySlug(slug);

  if(post) {
        return {
            title: post.seo.title,
            description: post.seo.metaDesc
          }
   }
  else return null;

}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;
  
  // Get the specific post
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Verify the post belongs to the specified category
  const postCategory = post.categories.nodes.find((cat: { slug: string }) => cat.slug === category);
  if (!postCategory) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
    return categoryMap[categorySlug] || { name: postCategory.name, icon: Package, color: 'bg-gray-100 text-gray-600' };
  };

  const categoryInfo = getCategoryInfo(category);
  const IconComponent = categoryInfo.icon;

  return (
    <section className="py-32 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Back to Category Button */}
        <div className="mb-12">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/playbooks/${category}`} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück zu {postCategory.name}
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Category Badge */}
          <Badge variant="secondary" className={`${categoryInfo.color} border-0`}>
            <IconComponent className="mr-2 h-4 w-4" />
            {categoryInfo.name}
          </Badge>
          
          <h1 className="max-w-3xl text-pretty text-5xl font-semibold md:text-6xl">
            {post.title}
          </h1>
          <div 
            className="text-muted-foreground max-w-3xl text-lg md:text-xl"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <div className="flex items-center gap-3 text-sm md:text-base">
            <span>
              <span className="font-semibold">
                {post.author.node.firstName} {post.author.node.lastName}
              </span>
              <span className="ml-1">am {formatDate(post.date)}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          />
        </div>
      </div>
    </section>
  );
}