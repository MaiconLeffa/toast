import { ReactNode } from "react";

export interface ToastProps {
  content: ReactNode | string;
  duration?: number;
  type: "error" | "warning" | "success" | "custom";
}

interface StyleType {
  container: string;
  progressWrapper: string;
  progress: string;
}

export interface StylesProps {
  [index: string]: StyleType;
}
