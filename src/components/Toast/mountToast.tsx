import React from "react";
import { createRoot } from "react-dom/client";
import { createToastWrapper } from "./createWrapper";
import { ToastProps } from "./types";
import { ToastBody } from "./toastBody";

export function mountToast(props: ToastProps) {
  const { content, type, duration = 5000 } = props;

  const toastWrapper = createToastWrapper();

  const toast = document.createElement("div");
  toast.className = `toast-content-${type} animate-show-toast overflow-hidden pointer-events-auto max-h-full transition-[max-height]`;
  toast.style.animationFillMode = "forwards";
  toastWrapper.append(toast);

  const root = createRoot(toast);

  if (type === "custom") {
    root.render(content);
  } else {
    root.render(<ToastBody {...props} />);
  }

  createTimer(toast, duration);
}

function createTimer(toast: HTMLDivElement, duration: number) {
  setTimeout(() => {
    toast.classList.remove("animate-show-toast");
    toast.classList.add("animate-hide-toast");
  }, duration);

  setTimeout(() => {
    toast.style.maxHeight = "0px";
  }, duration + 200);

  setTimeout(() => {
    toast.remove();
  }, duration + 350);
}
