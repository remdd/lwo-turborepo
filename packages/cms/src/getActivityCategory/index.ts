import axios from "axios";
import type { ActivityCategory } from "../types";

export async function getActivityCategory(
  code: string,
): Promise<ActivityCategory | null> {
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/activity-categories?pLevel&filters[activity_category_code][$eq]=${code}`,
    );

    if (!data || !data.data.length) {
      throw new Error(`No activity category found with code: ${code}`);
    }

    return data.data[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}
