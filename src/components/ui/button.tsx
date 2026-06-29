import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-[#dc2626] text-white shadow hover:bg-[#dc2626]/90": variant === "default",
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90": variant === "destructive",
            "border border-[#333333] bg-transparent shadow-sm hover:bg-[#262626] hover:text-white": variant === "outline",
            "bg-[#1a1a1a] text-white shadow-sm hover:bg-[#1a1a1a]/80": variant === "secondary",
            "hover:bg-[#262626] hover:text-white": variant === "ghost",
            "text-white underline-offset-4 hover:underline": variant === "link",
            
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
