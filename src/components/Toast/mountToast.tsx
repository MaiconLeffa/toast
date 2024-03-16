import React from "react";
import { createRoot } from "react-dom/client";
import { createToastWrapper } from "./createWrapper";
import { MountToastProps } from "./types";
import { ToastBody } from "./toastBody";
import { cancelToast, dismissToast } from "./events";

export function mountToast(props: MountToastProps) {
  const { content, type, duration = 5000 } = props;
  const toastWrapper = createToastWrapper();

  const toast = document.createElement("div");
  toast.className = `toast-content-${type} animate-show-toast overflow-hidden pointer-events-auto max-h-full transition-[max-height]`;
  toast.style.animationFillMode = "forwards";
  toastWrapper.append(toast);

  const root = createRoot(toast);
  let timeToDismiss: NodeJS.Timeout | null = null;

  if (type === "custom") {
    root.render(content);
  } else {
    root.render(
      <ToastBody onClose={() => cancelToast(timeToDismiss, toast)} {...props} />
    );
  }

  timeToDismiss = setTimeout(() => dismissToast(toast), duration);
}
