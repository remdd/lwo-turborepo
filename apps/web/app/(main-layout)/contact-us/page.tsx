import { Heading, PageContent } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { pages } from "cms/pages";

export default async function ContactUsPage() {
  const data = await getPageData(pages.CONTACT_US.slug);
  console.log(data);

  return (
    <PageContent>
      <Heading>Contact us page</Heading>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </PageContent>
  );
}
