import { getPage } from "@lwo/cms";
import { Heading } from "@lwo/ui/components";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function KeeperAcademyPage() {
  const page = await getPage(pages.KEEPER_ACADEMY.slug);

  if (!page) {
    return notFound();
  }

  return (
    <PageContent page={page}>
      <Heading>{page.title}</Heading>
    </PageContent>
  );
}
