import React from "react";
import type { TInputOnChange } from "./TInputOnChange";

export interface TInput {
  width: number;
  type: React.HTMLInputTypeAttribute | string;
  name: string;
  value: string;
  onChange?: (e: TInputOnChange) => void;
  children?: React.ReactNode;
}