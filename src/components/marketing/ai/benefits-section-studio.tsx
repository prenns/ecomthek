import type { ComponentType } from 'react'
import { ArrowRightIcon, TrendingUp, Clock, BarChart3 } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Features = {
  icon: ComponentType
  title: string
  description: string
  cardBorderColor: string
  avatarTextColor: string
  avatarBgColor: string
}[]

const benefitsList: Features = [
  {
    icon: TrendingUp,
    title: 'Wachstum ohne Headcount',
    description: 'Skaliere auf die nächste Stufe, ohne dein Team zu verdoppeln. AI übernimmt die repetitiven Aufgaben, während dein Team sich auf strategische Ziele konzentriert.',
    cardBorderColor: 'border-green-200 hover:border-green-300',
    avatarTextColor: 'text-green-600',
    avatarBgColor: 'bg-green-100'
  },
  {
    icon: Clock,
    title: '80% weniger operative Arbeit',
    description: 'Deine wichtigsten Prozesse laufen automatisch. Du gewinnst 15–20h pro Woche zurück und kannst dich endlich wieder dem Unternehmer-Sein widmen.',
    cardBorderColor: 'border-blue-200 hover:border-blue-300',
    avatarTextColor: 'text-blue-600',
    avatarBgColor: 'bg-blue-100'
  },
  {
    icon: BarChart3,
    title: 'Entscheidungen auf Datenbasis',
    description: 'Die richtigen Daten zur richtigen Zeit, täglich – in 5 Minuten statt 5 Stunden. Keine Excel-Marathons mehr, nur noch datenbasierte Entscheidungen.',
    cardBorderColor: 'border-purple-200 hover:border-purple-300',
    avatarTextColor: 'text-purple-600',
    avatarBgColor: 'bg-purple-100'
  }
]

export function BenefitsSectionStudio() {
  return (
    <section className='py-8 sm:py-16 lg:py-24 bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 sm:mb-16 lg:mb-24 text-center'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Was du mit AI-Automation gewinnst</h2>
          <p className='text-muted-foreground text-xl max-w-3xl mx-auto'>
            Von Reporting bis Customer Service – hier sind die Bereiche, in denen AI dein Business revolutioniert und dir Zeit für das Wesentliche zurückgibt.
          </p>
          <Button variant='outline' className='rounded-lg text-base shadow-none has-[>svg]:px-6' size='lg'>
            Jetzt Gespräch buchen
            <ArrowRightIcon />
          </Button>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {benefitsList.map((benefit, index) => (
            <Card key={index} className={cn('shadow-lg transition-colors duration-300', benefit.cardBorderColor)}>
              <CardContent className='p-8'>
                <Avatar className={cn('mb-6 size-16 rounded-md', benefit.avatarTextColor)}>
                  <AvatarFallback className={cn('rounded-md [&>svg]:size-8', benefit.avatarBgColor)}>
                    <benefit.icon />
                  </AvatarFallback>
                </Avatar>
                <h6 className='mb-4 text-xl font-semibold'>{benefit.title}</h6>
                <p className='text-muted-foreground leading-relaxed'>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8'>
            <div className='grid gap-8 sm:grid-cols-3'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>45+</div>
                <div className='text-gray-700'>Stunden pro Woche gespart</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-green-600 mb-2'>€50k+</div>
                <div className='text-gray-700'>Kostenersparnis pro Jahr</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-purple-600 mb-2'>95%</div>
                <div className='text-gray-700'>Genauigkeit der AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
