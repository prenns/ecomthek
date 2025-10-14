import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
interface CTAButtonProps {
  className?: string
  showTrustText?: boolean
  trustTextClassName?: string
}

export function CTAButton({ 
  className, 
  showTrustText = true,
  trustTextClassName 
}: CTAButtonProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Button size="lg" asChild>
        <Link href="/termin">
          Kostenlose Potenzial-Analyse anfragen
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      {showTrustText && (
        <p className={cn(
          "text-sm text-muted-foreground text-center",
          trustTextClassName
        )}>
          Vertraulich  •  Transparent  •  Unverbindlich
        </p>
      )}
    </div>
  )
}

