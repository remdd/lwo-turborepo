import cx from "classnames";
import type { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
  leftBasis?: number;
  className?: string;
};

export function ContentRow(props: Props) {
  const { left, right, leftBasis = 6, className = "" } = props;

  if (leftBasis < 1 || leftBasis > 11) {
    console.warn("leftBasis must be between 1 and 11, defaulting to 6");
  }

  return (
    <section
      className={cx(
        "flex flex-col items-center md:w-full md:flex-row md:items-start",
        className,
      )}
    >
      <div
        className={cx(`md:w-${leftBasis}/12`, "mb-8 w-full max-w-fit md:mr-4")}
      >
        {left}
      </div>
      <div
        className={cx(
          `md:w-${12 - leftBasis}/12`,
          "mb-8 w-full max-w-fit md:ml-4",
        )}
      >
        {right}
      </div>
    </section>
  );
}
