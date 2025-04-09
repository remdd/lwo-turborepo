"use client";

import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { type PropsWithChildren, isValidElement } from "react";
import flattenChildren from "react-keyed-flatten-children";
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

  const filteredChildren = flattenChildren(children).filter(Boolean);

  // @TODO - horrible but seems to do what I want it to
  const key = String(
    filteredChildren.reduce((acc, child) => {
      if (isValidElement(child) && typeof child.key === "string") {
        return acc + child.key;
      }
      return acc;
    }, ""),
  );

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <Masonry
          className={cx("-ml-4 flex w-auto", className)}
          columnClassName="pl-4 bg-clip-padding"
          breakpointCols={breakspointCols}
        >
          {filteredChildren.map((child, idx) => (
            <div className="mb-4" key={idx}>
              {child}
            </div>
          ))}
        </Masonry>
      </motion.div>
    </AnimatePresence>
  );
}
