import { getBookings as getBookingsQuery, PrismaClient } from "@lwo/db";
import { logError } from "utils/index.js";

const prisma = new PrismaClient();

type Params = {
  ticket_code?: string;
  date_from?: string;
  date_to?: string;
  status?: string;
  activity_allocation_code?: string;
};

export async function getBookings(params?: Params) {
  try {
    const {
      ticket_code,
      date_from,
      date_to,
      status,
      activity_allocation_code,
    } = params || {};
    const bookings = await prisma.$queryRawTyped(
      getBookingsQuery(
        ticket_code as string,
        date_from as string,
        date_to as string,
        status as string,
        activity_allocation_code as string,
      ),
    );
    await prisma.$disconnect();
    return bookings;
  } catch (error) {
    logError("Error fetching bookings", error);
    await prisma.$disconnect();
    return error;
  }
}
