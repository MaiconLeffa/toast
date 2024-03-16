import React from "react";
import { styles } from "./styles";
import { ToastProps } from "./types";

export function ToastBody({ content, duration, type }: ToastProps) {
  const style = styles[type];

  return (
    <div className={`${style.container} rounded-s-md overflow-hidden`}>
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
