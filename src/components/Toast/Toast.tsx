import { mountToast } from "./mountToast";
import { ToastProps } from "./types";

export const toast = {
  success: (props: ToastProps) => mountToast({ ...props, type: "success" }),
  warning: (props: ToastProps) => mountToast({ ...props, type: "warning" }),
  error: (props: ToastProps) => mountToast({ ...props, type: "error" }),
  custom: (props: ToastProps) => mountToast({ ...props, type: "custom" })
};
