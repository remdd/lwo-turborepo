import { title } from "@lwo/ui/fonts";
import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function PageTitle(props: Props) {
  const { className = "", children } = props;

  return (
    <h1
      className={cx(
        className,
        title.className,
        "mb-4 text-3xl sm:mb-6 sm:text-4xl lg:mb-8 lg:text-5xl",
      )}
    >
      {children}
    </h1>
  );
}
