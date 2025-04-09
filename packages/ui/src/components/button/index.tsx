import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
}>;

export function Button(props: Props) {
  const { onClick, isSelected, className = "", children } = props;

  return (
    <button
      className={cx(
        "rounded-lg border border-blue-200 bg-blue-100 px-2 py-1 text-blue-800 shadow-md transition-colors duration-300 hover:bg-blue-200 md:px-4",
        isSelected && "!border-blue-300 !bg-blue-200",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
