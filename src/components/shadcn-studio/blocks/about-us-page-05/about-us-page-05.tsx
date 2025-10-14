import type { ComponentType } from 'react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type FeatureCard = {
  icon: ComponentType
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}[]

const AboutUs = ({ features }: { features: FeatureCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 max-w-6xl space-y-4 text-center md:mb-16 lg:mb-24'>
          

          <MotionPreset
            component='h2'
            className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Dein E-Commerce Business wächst – aber deine Probleme auch?
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Als Founder kennst du den Kampf: Operatives Chaos, Daten-Overload und schrumpfende Margen bremsen dein wahres Wachstumspotential.
          </MotionPreset>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              zoom={{ initialScale: 0.85 }}
              delay={0.9 + index * 0.1}
              transition={{ duration: 0.5 }}
              className='max-lg:last:col-span-full'
            >
              <Card className='rounded-lg shadow-none'>
                <CardContent className='space-y-4'>
                  <img src={feature.imageUrl} alt={feature.imageAlt} className='h-50 w-full object-cover' />
                  <CardTitle className='flex items-center gap-3 text-xl'>
                    <feature.icon />
                    {feature.title}
                  </CardTitle>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
