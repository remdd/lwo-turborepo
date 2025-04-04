import cx from "classnames";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  theme?: "dark";
  className?: string;
  image: ReactNode;
}>;

export function CardWithImage(props: Props) {
  const { className = "", image, theme, children } = props;

  return (
    <article
      className={cx(
        className,
        "card inline-block flex w-full flex-col overflow-hidden rounded-lg shadow-md",
        theme && `theme-${theme}`,
      )}
    >
      <div className="g">{image}</div>
      <div className="p-4">{children}</div>
    </article>
  );
}
