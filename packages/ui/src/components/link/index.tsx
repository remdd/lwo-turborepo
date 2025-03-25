import cx from "classnames";
import NextLink, { type LinkProps } from "next/link";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<LinkProps> & {
  className?: string;
};

export function Link(props: Props) {
  const { className = "", children, ...otherProps } = props;

  return (
    <NextLink className={cx("text-lwo-orange", className)} {...otherProps}>
      {children}
    </NextLink>
  );
}
