import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const buttonBase = cva(
  "bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        destructive: "bg-white text-black",
        outline: "bg-transparent border-2 border-black text-black hover:bg-black/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const slideBase = cva(
  "rounded-xl h-12 flex items-center justify-center absolute top-[4px] z-10 duration-500",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "hidden",
      },
      direction: {
        left: "left-1 w-1/4 group-hover:w-[184px]",
        right: "right-1 w-1/4 group-hover:w-[184px] flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      direction: "left",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonBase> {
  color?: string;           // e.g. "bg-blue-500", "bg-purple-600"
  direction?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      direction = "left",
      children,
      ...props
    },
    ref
  ) => {
    // Default slide color depending on variant
    const slideColor =
      color ||
      (variant === "destructive" ? "bg-red-500" : "bg-green-400");

    // Flip icon for right direction
    const iconFlip = direction === "right" ? "scale-x-[-1]" : "";

    return (
      <button
        className={cn(buttonBase({ variant, className }))}
        ref={ref}
        {...props}
      >
        {/* Sliding background + icon */}
        <div
          className={cn(
            slideBase({ variant, direction }),
            variant !== "outline" && slideColor
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
            className={cn("transform", iconFlip)}
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            />
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            />
          </svg>
        </div>

        {/* Button text */}
        <p className="translate-x-2">{children}</p>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };