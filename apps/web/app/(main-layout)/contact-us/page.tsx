import { getPage } from "@lwo/cms";
import { Heading, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ContactUsPage() {
  const page = await getPage(pages.CONTACT_US.slug);
  console.log(page);

  return (
    <PageArea>
      <Heading>Contact us page</Heading>

      <pre>{JSON.stringify(page, null, 2)}</pre>
    </PageArea>
  );
}
