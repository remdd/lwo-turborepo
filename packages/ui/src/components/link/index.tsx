import NextLink, { type LinkProps } from "next/link";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<LinkProps> & {
  className?: string;
};

export function Link(props: Props) {
  const { children, ...otherProps } = props;

  return <NextLink {...otherProps}>{children}</NextLink>;
}
