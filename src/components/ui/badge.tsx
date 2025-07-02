import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        success:
          "border-transparent h-hug w-hug bg-greentpka-0 text-green-900 [a&]:hover:bg-primary/90 h-fit",
        warning:
          "border-transparent h-hug w-hug bg-yellowtpka-0 text-yellowtpka-100 [a&]:hover:bg-primary/90 h-fit",
        danger:
          "border-transparent bg-redtpka-0 text-red-800 [a&]:hover:bg-primary/90 h-fit",
        nonactive:
          "border-transparent bg-graytpka-0 text-zinc-800 [a&]:hover:bg-primary/90 h-fit",
                
        bigsuccess:
          "border-transparent !rounded-3xl !text-base !font-semibold !px-3 !py-2 bg-greentpka-0 text-green-900 [a&]:hover:bg-primary/90 h-fit",
        bigwarning:
          "border-transparent !rounded-3xl !text-base !font-semibold !px-3 !py-2 bg-yellowtpka-0 text-yellowtpka-100 [a&]:hover:bg-primary/90 h-fit",
        bigdanger:
          "border-transparent !rounded-3xl !text-base !font-semibold !px-3 !py-2 bg-redtpka-0 text-red-800 [a&]:hover:bg-primary/90 h-fit",
        bignonactive:
          "border-transparent !rounded-3xl !text-base !font-semibold !px-3 !py-2 bg-graytpka-0 text-zinc-800 [a&]:hover:bg-primary/90 h-fit",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
