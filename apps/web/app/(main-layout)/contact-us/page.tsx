import { PageContent, PageTitle } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { pages } from "cms/pages";

export default async function ContactUsPage() {
  const data = await getPageData(pages.CONTACT_US.slug);
  console.log(data);

  return (
    <PageContent>
      <PageTitle>Contact us page</PageTitle>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </PageContent>
  );
}
