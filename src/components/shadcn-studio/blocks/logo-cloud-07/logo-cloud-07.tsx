import { Orbiting } from '@/components/ui/orbiting'
import { MotionPreset } from '@/components/ui/motion-preset'
import { CTAButton } from '@/components/ui/cta-button'

type Logos = {
  image: string
  alt: string
  size: string
}

const LogoCloud = ({ logos }: { logos: Logos[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between gap-12 gap-y-32 max-lg:flex-col sm:gap-16 lg:gap-24'>
          <div className='space-y-4'>
          

            <MotionPreset
              component='h2'
              className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'
              fade
              slide={{ direction: 'up', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.3}
            >
             Funktioniert mit allem, was du bereits nutzt
            </MotionPreset>

            <MotionPreset
              component='p'
              className='text-muted-foreground mb-12 text-xl sm:mb-16 lg:mb-24'
              fade
              blur
              slide={{ direction: 'up', offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.6}
            >
              Keine neuen Tools, keine komplizierten Migrationen – wir integrieren uns nahtlos in deine bestehende Infrastruktur und machen sie intelligenter.
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }} delay={0.9}>
              <div className='bg-primary/10 flex flex-col gap-4 overflow-hidden rounded-lg px-6 py-4'>
                <p className='text-primary text-xl font-medium text-center'>Möchtest du starten?</p>
                <MotionPreset
                  fade
                  blur
                  slide={{ direction: 'up', offset: 20 }}
                  transition={{ duration: 0.4 }}
                  delay={1.2}
                >
                  <CTAButton className="items-center w-full" />
                </MotionPreset>
              </div>
            </MotionPreset>
          </div>

          <MotionPreset
            className='max-sm:scale-75'
            fade
            blur
            zoom={{ initialScale: 0.8 }}
            transition={{ duration: 0.8 }}
            delay={0.5}
          >
            <div className='relative flex size-112 flex-col items-center justify-center'>
              <Orbiting radius={200} dashed={true} dashedGap={12}>
                {logos.slice(0, 6).map((logo, index) => (
                  <img key={index} src={logo.image} alt={logo.alt} className={logo.size} />
                ))}
              </Orbiting>
              <Orbiting radius={115} reverse speed={2} dashed={true} dashedGap={12}>
                {logos.slice(6).map((logo, index) => (
                  <img key={index} src={logo.image} alt={logo.alt} className={logo.size} />
                ))}
              </Orbiting>

              <img 
                src="/images/ecomthek-logo-white.png" 
                alt="Ecomthek Logo" 
                className='absolute top-1/2 left-1/2 size-30 -translate-x-1/2 -translate-y-1/2' 
              />
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
