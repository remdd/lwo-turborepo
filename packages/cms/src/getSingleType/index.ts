import axios from "axios";
import type { SingleTypeData } from "../types";

export async function getSingleType(
  cmsId: string,
): Promise<SingleTypeData | null> {
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
