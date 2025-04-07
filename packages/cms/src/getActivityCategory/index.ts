import axios from "axios";
import { getActivityCategories } from "../";
import type { ActivityCategory } from "../types";

export async function getActivityCategory(
  code: string,
): Promise<ActivityCategory | null> {
  try {
    const activityCategories = await getActivityCategories();

    console.log(activityCategories);

    const activityCategory = activityCategories.find(
      (a: ActivityCategory) => a.code === code,
    );

    console.log(activityCategory);

    if (!activityCategory) {
      throw new Error(`No activity category found with code: ${code}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/activity-categories/${activityCategory.documentId}?pLevel`,
    );

    console.log(data.data);

    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
