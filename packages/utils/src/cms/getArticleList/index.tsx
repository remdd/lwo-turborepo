import axios from "axios";
import { type CMS } from "@lwo/types";

export async function getArticleList(): Promise<CMS.ArticleMeta[]> {
  try {
    const slugs = await axios.get(
      `${process.env.CMS_ROOT}/articles?fields=slug`
    );

    return slugs.data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
