// Button.tsx — Buttonix main component
// Implements 22 distinct variants with full accessibility & motion support.
"use client";

import * as React from "react";
import { cn } from "./utils";
import { buttonVariants } from "./variants";
import type { ButtonProps, ButtonState } from "./types";

// ─── Internal sub-components ──────────────────────────────────────────────────

/** Animated loading spinner (respects prefers-reduced-motion via CSS). */
const Spinner: React.FC = () => (
  <span className="btnx-spinner" aria-hidden="true" />
);

/** State icon for success / error feedback. */
const StateIcon: React.FC<{ state: ButtonState }> = ({ state }) => {
  if (state === "success") {
    return (
      <span className="btnx-state-icon" aria-hidden="true">
        {/* Checkmark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="1em"
          height="1em"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  if (state === "error") {
    return (
      <span className="btnx-state-icon" aria-hidden="true">
        {/* X mark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="1em"
          height="1em"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </span>
    );
  }
  return null;
};

// ─── Ripple helper ─────────────────────────────────────────────────────────────

/**
 * Creates and injects a DOM ripple element at the click position.
 * No React state needed — purely imperative for performance.
 */
function createRipple(
  event: React.MouseEvent<HTMLButtonElement>,
  prefersReducedMotion: boolean
): void {
  if (prefersReducedMotion) return;

  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  const ripple = document.createElement("span");
  ripple.className = "btnx-ripple-wave";
  ripple.style.cssText = `
    width: ${diameter}px;
    height: ${diameter}px;
    left: ${event.clientX - rect.left - radius}px;
    top: ${event.clientY - rect.top - radius}px;
  `;

  button.appendChild(ripple);

  // Clean up after animation completes
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

// ─── Main Button Component ────────────────────────────────────────────────────

/**
 * Buttonix `Button` — a production-ready, accessible React button component
 * with 22 distinct visual variants and animations.
 *
 * @example
 * ```tsx
 * import { Button } from 'buttonix';
 * import 'buttonix/style.css';
 *
 * <Button variant="shimmer" size="lg">Get Started</Button>
 * <Button variant="ripple" isLoading>Processing…</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      size = "default",
      isLoading = false,
      loadingText = "Loading…",
      state = "idle",
      color,
      disableAnimation = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      onClick,
      style,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const isBusy = isLoading;
    const showStateIcon = state === "success" || state === "error";

    // Build inline style overrides from `color` prop
    const colorStyle: React.CSSProperties = color
      ? ({
          "--btnx-shimmer-color": color,
          "--btnx-beam-color": color,
          "--btnx-ripple-color": color,
        } as React.CSSProperties)
      : {};

    // Handle ripple click — read matchMedia lazily inside the handler (SSR-safe)
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (variant === "ripple" && !disableAnimation) {
          const reduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          createRipple(event, reduced);
        }
        onClick?.(event);
      },
      [variant, disableAnimation, onClick]
    );

    // State-specific classes override for success/error
    const stateClasses: Record<string, string> = {
      success: "!bg-emerald-500 !border-emerald-500 !text-white",
      error: "!bg-red-500 !border-red-500 !text-white",
      idle: "",
      loading: "",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ variant, size }),
          disableAnimation && "!transition-none !animation-none",
          stateClasses[state],
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isBusy || undefined}
        aria-label={isBusy ? loadingText : rest["aria-label"]}
        onClick={handleClick}
        style={{ ...colorStyle, ...style }}
        {...rest}
      >
        {/* Loading state */}
        {isLoading && <Spinner />}

        {/* Success / Error state icon (replaces left icon) */}
        {!isLoading && showStateIcon && <StateIcon state={state} />}

        {/* Left icon (shown when not loading and not in success/error state) */}
        {!isLoading && !showStateIcon && leftIcon && (
          <span className="btnx-icon-left" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        {/* Button label */}
        {isLoading ? (
          <span className="sr-only">{loadingText}</span>
        ) : (
          children
        )}

        {/* Right icon */}
        {!isLoading && rightIcon && (
          <span className="btnx-icon-right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
