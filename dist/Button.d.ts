import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonBase: (props?: ({
    variant?: "default" | "destructive" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonBase> {
    color?: string;
    direction?: "left" | "right";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
