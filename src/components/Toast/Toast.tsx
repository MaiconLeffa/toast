import React, { ReactNode } from "react";
import { mountToast } from "./mountToast";

interface Props {
  content: ReactNode | string;
}

export const toast = {
  success: (props: Props) => mountToast({ ...props, type: "success" }),
  warning: (props: Props) => mountToast({ ...props, type: "warning" }),
  error: (props: Props) => mountToast({ ...props, type: "error" }),
  custom: (props: Props) => mountToast({ ...props, type: "custom" })
};

export function Demo({}) {
  function success() {
    toast.success({
      content: <>I`m a success Toast</>
    });
  }

  function error() {
    toast.error({
      content: <>I`m a error Toast</>
    });
  }

  function warning() {
    toast.warning({
      content: <>I`m a warning Toast</>
    });
  }

  function custom() {
    toast.custom({
      content: <>I`m a custom Toast</>
    });
  }

  return (
    <div>
      <button className="" onClick={success}>
        success
      </button>
      <button className="ml-4" onClick={warning}>
        warning
      </button>
      <button className="ml-4" onClick={error}>
        error
      </button>
      <button className="ml-4" onClick={custom}>
        custom
      </button>
    </div>
  );
}
