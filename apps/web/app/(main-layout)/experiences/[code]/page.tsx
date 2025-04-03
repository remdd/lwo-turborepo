// export const dynamicParams = false;

import { getActivityCategories, getActivityCategory } from "@lwo/cms";

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

  return (
    <div>
      <h1 className="text-4xl text-blue-800">Code: {code}</h1>
      {JSON.stringify(activityCategory, null, 2)}
    </div>
  );
}
