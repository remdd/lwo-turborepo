import cx from "classnames";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function Card(props: Props) {
  const { className = "", children } = props;

  return (
    <article
      className={cx(
        className,
        "flex w-full flex-col rounded-lg bg-white p-4 shadow-md md:p-6 lg:px-8",
      )}
    >
      {children}
    </article>
  );
}
