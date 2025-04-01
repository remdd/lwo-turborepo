import { getGlobal, getPage } from "@lwo/cms";
import { ContactUs, FacebookFeed, Heading, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function ContactUsPage() {
  const page = await getPage(pages.CONTACT_US.slug);
  const { contact_email, contact_phone } = await getGlobal();

  if (!page) {
    return notFound();
  }

  return (
    <PageArea>
      <Heading>{page.title}</Heading>

      <div className="flex flex-col md:flex-row">
        <ContactUs
          className="basis-1/2"
          contact_email={contact_email}
          contact_phone={contact_phone}
        />
        <FacebookFeed className="basis-1/2" />
      </div>
    </PageArea>
  );
}
