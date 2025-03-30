import { CMS } from "@lwo/types";
import {
  ContentBlock,
  Faq,
  GeneralAdmissionPrices,
  Heading,
  PageContent,
} from "@lwo/ui/components";
import { getPageData, getSingleType } from "@lwo/utils/cms";
import { contentBlocks } from "cms/content-blocks";
import { pages } from "cms/pages";
import { singleTypes } from "cms/single-types";
import { ticketCodes } from "cms/tickets";
import { notFound } from "next/navigation";

export default async function VisitorInfoPage() {
  const pageData = await getPageData(pages.VISITOR_INFO.slug);
  const { faqs: directions } = await getSingleType(
    singleTypes.DIRECTIONS.cmsId,
  );

  if (!pageData || !directions) {
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
      <Heading>{pageData.title}</Heading>

      {openingHours && (
        <section className="flex flex-col items-start md:flex-row">
          <ContentBlock
            block={openingHours}
            key={pageData.documentId}
            className="basis-5/12 md:mr-4"
          />
          <GeneralAdmissionPrices
            className="basis-7/12 md:ml-4"
            tickets={generalAdmission.tickets}
            ticketCodes={ticketCodes}
          />
        </section>
      )}

      {findingUs && (
        <section className="flex w-full flex-col items-start md:flex-row">
          <div className="relative mb-8 flex min-h-96 w-full items-center justify-center overflow-hidden border-2 border-gray-600 bg-white md:mr-4 md:basis-1/2">
            <iframe
              width="720"
              height="450"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48436.64188831274!2d-2.7710844296716486!3d54.19141231899572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c852d97d140b1%3A0xd7ad7f426e08e941!2sLakeland+Wildlife+Oasis!5e0!3m2!1sen!2suk!4v1553386833427"
            />
          </div>
          <ContentBlock
            block={findingUs}
            key={pageData.documentId}
            className="mb-8 md:ml-4 md:basis-1/2"
          />
        </section>
      )}

      <Heading level={2}>Directions</Heading>

      {directions.map((faq: CMS.Faq) => (
        <Faq faq={faq} key={faq.id} className="mb-4" />
      ))}

      {otherContentBlocks.map((block) => (
        <ContentBlock block={block} key={block.documentId} />
      ))}
    </PageContent>
  );
}
