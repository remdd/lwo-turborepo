import { type CMS } from "@lwo/cms";
import { PageArea } from "@lwo/ui/components";
import { DynamicWebContent } from "components";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  page: CMS.Page;
}>;

export function PageContent(props: Props) {
  const {
    children,
    page: { content },
  } = props;

  return (
    <PageArea>
      {children}

      <DynamicWebContent content={content} />
    </PageArea>
  );
}
