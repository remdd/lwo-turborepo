"use client";

import { type CMS } from "@lwo/cms";
import cx from "classnames";
import NextImage from "next/image";
import { useEffect, useState } from "react";

type Props = {
  data: CMS.HeroCarousel;
};

export function HeroCarousel(props: Props) {
  const {
    data: { images },
  } = props;

  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedImage((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <div className="relative m-0 flex h-[16rem] w-full items-stretch bg-blue-800 p-0 sm:h-[20rem] md:h-[24rem] lg:h-[28rem]">
      {images.map((image, index) => {
        const { documentId, url, alternativeText } = image;

        return (
          <div
            className={cx(
              "absolute flex h-full w-full justify-center overflow-hidden duration-300 ease-in-out",
              index === selectedImage ? "opacity-100" : "opacity-0",
            )}
            key={documentId}
          >
            <div className="relative h-full w-full max-w-screen-2xl">
              <NextImage
                src={url}
                alt={alternativeText || ""}
                fill
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
