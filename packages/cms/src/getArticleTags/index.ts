import axios from "axios";
import type { ArticleTag } from "../types";

export async function getArticleTags(): Promise<ArticleTag[]> {
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/article-tags?pLevel`,
    );

    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
