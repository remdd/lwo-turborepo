import axios from "axios";
import type { ActivityCategory } from "../types";

export async function getActivityCategories(): Promise<ActivityCategory[]> {
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/activity-categories?pLevel`,
    );

    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
