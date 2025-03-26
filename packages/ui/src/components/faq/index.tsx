"use client";

import { type CMS } from "@lwo/types";
import { Card, RichText } from "@lwo/ui/components";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

type Props = {
  className?: string;
  faq: CMS.Faq;
};

export function Faq(props: Props) {
  const { className = "", faq } = props;
  const [isOpen, setIsOpen] = useState(false);

  console.log(faq);

  return (
    <Card className={className}>
      <div className="flex w-full flex-row items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-block flex flex-row"
        >
          <FaAngleRight
            size="2em"
            className={cx(
              "mr-4 inline-block transition-transform duration-200",
              isOpen && "rotate-90",
            )}
          />
          <h2 className="text-3xl">{faq.question}</h2>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={faq.id}
            className="mt-4"
            initial={{ y: -8, opacity: 0 }}
            exit={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <RichText richText={faq.answer} />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
