"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "white";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-[#F25B5B] text-white hover:bg-[#e04a4a] border-transparent",
      ghost: "bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A]/5 border-[#E8E8E4] hover:border-[#1A1A1A]/20",
      outline: "bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5",
      white: "bg-white text-[#F25B5B] hover:bg-[#f5f5f5] border-transparent font-semibold",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded font-medium transition-colors duration-200 border",
          "focus:outline-none focus:ring-2 focus:ring-[#F25B5B]/30 focus:ring-offset-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
