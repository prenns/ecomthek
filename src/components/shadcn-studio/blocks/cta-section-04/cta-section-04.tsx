import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { CTAButton } from '@/components/ui/cta-button'

const CTASection = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='bg-muted/50 relative rounded-3xl border-none py-16 shadow-none'>
          <CardContent className='flex flex-col items-center justify-center px-6 md:px-12'>
            <div className='max-w-3xl space-y-6 text-center'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                Lass uns gemeinsam dein Wachstum automatisieren
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-xl text-white'
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Sichere dir jetzt deine kostenlose Potenzial-Analyse und erfahre, wie viel Zeit und Kosten du mit KI-Automatisierung einsparen kannst.
              </MotionPreset>

              <MotionPreset
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                <CTAButton className="items-center" trustTextClassName="text-center text-white/80" />
              </MotionPreset>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
