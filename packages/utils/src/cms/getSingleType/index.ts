import { type CMS } from "@lwo/types";
import axios from "axios";

export async function getSingleType(
  cmsId: string,
): Promise<CMS.SingleTypeData | null> {
  console.log(cmsId);
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/${cmsId}?populate=*`,
    );

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
