import { CheckCircleIcon } from 'lucide-react'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTAButton } from '@/components/ui/cta-button'

type StatCard = {
  title: string
  description: string
}[]

type FeatureCard = {
  title: string
  description: string
}[]

const AboutUs = ({ statCards, featureCards }: { statCards: StatCard; featureCards: FeatureCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 grid gap-16 lg:grid-cols-2'>
          <div className='space-y-10'>
            <div className='space-y-4'>
              <p className='text-primary text-sm font-medium uppercase'>About Us</p>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Operative Exzellenz für wachsende D2C-Brands</h2>
              <p className='text-muted-foreground text-xl'>
              Als Gründer von wunderklein.com (7-stelliger Jahresumsatz) kenne ich die operativen Herausforderungen aus erster Hand. Ich habe die gleichen KI-Systeme entwickelt, die mein eigenes Business revolutioniert haben – jetzt helfe ich anderen D2C-Brands dabei, 80% ihrer Routinearbeit zu automatisieren und profitabler zu wachsen.
              </p>
            </div>

            {/* Stats grid with 4 cards */}
            <div className='grid gap-6 md:grid-cols-2'>
              {statCards.map((stat, index) => (
                <Card
                  key={index}
                  className='border-primary/30 hover:border-primary rounded-lg shadow-none transition-colors duration-300'
                >
                  <CardHeader className='gap-2'>
                    <CardTitle className='text-xl'>{stat.title}</CardTitle>
                    <CardDescription className='text-base'>{stat.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <CTAButton className="items-start" trustTextClassName="text-left" />
          </div>

          <img
            src='/images/alex-prennsberger-atelier.jpeg'
            alt='About Us'
            className='h-full max-h-175 w-full rounded-md object-cover'
          />
        </div>

        {/* Feature cards */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featureCards.map((feature, index) => (
            <Card key={index} className='rounded-lg shadow-none max-lg:last:col-span-full'>
              <CardHeader className='gap-3'>
                <CardTitle className='flex items-center gap-3 text-xl'>
                  <CheckCircleIcon />
                  {feature.title}
                </CardTitle>
                <CardDescription className='text-base'>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
