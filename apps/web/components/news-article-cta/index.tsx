import { type CMS } from "@lwo/cms";
import { Card, CardWithImage, Heading, Link, Text } from "@lwo/ui/components";
import { formatDate } from "@lwo/utils";
import { pages } from "cms/pages";
import NextImage from "next/image";

type Props = {
  article: CMS.Article;
};

export function NewsArticleCta(props: Props) {
  const {
    article: { id, slug, cover_image, title, summary, publishedAt },
  } = props;

  return (
    <Link key={id} href={`${pages.NEWS.path}/${slug}`}>
      {cover_image ? (
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
          <Heading level={3}>{title}</Heading>
          <Text>{summary}</Text>
        </CardWithImage>
      ) : (
        <Card
          className="hover:border-lwo-yellow border-4 border-white transition-colors duration-300"
          key={id}
        >
          <Heading level={3}>{title}</Heading>
          <Text className="mb-2">{summary}</Text>
          <p className="text-right text-sm italic text-blue-600">
            {formatDate(publishedAt)}
          </p>
        </Card>
      )}
    </Link>
  );
}
