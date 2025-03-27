import { type CMS } from "@lwo/types";
import axios from "axios";
import { getPageList } from "../getPageList";

export async function getPageData(slug: string): Promise<CMS.PageData | null> {
  try {
    const pages = await getPageList();

    console.log(pages);

    const page = pages.find((p: CMS.Minimal<CMS.Page>) => p.slug === slug);

    if (!page) {
      throw new Error(`No page found with slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/pages/${page.documentId}?populate=*`,
    );

    let single_type_data = null;
    if (data.data.single_type) {
      try {
        console.log("single_type: ", data.data.single_type);

        single_type_data = await axios.get(
          `${process.env.CMS_ROOT}/${data.data.single_type}?populate=*`,
        );
        console.log(single_type_data.data.data);
      } catch (err) {
        console.warn(err);
      }
    }

    return {
      page_data: data.data,
      single_type_data: single_type_data?.data.data || null,
    };
  } catch (err) {
    console.warn(err);
    return null;
  }
}
