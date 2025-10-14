import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Integration = {
  name: string
  image: string
}[]

const AppIntegration = ({ integrations }: { integrations: Integration }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='space-y-4 text-center mb-12'>
  

          <p className='text-muted-foreground text-xl'>Unsere Systeme kombinieren die besten Tools aus AI, Automations und Datenmanagement –
          optimiert für E-Commerce-Prozesse.</p>
        </div>

        {/* Apps */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'>
          {integrations.map((app, index) => (
            <div key={index} className='bg-muted flex items-center gap-2 rounded-md p-4'>
              <Avatar className='size-12 rounded-lg'>
                <AvatarFallback className='bg-card rounded-lg'>
                  <img src={app.image} alt={app.name} className='size-7 object-contain' />
                </AvatarFallback>
              </Avatar>
              <p className='text-xl font-medium'>{app.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
