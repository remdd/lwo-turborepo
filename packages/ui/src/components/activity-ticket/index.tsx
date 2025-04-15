"use client";

import cx from "classnames";
import { PropsWithChildren } from "react";
import { Text } from "../";

type Props = PropsWithChildren<{
  price: number;
  className?: string;
  onClick?: () => void;
}>;

export function ActivityTicket(props: Props) {
  const { children, className = "", price, onClick } = props;

  return (
    <button
      className={cx(
        "flex w-full items-center justify-between rounded-lg border-2 border-blue-500 bg-blue-100 px-4 py-2 text-left shadow-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 [&:not(:last-of-type)]:mb-4",
        className,
      )}
      onClick={onClick}
    >
      <Text>{children}</Text>
      <span className="ml-4 text-2xl font-bold !text-black">£{price}</span>
    </button>
  );
}
