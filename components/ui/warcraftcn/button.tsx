import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

import bgImage from "./assets/bg.png";
import bgWithFrameImage from "./assets/bg-with-frame.png";

import "@/components/ui/warcraftcn/styles/warcraft.css";

const buttonVariants = cva(
  "fantasy inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all duration-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-95 active:brightness-75 active:shadow-inner",
  {
    variants: {
      variant: {
        default:
          "w-104 h-16 bg-center bg-cover bg-no-repeat text-white shadow-lg transition-shadow hover:shadow-xl hover:brightness-110",
        frame:
          "w-120 h-24 bg-center bg-cover bg-no-repeat text-white shadow-lg transition-shadow hover:shadow-xl hover:brightness-110",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const bgUrl = variant === "frame" ? bgWithFrameImage.src : bgImage.src;

  return(
    <Comp
      className={cn(buttonVariants({ variant }), className)}
      style={{ backgroundImage: `url(${bgUrl})`, ...style }}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
