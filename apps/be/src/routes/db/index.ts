import { getAllocations, getBookings } from "controllers/db/index.js";
import express from "express";
import { logError } from "utils/index.js";

export const dbRouter = express.Router();

dbRouter.get("/bookings", async (req, res, next) => {
  try {
    const data = await getBookings(req.query);
    res.status(200).json(data);
  } catch (error) {
    logError("Failed to get bookings data", error);
    res.status(500).json({
      error: "Failed to get bookings data",
    });
  }
});

dbRouter.get("/bookings/allocations", async (req, res, next) => {
  try {
    const data = await getAllocations(req.query);
    res.status(200).json(data);
  } catch (error) {
    logError("Failed to get allocation data", error);
    res.status(500).json({
      error: "Failed to get allocation data",
    });
  }
});

// bookingsRouter.post("/", async (req, res, next) => {
//   try {
//     await db.bookings.create({ message: "test" });
//     res.status(200).json({
//       message: "DB record saved successfully",
//     });
//   } catch (error) {
//     logError("Failed to save DB record", error);
//     res.status(500).json({
//       error: "Failed to save DB record",
//     });
//   }
// });
