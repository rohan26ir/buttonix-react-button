import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonBase: (props?: ({
    variant?: "default" | "destructive" | "outline" | "ghost" | "glass" | "gradient" | "neumorphic" | null | undefined;
    size?: "default" | "sm" | "lg" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonBase> {
    /** Optional custom background color for the slider */
    color?: string;
    /** Direction of the slide animation */
    direction?: "left" | "right";
    /** Whether to show the slide animation */
    animated?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
