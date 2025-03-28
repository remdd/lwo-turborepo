import { type CMS } from "@lwo/types";
import axios from "axios";

export async function getSingleType(
  singleTypeSlug: string,
): Promise<CMS.SingleTypeData | null> {
  console.log(singleTypeSlug);
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/${singleTypeSlug}?populate=*`,
    );

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
