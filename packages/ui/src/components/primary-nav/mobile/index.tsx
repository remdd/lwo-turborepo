import { Link } from "@lwo/ui/components";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import { FaBars, FaRegCircleXmark } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  // @TODO - give this a proper type
  sections: any;
};

export function MobileNav(props: Props) {
  const { isOpen, setIsOpen, sections } = props;

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
              {sections.map((section) =>
                section.page ? (
                  <Fragment key={section.name}>
                    {section.page && (
                      <li key={section.name}>
                        <Link
                          className={cx(
                            "hover:text-lwo-blue-400 bold block px-4 py-2 text-lg text-blue-700 transition-colors duration-200 hover:underline lg:py-4",
                          )}
                          href={section.page.path}
                        >
                          {section.page.title}
                        </Link>
                      </li>
                    )}
                  </Fragment>
                ) : (
                  <Fragment key={section.name}>
                    {section.pages.map((page) => (
                      <Link
                        className={cx(
                          "hover:text-lwo-blue-400 bold block px-4 py-2 text-lg text-blue-700 transition-colors duration-200 hover:underline lg:py-4",
                        )}
                        key={page.title}
                        href={page.path}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </Fragment>
                ),
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
