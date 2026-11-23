// variants.ts — CVA variant definitions for Buttonix
"use client";

import { cva } from "class-variance-authority";

/**
 * Core button class-variance-authority schema.
 * Base classes apply to every variant.
 */
export const buttonVariants = cva(
  // ─── Base ──────────────────────────────────────────────────────────────────
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-semibold select-none",
    "rounded-lg",
    "transition-all duration-200 ease-out",
    // Focus-visible ring (keyboard only, not mouse)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current",
    // Disabled state
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    // aria-busy (loading) cursor
    "[aria-busy=true]:cursor-wait",
    // Respect prefers-reduced-motion globally for transitions
    "motion-safe:transition-all motion-reduce:transition-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // ── 1. Solid ──────────────────────────────────────────────────────────
        solid: [
          "bg-indigo-600 text-white shadow-sm",
          "hover:bg-indigo-700 hover:shadow-md hover:-translate-y-px",
          "active:translate-y-0 active:shadow-sm",
        ].join(" "),

        // ── 2. Outline ────────────────────────────────────────────────────────
        outline: [
          "border-2 border-indigo-600 text-indigo-600 bg-transparent",
          "hover:bg-indigo-600 hover:text-white",
          "active:bg-indigo-700",
        ].join(" "),

        // ── 3. Ghost ──────────────────────────────────────────────────────────
        ghost: [
          "bg-transparent text-indigo-600",
          "hover:bg-indigo-50 hover:text-indigo-700",
          "active:bg-indigo-100",
        ].join(" "),

        // ── 4. Soft / Tinted ──────────────────────────────────────────────────
        soft: [
          "bg-indigo-100 text-indigo-700",
          "hover:bg-indigo-200 hover:text-indigo-800",
          "active:bg-indigo-300",
        ].join(" "),

        // ── 5. Destructive ────────────────────────────────────────────────────
        destructive: [
          "bg-red-600 text-white shadow-sm",
          "hover:bg-red-700 hover:shadow-md",
          "active:bg-red-800 active:shadow-sm",
        ].join(" "),

        // ── 6. Gradient ───────────────────────────────────────────────────────
        gradient: [
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md",
          "hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110",
          "active:translate-y-0 active:brightness-100",
        ].join(" "),

        // ── 7. Gradient Shift (animated bg-position) ──────────────────────────
        "gradient-shift": [
          "btnx-gradient-shift text-white shadow-md",
          "hover:shadow-lg hover:-translate-y-0.5",
          "active:translate-y-0",
        ].join(" "),

        // ── 8. Glass / Glassmorphism ──────────────────────────────────────────
        glass: [
          "bg-white/20 backdrop-blur-md border border-white/30 text-white",
          "shadow-[0_4px_30px_rgba(0,0,0,0.15)]",
          "hover:bg-white/30 hover:border-white/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
          "active:bg-white/15",
        ].join(" "),

        // ── 9. Neumorphic ─────────────────────────────────────────────────────
        neumorphic: [
          "bg-[#e0e5ec] text-gray-600",
          "shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)]",
          "hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.9)]",
          "active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
        ].join(" "),

        // ── 10. Shimmer / Sweep ───────────────────────────────────────────────
        shimmer: [
          "btnx-shimmer bg-indigo-600 text-white shadow-md overflow-hidden",
          "hover:shadow-lg hover:-translate-y-0.5",
          "active:translate-y-0",
        ].join(" "),

        // ── 11. Border Beam ───────────────────────────────────────────────────
        "border-beam": [
          "btnx-border-beam bg-transparent text-indigo-600 relative overflow-hidden",
          "hover:text-white",
          "active:brightness-90",
        ].join(" "),

        // ── 12. Glow ──────────────────────────────────────────────────────────
        glow: [
          "bg-indigo-600 text-white",
          "shadow-[0_0_0_0_rgba(99,102,241,0.4)]",
          "hover:shadow-[0_0_20px_8px_rgba(99,102,241,0.5)] hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_0_10px_4px_rgba(99,102,241,0.4)]",
        ].join(" "),

        // ── 13. Magnetic / Hover-Lift ─────────────────────────────────────────
        magnetic: [
          "bg-gray-900 text-white shadow-md",
          "hover:shadow-xl hover:-translate-y-1.5 hover:scale-105",
          "active:translate-y-0 active:scale-100 active:shadow-md",
        ].join(" "),

        // ── 14. Ripple ────────────────────────────────────────────────────────
        ripple: [
          "btnx-ripple bg-indigo-600 text-white shadow-sm relative overflow-hidden",
          "hover:bg-indigo-700",
          "active:scale-95",
        ].join(" "),

        // ── 15. Bounce ────────────────────────────────────────────────────────
        bounce: [
          "bg-emerald-500 text-white shadow-md",
          "hover:animate-none hover:bg-emerald-600 hover:-translate-y-1",
          "active:translate-y-0",
          "btnx-bounce",
        ].join(" "),

        // ── 16. Jelly / Elastic ───────────────────────────────────────────────
        jelly: [
          "bg-violet-500 text-white shadow-md",
          "btnx-jelly",
          "active:scale-95",
        ].join(" "),

        // ── 17. Slide Fill ────────────────────────────────────────────────────
        "slide-fill": [
          "btnx-slide-fill border-2 border-indigo-600 text-indigo-600 relative overflow-hidden",
          "hover:text-white",
          "active:brightness-90",
        ].join(" "),

        // ── 18. Underline Reveal ──────────────────────────────────────────────
        "underline-reveal": [
          "bg-transparent text-gray-800 relative",
          "btnx-underline-reveal",
          "hover:text-indigo-600",
          "active:text-indigo-800",
        ].join(" "),

        // ── 19. Split / Icon Reveal ───────────────────────────────────────────
        "split-reveal": [
          "btnx-split-reveal bg-indigo-600 text-white shadow-md relative overflow-hidden",
          "hover:shadow-lg",
          "active:scale-95",
        ].join(" "),

        // ── 20. 3D Press / Push ───────────────────────────────────────────────
        "3d-press": [
          "bg-indigo-600 text-white",
          "shadow-[0_6px_0_rgba(55,48,163,1)] border border-indigo-700",
          "hover:shadow-[0_4px_0_rgba(55,48,163,1)] hover:translate-y-0.5",
          "active:shadow-[0_2px_0_rgba(55,48,163,1)] active:translate-y-1",
        ].join(" "),

        // ── 21. Neon ──────────────────────────────────────────────────────────
        neon: [
          "bg-black text-cyan-400 border border-cyan-400",
          "shadow-[0_0_6px_0_rgba(34,211,238,0.3),inset_0_0_6px_0_rgba(34,211,238,0.1)]",
          "hover:text-black hover:bg-cyan-400",
          "hover:shadow-[0_0_20px_6px_rgba(34,211,238,0.6),inset_0_0_12px_0_rgba(34,211,238,0.2)]",
          "active:scale-95",
        ].join(" "),

        // ── 22. Aurora ────────────────────────────────────────────────────────
        aurora: [
          "btnx-aurora text-white shadow-lg relative overflow-hidden",
          "hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110",
          "active:translate-y-0 active:brightness-100",
        ].join(" "),
      },

      size: {
        xs: "h-7 px-3 text-xs rounded-md gap-1",
        sm: "h-8 px-4 text-sm rounded-md gap-1.5",
        default: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base rounded-xl",
        xl: "h-14 px-8 text-lg rounded-xl",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
    },

    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

