import { subtitle } from "@lwo/ui/fonts";
import cx from "classnames";
import NextImage from "next/image";
import NextLink from "next/link";

export function Header() {
  return (
    <header className="z-10 flex min-w-full justify-center bg-white">
      <div className="relative flex w-full max-w-screen-lg flex-row items-start justify-between p-4">
        {/* @TODO - home page href should really be passed as a prop */}
        <div className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[480px]">
          <NextLink href={"/"}>
            <NextImage
              src="/img/logo.png"
              alt="Lakeland Wildlife Oasis logo"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="100vw"
              priority
            />
          </NextLink>
        </div>
        <div className="hidden shrink-0 flex-col items-end sm:flex">
          <div className="mb-4 w-20 md:mb-8">
            <NextLink href="https://biaza.org.uk/" target="_blank">
              <NextImage
                src="/img/biaza.png"
                alt="BIAZA logo"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw"
                priority
              />
            </NextLink>
          </div>
          <div
            className={cx(
              subtitle.className,
              "text-lwo-orange rotate-[-3deg] text-xl md:text-2xl lg:text-3xl",
            )}
          >
            The little zoo with lots to do!
          </div>
        </div>
      </div>
    </header>
  );
}
