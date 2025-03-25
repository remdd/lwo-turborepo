import { type CMS } from "@lwo/types";
import axios from "axios";

export async function getPageList(): Promise<CMS.Page[]> {
  try {
    const slugs = await axios.get(
      `${process.env.CMS_ROOT}/articles?fields=slug`,
    );

    return slugs.data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
