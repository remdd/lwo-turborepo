"use client";

import { type CMS } from "@lwo/cms";
import { Button, CardSection, Text } from "@lwo/ui/components";
import { NewsArticleCta } from "components";
import { useState } from "react";

type Props = {
  articles: CMS.Article[];
  articleTags: CMS.ArticleTag[];
};

type Tag = {
  code: string | null;
  name: string;
};

export function NewsArticles(props: Props) {
  const { articles, articleTags } = props;
  const allArticlesTag = {
    code: null,
    name: "All articles",
  };
  const tags: Tag[] = [
    allArticlesTag,
    ...articleTags
      .filter((tag) =>
        articles.some((a) => a.article_tags.some((t) => t.code === tag.code)),
      )
      .map((tag) => ({ name: tag.name, code: tag.code })),
  ];
  const [selectedTag, setSelectedTag] = useState<Tag>(allArticlesTag);

  const filteredArticles = articles.filter((article) => {
    return (
      !selectedTag.code ||
      article.article_tags.some((tag) => tag.code === selectedTag.code)
    );
  });

  return (
    <>
      <ul className="mb-4">
        <li className="mr-2 inline-block">
          <Text>Filter news articles by tag:</Text>
        </li>
        {tags.map((tag) => {
          const { code, name } = tag;

          return (
            <li key={code} className="m-1 inline-block">
              <Button
                onClick={() => setSelectedTag(tag)}
                isSelected={selectedTag.code === code}
              >
                <Text>{name}</Text>
              </Button>
            </li>
          );
        })}
      </ul>

      <CardSection>
        {filteredArticles.map((article) => {
          return <NewsArticleCta key={article.documentId} article={article} />;
        })}
      </CardSection>
    </>
  );
}
