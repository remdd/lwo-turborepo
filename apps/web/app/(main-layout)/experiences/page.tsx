import { getActivityCategories, getPage } from "@lwo/cms";
import {
  ActivityCategoryCta,
  CardSection,
  Heading,
  PageArea,
} from "@lwo/ui/components";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function ExperiencesPage() {
  const page = await getPage(pages.EXPERIENCES.slug);
  const activityCategories = await getActivityCategories();

  if (!page) {
    return notFound();
  }

  return (
    <>
      <PageContent page={page}>
        <Heading>{page.title}</Heading>
      </PageContent>

      <PageArea>
        <CardSection>
          {activityCategories.map((activityCategory) => (
            <ActivityCategoryCta
              key={activityCategory.id}
              activityCategory={activityCategory}
            />
          ))}
        </CardSection>
      </PageArea>
    </>
  );
}
