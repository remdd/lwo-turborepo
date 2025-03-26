"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function Template(props: Props) {
  const { children } = props;

  return (
    <div className="w-full max-w-screen-lg p-4">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
