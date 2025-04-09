"use client";

import { type CMS } from "@lwo/cms";
import { CardSection, Text } from "@lwo/ui/components";
import cx from "classnames";
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
    ...articleTags.map((tag) => ({ name: tag.name, code: tag.code })),
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
              <button
                className={cx(
                  "rounded-lg border border-blue-200 bg-blue-100 px-4 py-1 text-blue-800 transition-colors duration-300 hover:bg-blue-200",
                  selectedTag.code === code && "!border-blue-300 !bg-blue-200",
                )}
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
          return <NewsArticleCta key={article.documentId} article={article} />;
        })}
      </CardSection>
    </>
  );
}
