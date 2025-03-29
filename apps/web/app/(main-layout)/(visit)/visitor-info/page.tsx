import {
  ContentBlock,
  GeneralAdmissionPrices,
  PageContent,
  PageTitle,
} from "@lwo/ui/components";
import { getPageData, getSingleType } from "@lwo/utils/cms";
import { contentBlocks } from "cms/content-blocks";
import { pages } from "cms/pages";
import { singleTypes } from "cms/single-types";
import { ticketCodes } from "cms/tickets";
import { notFound } from "next/navigation";

export default async function VisitorInfoPage() {
  const pageData = await getPageData(pages.VISITOR_INFO.slug);

  if (!pageData) {
    return notFound();
  }

  // Page content blocks
  const { content_blocks } = pageData;
  const pageContentBlocks = [
    contentBlocks.OPENING_TIMES,
    contentBlocks.FINDING_US,
  ];
  const openingHours = content_blocks.find(
    (block) => block.slug === contentBlocks.OPENING_TIMES.slug,
  );
  const findingUs = content_blocks.find(
    (block) => block.slug === contentBlocks.FINDING_US.slug,
  );
  const otherContentBlocks = content_blocks.filter((block) => {
    return !pageContentBlocks.some((p) => p.slug === block.slug);
  });

  // General admission prices
  const generalAdmission = await getSingleType(
    singleTypes.GENERAL_ADMISSION.cmsId,
  );

  return (
    <PageContent>
      <PageTitle>{pageData.title}</PageTitle>

      {openingHours && (
        <section className="mb-4 flex flex-row items-start">
          <ContentBlock
            block={openingHours}
            key={pageData.documentId}
            className="mr-4 basis-5/12"
          />
          <GeneralAdmissionPrices
            className="ml-4 basis-7/12"
            tickets={generalAdmission.tickets}
            ticketCodes={ticketCodes}
          />
        </section>
      )}

      {findingUs && (
        <section className="w-1/2">
          <ContentBlock block={findingUs} key={pageData.documentId} />
        </section>
      )}

      {otherContentBlocks.map((block) => (
        <ContentBlock block={block} key={block.documentId} />
      ))}
    </PageContent>
  );
}
