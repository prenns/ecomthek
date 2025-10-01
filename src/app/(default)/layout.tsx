import DefaultHeader from '@/components/layout/default-header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultHeader />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
