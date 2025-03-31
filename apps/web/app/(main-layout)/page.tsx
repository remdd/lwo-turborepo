import { getPage, getSingleType } from "@lwo/cms";
import { HeroCarousel } from "@lwo/ui/components";
import { PageContent } from "cms/components/page-content";
import { pages } from "cms/pages";
import { singleTypes } from "cms/single-types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default async function Page() {
  const page = await getPage(pages.HOME.slug);
  const heroCarousel = await getSingleType(singleTypes.HERO_CAROUSEL.cmsId);

  console.log(page);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <HeroCarousel data={heroCarousel} />
      <PageContent page={page} />
    </>
  );
}
