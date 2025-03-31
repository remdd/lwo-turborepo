import { getSingleType, type CMS } from "@lwo/cms";
import { Faq, Heading, PageArea } from "@lwo/ui/components";
import { singleTypes } from "cms/single-types";

export default async function FAQsPage() {
  const { faqs } = await getSingleType(singleTypes.FAQS_LIST.cmsId);

  return (
    <PageArea>
      <Heading>Frequently Asked Questions</Heading>

      {faqs.map((faq: CMS.Faq) => (
        <Faq faq={faq} key={faq.id} className="mb-4" />
      ))}
    </PageArea>
  );
}
