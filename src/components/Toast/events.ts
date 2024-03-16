export function dismissToast(toast: HTMLDivElement) {
  slideToastOutScreen(toast);
  setTimeout(() => shirinkToast(toast), 200);
  setTimeout(() => destroyToast(toast), 350);
}

export function cancelToast(
  timeToDismiss: NodeJS.Timeout | null,
  toast: HTMLDivElement
) {
  if (timeToDismiss) clearTimeout(timeToDismiss);
  dismissToast(toast);
}

function slideToastOutScreen(toast: HTMLDivElement) {
  toast.classList.remove("animate-show-toast");
  toast.classList.add("animate-hide-toast");
}

function shirinkToast(toast: HTMLDivElement) {
  toast.style.maxHeight = "0px";
}

function destroyToast(toast: HTMLDivElement) {
  toast.remove();
}
