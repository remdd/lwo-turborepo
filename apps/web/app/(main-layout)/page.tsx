import { ContentBlock, HeroCarousel, PageContent } from "@lwo/ui/components";
import { getPageData, getSingleType } from "@lwo/utils/cms";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "routes";
import { singleTypeSlugs } from "single-types";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default async function Page() {
  const pageData = await getPageData(pages.HOME.slug);
  const heroCarousel = await getSingleType(singleTypeSlugs.HERO_CAROUSEL);

  if (!pageData) {
    return notFound();
  }

  const { content_blocks } = pageData;

  return (
    <>
      <HeroCarousel data={heroCarousel} />
      <PageContent>
        {content_blocks.map((block) => (
          <ContentBlock richText={block.body} key={block.documentId} />
        ))}
      </PageContent>
    </>
  );
}
