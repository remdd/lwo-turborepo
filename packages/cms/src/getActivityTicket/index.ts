import axios from "axios";
import { ActivityTicket } from "src/types";

export async function getActivityTicket(
  code: string,
): Promise<ActivityTicket | null> {
  try {
    console.log("get activity ticket");
    console.log(code);

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/activity-tickets?filters[activity_ticket_code][$eq]=${code}&pLevel`,
    );

    console.log(data);

    if (!data || !data.data.length) {
      throw new Error(`No activity ticket found with code: ${code}`);
    }

    console.log(data.data);

    return data.data[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}
