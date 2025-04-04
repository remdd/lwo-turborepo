import { getActivityCategories, getPage } from "@lwo/cms";
import {
  CardSection,
  CardWithImage,
  Heading,
  Link,
  PageArea,
  Text,
} from "@lwo/ui/components";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import NextImage from "next/image";
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

      <PageArea className="pt-0">
        <CardSection>
          {activityCategories.map((activityCategory) => {
            const { cover_image } = activityCategory;

            console.log(activityCategory);

            return (
              <Link
                key={activityCategory.id}
                href={`${pages.EXPERIENCES.path}/${activityCategory.code}`}
              >
                <CardWithImage
                  image={
                    <div className="relative h-64 w-full">
                      <NextImage
                        src={cover_image.url}
                        alt={cover_image.alternativeText || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  }
                  className="hover:border-lwo-orange border-4 border-white"
                >
                  <Heading level={3}>{activityCategory.name}</Heading>
                  <Text className="whitespace-pre-line">
                    {activityCategory.summary}
                  </Text>
                </CardWithImage>
              </Link>
            );
          })}
        </CardSection>
      </PageArea>
    </>
  );
}
