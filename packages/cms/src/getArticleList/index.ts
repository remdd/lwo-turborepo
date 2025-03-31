import axios from "axios";
import type { ArticleInfo } from "../types";

export async function getArticleList(): Promise<ArticleInfo[]> {
  try {
    const slugs = await axios.get(
      `${process.env.CMS_ROOT}/articles?fields=slug`,
    );

    return slugs.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
