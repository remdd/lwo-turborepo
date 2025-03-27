"use client";

import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type PropsWithChildren, type ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa6";

type Props = PropsWithChildren<{
  label: ReactNode;
  startOpen?: boolean;
  className?: string;
}>;

export function Accordion(props: Props) {
  const { label, children, startOpen = false, className = "" } = props;
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <article className={cx("flex w-full flex-col items-start", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-block flex flex-row items-center"
      >
        <FaAngleRight
          size="2em"
          className={cx(
            "mr-4 inline-block flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        />
        <h2 className="text-left text-xl md:text-2xl">{label}</h2>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            className="mt-8"
            initial={{ y: -8, opacity: 0 }}
            exit={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>{" "}
    </article>
  );
}
