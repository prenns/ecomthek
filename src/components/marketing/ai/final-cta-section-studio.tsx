import { CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const guarantees = [
  '30-Tage Geld-zurück-Garantie',
  'Mindestens 10h Zeitersparnis pro Woche',
  'Persönlicher Support von Alex',
  'Keine Mindestlaufzeit',
  'Vollständige Kontrolle über deine Systeme',
  'Integration in bestehende Tools',
  'Enterprise-Grade Datensicherheit',
  'Kontinuierliche Optimierung'
]

export function FinalCTASectionStudio() {
  return (
    <section className='bg-gradient-to-b from-gray-50 to-white py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='rounded-3xl border-2 border-blue-200 py-8 shadow-xl sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50'>
          <CardContent className='flex flex-col items-center justify-between gap-16 px-8 sm:px-16 lg:flex-row lg:px-24'>
            <div className='flex grow flex-col gap-8'>
              <h2 className='text-foreground text-2xl font-semibold md:text-3xl lg:text-4xl'>
                Bereit für die Transformation?
              </h2>
              <p className='text-lg text-gray-600'>
                Lass uns dein Business mit AI-Automation auf das nächste Level bringen. Jetzt oder nie.
              </p>
              <div className='grid gap-2 md:grid-cols-2'>
                {guarantees.map((guarantee, index) => (
                  <div key={index} className='flex items-center gap-3 py-1'>
                    <div className='bg-green-600 flex size-5 items-center justify-center rounded-full p-0.5'>
                      <CheckIcon className='text-white size-4' />
                    </div>
                    <span className='font-medium'>{guarantee}</span>
                  </div>
                ))}
              </div>
              <div className='grid gap-4 md:grid-cols-2'>
                <Button size='lg' className='rounded-lg text-base shadow-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
                  Jetzt Gespräch buchen
                </Button>
                <Button
                  size='lg'
                  className='bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-200 rounded-lg text-base shadow-none border border-blue-200'
                >
                  Kostenloses Strategiegespräch
                </Button>
              </div>
            </div>
            <div className='flex h-full w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100'>
              <div className='text-center p-8'>
                <div className='mb-6 text-6xl'>🚀</div>
                <h3 className='mb-4 text-xl font-bold text-gray-900'>
                  Begrenzte Kapazität
                </h3>
                <p className='text-gray-600 mb-4'>
                  Ich arbeite nur mit 10 D2C-Brands gleichzeitig für maximale Qualität
                </p>
                <div className='text-sm text-gray-500'>
                  ⏱️ Kostenloses 30-Minuten Gespräch<br/>
                  🎯 Keine Verpflichtungen<br/>
                  💬 Persönlicher Support von Alex
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
