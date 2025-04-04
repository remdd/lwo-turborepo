import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function PageArea(props: Props) {
  const { children, className = "" } = props;

  return (
    <div
      className={cx("flex w-full max-w-screen-lg flex-col p-4 pt-8", className)}
    >
      {children}
    </div>
  );
}
