import cx from "classnames";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  theme?: "dark";
  className?: string;
}>;

export function Card(props: Props) {
  const { className = "", theme, children } = props;

  return (
    <article
      className={cx(
        className,
        "card flex w-full flex-col rounded-lg p-4 shadow-md md:p-6 lg:px-8",
        theme && `theme-${theme}`,
      )}
    >
      {children}
    </article>
  );
}
