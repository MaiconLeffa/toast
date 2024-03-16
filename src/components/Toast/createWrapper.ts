export function createToastWrapper(): HTMLDivElement {
  const toastWrapper = document.querySelector("#toast-wrapper");
  if (toastWrapper) return toastWrapper as HTMLDivElement;

  const domNode = document.createElement("div");
  domNode.id = "toast-wrapper";
  domNode.className =
    "fixed top-0 left-0 w-screen h-screen overflow-visible flex flex-col items-end pt-2 pointer-events-none gap-2";
  document.body.append(domNode);
  return domNode;
}
