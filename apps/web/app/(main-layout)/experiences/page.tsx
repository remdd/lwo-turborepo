import { getActivityCategories, getPage } from "@lwo/cms";
import {
  CardSection,
  CardWithImage,
  Heading,
  Link,
  PageArea,
  Text,
} from "@lwo/ui/components";
import { pages } from "cms/pages";
import { PageContent } from "components";
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
            const { id, activity_category_code, cover_image, name, summary } =
              activityCategory;

            return (
              <Link
                key={id}
                href={`${pages.EXPERIENCES.path}/${activity_category_code}`}
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
                  className="hover:border-lwo-yellow border-4 border-white transition-colors duration-300"
                >
                  <Heading level={3}>{name}</Heading>
                  <Text className="whitespace-pre-line">{summary}</Text>
                </CardWithImage>
              </Link>
            );
          })}
        </CardSection>
      </PageArea>
    </>
  );
}
