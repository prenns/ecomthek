'use client'

// React Imports
import { useRef } from 'react'

// Third-party Imports
import { MessageSquareIcon, DatabaseIcon, ShoppingBagIcon, FileTextIcon, BotIcon, CheckCircleIcon } from 'lucide-react'

// Component Imports

import { AnimatedBeam } from '@/components/ui/animated-beam'

const WorkflowAutomation = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative z-1 px-12 py-8'>
      <div className='flex flex-col items-center justify-between gap-8'>
        {/* Customer Inquiry */}
        <div
          ref={div1Ref}
          className='bg-card flex w-fit items-center gap-2 rounded-full border px-3 py-2 shadow-lg'
        >
          <MessageSquareIcon className='size-5' />
          <span className='text-card-foreground text-base font-medium'>Neue Kundenanfrage</span>
        </div>
        
        <div className='w-full flex items-center justify-between gap-20'>
          <span ref={span1Ref} className='size-1' />
          <div ref={div2Ref} className='bg-card size-6 rotate-45 rounded-sm border shadow-md'></div>
          <span ref={span2Ref} className='size-1' />
        </div>
        
        {/* AI Agent Processing */}
        <div className='flex items-center justify-between gap-8'>
          <div ref={div3Ref} className='flex w-36 justify-center'>
            <div className='bg-card flex items-center gap-2 rounded-full border px-3 py-2 shadow-lg'>
              <BotIcon className='size-5' />
              <span className='text-card-foreground text-base font-medium'>AI Agent</span>
            </div>
          </div>
          <div ref={div4Ref} className='flex w-36 justify-center'>
            <div className='bg-card flex items-center gap-2 rounded-full border px-3 py-2 shadow-lg'>
              <DatabaseIcon className='size-5' />
              <span className='text-card-foreground text-base font-medium'>Supabase RAG</span>
            </div>
          </div>
        </div>
        
        <div className='w-full flex items-center justify-between gap-20'>
          <span ref={span3Ref} className='size-1' />
          <div ref={div5Ref} className='bg-card size-6 rotate-45 rounded-sm border shadow-md'></div>
          <span ref={span4Ref} className='size-1' />
        </div>
        
        {/* Integration Tools */}
        <div className='flex items-center justify-between gap-8'>
          <div ref={div6Ref} className='flex w-36 justify-center'>
              <div className='bg-card flex items-center gap-2 rounded-full border px-3 py-2 shadow-lg'>
                <img src="/images/zendesk.png" alt="Zendesk" className="size-5" />
                <span className='text-card-foreground text-base font-medium'>Zendesk</span>
              </div>
          </div>
          <div ref={div7Ref} className='flex w-36 justify-center'>
            <div className='bg-card flex items-center gap-2 rounded-full border px-3 py-2 shadow-lg'>
            <img src="/images/shopify_glyph_white.png" alt="Shopify" className="size-5" />
              <span className='text-card-foreground text-base font-medium'>Shopify</span>
            </div>
          </div>
        </div>
        
        <div className='w-full flex items-center justify-center'>
          <div
            ref={div8Ref}
            className='bg-card flex w-fit items-center gap-2 rounded-full border px-3 py-2 shadow-lg'
          >
            <CheckCircleIcon className='size-5' />
            <span className='text-card-foreground text-base font-medium'>Resolved</span>
          </div>
        </div>
      </div>

      {/* Customer Inquiry to AI Processing */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={span1Ref}
        reverse
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={span2Ref}
        className='text-primary -z-1'
        duration={3}
      />
      
      {/* AI Agent and RAG Processing */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={div3Ref}
        reverse
        className='text-primary -z-1'
        duration={3}
        delay={0.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={div4Ref}
        className='text-primary -z-1'
        duration={3}
        delay={0.5}
      />
      
      {/* Converge to Integration Tools */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={span3Ref}
        reverse
        className='text-primary -z-1'
        duration={3}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={span4Ref}
        className='text-primary -z-1'
        duration={3}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={div5Ref}
        delay={1.5}
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={div5Ref}
        reverse
        delay={1.5}
        className='text-primary -z-1'
        duration={3}
      />
      
      {/* To Integration Tools */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        delay={2}
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div7Ref}
        delay={2}
        className='text-primary -z-1'
        duration={3}
      />
      
      {/* Final Resolution */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div8Ref}
        delay={2.5}
        className='text-green-500 -z-1'
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div8Ref}
        delay={2.5}
        className='text-green-500 -z-1'
        duration={2}
      />
    </div>
  )
}

export default WorkflowAutomation
