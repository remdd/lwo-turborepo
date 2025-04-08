"use client";

import { type CMS } from "@lwo/cms";
import {
  Card,
  CardSection,
  CardWithImage,
  Heading,
  Link,
  Text,
} from "@lwo/ui/components";
import { pages } from "cms/pages";
import NextImage from "next/image";
import { useState } from "react";

type Props = {
  articles: CMS.Article[];
  articleTags: CMS.ArticleTag[];
};

export function NewsArticles(props: Props) {
  const { articles, articleTags } = props;
  const [selectedTag, setSelectedTag] = useState<CMS.ArticleTag | null>(null);

  const filteredArticles = articles.filter((article) => {
    if (!selectedTag) return true; // Show all articles if no tag is selected
    return article.article_tags.some((tag) => tag.code === selectedTag.code);
  });

  console.log(articleTags);

  return (
    <>
      <ul>
        <li>HELLO</li>
        {articleTags.map((tag) => {
          const { code, name } = tag;

          return (
            <li key={code} className="mb-4 mr-4 inline-block">
              <button
                className="bg-blue-200 hover:underline"
                onClick={() => setSelectedTag(tag)}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>

      <CardSection>
        {filteredArticles.map((article) => {
          const { id, slug, title, summary, cover_image } = article;

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
                  <Text>{summary}</Text>
                </Card>
              )}
            </Link>
          );
        })}
      </CardSection>
    </>
  );
}
