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
