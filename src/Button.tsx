import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const buttonBase = cva(
  "text-center rounded-2xl h-14 relative text-black text-xl font-semibold group",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        destructive: "bg-white text-black",
        outline: "bg-transparent border-2 border-black text-black hover:bg-black/5",
      },
      size: {
        default: "w-48",
        sm: "w-32",
        lg: "w-64",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
  color?: string;
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
    // Use inline styles for dynamic colors
    const slideStyle = {
      backgroundColor: color || (variant === "destructive" ? "#ef4444" : "#4ade80"),
    };

    const iconFlip = direction === "right" ? "scale-x-[-1]" : "";

    return (
      <button
        className={cn(buttonBase({ variant, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(slideBase({ variant, direction }))}
          style={variant !== "outline" ? slideStyle : {}}
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
        <p className="translate-x-2">{children}</p>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };