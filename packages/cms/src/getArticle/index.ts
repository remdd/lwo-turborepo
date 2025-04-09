import axios from "axios";
import type { Article } from "../types";

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/articles?filters[slug][$eq]=${slug}&pLevel`,
    );

    if (!data || !data.data.length) {
      throw new Error(`No article data found for slug: ${slug}`);
    }

    return data.data[0];
  } catch (err) {
    console.warn(err);
    return null;
  }
}
