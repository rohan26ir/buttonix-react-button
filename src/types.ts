// types.ts — Buttonix shared TypeScript interfaces & variant definitions
"use client";

import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { type buttonVariants } from "./variants";

// ─── Variant & Size Literals ─────────────────────────────────────────────────

export type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "soft"
  | "destructive"
  | "gradient"
  | "gradient-shift"
  | "glass"
  | "neumorphic"
  | "shimmer"
  | "border-beam"
  | "glow"
  | "magnetic"
  | "ripple"
  | "bounce"
  | "jelly"
  | "slide-fill"
  | "underline-reveal"
  | "split-reveal"
  | "3d-press"
  | "neon"
  | "aurora";

export type ButtonSize = "xs" | "sm" | "default" | "lg" | "xl" | "icon";

export type ButtonState = "idle" | "loading" | "success" | "error";

// ─── Main ButtonProps Interface ───────────────────────────────────────────────

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  /**
   * The visual & animation style of the button.
   * @default "solid"
   */
  variant?: ButtonVariant;

  /**
   * Size preset for the button.
   * @default "default"
   */
  size?: ButtonSize;

  /**
   * When true, renders a spinner and sets `aria-busy="true"`.
   * Automatically disables the button while in this state.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Label announced to screen readers while `isLoading` is true.
   * @default "Loading…"
   */
  loadingText?: string;

  /**
   * Controlled interaction state for success/error feedback transitions.
   * "idle" is the normal resting state.
   * @default "idle"
   */
  state?: ButtonState;

  /**
   * Custom CSS color string applied to variant-specific accent areas
   * (e.g. the shimmer sweep, glow color, border-beam color).
   * Accepts any valid CSS color value.
   */
  color?: string;

  /**
   * When true, disables all CSS animations and transitions on this button,
   * in addition to the global `prefers-reduced-motion` media query.
   * @default false
   */
  disableAnimation?: boolean;

  /**
   * Icon element rendered to the left of children.
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon element rendered to the right of children.
   */
  rightIcon?: React.ReactNode;
}

