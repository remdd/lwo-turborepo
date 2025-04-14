import axios from "axios";
import { ActivityTicket } from "src/types";

export async function getActivityTicket(
  code: string,
): Promise<ActivityTicket | null> {
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
