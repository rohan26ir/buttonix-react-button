import { ClassProp } from 'class-variance-authority/types';
import * as React_2 from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare const buttonBase: (props?: ({
    variant?: "default" | "destructive" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonBase> {
    color?: string;
    direction?: "left" | "right";
}

export { }
