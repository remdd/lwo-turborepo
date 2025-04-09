import { getArticleList } from "@lwo/cms";
import { CardSection, Heading, Text } from "@lwo/ui/components";
import { NewsArticleCta } from "components/news-article-cta";

export async function NewsCarousel() {
  const articles = await getArticleList({
    sortBy: "createdAt",
    sortOrder: "desc",
    page: 1,
    pageSize: 3,
  });

  return (
    <>
      <Heading level={2} className="mb-2">
        Latest news
      </Heading>
      <Text className="mb-4">Select an article to read more.</Text>

      <CardSection>
        {articles.map((article) => {
          return <NewsArticleCta key={article.documentId} article={article} />;
        })}
      </CardSection>
      <></>
    </>
  );
}
