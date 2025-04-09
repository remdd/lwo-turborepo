import { type CMS } from "@lwo/cms";
import { Heading } from "@lwo/ui/components";
import { DynamicWebContent } from "components";

type Props = {
  article: CMS.Article;
};

export function ArticleContent(props: Props) {
  const {
    article: { title, content },
  } = props;

  return (
    <>
      <Heading level={1}>{title}</Heading>

      <DynamicWebContent content={content} />
    </>
  );
}
