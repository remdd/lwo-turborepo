import { Faq, PageContent, PageTitle } from "@lwo/ui/components";
import { getFaqs } from "@lwo/utils/cms";

export default async function FAQsPage() {
  const faqs = await getFaqs();

  return (
    <PageContent>
      <PageTitle>Frequently Asked Questions</PageTitle>

      {faqs.map((faq) => (
        <Faq faq={faq} key={faq.id} className="mb-4" />
      ))}
    </PageContent>
  );
}
