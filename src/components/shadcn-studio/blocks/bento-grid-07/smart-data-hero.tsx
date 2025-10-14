'use client'

// React Imports
import { useRef } from 'react'

// Third-party Imports
import { Sparkles, BotIcon, LightbulbIcon, TrendingUpIcon, MessageCircleWarningIcon, TrendingDownIcon} from 'lucide-react'

// Component Imports
import Logo from '@/assets/svg/logo'

import { AnimatedBeam } from '@/components/ui/animated-beam'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

const SmartData = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative z-1'>
      <div className='flex w-full flex-col items-center gap-6'>
        <div className='grid w-full grid-cols-4 place-items-center gap-4'>
          <div
            ref={div1Ref}
            className='bg-card flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
          >
            <img
              src='/images/meta.png'
              alt='Meta Ads'
              className='size-4.5 rounded-full'
            />
            <span className='text-card-foreground text-sm max-sm:hidden'>Meta Ads</span>
          </div>

          <div
            ref={div2Ref}
            className='bg-card flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
          >
            <img
              src='/images/google_ads.png'
              alt='Google Ads'
              className='size-4.5 rounded-full'
            />
            <span className='text-card-foreground text-sm max-sm:hidden'>Google Ads</span>
          </div>

          <div
            ref={div3Ref}
            className='bg-card flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
          >
            <img
              src='/images/shopify_glyph.png'
              alt='Shopify'
              className='size-4.5 rounded-full'
            />
            <span className='text-card-foreground text-sm max-sm:hidden'>Shopify</span>
          </div>

          <div
            ref={div4Ref}
            className='bg-card flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
          >
            <img
              src='/images/ga4.svg'
              alt='Google Analytics'
              className='size-4.5 rounded-full'
            />
            <span className='text-card-foreground text-sm max-sm:hidden'>Analytics</span>
          </div>
        </div>

        <div className='grid w-full grid-cols-4 place-items-center gap-4 text-center'>
          <span ref={span1Ref} className='size-0.5' />
          <span ref={span2Ref} className='size-0.5' />
          <span ref={span3Ref} className='size-0.5' />
          <span ref={span4Ref} className='size-0.5' />
        </div>

        <div className='flex justify-center'>
          <span ref={span5Ref} className='size-0.5' />
        </div>

        <div className='flex justify-center'>
          <div
            ref={div5Ref}
            className='bg-transparent text-primary flex w-fit items-center gap-1.5 rounded-full border border-primary p-1.5 shadow-md'
          >
            <BotIcon className='size-4.5' />
            <span className='text-sm'>Performance Marketing Agent</span>
          </div>
        </div>

        <div className='relative w-full px-3 sm:px-6'>
          <Card ref={div6Ref} className='relative h-46 pb-0'>
            <CardContent className='flex h-full items-end justify-center'>
              <svg width='226' height='106' viewBox='0 0 226 106' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_22224_100126)'>
                  <circle
                    cx='112.648'
                    cy='115'
                    r='113.25'
                    fill='var(--primary)'
                    fillOpacity='0.2'
                    stroke='url(#paint0_linear_22224_100126)'
                    strokeWidth='1.5'
                  />
                  <circle
                    cx='112.648'
                    cy='122.5'
                    r='90.75'
                    fill='var(--primary)'
                    fillOpacity='0.2'
                    stroke='url(#paint1_linear_22224_100126)'
                    strokeWidth='1.5'
                  />
                  <circle
                    cx='112.648'
                    cy='122.5'
                    r='60.75'
                    fill='var(--primary)'
                    fillOpacity='0.2'
                    stroke='url(#paint2_linear_22224_100126)'
                    strokeWidth='1.5'
                  />
                </g>
                <defs>
                  <linearGradient
                    id='paint0_linear_22224_100126'
                    x1='112.648'
                    y1='2.5'
                    x2='112.648'
                    y2='201.81'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='var(--primary)' />
                    <stop offset='1' stopColor='white' stopOpacity='0' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_22224_100126'
                    x1='112.648'
                    y1='32.5'
                    x2='112.648'
                    y2='191.948'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='var(--primary)' />
                    <stop offset='1' stopColor='white' stopOpacity='0' />
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_22224_100126'
                    x1='112.648'
                    y1='62.5'
                    x2='112.648'
                    y2='168.799'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='var(--primary)' />
                    <stop offset='1' stopColor='white' stopOpacity='0' />
                  </linearGradient>
                  <clipPath id='clip0_22224_100126'>
                    <rect width='225' height='105' fill='white' transform='translate(0.148438 0.5)' />
                  </clipPath>
                </defs>
              </svg>

              <MotionPreset
                fade
                className='bg-card absolute bottom-1/3 left-3 flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
                motionProps={{
                  animate: {
                    y: [0, -4, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 0.8
                    }
                  }
                }}
              >
                <TrendingUpIcon className='size-5 text-green-500' />
                <span className='text-card-foreground text-sm max-sm:hidden'>Umsatz +12 %</span>
              </MotionPreset>
              <MotionPreset
                fade
                className='bg-card absolute bottom-4 left-1/7 flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
                motionProps={{
                  animate: {
                    y: [0, -4, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 0.8
                    }
                  }
                }}
              >
                <LightbulbIcon className='size-5 text-yellow-500' />
                <span className='text-card-foreground text-sm max-sm:hidden'>Ad Spend 15.200€ (+25%)
                </span>
              </MotionPreset>
              <MotionPreset
                fade
                className='bg-card absolute right-1/6 bottom-1/3 flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
                motionProps={{
                  animate: {
                    y: [0, -4, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 0.8
                    }
                  }
                }}
              >
                <MessageCircleWarningIcon className='size-5 text-yellow-500' />
                <span className='text-card-foreground text-sm max-sm:hidden'>Google Ads CPA +18 %</span>
              </MotionPreset>

              <MotionPreset
                fade
                className='bg-card absolute right-3 bottom-4 flex w-fit items-center gap-1.5 rounded-full border px-1.5 py-1 shadow-md'
                motionProps={{
                  animate: {
                    y: [0, -4, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 0.8
                    }
                  }
                }}
              >
                <TrendingDownIcon className='size-5 text-red-500' />
                <span className='text-card-foreground text-sm max-sm:hidden'>ROAS 2,8 (-15%)</span>
              </MotionPreset>

              
              <img src="/images/ecomthek-logo-white.png" alt="Ecomthek Logo" className='[&_line]:stroke-primary-foreground [&_path]:stroke-primary-foreground [&_rect]:fill-primary absolute -bottom-17 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2' />
            </CardContent>
          </Card>
          <Card className='bg-muted absolute inset-x-12 -bottom-4 -z-1 h-25' />
          <div className='absolute inset-x-0 top-6'>
            <div className='bg-background flex items-center gap-4 rounded-xl border px-5 py-2 shadow-lg'>
              <Sparkles className='size-8 shrink-0' />
              <span className='text-sm max-sm:text-xs'>
              Gib mir den Performance-Report der letzten 7 Tage
              </span>
            </div>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={span1Ref}
        className='text-primary -z-2'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={span2Ref}
        className='text-primary -z-2'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={span3Ref}
        reverse
        className='text-primary -z-2'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={span4Ref}
        reverse
        className='text-primary -z-2'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span5Ref}
        className='text-primary -z-2'
        duration={4}
        curvature={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span5Ref}
        className='text-primary -z-2'
        duration={4}
        curvature={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={span5Ref}
        reverse
        className='text-primary -z-2'
        duration={4}
        curvature={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={span5Ref}
        reverse
        className='text-primary -z-2'
        duration={4}
        curvature={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span5Ref}
        toRef={div5Ref}
        className='text-primary -z-2'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        className='text-primary -z-2'
        duration={4}
      />
    </div>
  )
}

export default SmartData
