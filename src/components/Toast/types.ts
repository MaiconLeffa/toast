import { ReactNode } from "react";

export interface ToastProps {
  content: ReactNode | string;
  duration?: number;
  type: "error" | "warning" | "success" | "custom";
}
