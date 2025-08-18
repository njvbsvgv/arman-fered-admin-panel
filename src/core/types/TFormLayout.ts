import type React from "react";
import type { JSX } from "react";

export interface TFormLayout {
    width: number;
    children?: JSX.Element | React.ReactNode;
    margin?: number[]
}