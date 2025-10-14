import type { ComponentType } from 'react'
import { ArrowRightIcon, TrendingUp, Clock, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

type StatItem = {
  icon: ComponentType
  value: string
  description: string
}[]

const solutionStats: StatItem = [
  {
    icon: Clock,
    value: '15+',
    description: 'Stunden pro Woche zurückgewonnen'
  },
  {
    icon: TrendingUp,
    value: '1,8M€',
    description: 'Jahresumsatz bei wunderklein.com'
  },
  {
    icon: Users,
    value: '0',
    description: 'Out-of-Stocks seit 6 Monaten'
  },
  {
    icon: Target,
    value: '5 Min',
    description: 'Statt 90 Min für Reports'
  }
]

export function SolutionSectionStudio() {
  return (
    <section className='bg-white py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'>
            Ich kenne diese Probleme – weil ich sie selbst hatte
          </h2>
          <p className='text-muted-foreground text-xl max-w-3xl mx-auto'>
            Vor 2 Jahren stand ich genau da, wo du jetzt stehst: 7-stelliger Umsatz, aber gefühlt null Zeit. Mein Team wuchs, meine Marge schrumpfte. Ich wusste, dass es effizienter gehen muss – aber nicht wie.
          </p>
          <Button size='lg' className='group rounded-lg text-base shadow-sm has-[>svg]:px-6 bg-gradient-to-r from-blue-600 to-purple-600'>
            Jetzt Gespräch buchen
            <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>
        </div>

        {/* Video player and stats */}
        <div className='relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24'>
          <div className='aspect-video w-full overflow-hidden rounded-xl lg:h-[644px]'>
            <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50'>
              <div className='text-center'>
                <div className='mb-6 text-6xl'>🚀</div>
                <h3 className='mb-4 text-2xl font-bold text-gray-900'>
                  So haben wir es bei wunderklein.com gelöst
                </h3>
                <p className='text-lg text-gray-600 max-w-2xl'>
                  Bei wunderklein.com haben wir angefangen, unsere größten Zeitfresser mit AI zu automatisieren: 
                  Daily Performance Reports von 90 Minuten auf 5 Minuten, Inventory Forecasting ohne Out-of-Stocks, 
                  Customer Segmentierung automatisch in Echtzeit.
                </p>
              </div>
            </div>
          </div>

          {/* Stats card overlapping the video section */}
          <div className='bg-background grid gap-10 rounded-md border p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max shadow-lg'>
            {solutionStats.map((stat, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-2.5 text-center'>
                <div className='flex size-7 items-center justify-center [&>svg]:size-7 text-blue-600'>
                  <stat.icon />
                </div>
                <span className='text-2xl font-semibold'>{stat.value}</span>
                <p className='text-muted-foreground text-sm'>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Story */}
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8'>
          <div className='text-center'>
            <h3 className='mb-4 text-xl font-bold text-gray-900'>
              Der &ldquo;Aha&rdquo;-Moment
            </h3>
            <p className='text-lg text-gray-700 mb-4'>
              <strong>Du brauchst keine Entwickler, keine Millionen-Budgets – nur jemanden, der weiß, wie&apos;s geht.</strong>
            </p>
            <p className='text-gray-600'>
              Das Beste? Du brauchst kein Tech-Team und keine 6-stelligen Investitionen. Die Tools existieren bereits – sie müssen nur richtig kombiniert und auf dein Business angepasst werden. Genau das machen wir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
