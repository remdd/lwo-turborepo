import { getActivityCategories, getPage } from "@lwo/cms";
import { ActivityCategoryCta, CardSection, Heading } from "@lwo/ui/components";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function ExperiencesPage() {
  const page = await getPage(pages.EXPERIENCES.slug);
  const activityCategories = await getActivityCategories();

  console.log(activityCategories);

  if (!page) {
    return notFound();
  }

  return (
    <PageContent page={page}>
      <Heading>{page.title}</Heading>
      <CardSection className="bg-gray-200">
        {activityCategories.map((activityCategory) => (
          <ActivityCategoryCta
            key={activityCategory.id}
            activityCategory={activityCategory}
          />
        ))}
      </CardSection>
    </PageContent>
  );
}
