import cx from "classnames";
import { type PropsWithChildren } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { TextLink } from "../";

type Props = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export function BackLink(props: Props) {
  const { href, children, className = "" } = props;

  return (
    <TextLink href={href} className={cx("group self-start", className)}>
      <FaArrowLeft className="duration-400 mr-1 inline-block shrink-0 transition-transform group-hover:-translate-x-1" />

      <span>{children}</span>
    </TextLink>
  );
}
