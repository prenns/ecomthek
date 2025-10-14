'use client'

// React Imports
import { useRef } from 'react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

// Icon Imports
import { Mail, ShoppingCart, TrendingUp, Target, Palette, Headphones } from 'lucide-react'

// SVG Imports
import Logo from '@/assets/svg/logo'

const Collaboration = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLSpanElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='absolute inset-0 z-1 flex w-full flex-col justify-center gap-9.5 px-6'>
      <div className='mx-9.5 flex items-center justify-between gap-6'>
        <span ref={span1Ref} className='bg-card flex size-12 shrink-0 items-center justify-center rounded-full border'>
          <Mail className='size-6 text-primary' />
        </span>
        <span ref={span4Ref} className='bg-card flex size-12 shrink-0 items-center justify-center rounded-full border'>
          <Target className='size-6 text-primary' />
        </span>
      </div>
      <div className='flex items-center justify-between gap-6'>
        <span ref={span2Ref} className='bg-card flex size-12 shrink-0 items-center justify-center rounded-full border'>
          <ShoppingCart className='size-6 text-primary' />
        </span>
        <span ref={logoRef}>
          
          <img src="/images/ecomthek-logo-white.png" alt="Ecomthek Logo" className='size-16' />
        </span>
        <span ref={span5Ref} className='bg-card flex size-12 items-center justify-center rounded-full border'>
          <Palette className='size-6 text-primary' />
        </span>
      </div>
      <div className='mx-9.5 flex items-center justify-between gap-6'>
        <span ref={span3Ref} className='bg-card flex size-12 shrink-0 items-center justify-center rounded-full border'>
          <TrendingUp className='size-6 text-primary' />
        </span>
        <span ref={span6Ref} className='bg-card flex size-12 shrink-0 items-center justify-center rounded-full border'>
          <Headphones className='size-6 text-primary' />
        </span>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={-25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={25}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span5Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span6Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={-25}
        reverse
      />
    </div>
  )
}

export default Collaboration
