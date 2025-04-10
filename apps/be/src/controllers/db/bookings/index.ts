import { getBookings as getBookingsQuery, PrismaClient } from "@lwo/db";
import { logError } from "utils/index.js";

const prisma = new PrismaClient();

type Params = {
  ticket_code?: string;
  date_from?: string;
  date_to?: string;
};

export async function getBookings(params?: Params) {
  try {
    console.log(params);
    const {
      ticket_code = null,
      date_from = null,
      date_to = null,
    } = params || {};

    const bookings = await prisma.$queryRawTyped(
      getBookingsQuery(
        ticket_code as string,
        new Date(date_from as string),
        new Date(date_to as string),
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
