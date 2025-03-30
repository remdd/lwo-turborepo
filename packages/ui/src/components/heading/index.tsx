import { title } from "@lwo/ui/fonts";
import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  level?: 1 | 2 | 3;
  className?: string;
}>;

export function Heading(props: Props) {
  const { level = 1, className = "", children } = props;

  switch (level) {
    case 1:
      return (
        <h1
          className={cx(
            className,
            title.className,
            "mb-8 mt-4 text-4xl md:mb-12 md:text-5xl",
          )}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={cx(
            className,
            title.className,
            "mb-6 mt-4 text-3xl text-blue-700 md:mb-10 md:text-4xl",
          )}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={cx(
            className,
            title.className,
            "mb-4 mt-4 text-2xl text-blue-500 md:mb-8 md:text-3xl",
          )}
        >
          {children}
        </h3>
      );
  }
}
