import React from "react";
import { toast } from "./Toast";

export function Demo() {
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
