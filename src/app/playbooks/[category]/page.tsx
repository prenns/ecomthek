import BlogCard from '@/components/features/blog/blog-card';
import { getAllPosts, BlogPost, getAllCategories, getCategoryBySlug } from "../../../lib/api/cms";
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {

    const allCategories = await getAllCategories();

    return allCategories.map((category: { slug: string }) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps) {

    const { category } = await params;
    const categoryData = await getCategoryBySlug(category);
    if (categoryData) {
        return {
            title: categoryData.seo?.title || categoryData.name,
            description: categoryData.seo?.metaDesc || categoryData.description
        }
    }
    else return null;
}


export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  
  // Get all posts and categories
  const [allPosts, allCategories] = await Promise.all([
    getAllPosts(),
    getAllCategories()
  ]);

  // Find the category by slug
  const categoryData = allCategories.find((cat: { slug: string }) => cat.slug === category);
  
  if (!categoryData) {
    notFound();
  }

  // Filter posts by category
  const categoryPosts = allPosts.filter((post: BlogPost) => 
    post.categories.nodes.some((cat) => cat.slug === category)
  );

  return (
    <section className="container mx-auto space-y-12 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {categoryData.name}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          {categoryData.description}
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categoryPosts.map((post: BlogPost) => (
          <BlogCard 
            key={post.id} 
            post={post}
            readTime="5 min read"
          />
        ))}
      </div>

      {categoryPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Keine Artikel in dieser Kategorie gefunden.
          </p>
        </div>
      )}
    </section>
  );
}
