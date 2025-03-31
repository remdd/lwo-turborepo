import axios from "axios";
import { getArticleList } from "../";
import type { Article, ArticleInfo } from "../types";

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const articles = await getArticleList();

    const article = articles.find((s: ArticleInfo) => s.slug === slug);

    if (!article) {
      throw new Error(`No article found with slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/articles/${article.documentId}?populate=*`,
    );

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
