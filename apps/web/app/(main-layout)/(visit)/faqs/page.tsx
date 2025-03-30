import { type CMS } from "@lwo/types";
import { Faq, Heading, PageContent } from "@lwo/ui/components";
import { getSingleType } from "@lwo/utils/cms";
import { singleTypes } from "cms/single-types";

export default async function FAQsPage() {
  const { faqs } = await getSingleType(singleTypes.FAQS_LIST.cmsId);

  return (
    <PageContent>
      <Heading>Frequently Asked Questions</Heading>

      {faqs.map((faq: CMS.Faq) => (
        <Faq faq={faq} key={faq.id} className="mb-4" />
      ))}
    </PageContent>
  );
}
