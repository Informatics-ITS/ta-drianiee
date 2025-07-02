import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "@/components/ui/button"  // Ensure Button is imported from your project
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",

        warning:
          "bg-yellow-50 [&>svg]:text-yellow-800 *:data-[slot=alert-title]:text-yellow-800 *:data-[slot=alert-description]:text-yellow-700",
        success:
          "bg-green-50 [&>svg]:text-green-800 *:data-[slot=alert-title]:text-green-800 *:data-[slot=alert-description]:text-green-700",
        danger:
          "bg-red-50 [&>svg]:text-red-800 *:data-[slot=alert-title]:text-red-800 *:data-[slot=alert-description]:text-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type AlertProps = React.ComponentProps<"div"> & VariantProps<typeof alertVariants> & {
  button?: React.ReactNode // Optional button prop
}

function Alert({
  className,
  variant,
  button,  // Accept the optional button prop
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {props.children}
      {/* Render the button if provided */}
      {button && <div className="mt-4">{button}</div>}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
