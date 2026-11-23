import { ButtonProps } from './types';
import * as React from "react";
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
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export type { ButtonProps };
