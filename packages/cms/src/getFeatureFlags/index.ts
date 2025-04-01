import axios from "axios";
import type { FeatureFlags } from "../types";

export async function getFeatureFlags(): Promise<FeatureFlags> {
  try {
    const { data } = await axios.get(`${process.env.CMS_ROOT}/feature-flags`);

    return data.data;
  } catch (err) {
    console.error(err);
    return {} as FeatureFlags;
  }
}
