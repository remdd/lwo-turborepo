import cx from "classnames";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: "primary" | "cancel";
  isSelected?: boolean;
  isDisabled?: boolean;
  className?: string;
}>;

export function Button(props: Props) {
  const {
    onClick,
    theme = "primary",
    isSelected,
    isDisabled,
    className = "",
    children,
  } = props;

  return (
    <button
      className={cx(
        "rounded-lg border px-2 py-1 shadow-md transition-colors duration-300 md:px-4",
        // Primary theme
        theme === "primary" &&
          "border-blue-200 bg-blue-100 text-blue-800 hover:bg-blue-200",
        theme === "primary" && isSelected && "border-blue-300 bg-blue-200",
        // Cancel theme
        theme === "cancel" &&
          "border-red-200 bg-red-100 text-red-800 hover:bg-red-200",
        theme === "cancel" && isSelected && "border-red-300 bg-red-200",
        // Disabled
        isDisabled &&
          "border-grey-300 bg-grey-100 cursor-not-allowed opacity-50",
        className,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
