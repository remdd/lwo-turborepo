import type { CMS } from "@lwo/cms";
import axios from "axios";

export async function getActivityTicket(
  code: string,
): Promise<CMS.ActivityTicket | null> {
  try {
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/activity-tickets?filters[activity_ticket_code][$eq]=${code}&pLevel`,
    );

    if (!data || !data.data.length) {
      throw new Error(`No activity ticket found with code: ${code}`);
    }

    return data.data[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}
