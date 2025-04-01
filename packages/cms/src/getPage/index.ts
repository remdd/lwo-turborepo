import axios from "axios";
import { getPageList } from "../getPageList";
import type { Page, PageInfo } from "../types";

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const pages = await getPageList();

    const page = pages.find((p: PageInfo) => p.slug === slug);

    if (!page) {
      throw new Error(`No page found with slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/pages/${page.documentId}?pLevel`,
    );

    if (!data) {
      throw new Error(`No page data found for page slug: ${slug}`);
    }

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
