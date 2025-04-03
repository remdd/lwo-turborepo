import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function Text(props: Props) {
  const { children, className = "" } = props;

  return <p className={cx("text-md lg:text-lg", className)}>{children}</p>;
}
