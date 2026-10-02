import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        // New btns for all used
        main: "bg-[var(--main-button-background)] text-[var(--main-button-text-color)] hover:bg-[var(--main-button-hover-background)] hover:text-[var(--main-button-hover-text-color)]",
        success:
          "bg-[var(--success)] text-[var(--success-text-color)] hover:bg-[var(--success-hover-background)] hover:text-[var(--success-hover-text-color)]",
        explore:
          "h-14 cursor-pointer rounded-full border-[var(--border-color)] bg-[var(--cart-item-background)] px-7 text-base font-bold text-[var(--main-text-color)] shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:border-[var(--success)] hover:bg-[var(--success)]/10 hover:text-[var(--success-light)]",
        start:
          "h-14 cursor-pointer rounded-full bg-[var(--success)] px-8 text-base font-bold text-white shadow-[0_8px_24px_rgba(15,169,104,0.25)] hover:translate-y-[-1px] duration-200 hover:shadow-[0_12px_32px_rgba(15,169,104,0.35)]",
        language:
          "rounded-full border-[var(--border-color)] bg-transparent px-3 text-[var(--main-text-color)] hover:border-[var(--success)] hover:bg-[var(--success)]/10 hover:text-[var(--success-light)] duration-200",
        danger:
          "bg-[var(--danger)] text-[var(--danger-text-color)] hover:bg-[var(--danger-hover-background)] hover:text-[var(--danger-hover-text-color)]",
        warning:
          "bg-[var(--warning)] text-[var(--warning-text-color)] hover:bg-[var(--warning-hover-background)] hover:text-[var(--warning-hover-text-color)]",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
