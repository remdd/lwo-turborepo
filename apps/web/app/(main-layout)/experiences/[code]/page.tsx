// export const dynamicParams = false;

import { getActivityCategories, getActivityCategory } from "@lwo/cms";
import { Card, Heading, PageArea, RichText } from "@lwo/ui/components";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const activityCategories = await getActivityCategories();

  return activityCategories.map((category) => ({
    code: category.code,
  }));
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;
  const activityCategory = await getActivityCategory(code);

  console.log(activityCategory);

  if (!activityCategory) {
    return notFound();
  }

  return (
    <PageArea>
      <Heading level={1}>{activityCategory.name}</Heading>

      <Card>
        <RichText richText={activityCategory.description} />
      </Card>
    </PageArea>
  );
}
