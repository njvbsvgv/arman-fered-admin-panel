import type React from "react";
import type { ComponentPropsWithoutRef, JSX } from "react";

export interface TTitleText extends ComponentPropsWithoutRef<"h1"> {
    title: string;
    fontSize?: number;
    color?: string
}