"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const buttonBase = cva(
  "inline-flex items-center justify-center rounded-2xl h-14 relative text-xl font-semibold group overflow-hidden transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-gray-100 shadow-md focus:ring-gray-300",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-md focus:ring-red-500",
        outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black",
        ghost: "bg-transparent text-black hover:bg-black/10 focus:ring-gray-400",
        glass: "bg-white/20 backdrop-blur-md border border-white/30 text-black shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/30 focus:ring-white/50",
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-purple-500",
        neumorphic: "bg-[#e0e5ec] text-gray-700 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)] border-none focus:ring-gray-400",
      },
      size: {
        default: "w-48 px-6",
        sm: "w-32 px-4 h-10 text-sm rounded-xl",
        lg: "w-64 px-8 h-16 text-2xl rounded-3xl",
        full: "w-full px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const slideBase = cva(
  "rounded-xl h-[calc(100%-8px)] flex items-center justify-center absolute top-[4px] z-10 duration-500 ease-[cubic-bezier(0.5,0,0,1)]",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "hidden",
        ghost: "hidden",
        glass: "bg-white/40",
        gradient: "bg-white/20 backdrop-blur-sm",
        neumorphic: "bg-[#e0e5ec] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]",
      },
      direction: {
        left: "left-1 w-[25%] group-hover:w-[calc(100%-8px)]",
        right: "right-1 w-[25%] group-hover:w-[calc(100%-8px)] flex-row-reverse",
      },
      size: {
        default: "rounded-xl",
        sm: "rounded-lg top-[3px] h-[calc(100%-6px)] left-[3px] group-hover:w-[calc(100%-6px)]",
        lg: "rounded-2xl top-[5px] h-[calc(100%-10px)] left-[5px] group-hover:w-[calc(100%-10px)]",
        full: "rounded-xl",
      }
    },
    defaultVariants: {
      variant: "default",
      direction: "left",
      size: "default"
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonBase> {
  /** Optional custom background color for the slider */
  color?: string;
  /** Direction of the slide animation */
  direction?: "left" | "right";
  /** Whether to show the slide animation */
  animated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color,
      direction = "left",
      animated = true,
      children,
      ...props
    },
    ref
  ) => {
    // Dynamic color override for the slide animation
    const slideStyle: React.CSSProperties = {
      backgroundColor: color || (variant === "destructive" ? "#ef4444" : variant === "default" ? "#4ade80" : undefined),
    };

    const iconFlip = direction === "right" ? "scale-x-[-1]" : "";

    // If it's a variant that usually shouldn't have the slider unless explicitly animated
    const shouldShowSlider = animated && !["outline", "ghost"].includes(variant || "");

    return (
      <button
        className={cn(buttonBase({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {shouldShowSlider && (
          <div
            className={cn(slideBase({ variant, direction, size }))}
            style={color || variant === "default" || variant === "destructive" ? slideStyle : {}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height={size === "sm" ? "18px" : size === "lg" ? "32px" : "25px"}
              width={size === "sm" ? "18px" : size === "lg" ? "32px" : "25px"}
              className={cn("transform transition-transform duration-500", iconFlip, "group-hover:scale-110")}
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="currentColor"
              />
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
        <span className={cn("relative z-20 flex items-center justify-center transition-transform duration-500", shouldShowSlider ? (direction === "left" ? "translate-x-3 group-hover:translate-x-0" : "-translate-x-3 group-hover:translate-x-0") : "")}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };