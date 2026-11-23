/**
 * Button.test.tsx
 * Vitest + @testing-library/react tests for the Buttonix Button component.
 * Coverage: rendering, all variants, sizes, states, accessibility, icons.
 */
import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";
import type { ButtonVariant, ButtonSize, ButtonState } from "../types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ALL_VARIANTS: ButtonVariant[] = [
  "solid",
  "outline",
  "ghost",
  "soft",
  "destructive",
  "gradient",
  "gradient-shift",
  "glass",
  "neumorphic",
  "shimmer",
  "border-beam",
  "glow",
  "magnetic",
  "ripple",
  "bounce",
  "jelly",
  "slide-fill",
  "underline-reveal",
  "split-reveal",
  "3d-press",
  "neon",
  "aurora",
];

const ALL_SIZES: ButtonSize[] = ["xs", "sm", "default", "lg", "xl", "icon"];

// ─── Render Tests ─────────────────────────────────────────────────────────────

describe("Button – basic rendering", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeDefined();
    expect(btn.tagName).toBe("BUTTON");
  });

  it("renders children correctly", () => {
    render(<Button>Hello World</Button>);
    expect(screen.getByText("Hello World")).toBeDefined();
  });

  it("has type='button' by default", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button").getAttribute("type")).toBe("button");
  });

  it("allows overriding type to 'submit'", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button").getAttribute("type")).toBe("submit");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("BUTTON");
  });

  it("applies additional className", () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole("button").classList.contains("custom-class")).toBe(
      true
    );
  });

  it("passes arbitrary HTML button attributes", () => {
    render(<Button data-testid="my-btn">Test</Button>);
    expect(screen.getByTestId("my-btn")).toBeDefined();
  });
});

// ─── Variant Tests ────────────────────────────────────────────────────────────

describe("Button – all 22 variants render", () => {
  it.each(ALL_VARIANTS)("renders variant='%s'", (variant) => {
    render(<Button variant={variant}>Button</Button>);
    expect(screen.getByRole("button")).toBeDefined();
  });
});

// ─── Size Tests ───────────────────────────────────────────────────────────────

describe("Button – sizes", () => {
  it.each(ALL_SIZES)("renders size='%s'", (size) => {
    render(<Button size={size}>Button</Button>);
    expect(screen.getByRole("button")).toBeDefined();
  });
});

// ─── Disabled State ───────────────────────────────────────────────────────────

describe("Button – disabled state", () => {
  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveProperty("disabled", true);
  });

  it("sets aria-disabled when disabled", () => {
    render(<Button disabled>Disabled</Button>);
    expect(
      screen.getByRole("button").getAttribute("aria-disabled")
    ).toBe("true");
  });

  it("does not fire onClick when disabled", () => {
    const handler = vi.fn();
    render(
      <Button disabled onClick={handler}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handler).not.toHaveBeenCalled();
  });
});

// ─── Loading State ────────────────────────────────────────────────────────────

describe("Button – loading state", () => {
  it("renders a spinner when isLoading is true", () => {
    const { container } = render(<Button isLoading>Load</Button>);
    expect(container.querySelector(".btnx-spinner")).not.toBeNull();
  });

  it("sets aria-busy=true when loading", () => {
    render(<Button isLoading>Load</Button>);
    expect(
      screen.getByRole("button").getAttribute("aria-busy")
    ).toBe("true");
  });

  it("hides visible label and shows screen-reader text when loading", () => {
    render(<Button isLoading loadingText="Please wait">Save</Button>);
    // The original children should not be visible (loading replaces it)
    // The sr-only span should contain the loadingText
    const srSpan = screen.getByText("Please wait");
    expect(srSpan.className).toContain("sr-only");
  });

  it("is implicitly disabled when isLoading", () => {
    render(<Button isLoading>Load</Button>);
    expect(screen.getByRole("button")).toHaveProperty("disabled", true);
  });

  it("does not fire onClick when isLoading", () => {
    const handler = vi.fn();
    render(
      <Button isLoading onClick={handler}>
        Load
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handler).not.toHaveBeenCalled();
  });
});

// ─── State Tests ──────────────────────────────────────────────────────────────

describe("Button – state prop", () => {
  const states: ButtonState[] = ["idle", "loading", "success", "error"];

  it.each(states)("renders state='%s' without crashing", (state) => {
    render(
      <Button state={state} isLoading={state === "loading"}>
        Action
      </Button>
    );
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("renders success icon when state='success'", () => {
    const { container } = render(<Button state="success">Done</Button>);
    // The SVG checkmark should be present inside the state icon span
    expect(container.querySelector(".btnx-state-icon")).not.toBeNull();
  });

  it("renders error icon when state='error'", () => {
    const { container } = render(<Button state="error">Failed</Button>);
    expect(container.querySelector(".btnx-state-icon")).not.toBeNull();
  });
});

// ─── Icon Tests ───────────────────────────────────────────────────────────────

describe("Button – icon slots", () => {
  it("renders leftIcon", () => {
    render(
      <Button leftIcon={<span data-testid="left-icon">←</span>}>Go</Button>
    );
    expect(screen.getByTestId("left-icon")).toBeDefined();
  });

  it("renders rightIcon", () => {
    render(
      <Button rightIcon={<span data-testid="right-icon">→</span>}>Go</Button>
    );
    expect(screen.getByTestId("right-icon")).toBeDefined();
  });

  it("hides leftIcon while loading", () => {
    render(
      <Button isLoading leftIcon={<span data-testid="li">←</span>}>
        Go
      </Button>
    );
    expect(screen.queryByTestId("li")).toBeNull();
  });

  it("renders icon-only without children", () => {
    render(
      <Button size="icon" aria-label="Delete">
        <span>✕</span>
      </Button>
    );
    const btn = screen.getByRole("button", { name: /delete/i });
    expect(btn).toBeDefined();
  });
});

// ─── Accessibility Tests ──────────────────────────────────────────────────────

describe("Button – accessibility", () => {
  it("supports aria-label override", () => {
    render(<Button aria-label="Close dialog">✕</Button>);
    expect(screen.getByRole("button", { name: /close dialog/i })).toBeDefined();
  });

  it("renders aria-label from loadingText when loading", () => {
    render(
      <Button isLoading loadingText="Submitting…">
        Submit
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn.getAttribute("aria-label")).toBe("Submitting…");
  });
});

// ─── Event Tests ──────────────────────────────────────────────────────────────

describe("Button – events", () => {
  it("fires onClick when clicked", () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("fires onMouseEnter / onMouseLeave", () => {
    const enterHandler = vi.fn();
    const leaveHandler = vi.fn();
    render(
      <Button onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
        Hover
      </Button>
    );
    const btn = screen.getByRole("button");
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);
    expect(enterHandler).toHaveBeenCalledTimes(1);
    expect(leaveHandler).toHaveBeenCalledTimes(1);
  });
});

// ─── Ripple variant ───────────────────────────────────────────────────────────

describe("Button – ripple variant", () => {
  beforeEach(() => {
    // Mock matchMedia to disable reduced-motion for this suite
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockReturnValue({
        matches: false,
        addListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    });
  });

  it("fires onClick on ripple button", () => {
    const handler = vi.fn();
    render(
      <Button variant="ripple" onClick={handler}>
        Ripple
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

