import BlogHeader from '@/components/layout/blog-header';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogHeader />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
