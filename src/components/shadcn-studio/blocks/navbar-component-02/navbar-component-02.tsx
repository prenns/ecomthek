'use client'

import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type NavigationItem = {
  title: string
  href: string
}[]

type NavbarProps = {
  navigationData: NavigationItem
  showTerminButton?: boolean
}

const Navbar = ({ navigationData, showTerminButton = true }: NavbarProps) => {
  const pathname = usePathname()
  const isTerminPage = pathname === '/termin'
  const displayTerminButton = showTerminButton && !isTerminPage

  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <Link href='/' className='flex items-center gap-2'>
          <img src="/images/ecomthek-logo-white.png" alt="Ecomthek Logo" className='h-8 w-auto object-contain' />
          <span className='font-bold text-lg tracking-tighter'>ECOMTHEK AI</span>
        </Link>

        <div className='flex items-center gap-6'>
          <div className='text-muted-foreground flex items-center gap-6 font-medium max-md:hidden'>
            {navigationData.map((item, index) => (
              <Link key={index} href={item.href} className='hover:text-primary'>
                {item.title}
              </Link>
            ))}
          </div>
          
          {displayTerminButton && (
            <Button variant='outline' size='sm' asChild className='max-md:hidden'>
              <Link href='/termin'>
                Termin buchen
              </Link>
            </Button>
          )}
         
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
                {displayTerminButton && (
                  <DropdownMenuItem>
                    <Link href='/termin' className='font-medium'>Termin buchen</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
