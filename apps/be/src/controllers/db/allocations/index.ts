import { getAllocations as getAllocationsQuery, PrismaClient } from "@lwo/db";
import { logError } from "utils/index.js";

const prisma = new PrismaClient();

type Params = {
  activity_allocation_code?: string;
  date_from?: string;
  date_to?: string;
};

export async function getAllocations(params?: Params) {
  try {
    const { activity_allocation_code, date_from, date_to } = params || {};
    const bookings = await prisma.$queryRawTyped(
      getAllocationsQuery(
        activity_allocation_code as string,
        date_from as string,
        date_to as string,
      ),
    );
    await prisma.$disconnect();
    return bookings;
  } catch (error) {
    logError("Error fetching allocation", error);
    await prisma.$disconnect();
    return error;
  }
}
