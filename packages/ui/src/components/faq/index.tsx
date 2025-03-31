import { type CMS } from "@lwo/cms";
import { Accordion, Card, RichText } from "@lwo/ui/components";

type Props = {
  className?: string;
  faq: CMS.Faq;
};

export function Faq(props: Props) {
  const { className = "", faq } = props;

  return (
    <Card className={className}>
      <Accordion label={faq.question} startOpen={false}>
        <RichText richText={faq.answer} />
      </Accordion>
    </Card>
  );
}
