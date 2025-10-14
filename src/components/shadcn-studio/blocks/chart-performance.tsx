'use client'

import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, ChartColumnBigIcon, EllipsisVerticalIcon } from 'lucide-react'

import { Area, AreaChart, Bar, BarChart, XAxis } from 'recharts'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const listItems = ['Share', 'Update', 'Refresh']

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const physicalProductsChartData = [
  { month: 'Jan', sales: 280 },
  { month: 'Feb', sales: 400 },
  { month: 'Mar', sales: 280 },
  { month: 'Apr', sales: 590 },
  { month: 'May', sales: 360 },
  { month: 'Jun', sales: 460 },
  { month: 'Jul', sales: 400 }
]

const physicalProductsChartConfig = {
  sales: {
    label: 'Sales'
  }
} satisfies ChartConfig

const dailySalesChartData = [
  { day: 'Monday', sales: 120 },
  { day: 'Tuesday', sales: 240 },
  { day: 'Wednesday', sales: 190 },
  { day: 'Thursday', sales: 270 },
  { day: 'Friday', sales: 210 },
  { day: 'Saturday', sales: 320 },
  { day: 'Sunday', sales: 270 }
]

const dailySalesChartConfig = {
  sales: {
    label: 'Sales'
  }
} satisfies ChartConfig

const PerformanceCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>

      <Tabs defaultValue='new-users' className='flex-1 gap-6'>
        <TabsList className='bg-background w-full rounded-none border-b p-0'>
          <TabsTrigger
            value='new-users'
            className='bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent focus-visible:z-1 data-[state=active]:shadow-none'
          >
            Neukunden
          </TabsTrigger>
          <TabsTrigger
            value='online-sales'
            className='bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent focus-visible:z-1 data-[state=active]:shadow-none'
          >
            Online-Umsatz
          </TabsTrigger>
          <TabsTrigger
            value='daily-sales'
            className='bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent focus-visible:z-1 data-[state=active]:shadow-none'
          >
            Tägliche Verkäufe
          </TabsTrigger>
        </TabsList>

        <TabsContent value='new-users' className='flex flex-col justify-between gap-4 px-6'>
          <div className='flex items-center justify-between rounded-xl border px-4 py-3'>
            <Badge className='bg-primary/10 [a&]:hover:bg-primary/5 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 text-primary rounded-full border-none px-3 py-1 focus-visible:outline-none'>
              Tägliche Bestellungen
            </Badge>
            <span className='text-xl font-medium'>127 Bestellungen</span>
          </div>

          <div className='flex flex-col gap-4 rounded-xl border px-5 py-3.5'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='text-muted-foreground'>Monatlicher Umsatz</span>
                <span className='text-xl font-semibold'>€78.263</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <Avatar className='size-6.5'>
                  <AvatarFallback className='bg-primary/10 text-primary shrink-0'>
                    <ArrowUpIcon className='size-4' />
                  </AvatarFallback>
                </Avatar>
                <span className='text-xl font-semibold'>14.78%</span>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex -space-x-2'>
                {avatars.map((avatar, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Avatar className='ring-background ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                        <AvatarImage src={avatar.src} alt={avatar.name} />
                        <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>{avatar.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <Button className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 h-7 rounded-full px-2 py-1 text-xs'>
                View all
                <ArrowRightIcon />
              </Button>
            </div>
          </div>

          <p className='text-center'>
            <span className='font-medium'>+24% Wachstum</span>{' '}
            <span className='text-muted-foreground text-sm'>
              Optimiere dein E-Mail Marketing für noch mehr Neukunden.
            </span>
          </p>
        </TabsContent>

        <TabsContent value='online-sales' className='flex flex-col justify-between gap-4 px-6'>
          <div className='space-y-5 rounded-xl border py-4'>
            <div className='flex items-center justify-between px-6'>
              <div className='flex flex-col gap-1'>
                <span className='text-muted-foreground'>Online-Umsatz</span>
                <span className='text-xl font-semibold'>€78.263</span>
              </div>
              <Badge className='bg-primary/10 [a&]:hover:bg-primary/5 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 text-primary border-none focus-visible:outline-none'>
                <ArrowUpIcon className='size-4' />
                5.6%
              </Badge>
            </div>

            <ChartContainer config={physicalProductsChartConfig} className='h-30 w-full'>
              <AreaChart
                data={physicalProductsChartData}
                margin={{
                  left: 20,
                  right: 20
                }}
                className='stroke-3'
              >
                <defs>
                  <linearGradient id='fillSales' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='var(--chart-2)' stopOpacity={0.4} />
                    <stop offset='90%' stopColor='var(--chart-2)' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey='month'
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={value => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Area dataKey='sales' type='natural' fill='url(#fillSales)' stroke='var(--chart-2)' stackId='a' />
              </AreaChart>
            </ChartContainer>
          </div>

          <p className='text-center'>
            <span className='font-medium'>Noch 18%</span>{' '}
            <span className='text-muted-foreground text-sm'>bis zum Monatsziel</span>
          </p>
        </TabsContent>

        <TabsContent value='daily-sales' className='flex flex-col justify-between gap-4 px-6'>
          <div className='space-y-5 rounded-xl border py-4'>
            <div className='flex items-center justify-between px-6'>
              <div className='flex flex-col gap-1'>
                <span className='text-muted-foreground'>Durchschnittlicher Tagesumsatz</span>
                <span className='text-xl font-semibold'>€8.263</span>
              </div>
              <Badge className='bg-primary/10 [a&]:hover:bg-primary/5 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 text-primary border-none focus-visible:outline-none'>
                <ArrowDownIcon className='size-4' />
                3.4%
              </Badge>
            </div>

            <ChartContainer config={dailySalesChartConfig} className='h-32.5 w-full px-1.5'>
              <BarChart
                accessibilityLayer
                data={dailySalesChartData}
                barSize={12}
                margin={{
                  left: 0,
                  right: 0
                }}
              >
                <Bar
                  dataKey='sales'
                  fill='var(--chart-1)'
                  background={{ fill: 'color-mix(in oklab, var(--primary) 10%, transparent)', radius: 12 }}
                  radius={12}
                />
                <XAxis
                  dataKey='day'
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={value => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              </BarChart>
            </ChartContainer>
          </div>

          <p className='text-center'>
            <span className='font-medium'>Noch 12%</span>{' '}
            <span className='text-muted-foreground text-sm'>bis zum Tagesziel</span>
          </p>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

export default PerformanceCard
