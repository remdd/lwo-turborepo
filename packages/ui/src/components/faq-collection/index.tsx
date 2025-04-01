import { type CMS } from "@lwo/cms";
import { Faq, Heading } from "@lwo/ui/components";

type Props = {
  faq_collection: CMS.FaqCollection;
};

export function FaqCollection(props: Props) {
  const {
    faq_collection: { faqs, title },
  } = props;

  return (
    <>
      {title && (
        <Heading level={2} className="mb-4">
          {title}
        </Heading>
      )}
      {faqs.map((faq) => (
        <Faq key={faq.id} className="mb-4" faq={faq} />
      ))}
    </>
  );
}
