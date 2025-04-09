import axios from "axios";
import type { Page } from "../types";

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/pages?filters[slug][$eq]=${slug}&pLevel`,
    );

    if (!data || !data.data.length) {
      throw new Error(`No page data found for slug: ${slug}`);
    }

    return data.data[0];
  } catch (err) {
    console.warn(err);
    return null;
  }
}
