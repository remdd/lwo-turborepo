import cx from "classnames";
import { PropsWithChildren } from "react";
import { Link, Text } from "../";

type Props = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export function TextLink(props: Props) {
  const { href, className = "", children } = props;

  return (
    <Link
      href={href}
      className={cx("underline hover:underline md:no-underline", className)}
    >
      <Text className="flex items-center text-left">{children}</Text>
    </Link>
  );
}
