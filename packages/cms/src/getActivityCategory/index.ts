import axios from "axios";
import type { ActivityCategory } from "../types";

export async function getActivityCategory(
  code: string,
): Promise<ActivityCategory | null> {
  try {
    console.log("get activity category");
    console.log(code);

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/activity-categories?filters[activity_category_code][$eq]=${code}&pLevel`,
    );

    console.log(data);

    if (!data || !data.data.length) {
      throw new Error(`No activity category found with code: ${code}`);
    }

    console.log(data.data);

    return data.data[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}
