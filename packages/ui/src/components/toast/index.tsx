import { type PropsWithChildren } from "react";
import { type ToastContentProps } from "react-toastify";
import "./toast.css";

import cx from "classnames";

type Props = Partial<ToastContentProps> &
  PropsWithChildren<{
    className?: string;
  }>;

export function Toast(props: Props) {
  const { className = "", children } = props;

  return <div className={cx(className)}>{children}</div>;
}
