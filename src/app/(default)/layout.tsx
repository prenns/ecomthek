
import NavbarPage from '@/components/shadcn-studio/blocks/navbar-component-02/navbar-component-02'


const navigationData = [
  {
    title: 'Vorteile',
    href: '/#features'
  },
  {
    title: 'Über Uns',
    href: '/#about'
  },
  {
    title: 'Prozess',
    href: '/#process'
  },
  {
    title: 'Leistungen',
    href: '/#services'
  },
  {
    title: 'FAQ',
    href: '/#faq'
  }
]

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarPage navigationData={navigationData} />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
