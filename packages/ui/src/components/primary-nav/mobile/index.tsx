"use client";

import { Link } from "@lwo/ui/components";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { FaBars, FaRegCircleXmark } from "react-icons/fa6";
import type { Nav, Page, Section } from "../types";

type Props = {
  nav: Nav;
  basketPage: Page;
  basketItems: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function MobileNav(props: Props) {
  const { nav, basketPage, basketItems, isOpen, setIsOpen } = props;

  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedSection(null);
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute right-4 top-6 z-50 text-blue-700 md:hidden"
      >
        <FaBars size="2em" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ display: "none", x: "100%" }}
            animate={{ display: "flex", x: 0 }}
            exit={{ display: "none", x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-stretch justify-start overflow-y-scroll bg-white p-4 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="fixed right-4 top-6 text-blue-700"
            >
              <FaRegCircleXmark size="2em" />
            </button>

            <ul className="mt-8">
              {nav.map((section) => (
                <Fragment key={section.page.title}>
                  <li>
                    {section.pages ? (
                      <button
                        className={cx(
                          "hover:text-lwo-blue-400 bold block w-full px-4 py-1 text-left text-lg text-blue-700 transition-colors duration-200 hover:underline lg:py-2",
                        )}
                        onClick={() => setSelectedSection(section)}
                      >
                        {section.page.title}
                      </button>
                    ) : (
                      <Link
                        className={cx(
                          "hover:text-lwo-blue-400 bold block px-4 py-1 text-left text-lg text-blue-700 transition-colors duration-200 hover:underline lg:py-2",
                        )}
                        href={section.page.path}
                      >
                        {section.page.title}
                      </Link>
                    )}
                  </li>
                  <AnimatePresence>
                    {selectedSection === section &&
                      section.pages?.map((page) => (
                        <motion.li
                          key={page.title}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ease: "easeInOut", duration: 0.2 }}
                        >
                          <Link
                            className={cx(
                              "hover:text-lwo-blue-400 bold ml-4 block px-4 py-1 text-lg text-blue-500 transition-colors duration-200 hover:underline lg:py-2",
                            )}
                            href={page.path}
                          >
                            {page.title}
                          </Link>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </Fragment>
              ))}
              <li>
                <Link
                  className={cx(
                    "hover:text-lwo-blue-400 bold block px-4 py-1 text-left text-lg text-blue-700 transition-colors duration-200 hover:underline lg:py-2",
                  )}
                  href={basketPage.path}
                >
                  {basketPage.title} ({basketItems} item
                  {basketItems > 1 ? "s" : ""})
                </Link>
              </li>{" "}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
