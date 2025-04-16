"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Heading } from "../heading";

type Props = PropsWithChildren<{
  title: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}>;

export function Modal(props: Props) {
  const { title, children, isOpen, onClose } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ display: "none", opacity: 0 }}
          animate={{ display: "flex", opacity: 1 }}
          exit={{ display: "none", opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center overflow-y-scroll bg-black/50 p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="w-full max-w-max sm:w-10/12 md:w-8/12"
          >
            <div className="z-20 w-full shadow-md">
              <div className="flex w-full flex-row justify-between rounded-t-lg bg-blue-300 px-4">
                <Heading level={3} className="mr-4 text-blue-800">
                  {title}
                </Heading>
                <button onClick={onClose}>
                  <FaRegCircleXmark size="2em" className="text-blue-800" />
                </button>
              </div>
              <div className="rounded-b-lg bg-white p-4">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
