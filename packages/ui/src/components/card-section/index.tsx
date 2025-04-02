"use client";

import cx from "classnames";
import React, { type PropsWithChildren } from "react";
import Masonry from "react-masonry-css";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function CardSection(props: Props) {
  const { className = "", children } = props;

  const breakspointCols = {
    default: 3,
    640: 1, // tailwind sm = 640px
    1024: 2, // tailwind lg = 1024px
  };

  return (
    <Masonry
      className={cx("-ml-4 flex w-auto", className)}
      columnClassName="pl-4 bg-clip-padding"
      breakpointCols={breakspointCols}
    >
      {React.Children.map(children, (child) => (
        <div className="mb-4">{child}</div>
      ))}
    </Masonry>
  );
}
