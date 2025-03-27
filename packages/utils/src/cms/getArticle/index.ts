import { type CMS } from "@lwo/types";
import { getArticleList } from "@lwo/utils/cms";
import axios from "axios";

export async function getArticle(slug: string): Promise<CMS.Article | null> {
  try {
    const articles = await getArticleList();

    const article = articles.find(
      (s: CMS.Minimal<CMS.Article>) => s.slug === slug,
    );

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
