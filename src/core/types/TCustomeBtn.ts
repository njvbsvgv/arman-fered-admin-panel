import type React from "react";
import type { ComponentPropsWithoutRef, JSX } from "react";

export interface TCustomeBtn extends ComponentPropsWithoutRef<"button"> {
    text: string,
    icon?: JSX.Element | React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}