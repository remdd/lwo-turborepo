"use client";

import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export function PageTransition(props: Props) {
  const { children } = props;

  return (
    <div className="w-full max-w-screen-lg">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
        className="mb-16"
      >
        {children}
      </motion.div>
    </div>
  );
}
