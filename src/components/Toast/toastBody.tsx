import React from "react";
import { styles } from "./styles";
import { ToastBodyProps } from "./types";
import { CloseIcon } from "./icon/close";

export function ToastBody({
  content,
  duration,
  type,
  onClose,
  dismissible = true
}: ToastBodyProps) {
  const style = styles[type];

  return (
    <div className={`${style.container} relative rounded-s-md overflow-hidden`}>
      {dismissible && (
        <button onClick={onClose} className="absolute top-0 left-0">
          <CloseIcon />
        </button>
      )}

      <div className="p-4 max-w-[250px] text-center text-white text-sm">
        {content}
      </div>
      <div className={`w-full h-[8px] ${style.progressWrapper}`}>
        <div
          style={{
            animationFillMode: "forwards",
            animationDuration: `${duration}ms`
          }}
          className={`animate-toast-progress h-full ${style.progress}`}
        />
      </div>
    </div>
  );
}
