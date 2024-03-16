import { ReactNode } from "react";

export interface ToastProps {
  content: ReactNode | string;
  dismissible?: boolean;
}
export interface MountToastProps {
  content: ReactNode | string;
  duration?: number;
  dismissible?: boolean;
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

export interface ToastBodyProps extends MountToastProps {
  onClose: () => void;
}
