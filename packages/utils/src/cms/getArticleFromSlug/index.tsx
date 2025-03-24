import axios from "axios";
import { type CMS } from "@lwo/types";
import { getArticleList } from "../getArticleList";

export async function getArticleFromSlug(
  slug: string
): Promise<CMS.Article | null> {
  try {
    const articles = await getArticleList();

    const article = articles.find((s: CMS.ArticleMeta) => s.slug === slug);

    if (!article) {
      throw new Error(`No documentId found for slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/articles/${article.documentId}?populate=*`
    );

    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
